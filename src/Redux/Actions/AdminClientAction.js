export const CLIETN_ADMIN_ACTION = {
  ADD_CLIENT_SUCCESS: "ADD_CLIENT_SUCCESS",
  ADD_CLIENT_UNSUCCESS: "ADD_CLIENT_UNSUCCESS",
};

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
