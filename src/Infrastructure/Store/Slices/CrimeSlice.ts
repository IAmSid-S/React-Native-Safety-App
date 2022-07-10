import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Crimes } from "../../../Types/Models/CrimeModel";


type CrimeState = Crimes & {isLoading: boolean, error: string, abortRequest: AbortController};

const initialValue : CrimeState = { 
    pinCode: '',
    totalCrimes: 0,
    crimeList: [],
    isLoading: false,
    error: '',
    abortRequest: new AbortController()
}

const initialState = {value: initialValue}

const CrimeSlice = createSlice({
    name: 'Crime',
    initialState,

    reducers: {
        updateCrimes(state: {value: CrimeState}, action: PayloadAction<Crimes>){
            state.value.crimeList = action.payload.crimeList.sort((a,b) => b.count - a.count);
            state.value.pinCode = action.payload.pinCode;
            state.value.totalCrimes = action.payload.totalCrimes;
        },

        updateLoadingStatus(state: {value: CrimeState}, action: PayloadAction<{isLoading: boolean, error: string, abortRequest: AbortController}>){
            state.value.isLoading = action.payload.isLoading;
            state.value.error = action.payload.error;
            state.value.abortRequest = action.payload.abortRequest;
        },
        clearCrimes(state: {value: CrimeState}){
            state.value.crimeList = [];
            state.value.error = '',
            state.value.pinCode = '',
            state.value.totalCrimes = 0
        }
    }
})

export const {updateCrimes, updateLoadingStatus, clearCrimes} = CrimeSlice.actions;
export default CrimeSlice.reducer;

export const searchCrimesFromPinCode = createAction<{pinCode: string}>('Crime/searchFromPincode');
export const searchCrimesFromLatLong = createAction<{lat: number | undefined, long: number | undefined}>('Crime/searchFromLatLong');