export const AppConstants = {
    ServiceProvider: 'Mock',
    ApiBaseURL: 'https://safety-app-scotland-v2.herokuapp.com',

    ApiResources: {
        Login: 'login',
        Register: 'register',
        SafeLocationsByPinCode: (pincode: string, distance: number) => `GetSafeLocationsByPincode?pincode=${pincode}&max_distance=${distance}`,
        SafeLocationsByLatLong: (long: number, lat: number, distance: number) => `GetSafeLocationsByLatLong?longitude=${long}&latitude=${lat}&max_distance=${distance}`,
        CrimesByPinCode: (pincode: string) => `GetCrimesByPostcode?postcode=${pincode}`,
        CrimesByLatLong: (long: number, lat: number) => `GetCrimesByLatLong?longitude=${long}&latitude=${lat}`
    }
}
