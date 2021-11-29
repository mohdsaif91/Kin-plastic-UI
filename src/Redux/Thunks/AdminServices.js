import { addServiceAPI, getServicesAPI } from "../../api";
import {
  addServiceSucess,
  addServiceUnSucess,
  getServiceSucess,
  getServiceUnSucess,
} from "../Actions/AdminServiceAction";
import { startLoading } from "../Actions/Util";

export const addService = (data) => {
  return async (dispatch) => {
    dispatch(startLoading());
    await addServiceAPI(data)
      .then((res) => {
        if (res.status === 201) {
          dispatch(addServiceSucess(res.data));
        }
      })
      .catch((err) => dispatch(addServiceUnSucess(err)));
  };
};

export const getServices = () => {
  return async (dispatch) => {
    dispatch(startLoading());
    await getServicesAPI()
      .then((res) => {
        if (res.status === 200) {
          dispatch(getServiceSucess(res.data));
        }
      })
      .catch((err) => getServiceUnSucess(err));
  };
};
