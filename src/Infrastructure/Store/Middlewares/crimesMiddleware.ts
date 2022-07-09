import { Action, Middleware, MiddlewareAPI } from "@reduxjs/toolkit";
import { Crimes } from "../../../Types/Models/CrimeModel";
import { IServiceProvider } from "../../Services/IserviceProvider";
import { searchCrimesFromPinCode, clearCrimes, updateLoadingStatus, updateCrimes, searchCrimesFromLatLong } from "../Slices/CrimeSlice";
import { AppDispatch, RootState } from "../store";

export const safeLocationsMiddleware = 

(serviceProvider: IServiceProvider) : Middleware => 
({getState}: MiddlewareAPI) =>
(next: AppDispatch) => 
async (action: Action) => 
{
    const currentState: RootState = getState();

    if(searchCrimesFromPinCode.match(action)){
        try {
            currentState.Crimes.value.abortRequest.abort()
        } catch (error) {
            
        }
        let error = '';
        const cancellationController = new AbortController();
        next(clearCrimes());

        next(updateLoadingStatus({isLoading: true, error: '', abortRequest: cancellationController}));
        let crimeData = await serviceProvider.CrimesService.getSafeLocationsFromPinCode(action.payload.pinCode, cancellationController.signal);
        next(updateCrimes(crimeData))
        if(crimeData.crimeList.length === 0){
            error = 'No data found'
        }
        next(updateLoadingStatus({isLoading: false, error, abortRequest: cancellationController}))
    }

    if(searchCrimesFromLatLong.match(action)){
        try {
            currentState.Crimes.value.abortRequest.abort()
        } catch (error) {
            
        }
        let error = '';
        const cancellationController = new AbortController();
        next(clearCrimes());

        next(updateLoadingStatus({isLoading: true, error: '', abortRequest: cancellationController}));
        let crimeData = await serviceProvider.CrimesService.getSafeLocationFromLatLong(action.payload.lat || 0, action.payload.long || 0, cancellationController.signal);
        next(updateCrimes(crimeData))
        if(crimeData.crimeList.length === 0){
            error = 'No data found'
        }
        next(updateLoadingStatus({isLoading: false, error, abortRequest: cancellationController}))
    }

    return next(action)
}
