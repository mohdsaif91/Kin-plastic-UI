import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import { Create } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";

import { getFormData } from "../utils";
import { gateOwnerData, updateOwner } from "../../../Redux/Thunks/AdminAboutUs";

const initialOwner = {
  ownerName: "",
  ownerText: "",
  ownerImageName: "",
};

export default function Owner() {
  const [add, setAdd] = useState(true);
  const [ownerInput, setOwnerInput] = useState({ ...initialOwner });
  const [boss, setBoss] = useState({ ...initialOwner });
  // useSelector((state) => state.AdminAboutUs.onwerData)

  const ownerDataRedux = useSelector((state) => state.AdminAboutUs);
  const dispatch = useDispatch();

  const editOwner = () => {
    setAdd(false);
    const { employee, ...rest } = boss;
    setOwnerInput(rest);
  };

  useEffect(() => {
    if (!ownerDataRedux.onwerData) {
      dispatch(gateOwnerData());
    }
    // console.log(ownerDataRedux);
    setBoss({ ...ownerDataRedux.onwerData });
  }, [dispatch, ownerDataRedux]);

  const clearFunction = () => {
    setAdd(true);
  };

  const handleChangeOwner = (e) => {
    setOwnerInput({ ...ownerInput, [e.target.name]: e.target.value });
  };

  const imageChange = (e) => {
    setOwnerInput({ ...ownerInput, ownerImage: e.target.files[0] });
  };

  const addUpdateFunction = () => {
    dispatch(updateOwner(getFormData(ownerInput)));
    // setBoss({ ...initialOwner });
  };

  console.log(boss, "------------------>");

  return (
    <Container component="main" maxWidth="lg">
      <center className="mt-3">
        <Typography component="h1" variant="h4">
          Owner Information
        </Typography>
      </center>
      <CssBaseline />
      <div className="owner-container">
        <div className="card-owner" sx={{ mt: 3 }}>
          <Card
            className="card-container"
            md={{ maxWidth: 400 }}
            sx={{ maxWidth: 345 }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={`https://kinindustries.s3.ap-south-1.amazonaws.com/aboutus/${boss?.ownerImageName}`}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="body2" component="div">
                  {boss?.ownerName}
                </Typography>
                <Typography variant="body2" color="secondary">
                  {boss?.ownerText}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              {/* <Button
                //   onClick={() => deleteProduct(m._id, m.productImage)}
                size="small"
                color="primary"
              >
                <HighlightOff />
              </Button> */}
              <Button onClick={() => editOwner()} size="small">
                <Create />
              </Button>
            </CardActions>
          </Card>
        </div>
        <div className="p-5">
          <center className="m-1">
            <Typography component="h4" variant="h5">
              Update Owner Profile
            </Typography>
          </center>
          <Grid className="edit-container mt-2" container spacing={2}>
            <Grid item xs={12} sm={12} md={6}>
              <TextField
                fullWidth
                name="ownerName"
                onChange={(e) => handleChangeOwner(e)}
                value={ownerInput.ownerName}
                id="application"
                label="Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <input type="file" onChange={(e) => imageChange(e)} />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <TextField
                fullWidth
                name="ownerText"
                onChange={(e) => handleChangeOwner(e)}
                value={ownerInput.ownerText}
                id="application"
                label="Free Text"
                autoFocus
              />
            </Grid>
            <Grid className="mt-1" item xs={12} sm={6} md={6}>
              <Button
                variant={add ? "contained" : "outlined"}
                color="secondary"
                size="large"
                onClick={() => addUpdateFunction()}
              >
                Update
              </Button>
            </Grid>
            <Grid className="mt-1" item xs={12} sm={6} md={6}>
              <Button
                variant="contained"
                onClick={() => clearFunction()}
                color="default"
                size="large"
              >
                Clear
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
    </Container>
  );
}
