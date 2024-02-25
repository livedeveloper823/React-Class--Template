import React, { Fragment } from "react";
import { Route } from "react-router-dom";

// USER PAGES
import AppSidebar from "../../Layout/AppSidebar";
import AppHeader from "../../Layout/AppHeader";
import Applicationlogs from "./Applicationlogs/";
import Clusterstatus from "./Clusterstatus/";
import Loadbalancer from "./Loadbalancer/";
import Webapplicationfirewall from "./Webapplicationfirewall/";

const Management = ({ match }) => (
  <Fragment>
    <AppHeader />
    <div className="app-main">
      <AppSidebar />
      <div className="app-main__outer">
        <div className="app-main__inner">
          <Route path={`${match.url}/applicationlogs`} component={Applicationlogs}/>
          <Route path={`${match.url}/clusterstatus`} component={Clusterstatus}/>
          <Route path={`${match.url}/loadbalancer`} component={Loadbalancer} />
          <Route path={`${match.url}/webapplicationfirewall`} component={Webapplicationfirewall} />
        </div>
      </div>
    </div>
  </Fragment>
);

export default Management;
