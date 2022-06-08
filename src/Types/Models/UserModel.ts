export default interface UserInfo{
    userID: string;
    userName: string;
    authToken: string;
    isSessionValid: 'yes' | 'no' | 'unchecked'
}