import { View, Text, StyleSheet } from "react-native"
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { useAppDispatch, useAppSelector } from "../../Infrastructure/Store/store";
import LoginScreen from "./LoginScreen";
import HomeScreen from "./HomeScreen";
import { login } from "../../Infrastructure/Store/Slices/UserSlice";



function LaunchScreen() {
  const isSessionValid = useAppSelector(state => state.User.value.isSessionValid);
  console.log(isSessionValid)
  const dispatch = useAppDispatch();
  if (isSessionValid === "unchecked") {
    dispatch(login())
    return (
      <View style={styles.container}><Icon size={100} style={styles.largeIcon} name="alarm-light" /><Text style={styles.titleFont}>Safety App</Text></View>
    )
  }

  else if (isSessionValid === 'no')
    return (<LoginScreen />)

  else if (isSessionValid === 'yes')
    return (<HomeScreen />)
}

export default LaunchScreen

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  },
  largeIcon: {
    color: 'red',
  },
  titleFont: {
    fontSize: 25
  }
});