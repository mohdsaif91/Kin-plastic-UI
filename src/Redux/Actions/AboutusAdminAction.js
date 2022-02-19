export const ABOUTUS_ADMIN_ACTION = {
  ADD_EMPLOYEE_SUCESS: "ADD_EMPLOYEE_SUCESS",
  ADD_EMPLOYEE_UNSUCESS: "ADD_EMPLOYEE_UNSUCESS",
  DELETE_EMPLOYEE_SUCCESS: "DELETE_EMPLOYEE_SUCCESS",
  DELETE_EMPLOYEE_UNSUCCESS: "DELETE_EMPLOYEE_UNSUCCESS",
  GET_OWNER_DATA_SUCESS: "GET_OWNER_DATA_SUCESS",
  GET_OWNER_DATA_UNSECESS: "GET_OWNER_DATA_UNSECESS",
  GET_EMPLOYEE_SUCCESS: "GET_EMPLOYEE_SUCCESS",
  GET_EMPLOYEE_UNSUCCESS: "GET_EMPLOYEE_UNSUCCESS",
  GET_ORGANISATION_SUCCESS: "GET_ORGANISATION_SUCCESS",
  GET_ORGANISATION_UNSUCCESS: "GET_ORGANISATION_UNSUCCESS",
  GET_ORGANISATIONOWNER_SUCCESS: "GET_ORGANISATIONOWNER_SUCCESS",
  GET_ORGANISATIONOWNER_UNSUCCESS: "GET_ORGANISATIONOWNER_UNSUCCESS",
  SEND_EMAIL_SUCCESS: "SEND_EMAIL_SUCCESS",
  SEND_EMAIL_UNSUCCESS: "SEND_EMAIL_UNSUCCESS",
  SOCIAL_MEDIA_ADD_SUCCESS: "SOCIAL_MEDIA_ADD_SUCCESS",
  SOCIAL_MEDIA_ADD_UNSUCCESS: "SOCIAL_MEDIA_ADD_UNSUCCESS",
  UPDATE_EMPLOYEE_DATA_SUCCESS: "UPDATE_EMPLOYEE_DATA_SUCCESS",
  UPDATE_EMPLOYEE_DATA_UNSUCCESS: "UPDATE_EMPLOYEE_DATA_UNSUCCESS",
  UPDATE_OWNER_SUCESS: "UPDATE_OWNER_SUCESS",
  UPDATE_OWNER_UNSUCESS: "UPDATE_OWNER_UNSUCESS",
};

export function socialMediaAddSuccess(data) {
  return {
    type: ABOUTUS_ADMIN_ACTION.SOCIAL_MEDIA_ADD_SUCCESS,
    data,
  };
}

export function socialMediaAddUnSuccess(data) {
  return {
    type: ABOUTUS_ADMIN_ACTION.SOCIAL_MEDIA_ADD_UNSUCCESS,
    data,
  };
}

export function sendEmailSuccess(data) {
  return {
    type: ABOUTUS_ADMIN_ACTION.SEND_EMAIL_SUCCESS,
    data,
  };
}

export function sendEmailUnSuccess(data) {
  return {
    type: ABOUTUS_ADMIN_ACTION.SEND_EMAIL_UNSUCCESS,
    data,
  };
}

export function getOrganisationOwnerSucess(data) {
  return {
    type: ABOUTUS_ADMIN_ACTION.GET_ORGANISATIONOWNER_SUCCESS,
    data,
  };
}

export function getOrganisationOwnerUnSucess(data) {
  return {
    type: ABOUTUS_ADMIN_ACTION.GET_ORGANISATIONOWNER_UNSUCCESS,
    data,
  };
}

export function updateOrganisationSucess(data) {
  return {
    type: ABOUTUS_ADMIN_ACTION.UPDATE_OWNER_SUCESS,
    data,
  };
}

export function updateOrganisationUnSucess(data) {
  return {
    type: ABOUTUS_ADMIN_ACTION.UPDATE_OWNER_UNSUCESS,
    data,
  };
}

export function getOrganisationSucces(data) {
  return {
    type: ABOUTUS_ADMIN_ACTION.GET_ORGANISATION_SUCCESS,
    data,
  };
}

export function getOrganisationUnSucces(data) {
  return {
    type: ABOUTUS_ADMIN_ACTION.GET_ORGANISATION_UNSUCCESS,
    data,
  };
}

export function deleteEmployeeSuccess(data) {
  return {
    type: ABOUTUS_ADMIN_ACTION.DELETE_EMPLOYEE_SUCCESS,
    data,
  };
}

export function deleteEmployeeUnSuccess() {
  return {
    type: ABOUTUS_ADMIN_ACTION.DELETE_EMPLOYEE_UNSUCCESS,
  };
}

export function updateEmployeeSuccess(data) {
  return {
    type: ABOUTUS_ADMIN_ACTION.UPDATE_EMPLOYEE_DATA_SUCCESS,
    data,
  };
}

export function updateEmployeeUnSuccess() {
  return {
    type: ABOUTUS_ADMIN_ACTION.UPDATE_EMPLOYEE_DATA_UNSUCCESS,
  };
}

export function getEmplyeeSuccess(data) {
  return {
    type: ABOUTUS_ADMIN_ACTION.GET_EMPLOYEE_SUCCESS,
    data,
  };
}

export function getEmplyeeUnSuccess() {
  return {
    type: ABOUTUS_ADMIN_ACTION.GET_EMPLOYEE_UNSUCCESS,
  };
}

export function addEmployeeSuccess(data) {
  return {
    type: ABOUTUS_ADMIN_ACTION.ADD_EMPLOYEE_SUCESS,
    data,
  };
}

export function getOwnerDataSucess(data) {
  return {
    type: ABOUTUS_ADMIN_ACTION.GET_OWNER_DATA_SUCESS,
    data,
  };
}

export function getOwnerDataUnSucess(data) {
  return {
    type: ABOUTUS_ADMIN_ACTION.GET_OWNER_DATA_UNSECESS,
    data,
  };
}

export function updateOwnerSucess(data) {
  return {
    type: ABOUTUS_ADMIN_ACTION.UPDATE_OWNER_SUCESS,
    data,
  };
}

export function updateOwnerUnSucess() {
  return {
    type: ABOUTUS_ADMIN_ACTION.UPDATE_OWNER_UNSUCESS,
  };
}

export function jaddEmployeeSucess(data) {
  return {
    type: ABOUTUS_ADMIN_ACTION.ADD_EMPLOYEE_SUCESS,
    data,
  };
}

export function addEmployeeUnSucess() {
  return {
    type: ABOUTUS_ADMIN_ACTION.ADD_EMPLOYEE_UNSUCESS,
  };
}
