import { Action, Middleware, MiddlewareAPI } from "@reduxjs/toolkit";
import { IServiceProvider } from "../../Services/IserviceProvider";
import { clearSafeLocations, searchSafeLocationFromLatLong, searchSafeLocationFromPinCode, updateLoadingStatus, updateSafeLocations } from "../Slices/SafeLocationsSlice";
import { AppDispatch } from "../store";

export const safeLocationsMiddleware = 

(serviceProvider: IServiceProvider) : Middleware => 
({getState}: MiddlewareAPI) =>
(next: AppDispatch) => 
async (action: Action) => 
{
    if(searchSafeLocationFromPinCode.match(action)){
        next(clearSafeLocations())
        next(updateLoadingStatus({isLoading: true, error: ''}))
        let safeLocationsList = await serviceProvider.SafeLocationService.getSafeLocationsFromPinCode(action.payload.pinCode)
        next(updateSafeLocations(safeLocationsList));
        let error = ''
        if(safeLocationsList.length === 0){
            error = 'No Data found'
        }

        next(updateLoadingStatus({isLoading: false, error}))
    }

    if(searchSafeLocationFromLatLong.match(action)){
        next(clearSafeLocations())
        next(updateLoadingStatus({isLoading: true, error: ''}))
        let safeLocationsList = await serviceProvider.SafeLocationService.getSafeLocationFromLatLong(action.payload.lat || 0, action.payload.long || 0);
        let error = '';
        if(safeLocationsList.length === 0){
            error = 'No Data found'
        }
        next(updateSafeLocations(safeLocationsList));
        next(updateLoadingStatus({isLoading: false, error}))
    }

    next(action);
}