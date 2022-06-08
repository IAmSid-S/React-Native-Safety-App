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
    getUserInfo(): Promise<UserInfo> {
        throw new Error("Method not implemented.");
    }
    logOut(): void {
        throw new Error("Method not implemented.");
    }

}