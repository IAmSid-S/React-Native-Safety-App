import { SafeLocation } from "../../../Types/Models/SafeLocation"
import { View, Text, ColorPropType } from 'react-native'
import { Button, List } from "react-native-paper"
import Icon from '@expo/vector-icons/MaterialIcons';
import { OpenMap } from "../../Utils/MapsHandler";

function EstablishmentIcon(props: { locationType: SafeLocation['type']; color: string }): JSX.Element {
    if (props.locationType === "hospital")
        return <Icon size={30} color={props.color} name="local-hospital" />

    else if (props.locationType === "police_station")
        return <Icon size={30} color={props.color} name="local-police" />

    return <Icon name="report-problem" />
}

function SafeLocationItem(locationProps: SafeLocation): JSX.Element {


    return (
        <List.Accordion title={locationProps.name} id={locationProps.name} style={{ backgroundColor: 'lightgray', borderWidth: 0.5, flex: 1 }}
            left={(props) => <EstablishmentIcon {...props} locationType={locationProps.type} />}>
            <List.Item
                title="Address"
                description={locationProps.address}
                left={props => <List.Icon {...props} icon="map" 
                style={{backgroundColor: 'lightgray'}}/>}
            />
            <Button style={{alignSelf:'flex-start'}} icon="map-marker-radius" color='blue' onPress={() => OpenMap(locationProps.address)}>Open in Map</Button>


        </List.Accordion>
    )
}

export default SafeLocationItem