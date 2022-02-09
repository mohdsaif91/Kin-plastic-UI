import {
  addClientAPI,
  deleteClientAPI,
  editClientApi,
  getClientAPI,
} from "../../api";
import {
  addClientSuccess,
  addClientUnSuccess,
  deleteClientSuccess,
  deleteClientUnSuccess,
  editClientSuccess,
  editClientUnSuccess,
  getClientSuccess,
  getClientUnSuccess,
} from "../Actions/AdminClientAction";
import { startLoading, stopLoading } from "../Actions/Util";

export const addClientFunction = (data) => {
  return async (dispatch) => {
    dispatch(startLoading());
    await addClientAPI(data)
      .then((res) => {
        dispatch(stopLoading());
        if (res.status === 201) {
          dispatch(addClientSuccess(res.data));
        }
      })
      .catch((err) => {
        dispatch(stopLoading());
        dispatch(addClientUnSuccess(err));
      });
  };
};

export const deleteClientFunction = (id, imageName) => {
  return async (dispatch) => {
    dispatch(startLoading());
    await deleteClientAPI(id, imageName)
      .then((res) => {
        dispatch(stopLoading());
        if (res.status === 201) {
          dispatch(deleteClientSuccess(res.data));
        }
      })
      .catch((err) => {
        dispatch(stopLoading());
        dispatch(deleteClientUnSuccess(err));
      });
  };
};

export const editClientFunction = (data) => {
  return async (dispatch) => {
    dispatch(startLoading());
    await editClientApi(data)
      .then((res) => {
        dispatch(stopLoading());
        if (res.status === 200) {
          dispatch(editClientSuccess(res.data));
        }
      })
      .catch((err) => {
        dispatch(stopLoading());
        dispatch(editClientUnSuccess(err));
      });
  };
};

export const getClientFunction = () => {
  return async (dispatch) => {
    dispatch(startLoading());
    await getClientAPI()
      .then((res) => {
        dispatch(stopLoading());
        if (res.status === 200) {
          dispatch(getClientSuccess(res.data));
        }
      })
      .catch((err) => {
        dispatch(stopLoading());
        dispatch(getClientUnSuccess(err));
      });
  };
};
