import { getSearchProductAPI } from "../../api";
import {
  getProductSucessfulId,
  getProductUnSucessfulId,
} from "../Actions/AdminProductAction";

import { startLoading, stopLoading } from "../Actions/Util";

export const searchSingleProductFun = (id) => {
  return async (dispatch) => {
    dispatch(startLoading());
    await getSearchProductAPI(id)
      .then((res) => {
        dispatch(stopLoading());
        if (res.status === 200) {
          dispatch(getProductSucessfulId(res.data));
        }
      })
      .catch((err) => {
        dispatch(stopLoading());
        dispatch(getProductUnSucessfulId(err));
      });
  };
};
