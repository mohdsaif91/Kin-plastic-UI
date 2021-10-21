import React from "react";
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
import MailIcon from "@material-ui/icons/Mail";

import {
  ChevronRight,
  ChevronLeft,
  ExitToApp,
  Home,
  Inbox,
} from "@material-ui/icons";

import { adminLogout } from "../../Redux/Actions/AdminAction";
import ProductImage from "../../images/adminImage/productImage.png";
import Services from "../../images/adminImage/services.png";

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

function MiniDrawer() {
  const [open, setOpen] = React.useState(false);

  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();
  const dispatch = useDispatch();

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
            className="nav-active"
            key="Home"
          >
            <ListItemIcon>
              <BootstrapTooltip title="Home" placement="right-end">
                <Home className="home-icon" />
              </BootstrapTooltip>
            </ListItemIcon>
            <ListItemText className="home-text" primary="Home" />
          </ListItem>
          <ListItem
            onClick={() => history.push("/adminProduct")}
            button
            key="Product"
          >
            <ListItemIcon>
              <BootstrapTooltip title="Product" placement="right-end">
                <img src={ProductImage} className="home-icon" />
              </BootstrapTooltip>
            </ListItemIcon>
            <ListItemText primary="Product" />
          </ListItem>
          <ListItem button key="Services">
            <ListItemIcon>
              <BootstrapTooltip title="Services" placement="right-end">
                <img src={Services} className="home-icon" />
              </BootstrapTooltip>
            </ListItemIcon>
            <ListItemText primary="Services" />
          </ListItem>
        </List>
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <Inbox /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}

export default withRouter(MiniDrawer);
