import { Action, Middleware, MiddlewareAPI } from "@reduxjs/toolkit";
import UserInfo from "../../../Types/Models/UserModel";
import { IServiceProvider } from "../../Services/IserviceProvider";
import { login, updateUserInfo,clearAuthToken, logout, updateLoadingStatus } from "../Slices/UserSlice";
import { AppDispatch, RootState } from "../store";

export const userMiddleware = 

(serviceProvider: IServiceProvider) : Middleware => 
({getState}: MiddlewareAPI) =>
(next: AppDispatch) => 
async (action: Action) => 
{
    const currentState: RootState = getState()
    console.log(currentState)

    if(logout.match(action)){
        serviceProvider.UserService.logOut();
        return next(clearAuthToken())
    }

    if(currentState.User.value.isSessionValid === 'unchecked'){
        // if auth token present in memory -> refresh
        let UserFromMemory = await serviceProvider.UserService.getUserInfo();
            if(UserFromMemory && UserFromMemory.authToken){
                const refreshedUserInfo = await serviceProvider.UserService.refreshToken();
                return next(updateUserInfo(refreshedUserInfo));
            }
            else{
                // if auth token absent in memory -> set isSessionValid to no
                return next(clearAuthToken())
            }

    }
    if(currentState.User.value.isSessionValid === 'no'){
        if(login.match(action)){
            next(updateLoadingStatus(true));
            const userFromLogin = await serviceProvider.UserService.login(action.payload.email, action.payload.password);
            console.log('Attempt login: ', userFromLogin)
            next(updateLoadingStatus(false))
            return next(updateUserInfo(userFromLogin));
        }
        
    }

    return next(action);
}
