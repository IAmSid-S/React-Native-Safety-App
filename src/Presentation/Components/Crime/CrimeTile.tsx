import React from "react";
import { View, Text } from "react-native";
import { CrimeKeyValPair } from "../../../Types/Models/CrimeModel";

export default function CrimeTile(props: CrimeKeyValPair) {
    return (
        <View style={{ height: 100, width: '50%', borderColor: 'black', borderWidth: 1, padding: 10}}>
            <View>
                <Text>{props.type}</Text>
            </View>
            <View style={{alignContent: 'flex-end', justifyContent: 'flex-end', height: 50, paddingLeft: 30}}>
                <Text style={{fontSize: 30, fontWeight: 'bold'}}>{props.count}</Text>
            </View>
        </View>
    );
}