import { loginError } from "../Models/UserModel";

export interface UserInfoPayload{
    [x: string]: string;
    userID: string;
    userName: string;
    authToken: string;
    loginError : loginError;
}

export type UserRegisterResponse = 'successful' | 'User Exists' | 'Error' | '';

