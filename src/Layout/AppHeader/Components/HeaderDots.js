import React, { Fragment } from "react";

import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import city2 from "../../../assets/utils/images/dropdown-header/city2.jpg";

import Flag from "react-flagkit";

function HeaderDots() {
  // const [active, setActive] = useState("");

  // const hanleClink = () => {
  //   if ((active = "")) setActive("active");
  //   else setActive("");
  // };

  return (
    <Fragment>
      <div className="header-dots">
        <button className="mb-2 me-4 btn-icon btn-icon-only btn btn-link btn-sm mt-2">
          <i className="pe-7s-bell btn-icon-wrapper font-size-xlg"> </i>
          <span className="badge bg-danger badge-dot badge-dot-lg "> </span>
        </button>
        <UncontrolledDropdown>
          <DropdownToggle className="p-0 me-2" color="link">
            <div className="icon-wrapper icon-wrapper-alt rounded-circle">
              <div className="icon-wrapper-bg bg-focus" />
              <div className="language-icon">
                <Flag className="me-3 opacity-8" country="US" size="40" />
              </div>
            </div>
          </DropdownToggle>
          <DropdownMenu end className="rm-pointers">
            <div className="dropdown-menu-header">
              <div className="dropdown-menu-header-inner pt-4 pb-4 bg-focus">
                <div
                  className="menu-header-image opacity-05"
                  style={{
                    backgroundImage: "url(" + city2 + ")",
                  }}
                />
                <div className="menu-header-content text-center text-white">
                  <h6 className="menu-header-subtitle mt-0">Choose Language</h6>
                </div>
              </div>
            </div>
            <DropdownItem header>Popular Languages</DropdownItem>
            <DropdownItem active>
              <Flag className="me-3 opacity-8" country="US" />
              USA
            </DropdownItem>
            {/* <DropdownItem>
                <Flag className="me-3 opacity-8" country="CH" />
                Switzerland
              </DropdownItem>
              <DropdownItem>
                <Flag className="me-3 opacity-8" country="FR" />
                France
              </DropdownItem> */}
            <DropdownItem >
              <Flag className="me-3 opacity-8" country="ES" />
              Spain
            </DropdownItem>
            <DropdownItem divider />
            {/* <DropdownItem header>Others</DropdownItem>
              <DropdownItem active>
                <Flag className="me-3 opacity-8" country="DE" />
                Germany
              </DropdownItem>
              <DropdownItem>
                <Flag className="me-3 opacity-8" country="IT" />
                Italy
              </DropdownItem> */}
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    </Fragment>
  );
}

export default HeaderDots;
