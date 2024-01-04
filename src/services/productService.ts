import { AxiosResponse } from 'axios';
import axios from './axiosConfig';
import { ProductData } from "../interface/ProductData";



export const productService = {

  getProductsByIdEstablisment: async (
    idestabelecimento: number
  ): Promise<AxiosResponse<ProductData[]>> => {
    const response = await axios.get('/produto/getProdutos/' + idestabelecimento);
    return response;
  },

  getProductsByCategory: async (
    idestabelecimento: number,
    category: string
  ): Promise<AxiosResponse<ProductData[]>> => {
    const response = await axios.get('/produto/getProdutos/' + idestabelecimento + '/' + category);
    return response;
  }
}