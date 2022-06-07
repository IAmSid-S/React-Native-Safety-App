import { IUserService } from "./UserService/IUserService";

export interface IServiceProvider{
    readonly UserService: IUserService;
    
}