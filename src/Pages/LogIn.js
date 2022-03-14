import React, { useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { IconButton, InputAdornment } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import { Login } from "../Redux/Thunks/Auth";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(15),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#216fdb",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#216fdb",
    borderRadius: "5%",
    fontSize: "1rem",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#333",
    },
  },
  textFeild: {
    border: "#216fdb",
  },
}));

const initialProps = {
  userName: "",
  password: "",
  textOrPassword: false,
};

export default function LogIn() {
  const [auth, setAuth] = useState({ ...initialProps });
  const [error, setError] = useState(false);
  const adminReducer = useSelector((state) => state.AdminReducer);

  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (adminReducer.adminRights) {
      history.push("/adminHome");
    }
    if (adminReducer.error) {
      setError(true);
    }
  }, [adminReducer, history]);

  const handleClickShowPassword = () =>
    setAuth({ ...auth, textOrPassword: !auth.textOrPassword });
  const handleMouseDownPassword = () =>
    setAuth({ ...auth, textOrPassword: !auth.textOrPassword });

  const loginUser = (e) => {
    e.preventDefault();
    dispatch(Login({ userName: auth.userName, password: auth.password }));
    // dispatch(SignUP({ userName: auth.userName, password: auth.password }));
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            onChange={(e) => setAuth({ ...auth, userName: e.target.value })}
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            className={classes.textFeild}
            fullWidth
            name="password"
            label="Password"
            onChange={(e) => setAuth({ ...auth, password: e.target.value })}
            type={auth.textOrPassword ? "text" : "password"}
            id="password"
            InputProps={{
              // <-- This is where the toggle button is added.
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {auth.textOrPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={(e) => loginUser(e)}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
          </Grid>
          {error && (
            <Grid container>
              <Grid className="text-center error" item xs>
                No user found !
              </Grid>
            </Grid>
          )}
        </form>
      </div>
    </Container>
  );
}
