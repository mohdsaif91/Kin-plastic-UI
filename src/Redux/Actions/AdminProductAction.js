export const ADMIN_PRODUCT_ACTION = {
  ADD_PRODUCT_SUCESSFUL: "ADD_PRODUCT_SUCESSFUL",
  ADD_PRODUCT_UNSUCESSFUL: "ADD_PRODUCT_UNSUCESSFUL",
  DELETE_PRODUCT_SUCESSFUL: "DELETE_PRODUCT_SUCESSFUL",
  DELETE_PRODUCT_UNSUCESSFUL: "DELETE_PRODUCT_UNSUCESSFUL",
  DELETE_BEST_SUCESSFUL: "DELETE_BEST_SUCESSFUL",
  DELETE_BEST_UNSUCESSFUL: "DELETE_BEST_UNSUCESSFUL",
  GET_ALL_PRODUCTS_SUCESSFUL: "GET_ALL_PRODUCTS_SUCESSFUL",
  GET_ALL_PRODUCTS_UN_SUCESSFUL: "GET_ALL_PRODUCTS_UN_SUCESSFUL",
  GET_BEST_PRODUCT_SUCESS: "GET_BEST_PRODUCT_SUCESS",
  GET_BEST_PRODUCT_UNSUCESS: "GET_BEST_PRODUCT_UNSUCESS",
  GET_PRODUCT_SUCESSFUL: "GET_PRODUCT_SUCESSFUL",
  GET_PRODUCT_UNSUCESSFUL: "GET_PRODUCT_UNSUCESSFUL",
  GET_PRODUCT_BY_CATEGORY_SUCESSFUL: "GET_PRODUCTBY_CATEGORY_SUCESSFUL",
  GET_PRODUCT_BY_CATEGORY_UNSUCESSFUL: "GET_PRODUCTBY_CATEGORY_UNSUCESSFUL",
};

export const deleteBestProductSucess = (data) => {
  return {
    type: ADMIN_PRODUCT_ACTION.DELETE_BEST_SUCESSFUL,
    data,
  };
};

export const deleteBestProductUnSucess = (data) => {
  return {
    type: ADMIN_PRODUCT_ACTION.DELETE_BEST_UNSUCESSFUL,
    data,
  };
};

export const getBestProductSucess = (data) => {
  return {
    type: ADMIN_PRODUCT_ACTION.GET_BEST_PRODUCT_SUCESS,
    data,
  };
};

export const getBestProductUnSucess = (data) => {
  return {
    type: ADMIN_PRODUCT_ACTION.GET_BEST_PRODUCT_UNSUCESS,
    data,
  };
};

export const getAllProductSucessful = (data) => {
  return {
    type: ADMIN_PRODUCT_ACTION.GET_ALL_PRODUCTS_SUCESSFUL,
    data,
  };
};

export const getAllProductUnSucessful = (data) => {
  return {
    type: ADMIN_PRODUCT_ACTION.GET_ALL_PRODUCTS_UN_SUCESSFUL,
    data,
  };
};

export const getProductByCategorySucessful = (data) => {
  return {
    type: ADMIN_PRODUCT_ACTION.GET_PRODUCT_BY_CATEGORY_SUCESSFUL,
    data,
  };
};

export const getProductByCategoryUnSucessful = (data) => {
  return {
    type: ADMIN_PRODUCT_ACTION.GET_PRODUCT_BY_CATEGORY_UNSUCESSFUL,
    data,
  };
};

export const deleteProductSucessful = (data) => {
  return {
    type: ADMIN_PRODUCT_ACTION.DELETE_PRODUCT_SUCESSFUL,
    data,
  };
};

export const deleteProductUnSucessful = (data) => {
  return {
    type: ADMIN_PRODUCT_ACTION.DELETE_PRODUCT_UNSUCESSFUL,
    data,
  };
};

export const addProductSucessful = (data) => {
  return {
    type: ADMIN_PRODUCT_ACTION.ADD_PRODUCT_SUCESSFUL,
    data,
  };
};

export const addProductUnSucessful = (data) => {
  return {
    type: ADMIN_PRODUCT_ACTION.ADD_PRODUCT_UNSUCESSFUL,
    data,
  };
};

export const getProductSucessful = (data) => {
  return {
    type: ADMIN_PRODUCT_ACTION.GET_PRODUCT_SUCESSFUL,
    data,
  };
};

export const getProductUnSucessful = (data) => {
  return {
    type: ADMIN_PRODUCT_ACTION.GET_PRODUCT_UNSUCESSFUL,
    data,
  };
};
