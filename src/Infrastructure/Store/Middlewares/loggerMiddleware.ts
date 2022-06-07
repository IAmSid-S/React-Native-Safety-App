import { Action, Middleware, MiddlewareAPI } from "@reduxjs/toolkit";
import { IServiceProvider } from "../../Services/IserviceProvider";
import { AppDispatch } from "../store";

export const loggerMiddleware = 

(serviceProvider: IServiceProvider) : Middleware => 
({getState}: MiddlewareAPI) =>
(next: AppDispatch) => 
(action: Action) => 
{
    console.log('Logger : ' + action.type)
    return next(action);
}