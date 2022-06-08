import UserInfo from "../../../Types/Models/UserModel";

export interface IUserService{
    userID: string,
    userName: string,
    authToken: string,
    
    getUserInfo(): Promise<UserInfo>,
    logOut(): void
}