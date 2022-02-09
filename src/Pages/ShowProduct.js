import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

import { searchSingleProductFun } from "../Redux/Thunks/Header";

export default function ShowProduct() {
  const [product, setProduct] = useState([]);

  const searchProduct = useSelector((state) => state.AdminProduct);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (!searchProduct.searchedProduct) {
      dispatch(searchSingleProductFun(id));
    }
    if (searchProduct?.searchedProduct) {
      setProduct([searchProduct.searchedProduct]);
    }
  }, [dispatch, id, searchProduct]);

  return (
    <div className="Category-product">
      <div className="category-product-container">
        {product.length !== 0 ? (
          product.map((m) => (
            <div className="main-product">
              <div key={m._id} className="product">
                <div className="product-image">
                  <img
                    alt=""
                    className=""
                    src={`https://kinindustries.s3.ap-south-1.amazonaws.com/product/${m.productImage}`}
                  />
                </div>
                <div className="product-description">
                  <div className="product-name">{m.productName}</div>
                  <div className="description">{m.productDescription}</div>
                  <div className="product-detials">
                    Nominal Diameter - {m.nominalDiameter}mm
                  </div>
                  <div className="product-detials">Design - {m.design}</div>
                  <div className="product-detials">
                    Shell Material – {m.shellMatrial}
                  </div>
                  <div className="product-detials">
                    Shell Weight – {m.shellWeight} gm
                  </div>
                  <div className="product-detials">Process – {m.process}</div>
                  <div className="product-detials">
                    Application – {m.application}
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>No Product for the selected Category</div>
        )}
      </div>
    </div>
  );
}
