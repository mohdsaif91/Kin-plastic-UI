import React, { useEffect, useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  TextField,
  Button,
  Checkbox,
  ListItemAvatar,
} from "@material-ui/core";

import { Add, PhotoCamera } from "@material-ui/icons";
import deleteImg from "../../images/deleteIcon.svg";

const initialData = {
  categories: [],
};

export default function AdminProduct() {
  const [data, setData] = useState({ ...initialData });
  const [text, setText] = useState("");

  useEffect(() => {
    if (true) {
    }
  }, []);

  const addToCategiryList = () => {
    if (text.trim() !== "") {
      setData({ ...data, categories: [...data.categories, text] });
      setText("");
    }
  };

  return (
    <div className="product-container admin-alignment">
      <div className="add-category">
        <div className="input-container">
          <TextField
            className="input-fields"
            required
            onChange={(e) => setText(e.target.value)}
            id="outlined-required"
            label="Category Name"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={() => addToCategiryList()}
            endIcon={<Add />}
            component="span"
          >
            Category
          </Button>
        </div>
        <div className="category-container">
          <List>
            {data.categories.map((m, index) => {
              return (
                <ListItem className="p-c-list">
                  <ListItemText className="card-text" primary={`${m.text}`} />
                  <ListItemText primary={`${m.count}`} />
                  <img
                    alt="delete"
                    // onClick={() => deleteCard(index)}
                    className="del-img"
                    src={deleteImg}
                  />
                </ListItem>
              );
            })}
          </List>
        </div>
      </div>
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
            Upload Product Image
          </Button>
        </label>
      </div>
    </div>
  );
}
