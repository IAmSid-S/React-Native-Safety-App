import { createAction } from '@reduxjs/toolkit';
import { useEffect } from 'react'
import { View, Text, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { updateUserInfo } from '../../Infrastructure/Store/Slices/UserSlice';
import { AppDispatch, RootState, useAppSelector } from '../../Infrastructure/Store/store';

function LoginScreen() {
const user = useAppSelector(state => state.User.value)

  return (
    <View>
      <Text>PLease login</Text>
      <Text>Auth: {user.authToken}</Text>
    </View>
  )
}

export default LoginScreen