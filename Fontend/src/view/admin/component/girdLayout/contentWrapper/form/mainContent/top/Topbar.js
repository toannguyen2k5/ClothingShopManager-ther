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
      isShowSlideBar: false,
      isShowAccount: false,
      isShowNotifications: false,
    };
  }
  showDropdown = (isShowSlideBar, isShowAccount, isShowNotifications) => {
    if (
      this.state.isShowAccount != isShowAccount &&
      this.state.isShowAccount != isShowAccount &&
      this.state.isShowAccount != isShowAccount
    )
      this.setState({
        isShowSlideBar: isShowSlideBar,
        isShowAccount: isShowAccount,
        isShowNotifications: isShowNotifications,
      });
  };

  render() {
    if (this.state.isShowSlideBar) {
      $("#sidenav-main").addClass("sidenav-show-important");
      $("#iconSidenav").addClass("sidenav-show-important");
    }
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
            <ul className="navbar-nav navbar-nav-account  justify-content-end">
              <li className="nav-item dropdown d-flex align-items-center">
                <Account
                  {...this.props}
                  status={this.state.isShowAccount}
                  onClick={this.showDropdown}
                />
              </li>
              <li className="nav-item d-xl-none ps-3 d-flex align-items-center">
                <a
                  className="nav-link text-body p-0"
                  id="iconNavbarSidenav"
                  onClick={() => {
                    this.setState({
                      isShowSlideBar: !$("#sidenav-main").hasClass(
                        "idenav-show-important"
                      ),
                      isShowAccount: false,
                      isShowNotifications: false,
                    });
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
                <Notifications
                  {...this.props}
                  status={this.state.isShowNotifications}
                  onClick={this.showDropdown(
                    false,
                    false,
                    !this.state.isShowNotifications
                  )}
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
