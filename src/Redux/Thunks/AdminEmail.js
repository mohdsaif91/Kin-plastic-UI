import { getEmailAPI } from "../../api";
import {
  getEmailSuccess,
  getEmailUnSuccess,
} from "../Actions/AdminEmailAction";

export const getEmail = () => {
  return async (dispatch) => {
    await getEmailAPI()
      .then((res) => {
        if (res.status === 200) {
          dispatch(getEmailSuccess(res.data));
        }
      })
      .catch((err) => dispatch(getEmailUnSuccess(err)));
  };
};
