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

function App(props) {
  const admin = useSelector((state) => state.AdminReducer);
  const [footer, setFooter] = useState(true);

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
            {/* admin */}
            <Route exact path="/adminHome" component={AdminHome} />
            <Route exact path="/adminProduct" component={AdminProduct} />
            <Route exact path="/adminService" component={AdminService} />
            <Route exact path="/adminClient" component={AdminClient} />
          </Switch>
        </div>
        {!sessionStorage.getItem("adminAccess") && footer && <Footer />}
      </>
    </div>
  );
}

export default withRouter(App);
