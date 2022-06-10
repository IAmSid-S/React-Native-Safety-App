export default interface UserInfo{
    userID: string;
    userName: string;
    authToken: string;
    loginErrors: string;
    isSessionValid: 'yes' | 'no' | 'unchecked'
}