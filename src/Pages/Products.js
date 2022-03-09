import React, { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import Select from "react-select";

import { getCategories } from "../Redux/Thunks/AdminHome";
import { getProductbyCategory } from "../Redux/Thunks/AdminProduct";

export default function Products() {
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categoryProducts, setcategoryProducts] = useState([]);

  const categories = useSelector((state) => state.AdminCategories.categories);
  const products = useSelector((state) => state.AdminProduct.byCategory);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!categories) {
      dispatch(getCategories());
    }
    if (categories && !products) {
      setCategory(categories);
      setSelectedCategory(categories[0].text);
      dispatch(getProductbyCategory(categories[0].text));
    }
  }, [categories, category, dispatch, products]);

  useEffect(() => {
    if (products) {
      setcategoryProducts(products);
    }
  }, [products]);

  useLayoutEffect(() => {
    window.scroll(0, 0);
  }, []);

  const getProducts = (categoryName) => {
    setSelectedCategory(categoryName);
    dispatch(getProductbyCategory(categoryName));
  };
  // const option =
  //   categories &&
  //   categories.map((m) => {
  //     return {
  //       value: m.text,
  //       label: m.text,
  //     };
  //   });

  return (
    <div className="Category-product">
      <div className="main-category-container">
        <div className="category">
          {/* <Select options={option || []} /> */}

          {categories &&
            categories.map((m) => (
              <button
                onClick={() => getProducts(m.text)}
                key={m._id}
                className={`btn ${
                  selectedCategory === m.text
                    ? "selected-category"
                    : "btn-category"
                }`}
              >
                {m.text}
              </button>
            ))}
        </div>
      </div>
      <div className="category-border" />
      <div className="category-product-container">
        {categoryProducts.length !== 0 ? (
          categoryProducts.map((m) => (
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
                  {m.productDescription && m.productDescription !== "" && (
                    <div className="description">{m.productDescription}</div>
                  )}
                  {m.nominalDiameter && m.nominalDiameter !== "" && (
                    <div className="product-detials">
                      Nominal Diameter - {m.nominalDiameter}mm
                    </div>
                  )}
                  {m.design && m.design !== "" && (
                    <div className="product-detials">Design - {m.design}</div>
                  )}
                  {m.shellMatrial && m.shellMatrial !== "" && (
                    <div className="product-detials">
                      Shell Material – {m.shellMatrial}
                    </div>
                  )}
                  {m.shellWeight && m.shellWeight !== "" && (
                    <div className="product-detials">
                      Shell Weight – {m.shellWeight} gm
                    </div>
                  )}
                  {m.process && m.process !== "" && (
                    <div className="product-detials">Process – {m.process}</div>
                  )}
                  {m.application && m.application !== "" && (
                    <div className="product-detials">
                      Application – {m.application}
                    </div>
                  )}
                  {m.temperature && m.temperature !== "" && (
                    <div className="product-detials">
                      Temperature – {m.temperature}
                    </div>
                  )}
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
