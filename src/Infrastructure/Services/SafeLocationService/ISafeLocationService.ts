import { SafeLocation } from "../../../Types/Models/SafeLocation";

export interface ISafeLocationService {
    getSafeLocationsFromPinCode(pincode: string, cancellationSignal: AbortSignal): Promise<SafeLocation[]>,
    getSafeLocationFromLatLong(lat: number, long: number, cancellationSignal: AbortSignal): Promise<SafeLocation[]>
}