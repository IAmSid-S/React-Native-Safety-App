import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View, Text } from 'react-native'
import { Card, TextInput, Button } from 'react-native-paper';
import Icon from '@expo/vector-icons/MaterialIcons';
import { AppDispatch, RootState, useAppDispatch, useAppSelector } from '../../Infrastructure/Store/store';
import { LoginStackParamList } from '../Utils/LoginNavigator';
import { useState } from 'react';
import { login } from '../../Infrastructure/Store/Slices/UserSlice';
import { useDispatch } from 'react-redux';

type Props = NativeStackScreenProps<LoginStackParamList, 'Login'>

function LoginScreen(props: Props): JSX.Element {
  const user = useAppSelector(state => state.User.value)
  const [loginDetails, setLoginDetails] = useState({email: '', password: ''})
  const goToRegister = () => {
    props.navigation.navigate('Register')
  }
  const dispatch = useDispatch();

  const Login = () => {
    console.log(loginDetails);
    dispatch(login(loginDetails));
  }
  return (
    <View>
      <Card style={{marginTop: '50%', marginHorizontal: 20}}>
        <Card.Title style={{height: 100}} title="Login" left={(props) => <Icon size={40} name="login"/>}/>
        <Card.Content>
          <TextInput label='Email' value={loginDetails.email} onChangeText={text => setLoginDetails(prev => {return {...prev, email: text}})} />
          <TextInput label='Password' secureTextEntry={true} value={loginDetails.password} onChangeText={text => setLoginDetails(prev => { return { ...prev, password: text }; })} autoCompleteType={undefined} />
        </Card.Content>
      <Button onPress={Login}>Login</Button>
      <Button onPress={goToRegister}>Register</Button>
      </Card>
    </View>
  )
}

export default LoginScreen

function payload(payload: any, arg1: { userID: string; password: string; }): any {
  throw new Error('Function not implemented.');
}
