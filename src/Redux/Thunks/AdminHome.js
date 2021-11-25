import {
  addCategoryAPI,
  deleteCategoryAPI,
  getCategoryAPI,
  getHomePageData,
  settingApiHome,
  updateCategoriesAPI,
} from "../../api";
import {
  deleteCategorySucessfull,
  deleteCategoryUnSucessfull,
  getCategoriesSucessfull,
  getCategoriesUnSucessfull,
  updateCategorySucessfull,
  updateCategoryUnSucessfull,
} from "../Actions/AdminCategoryAction";
import {
  getSettingSucessfull,
  getSettingUnSucessfull,
  updateSettingSucessfull,
  updateSettingUnsucessfull,
} from "../Actions/AdminHomeAction";
import { startLoading, stopLoading } from "../Actions/Util";

export const updateSettingHome = (adminHomeData) => {
  return async (dispatch) => {
    dispatch(startLoading());
    await settingApiHome(adminHomeData)
      .then((response) => {
        dispatch(startLoading());
        if (response.status === 201) {
          dispatch(updateSettingSucessfull(response.data));
        }
      })
      .catch((err) => {
        dispatch(updateSettingUnsucessfull(err));
      });
  };
};

export const getSettingHome = () => {
  return async (dispatch) => {
    dispatch(startLoading());
    await getHomePageData()
      .then((response) => {
        dispatch(stopLoading());
        if (response.status === 200) {
          dispatch(getSettingSucessfull(response.data));
        }
      })
      .catch((err) => {
        dispatch(getSettingUnSucessfull(err));
      });
  };
};

export const addCategory = (category) => {
  return async (dispatch) => {
    dispatch(startLoading());
    await addCategoryAPI(category)
      .then((res) => {
        if (res.status === 201) {
        }
      })
      .catch((error) => console.log(error));
  };
};

export const getCategories = () => {
  return async (dispatch) => {
    dispatch(startLoading());
    await getCategoryAPI()
      .then((res) => {
        if (res.status === 200) {
          dispatch(getCategoriesSucessfull(res.data));
        }
      })
      .catch((err) => dispatch(getCategoriesUnSucessfull(err)));
  };
};

export const updateCategories = (data) => {
  return async (dispatch) => {
    dispatch(startLoading());
    await updateCategoriesAPI(data)
      .then((res) => {
        if (res.status === 201) {
          dispatch(updateCategorySucessfull(data));
        }
      })
      .catch((err) => dispatch(updateCategoryUnSucessfull(err)));
  };
};

export const deleteCategory = (id) => {
  return async (dispatch) => {
    dispatch(startLoading());
    await deleteCategoryAPI(id)
      .then((res) => {
        if (res.status === 201) {
          dispatch(deleteCategorySucessfull(id));
        }
      })
      .catch((err) => dispatch(deleteCategoryUnSucessfull(err)));
  };
};
