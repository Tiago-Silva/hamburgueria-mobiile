import { ItemData } from "./ItemData";
import { ItemEntity } from "./ItemEntity";


export interface PedidoData {
  total: number;
  iduser: string;
  tipoPagamento: string;
  items: Array<ItemEntity>;
}