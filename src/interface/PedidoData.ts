import { ItemData } from "./ItemData";


export interface PedidoData {
  idpedido?: number;
  data?: string;
  ano?: string;
  mes?: string;
  dia?: string;
  hora?: string;
  total: number;
  userName: string;
  iduser: string;
  tipoPagamento: string;
  items: Array<ItemData>;
}