import {
  addBestProductAPI,
  addProductApi,
  deleteProductApi,
  deleteBestProductAPI,
  getAllProductsAPI,
  getBestProductAPI,
  getProductApi,
  getProductByCategoryAPI,
} from "../../api";
import {
  addBestProductSucessful,
  addBestProductUnsucessful,
  deleteSettingBest,
  deleteSettingBestUnsucess,
} from "../Actions/AdminHomeAction";
import {
  addProductSucessful,
  addProductUnSucessful,
  deleteBestProductSucess,
  deleteBestProductUnSucess,
  deleteProductSucessful,
  deleteProductUnSucessful,
  getAllProductSucessful,
  getAllProductUnSucessful,
  getBestProductSucess,
  getBestProductUnSucess,
  getProductByCategorySucessful,
  getProductByCategoryUnSucessful,
  getProductSucessful,
  getProductUnSucessful,
} from "../Actions/AdminProductAction";
import { startLoading, stopLoading } from "../Actions/Util";

export const deleteBestProduct = (id) => {
  return async (dispatch) => {
    dispatch(startLoading());
    await deleteBestProductAPI(id)
      .then((res) => {
        dispatch(stopLoading());
        if (res.status === 201) {
          dispatch(deleteBestProductSucess(res.data));
          dispatch(deleteSettingBest(res.data));
        }
      })
      .catch((err) => {
        dispatch(stopLoading());
        dispatch(deleteBestProductUnSucess(err));
        dispatch(deleteSettingBestUnsucess(err));
      });
  };
};

export const getBestProduct = () => {
  return async (dispatch) => {
    dispatch(startLoading());
    await getBestProductAPI()
      .then((res) => {
        dispatch(stopLoading());
        if (res.status === 200) {
          dispatch(getBestProductSucess(res.data));
        }
      })
      .catch((err) => {
        dispatch(stopLoading());
        dispatch(getBestProductUnSucess(err));
      });
  };
};

export const addBestProduct = (data, id) => {
  return async (dispatch) => {
    dispatch(startLoading());
    data.bestProduct.push(id);
    await addBestProductAPI(data)
      .then((res) => {
        dispatch(stopLoading());
        if (res.status === 200) {
          dispatch(addBestProductSucessful(res.data));
        }
      })
      .catch((err) => {
        dispatch(stopLoading());
        dispatch(addBestProductUnsucessful(err));
      });
  };
};

export const getAllProducts = () => {
  return async (dispatch) => {
    dispatch(startLoading());
    await getAllProductsAPI()
      .then((res) => {
        dispatch(stopLoading());
        if (res.status === 200) {
          dispatch(getAllProductSucessful(res.data));
        }
      })
      .catch((error) => {
        dispatch(stopLoading());
        dispatch(getAllProductUnSucessful(error));
      });
  };
};

export const getProductbyCategory = (categoryName) => {
  return async (dispatch) => {
    dispatch(startLoading());
    await getProductByCategoryAPI(categoryName)
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

export const deleteProductThunk = (id, productImage) => {
  return async (dispatch) => {
    dispatch(startLoading());
    await deleteProductApi(id, productImage)
      .then((res) => {
        dispatch(stopLoading());
        if (res.status === 200) {
          dispatch(deleteProductSucessful(res.data));
        }
      })
      .catch((err) => {
        dispatch(stopLoading());
        dispatch(deleteProductUnSucessful(err));
      });
  };
};

export const addProduct = (data) => {
  return async (dispatch) => {
    dispatch(startLoading());
    await addProductApi(data)
      .then((res) => {
        dispatch(stopLoading());
        if (res.status === 201) {
          dispatch(addProductSucessful(res.data));
        }
      })
      .catch((err) => {
        dispatch(stopLoading());
        dispatch(addProductUnSucessful(err));
      });
  };
};

export const getProduct = () => {
  return async (dispatch) => {
    dispatch(startLoading());
    await getProductApi()
      .then((res) => {
        dispatch(stopLoading());
        if (res.status === 200) {
          dispatch(getProductSucessful(res.data));
        }
      })
      .catch((err) => {
        dispatch(stopLoading());
        dispatch(getProductUnSucessful(err));
      });
  };
};
