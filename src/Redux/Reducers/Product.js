import { PRODUCT_ACTION } from "../Actions/ProductAction";

export function Product(state = { navOpen: false }, action) {
  switch (action.type) {
    case PRODUCT_ACTION.GET_ALL_PRODUCT_SUCESSFUL_CLIENT:
      return {
        ...state,
        error: false,
      };
    case PRODUCT_ACTION.CLOSE_NAV:
      return {
        ...state,
        navOpen: action.data,
      };
    case PRODUCT_ACTION.OPEN_NAV:
      return {
        ...state,
        navOpen: action.data,
      };
    default:
      return state;
  }
}
