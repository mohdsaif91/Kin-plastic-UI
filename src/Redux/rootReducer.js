import { combineReducers } from "redux";

import { AdminReducer } from "./Reducers/AdminReducers";
import { AdminHomeSetting } from "./Reducers/AdminHomeSetting";
import { AdminCategories } from "./Reducers/AdminCategories";

const createRootReducer = () => {
  //this grabs all the reducers and generators one
  return combineReducers({
    AdminReducer: AdminReducer,
    AdminHomeSetting,
    AdminCategories,
  });
};

export default createRootReducer;
