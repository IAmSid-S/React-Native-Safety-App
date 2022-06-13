import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../Screens/HomeScreen";

export type AppStackParamList = {
    HomeScreen: undefined;
};

export default function AppNavigator(): JSX.Element {
    const AppStack = createNativeStackNavigator<AppStackParamList>();

    return(
        <NavigationContainer>
            <AppStack.Navigator initialRouteName="HomeScreen">
                <AppStack.Screen name= "HomeScreen" component={HomeScreen} />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}