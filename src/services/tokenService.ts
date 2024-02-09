import * as SecureStorage from 'expo-secure-store';
import { Base64 } from 'js-base64';
import { TokenData } from '../interface/tokenData';

const storageKey = process.env.EXPO_PUBLIC_USER_STORAGE_KEY

export const tokenService = {

  getToken: async () => {
    return await SecureStorage.getItem(storageKey + 'token');
  },

  saveToken: async (token: string) => {
    await SecureStorage.setItem(storageKey + 'token', token);
  },

  retrieveTokenData: async (): Promise<TokenData | undefined> => {
    const tokenStorage = await SecureStorage.getItem(storageKey + 'token');
  
    if (tokenStorage) {
      const tokenObject = JSON.parse(tokenStorage);
      const parts = tokenObject.split('.');
      if (parts.length !== 3) {
        throw new Error('The token is invalid');
      }
  
      const decoded: TokenData = JSON.parse(Base64.decode(parts[1]));
      return decoded;
    }
  }

};