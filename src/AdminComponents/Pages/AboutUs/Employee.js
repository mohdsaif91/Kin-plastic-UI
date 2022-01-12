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
import { Create, HighlightOff } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";

import { getFormData } from "../utils";
import {
  addEmployee,
  deleteEmployeethunk,
  getEmployee,
  updateEmployee,
} from "../../../Redux/Thunks/AdminAboutUs";

const initialEmployee = {
  employeeName: "",
  employeeText: "",
  employeeImage: "",
};

export default function Employee() {
  const [edit, setEdit] = useState(false);
  const [employee, setEmployee] = useState([]);
  const [employeeData, setEmployeeData] = useState({ ...initialEmployee });

  const ownerDataRedux = useSelector((state) => state.AdminAboutUs);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!ownerDataRedux.employeeData) {
      dispatch(getEmployee());
    }
    if (ownerDataRedux.employeeData) {
      setEmployee([...ownerDataRedux.employeeData]);
    }
  }, [dispatch, ownerDataRedux.employeeData]);

  const addUpdateEmployee = (editFlag) => {
    if (editFlag) {
      employeeData.addEdit = "edit";
      dispatch(updateEmployee(getFormData(employeeData)));
    } else {
      employeeData.addEdit = "add";
      dispatch(addEmployee(getFormData(employeeData)));
    }
    setEmployeeData({ ...initialEmployee });
  };

  const handleChangeEmployee = (e) => {
    setEmployeeData({ ...employeeData, [e.target.name]: e.target.value });
  };

  const uploadEmployeeImage = (e) => {
    setEmployeeData({ ...employeeData, employeeImage: e.target.files[0] });
  };

  const editEmployee = (id) => {
    setEdit(true);
    const editedEmployee = employee.find((f) => f._id === id);
    editedEmployee.imageName = editedEmployee.employeeImage;
    setEmployeeData(editedEmployee);
  };

  const reset = () => {
    setEdit(false);
    setEmployeeData({ ...initialEmployee });
  };

  const deleteEmployee = (id, imageName) => {
    dispatch(deleteEmployeethunk(id, imageName));
  };

  return (
    <Container component="main" maxWidth="lg">
      <center className="mt-3">
        <Typography component="h1" variant="h4">
          Employee Information
        </Typography>
      </center>
      <CssBaseline />
      <div className="owner-container">
        <div className="p-5" sx={{ mt: 3 }}>
          {employee.map((m) => (
            <Card
              key={m._id}
              className="card-container"
              md={{ maxWidth: 400 }}
              sx={{ maxWidth: 345 }}
            >
              <CardActionArea>
                <CardMedia
                  className="aboutus-image"
                  component="img"
                  image={`https://kinindustries.s3.ap-south-1.amazonaws.com/aboutus/${m.employeeImage}`}
                  alt="green iguana"
                />
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={12}>
                      <label>{m.employeeName}</label>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <label>{m.employeeText}</label>
                    </Grid>
                  </Grid>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  onClick={() => deleteEmployee(m._id, m.employeeImage)}
                  size="small"
                  color="primary"
                >
                  <HighlightOff />
                </Button>
                <Button onClick={() => editEmployee(m._id)} size="small">
                  <Create />
                </Button>
              </CardActions>
            </Card>
          ))}
        </div>
        <div className="p-5">
          <center className="m-1">
            <Typography component="h4" variant="h5">
              {edit ? "Update" : "Add"} Employee Profile
            </Typography>
          </center>
          <Grid className="edit-container" container spacing={2}>
            <Grid item xs={12} sm={12}>
              <input type="file" onChange={(e) => uploadEmployeeImage(e)} />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                fullWidth
                name="employeeName"
                onChange={(e) => handleChangeEmployee(e)}
                value={employeeData.employeeName}
                id="application"
                label="Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                fullWidth
                name="employeeText"
                onChange={(e) => handleChangeEmployee(e)}
                value={employeeData.employeeText}
                id="application"
                label="Designation"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              {!edit ? (
                <Button
                  onClick={() => addUpdateEmployee(edit)}
                  variant="contained"
                  color="primary"
                  size="large"
                  disabled={employee.length >= 3}
                >
                  Add
                </Button>
              ) : (
                <Button
                  onClick={() => addUpdateEmployee(edit)}
                  variant="contained"
                  color="secondary"
                  size="large"
                >
                  Update
                </Button>
              )}
              {edit && <HighlightOff onClick={() => reset()} />}
            </Grid>
          </Grid>
        </div>
      </div>
    </Container>
  );
}
