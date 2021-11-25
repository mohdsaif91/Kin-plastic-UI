import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getSettingHome } from "../../../../Redux/Thunks/AdminHome";
import { addBestProduct } from "../../../../Redux/Thunks/AdminProduct";

export default function AddButton({ _id }) {
  const [productId, setProductId] = useState([]);

  const pageSetting = useSelector((state) => state.AdminHomeSetting.setting);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!pageSetting) {
      dispatch(getSettingHome());
    }
    if (pageSetting) {
      setProductId(pageSetting.setting.bestProduct);
    }
  }, [dispatch, pageSetting]);

  const addBestofSeven = (id) => {
    dispatch(addBestProduct(pageSetting, id));
  };

  return (
    <div>
      {productId.length >= 7 ? (
        "7 best added"
      ) : (
        <button
          className={`${
            productId?.includes(_id) ? "disabled-btn" : "normal-btn"
          }`}
          onClick={() => addBestofSeven(_id)}
        >
          Add
        </button>
      )}
    </div>
  );
}
