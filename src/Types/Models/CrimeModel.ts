export interface Crimes{
    pinCode: string,
    totalCrimes: number
    crimeList: CrimeKeyValPair[]
}

export type CrimeKeyValPair = {type: string, count: number}