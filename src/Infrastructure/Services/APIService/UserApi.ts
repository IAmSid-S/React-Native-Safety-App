import { UserInfoPayload, UserRegisterResponse } from "../../../Types/API_Payloads/UserApiPayload";
import { AppConstants } from "../../../Types/Constants/AppConstants";

const apiBaseURL = AppConstants.ApiBaseURL;

export async function LogInApiRequest(email: string, password: string): Promise<UserInfoPayload> {
    const loginApi = `${apiBaseURL}/${AppConstants.ApiResources.Login}`;
    const request = fetch(loginApi, {
        method: 'POST',
        body: JSON.stringify({ email, password })
    });
    try {
        const response = await request;
        if (!response.ok) {
            //check error type

            return {} as UserInfoPayload;
        }
        else {
            const data = await response.json() as UserInfoPayload;
            return data;
        }
    }
    catch (e) {
        // dispatch error.
        return {} as UserInfoPayload;
    }
}

export async function RegisterApiRequest(email: string, password: string, userName: string): Promise<UserRegisterResponse> {
    const registerApi = `${apiBaseURL}/${AppConstants.ApiResources.Register}`
    const request = fetch(registerApi, {
        method: 'POST',
        body: JSON.stringify({email, username: userName, password})
    });

    try{
        const response = await request;
        if(!response.ok){
            // check error
            return 'Error';
        }
        else{
            const data = await response.json() as UserRegisterResponse;
            return data
        }
    }
    catch(e){
        return 'Error'
    }
}