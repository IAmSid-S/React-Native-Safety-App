import React, { useContext, useEffect, useRef, useState } from 'react'
import { Text, View, ToastAndroid, Alert } from 'react-native'
import AppContainer from '../Components/AppContainer'
import * as Location from 'expo-location';

import MapView, { Marker } from 'react-native-maps'
import { Button, TextInput } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { searchSafeLocationFromLatLong, searchSafeLocationFromPinCode } from '../../Infrastructure/Store/Slices/SafeLocationsSlice';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppStackParamList } from '../Utils/AppNavigator';
import { NavigationContext, useNavigation } from '@react-navigation/native';

type HomeScreenProps = NativeStackScreenProps<AppStackParamList, 'Home'>

function HomeScreen(props: HomeScreenProps) {
  const [pinCode, setPincode] = useState('');
  const [location, setLocation] = useState<Location.LocationObject>()
  const [locationLoading, setLocationLoading] = useState(false);
  const [locationLoadingError, setLocationLoadingError] = useState('');
  const dispatch = useDispatch();
  const navigation = useContext(NavigationContext)

  // useEffect(() => {
  //   (async () => {
  //     console.log('Finding location')
  //     let { status } = await Location.requestForegroundPermissionsAsync();
  //     if (status === 'granted') {
  //       let currentLoc = await Location.getCurrentPositionAsync({});
  //       console.log(currentLoc)
  //       setLocation(currentLoc);
  //     }
  //   })();

  // }, [setLocation])

  async function getLocation(): Promise<Location.LocationObject | null> {
    setLocationLoading(true)
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status === 'granted') {
      let currentLoc = await Location.getCurrentPositionAsync({});
      setLocation(currentLoc);
      setLocationLoading(false)
      return currentLoc;
    }
    else{
      setLocationLoading(false);
      return null;
    }
  }

  const GetLocationByLatLong = () => {
    getLocation().then(res => {
      if(res){
        setLocationLoadingError('');
        const action = searchSafeLocationFromLatLong({lat: res?.coords.latitude, long: res?.coords.longitude});
        console.log(action)
        console.log(action)
        dispatch(action)
        props.navigation.navigate('SafeLocationList');
      }
      else{
        setLocationLoadingError('Unable to access your location.')
      }
    })

  }

  function GetLocationByPinCode(){
    dispatch(searchSafeLocationFromPinCode({pinCode}))
    props.navigation.navigate('SafeLocationList');
  }

  return (
    <AppContainer>
      <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center' }}>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignContent: 'center', margin: 7, borderBottomColor: 'gray', borderBottomWidth: 1 }}>
          <TextInput style={{ flex: 0.7, alignSelf: 'center', justifyContent: 'center', height: 50 }} label='PinCode' autoCapitalize='characters' value={pinCode} onChangeText={text => setPincode(text)} />
          <Button disabled={pinCode.trim().length < 5} style={{ flex: 0.3, alignSelf: 'center', justifyContent: 'center', marginLeft: 5, height: 50 }} icon='shield-search' mode='contained' onPress={GetLocationByPinCode}>Go</Button>
        </View>
        <View style={{ flex: 1, height: '50%', alignContent: 'center', justifyContent: 'center', margin: 7 }}>
          <Button style={{ alignSelf: 'center', justifyContent: 'center', marginLeft: 5, width: '50%', height: 50 }} icon='map-marker-radius' mode='contained' loading={locationLoading} disabled={locationLoading}  onPress={GetLocationByLatLong}>What's near me?</Button>
          <Text style={{color: 'red'}}>{locationLoadingError}</Text>
        </View>
      </View>
    </AppContainer>
  )
}

export default HomeScreen