import { SERVICE_ACTIONS } from "../Actions/AdminServiceAction";

export function AdminService(state = {}, action) {
  switch (action.type) {
    case SERVICE_ACTIONS.ADD_SERVICE_SUCESSFUL:
      console.log(action.data);
      return {
        ...state,
        error: false,
        service: [...state.service, action.data],
      };
    case SERVICE_ACTIONS.ADD_SERVICE_UNSUCESSFUL:
      return {
        ...state,
        error: true,
      };
    case SERVICE_ACTIONS.GET_SERVICE_SUCESS:
      return {
        ...state,
        error: false,
        service: action.data,
      };
    case SERVICE_ACTIONS.GET_SERVICE_UNSUCESS:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
}
