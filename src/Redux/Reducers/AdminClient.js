import { CLIETN_ADMIN_ACTION } from "../Actions/AdminClientAction";

export function AdminClient(state = {}, action) {
  switch (action.type) {
    case CLIETN_ADMIN_ACTION.ADD_CLIENT_SUCCESS:
      const { edit, oldImageName, ...restProps } = action.data;
      return {
        ...state,
        client: [...state.client, restProps],
        error: false,
      };
    case CLIETN_ADMIN_ACTION.ADD_CLIENT_UNSUCCESS:
      return {
        ...state,
        error: true,
      };
    case CLIETN_ADMIN_ACTION.GET_CLIENT_DATA_SUCCESS:
      return {
        ...state,
        error: false,
        client: action.data,
      };
    case CLIETN_ADMIN_ACTION.GET_CLIENT_DATA_UNSUCCESS:
      return {
        ...state,
        error: true,
      };
    case CLIETN_ADMIN_ACTION.EDIT_CLIENT_SUCCESS:
      return {
        ...state,
        error: false,
        client: state.client.map((m) => {
          if (m._id === action.data._id) {
            return action.data;
          } else {
            return m;
          }
        }),
      };
    case CLIETN_ADMIN_ACTION.EDIT_CLIENT_UNSUCCESS:
      return {
        ...state,
        error: true,
      };
    case CLIETN_ADMIN_ACTION.DELETE_CLIENT_SUCCESS:
      return {
        ...state,
        error: false,
        client: state.client.filter((f) => f._id !== action.data),
      };
    default:
      return state;
  }
}
