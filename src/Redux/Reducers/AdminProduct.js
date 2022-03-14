import { ADMIN_PRODUCT_ACTION } from "../Actions/AdminProductAction";

export function AdminProduct(state = { products: [] }, action) {
  switch (action.type) {
    case ADMIN_PRODUCT_ACTION.DELETE_BEST_SUCESSFUL:
      const deletedProduct = state.allProduct.map((m) => {
        if (m._id === action.data) {
          m.bestProduct = false;
          return m;
        } else {
          return m;
        }
      });
      return {
        ...state,
        error: false,
        allProduct: deletedProduct,
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
        byCategory: action.data.products,
        categoryName: action.data.categoryName,
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
      const updatedProduct = state.allProduct.map((m) => {
        if (m._id === action.data) {
          m.bestProduct = true;
          return m;
        } else {
          return m;
        }
      });
      return {
        ...state,
        allProduct: updatedProduct,
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
    case ADMIN_PRODUCT_ACTION.GET_PRODUCT_SUCCESS_ID:
      return {
        ...state,
        error: false,
        searchedProduct: action.data,
      };
    case ADMIN_PRODUCT_ACTION.GET_PRODUCT_UNSUCCESS_ID:
      return {
        ...state,
        error: true,
        errorMessage: action.data,
      };
    default:
      return state;
  }
}
