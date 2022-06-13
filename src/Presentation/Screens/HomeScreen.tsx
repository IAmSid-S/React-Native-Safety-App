import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import AppContainer from '../Components/AppContainer'
import * as Location from 'expo-location';

import MapView, {Marker} from 'react-native-maps'

function HomeScreen() {

  const [location, setLocation] = useState<Location.LocationObject>()

  useEffect(() => {
    (async () => {
      console.log('Finding location')
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status === 'granted') {
        let currentLoc = await Location.getCurrentPositionAsync({});
        console.log(currentLoc)
        setLocation(currentLoc);
      }
    })();

  }, [setLocation])


  return (
    <AppContainer>
      <View>
        <Text>Welcome to the app!!</Text>
        <Text>Location: {JSON.stringify(location?.coords)}</Text>
        {location?.coords ? 
        <MapView initialRegion={
          {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.02,
            longitudeDelta: 0.05
          }
        } style={{width: 500, height: 500}}>
          <Marker coordinate={{latitude: location.coords.latitude, longitude: location.coords.longitude}} title="Sid" description='Greatness is here' pinColor='blue'/>
        </MapView>
        : null}
      </View>
    </AppContainer>
  )
}

export default HomeScreen