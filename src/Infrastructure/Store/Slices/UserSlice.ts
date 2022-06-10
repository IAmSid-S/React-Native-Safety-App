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
            }
        }
    }
);

export const login = createAction('Login');

export const {updateUserInfo} = userSlice.actions;
export const selectUser = (state: RootState) => state.User.value;

export default userSlice.reducer;