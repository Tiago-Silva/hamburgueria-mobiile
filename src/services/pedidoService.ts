import AsyncStorage from "@react-native-async-storage/async-storage";
import { ItemData } from "../interface/ItemData"
import { PedidoData } from "../interface/PedidoData"
import axios from "axios";
import { ItemEntity } from "../interface/ItemEntity";


export const pedidoservice = {

  creationPedido: (
    total: number,
    iduser: string,
    tipoPagamento: string,
    items: Array<ItemEntity>,
  ): PedidoData => {
    return {
      total: total,
      iduser: iduser,
      tipoPagamento: tipoPagamento,
      items: items,
    }
  },

  save: async (
    newOrder: PedidoData
  ) => {
    try {
      const response = await axios.post('http://192.168.20.20:8080/pedido/save', newOrder);
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
        pedido.items = novoPedido.items;
      }

      await AsyncStorage.setItem('pedidoObject', JSON.stringify(pedido));

      return pedido;
    } catch (error) {
      console.error('Erro ao salvar ou recuperar pedido do AsyncStorage:', error);
      return null;
    }
  },
  

}