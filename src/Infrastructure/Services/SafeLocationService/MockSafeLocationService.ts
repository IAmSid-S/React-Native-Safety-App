import { SafeLocation } from "../../../Types/Models/SafeLocation";
import { delay } from "../../Utils/MockHelpers";
import { ISafeLocationService } from "./ISafeLocationService";


const safeLocations: SafeLocation[] = [
    {
        name: 'Thornhill Police Station',
        address: 'Thornhill Police Station, Manse Road, Thornhill, DG3 5DR',
        pinCode: 'DG35DR',
        type: "police_station",
        location: ''
    },
    {
        name: 'Stranraer Police Station',
        address: 'Stranraer Police Station, Port Rodie, Stranraer, DG9 8EG',
        pinCode: 'DG98EG',
        type: "police_station",
        location: ''
    },
    {
        name: 'Moffat Police Station',
        address: 'Moffat Police Station, High Street, Moffat, DG10 8HF',
        pinCode: 'DG108HF',
        type: "police_station",
        location: ''
    },
    {
        name: 'Moffat Hospital',
        address: 'Moffat Hospital, Holmend Moffat, DG10 9JY',
        pinCode: 'DG108HF',
        type: "hospital",
        location: ''
    },
    {
        name: 'Kirkcudbright Hospital',
        address: 'Kirkcudbright Hospital, Barrhill Road Townend, Kirkcudbright, DG6 4BE',
        pinCode: 'DG98EG',
        type: "hospital",
        location: ''
    },
    {
        name: 'Kirkcudbright Hospital2',
        address: 'Kirkcudbright Hospital, Barrhill Road Townend, Kirkcudbright, DG6 4BE',
        pinCode: 'DG98EG',
        type: "hospital",
        location: ''
    },
    {
        name: 'Kirkcudbright Hospital3',
        address: 'Kirkcudbright Hospital, Barrhill Road Townend, Kirkcudbright, DG6 4BE',
        pinCode: 'DG98EG',
        type: "hospital",
        location: ''
    },
    {
        name: 'Kirkcudbright Hospital4',
        address: 'Kirkcudbright Hospital, Barrhill Road Townend, Kirkcudbright, DG6 4BE',
        pinCode: 'DG98EG',
        type: "hospital",
        location: ''
    },
    {
        name: 'Kirkcudbright Hospital5',
        address: 'Kirkcudbright Hospital, Barrhill Road Townend, Kirkcudbright, DG6 4BE',
        pinCode: 'DG98EG',
        type: "hospital",
        location: ''
    },
    {
        name: 'Kirkcudbright Hospital6',
        address: 'Kirkcudbright Hospital, Barrhill Road Townend, Kirkcudbright, DG6 4BE',
        pinCode: 'DG98EG',
        type: "hospital",
        location: ''
    },
    {
        name: 'Kirkcudbright Hospital7',
        address: 'Kirkcudbright Hospital, Barrhill Road Townend, Kirkcudbright, DG6 4BE',
        pinCode: 'DG98EG',
        type: "hospital",
        location: ''
    },
    {
        name: 'Kirkcudbright Hospital8',
        address: 'Kirkcudbright Hospital, Barrhill Road Townend, Kirkcudbright, DG6 4BE',
        pinCode: 'DG98EG',
        type: "hospital",
        location: ''
    },
    {
        name: 'Kirkcudbright Police Station',
        address: 'Kirkcudbright Hospital, Barrhill Road Townend, Kirkcudbright, DG6 4BE',
        pinCode: 'DG98EG',
        type: "police_station",
        location: ''
    },
    {
        name: 'Kirkcudbright Police 2',
        address: 'Kirkcudbright Hospital, Barrhill Road Townend, Kirkcudbright, DG6 4BE',
        pinCode: 'DG98EG',
        type: "police_station",
        location: ''
    },
    {
        name: 'Kirkcudbright Police 3',
        address: 'Kirkcudbright Hospital, Barrhill Road Townend, Kirkcudbright, DG6 4BE',
        pinCode: 'DG98EG',
        type: "police_station",
        location: ''
    }
];

export class MockSafeLocationService implements ISafeLocationService{
    async getSafeLocationsFromPinCode(pincode: string): Promise<SafeLocation[]> {
       const locations = safeLocations.filter(x => x.pinCode === pincode);
       await delay(3);
       return locations;
    }
    async getSafeLocationFromLatLong(lat: number, long: number): Promise<SafeLocation[]> {
        var loc = safeLocations[Math.floor(Math.random()*safeLocations.length)];
        const pinCode = loc.pinCode;

        return await this.getSafeLocationsFromPinCode(pinCode);
    }
    
}