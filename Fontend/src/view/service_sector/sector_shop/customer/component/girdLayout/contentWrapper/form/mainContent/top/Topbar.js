/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import HeaderCategory from "./header_category/HeaderCategory";

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
          <div id="topbar">
            <div className="marquee-topbar">
              <div className="item">
                <a>
                  <p>
                    <strong>VOUCHER 10% TỐI ĐA 10K</strong>
                  </p>
                </a>
              </div>

              <div className="item">
                <a>
                  <p>
                    <strong>VOUCHER 50K ĐƠN TỪ 699K</strong>
                  </p>
                </a>
              </div>

              <div className="item">
                <a>
                  <p>
                    <strong>VOUCHER 80K ĐƠN TỪ 999K</strong>
                  </p>
                </a>
              </div>

              <div className="item">
                <p>
                  <strong>FREESHIP ĐƠN TỪ 399K</strong>
                </p>
              </div>
            </div>
          </div>

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
                <nav className="col-md-6 hidden-xs hidden-sm pd-right-0">
                  <div className="site_search search-desktop">
                    <form action="/search" className="wanda-mxm-search">
                      <div className="search-inner">
                        <input
                          name="q"
                          autocomplete="off"
                          className="searchinput input-search search-input"
                          type="text"
                          size="20"
                          placeholder="Bạn đang tìm gì..."
                          aria-label="Search"
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn-search"
                        aria-label="Tìm kiếm"
                      >
                        <img
                          width="24"
                          height="24"
                          src="//theme.hstatic.net/1000253775/1001315144/14/search-icon.svg?v=634"
                          alt="Tìm kiếm"
                        />
                      </button>
                    </form>
                    <div className="smart-search-wrapper ajaxSearchResults">
                      <div className="results-seach">
                        <div className="title-search text-center">
                          Kết quả tìm kiếm
                        </div>
                        <div className="group-head-smart d-flex">
                          <span className="title-search-item-parent">Sản phẩm</span>
                          <a
                            className="total-product-result result-total-smart"
                            href="/"
                          >Sản Phẩm</a>
                        </div>
                        <div className="product-result-data padding-15"></div>
                        <div className="group-head-smart  d-flex">
                          <span className="title-search-item-parent">Bài viết</span>
                          <a
                            className="total-article-result result-total-smart"
                            href="/"
                          >
                            Xem tất cả 10 bài viết
                          </a>
                        </div>
                        <div className="article-result-data padding-15"></div>
                      </div>
                    </div>
                  </div>
                </nav>
                <div className="col-md-4 col-lg-3 group-icon-header col-xs-4 col-sm-4 pd-right-0 pd-0-mb">
                  <div className="cart-login-search align-items-center">
                    <ul className="list-inline list-unstyled mb-0 d-flex-header header-group-icon d-flex-center">
                      <li className="list-inline-item mr-0 hidden-md hidden-lg header-search-mb">
                        <a
                          className="group-icon-item group-icon-item-popup d-flex d-flex-center"
                          href="javascript:void(0)"
                        >
                          <span className="box-icon">
                            <img
                              width="24"
                              height="24"
                              src="//theme.hstatic.net/1000253775/1001315144/14/search-icon.svg?v=634"
                              alt="Tìm kiếm"
                            />
                          </span>
                          <span className="box-text hidden-xs hidden-sm">
                            Tìm kiếm
                          </span>
                          <span className="box-arrow">
                            <svg viewBox="0 0 20 9" role="presentation">
                              <path
                                d="M.47108938 9c.2694725-.26871321.57077721-.56867841.90388257-.89986354C3.12384116 6.36134886 5.74788116 3.76338565 9.2467995.30653888c.4145057-.4095171 1.0844277-.40860098 1.4977971.00205122L19.4935156 9H.47108938z"
                                fill="#ffffff"
                              ></path>
                            </svg>
                          </span>
                        </a>
                        <div className="header-action_dropdown">
                          <div className="header-dropdown_content">
                            <p className="title-search">Tìm kiếm</p>
                            <div className="site_search">
                              <form action="/search" className="wanda-mxm-search">
                                <div className="search-inner">
                                  <input
                                    type="hidden"
                                    name="type"
                                    defaultValue="product"
                                  />
                                  <input
                                    name="q"
                                    autocomplete="off"
                                    className="searchinput input-search search-input"
                                    type="text"
                                    size="20"
                                    placeholder="Tìm kiếm sản phẩm..."
                                    aria-label="Search"
                                  />
                                </div>
                                <button
                                  type="submit"
                                  className="btn-search"
                                  aria-label="Tìm kiếm"
                                >
                                  <img
                                    width="24"
                                    height="24"
                                    src="//theme.hstatic.net/1000253775/1001315144/14/search-icon.svg?v=634"
                                    alt="Tìm kiếm"
                                  />
                                </button>
                              </form>
                              <div className="smart-search-wrapper ajaxSearchResults">
                                <div className="results-seach">
                                  <div className="title-search text-center">
                                    Kết quả tìm kiếm
                                  </div>
                                  <div className="group-head-smart d-flex">
                                    <span className="title-search-item-parent">
                                      Sản phẩm
                                    </span>
                                    <a
                                      className="total-product-result result-total-smart"
                                      href="/"
                                    ></a>
                                  </div>
                                  <div className="product-result-data padding-15"></div>
                                  <div className="group-head-smart  d-flex">
                                    <span className="title-search-item-parent">
                                      Bài viết
                                    </span>
                                    <a
                                      className="total-article-result result-total-smart"
                                      href="/"
                                    >
                                      Xem tất cả 10 bài viết
                                    </a>
                                  </div>
                                  <div className="article-result-data padding-15"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>

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

                      <li className="list-inline-item mr-0 header-account">
                        <div className="list-inline-item-text">
                          <a
                            className="group-icon-item group-icon-item-popup d-flex d-flex-center account-header"
                            href="/login"
                          >
                            <span className="box-icon">
                              <img
                                width="24"
                                height="24"
                                src="//theme.hstatic.net/1000253775/1001315144/14/user-account.svg?v=634"
                                alt="Tài khoản"
                              />
                            </span>
                            <span className="box-text box-text-login hidden-sm hidden-xs">
                              Đăng nhập
                            </span>
                            <span className="box-arrow">
                              <svg viewBox="0 0 20 9" role="presentation">
                                <path
                                  d="M.47108938 9c.2694725-.26871321.57077721-.56867841.90388257-.89986354C3.12384116 6.36134886 5.74788116 3.76338565 9.2467995.30653888c.4145057-.4095171 1.0844277-.40860098 1.4977971.00205122L19.4935156 9H.47108938z"
                                  fill="#ffffff"
                                ></path>
                              </svg>
                            </span>
                          </a>
                        </div>
                      </li>
                      <li className="list-inline-item mr-0 header-cart">
                        <div className="list-inline-item-text">
                          <a
                            className="group-icon-item group-icon-item-popup d-flex d-flex-center "
                            href="/shop/shoping_cart"
                          >
                            <span className="box-icon">
                              <img
                                width="24"
                                height="24"
                                src="//theme.hstatic.net/1000253775/1001315144/14/shopping-cart.svg?v=634"
                                alt="Hệ thống cửa hàng"
                              />
                              <span className="js-number-cart number-cart">0</span>
                            </span>
                            <span className="box-text hidden-xs hidden-sm">
                              Giỏ hàng
                            </span>
                            <span className="box-arrow">
                              <svg viewBox="0 0 20 9" role="presentation">
                                <path
                                  d="M.47108938 9c.2694725-.26871321.57077721-.56867841.90388257-.89986354C3.12384116 6.36134886 5.74788116 3.76338565 9.2467995.30653888c.4145057-.4095171 1.0844277-.40860098 1.4977971.00205122L19.4935156 9H.47108938z"
                                  fill="#ffffff"
                                ></path>
                              </svg>
                            </span>
                          </a>
                        </div>
                      </li>
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
