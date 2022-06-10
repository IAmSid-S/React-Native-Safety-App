import UserInfo from "../../../Types/Models/UserModel";
import { getData, storeData } from "../../Utils/LocalStorage";
import { delay } from "../../Utils/MockHelpers";
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
    refreshToken(): Promise<UserInfo> {
        throw new Error("Method not implemented.");
    }
    async login(email: string, password: string): Promise<UserInfo> {
        await delay(5);
        if(email === 'sid@gmail.com'){
            if(password === 'sid123'){
                return {
                    userID: email,
                    userName: 'SID',
                    authToken: 'SID1234',
                    loginErrors: '',
                    isSessionValid: 'yes'
                }
            }
            else return {
                userID: email,
                userName: '',
                authToken: '',
                loginErrors: 'Incorrect password',
                isSessionValid: 'no'
            }
        }

        if(email === 'sanat@gmail.com'){
            if(password === 'sid123'){
                return {
                    userID: email,
                    userName: 'Sanat',
                    authToken: 'Sanat001234',
                    loginErrors: '',
                    isSessionValid: 'yes'
                }
            }
            else return {
                userID: email,
                userName: '',
                authToken: '',
                loginErrors: 'Incorrect password',
                isSessionValid: 'no'
            }
        }

        else  return {
            userID: email,
            userName: '',
            authToken: '',
            loginErrors: 'No user found',
            isSessionValid: 'no'
        }
    }
    register(email: string, password: string, userName: string): string {
        throw new Error("Method not implemented.");
    }

    async getUserInfo(): Promise<UserInfo | null> {  
        return await getData<UserInfo>("USER_INFO");
    }
    logOut(): void {
        throw new Error("Method not implemented.");
    }

    private async setUserInfo(userInfo: UserInfo) {
        const result = await storeData('USER_INFO', userInfo);
    }
}