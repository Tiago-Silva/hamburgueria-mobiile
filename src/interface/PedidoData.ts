import { ItemRequestDTO } from "./itemRequestDTO";


export interface PedidoData {
  total: number;
  iduser: string;
  tipoPagamento: string;
  itemRequestDTOS: Array<ItemRequestDTO>;
  type: string;
  status?: string;
}