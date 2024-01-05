import AsyncStorage from "@react-native-async-storage/async-storage";
import { ItemData } from "../interface/Item";


export const itemService = {

  creationItem: (
    quantidade: number,
    descricao: string,
    valor: number,
    total: number,
    idproduto: number
  ): ItemData => {
    return {
      iditem: undefined,
      quantidade: quantidade,
      descricao: descricao,
      valor: valor,
      total: total,
      idproduto: idproduto,
      idpedido: undefined,
    }
  },

  retrieveItemData: async (item: ItemData) => {
    try {
      const storedData = await AsyncStorage.getItem('itemList');
      let itemsArray: ItemData[] = [];
  
      if (storedData !== null) {
        itemsArray = JSON.parse(storedData);
      }

      const indexEncontrado = itemsArray.findIndex(data => data.idproduto === item.idproduto);

      if (indexEncontrado !== -1) {
        // Se encontrar um item com o mesmo idproduto, substitui o item existente pelo novo
        itemsArray[indexEncontrado] = {
          ...itemsArray[indexEncontrado],
          total: itemsArray[indexEncontrado].total + item.total,
          quantidade: itemsArray[indexEncontrado].quantidade + item.quantidade,
        };

      } else {
        // Se não encontrar, adiciona o novo item ao array
        itemsArray.push(item);
      }
  
      // 3. Salvar o array atualizado de itens de volta no AsyncStorage
      await AsyncStorage.setItem('itemList', JSON.stringify(itemsArray));

      if (indexEncontrado !== -1) {
        return itemsArray[indexEncontrado];
      } else {
        return item;
      }
    } catch (error) {
      return null;
      console.error('Erro ao recuperar dados do AsyncStorage:', error);
    }
  }

}