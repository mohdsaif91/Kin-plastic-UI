import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import {
  addBestProduct,
  deleteBestProduct,
} from "../../../../Redux/Thunks/AdminProduct";

export default function AddButton({ _id, bestProduct, limit }) {
  const [id, setId] = useState(_id);
  const [add, setAdd] = useState(bestProduct);

  const dispatch = useDispatch();

  useEffect(() => {
    setId(_id);
    setAdd(bestProduct);
  }, [_id, bestProduct]);

  const addBestofSeven = () => {
    dispatch(addBestProduct({ id }));
  };

  const removeBestProduct = (id) => {
    dispatch(deleteBestProduct(id));
  };

  return (
    <div>
      {add ? (
        <button
          className={`remove-btn ${limit <= 2 && "disabled-btn"}`}
          disabled={limit <= 2}
          onClick={() => removeBestProduct(_id)}
        >
          Remove
        </button>
      ) : (
        <button
          className={`normal-btn ${limit >= 7 && "disabled-btn"} `}
          disabled={limit >= 7}
          onClick={() => addBestofSeven(_id)}
        >
          Add
        </button>
      )}
    </div>
  );
}
