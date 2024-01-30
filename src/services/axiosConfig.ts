import axios from 'axios';
import { API_URL } from './apiConfig';
import * as SecureStorage from 'expo-secure-store';

const storageKey = process.env.EXPO_PUBLIC_USER_STORAGE_KEY;

// Axios para rotas autenticadas
const authenticatedAxiosInstance = axios.create({
  baseURL: API_URL,
  // Outras configurações do Axios, se necessário
});

authenticatedAxiosInstance.interceptors.request.use(
  async (config) => {
    // const { token } = useAuth();
    // Recupera o token do AsyncStorage
    const tokenStorage = await SecureStorage.getItem(storageKey + 'token');

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
