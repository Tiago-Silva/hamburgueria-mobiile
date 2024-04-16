import AsyncStorage from "@react-native-async-storage/async-storage";
import { PedidoData } from "../interface/PedidoData"
import { AxiosResponse } from 'axios';
import { authenticatedAxiosInstance } from './axiosConfig';
import { itemService } from "./itemService";
import { ItemRequestDTO } from "../interface/itemRequestDTO";
import { PedidoResponseDTO } from "../interface/PedidoResponseDTO";


export const pedidoservice = {

  creationPedido: (
    total: number,
    iduser: string,
    tipoPagamento: string,
    items: Array<ItemRequestDTO>,
    type: string
  ): PedidoData => {
    return {
      total: total,
      iduser: iduser,
      tipoPagamento: tipoPagamento,
      itemRequestDTOS: items,
      type: type
    }
  },

  save: async (
    newOrder: PedidoData
  ) => {
    try {
      await authenticatedAxiosInstance.post('/pedido/save', newOrder);
      itemService.deleteListItem();
    } catch (error) {
      console.error('Erro ao salvar o pedido:', error);
      throw error;
    }
  },

  saveToCartStorage: async (pedido: PedidoData): Promise<PedidoData | null> => {
    try {
      const objectData = await AsyncStorage.getItem('pedidoObject');

      
  
      if (objectData) {
        const novoPedido: PedidoData = JSON.parse(objectData);
        pedido.itemRequestDTOS = novoPedido.itemRequestDTOS;
      }

      await AsyncStorage.setItem('pedidoObject', JSON.stringify(pedido));

      return pedido;
    } catch (error) {
      console.error('Erro ao salvar ou recuperar pedido do AsyncStorage:', error);
      return null;
    }
  },
  
  getPedidoByUserId: async (
    userId: string
  ): Promise<AxiosResponse<PedidoResponseDTO[]>> => {
    const response = await authenticatedAxiosInstance.get('/pedido/getPedidosByUser', {
      headers: {
        iduser: userId
      }
    });
    return response;
  },

}