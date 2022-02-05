export const CLIETN_ADMIN_ACTION = {
  ADD_CLIENT_SUCCESS: "ADD_CLIENT_SUCCESS",
  ADD_CLIENT_UNSUCCESS: "ADD_CLIENT_UNSUCCESS",
  DELETE_CLIENT_SUCCESS: "DELETE_CLIENT_SUCCESS",
  DELETE_CLIENT_UNSUCCESS: "DELETE_CLIENT_UNSUCCESS",
  EDIT_CLIENT_SUCCESS: "EDIT_CLIENT_SUCCESS",
  EDIT_CLIENT_UNSUCCESS: "EDIT_CLIENT_UNSUCCESS",
  GET_CLIENT_DATA_SUCCESS: "GET_CLIENT_DATA_SUCCESS",
  GET_CLIENT_DATA_UNSUCCESS: "GET_CLIENT_DATA_UNSUCCESS",
};

export function deleteClientSuccess(data) {
  return {
    type: CLIETN_ADMIN_ACTION.DELETE_CLIENT_SUCCESS,
    data,
  };
}

export function deleteClientUnSuccess(data) {
  return {
    type: CLIETN_ADMIN_ACTION.DELETE_CLIENT_UNSUCCESS,
    data,
  };
}

export function editClientSuccess(data) {
  return {
    type: CLIETN_ADMIN_ACTION.EDIT_CLIENT_SUCCESS,
    data,
  };
}

export function editClientUnSuccess(data) {
  return {
    type: CLIETN_ADMIN_ACTION.EDIT_CLIENT_UNSUCCESS,
    data,
  };
}

export function getClientSuccess(data) {
  return {
    type: CLIETN_ADMIN_ACTION.GET_CLIENT_DATA_SUCCESS,
    data,
  };
}

export function getClientUnSuccess(data) {
  return {
    type: CLIETN_ADMIN_ACTION.GET_CLIENT_DATA_UNSUCCESS,
    data,
  };
}

export function addClientSuccess(data) {
  return {
    type: CLIETN_ADMIN_ACTION.ADD_CLIENT_SUCCESS,
    data,
  };
}

export function addClientUnSuccess(data) {
  return {
    type: CLIETN_ADMIN_ACTION.ADD_CLIENT_UNSUCCESS,
    data,
  };
}
