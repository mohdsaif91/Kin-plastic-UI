import { AMDIN_CATEGORY_ACTION } from "../Actions/AdminCategoryAction";

export function AdminCategories(state = {}, action) {
  switch (action.type) {
    case AMDIN_CATEGORY_ACTION.GET_CATEGORY_SUCESSFULL:
      return {
        ...state,
        categories: action.data,
        error: false,
      };
    case AMDIN_CATEGORY_ACTION.GET_CATEGORY_UNSUCESSFULL:
      return {
        ...state,
        categories: action.data,
        error: true,
      };
    case AMDIN_CATEGORY_ACTION.UPDATE_CATEGORY_SUCESSFULL:
      console.log(action.data, "before the loop !");

      const updateValue = state.categories.map((m) => {
        if (m._id === action.data._id) {
          console.log(action.data, " In LOOP");
          return action.data;
        } else {
          return m;
        }
      });
      console.log(updateValue, " AFTER THE LOOP");
      return {
        ...state,
        categories: updateValue,
        error: false,
      };
    case AMDIN_CATEGORY_ACTION.DELETE_CATEGORY_SUCESSFULL:
      return {
        ...state,
        categories: state.categories.filter((f) => f._id !== action.data),
        error: false,
      };
    case AMDIN_CATEGORY_ACTION.ADD_CATEGORY_SUCESSFULL:
      console.log(action.data, "<>?");
      return {
        ...state,
        categories: [...state.categories, action.data],
        error: false,
      };
    case AMDIN_CATEGORY_ACTION.ADD_CATEGORY_UNSUCESSFULL:
      return {
        ...state,
        error: true,
        errorMessage: action.data,
      };
    default:
      return state;
  }
}
