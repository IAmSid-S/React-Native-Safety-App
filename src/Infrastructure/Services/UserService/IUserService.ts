export interface IUserService{
    userID: string,
    userName: string,
    authToken: string,
    
    getUserInfo(): void,
    logOut(): void
}