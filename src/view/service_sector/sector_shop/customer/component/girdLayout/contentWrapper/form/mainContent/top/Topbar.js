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
        <header id="header" class="site-header">
          <div id="topbar">
            <div class="marquee-topbar">
              <div class="item">
                <a>
                  <p>
                    <strong>VOUCHER 10% TỐI ĐA 10K</strong>
                  </p>
                </a>
              </div>

              <div class="item">
                <a>
                  <p>
                    <strong>VOUCHER 50K ĐƠN TỪ 699K</strong>
                  </p>
                </a>
              </div>

              <div class="item">
                <a>
                  <p>
                    <strong>VOUCHER 80K ĐƠN TỪ 999K</strong>
                  </p>
                </a>
              </div>

              <div class="item">
                <p>
                  <strong>FREESHIP ĐƠN TỪ 399K</strong>
                </p>
              </div>
            </div>
          </div>

          <div id="site-header-center" class="header-top">
            <div class="container">
              <div class="row d-flex d-flex-center">
                <div class="hidden-lg hidden-md col-xs-3 col-sm-4 d-flex pd-right-0">
                  <button class="btn-menu-mb">
                    Menu <i class="fa-bars-menu" aria-hidden="true"></i>
                    <i class="fa-bars-menu" aria-hidden="true"></i>
                    <i class="fa-bars-menu" aria-hidden="true"></i>
                  </button>
                </div>
                <div class="logo col-md-2 col-lg-3 col-xs-5 col-sm-4 pd-right-0">
                  <a href="/">
                    <img
                      class="dt-width-auto1 logo-img"
                      height="35"
                      width="130"
                      src="/icon_page.png"
                      alt="160STORE"
                    />
                  </a>
                </div>
                <nav class="col-md-6 hidden-xs hidden-sm pd-right-0">
                  <div class="site_search search-desktop">
                    <form action="/search" class="wanda-mxm-search">
                      <div class="search-inner">
                        <input
                          name="q"
                          autocomplete="off"
                          class="searchinput input-search search-input"
                          type="text"
                          size="20"
                          placeholder="Bạn đang tìm gì..."
                          aria-label="Search"
                        />
                      </div>
                      <button
                        type="submit"
                        class="btn-search"
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
                    <div class="smart-search-wrapper ajaxSearchResults">
                      <div class="results-seach">
                        <div class="title-search text-center">
                          Kết quả tìm kiếm
                        </div>
                        <div class="group-head-smart d-flex">
                          <span class="title-search-item-parent">Sản phẩm</span>
                          <a
                            class="total-product-result result-total-smart"
                            href="/"
                          ></a>
                        </div>
                        <div class="product-result-data padding-15"></div>
                        <div class="group-head-smart  d-flex">
                          <span class="title-search-item-parent">Bài viết</span>
                          <a
                            class="total-article-result result-total-smart"
                            href="/"
                          >
                            Xem tất cả 10 bài viết
                          </a>
                        </div>
                        <div class="article-result-data padding-15"></div>
                      </div>
                    </div>
                  </div>
                </nav>
                <div class="col-md-4 col-lg-3 group-icon-header col-xs-4 col-sm-4 pd-right-0 pd-0-mb">
                  <div class="cart-login-search align-items-center">
                    <ul class="list-inline list-unstyled mb-0 d-flex-header header-group-icon d-flex-center">
                      <li class="list-inline-item mr-0 hidden-md hidden-lg header-search-mb">
                        <a
                          class="group-icon-item group-icon-item-popup d-flex d-flex-center"
                          href="javascript:void(0)"
                        >
                          <span class="box-icon">
                            <img
                              width="24"
                              height="24"
                              src="//theme.hstatic.net/1000253775/1001315144/14/search-icon.svg?v=634"
                              alt="Tìm kiếm"
                            />
                          </span>
                          <span class="box-text hidden-xs hidden-sm">
                            Tìm kiếm
                          </span>
                          <span class="box-arrow">
                            <svg viewBox="0 0 20 9" role="presentation">
                              <path
                                d="M.47108938 9c.2694725-.26871321.57077721-.56867841.90388257-.89986354C3.12384116 6.36134886 5.74788116 3.76338565 9.2467995.30653888c.4145057-.4095171 1.0844277-.40860098 1.4977971.00205122L19.4935156 9H.47108938z"
                                fill="#ffffff"
                              ></path>
                            </svg>
                          </span>
                        </a>
                        <div class="header-action_dropdown">
                          <div class="header-dropdown_content">
                            <p class="title-search">Tìm kiếm</p>
                            <div class="site_search">
                              <form action="/search" class="wanda-mxm-search">
                                <div class="search-inner">
                                  <input
                                    type="hidden"
                                    name="type"
                                    defaultValue="product"
                                  />
                                  <input
                                    name="q"
                                    autocomplete="off"
                                    class="searchinput input-search search-input"
                                    type="text"
                                    size="20"
                                    placeholder="Tìm kiếm sản phẩm..."
                                    aria-label="Search"
                                  />
                                </div>
                                <button
                                  type="submit"
                                  class="btn-search"
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
                              <div class="smart-search-wrapper ajaxSearchResults">
                                <div class="results-seach">
                                  <div class="title-search text-center">
                                    Kết quả tìm kiếm
                                  </div>
                                  <div class="group-head-smart d-flex">
                                    <span class="title-search-item-parent">
                                      Sản phẩm
                                    </span>
                                    <a
                                      class="total-product-result result-total-smart"
                                      href="/"
                                    ></a>
                                  </div>
                                  <div class="product-result-data padding-15"></div>
                                  <div class="group-head-smart  d-flex">
                                    <span class="title-search-item-parent">
                                      Bài viết
                                    </span>
                                    <a
                                      class="total-article-result result-total-smart"
                                      href="/"
                                    >
                                      Xem tất cả 10 bài viết
                                    </a>
                                  </div>
                                  <div class="article-result-data padding-15"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li class="list-inline-item mr-0  header-store">
                        <div class="list-inline-item-text">
                          <a
                            class="group-icon-item address-header d-flex d-flex-center "
                            href="/shop/view_list"
                          >
                            <span class="box-icon">
                              <img
                                width="24"
                                height="24"
                                src="//theme.hstatic.net/1000253775/1001315144/14/location.svg?v=634"
                                alt="Hệ thống cửa hàng"
                              />
                            </span>
                            <span class="box-text hidden-xs hidden-sm">
                              <span class="small-text ">Cửa hàng</span>
                            </span>
                            <span class="box-arrow"></span>
                          </a>
                        </div>
                      </li>

                      <li class="list-inline-item mr-0 header-account">
                        <div class="list-inline-item-text">
                          <a
                            class="group-icon-item group-icon-item-popup d-flex d-flex-center account-header"
                            href="/login"
                          >
                            <span class="box-icon">
                              <img
                                width="24"
                                height="24"
                                src="//theme.hstatic.net/1000253775/1001315144/14/user-account.svg?v=634"
                                alt="Tài khoản"
                              />
                            </span>
                            <span class="box-text box-text-login hidden-sm hidden-xs">
                              Đăng nhập
                            </span>
                            <span class="box-arrow">
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
                      <li class="list-inline-item mr-0 header-cart">
                        <div class="list-inline-item-text">
                          <a
                            class="group-icon-item group-icon-item-popup d-flex d-flex-center "
                            href="/shop/shoping_cart"
                          >
                            <span class="box-icon">
                              <img
                                width="24"
                                height="24"
                                src="//theme.hstatic.net/1000253775/1001315144/14/shopping-cart.svg?v=634"
                                alt="Hệ thống cửa hàng"
                              />
                              <span class="js-number-cart number-cart">0</span>
                            </span>
                            <span class="box-text hidden-xs hidden-sm">
                              Giỏ hàng
                            </span>
                            <span class="box-arrow">
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
