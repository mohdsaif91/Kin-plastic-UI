export const ADMIN_EMAIL_ACTION = {
  GET_EMAIL_SUCCESS: "GET_EMAIL_SUCCESS",
  GET_EMAIL_UNSUCCESS: "GET_EMAIL_UNSUCCESS",
};

export function getEmailSuccess(data) {
  return {
    type: ADMIN_EMAIL_ACTION.GET_EMAIL_SUCCESS,
    data,
  };
}

export function getEmailUnSuccess(data) {
  return {
    type: ADMIN_EMAIL_ACTION.GET_EMAIL_UNSUCCESS,
    data,
  };
}
