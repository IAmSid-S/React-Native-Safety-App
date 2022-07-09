import { CrimesService } from "./CrimeService/CrimesService";
import { IServiceProvider } from "./IserviceProvider";
import { ISafeLocationService } from "./SafeLocationService/ISafeLocationService";
import { SafeLocationService } from "./SafeLocationService/SafeLocationService";
import { IUserService } from "./UserService/IUserService";
import { UserService } from "./UserService/UserService";

export class ServiceProvider implements IServiceProvider{
    public readonly UserService: IUserService;
    public readonly SafeLocationService: ISafeLocationService;
    public readonly CrimesService: CrimesService;

    /**
     *
     */
    constructor() {
        this.UserService = new UserService();
        this.SafeLocationService = new SafeLocationService();
        this.CrimesService = new CrimesService();
    }
    
}