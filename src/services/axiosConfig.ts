



import axios from 'axios';
import { API_URL } from './apiConfig';

const axiosInstance = axios.create({
  baseURL: API_URL,
  // Outras configurações do Axios, se necessário
});

export default axiosInstance;