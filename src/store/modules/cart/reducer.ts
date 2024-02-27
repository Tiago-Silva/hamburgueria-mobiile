import { Reducer } from "redux";
import { produce } from 'immer';
import { AddItemToCartAction, ICartState } from "./types";

const INITIAL_STATE: ICartState = {
  items: []
}

export const cart: Reducer<ICartState, AddItemToCartAction> = (state = INITIAL_STATE, actions) => {
  return produce(state, draft => {
    switch (actions.type) {
      case 'ADD_ITEM_TO_CART': {

        const { item } = actions.payload;

        const itemInCartIndex = draft.items.findIndex(cartItem => 
          cartItem.idproduto === item.idproduto
        );

        if (itemInCartIndex >= 0) {
          draft.items[itemInCartIndex].quantidade++;
        } else {
          draft.items.push(item);
        }

        break;
      }
      default:
        return draft;
    }
  });
}