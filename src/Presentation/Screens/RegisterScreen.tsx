import { useNavigation } from '@react-navigation/native';
import { useState } from 'react'
import { View, Text } from 'react-native'
import { useDispatch } from 'react-redux';
import { Entypo } from '@expo/vector-icons'; 
import { register } from '../../Infrastructure/Store/Slices/UserSlice';
import { Card, TextInput, Button } from 'react-native-paper'

function RegisterScreen(): JSX.Element {
  const [registerDetails, setRegisterDetails] = useState({ email: '', password: '', confirmPassword: '', userName: '' });
  const navigation = useNavigation();
  const dispatch = useDispatch();
  function Register(){
    const {confirmPassword, ...registerObj} = registerDetails;
    dispatch(register(registerObj));
  }
  return (
    <View>
      <Card style={{ marginTop: '50%', marginHorizontal: 20 }}>
        <Card.Title style={{ height: 100 }} title="Register" left={(props) => <Entypo size={40} name="add-user" />} />
        <Card.Content>
        <TextInput label='Name' value={registerDetails.email} onChangeText={(text: string) => setRegisterDetails(prev => { return { ...prev, userName: text } })} />
          <TextInput label='Email' keyboardType='email-address' value={registerDetails.email} onChangeText={(text: string) => setRegisterDetails(prev => { return { ...prev, email: text } })} />
          <TextInput label='Password' secureTextEntry={true} value={registerDetails.password} onChangeText={(text: string) => setRegisterDetails(prev => { return { ...prev, password: text }; })} autoCompleteType={undefined} />
          <TextInput label='Confirm Password' secureTextEntry={true} value={registerDetails.confirmPassword} onChangeText={(text: string) => setRegisterDetails(prev => { return { ...prev, confirmPassword: text }; })} autoCompleteType={undefined} />

        </Card.Content>
        <Button onPress={Register}>Register</Button>
        <Button onPress={() => navigation.goBack()}>Back</Button>
      </Card>
    </View>
  )
}

export default RegisterScreen