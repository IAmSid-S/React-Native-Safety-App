import { SafeLocation } from "../../../Types/Models/SafeLocation";
import { GetCancellableSafeLocationByLatLongApiRequest, GetCancellableSafeLocationsByPinCodeApiRequest } from "../APIService/SafeLocationsApi";
import { ISafeLocationService } from "./ISafeLocationService";

export class SafeLocationService implements ISafeLocationService{
    async getSafeLocationsFromPinCode(pincode: string, cancellationSignal: AbortSignal): Promise<SafeLocation[]> {
        const safeLocations = await GetCancellableSafeLocationsByPinCodeApiRequest(pincode, cancellationSignal);

        return safeLocations.sort((a,b) => a.distance - b.distance);
    }
    async getSafeLocationFromLatLong(lat: number, long: number, cancellationSignal: AbortSignal): Promise<SafeLocation[]> {
        const safeLocations = await GetCancellableSafeLocationByLatLongApiRequest(long, lat, cancellationSignal);

        return safeLocations.sort((a,b) => a.distance - b.distance);
    }

}