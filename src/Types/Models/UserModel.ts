export default interface UserInfo{
    userID: string;
    userName: string;
    authToken: string;
    loginError: loginError;
    isSessionValid: 'yes' | 'no' | 'unchecked'
}

export type loginError = 'successful' | 'user not found' | 'incorrect password' | 'Server Error' | '';