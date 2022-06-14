import { IServiceProvider } from "./IserviceProvider";
import { ISafeLocationService } from "./SafeLocationService/ISafeLocationService";
import { SafeLocationService } from "./SafeLocationService/SafeLocationService";
import { IUserService } from "./UserService/IUserService";
import { UserService } from "./UserService/UserService";

export class ServiceProvider implements IServiceProvider{
    public readonly UserService: IUserService;
    public readonly SafeLocationService: ISafeLocationService;

    /**
     *
     */
    constructor() {
        this.UserService = new UserService();
        this.SafeLocationService = new SafeLocationService();
        
    }
    
}