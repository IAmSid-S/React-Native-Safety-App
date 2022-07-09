import { Crimes } from "../../../Types/Models/CrimeModel";
import { ICrimeService } from "./ICrimeService";

export class MockCrimesService implements ICrimeService{
    getSafeLocationsFromPinCode(pincode: string, cancellationSignal: AbortSignal): Promise<Crimes> {
        throw new Error("Method not implemented.");
    }
    getSafeLocationFromLatLong(lat: number, long: number, cancellationSignal: AbortSignal): Promise<Crimes> {
        throw new Error("Method not implemented.");
    }

}