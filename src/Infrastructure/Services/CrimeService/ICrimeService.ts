import { Crimes } from "../../../Types/Models/CrimeModel";

export interface ICrimeService{   
    getSafeLocationsFromPinCode(pincode: string, cancellationSignal: AbortSignal): Promise<Crimes>,
    getSafeLocationFromLatLong(lat: number, long: number, cancellationSignal: AbortSignal): Promise<Crimes>
}