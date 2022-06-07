import { createAction } from '@reduxjs/toolkit';
import { useEffect } from 'react'
import { View, Text, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { updateUserInfo } from '../../Infrastructure/Store/Slices/UserSlice';
import { AppDispatch, RootState } from '../../Infrastructure/Store/store';

function LoginScreen() {

const dispatch = useDispatch<AppDispatch>();
const user = useSelector((state: RootState) => state.User.value)
  useEffect(()=> {
    dispatch(updateUserInfo())
  }, []);

  return (
    <View>
      <Text>Login !!</Text>
      <Text>Auth: {user.authToken}</Text>
      <Button onPress={() => dispatch(updateUserInfo())} title='Login' />
    </View>
  )
}

export default LoginScreen