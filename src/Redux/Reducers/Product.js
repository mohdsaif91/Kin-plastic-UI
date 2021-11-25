import { PRODUCT_ACTION } from "../Actions/ProductAction";

export function Product(state = {}, action) {
  switch (action.type) {
    case PRODUCT_ACTION.GET_ALL_PRODUCT_SUCESSFUL_CLIENT:
      return {
        ...state,
        error: false,
      };
    default:
      return state;
  }
}
