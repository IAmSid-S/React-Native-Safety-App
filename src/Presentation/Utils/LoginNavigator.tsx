import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import LoginScreen from "../Screens/LoginScreen";
import RegisterScreen from "../Screens/RegisterScreen";

export type LoginStackParamList = {
    Login: undefined;
    Register: undefined;
};

function LoginNavigator(): JSX.Element {
    
    
    const LoginStack = createNativeStackNavigator<LoginStackParamList>();

    return (
        <NavigationContainer>

            <LoginStack.Navigator>
                <LoginStack.Screen name="Login" component={LoginScreen} />
                <LoginStack.Screen name="Register" component={RegisterScreen} />
            </LoginStack.Navigator>

        </NavigationContainer>
    )
}

export default LoginNavigator