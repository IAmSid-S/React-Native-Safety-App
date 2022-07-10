import React from "react";
import { View, Text, ActivityIndicator, FlatList } from "react-native";
import { useAppSelector } from "../../Infrastructure/Store/store";
import CrimeTile from "../Components/Crime/CrimeTile";

export default function CrimesListScreen(): JSX.Element {
    const crimesData = useAppSelector(state => state.Crimes.value);

    return (
        <View style={{ flex: 1 }}>

            {crimesData.totalCrimes === 0 && !crimesData.isLoading ? <Text style={{ color: 'red' }}>No Data Found</Text> : null}
            {crimesData.isLoading ? <ActivityIndicator size="large" /> :
                <View style={{ height: 50, padding: 5 }}>
                    <Text style={{ textAlign: 'center', textAlignVertical: 'center' }}>
                        <Text style={{ fontSize: 15 }}>Crimes in the area ({crimesData.pinCode}): </Text>
                        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>    {crimesData.totalCrimes}</Text>
                    </Text>
                </View>}
            <View style={{ backgroundColor: '#e3e1e1', marginTop: 10, marginHorizontal: 2, borderWidth: 0.2 }}>
                <FlatList
                    data={crimesData.crimeList}
                    renderItem={({ item }) => <CrimeTile count={item.count} type={item.type}></CrimeTile>}
                    keyExtractor={(item, index) => item.type}
                    numColumns={2}
                />
            </View>
        </View>
    );
}