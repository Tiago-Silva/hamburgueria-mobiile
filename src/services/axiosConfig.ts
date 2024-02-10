import axios from 'axios';
import { API_URL } from './apiConfig';
import * as SecureStorage from 'expo-secure-store';

const storageKey = process.env.EXPO_PUBLIC_USER_STORAGE_KEY;

// Axios para rotas não autenticadas
const publicAxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'User-Agent': 'MOBILLE'
  }
});

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

      config.headers.Authorization = `Bearer ${tokenObject}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

authenticatedAxiosInstance.interceptors.response.use(
  (response) => {
    // Se a resposta foi bem-sucedida, simplesmente retorne a resposta
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response && (error.response.status === 401 || error.response.status === 403)) {

      const refreshTokenStorage = await SecureStorage.getItem(storageKey + 'refreshToken');
      
      if (refreshTokenStorage) {
        const tokenObject = JSON.parse(refreshTokenStorage);
        try {
          const response = await publicAxiosInstance.post('/auth/refresh-token', tokenObject);
          
          if (response) {
            await SecureStorage.setItem(storageKey + 'token', JSON.stringify(response.data.token));
            await SecureStorage.setItem(storageKey + 'refreshToken', JSON.stringify(response.data.refreshToken));
            
            originalRequest.headers.Authorization = `Bearer ${response.data.token}`;
            // Refaz a requisição original
            return authenticatedAxiosInstance(originalRequest);
          }
        } catch (error) {
          console.error('error no axiosConfig: ', error);          
        }
      }
    }
    // Se ocorreu um erro, faça algo com o erro
    return Promise.reject(error);
  }
);


export { authenticatedAxiosInstance, publicAxiosInstance };
