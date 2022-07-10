import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import { List } from 'react-native-paper'
import { useSelector } from 'react-redux'
import { RootState } from '../../Infrastructure/Store/store'
import SafeLocationItem from '../Components/SafeLocation/SafeLocationItem'


function SafeLocationListScreen(): JSX.Element {

    const safeLocations = useSelector((state: RootState) => state.SafeLocation.value)

    return (
        <View style={{ flex: 1 }}>

            {safeLocations.isLoading ? <ActivityIndicator size="large" /> :
                <View style={{ height: 50, padding: 5 }}>
                    <Text style={{ textAlign: 'center', textAlignVertical: 'center' }}>
                        <Text style={{ fontSize: 15 }}>Safe Locations Found : </Text>
                        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>    {safeLocations.safeLocations.length}</Text>
                    </Text>
                </View>}
            <View style={{ backgroundColor: '#e3e1e1', marginTop: 10, marginHorizontal: 2, borderWidth: 0.2 }}>
                <List.AccordionGroup>

                    {safeLocations.error ? <Text style={{ color: 'red' }}>{safeLocations.error}</Text> :
                        <FlatList
                            data={safeLocations.safeLocations}
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