
import { View, Text, StyleSheet } from "react-native"
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { useAppDispatch, useAppSelector } from "../../Infrastructure/Store/store";
import HomeScreen from "./HomeScreen";
import { CheckUser, login } from "../../Infrastructure/Store/Slices/UserSlice";
import LoginNavigator from "../Utils/LoginNavigator";
import AppNavigator from "../Utils/AppNavigator";



function LaunchScreen(): JSX.Element {
  const isSessionValid = useAppSelector(state => state.User.value.isSessionValid);
  console.log(isSessionValid)
  const dispatch = useAppDispatch();
  if (isSessionValid === "unchecked") {
    dispatch(CheckUser())
    return (
      <View style={styles.container}><Icon size={100} style={styles.largeIcon} name="alarm-light" /><Text style={styles.titleFont}>Safety App</Text></View>
    )
  }

  else if (isSessionValid === 'no')
    return (<LoginNavigator />)

    return (<AppNavigator />)
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