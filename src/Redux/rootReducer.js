import { combineReducers } from "redux";

import { AdminReducer } from "./Reducers/AdminReducers";
import { AdminHomeSetting } from "./Reducers/AdminHomeSetting";
import { AdminCategories } from "./Reducers/AdminCategories";
import { AdminProduct } from "./Reducers/AdminProduct";

const createRootReducer = () => {
  //this grabs all the reducers and generators one
  return combineReducers({
    AdminCategories,
    AdminHomeSetting,
    AdminProduct,
    AdminReducer,
  });
};

export default createRootReducer;
