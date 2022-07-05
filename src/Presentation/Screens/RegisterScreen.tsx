import { useNavigation } from '@react-navigation/native';
import { useState } from 'react'
import { View, Text } from 'react-native'
import { useDispatch } from 'react-redux';
import { Entypo, FontAwesome } from '@expo/vector-icons';
import { register } from '../../Infrastructure/Store/Slices/UserSlice';
import { Card, TextInput, Button } from 'react-native-paper'
import { useAppSelector } from '../../Infrastructure/Store/store';
import { UserRegisterResponse } from '../../Types/API_Payloads/UserApiPayload';

function RegisterScreen(): JSX.Element {
  const [registerDetails, setRegisterDetails] = useState({ email: '', password: '', confirmPassword: '', userName: '' });
  const [error, setError] = useState('');
  const registerError: UserRegisterResponse = useAppSelector(state => state.User.value.registerError)
  const navigation = useNavigation();
  const dispatch = useDispatch();
  function Register() {
    if (registerDetails.password !== registerDetails.confirmPassword) {
      setError('Password Mismatch');
      return;
    }
    setError('')
    const { confirmPassword, ...registerObj } = registerDetails;
    dispatch(register(registerObj));
  }

  return (
    <View>
      {
        (registerError === 'success') ?
          <Card style={{ marginTop: '50%', marginHorizontal: 20, height: 110, display: 'flex', justifyContent: 'space-between', alignContent: 'space-between'}}>
            <View style={{display: 'flex', marginBottom: 20, flexDirection: 'row', marginHorizontal: 10,  alignContent: 'flex-end', justifyContent: 'flex-start' }}>
            <FontAwesome name='check' size={50} color='#6200ee'/>
            <Text style={{fontSize: 20, marginTop: 10}}>      Registeration Request Sent</Text>
            </View>
            <Button onPress={() => navigation.goBack()}>Back</Button>
          </Card>
          :
          <View>
            <Card style={{ marginTop: '20%', marginHorizontal: 20 }}>
              <Card.Title style={{ height: 100 }} title="Register" left={(props) => <Entypo size={40} name="add-user" />} />
              <Card.Content>
                <TextInput label='Name' value={registerDetails.userName} onChangeText={(text) => setRegisterDetails(prev => { return { ...prev, userName: text } })} />
                <TextInput label='Email' keyboardType='email-address' value={registerDetails.email} onChangeText={(text) => setRegisterDetails(prev => { return { ...prev, email: text } })} />
                <TextInput label='Password' secureTextEntry={true} value={registerDetails.password} onChangeText={(text) => setRegisterDetails(prev => { return { ...prev, password: text }; })} autoCompleteType={undefined} />
                <TextInput label='Confirm Password' secureTextEntry={true} value={registerDetails.confirmPassword} onChangeText={(text) => setRegisterDetails(prev => { return { ...prev, confirmPassword: text }; })} autoCompleteType={undefined} />

              </Card.Content>
              <Text style={{ color: 'red', alignSelf: 'center' }}>{error}</Text>
              <Text style={{ color: 'red', alignSelf: 'center' }}>{registerError}</Text>
              <Button onPress={Register}>Register</Button>
              <Button onPress={() => navigation.goBack()}>Back</Button>
            </Card>
          </View>
      }
    </View>
  )
}

export default RegisterScreen