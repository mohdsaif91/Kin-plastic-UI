import {
  addCategoryAPI,
  deleteCategoryAPI,
  getCategoryAPI,
  getHomePageData,
  getProductByCategoryAPI,
  settingApiHome,
  updateCategoriesAPI,
} from "../../api";
import {
  addCategorySucessfull,
  addCategoryUnSucessfull,
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
import {
  getProductByCategorySucessful,
  getProductByCategoryUnSucessful,
} from "../Actions/AdminProductAction";
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
        dispatch(stopLoading());
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
        dispatch(stopLoading());
        dispatch(getSettingUnSucessfull(err));
      });
  };
};

export const addCategory = (category) => {
  return async (dispatch) => {
    dispatch(startLoading());
    await addCategoryAPI(category)
      .then((res) => {
        dispatch(stopLoading());
        if (res.status === 201) {
          dispatch(addCategorySucessfull(res.data));
        }
      })
      .catch((error) => {
        dispatch(stopLoading());
        dispatch(addCategoryUnSucessfull(error));
      });
  };
};

export const getCategories = () => {
  return async (dispatch) => {
    dispatch(startLoading());
    await getCategoryAPI()
      .then((res) => {
        if (res.status === 200) {
          dispatch(stopLoading());
          dispatch(getCategoriesSucessfull(res.data));
        }
      })
      .catch((err) => {
        dispatch(stopLoading());
        dispatch(getCategoriesUnSucessfull(err));
      });
  };
};

export const updateCategories = (data) => {
  return async (dispatch) => {
    dispatch(startLoading());
    await updateCategoriesAPI(data)
      .then((res) => {
        dispatch(stopLoading());
        if (res.status === 201) {
          dispatch(updateCategorySucessfull(res.data));
        }
      })
      .catch((err) => {
        dispatch(stopLoading());
        dispatch(updateCategoryUnSucessfull(err));
      });
  };
};

export const deleteCategory = (data) => {
  return async (dispatch) => {
    dispatch(startLoading());
    await deleteCategoryAPI(data)
      .then((res) => {
        dispatch(stopLoading());
        if (res.status === 201) {
          dispatch(deleteCategorySucessfull(data.id));
        }
      })
      .catch((err) => {
        dispatch(stopLoading());
        dispatch(deleteCategoryUnSucessfull(err));
      });
  };
};

export const getProductByCategoryName = (name) => {
  return async (dispatch) => {
    dispatch(startLoading());
    await getProductByCategoryAPI(name)
      .then((res) => {
        dispatch(stopLoading());
        dispatch(getProductByCategorySucessful(res.data));
      })
      .catch((error) => {
        dispatch(stopLoading());
        dispatch(getProductByCategoryUnSucessful(error));
      });
  };
};
