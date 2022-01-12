import { addClientAPI } from "../../api";
import {
  addClientSuccess,
  addClientUnSuccess,
} from "../Actions/AdminClientAction";

export const addClientFunction = (data) => {
  return async (dispatch) => {
    await addClientAPI(data)
      .then((res) => {
        if (res.status === 201) {
          dispatch(addClientSuccess(res.data));
        }
      })
      .catch((err) => dispatch(addClientUnSuccess(err)));
  };
};
