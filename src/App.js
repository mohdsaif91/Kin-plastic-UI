import React, { useEffect, useState } from "react";
import { Switch, Route, withRouter } from "react-router";
import { useSelector } from "react-redux";

//client imports
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Client from "./Pages/Client";
import Home from "./Pages/Home";
import LogIn from "./Pages/LogIn";
import Products from "./Pages/Products";
import ReachUs from "./Pages/ReachUs";
import Services from "./Pages/ServiceComponent/Services";
import AboutUs from "./Pages/AboutUs";

//admin imports
import AdminProduct from "./AdminComponents/Pages/AdminProduct/AdminProduct";
import AdminHeader from "./AdminComponents/Components/AdminHeader";
import AdminHome from "./AdminComponents/Pages/AdminHome";
import AdminService from "./AdminComponents/Pages/AdminService";
import AdminClient from "./AdminComponents/Pages/AdminClient";
import AdminInfo from "./AdminComponents/Pages/AboutUs/AdminInfo";
import AdminInquery from "./AdminComponents/Pages/AdminInquery";
import ShowProduct from "./Pages/ShowProduct";

function App(props) {
  const admin = useSelector((state) => state.AdminReducer);
  const [footer, setFooter] = useState(true);

  const loadingState = useSelector((state) => state.UtilsReducer);

  useEffect(() => {
    setFooter(props.location.pathname !== "/login");
  }, [props.location.pathname]);

  useEffect(() => {
    if (admin.adminRights) {
      sessionStorage.setItem("adminAccess", true);
    }
  }, [admin.adminRights]);

  return (
    <div className="app-container">
      {loadingState.loading ? (
        <div className="sk-cube-grid">
          <div className="sk-cube sk-cube1"></div>
          <div className="sk-cube sk-cube2"></div>
          <div className="sk-cube sk-cube3"></div>
          <div className="sk-cube sk-cube4"></div>
          <div className="sk-cube sk-cube5"></div>
          <div className="sk-cube sk-cube6"></div>
          <div className="sk-cube sk-cube7"></div>
          <div className="sk-cube sk-cube8"></div>
          <div className="sk-cube sk-cube9"></div>
        </div>
      ) : (
        <>
          {sessionStorage.getItem("adminAccess") ? (
            <AdminHeader />
          ) : (
            <Header hideRest={footer} />
          )}
          <div className="page-container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/aboutUs" component={AboutUs} />
              <Route exact path="/product" component={Products} />
              <Route exact path="/service" component={Services} />
              <Route exact path="/reachUs" component={ReachUs} />
              <Route exact path="/login" component={LogIn} />
              <Route exact path="/clients" component={Client} />
              <Route exact path="/showProduct/:id" component={ShowProduct} />
              {/* admin */}
              <Route exact path="/adminClient" component={AdminClient} />
              <Route exact path="/adminHome" component={AdminHome} />
              <Route exact path="/adminInfo" component={AdminInfo} />
              <Route exact path="/adminProduct" component={AdminProduct} />
              <Route exact path="/adminService" component={AdminService} />
              <Route exact path="/inquery" component={AdminInquery} />
            </Switch>
          </div>
          {!sessionStorage.getItem("adminAccess") && footer && <Footer />}
        </>
      )}
    </div>
  );
}

export default withRouter(App);
