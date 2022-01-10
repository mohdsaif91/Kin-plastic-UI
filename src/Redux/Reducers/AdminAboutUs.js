import { ABOUTUS_ADMIN_ACTION } from "../Actions/AboutusAdminAction";

export function AdminAboutUs(state = {}, action) {
  switch (action.type) {
    case ABOUTUS_ADMIN_ACTION.GET_ORGANISATIONOWNER_SUCCESS:
      return {
        ...state,
        error: false,
        OrganisationOwner: action.data,
      };

    case ABOUTUS_ADMIN_ACTION.GET_ORGANISATIONOWNER_UNSUCCESS:
      return {
        ...state,
        error: true,
      };

    case ABOUTUS_ADMIN_ACTION.UPDATE_EMPLOYEE_DATA_SUCCESS:
      const matter = state.employeeData.map((f) => {
        if (f._id === action.data._id) {
          return action.data;
        } else {
          return f;
        }
      });
      return {
        ...state,
        error: false,
        employeeData: matter,
      };
    case ABOUTUS_ADMIN_ACTION.UPDATE_EMPLOYEE_DATA_UNSUCCESS:
      return {
        ...state,
        error: true,
      };
    case ABOUTUS_ADMIN_ACTION.GET_EMPLOYEE_SUCCESS:
      return {
        ...state,
        error: false,
        employeeData: action.data,
      };
    case ABOUTUS_ADMIN_ACTION.GET_EMPLOYEE_UNSUCCESS:
      return {
        ...state,
        error: true,
      };
    case ABOUTUS_ADMIN_ACTION.UPDATE_OWNER_SUCESS:
      return {
        ...state,
        error: false,
        ownerData: action.data,
      };
    case ABOUTUS_ADMIN_ACTION.UPDATE_OWNER_UNSUCESS:
      return {
        ...state,
        error: true,
      };
    case ABOUTUS_ADMIN_ACTION.GET_OWNER_DATA_SUCESS:
      return {
        ...state,
        error: false,
        onwerData: action.data,
      };
    case ABOUTUS_ADMIN_ACTION.GET_OWNER_DATA_UNSECESS:
      return {
        ...state,
        error: true,
      };
    case ABOUTUS_ADMIN_ACTION.ADD_EMPLOYEE_SUCESS:
      return {
        ...state,
        error: false,
        employeeData: [...state.employeeData, action.data],
      };
    case ABOUTUS_ADMIN_ACTION.DELETE_EMPLOYEE_SUCCESS:
      return {
        ...state,
        error: false,
        employeeData: state.employeeData.filter((f) => f._id !== action.data),
      };
    case ABOUTUS_ADMIN_ACTION.DELETE_EMPLOYEE_UNSUCCESS:
      return {
        ...state,
        error: true,
      };
    case ABOUTUS_ADMIN_ACTION.GET_ORGANISATION_SUCCESS:
      return {
        ...state,
        organisationData: action.data,
        error: false,
      };
    case ABOUTUS_ADMIN_ACTION.GET_ORGANISATION_UNSUCERSS:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
}
