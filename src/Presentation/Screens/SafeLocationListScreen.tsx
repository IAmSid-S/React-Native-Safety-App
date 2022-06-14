import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import { List } from 'react-native-paper'
import { useSelector } from 'react-redux'
import { RootState } from '../../Infrastructure/Store/store'
import SafeLocationItem from '../Components/SafeLocation/SafeLocationItem'


function SafeLocationListScreen(): JSX.Element {

    const safeLocations = useSelector((state: RootState) => state.SafeLocation.value)

    return (
        <View style={{ flex: 1 }}>
            <Text>Safe Locations in your PinCode: </Text>
            {safeLocations.isLoading ? <ActivityIndicator size="large" /> : null}
            <View style={{backgroundColor: '#e3e1e1', marginTop: 10, marginHorizontal: 2, borderWidth: 0.2}}>
                <List.AccordionGroup>

                    {safeLocations.error ? <Text style={{ color: 'red' }}>{safeLocations.error}</Text> :
                        <FlatList
                            data={safeLocations.safeLocations}
                            renderItem={({ item }) => <SafeLocationItem {...item}></SafeLocationItem>}
                            keyExtractor={(item) => item.name}
                        />
                    }
                </List.AccordionGroup>
            </View>
        </View>
    )
}

export default SafeLocationListScreen