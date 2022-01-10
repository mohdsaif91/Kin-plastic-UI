import { ADMIN_EMAIL_ACTION } from "../Actions/AdminEmailAction";

export function AdminEmail(state = {}, action) {
  switch (action.type) {
    case ADMIN_EMAIL_ACTION.GET_EMAIL_SUCCESS:
      return {
        ...state,
        error: false,
        inqueryEmail: action.data,
      };
    case ADMIN_EMAIL_ACTION.GET_EMAIL_UNSUCCESS:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
}
