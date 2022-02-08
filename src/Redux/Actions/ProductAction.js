export const PRODUCT_ACTION = {
  GET_ALL_PRODUCT_SUCESSFUL_CLIENT: "GET_ALL_PRODUCT_SUCESSFUL_CLIENT",
  GET_ALL_PRODUCT_UNSUCESSFUL_CLIENT: "GET_ALL_PRODUCT_UNSUCESSFUL_CLIENT",
  GET_PRODUCT_SUCCESS: "GET_PRODUCT_SUCCESS",
  GET_PRODUCT_UNSUCCESS: "GET_PRODUCT_UNSUCCESS",
};

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
