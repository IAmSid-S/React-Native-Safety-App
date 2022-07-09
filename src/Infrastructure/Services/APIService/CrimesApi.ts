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
        return {pinCode: '', crimeList: []}
    }
    catch(e: any){
        if (e.name == 'AbortError') {
            console.log('Cancelled')
            return {pinCode: '', crimeList: []}
        }
        // check error
        return {pinCode: '', crimeList: []}
    }

}

export async function GetCancellableCrimesByPinCode(pinCode: string, cancellationSignal: AbortSignal) {
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
        return {pinCode: '', crimeList: []}
    }
    catch(e: any){
        if (e.name == 'AbortError') {
            console.log('Cancelled')
            return {pinCode: '', crimeList: []}
        }
        // check error
        return {pinCode: '', crimeList: []}
    }

}


function ConvertToCrimesModel(apiResult: any): Crimes{
    const keys = Object.keys(apiResult);
    if('_id' in apiResult){
        const pinCode = apiResult._id;
        const crimeList: Crimes['crimeList'] = []
        for(let type of keys.filter(x => x !== '_id')){
            crimeList.push({type, count: apiResult[type]})
        }
        return {pinCode, crimeList};
    }
    return {pinCode: '', crimeList: []}
}