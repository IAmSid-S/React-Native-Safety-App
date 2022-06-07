import { IServiceProvider } from "./IserviceProvider";
import { IUserService } from "./UserService/IUserService";
import { UserService } from "./UserService/UserService";

export class ServiceProvider implements IServiceProvider{
    public readonly UserService: IUserService;

    /**
     *
     */
    constructor() {
        this.UserService = new UserService();
        
    }
}