import { loginError } from "../Models/UserModel";

export interface UserInfoPayload{
    userID: string;
    userName: string;
    authToken: string;
    loginError : loginError;
}

export type UserRegisterResponse = 'success' | 'User Exists' | 'Error' | '';

