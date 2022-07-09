import { Crimes } from "../../../Types/Models/CrimeModel";
import { GetCancellableCrimesByLatLongApiRequest, GetCancellableCrimesByPinCode } from "../APIService/CrimesApi";
import { ICrimeService } from "./ICrimeService";

export class CrimesService implements ICrimeService{
    async getSafeLocationsFromPinCode(pincode: string, cancellationSignal: AbortSignal): Promise<Crimes> {
        return await GetCancellableCrimesByPinCode(pincode, cancellationSignal)
    }
    async getSafeLocationFromLatLong(lat: number, long: number, cancellationSignal: AbortSignal): Promise<Crimes> {
        return await GetCancellableCrimesByLatLongApiRequest(long, lat, cancellationSignal)
    }

}