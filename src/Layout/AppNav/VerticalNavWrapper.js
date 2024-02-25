import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import MetisMenu from "react-metismenu";
import { setEnableMobileMenu } from "../../reducers/ThemeOptions";
import {
  MainNav,
  ManagementNav,
  TelemetryNav,
} from "./NavItems";

class Nav extends Component {
  state = {};

  toggleMobileSidebar = () => {
    let { enableMobileMenu, setEnableMobileMenu } = this.props;
    setEnableMobileMenu(!enableMobileMenu);
  };

  render() {
    return (
      <Fragment>
        <h5 className="app-sidebar__heading">Menu</h5>
        <MetisMenu content={MainNav} onSelected={this.toggleMobileSidebar} activeLinkFromLocation
          className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>

        <h5 className="app-sidebar__heading">MANAGEMENT</h5>
        <MetisMenu content={ManagementNav} onSelected={this.toggleMobileSidebar} activeLinkFromLocation
          className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>
        <h5 className="app-sidebar__heading">TELEMETRY</h5>
        <MetisMenu content={TelemetryNav} onSelected={this.toggleMobileSidebar} activeLinkFromLocation
          className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>
      </Fragment>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }
}
const mapStateToProps = (state) => ({
  enableMobileMenu: state.ThemeOptions.enableMobileMenu,
});

const mapDispatchToProps = (dispatch) => ({
  setEnableMobileMenu: (enable) => dispatch(setEnableMobileMenu(enable)),
});
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Nav));
