import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { store } from './src/Infrastructure/Store/store';
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import LoginScreen from './src/Presentation/Screens/LoginScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppContainer from './src/Presentation/Screens/AppContainer';
import LaunchScreen from './src/Presentation/Screens/LaunchScreen';

export default function App() {

  // const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <AppContainer>
        <LaunchScreen />
      </AppContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
