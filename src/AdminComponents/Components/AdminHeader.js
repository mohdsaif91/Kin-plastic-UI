import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import { Button, Tooltip } from "@material-ui/core";
import { useHistory, withRouter } from "react-router";
import { useDispatch } from "react-redux";

import MenuIcon from "@material-ui/icons/Menu";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import { ChevronRight, ChevronLeft, ExitToApp } from "@material-ui/icons";

import { adminLogout } from "../../Redux/Actions/AdminAction";
import ProductImage from "../../images/adminImage/productImage.png";
import Services from "../../images/adminImage/services.png";
import Client from "../../images/adminImage/customer.png";
import home from "../../images/adminImage/home.png";
import info from "../../images/adminImage/info.png";
import MailIcon from "../../images/adminImage/mail-icon.png";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    zIndex: theme.zIndex.drawer + 1,
    background: "#fff",
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    color: "#333",
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  button: {
    margin: theme.spacing(1),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  paper: {
    color: "#333",
    backgroundColor: "rgba(151, 226, 233)",
    backgroundImage:
      "linear-gradient(120deg, rgba(151,226,233,1) 44%, rgba(200,202,204,1) 100%)",
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const useStylesBootstrap = makeStyles((theme) => ({
  arrow: {
    color: theme.palette.common.black,
  },
  tooltip: {
    backgroundColor: theme.palette.common.black,
    fontSize: "16px",
  },
}));

function MiniDrawer(props) {
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = useState("/adminHome");

  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    setActive(props.location.pathname);
  }, [props.location.pathname]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const logoutAdmin = () => {
    sessionStorage.removeItem("adminAccess");
    dispatch(adminLogout());
    history.push("/login");
  };

  const BootstrapTooltip = (props) => {
    const classes = useStylesBootstrap();

    return <Tooltip arrow classes={classes} {...props} />;
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          {!open && (
            <Typography className="header-logo-name" variant="h6" noWrap>
              Kin Industries
            </Typography>
          )}
        </Toolbar>
        {window.innerWidth <= 500 ? (
          <IconButton
            onClick={() => logoutAdmin()}
            color="primary"
            aria-label="add to shopping cart"
          >
            <ExitToApp />
          </IconButton>
        ) : (
          <Button
            variant="contained"
            color="primary"
            size="large"
            className={classes.button}
            startIcon={<ExitToApp />}
            onClick={() => logoutAdmin()}
          >
            Log out
          </Button>
        )}
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx(classes.paper, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className="drawer-header">
          {open && (
            <Typography
              className="header-logo-name drawer-header"
              variant="h6"
              noWrap
            >
              Kin Industries
            </Typography>
          )}

          <div className={classes.toolbar}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? <ChevronRight /> : <ChevronLeft />}
            </IconButton>
          </div>
        </div>
        <Divider />
        <List className="list-nav">
          <ListItem
            onClick={() => history.push("/adminHome")}
            button
            className={`${active === "/adminHome" && "nav-active"}`}
            key="Home"
          >
            <BootstrapTooltip title="Home" placement="right-end">
              <ListItemIcon>
                <img alt="" src={home} className="home-icon" />
              </ListItemIcon>
            </BootstrapTooltip>
            <ListItemText className="home-text" primary="Home" />
          </ListItem>
          <ListItem
            onClick={() => history.push("/adminProduct")}
            button
            className={`${active === "/adminProduct" && "nav-active"}`}
            key="Product"
          >
            <BootstrapTooltip title="Product" placement="right-end">
              <ListItemIcon>
                <img alt="" src={ProductImage} className="home-icon" />
              </ListItemIcon>
            </BootstrapTooltip>
            <ListItemText primary="Product" />
          </ListItem>
          <ListItem
            button
            onClick={() => history.push("/adminService")}
            className={`${active === "/adminService" && "nav-active"}`}
            key="Services"
          >
            <BootstrapTooltip title="Services" placement="right-end">
              <ListItemIcon>
                <img alt="" src={Services} className="home-icon" />
              </ListItemIcon>
            </BootstrapTooltip>
            <ListItemText primary="Services" />
          </ListItem>
          <ListItem
            button
            onClick={() => history.push("/adminClient")}
            className={`${active === "/adminClient" && "nav-active"}`}
            key="Clients"
          >
            <BootstrapTooltip title="Clients" placement="right-end">
              <ListItemIcon>
                <img alt="" src={Client} className="home-icon" />
              </ListItemIcon>
            </BootstrapTooltip>
            <ListItemText primary="Clients" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem
            button
            onClick={() => history.push("/adminInfo")}
            className={`${active === "/adminInfo" && "nav-active"}`}
            key="aboutUs"
          >
            <BootstrapTooltip title="About Us" placement="right-end">
              <ListItemIcon>
                <img alt="" src={info} className="home-icon" />
              </ListItemIcon>
            </BootstrapTooltip>
            <ListItemText primary="About Us" />
          </ListItem>
          <ListItem
            button
            onClick={() => history.push("/inquery")}
            className={`${active === "/inquery" && "nav-active"}`}
            key="aboutUs"
          >
            <BootstrapTooltip title="Inquery Mail" placement="right-end">
              <ListItemIcon>
                <img alt="" src={MailIcon} className="home-icon" />
              </ListItemIcon>
            </BootstrapTooltip>
            <ListItemText primary="About Us" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}

export default withRouter(MiniDrawer);
