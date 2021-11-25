import { AMDIN_HOME_ACTION } from "../Actions/AdminHomeAction";

export function AdminHomeSetting(state = {}, action) {
  switch (action.type) {
    case AMDIN_HOME_ACTION.DELETE_BEST_PRODUCT_SETTING_SUCESS:
      const deleteBest = state.setting.bestProduct.filter(
        (f) => f._id !== action.data
      );
      state.setting.bestProduct = deleteBest;
      return {
        ...state,
        error: false,
        setting: state.setting,
      };

    case AMDIN_HOME_ACTION.ADD_BEST_PRODUCT_SUCESSFUL:
      return {
        ...state,
        error: false,
        setting: action.data,
      };
    case AMDIN_HOME_ACTION.ADD_BEST_PRODUCT_UNSUCESSFUL:
      return {
        ...state,
        error: true,
        // bestProduct: state.bestProduct.concat(action.data),
      };
    case AMDIN_HOME_ACTION.SETTING_UPDATE_SUCESSFULL:
      return {
        ...state,
        setting: action.data,
        error: false,
      };
    case AMDIN_HOME_ACTION.SETTING_UPDATE_UNSUCESSFULL:
      return {
        ...state,
        error: true,
      };
    case AMDIN_HOME_ACTION.GET_SETTING_SUCESSFULL:
      return {
        ...state,
        error: false,
        setting: action.data,
      };
    case AMDIN_HOME_ACTION.GET_SETTING_UNSUCESSFULL:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
}
