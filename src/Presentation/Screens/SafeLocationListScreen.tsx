import { useEffect, useState } from 'react'
import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import { Button, List } from 'react-native-paper'
import { useSelector } from 'react-redux'
import { RootState } from '../../Infrastructure/Store/store'
import { SafeLocation } from '../../Types/Models/SafeLocation'
import SafeLocationItem from '../Components/SafeLocation/SafeLocationItem'
import Icon from '@expo/vector-icons/MaterialIcons';


function SafeLocationListScreen(): JSX.Element {

    const safeLocations = useSelector((state: RootState) => state.SafeLocation.value)
    const [selectedList, setSelectedList] = useState({ police_station: true, hospital: true });
    const [filteredSafeLocations, setFilteredSafeLocations] = useState<SafeLocation[]>([]);

    function toggleSelection(listType: keyof typeof selectedList) {
        setSelectedList(prev => ({ ...prev, [listType]: !(prev[listType]) }))
    }

    useEffect(
        () => {
            let selectedKeys: SafeLocation['type'] = Object.keys(selectedList).filter(x => selectedList[x])
            setFilteredSafeLocations(safeLocations.safeLocations.filter(x => selectedKeys.includes(x.type)))
            console.log(safeLocations.safeLocations.filter(x => selectedKeys.includes(x.type)))
        },
        [safeLocations, selectedList]
    );
    return (
        <View style={{ flex: 1}}>

            {safeLocations.isLoading ? <ActivityIndicator size="large" /> :
                <View style={{ padding: 5 }}>
                    <Text style={{ textAlign: 'center', textAlignVertical: 'center' }}>
                        <Text style={{ fontSize: 15 }}>Safe Locations Found : </Text>
                        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>    {safeLocations.safeLocations.length}</Text>
                    </Text>
                    <View style={{ flexDirection: 'row', alignContent: 'space-around', justifyContent: 'center' }}>
                        <Button onPress={() => toggleSelection('police_station')} style={{ borderRadius: 50, margin: 10, backgroundColor: (selectedList.police_station ? '#6200ee' : 'lightgray') }} mode='contained' icon='police-badge' ><Text style={{ fontSize: 10 }}>Police Stations : {safeLocations.safeLocations.filter(x => x.type === 'police_station').length}</Text></Button>
                        <Button onPress={() => toggleSelection('hospital')} style={{borderRadius: 50, margin: 10, backgroundColor: (selectedList.hospital ? '#6200ee' : 'lightgray') }} mode='contained' icon='hospital'><Text style={{ fontSize: 10 }}>Hospitals : {safeLocations.safeLocations.filter(x => x.type === 'hospital').length}</Text></Button>
                    </View>
                </View>}
            <View style={{ backgroundColor: '#e3e1e1', marginTop: 10, marginHorizontal: 2, borderWidth: 0.2, flex: 1 }}>
                <List.AccordionGroup>

                    {safeLocations.error ? <View style={{flex: 1, justifyContent: 'center'}}><Text style={{fontSize: 30, alignSelf: 'center' }}>{safeLocations.error}</Text></View>:
                        <FlatList
                            data={filteredSafeLocations}
                            renderItem={({ item }) => <SafeLocationItem {...item}></SafeLocationItem>}
                            keyExtractor={(item, index) => item.distance.toString()}
                        />
                    }
                </List.AccordionGroup>
            </View>
        </View>
    )
}

export default SafeLocationListScreen