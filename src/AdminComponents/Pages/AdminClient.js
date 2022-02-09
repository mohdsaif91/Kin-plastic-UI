import React, { useEffect, useState } from "react";
import { Add, Create, HighlightOff, PhotoCamera } from "@material-ui/icons";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  TextField,
  Typography,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import { getFormData } from "./utils";
import {
  addClientFunction,
  deleteClientFunction,
  editClientFunction,
  getClientFunction,
} from "../../Redux/Thunks/AdminClient";

const initialClient = {
  clientImage: "",
  clientName: "",
  edit: false,
  oldImageName: "",
};

export default function AdminClient() {
  const [client, setClient] = useState({ ...initialClient });
  const [dbClient, setDbClient] = useState([]);
  // const [edit, setEdit] = useState({ ...editInitial });

  const dispatch = useDispatch();
  const clientData = useSelector((state) => state.AdminClient);

  useEffect(() => {
    if (!clientData.client) {
      dispatch(getClientFunction());
    }
    if (clientData.client) {
      setDbClient([...clientData.client]);
    }
  }, [clientData, dispatch]);

  const addClient = () => {
    if (client.edit) {
      dispatch(editClientFunction(getFormData(client)));
    } else {
      dispatch(addClientFunction(getFormData(client)));
    }
    setClient({ ...initialClient });
  };

  const deleteClient = (id, imageName) => {
    dispatch(deleteClientFunction(id, imageName));
  };

  const editClient = (id, imageName) => {
    const selectedClient = dbClient.find((f) => f._id === id);
    setClient({
      ...client,
      ...selectedClient,
      oldImageName: imageName,
      edit: true,
    });
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
                label="Add Client !"
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
                <label>
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
              {client.edit && (
                <img
                  alt=""
                  className="img-show"
                  src={`https://kinindustries.s3.ap-south-1.amazonaws.com/client/${client.oldImageName}`}
                />
              )}
            </div>
            <Button
              className="cat-add-btn"
              variant="contained"
              color="primary"
              onClick={() => addClient()}
              endIcon={<Add />}
              component="span"
            >
              {client.edit ? "Update" : "Client"}
            </Button>
          </div>
        </div>
        <div className="client-list">
          {dbClient.map((m, index) => {
            return (
              <Card key={m._id} sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={`https://kinindustries.s3.ap-south-1.amazonaws.com/client/${m.clientImage}`}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {m.clientName}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    onClick={() => deleteClient(m._id, m.clientImage)}
                    size="small"
                    color="primary"
                  >
                    <HighlightOff />
                  </Button>
                  <Button
                    onClick={() => editClient(m._id, m.clientImage)}
                    size="small"
                  >
                    <Create />
                  </Button>
                </CardActions>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
