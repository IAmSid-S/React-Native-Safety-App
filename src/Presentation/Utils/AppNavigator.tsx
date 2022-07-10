import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "react-native-paper";
import Icon from '@expo/vector-icons/MaterialIcons';
import HomeScreen from "../Screens/HomeScreen";
import SafeLocationListScreen from "../Screens/SafeLocationListScreen";
import { useAppDispatch } from "../../Infrastructure/Store/store";
import { clearAuthToken, logout } from "../../Infrastructure/Store/Slices/UserSlice";
import ResultsNavigator from "./ResultsNavigator";

export type AppStackParamList = {
    Home: undefined;
    Results: undefined;
};

export default function AppNavigator(): JSX.Element {
    const AppStack = createNativeStackNavigator<AppStackParamList>();
    const dispatch = useAppDispatch();
    return(
        <NavigationContainer>
            <AppStack.Navigator initialRouteName="HomeScreen">
                <AppStack.Screen name= "Home" component={HomeScreen} options={{
                headerRight: () => <Button onPress={() => dispatch(logout())}><Icon size={30} name="logout"/></Button>
            }} />
                <AppStack.Screen name="Results" component={ResultsNavigator} />
            </AppStack.Navigator>
            
        </NavigationContainer>
    )
}