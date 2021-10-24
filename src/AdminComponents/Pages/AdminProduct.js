import React, { useEffect, useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import { Add, HighlightOff, PhotoCamera, Create } from "@material-ui/icons";

// import deleteImg from "../../images/deleteIcon.svg";
import {
  addCategory,
  deleteCategory,
  getCategories,
  updateCategories,
} from "../../Redux/Thunks/AdminHome";

const initialEdit = {
  flag: false,
  id: "",
  text: "",
  count: 0,
};
const initialData = {
  categories: [],
  error: false,
  id: "",
};
export default function AdminProduct() {
  const [data, setData] = useState({ ...initialData });
  const [text, setText] = useState("");
  const [edit, setEdit] = useState({ ...initialEdit });

  const dispatch = useDispatch();
  const categoryData = useSelector((state) => state.AdminCategories.categories);

  useEffect(() => {
    if (!categoryData) {
      dispatch(getCategories());
    }
    if (categoryData) {
      setData({ ...data, categories: categoryData });
    }
  }, [categoryData, dispatch, data]);

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
      id: edit.id,
      text: edit.text,
      count: edit.count,
    };
    dispatch(updateCategories(editData));
    setEdit({ initialEdit });
  };

  const deleteCat = (id) => {
    dispatch(deleteCategory(id));
  };

  return (
    <div className="product-container admin-alignment">
      <div className="add-category">
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
            <div className="product-upload">
              <input
                style={{ display: "none" }}
                id="contained-button-file"
                type="file"
              />
              <label htmlFor="contained-button-file">
                <Button
                  variant="contained"
                  color="primary"
                  endIcon={<PhotoCamera />}
                  component="span"
                >
                  Image
                </Button>
              </label>
            </div>
          </div>
          <Button
            className="cat-add-btn"
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
        <div className="heading">Categories</div>
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
                    <div className="count">{m.count}</div>
                  </div>
                  <div className="btn-action">
                    <Button
                      component="span"
                      onClick={() =>
                        setEdit({
                          ...edit,
                          text: m.text,
                          flag: true,
                          id: m._id,
                          count: m.count,
                        })
                      }
                      endIcon={<Create />}
                    ></Button>
                    <Button
                      onClick={() => deleteCat(m._id)}
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
  );
}