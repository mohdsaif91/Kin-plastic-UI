import { combineReducers } from "redux";

import { AdminReducer } from "./Reducers/AdminReducers";
import { AdminHomeSetting } from "./Reducers/AdminHomeSetting";
import { AdminCategories } from "./Reducers/AdminCategories";
import { AdminProduct } from "./Reducers/AdminProduct";
import { AdminService } from "./Reducers/AdminService";
import { AdminAboutUs } from "./Reducers/AdminAboutUs";
import { AdminEmail } from "./Reducers/AdminEmail";

const createRootReducer = () => {
  //this grabs all the reducers and generators one
  return combineReducers({
    AdminAboutUs,
    AdminCategories,
    AdminHomeSetting,
    AdminProduct,
    AdminReducer,
    AdminService,
    AdminEmail,
  });
};

export default createRootReducer;
