import { UserRegisterResponse } from "../../../Types/API_Payloads/UserApiPayload";
import UserInfo from "../../../Types/Models/UserModel";

export interface IUserService{
    userID: string,
    userName: string,
    authToken: string,
    
    refreshToken(): Promise<UserInfo>,
    login(email: string, password: string): Promise<UserInfo>,
    register(email: string, password: string, userName: string): Promise<UserRegisterResponse>,
    logOut(): void,
    getUserInfo(): Promise<UserInfo | null>
    setUserInfo(UserInfo: UserInfo | null):
}