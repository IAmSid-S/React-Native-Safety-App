export interface Crimes{
    pinCode: string,
    crimeList: CrimeKeyValPair[]
}

export type CrimeKeyValPair = {type: string, count: number}