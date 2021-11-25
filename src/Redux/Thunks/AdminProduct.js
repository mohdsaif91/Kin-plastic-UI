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
import { startLoading } from "../Actions/Util";

export const deleteBestProduct = (id) => {
  return async (dispatch) => {
    dispatch(startLoading());
    await deleteBestProductAPI(id)
      .then((res) => {
        if (res.status === 201) {
          dispatch(deleteBestProductSucess(res.data));
          dispatch(deleteSettingBest(res.data));
        }
      })
      .catch((err) => {
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
        if (res.status === 200) {
          dispatch(getBestProductSucess(res.data));
        }
      })
      .catch((err) => dispatch(getBestProductUnSucess(err)));
  };
};

export const addBestProduct = (data, id) => {
  return async (dispatch) => {
    dispatch(startLoading());
    data.bestProduct.push(id);
    await addBestProductAPI(data)
      .then((res) => {
        dispatch(addBestProductSucessful(res.data));
      })
      .catch((err) => dispatch(addBestProductUnsucessful(err)));
  };
};

export const getAllProducts = () => {
  return async (dispatch) => {
    dispatch(startLoading());
    await getAllProductsAPI()
      .then((res) => {
        if (res.status === 200) {
          dispatch(getAllProductSucessful(res.data));
        }
      })
      .catch((error) => dispatch(getAllProductUnSucessful(error)));
  };
};

export const getProductbyCategory = (categoryName) => {
  return async (dispatch) => {
    dispatch(startLoading());
    await getProductByCategoryAPI(categoryName)
      .then((res) => {
        dispatch(getProductByCategorySucessful(res.data));
      })
      .catch((error) => {
        dispatch(getProductByCategoryUnSucessful(error));
      });
  };
};

export const deleteProductThunk = (id, productImage) => {
  return async (dispatch) => {
    dispatch(startLoading());
    await deleteProductApi(id, productImage)
      .then((res) => {
        if (res.status === 200) {
          dispatch(deleteProductSucessful(res.data));
        }
      })
      .catch((err) => dispatch(deleteProductUnSucessful(err)));
  };
};

export const addProduct = (data) => {
  return async (dispatch) => {
    dispatch(startLoading());
    await addProductApi(data)
      .then((res) => {
        if (res.status === 201) {
          dispatch(addProductSucessful(res.data));
        }
      })
      .catch((err) => dispatch(addProductUnSucessful(err)));
  };
};

export const getProduct = () => {
  return async (dispatch) => {
    dispatch(startLoading());
    await getProductApi()
      .then((res) => {
        if (res.status === 200) {
          dispatch(getProductSucessful(res.data));
        }
      })
      .catch((err) => getProductUnSucessful(err));
  };
};
