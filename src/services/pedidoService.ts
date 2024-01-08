import AsyncStorage from "@react-native-async-storage/async-storage";
import { ItemData } from "../interface/ItemData"
import { PedidoData } from "../interface/PedidoData"


export const pedidoservice = {

  creationPedido: (
    total: number,
    userName: string,
    iduser: string,
    tipoPagamento: string,
    items: Array<ItemData>,
  ): PedidoData => {
    return {
      idpedido: undefined,
      data: undefined,
      ano: undefined,
      mes: undefined,
      dia: undefined,
      hora: undefined,
      total: total,
      userName: userName,
      iduser: iduser,
      tipoPagamento: tipoPagamento,
      items: items,
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