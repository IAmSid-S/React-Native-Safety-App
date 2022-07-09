import { ICrimeService } from "./CrimeService/ICrimeService";
import { ISafeLocationService } from "./SafeLocationService/ISafeLocationService";
import { IUserService } from "./UserService/IUserService";

export interface IServiceProvider{
    readonly UserService: IUserService;
    readonly SafeLocationService: ISafeLocationService;
    readonly CrimesService: ICrimeService
}