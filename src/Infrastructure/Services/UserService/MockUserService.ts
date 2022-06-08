import UserInfo from "../../../Types/Models/UserModel";
import { IUserService } from "./IUserService";

export class MockUserService implements IUserService{
    userID: string = '';
    userName: string = '';
    authToken: string = '';
    /**
     *
     */
    constructor() {
        
    }
    getUserInfo(): Promise<UserInfo> {
        return new Promise<UserInfo>((res) => {
            setTimeout(() => {res(
                {
                    authToken: '12345',
                    isSessionValid: 'unchecked',
                    userID: '123',
                    userName: 'Sid'
                }
            )}, 5000);
        })
    }
    logOut(): void {
        throw new Error("Method not implemented.");
    }

}