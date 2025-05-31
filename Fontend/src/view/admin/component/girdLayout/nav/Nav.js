import React, { Component } from "react";
import { nameWebsite, urlapi } from "../../../../../setting/store/const";
import { nav } from "../contentWrapper/form/data_nav/_nav";
import NavItem from "./nav_item/NavItem";
import $ from "jquery";

export default class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
    };
  }
  show() {
    this.setState({
      show: !this.state.show,
    });
  }

  render() {
    return (
      <aside
        className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 bg-gradient-dark ps bg-white"
        id="sidenav-main"
      >
        <div className="sidenav-header">
          <i
            className="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
            aria-hidden="true"
            id="iconSidenav"
            onClick={() => {
              $("#sidenav-main").removeClass("sidenav-show-important");
              $("#iconSidenav").removeClass("sidenav-show-important");
            }}
          ></i>
          <a className="navbar-brand m-0" href="/admin/dashboard">
            <div className="row">
              <div className="col-4">
                <img
                  alt=""
                  src={`http://localhost:3000/icon_page.png`}
                  className="navbar-brand-img h-100"
                  style={{ width: "40px", height: "auto" }}
                />
              </div>
              <div className="col-8">
                <span className="ms-1 font-weight-bold text-white text-nowrap">
                  {nameWebsite}
                </span>
                <br />
                <span className="ms-1 font-weight-bold text-white text-nowrap">
                  Dashboard
                </span>
              </div>
            </div>
          </a>
        </div>
        <hr className="horizontal light mt-0 mb-2" />
        <div
          className="collapse navbar-collapse w-auto ps"
          id="sidenav-collapse-main"
        >
          <ul
            className="navbar-nav"
          >
            <NavItem nav={nav} {...this.props} />
          </ul>
        </div>
      </aside>
    );
  }
}
