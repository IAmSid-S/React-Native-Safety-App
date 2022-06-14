import { SafeLocation } from "../../../Types/Models/SafeLocation";

export interface ISafeLocationService {
    getSafeLocationsFromPinCode(pincode: string): Promise<SafeLocation[]>,
    getSafeLocationFromLatLong(lat: number, long: number): Promise<SafeLocation[]>
}