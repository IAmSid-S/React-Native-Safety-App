import { IServiceProvider } from "./IserviceProvider";
import { IUserService } from "./UserService/IUserService";
import { MockUserService } from "./UserService/MockUserService";

export class MockServiceProvider implements IServiceProvider{
    public readonly UserService: IUserService;

    /**
     *
     */
    constructor() {
        this.UserService = new MockUserService();
        
    }
}