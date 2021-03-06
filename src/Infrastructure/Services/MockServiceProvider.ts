import { ICrimeService } from "./CrimeService/ICrimeService";
import { MockCrimesService } from "./CrimeService/MockCrimesService";
import { IServiceProvider } from "./IserviceProvider";
import { ISafeLocationService } from "./SafeLocationService/ISafeLocationService";
import { MockSafeLocationService } from "./SafeLocationService/MockSafeLocationService";
import { IUserService } from "./UserService/IUserService";
import { MockUserService } from "./UserService/MockUserService";

export class MockServiceProvider implements IServiceProvider{
    public readonly UserService: IUserService;
    public readonly SafeLocationService: ISafeLocationService;
    public readonly CrimesService: ICrimeService;

    /**
     *
     */
    constructor() {
        this.UserService = new MockUserService();
        this.SafeLocationService = new MockSafeLocationService();
        this.CrimesService = new MockCrimesService();
    }
}