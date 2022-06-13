import { Action, Middleware, MiddlewareAPI } from "@reduxjs/toolkit";
import { DebounceData } from "../../../Types/Models/CommonStoreType";
import { IServiceProvider } from "../../Services/IserviceProvider";
import { MetaAction } from "../../Utils/MetaActions";
import { AppDispatch, RootState, useAppDispatch } from "../store";

export const metaMiddleware = 

(serviceProvider: IServiceProvider) : Middleware => 
({getState, dispatch}: MiddlewareAPI) =>
(next: AppDispatch) => 
async (action: Action | MetaAction) => 
{

    let debounceList : {debounce: DebounceData , timer: NodeJS.Timeout}[]= [];

    if('meta' in action){
        if(action.meta.delay){
            setTimeout(() => {dispatch(action.payload)}, action.meta.delay)
        }

        if(action.meta.debounce){
            // not tested
            const [currentDebounceItem, ...rest] = debounceList.filter(x => x.debounce.sourceID === action.meta.debounce?.sourceID)
            if(currentDebounceItem){
                clearTimeout(currentDebounceItem.timer);
                debounceList = debounceList.filter(x => x.debounce.sourceID !== action.meta.debounce?.sourceID)
            }
            let debounceItem = {
                debounce: action.meta.debounce,
                timer: setTimeout(() => {dispatch(action.payload)}, action.meta.debounce.delay )
            }
            
            debounceList.push(debounceItem);
        }
    }

    return next(action)
}