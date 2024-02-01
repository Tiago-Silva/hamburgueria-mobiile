import { AxiosResponse } from 'axios';
import { publicAxiosInstance } from './axiosConfig';
import { UserRegisterData } from '../interface/UserRegisterData';
import * as SecureStorage from 'expo-secure-store';

const storageKey = process.env.EXPO_PUBLIC_USER_STORAGE_KEY;


export const userService = {

  saveUserRegisterAndAuthentication: async (
    userData: UserRegisterData
  ): Promise<AxiosResponse<string>> => {
    const response = await publicAxiosInstance.post('/auth/register', userData);
    await SecureStorage.setItem(storageKey + 'token', JSON.stringify(response.data));
    return response;
  }

}