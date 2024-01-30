import { AxiosResponse } from 'axios';
import { publicAxiosInstance } from './axiosConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserRegisterData } from '../interface/UserRegisterData';

const userStorageKey = '@alonsao_burguer:';

export const userService = {

  saveUserRegisterAndAuthentication: async (
    userData: UserRegisterData
  ): Promise<AxiosResponse<string>> => {
    try {
      const response = await publicAxiosInstance.post('/auth/register', userData);
      await AsyncStorage.setItem(userStorageKey + 'token', JSON.stringify(response.data));
      return response;
    } catch (error) {
      console.error('Erro ao salvar usuário e autenticação:', error);
      throw error;
    }
  }

}