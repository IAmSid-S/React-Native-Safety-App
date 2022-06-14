import { SafeLocation } from "../../../Types/Models/SafeLocation";
import { ISafeLocationService } from "./ISafeLocationService";

export class SafeLocationService implements ISafeLocationService{
    getSafeLocationsFromPinCode(pincode: string): Promise<SafeLocation[]> {
        throw new Error("Method not implemented.");
    }
    getSafeLocationFromLatLong(lat: number, long: number): Promise<SafeLocation[]> {
        throw new Error("Method not implemented.");
    }

}