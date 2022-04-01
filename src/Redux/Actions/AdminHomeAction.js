export const AMDIN_HOME_ACTION = {
  ADD_BEST_PRODUCT_SUCESSFUL: "ADD_BEST_PRODUCT_SUCESSFUL",
  ADD_BEST_PRODUCT_UNSUCESSFUL: "ADD_BEST_PRODUCT_UNSUCESSFUL",
  ADD_HERO_IMAGE_SUCCESS: "ADD_HERO_IMAGE_SUCCESS",
  ADD_HERO_IMAGE_UNSUCCESS: "ADD_HERO_IMAGE_UNSUCCESS",
  DELETE_BEST_PRODUCT_SETTING_SUCESS: "  DELETE_BEST_PRODUCT_SETTING_SUCESS",
  DELETE_BEST_PRODUCT_SETTING_UNSUCESS:
    "  DELETE_BEST_PRODUCT_SETTING_UNSUCESS",
  GET_SETTING_SUCESSFULL: "GET_SETTING_SUCESSFULL",
  GET_SETTING_UNSUCESSFULL: "GET_SETTING_UNSUCESSFULL",
  REMOVE_HERO_IMAGE_SUCCESS: "REMOVE_HERO_IMAGE_SUCCESS",
  REMOVE_HERO_IMAGE_UNSUCCESS: "REMOVE_HERO_IMAGE_UNSUCCESS",
  SETTING_UPDATE_SUCESSFULL: "SETTING_UPDATE_SUCESSFULL",
  SETTING_UPDATE_UNSUCESSFULL: "SETTING_UPDATE_UNSUCESSFULL",
};

export const removeHeroImageSuccess = (data) => {
  return {
    type: AMDIN_HOME_ACTION.REMOVE_HERO_IMAGE_SUCCESS,
    data,
  };
};

export const removeHeroImageUnSuccess = (data) => {
  return {
    type: AMDIN_HOME_ACTION.REMOVE_HERO_IMAGE_UNSUCCESS,
    data,
  };
};

export const addHeroImageSuccess = (data) => {
  return {
    type: AMDIN_HOME_ACTION.ADD_HERO_IMAGE_SUCCESS,
    data,
  };
};

export const addHeroImageUnSuccess = (data) => {
  return {
    type: AMDIN_HOME_ACTION.ADD_HERO_IMAGE_UNSUCCESS,
  };
};

export const deleteSettingBest = (data) => {
  return {
    type: AMDIN_HOME_ACTION.DELETE_BEST_PRODUCT_SETTING_SUCESS,
    data,
  };
};

export const deleteSettingBestUnsucess = (data) => {
  return {
    type: AMDIN_HOME_ACTION.DELETE_BEST_PRODUCT_SETTING_UNSUCESS,
    data,
  };
};

export const addBestProductSucessful = (data) => {
  return {
    type: AMDIN_HOME_ACTION.ADD_BEST_PRODUCT_SUCESSFUL,
    data,
  };
};

export const addBestProductUnsucessful = (data) => {
  return {
    type: AMDIN_HOME_ACTION.ADD_BEST_PRODUCT_UNSUCESSFUL,
    data,
  };
};

export const updateSettingSucessfull = (data) => {
  return {
    type: AMDIN_HOME_ACTION.SETTING_UPDATE_SUCESSFULL,
    data,
  };
};

export const updateSettingUnsucessfull = (data) => {
  return {
    type: AMDIN_HOME_ACTION.SETTING_UPDATE_UNSUCESSFULL,
    data,
  };
};

export const getSettingSucessfull = (data) => {
  return {
    type: AMDIN_HOME_ACTION.GET_SETTING_SUCESSFULL,
    data,
  };
};

export const getSettingUnSucessfull = (data) => {
  return {
    type: AMDIN_HOME_ACTION.GET_SETTING_UNSUCESSFULL,
    data,
  };
};
