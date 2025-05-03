/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

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
                      src="https://file.hstatic.net/1000253775/file/logo_no_bf-05_3e6797f31bda4002a22464d6f2787316.png"
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
                            href="/pages/lien-he"
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
                          <div class="header-action_dropdown bg-grey-opacity">
                            <div class="header-dropdown_content">
                              <div class="overflow-hidden relative-position">
                                <div class="account_header text-center">
                                  <div class="account_title heading h2">
                                    Tìm cửa hàng gần bạn
                                  </div>
                                </div>
                                <div class="group-store-header mg-top-15">
                                  <div class="d-flex header-select-store">
                                    <div class="form-group">
                                      <select
                                        name="change-tinh"
                                        class="change-tinh"
                                      >
                                        <option defaultValue="all" selected="">
                                          Chọn tỉnh/thành phố
                                        </option>
                                        <option
                                          defaultValue="Hồ Chí Minh"
                                          data-tinh="Hồ Chí Minh"
                                        >
                                          Hồ Chí Minh
                                        </option>
                                        <option
                                          defaultValue="Hà Nội"
                                          data-tinh="Hà Nội"
                                        >
                                          Hà Nội
                                        </option>
                                        <option
                                          defaultValue="Bà Rịa - Vũng Tàu"
                                          data-tinh="Bà Rịa - Vũng Tàu"
                                        >
                                          Bà Rịa - Vũng Tàu
                                        </option>
                                        <option
                                          defaultValue="Cần Thơ"
                                          data-tinh="Cần Thơ"
                                        >
                                          Cần Thơ
                                        </option>
                                        <option
                                          defaultValue="Đà Nẵng"
                                          data-tinh="Đà Nẵng"
                                        >
                                          Đà Nẵng
                                        </option>
                                        <option
                                          defaultValue="Đắk Lắk"
                                          data-tinh="Đắk Lắk"
                                        >
                                          Đắk Lắk
                                        </option>
                                        <option
                                          defaultValue="Long An"
                                          data-tinh="Long An"
                                        >
                                          Long An
                                        </option>
                                        <option
                                          defaultValue="Tiền Giang"
                                          data-tinh="Tiền Giang"
                                        >
                                          Tiền Giang
                                        </option>
                                      </select>
                                    </div>
                                    <div class="form-group">
                                      <select
                                        name="select-quan"
                                        class="select-quan"
                                      >
                                        <option defaultValue="all">
                                          Chọn Quận/huyện
                                        </option>
                                      </select>
                                    </div>
                                  </div>
                                  <div class="address-count mg-top-15">
                                    <div class="address-detail">
                                      <ul class="address-link">
                                        <li
                                          class=""
                                          data-tinh="dak-lak"
                                          data-quan="buon-ma-thuot"
                                        >
                                          <a
                                            href="https://maps.app.goo.gl/AyTmEexqZif24SoC6"
                                            target="_blank"
                                            class="iframe-map"
                                            rel="nofollow"
                                          >
                                            <b>
                                              Đắk Lắk - ĐẮK LẮK - BUÔN MA THUỘT
                                            </b>
                                            <span>
                                              14 Phan Chu Trinh, Thắng Lợi, Buôn
                                              Ma Thuột, Đắk Lắk, Vietnam
                                            </span>
                                            <span>
                                              <i class="fa fa-phone"></i>
                                              02871006789
                                            </span>
                                            <span>
                                              Thời gian hoạt động: 8:30 - 22:00
                                            </span>
                                          </a>
                                          <a
                                            class="infoLocation"
                                            target="_blank"
                                            href="https://maps.app.goo.gl/AyTmEexqZif24SoC6"
                                            rel="nofollow"
                                          >
                                            <i class="fa fa-location-arrow"></i>
                                            <span class="guideWay">
                                              Chỉ đường
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          class=""
                                          data-tinh="long-an"
                                          data-quan="tan-an"
                                        >
                                          <a
                                            href="https://maps.app.goo.gl/LVE5dfjCmHCNCT7c9"
                                            target="_blank"
                                            class="iframe-map"
                                            rel="nofollow"
                                          >
                                            <b>Long An - LONG AN - TÂN AN</b>
                                            <span>
                                              290 Đ. Hùng Vương, Phường 3, Tân
                                              An, Long An
                                            </span>
                                            <span>
                                              <i class="fa fa-phone"></i>
                                              02871006789
                                            </span>
                                            <span>
                                              Thời gian hoạt động: 8:30 - 22:00
                                            </span>
                                          </a>
                                          <a
                                            class="infoLocation"
                                            target="_blank"
                                            href="https://maps.app.goo.gl/LVE5dfjCmHCNCT7c9"
                                            rel="nofollow"
                                          >
                                            <i class="fa fa-location-arrow"></i>
                                            <span class="guideWay">
                                              Chỉ đường
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          class=""
                                          data-tinh="ho-chi-minh"
                                          data-quan="quan-10"
                                        >
                                          <a
                                            href="https://goo.gl/maps/qdWQK7q8C3b3aDih7"
                                            target="_blank"
                                            class="iframe-map"
                                            rel="nofollow"
                                          >
                                            <b>
                                              Hồ Chí Minh - HỒ CHÍ MINH - TÔ
                                              HIẾN THÀNH
                                            </b>
                                            <span>
                                              297/3 Tô Hiến Thành, Phường 13,
                                              Quận 10, TP.HCM
                                            </span>
                                            <span>
                                              <i class="fa fa-phone"></i>
                                              02871006789
                                            </span>
                                            <span>
                                              Thời gian hoạt động: 8:30 - 22:00
                                            </span>
                                          </a>
                                          <a
                                            class="infoLocation"
                                            target="_blank"
                                            href="https://goo.gl/maps/qdWQK7q8C3b3aDih7"
                                            rel="nofollow"
                                          >
                                            <i class="fa fa-location-arrow"></i>
                                            <span class="guideWay">
                                              Chỉ đường
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          class=""
                                          data-tinh="ho-chi-minh"
                                          data-quan="quan-1"
                                        >
                                          <a
                                            href="https://goo.gl/maps/mtXgsKrAQAvM2zH79"
                                            target="_blank"
                                            class="iframe-map"
                                            rel="nofollow"
                                          >
                                            <b>
                                              Hồ Chí Minh - HỒ CHÍ MINH - TRẦN
                                              HƯNG ĐẠO
                                            </b>
                                            <span>
                                              391/375 Trần Hưng Đạo, Phường Cầu
                                              Kho, Quận 1, TP.HCM
                                            </span>
                                            <span>
                                              <i class="fa fa-phone"></i>
                                              02871006789
                                            </span>
                                            <span>
                                              Thời gian hoạt động: 8:30 - 22:00
                                            </span>
                                          </a>
                                          <a
                                            class="infoLocation"
                                            target="_blank"
                                            href="https://goo.gl/maps/mtXgsKrAQAvM2zH79"
                                            rel="nofollow"
                                          >
                                            <i class="fa fa-location-arrow"></i>
                                            <span class="guideWay">
                                              Chỉ đường
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          class=""
                                          data-tinh="can-tho"
                                          data-quan="quan-ninh-kieu"
                                        >
                                          <a
                                            href="https://goo.gl/maps/6gtTYAK4ei3Zqr6o7"
                                            target="_blank"
                                            class="iframe-map"
                                            rel="nofollow"
                                          >
                                            <b>Cần Thơ - CẦN THƠ - TRẦN PHÚ</b>
                                            <span>
                                              Số 35 Trần Phú, Phường Cái Khế,
                                              Quận Ninh Kiều, TP.Cần Thơ
                                            </span>
                                            <span>
                                              <i class="fa fa-phone"></i>
                                              02871006789
                                            </span>
                                            <span>
                                              Thời gian hoạt động: 8:30 - 22:00
                                            </span>
                                          </a>
                                          <a
                                            class="infoLocation"
                                            target="_blank"
                                            href="https://goo.gl/maps/6gtTYAK4ei3Zqr6o7"
                                            rel="nofollow"
                                          >
                                            <i class="fa fa-location-arrow"></i>
                                            <span class="guideWay">
                                              Chỉ đường
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          class=""
                                          data-tinh="bien-hoa"
                                          data-quan="tp-bien-hoa"
                                        >
                                          <a
                                            href="https://goo.gl/maps/jM8RvCZNp3P57mm18"
                                            target="_blank"
                                            class="iframe-map"
                                            rel="nofollow"
                                          >
                                            <b>
                                              Biên Hòa - BIÊN HÒA - PHAN TRUNG
                                            </b>
                                            <span>
                                              Số 157 Phan Trung, Phường Tân Mai,
                                              TP.Biên Hòa, Đồng Nai
                                            </span>
                                            <span>
                                              <i class="fa fa-phone"></i>
                                              02871006789
                                            </span>
                                            <span>
                                              Thời gian hoạt động: 8:30 - 22:00
                                            </span>
                                          </a>
                                          <a
                                            class="infoLocation"
                                            target="_blank"
                                            href="https://goo.gl/maps/jM8RvCZNp3P57mm18"
                                            rel="nofollow"
                                          >
                                            <i class="fa fa-location-arrow"></i>
                                            <span class="guideWay">
                                              Chỉ đường
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          class=""
                                          data-tinh="da-nang"
                                          data-quan="quan-hai-chau"
                                        >
                                          <a
                                            href="https://goo.gl/maps/1bHGdbU1j5VhydEm9"
                                            target="_blank"
                                            class="iframe-map"
                                            rel="nofollow"
                                          >
                                            <b>
                                              Đà Nẵng - ĐÀ NẴNG - LÝ TỰ TRỌNG
                                            </b>
                                            <span>
                                              Số 144 Lý Tự trọng, Quận Hải Châu,
                                              TP.Đà Nẵng
                                            </span>
                                            <span>
                                              <i class="fa fa-phone"></i>
                                              02871006789
                                            </span>
                                            <span>
                                              Thời gian hoạt động: 8:30 - 22:00
                                            </span>
                                          </a>
                                          <a
                                            class="infoLocation"
                                            target="_blank"
                                            href="https://goo.gl/maps/1bHGdbU1j5VhydEm9"
                                            rel="nofollow"
                                          >
                                            <i class="fa fa-location-arrow"></i>
                                            <span class="guideWay">
                                              Chỉ đường
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          class=""
                                          data-tinh="ho-chi-minh"
                                          data-quan="quan-phu-nhuan"
                                        >
                                          <a
                                            href="https://goo.gl/maps/UwnSSzSuUAtRSQex9"
                                            target="_blank"
                                            class="iframe-map"
                                            rel="nofollow"
                                          >
                                            <b>
                                              Hồ Chí Minh - HỒ CHÍ MINH - PHAN
                                              XÍCH LONG
                                            </b>
                                            <span>
                                              401 Phan Xích Long, Phường 3, Quận
                                              Phú Nhuận, TP.HCM.
                                            </span>
                                            <span>
                                              <i class="fa fa-phone"></i>
                                              02871006789
                                            </span>
                                            <span>
                                              Thời gian hoạt động: 8:30 - 22:00
                                            </span>
                                          </a>
                                          <a
                                            class="infoLocation"
                                            target="_blank"
                                            href="https://goo.gl/maps/UwnSSzSuUAtRSQex9"
                                            rel="nofollow"
                                          >
                                            <i class="fa fa-location-arrow"></i>
                                            <span class="guideWay">
                                              Chỉ đường
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          class=""
                                          data-tinh="ho-chi-minh"
                                          data-quan="quan-go-vap"
                                        >
                                          <a
                                            href="https://maps.app.goo.gl/hwpnWCxrZStRYTGg7"
                                            target="_blank"
                                            class="iframe-map"
                                            rel="nofollow"
                                          >
                                            <b>
                                              Hồ Chí Minh - HỒ CHÍ MINH - QUANG
                                              TRUNG
                                            </b>
                                            <span>
                                              53 Quang Trung, Phường 10, Quận Gò
                                              Vấp, TP.HCM
                                            </span>
                                            <span>
                                              <i class="fa fa-phone"></i>
                                              02871006789
                                            </span>
                                            <span>
                                              Thời gian hoạt động: 8:30 - 22:00
                                            </span>
                                          </a>
                                          <a
                                            class="infoLocation"
                                            target="_blank"
                                            href="https://maps.app.goo.gl/hwpnWCxrZStRYTGg7"
                                            rel="nofollow"
                                          >
                                            <i class="fa fa-location-arrow"></i>
                                            <span class="guideWay">
                                              Chỉ đường
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          class=""
                                          data-tinh="ho-chi-minh"
                                          data-quan="quan-tan-phu"
                                        >
                                          <a
                                            href="https://goo.gl/maps/sZEoKMZhsTGT9epi7"
                                            target="_blank"
                                            class="iframe-map"
                                            rel="nofollow"
                                          >
                                            <b>
                                              Hồ Chí Minh - HỒ CHÍ MINH - KHUÔNG
                                              VIỆT
                                            </b>
                                            <span>
                                              111 Khuông Việt, Phường Phú Trung,
                                              Quận Tân Phú, TP.HCM
                                            </span>
                                            <span>
                                              <i class="fa fa-phone"></i>
                                              02871006789
                                            </span>
                                            <span>
                                              Thời gian hoạt động: 8:30 - 22:00
                                            </span>
                                          </a>
                                          <a
                                            class="infoLocation"
                                            target="_blank"
                                            href="https://goo.gl/maps/sZEoKMZhsTGT9epi7"
                                            rel="nofollow"
                                          >
                                            <i class="fa fa-location-arrow"></i>
                                            <span class="guideWay">
                                              Chỉ đường
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          class=""
                                          data-tinh="ho-chi-minh"
                                          data-quan="tp-thu-duc"
                                        >
                                          <a
                                            href="https://goo.gl/maps/QknsHNDFZVvoUTzE7"
                                            target="_blank"
                                            class="iframe-map"
                                            rel="nofollow"
                                          >
                                            <b>
                                              Hồ Chí Minh - HỒ CHÍ MINH - TÔ
                                              VĨNH DIỆN
                                            </b>
                                            <span>
                                              54 Tô Vĩnh Diện, Phường Linh
                                              Chiểu, TP.Thủ Đức, TP.HCM.
                                            </span>
                                            <span>
                                              <i class="fa fa-phone"></i>
                                              02871006789
                                            </span>
                                            <span>
                                              Thời gian hoạt động: 8:30 - 22:00
                                            </span>
                                          </a>
                                          <a
                                            class="infoLocation"
                                            target="_blank"
                                            href="https://goo.gl/maps/QknsHNDFZVvoUTzE7"
                                            rel="nofollow"
                                          >
                                            <i class="fa fa-location-arrow"></i>
                                            <span class="guideWay">
                                              Chỉ đường
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          class=""
                                          data-tinh="binh-duong"
                                          data-quan="tp-thu-dau-mot"
                                        >
                                          <a
                                            href="https://goo.gl/maps/YC6AUHUT6neUQKrq9"
                                            target="_blank"
                                            class="iframe-map"
                                            rel="nofollow"
                                          >
                                            <b>
                                              Bình Dương - BÌNH DƯƠNG - YERSIN
                                            </b>
                                            <span>
                                              231 Yersin, Phường Phú Cường,
                                              TP.Thủ Dầu Một, Tỉnh Bình Dương.
                                            </span>
                                            <span>
                                              <i class="fa fa-phone"></i>
                                              02871006789
                                            </span>
                                            <span>
                                              Thời gian hoạt động: 8:30 - 22:00
                                            </span>
                                          </a>
                                          <a
                                            class="infoLocation"
                                            target="_blank"
                                            href="https://goo.gl/maps/YC6AUHUT6neUQKrq9"
                                            rel="nofollow"
                                          >
                                            <i class="fa fa-location-arrow"></i>
                                            <span class="guideWay">
                                              Chỉ đường
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          class=""
                                          data-tinh="ha-noi"
                                          data-quan="quan-hai-ba-trung"
                                        >
                                          <a
                                            href="https://goo.gl/maps/TMp1qzA886FwhNAaA"
                                            target="_blank"
                                            class="iframe-map"
                                            rel="nofollow"
                                          >
                                            <b>Hà Nội - HÀ NỘI - LÊ ĐẠI HÀNH</b>
                                            <span>
                                              Số 26 Phố Lê Đại Hành, Phường Lê
                                              Đại Hành, Quận Hai Bà Trưng, TP.Hà
                                              Nội
                                            </span>
                                            <span>
                                              <i class="fa fa-phone"></i>
                                              02871006789
                                            </span>
                                            <span>
                                              Thời gian hoạt động: 8:30 - 22:00
                                            </span>
                                          </a>
                                          <a
                                            class="infoLocation"
                                            target="_blank"
                                            href="https://goo.gl/maps/TMp1qzA886FwhNAaA"
                                            rel="nofollow"
                                          >
                                            <i class="fa fa-location-arrow"></i>
                                            <span class="guideWay">
                                              Chỉ đường
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          class=""
                                          data-tinh="ha-noi"
                                          data-quan="quan-dong-da"
                                        >
                                          <a
                                            href="https://goo.gl/maps/gSLv5JztjApRXngi7"
                                            target="_blank"
                                            class="iframe-map"
                                            rel="nofollow"
                                          >
                                            <b>
                                              Hà Nội - HÀ NỘI - TÔN ĐỨC THẮNG
                                            </b>
                                            <span>
                                              Số 176 Phố Tôn Đức Thắng, Phường
                                              Hàng Bột, Quận Đống Đa, TP.Hà Nội
                                            </span>
                                            <span>
                                              <i class="fa fa-phone"></i>
                                              02871006789
                                            </span>
                                            <span>
                                              Thời gian hoạt động: 8:30 - 22:00
                                            </span>
                                          </a>
                                          <a
                                            class="infoLocation"
                                            target="_blank"
                                            href="https://goo.gl/maps/gSLv5JztjApRXngi7"
                                            rel="nofollow"
                                          >
                                            <i class="fa fa-location-arrow"></i>
                                            <span class="guideWay">
                                              Chỉ đường
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          class=""
                                          data-tinh="ho-chi-minh"
                                          data-quan="tp-thu-duc"
                                        >
                                          <a
                                            href="https://maps.app.goo.gl/ed2usv6u8wgmZYqs7"
                                            target="_blank"
                                            class="iframe-map"
                                            rel="nofollow"
                                          >
                                            <b>
                                              Hồ Chí Minh - HỒ CHÍ MINH - ĐỖ
                                              XUÂN HỢP
                                            </b>
                                            <span>
                                              159 Đỗ Xuân Hợp, Phường Phước Long
                                              B, TP.Thủ Đức, TP.HCM
                                            </span>
                                            <span>
                                              <i class="fa fa-phone"></i>
                                              02871006789
                                            </span>
                                            <span>
                                              Thời gian hoạt động: 8:30 - 22:00
                                            </span>
                                          </a>
                                          <a
                                            class="infoLocation"
                                            target="_blank"
                                            href="https://maps.app.goo.gl/ed2usv6u8wgmZYqs7"
                                            rel="nofollow"
                                          >
                                            <i class="fa fa-location-arrow"></i>
                                            <span class="guideWay">
                                              Chỉ đường
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          class=""
                                          data-tinh="ho-chi-minh"
                                          data-quan="quan-tan-phu"
                                        >
                                          <a
                                            href="https://maps.app.goo.gl/82mnRrtHwmLvG1cEA"
                                            target="_blank"
                                            class="iframe-map"
                                            rel="nofollow"
                                          >
                                            <b>
                                              Hồ Chí Minh - HỒ CHÍ MINH - HÒA
                                              BÌNH
                                            </b>
                                            <span>
                                              205 Hòa Bình, Phường Hiệp Tân,
                                              Quận Tân Phú, TP.HCM
                                            </span>
                                            <span>
                                              <i class="fa fa-phone"></i>
                                              02871006789
                                            </span>
                                            <span>
                                              Thời gian hoạt động: 8:30 - 22:00
                                            </span>
                                          </a>
                                          <a
                                            class="infoLocation"
                                            target="_blank"
                                            href="https://maps.app.goo.gl/82mnRrtHwmLvG1cEA"
                                            rel="nofollow"
                                          >
                                            <i class="fa fa-location-arrow"></i>
                                            <span class="guideWay">
                                              Chỉ đường
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          class=""
                                          data-tinh="ho-chi-minh"
                                          data-quan="quan-8"
                                        >
                                          <a
                                            href="https://maps.app.goo.gl/mzZ5wJVqMoriDNZ97"
                                            target="_blank"
                                            class="iframe-map"
                                            rel="nofollow"
                                          >
                                            <b>
                                              Hồ Chí Minh - HỒ CHÍ MINH - LIÊN
                                              TỈNH 5
                                            </b>
                                            <span>
                                              407a Liên Tỉnh 5, Phường 5, Quận
                                              8, TP.HCM
                                            </span>
                                            <span>
                                              <i class="fa fa-phone"></i>
                                              02871006789
                                            </span>
                                            <span>
                                              Thời gian hoạt động: 8:30 - 22:00
                                            </span>
                                          </a>
                                          <a
                                            class="infoLocation"
                                            target="_blank"
                                            href="https://maps.app.goo.gl/mzZ5wJVqMoriDNZ97"
                                            rel="nofollow"
                                          >
                                            <i class="fa fa-location-arrow"></i>
                                            <span class="guideWay">
                                              Chỉ đường
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          class=""
                                          data-tinh="tien-giang"
                                          data-quan="my-tho"
                                        >
                                          <a
                                            href="https://maps.app.goo.gl/sPC4SLHqJaoSZWdCA"
                                            target="_blank"
                                            class="iframe-map"
                                            rel="nofollow"
                                          >
                                            <b>
                                              Tiền Giang - TIỀN GIANG - ẤP BẮC
                                            </b>
                                            <span>
                                              347 Đường Ấp Bắc, P. 5, TP.Mỹ Tho,
                                              T.Tiền Giang
                                            </span>
                                            <span>
                                              <i class="fa fa-phone"></i>
                                              02871006789
                                            </span>
                                            <span>
                                              Thời gian hoạt động: 8:30 - 22:00
                                            </span>
                                          </a>
                                          <a
                                            class="infoLocation"
                                            target="_blank"
                                            href="https://maps.app.goo.gl/sPC4SLHqJaoSZWdCA"
                                            rel="nofollow"
                                          >
                                            <i class="fa fa-location-arrow"></i>
                                            <span class="guideWay">
                                              Chỉ đường
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          class=""
                                          data-tinh="can-tho"
                                          data-quan="quan-ninh-kieu"
                                        >
                                          <a
                                            href=" https://maps.app.goo.gl/ZtXiVZPpnakHTH288"
                                            target="_blank"
                                            class="iframe-map"
                                            rel="nofollow"
                                          >
                                            <b>Cần Thơ - CẦN THƠ - MẬU THÂN</b>
                                            <span>
                                              15Đ Mậu Thân, Phường Xuân Khánh,
                                              Quận Ninh Kiều, TP.Cần Thơ
                                            </span>
                                            <span>
                                              <i class="fa fa-phone"></i>
                                              02871006789
                                            </span>
                                            <span>
                                              Thời gian hoạt động: 8:30 - 22:00
                                            </span>
                                          </a>
                                          <a
                                            class="infoLocation"
                                            target="_blank"
                                            href=" https://maps.app.goo.gl/ZtXiVZPpnakHTH288"
                                            rel="nofollow"
                                          >
                                            <i class="fa fa-location-arrow"></i>
                                            <span class="guideWay">
                                              Chỉ đường
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          class=""
                                          data-tinh="ba-ria-vung-tau"
                                          data-quan="vung-tau"
                                        >
                                          <a
                                            href="https://maps.app.goo.gl/jALvr6LJyBGQhxqUA"
                                            target="_blank"
                                            class="iframe-map"
                                            rel="nofollow"
                                          >
                                            <b>
                                              Bà Rịa - Vũng Tàu - VŨNG TÀU - BA
                                              CU
                                            </b>
                                            <span>
                                              206 Ba Cu, Phường 3, TP.Vũng Tàu,
                                              Bà Rịa - Vũng Tàu
                                            </span>
                                            <span>
                                              <i class="fa fa-phone"></i>
                                              02871006789
                                            </span>
                                            <span>
                                              Thời gian hoạt động: 8:30 - 22:00
                                            </span>
                                          </a>
                                          <a
                                            class="infoLocation"
                                            target="_blank"
                                            href="https://maps.app.goo.gl/jALvr6LJyBGQhxqUA"
                                            rel="nofollow"
                                          >
                                            <i class="fa fa-location-arrow"></i>
                                            <span class="guideWay">
                                              Chỉ đường
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          class=""
                                          data-tinh="ho-chi-minh"
                                          data-quan="quan-go-vap"
                                        >
                                          <a
                                            href="https://goo.gl/maps/CgbaSPV8U9GG8AQ96"
                                            target="_blank"
                                            class="iframe-map"
                                            rel="nofollow"
                                          >
                                            <b>
                                              Hồ Chí Minh - HỒ CHÍ MINH - LÊ VĂN
                                              THỌ
                                            </b>
                                            <span>
                                              94 Lê Văn Thọ, Phường 11, Quận Gò
                                              Vấp, TP.HCM
                                            </span>
                                            <span>
                                              <i class="fa fa-phone"></i>
                                              02871006789
                                            </span>
                                            <span>
                                              Thời gian hoạt động: 8:30 - 22:00
                                            </span>
                                          </a>
                                          <a
                                            class="infoLocation"
                                            target="_blank"
                                            href="https://goo.gl/maps/CgbaSPV8U9GG8AQ96"
                                            rel="nofollow"
                                          >
                                            <i class="fa fa-location-arrow"></i>
                                            <span class="guideWay">
                                              Chỉ đường
                                            </span>
                                          </a>
                                        </li>
                                      </ul>
                                      <p class="no-store hidden">
                                        Hiện chưa có cửa hàng
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
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
                            href="javascript:void(0)"
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

                          <div class="header-action_dropdown">
                            <div class="header-dropdown_content">
                              <div class="overflow-hidden relative-position">
                                <div class="account_header text-center">
                                  <div class="account_title  h2 heading">
                                    Giỏ hàng
                                  </div>
                                </div>
                                <div class="cart-content" id="cart-mini-wanda">
                                  <div class="cart-view clearfix">
                                    <div class="cart-scroll">
                                      <table id="cart-view">
                                        <tbody>
                                          <tr>
                                            <td
                                              class="mini_cart_header text-center"
                                              //style="padding-right:0;"
                                            >
                                              <img
                                                src="https://file.hstatic.net/200000525917/file/no-cart_c1e41f3edf5c45b18eb6c64306d881c8_small.png"
                                                width="60"
                                                height="60"
                                              />
                                              <p>Hiện chưa có sản phẩm</p>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                    <span class="line"></span>
                                    <p class="content_title">
                                      Bạn được giảm đến 10% tối đa 10K, mua thêm
                                      699,000₫ nữa!
                                    </p>
                                    <div id="total_sale">
                                      <div
                                        class="flashsale___percent"
                                        //style="width: 0%;"
                                      ></div>
                                    </div>
                                    <table class="table-total">
                                      <tbody>
                                        <tr class="line-c">
                                          <td class="text-left title-total">
                                            Tạm tính:
                                          </td>
                                          <td
                                            class="text-right"
                                            id="final-view-cart"
                                          >
                                            0₫
                                          </td>
                                        </tr>
                                        <tr class="line-c">
                                          <td class="text-left title-total">
                                            Giảm giá:
                                          </td>
                                          <td
                                            class="text-right"
                                            id="sale-view-cart"
                                          >
                                            0₫
                                          </td>
                                        </tr>
                                        <tr>
                                          <td class="text-left title-total">
                                            Tổng tiền:
                                          </td>
                                          <td
                                            class="text-right"
                                            id="total-view-cart"
                                            data-value="0₫"
                                          >
                                            0₫
                                          </td>
                                        </tr>

                                        <tr></tr>

                                        <tr>
                                          <td>
                                            <a
                                              href="/cart"
                                              class="wanda-cart-url btn"
                                            >
                                              Chỉnh sửa giỏ hàng
                                            </a>
                                          </td>
                                          <td>
                                            <a
                                              href="/checkout"
                                              class="wanda-checkout-url btn btn_thanhtoan"
                                            >
                                              Thanh toán
                                            </a>
                                          </td>
                                        </tr>
                                        <tr></tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="header-bottom">
            <div class="container">
              <div class="d-flex d-flex-center">
                <nav class="hidden-sm hidden-xs site-nav-menu">
                  <ul class="d-flex js-center ">
                    <li class="    ">
                      <a href="/collections/san-pham-moi">
                        <span>🔎 HÀNG MỚI</span>
                      </a>

                      <span class="header_new">New</span>
                    </li>

                    <li class="    ">
                      <a href="/collections/tat-ca-san-pham">
                        <span>SẢN PHẨM</span>
                        <i class="fa-chevron-down" aria-hidden="true"></i>
                      </a>

                      <div class="sub_top_menu">
                        <ul class="sub_menu_dropdown">
                          <li class="">
                            <a href="/collections/all" title="TẤT CẢ SẢN PHẨM">
                              TẤT CẢ SẢN PHẨM
                            </a>
                          </li>

                          <li class="">
                            <a
                              href="/collections/hang-ban-chay-best-seller/"
                              title="🔥 HÀNG BÁN CHẠY"
                            >
                              🔥 HÀNG BÁN CHẠY
                            </a>
                          </li>

                          <li class="">
                            <a href="/collections/ao" title="ÁO">
                              ÁO
                              <i
                                class="fa fa-chevron-right"
                                aria-hidden="true"
                              ></i>
                            </a>
                            <ul class="sub_menu_dropdown lv3">
                              <li class="">
                                <a href="/collections/ao-thun" title="ÁO THUN">
                                  ÁO THUN
                                </a>
                              </li>

                              <li class="">
                                <a href="/collections/ao-polos" title="ÁO POLO">
                                  ÁO POLO
                                </a>
                              </li>

                              <li class="">
                                <a href="/collections/ao-somi" title="ÁO SƠ MI">
                                  ÁO SƠ MI
                                </a>
                              </li>

                              <li class="">
                                <a
                                  href="/collections/ao-khoac"
                                  title="ÁO KHOÁC"
                                >
                                  ÁO KHOÁC
                                </a>
                              </li>

                              <li class="">
                                <a
                                  href="/collections/ao-ni-sweater"
                                  title="ÁO NỈ - SWEATER"
                                >
                                  ÁO NỈ - SWEATER
                                </a>
                              </li>

                              <li class="">
                                <a href="/collections/ba-lo" title="ÁO BA LỖ">
                                  ÁO BA LỖ
                                </a>
                              </li>

                              <li class="">
                                <a href="/collections/hoodie" title="ÁO HOODIE">
                                  ÁO HOODIE
                                </a>
                              </li>

                              <li class="">
                                <a href="/collections/ao-len" title="ÁO LEN">
                                  ÁO LEN
                                </a>
                              </li>
                            </ul>
                          </li>

                          <li class="">
                            <a href="/collections/quan" title="QUẦN">
                              QUẦN
                              <i
                                class="fa fa-chevron-right"
                                aria-hidden="true"
                              ></i>
                            </a>
                            <ul class="sub_menu_dropdown lv3">
                              <li class="">
                                <a
                                  href="/collections/quan-jeans"
                                  title="QUẦN JEAN"
                                >
                                  QUẦN JEAN
                                </a>
                              </li>

                              <li class="">
                                <a
                                  href="/collections/quan-short"
                                  title="QUẦN SHORT"
                                >
                                  QUẦN SHORT
                                </a>
                              </li>

                              <li class="">
                                <a
                                  href="/collections/quan-tay"
                                  title="QUẦN TÂY"
                                >
                                  QUẦN TÂY
                                </a>
                              </li>

                              <li class="">
                                <a
                                  href="/collections/quan-joggers"
                                  title="QUẦN JOGGER - QUẦN DÀI"
                                >
                                  QUẦN JOGGER - QUẦN DÀI
                                </a>
                              </li>

                              <li class="">
                                <a
                                  href="/collections/quan-kaki"
                                  title="QUẦN KAKI"
                                >
                                  QUẦN KAKI
                                </a>
                              </li>
                            </ul>
                          </li>

                          <li class="">
                            <a
                              href="/collections/tracksuit"
                              title="SET QUẦN ÁO"
                            >
                              SET QUẦN ÁO
                            </a>
                          </li>

                          <li class="">
                            <a
                              href="/collections/quan-boxer"
                              title="ĐỒ LÓT - BOXER"
                            >
                              ĐỒ LÓT - BOXER
                            </a>
                          </li>

                          <li class="">
                            <a
                              href="/collections/nhom-phu-kien-khac"
                              title="PHỤ KIỆN"
                            >
                              PHỤ KIỆN
                              <i
                                class="fa fa-chevron-right"
                                aria-hidden="true"
                              ></i>
                            </a>
                            <ul class="sub_menu_dropdown lv3">
                              <li class="">
                                <a href="/collections/non" title="NÓN">
                                  NÓN
                                </a>
                              </li>

                              <li class="">
                                <a
                                  href="/collections/mat-kinh"
                                  title="MẮT KÍNH"
                                >
                                  MẮT KÍNH
                                </a>
                              </li>

                              <li class="">
                                <a
                                  href="/collections/that-lung"
                                  title="THẮT LƯNG"
                                >
                                  THẮT LƯNG
                                </a>
                              </li>

                              <li class="">
                                <a
                                  href="/collections/balo-tui-xach"
                                  title="BALO - TÚI XÁCH"
                                >
                                  BALO - TÚI XÁCH
                                </a>
                              </li>

                              <li class="">
                                <a href="/collections/vi" title="VÍ">
                                  VÍ
                                </a>
                              </li>

                              <li class="">
                                <a
                                  href="/collections/giay-dep"
                                  title="GIÀY DÉP"
                                >
                                  GIÀY DÉP
                                </a>
                              </li>

                              <li class="">
                                <a href="/collections/vo" title="VỚ">
                                  VỚ
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li class="    ">
                      <a href="/collections/ao">
                        <span>ÁO NAM</span>
                        <i class="fa-chevron-down" aria-hidden="true"></i>
                      </a>

                      <div class="sub_top_menu">
                        <ul class="sub_menu_dropdown">
                          <li class="">
                            <a href="/collections/ao-thun" title="ÁO THUN">
                              ÁO THUN
                            </a>
                          </li>

                          <li class="">
                            <a href="/collections/ao-polos" title="ÁO POLO">
                              ÁO POLO
                            </a>
                          </li>

                          <li class="">
                            <a href="/collections/ao-somi" title="ÁO SƠ MI">
                              ÁO SƠ MI
                            </a>
                          </li>

                          <li class="">
                            <a href="/collections/ao-khoac" title="ÁO KHOÁC">
                              ÁO KHOÁC
                            </a>
                          </li>

                          <li class="">
                            <a href="/collections/ba-lo" title="ÁO BA LỖ">
                              ÁO BA LỖ
                            </a>
                          </li>

                          <li class="">
                            <a
                              href="/collections/tracksuit"
                              title="SET QUẦN ÁO"
                            >
                              SET QUẦN ÁO
                            </a>
                          </li>

                          <li class="">
                            <a
                              href="/collections/ao-ni-sweater"
                              title="ÁO NỈ - SWEATSHIRT"
                            >
                              ÁO NỈ - SWEATSHIRT
                            </a>
                          </li>

                          <li class="">
                            <a href="/collections/hoodie" title="ÁO HOODIE">
                              ÁO HOODIE
                            </a>
                          </li>

                          <li class="">
                            <a href="/collections/ao-len" title="ÁO LEN">
                              ÁO LEN
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li class="    ">
                      <a href="/collections/quan">
                        <span>QUẦN NAM</span>
                        <i class="fa-chevron-down" aria-hidden="true"></i>
                      </a>

                      <div class="sub_top_menu">
                        <ul class="sub_menu_dropdown">
                          <li class="">
                            <a href="/collections/quan-jeans" title="QUẦN JEAN">
                              QUẦN JEAN
                            </a>
                          </li>

                          <li class="">
                            <a
                              href="/collections/quan-short"
                              title="QUẦN SHORT"
                            >
                              QUẦN SHORT
                            </a>
                          </li>

                          <li class="">
                            <a href="/collections/quan-tay" title="QUẦN TÂY">
                              QUẦN TÂY
                            </a>
                          </li>

                          <li class="">
                            <a
                              href="/collections/quan-joggers"
                              title="QUẦN JOGGER - QUẦN DÀI"
                            >
                              QUẦN JOGGER - QUẦN DÀI
                            </a>
                          </li>

                          <li class="">
                            <a href="/collections/quan-kaki" title="QUẦN KAKI">
                              QUẦN KAKI
                            </a>
                          </li>

                          <li class="">
                            <a
                              href="/collections/tracksuit"
                              title="SET QUẦN ÁO"
                            >
                              SET QUẦN ÁO
                            </a>
                          </li>

                          <li class="">
                            <a
                              href="/collections/quan-boxer"
                              title="QUẨN BOXER"
                            >
                              QUẨN BOXER
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li class="    ">
                      <a href="/collections/nhom-phu-kien-khac">
                        <span>PHỤ KIỆN</span>
                        <i class="fa-chevron-down" aria-hidden="true"></i>
                      </a>

                      <div class="sub_top_menu">
                        <ul class="sub_menu_dropdown">
                          <li class="">
                            <a href="/collections/non" title="NÓN">
                              NÓN
                            </a>
                          </li>

                          <li class="">
                            <a href="/collections/that-lung" title="THẮT LƯNG">
                              THẮT LƯNG
                            </a>
                          </li>

                          <li class="">
                            <a
                              href="/collections/balo-tui-xach"
                              title="BALO - TÚI XÁCH"
                            >
                              BALO - TÚI XÁCH
                            </a>
                          </li>

                          <li class="">
                            <a href="/collections/vi" title="VÍ">
                              VÍ
                            </a>
                          </li>

                          <li class="">
                            <a href="/collections/giay-dep" title="GIÀY - DÉP">
                              GIÀY - DÉP
                            </a>
                          </li>

                          <li class="">
                            <a href="/collections/mat-kinh" title="MẮT KÍNH">
                              MẮT KÍNH
                            </a>
                          </li>

                          <li class="">
                            <a href="/collections/vo" title="VỚ">
                              VỚ
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li class="   highlight ">
                      <a href="/collections/outlet">
                        <span>GIÁ MỚI</span>
                      </a>
                    </li>

                    <li class="    ">
                      <a href="/collections/quan-jeans">
                        <span>JEANS</span>
                        <i class="fa-chevron-down" aria-hidden="true"></i>
                      </a>

                      <div class="sub_top_menu">
                        <ul class="sub_menu_dropdown">
                          <li class="">
                            <a
                              href="/collections/quan-jean-procool"
                              title="ProCOOL™"
                            >
                              ProCOOL™
                            </a>
                          </li>

                          <li class="">
                            <a
                              href="/collections/smart-jeans"
                              title="SMART JEANS™"
                            >
                              SMART JEANS™
                            </a>
                          </li>

                          <li class="">
                            <a
                              href="/collections/techurban-jeans-icon105-lightweight"
                              title="ICON105 Lightweight™"
                            >
                              ICON105 Lightweight™
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li class="    ">
                      <a href="/blogs/all">
                        <span>TIN THỜI TRANG</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }
}
