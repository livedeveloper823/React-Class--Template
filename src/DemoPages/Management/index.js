import React, { Fragment } from "react";
import { Route } from "react-router-dom";

// USER PAGES
import AppSidebar from "../../Layout/AppSidebar";
import AppHeader from "../../Layout/AppHeader";
import ClusterManager from "./ClusterManager/";
import SecurityManager from "./SecurityManager/";
import WebAppsManager from "./WebAppsManager/";

const Management = ({ match }) => (
  <Fragment>
    <AppHeader />
    <div className="app-main">
      <AppSidebar />
      <div className="app-main__outer">
        <div className="app-main__inner">
          <Route
            path={`${match.url}/clustermanager`}
            component={ClusterManager}
          />
          <Route
            path={`${match.url}/securitymanager`}
            component={SecurityManager}
          />
          <Route
            path={`${match.url}/webappsmanager`}
            component={WebAppsManager}
          />
        </div>
      </div>
    </div>
  </Fragment>
);

export default Management;
