// import { getSearchProductAPI } from "../../api";
// import {
//   getProductSuccess,
//   getProductUnSuccess,
// } from "../Actions/ProductAction";
import { startLoading } from "../Actions/Util";

export const searchSingleProductFun = (id) => {
  return async (dispatch) => {
    dispatch(startLoading());
    //     await getSearchProductAPI(id)
    //       .then((res) => {
    //         dispatch(stopLoading());
    //         if (res.status === 200) {
    //           dispatch(getProductSuccess(res.data));
    //         }
    //       })
    //       .catch((err) => dispatch(getProductUnSuccess(err)));
  };
};
