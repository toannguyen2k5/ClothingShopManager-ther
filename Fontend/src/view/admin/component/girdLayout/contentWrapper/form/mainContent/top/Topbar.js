/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import Account from "./account/Account";
import Notifications from "./notification/Notifications";
import TitlePage from "./title_page/TitlePage";
import $ from "jquery";

export default class Topbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSidebar: true,
    };
  }
  noShow() {
    this.setState({
      showSidebar: !this.state.showSidebar,
    });
  }
  
  render() {
    return (
      <nav
        className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl"
        id="navbarBlur"
        navbar-scroll="true"
      >
        <div className="container-fluid py-1 px-3">
          <TitlePage {...this.props} />
          <div
            className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4"
            id="navbar"
          >
            <div className="ms-md-auto pe-md-3 d-flex align-items-center">
              <div className="input-group input-group-outline">
                <label className="form-label">Type here...</label>
                <input
                  type="text"
                  className="form-control"
                  onfocus="focused(this)"
                  onfocusout="defocused(this)"
                />
              </div>
            </div>
            <ul className="navbar-nav navbar-nav-account  justify-content-end">
              <li className="nav-item dropdown d-flex align-items-center">
                <Account {...this.props} />
              </li>
              <li className="nav-item d-xl-none ps-3 d-flex align-items-center">
                <a
                  className="nav-link text-body p-0"
                  id="iconNavbarSidenav"
                  onClick={() => {
                    $("#sidenav-main").addClass("sidenav-show-important");
                    $("#iconSidenav").addClass("sidenav-show-important");
                    
                  }}
                >
                  <div className="sidenav-toggler-inner">
                    <i className="sidenav-toggler-line"></i>
                    <i className="sidenav-toggler-line"></i>
                    <i className="sidenav-toggler-line"></i>
                  </div>
                </a>
              </li>
              <li className="nav-item px-3 d-flex align-items-center">
                <a href="/admin/setting/" className="nav-link text-body p-0">
                  <i
                    className="fa fa-cog fixed-plugin-button-nav cursor-pointer"
                    aria-hidden="true"
                  ></i>
                </a>
              </li>
              <li className="nav-item dropdown pe-2 d-flex align-items-center">
                <Notifications {...this.props} />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
