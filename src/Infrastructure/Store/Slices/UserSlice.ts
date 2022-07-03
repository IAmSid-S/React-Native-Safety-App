import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserRegisterResponse } from "../../../Types/API_Payloads/UserApiPayload";
import UserInfo from "../../../Types/Models/UserModel";
import { RootState } from "../store";

type UserInfoState = UserInfo & ({isLoading:boolean}) &({registerError: UserRegisterResponse})

const initialValue: (UserInfoState) = {
    userID: '',
    userName: '',
    authToken: '',
    isSessionValid: 'unchecked',
    loginError: '',
    registerError: '',
    isLoading: false
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
                state.value.loginError = action.payload.loginError;
            },

            clearAuthToken(state : { value: UserInfo; }){
                state.value.authToken = '';
                state.value.isSessionValid = "no";
                state.value.loginError = '';
            },
            
            updateLoadingStatus(state: { value: { isLoading: boolean; }; }, action: PayloadAction<boolean>){
                state.value.isLoading = action.payload;
            },

            updateRegisterError(state: { value: { registerError: any; }; }, action: PayloadAction<UserRegisterResponse>){
                state.value.registerError = action.payload;
            }

        }
    }
);

export const login = createAction<{email: string, password: string}>('Login');
export const CheckUser = createAction('CheckUser');
export const register = createAction<{email: string, password: string, userName: string}>('Register');
export const logout = createAction('Logout');

export const {updateUserInfo, clearAuthToken, updateSessionValidity, updateLoadingStatus, updateRegisterError} = userSlice.actions;
export const selectUser = (state: RootState) => state.User.value;

export default userSlice.reducer;

