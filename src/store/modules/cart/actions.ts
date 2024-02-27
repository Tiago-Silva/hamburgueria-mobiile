import { ItemData } from "../../../interface/ItemData";
import { AddItemToCartAction } from "./types";


export function addItemToCart (item: ItemData): AddItemToCartAction {
  return {
    type: 'ADD_ITEM_TO_CART',
    payload: {
      item
    }
  }
}