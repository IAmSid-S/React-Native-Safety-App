import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import UserInfo from "../../../Types/Models/UserModel";
import { RootState } from "../store";

const initialValue: UserInfo = {
    userID: '',
    userName: '',
    authToken: '',
    isSessionValid: 'unchecked',
    loginErrors: ''
}

const initialState = {value: initialValue}

const userSlice = createSlice(
    {
        name: 'User',
        initialState,
        reducers: {
            updateUserInfo: (state: { value: UserInfo; }, action: PayloadAction<UserInfo>) => {
                state.value = action.payload;
            },

            updateSessionValidity: (state: { value: UserInfo; }, action: PayloadAction<{isSessionValid: UserInfo["isSessionValid"], loginErrors: string}>) => {
                state.value.isSessionValid = action.payload.isSessionValid;
                state.value.loginErrors = action.payload.loginErrors;
            },

            clearAuthToken(state : { value: UserInfo; }){
                state.value.authToken = '';
                state.value.isSessionValid = "no";
            }


        }
    }
);

export const login = createAction<{email: string, password: string}>('Login');
export const CheckUser = createAction('CheckUser');
export const register = createAction<{email: string, password: string, userName: string}>('Register');
export const logout = createAction('Logout');

export const {updateUserInfo, clearAuthToken, updateSessionValidity} = userSlice.actions;
export const selectUser = (state: RootState) => state.User.value;

export default userSlice.reducer;

