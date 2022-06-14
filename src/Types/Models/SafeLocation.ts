export interface SafeLocation {
    name: string,
    address: string,
    type: 'police_station' | 'hospital',
    pinCode: string,
    location: any
}