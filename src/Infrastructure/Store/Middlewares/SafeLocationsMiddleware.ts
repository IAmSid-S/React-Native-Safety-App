import { Action, Middleware, MiddlewareAPI } from "@reduxjs/toolkit";
import { IServiceProvider } from "../../Services/IserviceProvider";
import { clearSafeLocations, searchSafeLocationFromLatLong, searchSafeLocationFromPinCode, updateLoadingStatus, updateSafeLocations } from "../Slices/SafeLocationsSlice";
import { AppDispatch, RootState } from "../store";

export const safeLocationsMiddleware = 

(serviceProvider: IServiceProvider) : Middleware => 
({getState}: MiddlewareAPI) =>
(next: AppDispatch) => 
async (action: Action) => 
{

    const currentState: RootState = getState()
    if(searchSafeLocationFromPinCode.match(action)){
        try {
            currentState.SafeLocation.value.abortRequest.abort()
        } catch (error) {
            
        }
        const cancellationController = new AbortController();
        next(clearSafeLocations())
        next(updateLoadingStatus({isLoading: true, error: '', abortRequest: cancellationController}))
        let safeLocationsList = await serviceProvider.SafeLocationService.getSafeLocationsFromPinCode(action.payload.pinCode, cancellationController.signal)
        next(updateSafeLocations(safeLocationsList));
        let error = ''
        if(safeLocationsList.length === 0){
            error = 'No Data found'
        }

        next(updateLoadingStatus({isLoading: false, error, abortRequest: cancellationController}))
    }

    if(searchSafeLocationFromLatLong.match(action)){
        
        try {
            currentState.SafeLocation.value.abortRequest.abort()
        } catch (error) {
            
        }
        const cancellationController = new AbortController();
        next(clearSafeLocations())
        next(updateLoadingStatus({isLoading: true, error: '', abortRequest: cancellationController}))
        let safeLocationsList = await serviceProvider.SafeLocationService.getSafeLocationFromLatLong((action.payload.lat || 0), (action.payload.long || 0), cancellationController.signal);
        next(updateSafeLocations(safeLocationsList));
        let error = ''
        if(safeLocationsList.length === 0){
            error = 'No Data found'
        }

        next(updateLoadingStatus({isLoading: false, error, abortRequest: cancellationController}))
    }

    next(action);
}