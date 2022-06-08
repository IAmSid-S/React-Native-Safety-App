import { Action, Middleware, MiddlewareAPI } from "@reduxjs/toolkit";
import { IServiceProvider } from "../../Services/IserviceProvider";
import { login, updateUserInfo } from "../Slices/UserSlice";
import { AppDispatch, RootState } from "../store";

export const userMiddleware = 

(serviceProvider: IServiceProvider) : Middleware => 
({getState}: MiddlewareAPI) =>
(next: AppDispatch) => 
async (action: Action) => 
{
    const currentState: RootState = getState()
    console.log(currentState)
    if(login.match(action)){
        // do login
    }

    if(currentState.User.value.isSessionValid === 'unchecked'){
        const userInfo = await serviceProvider.UserService.getUserInfo()
        next(updateUserInfo(userInfo))
    }
    if(currentState.User.value.isSessionValid === 'no'){
        // take to login scren
    }
}