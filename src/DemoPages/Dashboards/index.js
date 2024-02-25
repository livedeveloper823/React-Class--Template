import React, { Fragment } from "react";
import { Route } from "react-router-dom";

// Layout

import AppHeader from "../../Layout/AppHeader/";
import AppSidebar from "../../Layout/AppSidebar/";

import ManageUSer from "./ManageUser";
import Dashboard from "./Dashboard";

const Dashboards = ({ match }) => (
  <Fragment>
    <AppHeader />
    <div className="app-main">
      <AppSidebar />
      <div className="app-main__outer">
        <div className="app-main__inner">
          <Route path={`${match.url}/manageuser`} component={ManageUSer}/>
          <Route path={`${match.url}/dashboard`} component={Dashboard}/>
        </div>
      </div>
    </div>
  </Fragment>
);

export default Dashboards;
