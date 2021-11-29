import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
    if (categories) {
      setCategory(categories);
      setSelectedCategory(categories[0].text);
      dispatch(getProductbyCategory(categories[0].text));
    }
  }, [categories, category, dispatch]);

  useEffect(() => {
    if (products) {
      setcategoryProducts(products);
    }
  }, [products]);

  const getProducts = (categoryName) => {
    setSelectedCategory(categoryName);
    dispatch(getProductbyCategory(categoryName));
  };

  return (
    <div className="Category-product">
      <div className="main-category-container">
        <div className="category">
          {category.map((m) => (
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
