import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { store } from './src/Infrastructure/Store/store';
import { Provider} from 'react-redux'
import LoginScreen from './src/Presentation/Screens/LoginScreen';

export default function App() {
  return (
    <Provider store={store}>

    <View style={styles.container}>
      <Text>Safety App!</Text>
      <StatusBar style="auto" />
      <LoginScreen />
    </View>
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
