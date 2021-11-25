import { ADMIN_PRODUCT_ACTION } from "../Actions/AdminProductAction";

export function AdminProduct(state = {}, action) {
  switch (action.type) {
    case ADMIN_PRODUCT_ACTION.DELETE_BEST_SUCESSFUL:
      return {
        ...state,
        error: false,
        bestProduct: state.bestProduct.filter((f) => f._id !== action.data),
      };
    case ADMIN_PRODUCT_ACTION.GET_BEST_PRODUCT_SUCESS:
      return {
        ...state,
        bestProduct: action.data,
        error: false,
      };
    case ADMIN_PRODUCT_ACTION.GET_BEST_PRODUCT_UNSUCESS:
      return {
        ...state,
        error: true,
      };
    case ADMIN_PRODUCT_ACTION.GET_ALL_PRODUCTS_SUCESSFUL:
      return {
        ...state,
        allProduct: action.data,
        error: false,
      };
    case ADMIN_PRODUCT_ACTION.GET_ALL_PRODUCTS_UN_SUCESSFUL:
      return {
        ...state,
        error: true,
      };
    case ADMIN_PRODUCT_ACTION.GET_PRODUCT_BY_CATEGORY_SUCESSFUL:
      return {
        ...state,
        byCategory: action.data,
        error: false,
      };
    case ADMIN_PRODUCT_ACTION.GET_PRODUCT_BY_CATEGORY_UNSUCESSFUL:
      return {
        ...state,
        error: true,
      };
    case ADMIN_PRODUCT_ACTION.DELETE_PRODUCT_SUCESSFUL:
      return {
        ...state,
        error: false,
        products: state.products.filter((f) => f._id !== action.data),
      };
    case ADMIN_PRODUCT_ACTION.DELETE_PRODUCT_UNSUCESSFUL:
      return {
        ...state,
        error: true,
      };
    case ADMIN_PRODUCT_ACTION.ADD_PRODUCT_SUCESSFUL:
      return {
        ...state,
        products: state.products.concat(action.data),
        error: false,
      };
    case ADMIN_PRODUCT_ACTION.ADD_PRODUCT_UNSUCESSFUL:
      return {
        ...state,
        error: true,
      };
    case ADMIN_PRODUCT_ACTION.GET_PRODUCT_SUCESSFUL:
      return {
        ...state,
        error: false,
        products: action.data,
      };
    case ADMIN_PRODUCT_ACTION.GET_PRODUCT_UNSUCESSFUL:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
}
