import { ImageSourcePropType } from "react-native";


export interface ItemData {
  iditem?: number;
  quantidade: number;
  descricao: string;
  valor: number;
  total: number;
  idproduto: number;
  idpedido?: number;
  urlImage: ImageSourcePropType;
}