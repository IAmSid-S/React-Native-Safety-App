import { AppConstants } from "../../../Types/Constants/AppConstants";
import { Crimes } from "../../../Types/Models/CrimeModel";

export async function GetCancellableCrimesByLatLongApiRequest(long: number, lat: number, cancellationSignal: AbortSignal): Promise<Crimes> {

    const getCrimesFromLatLong = `${AppConstants.ApiBaseURL}/${AppConstants.ApiResources.CrimesByLatLong(long, lat)}`;

    const request = fetch(
        getCrimesFromLatLong,
        {
            method: 'GET',
            signal: cancellationSignal
        }
    );

    try{
        const response = await request;
        if (response.ok) {
            const result = await response.json();
            return ConvertToCrimesModel(result);
        }
        // check error type
        return {pinCode: '', totalCrimes: 0, crimeList: []}
    }
    catch(e: any){
        if (e.name == 'AbortError') {
            console.log('Cancelled')
            return {pinCode: '', totalCrimes: 0, crimeList: []}
        }
        // check error
        return {pinCode: '', totalCrimes: 0, crimeList: []}
    }

}

export async function GetCancellableCrimesByPinCode(pinCode: string, cancellationSignal: AbortSignal): Promise<Crimes> {
    const getCrimesFromPinCode = `${AppConstants.ApiBaseURL}/${AppConstants.ApiResources.CrimesByPinCode(pinCode)}`;

    const request = fetch(
        getCrimesFromPinCode,
        {
            method: 'GET',
            signal: cancellationSignal
        }
    );

    try{
        const response = await request;
        if (response.ok) {
            const result = await response.json();
            return ConvertToCrimesModel(result);
        }
        // check error type
        return {pinCode: '', totalCrimes: 0, crimeList: []}
    }
    catch(e: any){
        if (e.name == 'AbortError') {
            console.log('Cancelled')
            return {pinCode: '', totalCrimes: 0, crimeList: []}
        }
        // check error
        return {pinCode: '', totalCrimes: 0, crimeList: []}
    }

}


function ConvertToCrimesModel(apiResult: any): Crimes{
    const keys = Object.keys(apiResult);
    if('_id' in apiResult){
        const pinCode = apiResult._id;
        const totalCrimes: number = apiResult['Crime']
        const crimeList: Crimes['crimeList'] = []
        for(let type of keys.filter(x => (x !== '_id' && x !== 'Crime'))){
            crimeList.push({type, count: apiResult[type]})
        }
        return {pinCode, totalCrimes, crimeList};
    }
    return {pinCode: '', totalCrimes: 0, crimeList: []}
}