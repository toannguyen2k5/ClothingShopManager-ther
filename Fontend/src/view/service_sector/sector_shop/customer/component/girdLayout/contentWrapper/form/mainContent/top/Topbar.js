/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import HeaderCategory from "./header_category/HeaderCategory";
import TopbarNotice from "./TopbarNotice";
import CartIcon from "./CartIcon";
import SearchBar from "./SearchBar";
import AccountIcon from "./AccountIcon";
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
      <>
        <header id="header" className="site-header">
          <TopbarNotice {...this.props} />
          <div id="site-header-center" className="header-top">
            <div className="container">
              <div className="row d-flex d-flex-center">
                <div className="hidden-lg hidden-md col-xs-3 col-sm-4 d-flex pd-right-0">
                  <button className="btn-menu-mb">
                    Menu <i className="fa-bars-menu" aria-hidden="true"></i>
                    <i className="fa-bars-menu" aria-hidden="true"></i>
                    <i className="fa-bars-menu" aria-hidden="true"></i>
                  </button>
                </div>
                <div className="logo col-md-2 col-lg-3 col-xs-5 col-sm-4 pd-right-0">
                  <a href="/">
                    <img
                      className="dt-width-auto1 logo-img"
                      height="35"
                      width="130"
                      src="/icon_page.png"
                      alt="160STORE"
                    />
                  </a>
                </div>
                <SearchBar {...this.props} />
                <div className="col-md-4 col-lg-3 group-icon-header col-xs-4 col-sm-4 pd-right-0 pd-0-mb">
                  <div
                    className="cart-login-search align-items-center"
                    style={{ display: "flex" }}
                  >
                    <ul className="list-inline list-unstyled mb-0 d-flex-header header-group-icon d-flex-center">
                      <li className="list-inline-item mr-0  header-store">
                        <div className="list-inline-item-text">
                          <a
                            className="group-icon-item address-header d-flex d-flex-center "
                            href="/shop/view_list"
                          >
                            <span className="box-icon">
                              <img
                                width="24"
                                height="24"
                                src="//theme.hstatic.net/1000253775/1001315144/14/location.svg?v=634"
                                alt="Hệ thống cửa hàng"
                              />
                            </span>
                            <span className="box-text hidden-xs hidden-sm">
                              <span className="small-text ">Cửa hàng</span>
                            </span>
                            <span className="box-arrow"></span>
                          </a>
                        </div>
                      </li>
                      <CartIcon {...this.props} />
                      <AccountIcon {...this.props} />
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <HeaderCategory />
        </header>
      </>
    );
  }
}
