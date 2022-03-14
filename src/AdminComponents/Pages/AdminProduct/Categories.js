import React, { useEffect, useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import Select from "react-select";

import { Add, HighlightOff, Create } from "@material-ui/icons";

import {
  addCategory,
  deleteCategory,
  updateCategories,
  getProductByCategoryName,
} from "../../../Redux/Thunks/AdminHome";
import ProductTable from "./component/ProductTable";
import ModalPopup from "../../../AdminComponents/Components/ModalPopup";

const initialEdit = {
  flag: false,
  _id: "",
  text: "",
  count: 0,
  previousValue: "",
};
const initialData = {
  categories: [],
  error: false,
  id: "",
};

const modalFlagData = {
  flag: false,
  id: "",
  text: "",
};

export function Categories(props) {
  const [data, setData] = useState({ ...initialData });
  const [text, setText] = useState("");
  const [edit, setEdit] = useState({ ...initialEdit });
  const [showPopup, setShowPopup] = useState({ ...modalFlagData });

  const dispatch = useDispatch();

  useEffect(() => {
    setData({ ...data, categories: [...props.categoryData] });

    // eslint-disable-next-line
  }, [props.categoryData]);

  const addToCategiryList = () => {
    if (text.trim() !== "") {
      setData({
        ...data,
        categories: [...data.categories, { text, count: 0 }],
      });
      setText("");
      dispatch(addCategory({ text }));
    }
  };

  const updateCategory = () => {
    const editData = {
      _id: edit._id,
      text: edit.text,
      count: edit.count,
      previousValue: edit.previousValue,
    };
    dispatch(updateCategories(editData));
    setEdit({ initialEdit });
  };

  const deleteCat = (id, text) => {
    setShowPopup({ ...showPopup, flag: true, id, text });
  };

  const confirmDelete = () => {
    dispatch(deleteCategory({ id: showPopup.id, text: showPopup.text }));
    setShowPopup({ ...showPopup, flag: false, id: "", text: "" });
  };

  const option = props.categoryData
    ? props.categoryData.map((m) => {
        return {
          label: m.text,
          value: m.text,
        };
      })
    : [];

  const getProducts = (value) => {
    dispatch(getProductByCategoryName(value.value));
  };

  const editCatery = (m) => {
    window.scrollTo(0, 0);
    setEdit({
      ...edit,
      text: m.text,
      flag: true,
      _id: m._id,
      previousValue: m.text,
      count: m.count,
    });
  };

  return (
    <div className="category-container">
      <div className="child-container">
        {showPopup.flag && (
          <ModalPopup
            handleClose={() => setShowPopup(false)}
            deleteCategory={() => confirmDelete()}
          />
        )}
        <div className="add-category">
          <div className="heading">Add Categories</div>
          <div className="input-container">
            <div className="img-container">
              <TextField
                className="input-fields"
                required
                value={text}
                onChange={(e) => setText(e.target.value)}
                id="outlined-required"
                label="Category Name"
              />
            </div>
            <Button
              className="cat-add-btn mt-2"
              variant="contained"
              color="primary"
              onClick={() => addToCategiryList()}
              endIcon={<Add />}
              component="span"
            >
              Category
            </Button>
          </div>
        </div>
        <div className="categories">
          <div className="heading">Categories list</div>
          {edit.flag && (
            <div className="update-container">
              <TextField
                className="cat-update"
                required
                value={edit.text}
                onChange={(e) => setEdit({ ...edit, text: e.target.value })}
                id="outlined-required"
                label="Category Name"
              />
              <Button
                onClick={() => updateCategory()}
                variant="contained"
                color="primary"
              >
                Update
              </Button>
            </div>
          )}
          <div className="category-btns">
            <ul className="list-container">
              {data.categories.map((m, index) => {
                return (
                  <li key={m._id} className="main-list">
                    <div className="content">
                      <div className="text">{m.text}</div>
                    </div>
                    <div className="btn-action">
                      <Button
                        component="span"
                        onClick={() => editCatery(m)}
                        endIcon={<Create />}
                      ></Button>
                      <Button
                        onClick={() => deleteCat(m._id, m.text)}
                        component="span"
                        endIcon={<HighlightOff />}
                      ></Button>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div className="heading">All Product displayed</div>
        <Select options={option} onChange={(value) => getProducts(value)} />
        <ProductTable />
      </div>
    </div>
  );
}
