export const PRODUCT_ACTION = {
  GET_ALL_PRODUCT_SUCESSFUL_CLIENT: "GET_ALL_PRODUCT_SUCESSFUL_CLIENT",
  GET_ALL_PRODUCT_UNSUCESSFUL_CLIENT: "GET_ALL_PRODUCT_UNSUCESSFUL_CLIENT",
  GET_PRODUCT_SUCCESS_ID: "GET_PRODUCT_SUCCESS_ID",
  GET_PRODUCT_UNSUCCESS_ID: "GET_PRODUCT_UNSUCCESS_ID",
  OPEN_NAV: "OPEN_NAV",
  CLOSE_NAV: "CLOSE_NAV",
};

export function openNavigation() {
  return {
    type: PRODUCT_ACTION.OPEN_NAV,
    data: true,
  };
}

export function closeNav() {
  return {
    type: PRODUCT_ACTION.CLOSE_NAV,
    data: false,
  };
}

export const getAllProductClient = (data) => {
  return {
    type: PRODUCT_ACTION.GET_ALL_PRODUCT_SUCESSFUL_CLIENT,
    data,
  };
};

export const getAllProductClientUnSucessful = (data) => {
  return {
    type: PRODUCT_ACTION.GET_ALL_PRODUCT_UNSUCESSFUL_CLIENT,
    data,
  };
};
