import {
  addEmployeeAPI,
  deleteEmployeeAPI,
  getEmployeeAPI,
  getOrganisationAPI,
  getOrganisationOwnerAPI,
  getOwnerDataAPI,
  saveContactLocationAPI,
  sendInqueryAPI,
  updateEmployeeAPI,
  updateOwnerAPI,
} from "../../api";
import {
  addEmployeeSuccess,
  addEmployeeUnSucess,
  deleteEmployeeSuccess,
  deleteEmployeeUnSuccess,
  getEmplyeeSuccess,
  getEmplyeeUnSuccess,
  getOrganisationOwnerSucess,
  getOrganisationOwnerUnSucess,
  getOrganisationSucces,
  getOrganisationUnSucces,
  getOwnerDataSucess,
  getOwnerDataUnSucess,
  sendEmailSuccess,
  sendEmailUnSuccess,
  updateEmployeeSuccess,
  updateEmployeeUnSuccess,
  updateOrganisationSucess,
  updateOrganisationUnSucess,
} from "../Actions/AboutusAdminAction";
import { startLoading, stopLoading } from "../Actions/Util";

export const sendInquery = (data) => {
  return async (dispatch) => {
    dispatch(startLoading());
    await sendInqueryAPI(data)
      .then((res) => {
        dispatch(stopLoading());
        if (res.status === 200) {
          dispatch(sendEmailSuccess(res.data));
        }
      })
      .catch((err) => {
        dispatch(stopLoading());
        dispatch(sendEmailUnSuccess(err));
      });
  };
};

export const getOrganisation = () => {
  return async (dispatch) => {
    dispatch(startLoading());
    await getOrganisationAPI()
      .then((res) => {
        dispatch(stopLoading());
        if (res.status === 200) {
          dispatch(getOrganisationSucces(res.data));
        }
      })
      .catch((err) => {
        dispatch(stopLoading());
        dispatch(getOrganisationUnSucces(err));
      });
  };
};

export const getOrganisationOwner = () => {
  return async (dispatch) => {
    dispatch(startLoading());
    await getOrganisationOwnerAPI()
      .then((res) => {
        dispatch(stopLoading());
        if (res.status === 200) {
          dispatch(getOrganisationOwnerSucess(res.data));
        }
      })
      .catch((err) => {
        dispatch(stopLoading());
        dispatch(getOrganisationOwnerUnSucess(err));
      });
  };
};

export const updateOwner = (ownerData) => {
  return async (dispatch) => {
    dispatch(startLoading());
    await updateOwnerAPI(ownerData)
      .then((res) => {
        dispatch(stopLoading());
        if (res.status === 201) {
          dispatch(getOwnerDataSucess(res.data));
        }
      })
      .catch((err) => {
        dispatch(stopLoading());
        dispatch(getOwnerDataUnSucess(err));
      });
  };
};

export const gateOwnerData = () => {
  return async (dispatch) => {
    await getOwnerDataAPI()
      .then((res) => {
        dispatch(stopLoading());
        if (res.status === 200) {
          dispatch(getOwnerDataSucess(res.data));
        }
      })
      .catch((err) => {
        dispatch(stopLoading());
        dispatch(getOwnerDataUnSucess(err));
      });
  };
};

export const addEmployee = (data) => {
  return async (dispatch) => {
    await addEmployeeAPI(data)
      .then((res) => {
        if (res.status === 201) {
          dispatch(addEmployeeSuccess(res.data));
        }
      })
      .catch((err) => {
        dispatch(stopLoading());
        dispatch(addEmployeeUnSucess(err));
      });
  };
};

export const updateEmployee = (data) => {
  return async (dispatch) => {
    dispatch(startLoading());
    await updateEmployeeAPI(data)
      .then((res) => {
        if (res.status === 201) {
          dispatch(updateEmployeeSuccess(res.data));
        }
      })
      .catch((err) => {
        dispatch(stopLoading());
        dispatch(updateEmployeeUnSuccess(err));
      });
  };
};

export const getEmployee = () => {
  return async (dispatch) => {
    dispatch(startLoading());
    await getEmployeeAPI()
      .then((res) => {
        dispatch(stopLoading());
        if (res.status === 200) {
          dispatch(getEmplyeeSuccess(res.data));
        }
      })
      .catch((err) => {
        dispatch(stopLoading());
        dispatch(getEmplyeeUnSuccess(err));
      });
  };
};

export const deleteEmployeethunk = (id, imageName) => {
  return async (dispatch) => {
    dispatch(startLoading());
    await deleteEmployeeAPI(id, imageName)
      .then((res) => {
        dispatch(stopLoading());
        if (res.status === 201) {
          dispatch(deleteEmployeeSuccess(res.data));
        }
      })
      .catch((err) => {
        dispatch(stopLoading());
        dispatch(deleteEmployeeUnSuccess(err));
      });
  };
};

export const saveContactLocation = (data) => {
  return async (dispatch) => {
    dispatch(startLoading());
    await saveContactLocationAPI(data)
      .then((res) => {
        dispatch(stopLoading());
        if ((res.status = 200)) {
          dispatch(updateOrganisationSucess(res.data));
        }
      })
      .catch((err) => {
        dispatch(stopLoading());
        dispatch(updateOrganisationUnSucess(err));
      });
  };
};
