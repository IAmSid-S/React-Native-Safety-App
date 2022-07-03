import { UserRegisterResponse } from "../../../Types/API_Payloads/UserApiPayload";
import UserInfo from "../../../Types/Models/UserModel";
import { getData, storeData } from "../../Utils/LocalStorage";
import { LogInApiRequest, RegisterApiRequest } from "../APIService/UserApi";
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
    async setUserInfo(userInfo: UserInfo | null) {
        const result = await storeData('USER_INFO', userInfo);
    }
    async login(email: string, password: string): Promise<UserInfo> {
        const userApiResponse = await LogInApiRequest(email, password);
        const isSessionValid: UserInfo["isSessionValid"] = (userApiResponse.loginError === 'successful') ? 'yes' : 'no'
        const userInfo: UserInfo = {...userApiResponse, isSessionValid}
        
        return userInfo;
    }
    refreshToken(): Promise<UserInfo> {
        throw new Error("Method not implemented.");
    }
    
    async register(email: string, password: string, userName: string): Promise<UserRegisterResponse> {
        const userApiResponse = await RegisterApiRequest(email, password, userName);
        return userApiResponse;
    }
    
    async getUserInfo(): Promise<UserInfo | null> {
        return await getData<UserInfo>("USER_INFO");
    }
    logOut(): void {
        this.setUserInfo({
            authToken: '',
            isSessionValid: 'no',
            loginError: '',
            userID: '',
            userName: ''
        });
    }

}