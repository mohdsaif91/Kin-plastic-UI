export const AMDIN_CATEGORY_ACTION = {
  ADD_CATEGORY_SUCESSFULL: "ADD_CATEGORY_SUCESSFULL",
  ADD_CATEGORY_UNSUCESSFULL: "ADD_CATEGORY_UNSUCESSFULL",
  DELETE_CATEGORY_SUCESSFULL: "DELETE_CATEGORY_SUCESSFULL",
  DELETE_CATEGORY_UNSUCESSFULL: "DELETE_CATEGORY_UNSUCESSFULL",
  GET_CATEGORY_SUCESSFULL: "GET_CATEGORY_SUCESSFULL",
  GET_CATEGORY_UNSUCESSFULL: "GET_CATEGORY_UNSUCESSFULL",
  UPDATE_CATEGORY_SUCESSFULL: "UPDATE_CATEGORY_SUCESSFULL",
  UPDATE_CATEGORY_UNSUCESSFULL: "UPDATE_CATEGORY_UNSUCESSFULL",
};

export const deleteCategorySucessfull = (data) => {
  return {
    type: AMDIN_CATEGORY_ACTION.DELETE_CATEGORY_SUCESSFULL,
    data,
  };
};

export const deleteCategoryUnSucessfull = (data) => {
  return {
    type: AMDIN_CATEGORY_ACTION.DELETE_CATEGORY_UNSUCESSFULL,
    data,
  };
};

export const getCategoriesSucessfull = (data) => {
  console.log("admin catn <>? ", data);
  return {
    type: AMDIN_CATEGORY_ACTION.GET_CATEGORY_SUCESSFULL,
    data,
  };
};

export const getCategoriesUnSucessfull = (data) => {
  return {
    type: AMDIN_CATEGORY_ACTION.GET_CATEGORY_UNSUCESSFULL,
    data,
  };
};

export const updateCategorySucessfull = (data) => {
  return {
    type: AMDIN_CATEGORY_ACTION.UPDATE_CATEGORY_SUCESSFULL,
    data,
  };
};

export const updateCategoryUnSucessfull = (data) => {
  return {
    type: AMDIN_CATEGORY_ACTION.UPDATE_CATEGORY_UNSUCESSFULL,
    data,
  };
};
