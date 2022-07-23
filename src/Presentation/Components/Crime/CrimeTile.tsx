import React from "react";
import { View, Text } from "react-native";
import { CrimeKeyValPair } from "../../../Types/Models/CrimeModel";

export default function CrimeTile(props: CrimeKeyValPair) {
    return (
        <View style={{ height: 150, width: '47%', borderRadius: 20, marginTop: 10, marginHorizontal: 5, borderColor: 'dimgray', borderWidth: 2, padding: 10, backgroundColor: '#ccc'}}>
            <View>
                <Text>{props.type}</Text>
            </View>
            <View style={{alignContent: 'center', justifyContent: 'center', flex: 1, paddingLeft: 30}}>
                <Text style={{fontSize: 40, fontWeight: 'bold'}}>{props.count}</Text>
            </View>
        </View>
    );
}