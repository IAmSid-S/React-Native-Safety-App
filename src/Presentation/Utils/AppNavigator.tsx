import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../Screens/HomeScreen";
import SafeLocationListScreen from "../Screens/SafeLocationListScreen";

export type AppStackParamList = {
    Home: undefined;
    SafeLocationList: undefined;
};

export default function AppNavigator(): JSX.Element {
    const AppStack = createNativeStackNavigator<AppStackParamList>();

    return(
        <NavigationContainer>

            <AppStack.Navigator initialRouteName="HomeScreen">
                <AppStack.Screen name= "Home" component={HomeScreen} />
                <AppStack.Screen name="SafeLocationList" component={SafeLocationListScreen} />
            </AppStack.Navigator>
            
        </NavigationContainer>
    )
}