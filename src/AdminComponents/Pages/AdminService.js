import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  CssBaseline,
  Container,
  FormControl,
  Grid,
  TextField,
  TextareaAutosize,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { Create, HighlightOff } from "@material-ui/icons";

import { addService, getServices } from "../../Redux/Thunks/AdminServices";
import { getFormData } from "./utils";

const initialData = {
  serviceName: "",
  serviceDescription: "",
  serviceImage: "",
};

// const intialServices = {
//   serviceDescription: "",
//   serviceImage: "",
//   serviceName: "",
// };

export default function AdminService() {
  const [serviceAdd, setServiceAdd] = useState({ ...initialData });
  const [serviceList, setServiceList] = useState([]);

  const dispatch = useDispatch();

  const service = useSelector((state) => state.AdminService);

  useEffect(() => {
    if (!service.service) {
      dispatch(getServices());
    }
    if (service.service) {
      setServiceList(service.service);
    }
  }, [service, dispatch]);

  const handleChange = (e, image) => {
    if (image) {
      setServiceAdd({ ...serviceAdd, serviceImage: e.target.files[0] });
    } else {
      setServiceAdd({ ...serviceAdd, [e.target.name]: e.target.value });
    }
  };

  const submitData = () => {
    dispatch(addService(getFormData(serviceAdd)));
  };


  return (
    <div className="admin-alignment">
      <Container component="main" maxWidth="lg">
        <center>
          <Typography component="h1" variant="h4">
            Services Page
          </Typography>
        </center>
        <CssBaseline />
        <Box component="form" noValidate sx={{ mt: 5 }}>
          <div className="service-container">
            <FormControl sx={{ m: 1, width: 1000 }}>
              <Box sx={{ mb: 3 }}>
                <Typography component="h4" variant="h6">
                  Add/Update Services
                </Typography>
              </Box>
              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="given-name"
                  name="serviceName"
                  onChange={(e) => handleChange(e)}
                  required
                  value={serviceAdd.serviceName}
                  fullWidth
                  id="firstName"
                  label="Service Name"
                  autoFocus
                />
              </Grid>
              <Box pt={3}>
                <Grid item xs={12} sm={12} sx={{ mt: 5 }}>
                  <TextareaAutosize
                    name="serviceDescription"
                    aria-label="empty textarea"
                    placeholder="Service Description"
                    minRows={6}
                    onChange={(e) => handleChange(e)}
                    value={serviceAdd.serviceDescription}
                    style={{ width: 400 }}
                  />
                </Grid>
              </Box>
              <Box pt={3}>
                <Grid item xs={12} sm={6}>
                  <div className="file-input">
                    <input
                      type="file"
                      onChange={(e) => handleChange(e, true)}
                    />
                  </div>
                </Grid>
              </Box>
              <div className="btn-container mt-3">
                <Grid item xs={12} sm={6}>
                  <Button
                    color="default"
                    size="large"
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={() => setServiceAdd({ ...initialData })}
                  >
                    Clear data
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button
                    color="primary"
                    size="large"
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={() => submitData()}
                  >
                    Submit
                  </Button>
                </Grid>
              </div>
            </FormControl>
            <div className="service-list-container">
              <Typography component="h4" variant="h6">
                Display Services
              </Typography>
              {serviceList.map((m) => (
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={`https://kinindustries.s3.ap-south-1.amazonaws.com/service/${m.serviceImage}`}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {m.serviceImage}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {m.serviceDescription}
                      </Typography>
                      {/* <div className="product-feilds">
                        <Typography
                          className="feild"
                          variant="body2"
                          color="text.secondary"
                        >
                          <b>Design-</b> {m.design}
                        </Typography>
                        <Typography
                          className="feild"
                          variant="body2"
                          color="text.secondary"
                        >
                          <b>Category name-</b> {m.categoryName}
                        </Typography>
                      </div>
                      <div className="product-feilds">
                        <Typography
                          className="feild"
                          variant="body2"
                          color="text.secondary"
                        >
                          <b>Nominal diameter-</b> {m.nominalDiameter}
                        </Typography>
                        <Typography
                          className="feild"
                          variant="body2"
                          color="text.secondary"
                        >
                          <b>Process-</b> {m.process}
                        </Typography>
                      </div>
                      <div className="product-feilds">
                        <Typography
                          className="feild"
                          variant="body2"
                          color="text.secondary"
                        >
                          <b>Shell matrial-</b> {m.shellMatrial}
                        </Typography>
                        <Typography
                          className="feild"
                          variant="body2"
                          color="text.secondary"
                        >
                          <b>Shell weight-</b> {m.shellWeight}
                        </Typography>
                      </div>
                      <div className="product-feilds">
                        <Typography
                          className="feild"
                          variant="body2"
                          color="text.secondary"
                        >
                          <b>Application-</b> {m.application}
                        </Typography>
                        <Typography
                          className="feild"
                          variant="body2"
                          color="text.secondary"
                        >
                          <b>Shell height-</b> {m.categoryName}
                        </Typography>
                      </div> */}
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      // onClick={() => deleteProduct(m._id, m.productImage)}
                      size="small"
                      color="primary"
                    >
                      <HighlightOff />
                    </Button>
                    <Button
                      // onClick={() => editProduct(m._id)}
                      size="small"
                    >
                      <Create />
                    </Button>
                  </CardActions>
                </Card>
              ))}
            </div>
          </div>
        </Box>
      </Container>
    </div>
  );
}
