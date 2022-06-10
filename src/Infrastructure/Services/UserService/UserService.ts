import UserInfo from "../../../Types/Models/UserModel";
import { IUserService } from "./IUserService";

export class UserService implements IUserService{
    userID: string = '';
    userName: string = '';
    authToken: string = '';
    /**
     *
     */
    constructor() {
        
    }
    refreshToken(): Promise<UserInfo> {
        throw new Error("Method not implemented.");
    }
    login(): Promise<UserInfo> {
        throw new Error("Method not implemented.");
    }
    register(): string {
        throw new Error("Method not implemented.");
    }
    getUserInfo(): Promise<UserInfo> {
        throw new Error("Method not implemented.");
    }
    logOut(): void {
        throw new Error("Method not implemented.");
    }

}