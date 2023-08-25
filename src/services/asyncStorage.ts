import AsyncStorage from '@react-native-async-storage/async-storage';

import { tryCatch } from '../utils/tryCatch';

const storeTokenOnAsyncStorage = async (token: string) => {
  const [, error] = await tryCatch(AsyncStorage.setItem('token', token));

  if (error) {
    console.warn('Error on store token on async storage', error);
  }
};

const getTokenOnAsyncStorage = async () => {
  const [result, error] = await tryCatch(AsyncStorage.getItem('token'));

  if (error) {
    console.warn('Error on get token on async storage', error);
  }
  return result;
};

const removeTokenOnAsyncStorage = async () => {
  const [, error] = await tryCatch(AsyncStorage.removeItem('token'));

  if (error) {
    console.warn('Error on remove token on async storage', error);
  }
};

export { getTokenOnAsyncStorage, storeTokenOnAsyncStorage, removeTokenOnAsyncStorage };
