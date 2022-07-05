import { AppConstants } from "../../../Types/Constants/AppConstants";
import { SafeLocation } from "../../../Types/Models/SafeLocation";


export async function GetCancellableSafeLocationsByPinCodeApiRequest(pinCode: string, cancellationSignal: AbortSignal): Promise<SafeLocation[]> {
    const GetSafeLocationsByPinCodeApi = `${AppConstants.ApiBaseURL}/${AppConstants.ApiResources.SafeLocationsByPinCode(pinCode, 5000)}`;

    const request = fetch(GetSafeLocationsByPinCodeApi,
        {
            method: 'GET',
            signal: cancellationSignal
        });

    try {
        const response = await request;
        if (response.ok) {
            return await response.json() as SafeLocation[]
        }
        // check error type
        return [] as SafeLocation[]
    }
    catch (e: any) {
        if (e.name == 'AbortError') {
            console.log('Cancelled')
            return [] as SafeLocation[];
        }
        // check error
        return [] as SafeLocation[]
    }
}

export async function GetCancellableSafeLocationByLatLongApiRequest(long: number, lat: number, cancellationSignal: AbortSignal): Promise<SafeLocation[]> {

    const getSafeLocationFromLatLong = `${AppConstants.ApiBaseURL}/${AppConstants.ApiResources.SafeLocationsByLatLong(long, lat, 5000)}`;

    const request = fetch(getSafeLocationFromLatLong,   {
        method: 'GET',
        signal: cancellationSignal
    });

    try {
        const response = await request;
        if (response.ok) {
            return await response.json() as SafeLocation[]
        }
        // check error type
        return [] as SafeLocation[]
    }
    catch (e: any) {
        if (e.name == 'AbortError') {
            console.log('Cancelled')
            return [] as SafeLocation[];
        }
        // check error
        return [] as SafeLocation[]
    }
}
