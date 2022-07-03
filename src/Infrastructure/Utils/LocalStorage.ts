import AsyncStorage from '@react-native-async-storage/async-storage';
import { LocalStorageConstants, LocalStorageStatus } from '../../Types/Constants/LocalStorageConstants';


export const storeData = async (key: LocalStorageConstants, value: any): Promise<LocalStorageStatus> => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem(key, jsonValue)
    } catch (e) {
      console.log('Saving error: ',e)
      return 'Failure'
    }
    return 'Success'
  }


  export const getData = async<Type> (key: LocalStorageConstants): Promise<Type | null> => {
    try {
      const jsonValue = await AsyncStorage.getItem(key)
      const result: Type = jsonValue != null ? JSON.parse(jsonValue) : null;

      return result;
    } catch(e) {
        console.log('Error while fetching', e);
        return null;
    }
  }
  