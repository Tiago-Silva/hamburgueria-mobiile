import { ItemData } from '../../../interface/ItemData';

export interface IState {
  cart: ICartState;
}

export interface ICartState {
  items: ItemData[];
}

interface Action {
  type: string;
}

export interface AddItemToCartAction extends Action {
  type: string;
  payload: {
    item: ItemData;
  };
}
