import React from "react";
import { Route, Switch, withRouter } from "react-router";

import AdminHeader from "../Components/AdminHeader";
import AdminHome from "./AdminHome";
import AdminProduct from "./AdminProduct";

function AdminMain() {
  return (
    <div>
      <AdminHeader />
      <div className="page-container">
          <Route exact path="/adminHome" component={AdminHome} />
      </div>
    </div>
  );
}

export default withRouter(AdminMain);
