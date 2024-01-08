import AsyncStorage from "@react-native-async-storage/async-storage";
import { ItemData } from "../interface/ItemData"
import { PedidoData } from "../interface/PedidoData"


export const Pedidoservice = {

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

  retrieveAddPedidoData: async (pedido: PedidoData) => {
    try {
      const storedData = await AsyncStorage.getItem('pedidoList');
      let pedidoArray: PedidoData[] = [];
  
      if (storedData !== null) {
        pedidoArray = JSON.parse(storedData);
      }

      pedidoArray.push(pedido);
  
      // 3. Salvar o array atualizado de itens de volta no AsyncStorage
      await AsyncStorage.setItem('pedidoList', JSON.stringify(pedidoArray));

      return pedido;
    } catch (error) {
      return null;
      console.error('Erro ao recuperar dados do AsyncStorage:', error);
    }
  },

}