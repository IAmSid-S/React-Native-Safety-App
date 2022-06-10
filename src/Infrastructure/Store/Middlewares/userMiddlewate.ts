import { Action, Middleware, MiddlewareAPI } from "@reduxjs/toolkit";
import UserInfo from "../../../Types/Models/UserModel";
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
    if(currentState.User.value.isSessionValid === 'unchecked'){
        // if auth token present in memory -> refresh
            // refresh successful -> update isSessionValid = true
            // else set to no

        // if auth token absent in memory -> set isSessionValid to no
    }
    if(currentState.User.value.isSessionValid === 'no'){
        // take to login scren
    }
}