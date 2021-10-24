export const AMDIN_HOME_ACTION = {
  GET_SETTING_SUCESSFULL: "GET_SETTING_SUCESSFULL",
  GET_SETTING_UNSUCESSFULL: "GET_SETTING_UNSUCESSFULL",
  SETTING_UPDATE_SUCESSFULL: "SETTING_UPDATE_SUCESSFULL",
  SETTING_UPDATE_UNSUCESSFULL: "SETTING_UPDATE_UNSUCESSFULL",
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
