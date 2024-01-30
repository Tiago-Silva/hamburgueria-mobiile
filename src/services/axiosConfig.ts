import axios from 'axios';
import { API_URL } from './apiConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useAuth } from '../hooks/auth';

// Axios para rotas autenticadas
const authenticatedAxiosInstance = axios.create({
  baseURL: API_URL,
  // Outras configurações do Axios, se necessário
});

authenticatedAxiosInstance.interceptors.request.use(
  async (config) => {
    // const { token } = useAuth();
    // Recupera o token do AsyncStorage
    const tokenStorage = await AsyncStorage.getItem('@alonsao_burguer:token');

    // Adiciona o token ao cabeçalho da requisição, se existir
    if (tokenStorage) {
      const tokenObject = JSON.parse(tokenStorage);
      config.headers.Authorization = `Bearer ${tokenObject.token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Axios para rotas não autenticadas
const publicAxiosInstance = axios.create({
  baseURL: API_URL,
  // Outras configurações do Axios, se necessário
});

export { authenticatedAxiosInstance, publicAxiosInstance };
