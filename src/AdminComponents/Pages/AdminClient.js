import React, { useState } from "react";
import { Add, PhotoCamera } from "@material-ui/icons";
import { Button, TextField } from "@material-ui/core";
import { useDispatch } from "react-redux";

import { getFormData } from "./utils";
import { addClientFunction } from "../../Redux/Thunks/AdminClient";

const initialClient = {
  clientImage: "",
  clientName: "",
};

export default function AdminClient() {
  const [client, setClient] = useState({ ...initialClient });

  const dispatch = useDispatch();

  const addClient = () => {
    dispatch(addClientFunction(getFormData(client)));
  };

  return (
    <div className="category-container">
      <div className="child-container">
        <div className="add-category">
          <div className="heading">Add Client</div>
          <div className="input-container">
            <div className="img-container">
              <TextField
                className="input-fields"
                required
                value={client.clientName}
                onChange={(e) =>
                  setClient({ ...client, clientName: e.target.value })
                }
                id="outlined-required"
                label="Category Name"
              />
              <div className="product-upload">
                <input
                  style={{ display: "none" }}
                  id="contained-button-file"
                  type="file"
                  onChange={(e) =>
                    setClient({ ...client, clientImage: e.target.files[0] })
                  }
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
              onClick={() => addClient()}
              endIcon={<Add />}
              component="span"
            >
              Client
            </Button>
          </div>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
}
