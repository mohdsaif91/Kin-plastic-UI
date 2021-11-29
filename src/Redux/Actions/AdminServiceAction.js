export const SERVICE_ACTIONS = {
  ADD_SERVICE_SUCESSFUL: "ADD_SERVICE_SUCESSFUL",
  ADD_SERVICE_UNSUCESSFUL: "ADD_SERVICE_UNSUCESSFUL",
  GET_SERVICE_SUCESS: "GET_SERVICE_SUCESS",
  GET_SERVICE_UNSUCESS: "GET_SERVICE_UNSUCESS",
};

export function addServiceSucess(data) {
  return {
    type: SERVICE_ACTIONS.ADD_SERVICE_SUCESSFUL,
    data,
  };
}

export function addServiceUnSucess(data) {
  return {
    type: SERVICE_ACTIONS.ADD_SERVICE_UNSUCESSFUL,
    data,
  };
}

export function getServiceSucess(data) {
  return {
    type: SERVICE_ACTIONS.GET_SERVICE_SUCESS,
    data,
  };
}

export function getServiceUnSucess(data) {
  return {
    type: SERVICE_ACTIONS.GET_SERVICE_UNSUCESS,
    data,
  };
}
