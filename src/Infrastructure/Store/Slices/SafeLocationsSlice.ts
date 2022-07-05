import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { SafeLocation } from "../../../Types/Models/SafeLocation"

type SafeLoactionState = {safeLocations: SafeLocation[]} & {isLoading: boolean, error: string, abortRequest: AbortController}

const initialValue : SafeLoactionState = { 
    safeLocations: [],
    isLoading: false,
    error: '',
    abortRequest: new AbortController()
}

const initialState = {value: initialValue}

const safeLocationsSlice = createSlice(
    {
        name: 'SafeLocations',
        initialState,
        reducers: {
            updateSafeLocations(state: { value: { safeLocations: SafeLocation[] } }, action: PayloadAction<SafeLocation[]>){
                state.value.safeLocations = action.payload;
            },

            clearSafeLocations(state: { value: { safeLocations: SafeLocation[] } }){
                state.value.safeLocations = []
            },

            updateLoadingStatus(state: { isLoading?: boolean; error?: string; value?: any }, action: PayloadAction<{isLoading: boolean, error: string, abortRequest: AbortController}>){
                state.value.isLoading = action.payload.isLoading;
                state.value.error = action.payload.error;
                state.value.abortRequest = action.payload.abortRequest;
            }
        }
    }
)

export const {clearSafeLocations, updateLoadingStatus, updateSafeLocations} = safeLocationsSlice.actions
export default safeLocationsSlice.reducer;

export const searchSafeLocationFromPinCode = createAction<{pinCode: string}>('SafeLocations/searchFromPincode');
export const searchSafeLocationFromLatLong = createAction<{lat: number | undefined, long: number | undefined}>('SafeLocations/searchFromLatLong');