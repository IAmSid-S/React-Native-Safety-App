import { UserRegisterResponse } from "../../../Types/API_Payloads/UserApiPayload";
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
    register(email: string, password: string, userName: string): Promise<UserRegisterResponse> {
        throw new Error("Method not implemented.");
    }
    async refreshToken(): Promise<UserInfo> {
        const userInfo = await this.getUserInfo();
        if(userInfo && userInfo.authToken){
            return userInfo;
        }
        else {
            return {
            userID: '',
            userName: '',
            authToken: '',
            loginError: '',
            isSessionValid: 'no'
        }}
    }
    async login(email: string, password: string): Promise<UserInfo> {
        await delay(5);
        if(email === 'sid@gmail.com'){
            if(password === 'sid123'){
                return {
                    userID: email,
                    userName: 'SID',
                    authToken: 'SID1234',
                    loginError: '',
                    isSessionValid: 'yes'
                }
            }
            else return {
                userID: email,
                userName: '',
                authToken: '',
                loginError: 'Invalid Password',
                isSessionValid: 'no'
            }
        }

        if(email === 'sid2@gmail.com'){
            if(password === 'sid123'){
                return {
                    userID: email,
                    userName: 'Sid2',
                    authToken: 'Sid2001234',
                    loginError: '',
                    isSessionValid: 'yes'
                }
            }
            else return {
                userID: email,
                userName: '',
                authToken: '',
                loginError: 'Invalid Password',
                isSessionValid: 'no'
            }
        }

        else  return {
            userID: email,
            userName: '',
            authToken: '',
            loginError: 'Invalid User',
            isSessionValid: 'no'
        }
    }
    async getUserInfo(): Promise<UserInfo | null> {  
        return await getData<UserInfo>("USER_INFO");
    }
    logOut(): void {
        this.setUserInfo({
            userID: '',
            userName: '',
            authToken: '',
            loginError: '',
            isSessionValid: 'no'
        })
    }

    private async setUserInfo(userInfo: UserInfo) {
        const result = await storeData('USER_INFO', userInfo);
    }
}