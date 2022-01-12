import { CLIETN_ADMIN_ACTION } from "../Actions/AdminClientAction";

export function AdminClient(state = {}, action) {
  switch (action.type) {
    case CLIETN_ADMIN_ACTION.ADD_CLIENT_SUCCESS:
      return {
        ...state,
        client: action.data,
        error: false,
      };
    case CLIETN_ADMIN_ACTION.ADD_CLIENT_UNSUCCESS:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
}
