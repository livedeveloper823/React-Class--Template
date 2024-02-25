import React, { Fragment } from "react";
import { Route } from "react-router-dom";

// USER PAGES

import Login from "./Login/";
import Register from "./Register/";
import ForgotPassword from "./ForgotPassword/";

const UserPages = ({ match }) => (
  <Fragment>
    <div className="app-container">
      {/* User Pages */}

      <Route path={`${match.url}/login`} component={Login} />
      <Route path={`${match.url}/register`} component={Register} />
      <Route path={`${match.url}/forgot-password`} component={ForgotPassword} />
    </div>
  </Fragment>
);

export default UserPages;
