import { createSlice } from "@reduxjs/toolkit";
import UserInfo from "../../../Types/Models/UserModel";
import { RootState } from "../store";

const initialValue: UserInfo = {
    userID: '123',
    userName: 'Sid',
    authToken: ''
}

const initialState = {value: initialValue}

const userSlice = createSlice(
    {
        name: 'User',
        initialState,
        reducers: {
            updateUserInfo: (state) => {
                state.value.authToken = (Math.random()*1000).toString();
            }
        }
    }
);

export const {updateUserInfo} = userSlice.actions;
export const selectUser = (state: RootState) => state.User.value;

export default userSlice.reducer;