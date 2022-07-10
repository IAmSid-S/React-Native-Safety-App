import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CrimesListScreen from '../Screens/CrimesListScreen';
import SafeLocationListScreen from '../Screens/SafeLocationListScreen';
import MaterialCommunityIcons   from '@expo/vector-icons/MaterialCommunityIcons'; 
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react';
import { useAppSelector } from '../../Infrastructure/Store/store';

export type ResultsTabParamList = {
    SafeLocationList: undefined;
    Crimes: undefined;
};

function getTabIcon(route: keyof(ResultsTabParamList),focused: boolean, color: string, size: number){
   
    if(route === 'SafeLocationList'){
        return <MaterialIcons name="add-location" size={size} color={color} />
    }
    else if(route === 'Crimes'){
        return <MaterialCommunityIcons name="robber" size={size} color={color} />
    }
}

export default function ResultsNavigator():JSX.Element{
    const ResultsTabs = createBottomTabNavigator<ResultsTabParamList>();
    const totalCrimes = useAppSelector(state => state.Crimes.value.totalCrimes)
    const totalSafeLocations = useAppSelector(state => state.SafeLocation.value.safeLocations.length)
    return(
        <ResultsTabs.Navigator initialRouteName='SafeLocationList'
        screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => getTabIcon(route.name, focused, color, 35),
            tabBarActiveTintColor: '#6200ee',
            tabBarInactiveTintColor: '#a075dd',
            headerShown: false
        })}>
            <ResultsTabs.Screen name='SafeLocationList' component={SafeLocationListScreen}  options={{title: 'SafeLocations', tabBarBadge: totalSafeLocations, tabBarBadgeStyle: {backgroundColor: '#a075dd', color: 'white', marginLeft: 5}}}/>
            <ResultsTabs.Screen name='Crimes' component={CrimesListScreen} options={{tabBarBadge: totalCrimes, tabBarBadgeStyle: {backgroundColor: '#a075dd', color: 'white', marginLeft: 5}}}/>
        </ResultsTabs.Navigator>
    );
}