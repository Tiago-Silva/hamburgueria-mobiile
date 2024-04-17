import { ItemData } from "./ItemData";


export interface PedidoResponseDTO {
  idpedido: number;
  data: string;
  total: number;
  iduser: string;
  tipoPagamento: string;
  status: string;
  type: string;
  items: Array<ItemData>;
}