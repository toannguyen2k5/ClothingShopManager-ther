import React, { Component } from "react";
import ShopingCartItem from "./ShopingCartItem";
import ChooseAddress from "./ChooseAddress";
import ChooseUserDiscountCode from "./ChooseUserDiscountCode";
import "./plugin-style.css";
import "./render-style-other.scss.css";
import "./render-style.css";
import "./style-cart.scss.css";
import "./style-page.scss.css";
import "./style-smb.css";
import "./styles-new.scss.css";
class ShopingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <nav id="menu-mobile" class="hidden-md">
          <div class="mn-mb-header text-center">
            <a href="/">
              <img
                src="https://file.hstatic.net/1000253775/file/logo_no_bf-05_3e6797f31bda4002a22464d6f2787316.png"
                alt="160STORE"
                style={{ width: "170px", height: "50px" }}
              />
            </a>
          </div>
          <button
            id="wanda-close-handle"
            class="wanda-close-handle"
            aria-label="Đóng"
            title="Đóng"
          >
            <span class="mb-menu-cls" aria-hidden="true">
              <span class="bar animate"></span>
            </span>
            Đóng
          </button>
          <ul class="mb-menu">
            <li class="  ">
              <a href="/collections/san-pham-moi"> 🔎 HÀNG MỚI </a>

              <span class="header_new">New</span>
            </li>
            <li class="  ">
              <a href="/collections/tat-ca-san-pham"> SẢN PHẨM </a>

              <button class="plus-menu lv-1-open cl-open">Open</button>
              <ul class="menu-mb-lv2 menu-childrent">
                <li class="">
                  <a href="/collections/all" title="TẤT CẢ SẢN PHẨM">
                    TẤT CẢ SẢN PHẨM
                  </a>
                </li>
                <li class="">
                  <a
                    href="https://www.160store.com/collections/hang-ban-chay-best-seller/"
                    title="🔥 HÀNG BÁN CHẠY"
                  >
                    🔥 HÀNG BÁN CHẠY
                  </a>
                </li>
                <li class="">
                  <a href="/collections/ao" title="ÁO">
                    {" "}
                    ÁO{" "}
                  </a>
                  <button class="plus-menu lv-2-open cl-open">Open</button>
                  <ul class="menu-mb-lv3 menu-childrent">
                    <li>
                      <a href="/collections/ao-thun">ÁO THUN</a>
                    </li>
                    <li>
                      <a href="/collections/ao-polos">ÁO POLO</a>
                    </li>
                    <li>
                      <a href="/collections/ao-somi">ÁO SƠ MI</a>
                    </li>
                    <li>
                      <a href="/collections/ao-khoac">ÁO KHOÁC</a>
                    </li>
                    <li>
                      <a href="/collections/ao-ni-sweater">ÁO NỈ - SWEATER</a>
                    </li>
                    <li>
                      <a href="/collections/ba-lo">ÁO BA LỖ</a>
                    </li>
                    <li>
                      <a href="/collections/hoodie">ÁO HOODIE</a>
                    </li>
                    <li>
                      <a href="/collections/ao-len">ÁO LEN</a>
                    </li>
                  </ul>
                </li>
                <li class="">
                  <a href="/collections/quan" title="QUẦN">
                    {" "}
                    QUẦN{" "}
                  </a>
                  <button class="plus-menu lv-2-open cl-open">Open</button>
                  <ul class="menu-mb-lv3 menu-childrent">
                    <li>
                      <a href="/collections/quan-jeans">QUẦN JEAN</a>
                    </li>
                    <li>
                      <a href="/collections/quan-short">QUẦN SHORT</a>
                    </li>
                    <li>
                      <a href="/collections/quan-tay">QUẦN TÂY</a>
                    </li>
                    <li>
                      <a href="/collections/quan-joggers">
                        QUẦN JOGGER - QUẦN DÀI
                      </a>
                    </li>
                    <li>
                      <a href="/collections/quan-kaki">QUẦN KAKI</a>
                    </li>
                  </ul>
                </li>
                <li class="">
                  <a href="/collections/tracksuit" title="SET QUẦN ÁO">
                    SET QUẦN ÁO
                  </a>
                </li>
                <li class="">
                  <a href="/collections/quan-boxer" title="ĐỒ LÓT - BOXER">
                    ĐỒ LÓT - BOXER
                  </a>
                </li>
                <li class="">
                  <a href="/collections/nhom-phu-kien-khac" title="PHỤ KIỆN">
                    PHỤ KIỆN
                  </a>
                  <button class="plus-menu lv-2-open cl-open">Open</button>
                  <ul class="menu-mb-lv3 menu-childrent">
                    <li>
                      <a href="/collections/non">NÓN</a>
                    </li>
                    <li>
                      <a href="/collections/mat-kinh">MẮT KÍNH</a>
                    </li>
                    <li>
                      <a href="/collections/that-lung">THẮT LƯNG</a>
                    </li>
                    <li>
                      <a href="/collections/balo-tui-xach">BALO - TÚI XÁCH</a>
                    </li>
                    <li>
                      <a href="/collections/vi">VÍ</a>
                    </li>
                    <li>
                      <a href="/collections/giay-dep">GIÀY DÉP</a>
                    </li>
                    <li>
                      <a href="/collections/vo">VỚ</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li class="  ">
              <a href="/collections/ao"> ÁO NAM </a>

              <button class="plus-menu lv-1-open cl-open">Open</button>
              <ul class="menu-mb-lv2 menu-childrent">
                <li class="">
                  <a href="/collections/ao-thun" title="ÁO THUN">
                    {" "}
                    ÁO THUN{" "}
                  </a>
                </li>
                <li class="">
                  <a href="/collections/ao-polos" title="ÁO POLO">
                    {" "}
                    ÁO POLO{" "}
                  </a>
                </li>
                <li class="">
                  <a href="/collections/ao-somi" title="ÁO SƠ MI">
                    {" "}
                    ÁO SƠ MI{" "}
                  </a>
                </li>
                <li class="">
                  <a href="/collections/ao-khoac" title="ÁO KHOÁC">
                    {" "}
                    ÁO KHOÁC{" "}
                  </a>
                </li>
                <li class="">
                  <a href="/collections/ba-lo" title="ÁO BA LỖ">
                    {" "}
                    ÁO BA LỖ{" "}
                  </a>
                </li>
                <li class="">
                  <a href="/collections/tracksuit" title="SET QUẦN ÁO">
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
                    {" "}
                    ÁO HOODIE{" "}
                  </a>
                </li>
                <li class="">
                  <a href="/collections/ao-len" title="ÁO LEN">
                    {" "}
                    ÁO LEN{" "}
                  </a>
                </li>
              </ul>
            </li>
            <li class="  ">
              <a href="/collections/quan"> QUẦN NAM </a>

              <button class="plus-menu lv-1-open cl-open">Open</button>
              <ul class="menu-mb-lv2 menu-childrent">
                <li class="">
                  <a href="/collections/quan-jeans" title="QUẦN JEAN">
                    QUẦN JEAN
                  </a>
                </li>
                <li class="">
                  <a href="/collections/quan-short" title="QUẦN SHORT">
                    QUẦN SHORT
                  </a>
                </li>
                <li class="">
                  <a href="/collections/quan-tay" title="QUẦN TÂY">
                    {" "}
                    QUẦN TÂY{" "}
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
                    {" "}
                    QUẦN KAKI{" "}
                  </a>
                </li>
                <li class="">
                  <a href="/collections/tracksuit" title="SET QUẦN ÁO">
                    SET QUẦN ÁO
                  </a>
                </li>
                <li class="">
                  <a href="/collections/quan-boxer" title="QUẨN BOXER">
                    QUẨN BOXER
                  </a>
                </li>
              </ul>
            </li>
            <li class="  ">
              <a href="/collections/nhom-phu-kien-khac"> PHỤ KIỆN </a>

              <button class="plus-menu lv-1-open cl-open">Open</button>
              <ul class="menu-mb-lv2 menu-childrent">
                <li class="">
                  <a href="/collections/non" title="NÓN">
                    {" "}
                    NÓN{" "}
                  </a>
                </li>
                <li class="">
                  <a href="/collections/that-lung" title="THẮT LƯNG">
                    {" "}
                    THẮT LƯNG{" "}
                  </a>
                </li>
                <li class="">
                  <a href="/collections/balo-tui-xach" title="BALO - TÚI XÁCH">
                    BALO - TÚI XÁCH
                  </a>
                </li>
                <li class="">
                  <a href="/collections/vi" title="VÍ">
                    {" "}
                    VÍ{" "}
                  </a>
                </li>
                <li class="">
                  <a href="/collections/giay-dep" title="GIÀY - DÉP">
                    GIÀY - DÉP
                  </a>
                </li>
                <li class="">
                  <a href="/collections/mat-kinh" title="MẮT KÍNH">
                    {" "}
                    MẮT KÍNH{" "}
                  </a>
                </li>
                <li class="">
                  <a href="/collections/vo" title="VỚ">
                    {" "}
                    VỚ{" "}
                  </a>
                </li>
              </ul>
            </li>
            <li class="highlight">
              <a href="/collections/outlet"> SALE 5-5 </a>
            </li>
            <li class="  ">
              <a href="/collections/quan-jeans"> JEANS </a>

              <button class="plus-menu lv-1-open cl-open">Open</button>
              <ul class="menu-mb-lv2 menu-childrent">
                <li class="">
                  <a href="/collections/quan-jean-procool" title="ProCOOL™">
                    ProCOOL™
                  </a>
                </li>
                <li class="">
                  <a href="/collections/smart-jeans" title="SMART JEANS™">
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
            </li>
            <li class="  ">
              <a href="https://www.160store.com/blogs/all"> TIN THỜI TRANG </a>
            </li>
          </ul>
        </nav>
        <iframe
          allow="join-ad-interest-group"
          data-tagging-id="AW-758684278"
          data-load-time="1746284762619"
          height="0"
          width="0"
          src="https://td.doubleclick.net/td/rul/758684278?random=1746284762606&amp;cv=11&amp;fst=1746284762606&amp;fmt=3&amp;bg=ffffff&amp;guid=ON&amp;async=1&amp;gtm=45je54u1h1v9106013292za200&amp;gcd=13l3l3l3l1l1&amp;dma=0&amp;tag_exp=101509156~103101750~103101752~103116025~103200001~103233424~103251618~103251620&amp;u_w=1920&amp;u_h=1080&amp;url=https%3A%2F%2F160store.com%2Fcart&amp;ref=https%3A%2F%2F160store.com%2Fproducts%2Fao-khoac-icondenim-puffer-coat-with-removable-hood-and-zipper&amp;hn=www.googleadservices.com&amp;frm=0&amp;tiba=Gi%E1%BB%8F%20h%C3%A0ng%20c%E1%BB%A7a%20b%E1%BA%A1n%20-%20160STORE&amp;npa=0&amp;pscdl=noapi&amp;auid=1258621391.1745720641&amp;uaa=x86&amp;uab=64&amp;uafvl=Chromium%3B136.0.7103.49%7CMicrosoft%2520Edge%3B136.0.3240.50%7CNot.A%252FBrand%3B99.0.0.0&amp;uamb=0&amp;uam=&amp;uap=Windows&amp;uapv=10.0.0&amp;uaw=0&amp;fledge=1&amp;data=event%3Dgtag.config"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
        <iframe
          allow="join-ad-interest-group"
          data-tagging-id="AW-16520474317"
          data-load-time="1746284762670"
          height="0"
          width="0"
          src="https://td.doubleclick.net/td/rul/16520474317?random=1746284762656&amp;cv=11&amp;fst=1746284762656&amp;fmt=3&amp;bg=ffffff&amp;guid=ON&amp;async=1&amp;gtm=45be54u1v9193905488za200&amp;gcd=13l3l3l3l1l1&amp;dma=0&amp;tag_exp=101509157~102015666~103101747~103101749~103116025~103200001~103233427~103251618~103251620&amp;u_w=1920&amp;u_h=1080&amp;url=https%3A%2F%2F160store.com%2Fcart&amp;ref=https%3A%2F%2F160store.com%2Fproducts%2Fao-khoac-icondenim-puffer-coat-with-removable-hood-and-zipper&amp;hn=www.googleadservices.com&amp;frm=0&amp;tiba=Gi%E1%BB%8F%20h%C3%A0ng%20c%E1%BB%A7a%20b%E1%BA%A1n%20-%20160STORE&amp;npa=0&amp;pscdl=noapi&amp;auid=1258621391.1745720641&amp;uaa=x86&amp;uab=64&amp;uafvl=Chromium%3B136.0.7103.49%7CMicrosoft%2520Edge%3B136.0.3240.50%7CNot.A%252FBrand%3B99.0.0.0&amp;uamb=0&amp;uam=&amp;uap=Windows&amp;uapv=10.0.0&amp;uaw=0&amp;fledge=1&amp;data=event%3Dgtag.config"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
        <main>
          <div class="breadcrumb-shop">
            <div class="container">
              <ol
                class="breadcrumb breadcrumb-arrows"
                itemscope=""
                itemtype="http://schema.org/BreadcrumbList"
              >
                <li
                  itemprop="itemListElement"
                  itemscope=""
                  itemtype="http://schema.org/ListItem"
                >
                  <a href="/" target="_self" itemprop="item">
                    <span itemprop="name">Trang chủ</span>
                  </a>
                  <meta itemprop="position" content="1" />
                </li>

                <li
                  class="active"
                  itemprop="itemListElement"
                  itemscope=""
                  itemtype="http://schema.org/ListItem"
                >
                  <span itemprop="item" content="https://160store.com/cart">
                    <span itemprop="name">Giỏ hàng</span>
                  </span>
                  <meta itemprop="position" content="2" />
                </li>
              </ol>
            </div>
          </div>

          <section id="cart-template" class="cart-page">
            <div class="container">
              <form action="/cart" method="post" enctype="multipart/form-data">
                <div class="d-flex row-left-list">
                  <div class="col-xs-12 col-lg-7 col-md-12 col-sm-12 mg-top-15 pd-right-0">
                    <div class="bg-while">
                      <div class="cart-title">
                        <h2>Giỏ hàng:</h2>
                        <span class="cart-count">
                          <span class="cart-counter">4 </span>
                          <span class="cart-item-title">Sản phẩm</span>
                        </span>
                      </div>

                      <div class="flashsale__progressbar">
                        <div
                          class="flashsale___percent"
                          style={{ width: "100%" }}
                        ></div>
                      </div>
                      <div class="cart-sale"></div>

                      <div class="item-wrap" id="cart-page-result">
                        <ShopingCartItem idUser="User0001" {...this.props} />
                      </div>
                    </div>
                  </div>
                  <div class="col-xs-12 col-lg-5 col-md-12 col-sm-12 mg-top-15 pd-right-0">
                    <div class="combo-content">
                      <div class="cart-sale-marvel"></div>
                    </div>

                    <div class="bg-while sidebar-checkout">
                      <div class="sidebar-order-wrap">
                        <div class="order_title">
                          <h4>Tổng giá trị đơn hàng</h4>
                        </div>
                        <div class="order_total">
                          <p>
                            Tạm tính:
                            <span
                              class="total-price total-price-cart"
                              style={{ color: "#000" }}
                            >
                              2,996,000₫
                            </span>
                          </p>
                          <p>
                            Giá giảm:
                            <span class="total-price-sale">-800,000₫</span>
                          </p>
                          <p>
                            Tổng tiền:
                            <span id="total-price-new" class="total-price">
                              2,196,000₫
                            </span>
                          </p>
                        </div>
                        <div class="store_ship">
                          <div class="title_ship">
                            <h1>
                              <img
                                src="https://file.hstatic.net/1000360022/file/fast-delivery_322f7fa602ff423a9f3adce662e8ad4d.png"
                                width="30px"
                                height="30px;"
                                style={{ marginRight: "6px" }}
                              />
                              nhập địa chỉ giao hàng
                            </h1>
                          </div>
                          <ChooseAddress {...this.props} />
                        </div>
                        <div class="checkout-buttons clearfix">
                          <label for="note" class="note-label">
                            Ghi chú
                          </label>
                          <textarea
                            class="form-control"
                            id="note"
                            name="note"
                            rows="4"
                            placeholder="Ghi chú"
                            spellCheck={true}
                            style={{
                              width: "100%",
                              height: "80px",
                              padding: "10px",
                              border: "1px solid #ccc",
                              borderRadius: "4px",
                              fontSize: "16px",
                              boxSizing: "border-box",
                              marginBottom: "20px",
                            }}
                          ></textarea>
                          <ChooseUserDiscountCode
                            idUser="User000000000000"
                            {...this.props}
                          />
                        </div>
                        <div class="order_action">
                          <button
                            class="btncart-checkout text-center"
                            name="checkout"
                            type="submit"
                          >
                            THANH TOÁN NGAY
                          </button>
                          <p class="link-continue text-center">
                            <a href="/collections/all">
                              <i class="fa fa-reply"></i> Tiếp tục mua hàng
                            </a>
                          </p>
                        </div>
                        <br />
                      </div>
                    </div>
                  </div>
                  <div class="col-xs-12 col-lg-12 col-md-4 col-sm-5 mg-top-15 pd-right-0">
                    <div
                      class="side-section d-none-button-mb"
                      id="product-sider-seen"
                    >
                      <div class="bg-while mg-top-15">
                        <div class="wd-top-title">
                          <h2 class="title-section">
                            <span>Bạn Sẽ Cần</span>
                          </h2>
                        </div>
                        <div
                          id="owl-collection-flash-sale"
                          class="d-flex-slick slick-callback left-dot-15 mg-top-15 mg-left--15 slick-initialized slick-slider slick-dotted"
                          data-md="5"
                          data-xs="2"
                          data-sm="3"
                          data-slides-md="5"
                          data-slides-tablet="3"
                          data-slides-xs="2"
                          data-slides-md-scroll="5"
                          data-slides-tablet-scroll="3"
                          data-slides-xs-scroll="2"
                          data-dots="true"
                          data-autoplay="false"
                          data-infinite="true"
                          data-custom-arrows="true"
                        >
                          <button
                            type="button"
                            class="slick-prev slick-arrow custom-style"
                            aria-label="Previous"
                            style={{ display: "block" }}
                          >
                            <span class="arrow-custom arrow-left">
                              <div class="arrow-top"></div>
                              <div class="arrow-bottom"></div>
                            </span>
                          </button>
                          <div class="slick-list draggable">
                            <div
                              class="slick-track"
                              style={{
                                opacity: "1",
                                width: "2754px",
                                transform: "translate3d(-306px, 0px, 0px)",
                              }}
                            >
                              <div
                                class="d-flex-column item-owl pd-left--15 slick-slide slick-cloned"
                                tabindex="-1"
                                role="tabpanel"
                                style={{ width: "102px" }}
                                data-slick-index="-3"
                                aria-hidden="true"
                              >
                                <div class="product-block item">
                                  <div
                                    class="product-img has-hover"
                                    data-frame="Vớ hangmoi FD-TUYEN KIỂM KÊ sale10 SPM (-50) ONPOS ONWEB SPEE2024-12-31 DOUBLEDAY55"
                                  >
                                    <a
                                      href="/products/vo-co-thap-icondenim-monotrio-socks"
                                      title="Vớ Cổ Ngắn Nam ICONDENIM MonoTrio Socks"
                                      class="image-resize"
                                      tabindex="-1"
                                    >
                                      <div class="product-sale">
                                        <span>-%</span>
                                      </div>
                                      <picture>
                                        <source
                                          media="(max-width: 480px)"
                                          data-srcset="//product.hstatic.net/1000253775/product/160_vo_036-7_3f33b7c2fb994a87bc712e416c0c8ee9_large.jpg"
                                          srcset="
                                                    //product.hstatic.net/1000253775/product/160_vo_036-7_3f33b7c2fb994a87bc712e416c0c8ee9_large.jpg
                                                "
                                        />
                                        <source
                                          media="(min-width: 481px)"
                                          data-srcset="//product.hstatic.net/1000253775/product/160_vo_036-7_3f33b7c2fb994a87bc712e416c0c8ee9_large.jpg"
                                          srcset="
                                                    //product.hstatic.net/1000253775/product/160_vo_036-7_3f33b7c2fb994a87bc712e416c0c8ee9_large.jpg
                                                "
                                        />
                                        <img
                                          class="dt-width-100 img-first ls-is-cached lazyloaded"
                                          loading="lazy"
                                          width="260"
                                          height="260"
                                          src="//product.hstatic.net/1000253775/product/160_vo_036-7_3f33b7c2fb994a87bc712e416c0c8ee9_large.jpg"
                                          alt="Vớ Cổ Ngắn Nam ICONDENIM MonoTrio Socks"
                                          title="Vớ Cổ Ngắn Nam ICONDENIM MonoTrio Socks"
                                        />
                                      </picture>
                                      <picture>
                                        <source
                                          media="(min-width: 481px)"
                                          data-srcset="//product.hstatic.net/1000253775/product/160_vo_036-9_757a323a5d73444c87daf3a3d8288fb4_large.jpg"
                                          srcset="
                                                    //product.hstatic.net/1000253775/product/160_vo_036-9_757a323a5d73444c87daf3a3d8288fb4_large.jpg
                                                "
                                        />
                                        <img
                                          class="dt-width-100 img-hover hidden-xs ls-is-cached lazyloaded"
                                          loading="lazy"
                                          width="260"
                                          height="260"
                                          src="//product.hstatic.net/1000253775/product/160_vo_036-9_757a323a5d73444c87daf3a3d8288fb4_large.jpg"
                                          alt="Vớ Cổ Ngắn Nam ICONDENIM MonoTrio Socks"
                                          title="Vớ Cổ Ngắn Nam ICONDENIM MonoTrio Socks"
                                        />
                                      </picture>
                                    </a>

                                    <div class="button-loop-pro hidden-xs hidden-sm">
                                      <button
                                        class="btn-quickview"
                                        onclick="window.wd.scofield.quickview('/products/vo-co-thap-icondenim-monotrio-socks?view=quickview-nochoose')"
                                        type="button"
                                        tabindex="-1"
                                      >
                                        <img
                                          src="https://file.hstatic.net/200000525917/file/search-icon_61351aaf4f2a4ba0b163434492c75c0d.svg"
                                          width="16"
                                          height="16"
                                          alt="Btn Quickview"
                                          title="Btn Quickview"
                                        />
                                      </button>
                                    </div>

                                    <div class="atc-loop d-flex js-center mg-top-auto">
                                      <button
                                        onclick="window.wd.scofield.addtocartloop('true','1125568839','/products/vo-co-thap-icondenim-monotrio-socks',event,'1055649693')"
                                        class="atc-mb-loop"
                                        type="button"
                                        tabindex="-1"
                                      >
                                        <span class="atc-text">
                                          Thêm vào giỏ
                                        </span>
                                        <span class="bd-cart">
                                          <img
                                            class="atc-default"
                                            width="20"
                                            height="20"
                                            src="//theme.hstatic.net/1000253775/1001342694/14/add-to-cart.svg?v=830"
                                            alt="Thêm vào giỏ"
                                          />
                                          <img
                                            class="atc-hv"
                                            width="20"
                                            height="20"
                                            src="//theme.hstatic.net/1000253775/1001342694/14/add-to-cart-hv.svg?v=830"
                                            alt="Thêm vào giỏ"
                                          />
                                        </span>
                                      </button>
                                    </div>
                                  </div>

                                  <div class="label_product-tag label-tag label-outlet">
                                    <div class="label_wrapper">Sale</div>
                                  </div>

                                  <div class="product-detail">
                                    <h3 class="pro-name">
                                      <a
                                        href="/products/vo-co-thap-icondenim-monotrio-socks"
                                        title="Vớ Cổ Ngắn Nam ICONDENIM MonoTrio Socks"
                                        tabindex="-1"
                                      >
                                        Vớ Cổ Ngắn Nam ICONDENIM MonoTrio Socks
                                      </a>
                                    </h3>
                                    <div class="box-pro-prices">
                                      <div class="pro-price-sale">
                                        <span>25,000₫</span>
                                        <del class="compare-price">29,000₫</del>

                                        <div class="label_product-discount label-sale">
                                          <div class="label_wrapper">14%</div>
                                        </div>
                                      </div>
                                      <ul class="hash-tag-loop d-flex"></ul>
                                    </div>
                                  </div>
                                </div>
                                <h1></h1>
                              </div>
                              <div
                                class="d-flex-column item-owl pd-left--15 slick-slide slick-cloned"
                                tabindex="-1"
                                role="tabpanel"
                                aria-describedby="slick-slide-control02"
                                style={{ width: "102px" }}
                                data-slick-index="-2"
                                aria-hidden="true"
                              >
                                <div class="product-block item">
                                  <div
                                    class="product-img has-hover"
                                    data-frame="hangmoi FD-THUONG KIỂM KÊ Underwear ONPOS HÀNGCHƯAVỀ onweb SPM (-50) sale10 SPEE2024-01-23 RS1"
                                  >
                                    <a
                                      href="/products/quan-boxer-icondenim-with-logo"
                                      title="Quần Boxer Extra-cool ICONDENIM With Logo"
                                      class="image-resize"
                                      tabindex="-1"
                                    >
                                      <picture>
                                        <source
                                          media="(max-width: 480px)"
                                          data-srcset="//product.hstatic.net/1000253775/product/160_boxer_34-10_f7e8c4864ac44901a7bd101560ecf48f_large.jpg"
                                          srcset="
                                                    //product.hstatic.net/1000253775/product/160_boxer_34-10_f7e8c4864ac44901a7bd101560ecf48f_large.jpg
                                                "
                                        />
                                        <source
                                          media="(min-width: 481px)"
                                          data-srcset="//product.hstatic.net/1000253775/product/160_boxer_34-10_f7e8c4864ac44901a7bd101560ecf48f_large.jpg"
                                          srcset="
                                                    //product.hstatic.net/1000253775/product/160_boxer_34-10_f7e8c4864ac44901a7bd101560ecf48f_large.jpg
                                                "
                                        />
                                        <img
                                          class="dt-width-100 img-first ls-is-cached lazyloaded"
                                          loading="lazy"
                                          width="260"
                                          height="260"
                                          src="//product.hstatic.net/1000253775/product/160_boxer_34-10_f7e8c4864ac44901a7bd101560ecf48f_large.jpg"
                                          alt="Quần Boxer Extra-cool ICONDENIM With Logo"
                                          title="Quần Boxer Extra-cool ICONDENIM With Logo"
                                        />
                                      </picture>
                                      <picture>
                                        <source
                                          media="(min-width: 481px)"
                                          data-srcset="//product.hstatic.net/1000253775/product/160_boxer_34-13_66086845bfd44c0b992808a3ec014d97_large.jpg"
                                          srcset="
                                                    //product.hstatic.net/1000253775/product/160_boxer_34-13_66086845bfd44c0b992808a3ec014d97_large.jpg
                                                "
                                        />
                                        <img
                                          class="dt-width-100 img-hover hidden-xs ls-is-cached lazyloaded"
                                          loading="lazy"
                                          width="260"
                                          height="260"
                                          src="//product.hstatic.net/1000253775/product/160_boxer_34-13_66086845bfd44c0b992808a3ec014d97_large.jpg"
                                          alt="Quần Boxer Extra-cool ICONDENIM With Logo"
                                          title="Quần Boxer Extra-cool ICONDENIM With Logo"
                                        />
                                      </picture>
                                    </a>

                                    <div class="button-loop-pro hidden-xs hidden-sm">
                                      <button
                                        class="btn-quickview"
                                        onclick="window.wd.scofield.quickview('/products/quan-boxer-icondenim-with-logo?view=quickview-nochoose')"
                                        type="button"
                                        tabindex="-1"
                                      >
                                        <img
                                          src="https://file.hstatic.net/200000525917/file/search-icon_61351aaf4f2a4ba0b163434492c75c0d.svg"
                                          width="16"
                                          height="16"
                                          alt="Btn Quickview"
                                          title="Btn Quickview"
                                        />
                                      </button>
                                    </div>

                                    <div class="atc-loop d-flex js-center mg-top-auto">
                                      <button
                                        onclick="window.wd.scofield.addtocartloop('true','1117512509','/products/quan-boxer-icondenim-with-logo',event,'1052269941')"
                                        class="atc-mb-loop"
                                        type="button"
                                        tabindex="-1"
                                      >
                                        <span class="atc-text">
                                          Thêm vào giỏ
                                        </span>
                                        <span class="bd-cart">
                                          <img
                                            class="atc-default"
                                            width="20"
                                            height="20"
                                            src="//theme.hstatic.net/1000253775/1001342694/14/add-to-cart.svg?v=830"
                                            alt="Thêm vào giỏ"
                                          />
                                          <img
                                            class="atc-hv"
                                            width="20"
                                            height="20"
                                            src="//theme.hstatic.net/1000253775/1001342694/14/add-to-cart-hv.svg?v=830"
                                            alt="Thêm vào giỏ"
                                          />
                                        </span>
                                      </button>
                                    </div>
                                  </div>

                                  <div class="label_product_new">
                                    <div class="label_wrapper">Hàng Mới</div>
                                  </div>

                                  <div class="product-detail">
                                    <h3 class="pro-name">
                                      <a
                                        href="/products/quan-boxer-icondenim-with-logo"
                                        title="Quần Boxer Extra-cool ICONDENIM With Logo"
                                        tabindex="-1"
                                      >
                                        Quần Boxer Extra-cool ICONDENIM With
                                        Logo
                                      </a>
                                    </h3>
                                    <div class="box-pro-prices">
                                      <div class="pro-price">
                                        <span> 120,000₫ </span>
                                      </div>
                                      <ul class="hash-tag-loop d-flex"></ul>
                                    </div>
                                  </div>
                                </div>
                                <h1></h1>
                              </div>
                              <div
                                class="d-flex-column item-owl pd-left--15 slick-slide slick-cloned"
                                tabindex="-1"
                                role="tabpanel"
                                style={{ width: "102px" }}
                                data-slick-index="-1"
                                aria-hidden="true"
                              >
                                <div class="product-block item">
                                  <div
                                    class="product-img has-hover"
                                    data-frame="KIỂM KÊ FD-TON 23bs SPM (-50) sale10 RS2 RS1 fram1 frame1 QKNG RS3 SPEE2024-05-30 BSSAN BOSUA"
                                  >
                                    <a
                                      href="/products/quan-boxer-icondenim-coolmax"
                                      title="Quần Boxer Nam ICONDENIM Coolmax"
                                      class="image-resize"
                                      tabindex="-1"
                                    >
                                      <picture>
                                        <source
                                          media="(max-width: 480px)"
                                          data-srcset="//product.hstatic.net/1000253775/product/160_boxer_3m_16-12_ed7c5c1a0b8c46cdbcd880aaca3dc864_large.jpg"
                                          srcset="
                                                    //product.hstatic.net/1000253775/product/160_boxer_3m_16-12_ed7c5c1a0b8c46cdbcd880aaca3dc864_large.jpg
                                                "
                                        />
                                        <source
                                          media="(min-width: 481px)"
                                          data-srcset="//product.hstatic.net/1000253775/product/160_boxer_3m_16-12_ed7c5c1a0b8c46cdbcd880aaca3dc864_large.jpg"
                                          srcset="
                                                    //product.hstatic.net/1000253775/product/160_boxer_3m_16-12_ed7c5c1a0b8c46cdbcd880aaca3dc864_large.jpg
                                                "
                                        />
                                        <img
                                          class="dt-width-100 img-first ls-is-cached lazyloaded"
                                          loading="lazy"
                                          width="260"
                                          height="260"
                                          src="//product.hstatic.net/1000253775/product/160_boxer_3m_16-12_ed7c5c1a0b8c46cdbcd880aaca3dc864_large.jpg"
                                          alt="Quần Boxer Nam ICONDENIM Coolmax"
                                          title="Quần Boxer Nam ICONDENIM Coolmax"
                                        />
                                      </picture>
                                      <picture>
                                        <source
                                          media="(min-width: 481px)"
                                          data-srcset="//product.hstatic.net/1000253775/product/160_boxer_3m_16-6_125328f27fdb481fa4994183cf9cfc81_large.jpg"
                                          srcset="
                                                    //product.hstatic.net/1000253775/product/160_boxer_3m_16-6_125328f27fdb481fa4994183cf9cfc81_large.jpg
                                                "
                                        />
                                        <img
                                          class="dt-width-100 img-hover hidden-xs ls-is-cached lazyloaded"
                                          loading="lazy"
                                          width="260"
                                          height="260"
                                          src="//product.hstatic.net/1000253775/product/160_boxer_3m_16-6_125328f27fdb481fa4994183cf9cfc81_large.jpg"
                                          alt="Quần Boxer Nam ICONDENIM Coolmax"
                                          title="Quần Boxer Nam ICONDENIM Coolmax"
                                        />
                                      </picture>
                                    </a>

                                    <div class="button-loop-pro hidden-xs hidden-sm">
                                      <button
                                        class="btn-quickview"
                                        onclick="window.wd.scofield.quickview('/products/quan-boxer-icondenim-coolmax?view=quickview-nochoose')"
                                        type="button"
                                        tabindex="-1"
                                      >
                                        <img
                                          src="https://file.hstatic.net/200000525917/file/search-icon_61351aaf4f2a4ba0b163434492c75c0d.svg"
                                          width="16"
                                          height="16"
                                          alt="Btn Quickview"
                                          title="Btn Quickview"
                                        />
                                      </button>
                                    </div>

                                    <div class="atc-loop d-flex js-center mg-top-auto">
                                      <button
                                        onclick="window.wd.scofield.addtocartloop('true','1097598881','/products/quan-boxer-icondenim-coolmax',event,'1044327007')"
                                        class="atc-mb-loop"
                                        type="button"
                                        tabindex="-1"
                                      >
                                        <span class="atc-text">
                                          Thêm vào giỏ
                                        </span>
                                        <span class="bd-cart">
                                          <img
                                            class="atc-default"
                                            width="20"
                                            height="20"
                                            src="//theme.hstatic.net/1000253775/1001342694/14/add-to-cart.svg?v=830"
                                            alt="Thêm vào giỏ"
                                          />
                                          <img
                                            class="atc-hv"
                                            width="20"
                                            height="20"
                                            src="//theme.hstatic.net/1000253775/1001342694/14/add-to-cart-hv.svg?v=830"
                                            alt="Thêm vào giỏ"
                                          />
                                        </span>
                                      </button>
                                    </div>
                                  </div>

                                  <div class="label_product_new">
                                    <div class="label_wrapper">Hàng Mới</div>
                                  </div>

                                  <div class="product-detail">
                                    <h3 class="pro-name">
                                      <a
                                        href="/products/quan-boxer-icondenim-coolmax"
                                        title="Quần Boxer Nam ICONDENIM Coolmax"
                                        tabindex="-1"
                                      >
                                        Quần Boxer Nam ICONDENIM Coolmax
                                      </a>
                                    </h3>
                                    <div class="box-pro-prices">
                                      <div class="pro-price">
                                        <span> 100,000₫ </span>
                                      </div>
                                      <ul class="hash-tag-loop d-flex"></ul>
                                    </div>
                                  </div>
                                </div>
                                <h1></h1>
                              </div>
                              <div
                                class="d-flex-column item-owl pd-left--15 slick-slide slick-current slick-active"
                                tabindex="0"
                                role="tabpanel"
                                id="slick-slide00"
                                aria-describedby="slick-slide-control00"
                                style={{ width: "102px" }}
                                data-slick-index="0"
                                aria-hidden="false"
                              >
                                <div class="product-block item">
                                  <div
                                    class="product-img has-hover"
                                    data-frame="hangmoi Áo polo FD-YUNA KIỂM KÊ SPM (-50) sale10 ONPOS PROCOOL SPEE2024-09-17 ONWEB PROCOOLAO video_JwQMhTtioUQ do_he"
                                  >
                                    <a
                                      href="/products/ao-polo-procool-icondenim-slim-fit-seam-sealing"
                                      title="Áo Polo Nam Procool ICONDENIM Seam Sealing"
                                      class="image-resize"
                                      tabindex="0"
                                    >
                                      <picture>
                                        <source
                                          media="(max-width: 480px)"
                                          data-srcset="//product.hstatic.net/1000253775/product/z5848580872178_fe8bffd627976d356428181577f01aba_47b3e153206847b38b301a3ca8b5c0bc_large.jpg"
                                          srcset="
                                                    //product.hstatic.net/1000253775/product/z5848580872178_fe8bffd627976d356428181577f01aba_47b3e153206847b38b301a3ca8b5c0bc_large.jpg
                                                "
                                        />
                                        <source
                                          media="(min-width: 481px)"
                                          data-srcset="//product.hstatic.net/1000253775/product/z5848580872178_fe8bffd627976d356428181577f01aba_47b3e153206847b38b301a3ca8b5c0bc_large.jpg"
                                          srcset="
                                                    //product.hstatic.net/1000253775/product/z5848580872178_fe8bffd627976d356428181577f01aba_47b3e153206847b38b301a3ca8b5c0bc_large.jpg
                                                "
                                        />
                                        <img
                                          class="dt-width-100 img-first ls-is-cached lazyloaded"
                                          loading="lazy"
                                          width="260"
                                          height="260"
                                          src="//product.hstatic.net/1000253775/product/z5848580872178_fe8bffd627976d356428181577f01aba_47b3e153206847b38b301a3ca8b5c0bc_large.jpg"
                                          alt="Áo Polo Nam Procool ICONDENIM Seam Sealing"
                                          title="Áo Polo Nam Procool ICONDENIM Seam Sealing"
                                        />
                                      </picture>
                                      <picture>
                                        <source
                                          media="(min-width: 481px)"
                                          data-srcset="//product.hstatic.net/1000253775/product/z5816305453622_a796581509ba47578f83b09fef4bbd7c_e1d3464940214462a9414aa563a24495_large.jpg"
                                          srcset="
                                                    //product.hstatic.net/1000253775/product/z5816305453622_a796581509ba47578f83b09fef4bbd7c_e1d3464940214462a9414aa563a24495_large.jpg
                                                "
                                        />
                                        <img
                                          class="dt-width-100 img-hover hidden-xs ls-is-cached lazyloaded"
                                          loading="lazy"
                                          width="260"
                                          height="260"
                                          src="//product.hstatic.net/1000253775/product/z5816305453622_a796581509ba47578f83b09fef4bbd7c_e1d3464940214462a9414aa563a24495_large.jpg"
                                          alt="Áo Polo Nam Procool ICONDENIM Seam Sealing"
                                          title="Áo Polo Nam Procool ICONDENIM Seam Sealing"
                                        />
                                      </picture>
                                    </a>

                                    <div class="button-loop-pro hidden-xs hidden-sm">
                                      <button
                                        class="btn-quickview"
                                        onclick="window.wd.scofield.quickview('/products/ao-polo-procool-icondenim-slim-fit-seam-sealing?view=quickview-nochoose')"
                                        type="button"
                                        tabindex="0"
                                      >
                                        <img
                                          src="https://file.hstatic.net/200000525917/file/search-icon_61351aaf4f2a4ba0b163434492c75c0d.svg"
                                          width="16"
                                          height="16"
                                          alt="Btn Quickview"
                                          title="Btn Quickview"
                                        />
                                      </button>
                                    </div>

                                    <div class="atc-loop d-flex js-center mg-top-auto">
                                      <button
                                        onclick="window.wd.scofield.addtocartloop('true','1126491325','/products/ao-polo-procool-icondenim-slim-fit-seam-sealing',event,'1055966950')"
                                        class="atc-mb-loop"
                                        type="button"
                                        tabindex="0"
                                      >
                                        <span class="atc-text">
                                          Thêm vào giỏ
                                        </span>
                                        <span class="bd-cart">
                                          <img
                                            class="atc-default"
                                            width="20"
                                            height="20"
                                            src="//theme.hstatic.net/1000253775/1001342694/14/add-to-cart.svg?v=830"
                                            alt="Thêm vào giỏ"
                                          />
                                          <img
                                            class="atc-hv"
                                            width="20"
                                            height="20"
                                            src="//theme.hstatic.net/1000253775/1001342694/14/add-to-cart-hv.svg?v=830"
                                            alt="Thêm vào giỏ"
                                          />
                                        </span>
                                      </button>
                                    </div>
                                  </div>

                                  <div class="label_product-tag label-tag label-quyen">
                                    <div class="label_wrapper">Siêu Mát</div>
                                  </div>
                                  <div class="product-detail">
                                    <h3 class="pro-name">
                                      <a
                                        href="/products/ao-polo-procool-icondenim-slim-fit-seam-sealing"
                                        title="Áo Polo Nam Procool ICONDENIM Seam Sealing"
                                        tabindex="0"
                                      >
                                        Áo Polo Nam Procool ICONDENIM Seam
                                        Sealing
                                      </a>
                                    </h3>
                                    <div class="box-pro-prices">
                                      <div class="pro-price">
                                        <span> 389,000₫ </span>
                                      </div>
                                      <ul class="hash-tag-loop d-flex"></ul>
                                    </div>
                                  </div>
                                </div>
                                <h1></h1>
                              </div>
                              <div
                                class="d-flex-column item-owl pd-left--15 slick-slide slick-active"
                                tabindex="0"
                                role="tabpanel"
                                id="slick-slide01"
                                style={{ width: "102px" }}
                                data-slick-index="1"
                                aria-hidden="false"
                              >
                                <div class="product-block item">
                                  <div
                                    class="product-img has-hover"
                                    data-frame="Áo thun FD-YUNA hangmoi KIỂM KÊ SPM (-50) sale10 ONPOS PROCOOL SPEE2024-09-17 ONWEB PROCOOLAO video_7e-wRbNInJk do_he"
                                  >
                                    <a
                                      href="/products/ao-thun-procool-icondenim-slimfit-seam-sealing"
                                      title="Áo Thun Nam Procool ICONDENIM Seam Sealing"
                                      class="image-resize"
                                      tabindex="0"
                                    >
                                      <picture>
                                        <source
                                          media="(max-width: 480px)"
                                          data-srcset="//product.hstatic.net/1000253775/product/z5848580891695_246f48e5160587778dbbe578637f80de_5a388da3f72c40eba1c9719142ebdb85_large.jpg"
                                          srcset="
                                                    //product.hstatic.net/1000253775/product/z5848580891695_246f48e5160587778dbbe578637f80de_5a388da3f72c40eba1c9719142ebdb85_large.jpg
                                                "
                                        />
                                        <source
                                          media="(min-width: 481px)"
                                          data-srcset="//product.hstatic.net/1000253775/product/z5848580891695_246f48e5160587778dbbe578637f80de_5a388da3f72c40eba1c9719142ebdb85_large.jpg"
                                          srcset="
                                                    //product.hstatic.net/1000253775/product/z5848580891695_246f48e5160587778dbbe578637f80de_5a388da3f72c40eba1c9719142ebdb85_large.jpg
                                                "
                                        />
                                        <img
                                          class="dt-width-100 img-first ls-is-cached lazyloaded"
                                          loading="lazy"
                                          width="260"
                                          height="260"
                                          src="//product.hstatic.net/1000253775/product/z5848580891695_246f48e5160587778dbbe578637f80de_5a388da3f72c40eba1c9719142ebdb85_large.jpg"
                                          alt="Áo Thun Nam Procool ICONDENIM Seam Sealing"
                                          title="Áo Thun Nam Procool ICONDENIM Seam Sealing"
                                        />
                                      </picture>
                                      <picture>
                                        <source
                                          media="(min-width: 481px)"
                                          data-srcset="//product.hstatic.net/1000253775/product/z5816310391696_d9c5d17f2f40163af0995d2488023a23_42cd0d16f5f44448a517a9b7f3d9092b_large.jpg"
                                          srcset="
                                                    //product.hstatic.net/1000253775/product/z5816310391696_d9c5d17f2f40163af0995d2488023a23_42cd0d16f5f44448a517a9b7f3d9092b_large.jpg
                                                "
                                        />
                                        <img
                                          class="dt-width-100 img-hover hidden-xs ls-is-cached lazyloaded"
                                          loading="lazy"
                                          width="260"
                                          height="260"
                                          src="//product.hstatic.net/1000253775/product/z5816310391696_d9c5d17f2f40163af0995d2488023a23_42cd0d16f5f44448a517a9b7f3d9092b_large.jpg"
                                          alt="Áo Thun Nam Procool ICONDENIM Seam Sealing"
                                          title="Áo Thun Nam Procool ICONDENIM Seam Sealing"
                                        />
                                      </picture>
                                    </a>

                                    <div class="button-loop-pro hidden-xs hidden-sm">
                                      <button
                                        class="btn-quickview"
                                        onclick="window.wd.scofield.quickview('/products/ao-thun-procool-icondenim-slimfit-seam-sealing?view=quickview-nochoose')"
                                        type="button"
                                        tabindex="0"
                                      >
                                        <img
                                          src="https://file.hstatic.net/200000525917/file/search-icon_61351aaf4f2a4ba0b163434492c75c0d.svg"
                                          width="16"
                                          height="16"
                                          alt="Btn Quickview"
                                          title="Btn Quickview"
                                        />
                                      </button>
                                    </div>

                                    <div class="atc-loop d-flex js-center mg-top-auto">
                                      <button
                                        onclick="window.wd.scofield.addtocartloop('true','1126492715','/products/ao-thun-procool-icondenim-slimfit-seam-sealing',event,'1055967877')"
                                        class="atc-mb-loop"
                                        type="button"
                                        tabindex="0"
                                      >
                                        <span class="atc-text">
                                          Thêm vào giỏ
                                        </span>
                                        <span class="bd-cart">
                                          <img
                                            class="atc-default"
                                            width="20"
                                            height="20"
                                            src="//theme.hstatic.net/1000253775/1001342694/14/add-to-cart.svg?v=830"
                                            alt="Thêm vào giỏ"
                                          />
                                          <img
                                            class="atc-hv"
                                            width="20"
                                            height="20"
                                            src="//theme.hstatic.net/1000253775/1001342694/14/add-to-cart-hv.svg?v=830"
                                            alt="Thêm vào giỏ"
                                          />
                                        </span>
                                      </button>
                                    </div>
                                  </div>

                                  <div class="label_product-tag label-tag label-quyen">
                                    <div class="label_wrapper">Siêu Mát</div>
                                  </div>
                                  <div class="product-detail">
                                    <h3 class="pro-name">
                                      <a
                                        href="/products/ao-thun-procool-icondenim-slimfit-seam-sealing"
                                        title="Áo Thun Nam Procool ICONDENIM Seam Sealing"
                                        tabindex="0"
                                      >
                                        Áo Thun Nam Procool ICONDENIM Seam
                                        Sealing
                                      </a>
                                    </h3>
                                    <div class="box-pro-prices">
                                      <div class="pro-price">
                                        <span> 319,000₫ </span>
                                      </div>
                                      <ul class="hash-tag-loop d-flex"></ul>
                                    </div>
                                  </div>
                                </div>
                                <h1></h1>
                              </div>
                              <div
                                class="d-flex-column item-owl pd-left--15 slick-slide slick-active"
                                tabindex="0"
                                role="tabpanel"
                                id="slick-slide02"
                                style={{ width: "102px" }}
                                data-slick-index="2"
                                aria-hidden="false"
                              >
                                <div class="product-block item">
                                  <div
                                    class="product-img has-hover"
                                    data-frame="hangmoi FD-THUONG Quần short KIỂM KÊ SPM (-50) sale10 PROCOOL SPEE2024-09-17 PROCOOLAO ONWEB do_he"
                                  >
                                    <a
                                      href="/products/quan-short-icondenim-strecth-hips-on-both-sides"
                                      title="Quần Short Nam Procool ICONDENIM Strecth Hips"
                                      class="image-resize"
                                      tabindex="0"
                                    >
                                      <picture>
                                        <source
                                          media="(max-width: 480px)"
                                          data-srcset="//product.hstatic.net/1000253775/product/z5846943479467_53237a9f9ebe58a813eb9e828ea273fe_a5e1c88af73243fcbca81ebbed4f006a_large.jpg"
                                          srcset="
                                                    //product.hstatic.net/1000253775/product/z5846943479467_53237a9f9ebe58a813eb9e828ea273fe_a5e1c88af73243fcbca81ebbed4f006a_large.jpg
                                                "
                                        />
                                        <source
                                          media="(min-width: 481px)"
                                          data-srcset="//product.hstatic.net/1000253775/product/z5846943479467_53237a9f9ebe58a813eb9e828ea273fe_a5e1c88af73243fcbca81ebbed4f006a_large.jpg"
                                          srcset="
                                                    //product.hstatic.net/1000253775/product/z5846943479467_53237a9f9ebe58a813eb9e828ea273fe_a5e1c88af73243fcbca81ebbed4f006a_large.jpg
                                                "
                                        />
                                        <img
                                          class="dt-width-100 img-first ls-is-cached lazyloaded"
                                          loading="lazy"
                                          width="260"
                                          height="260"
                                          src="//product.hstatic.net/1000253775/product/z5846943479467_53237a9f9ebe58a813eb9e828ea273fe_a5e1c88af73243fcbca81ebbed4f006a_large.jpg"
                                          alt="Quần Short Nam Procool ICONDENIM Strecth Hips"
                                          title="Quần Short Nam Procool ICONDENIM Strecth Hips"
                                        />
                                      </picture>
                                      <picture>
                                        <source
                                          media="(min-width: 481px)"
                                          data-srcset="//product.hstatic.net/1000253775/product/1600051_0191b45e4878487d80effdaf0016a24e_large.png"
                                          srcset="
                                                    //product.hstatic.net/1000253775/product/1600051_0191b45e4878487d80effdaf0016a24e_large.png
                                                "
                                        />
                                        <img
                                          class="dt-width-100 img-hover hidden-xs ls-is-cached lazyloaded"
                                          loading="lazy"
                                          width="260"
                                          height="260"
                                          src="//product.hstatic.net/1000253775/product/1600051_0191b45e4878487d80effdaf0016a24e_large.png"
                                          alt="Quần Short Nam Procool ICONDENIM Strecth Hips"
                                          title="Quần Short Nam Procool ICONDENIM Strecth Hips"
                                        />
                                      </picture>
                                    </a>

                                    <div class="button-loop-pro hidden-xs hidden-sm">
                                      <button
                                        class="btn-quickview"
                                        onclick="window.wd.scofield.quickview('/products/quan-short-icondenim-strecth-hips-on-both-sides?view=quickview-nochoose')"
                                        type="button"
                                        tabindex="0"
                                      >
                                        <img
                                          src="https://file.hstatic.net/200000525917/file/search-icon_61351aaf4f2a4ba0b163434492c75c0d.svg"
                                          width="16"
                                          height="16"
                                          alt="Btn Quickview"
                                          title="Btn Quickview"
                                        />
                                      </button>
                                    </div>

                                    <div class="atc-loop d-flex js-center mg-top-auto">
                                      <button
                                        onclick="window.wd.scofield.addtocartloop('true','1126497631','/products/quan-short-icondenim-strecth-hips-on-both-sides',event,'1055969609')"
                                        class="atc-mb-loop"
                                        type="button"
                                        tabindex="0"
                                      >
                                        <span class="atc-text">
                                          Thêm vào giỏ
                                        </span>
                                        <span class="bd-cart">
                                          <img
                                            class="atc-default"
                                            width="20"
                                            height="20"
                                            src="//theme.hstatic.net/1000253775/1001342694/14/add-to-cart.svg?v=830"
                                            alt="Thêm vào giỏ"
                                          />
                                          <img
                                            class="atc-hv"
                                            width="20"
                                            height="20"
                                            src="//theme.hstatic.net/1000253775/1001342694/14/add-to-cart-hv.svg?v=830"
                                            alt="Thêm vào giỏ"
                                          />
                                        </span>
                                      </button>
                                    </div>
                                  </div>

                                  <div class="label_product-tag label-tag label-quyen">
                                    <div class="label_wrapper">Siêu Mát</div>
                                  </div>
                                  <div class="product-detail">
                                    <h3 class="pro-name">
                                      <a
                                        href="/products/quan-short-icondenim-strecth-hips-on-both-sides"
                                        title="Quần Short Nam Procool ICONDENIM Strecth Hips"
                                        tabindex="0"
                                      >
                                        Quần Short Nam Procool ICONDENIM Strecth
                                        Hips
                                      </a>
                                    </h3>
                                    <div class="box-pro-prices">
                                      <div class="pro-price">
                                        <span> 349,000₫ </span>
                                      </div>
                                      <ul class="hash-tag-loop d-flex"></ul>
                                    </div>
                                  </div>
                                </div>
                                <h1></h1>
                              </div>
                              <div
                                class="d-flex-column item-owl pd-left--15 slick-slide"
                                tabindex="-1"
                                role="tabpanel"
                                id="slick-slide03"
                                style={{ width: "102px" }}
                                data-slick-index="3"
                                aria-hidden="true"
                                aria-describedby="slick-slide-control01"
                              >
                                <div class="product-block item">
                                  <div
                                    class="product-img has-hover"
                                    data-frame="hangmoi Quần jean KIỂM KÊ SPM (-50) sale10 BLINDBOX video_lbD6-AbEdFg onpos JEANSTET PROCOOLJEANS SPEE2025-01-11 PROCOOL"
                                  >
                                    <a
                                      href="/products/quan-jean-procool-icondenim-coolmax-performance-indigo-slim"
                                      title="Quần Jean Nam Procool ICONDENIM CoolMax Indigo Slim"
                                      class="image-resize"
                                      tabindex="-1"
                                    >
                                      <picture>
                                        <source
                                          media="(max-width: 480px)"
                                          data-srcset="//product.hstatic.net/1000253775/product/qjid0228_3d8c17189f62421c95283bfbf7a75ffc_large.jpg"
                                          srcset="
                                                    //product.hstatic.net/1000253775/product/qjid0228_3d8c17189f62421c95283bfbf7a75ffc_large.jpg
                                                "
                                        />
                                        <source
                                          media="(min-width: 481px)"
                                          data-srcset="//product.hstatic.net/1000253775/product/qjid0228_3d8c17189f62421c95283bfbf7a75ffc_large.jpg"
                                          srcset="
                                                    //product.hstatic.net/1000253775/product/qjid0228_3d8c17189f62421c95283bfbf7a75ffc_large.jpg
                                                "
                                        />
                                        <img
                                          class="dt-width-100 img-first ls-is-cached lazyloaded"
                                          loading="lazy"
                                          width="260"
                                          height="260"
                                          src="//product.hstatic.net/1000253775/product/qjid0228_3d8c17189f62421c95283bfbf7a75ffc_large.jpg"
                                          alt="Quần Jean Nam Procool ICONDENIM CoolMax Indigo Slim"
                                          title="Quần Jean Nam Procool ICONDENIM CoolMax Indigo Slim"
                                        />
                                      </picture>
                                      <picture>
                                        <source
                                          media="(min-width: 481px)"
                                          data-srcset="//product.hstatic.net/1000253775/product/thiet_ke_chua_co_ten_6bab50d2e7724dfb9a82f8f564a1180a_large.png"
                                          srcset="
                                                    //product.hstatic.net/1000253775/product/thiet_ke_chua_co_ten_6bab50d2e7724dfb9a82f8f564a1180a_large.png
                                                "
                                        />
                                        <img
                                          class="dt-width-100 img-hover hidden-xs ls-is-cached lazyloaded"
                                          loading="lazy"
                                          width="260"
                                          height="260"
                                          src="//product.hstatic.net/1000253775/product/thiet_ke_chua_co_ten_6bab50d2e7724dfb9a82f8f564a1180a_large.png"
                                          alt="Quần Jean Nam Procool ICONDENIM CoolMax Indigo Slim"
                                          title="Quần Jean Nam Procool ICONDENIM CoolMax Indigo Slim"
                                        />
                                      </picture>
                                    </a>

                                    <div class="button-loop-pro hidden-xs hidden-sm">
                                      <button
                                        class="btn-quickview"
                                        onclick="window.wd.scofield.quickview('/products/quan-jean-procool-icondenim-coolmax-performance-indigo-slim?view=quickview-nochoose')"
                                        type="button"
                                        tabindex="-1"
                                      >
                                        <img
                                          src="https://file.hstatic.net/200000525917/file/search-icon_61351aaf4f2a4ba0b163434492c75c0d.svg"
                                          width="16"
                                          height="16"
                                          alt="Btn Quickview"
                                          title="Btn Quickview"
                                        />
                                      </button>
                                    </div>

                                    <div class="atc-loop d-flex js-center mg-top-auto">
                                      <button
                                        onclick="window.wd.scofield.addtocartloop('true','1141535025','/products/quan-jean-procool-icondenim-coolmax-performance-indigo-slim',event,'1062155354')"
                                        class="atc-mb-loop"
                                        type="button"
                                        tabindex="-1"
                                      >
                                        <span class="atc-text">
                                          Thêm vào giỏ
                                        </span>
                                        <span class="bd-cart">
                                          <img
                                            class="atc-default"
                                            width="20"
                                            height="20"
                                            src="//theme.hstatic.net/1000253775/1001342694/14/add-to-cart.svg?v=830"
                                            alt="Thêm vào giỏ"
                                          />
                                          <img
                                            class="atc-hv"
                                            width="20"
                                            height="20"
                                            src="//theme.hstatic.net/1000253775/1001342694/14/add-to-cart-hv.svg?v=830"
                                            alt="Thêm vào giỏ"
                                          />
                                        </span>
                                      </button>
                                    </div>
                                  </div>

                                  <div class="label_product-tag label-tag label-quyen">
                                    <div class="label_wrapper">Siêu Mát</div>
                                  </div>
                                  <div class="product-detail">
                                    <h3 class="pro-name">
                                      <a
                                        href="/products/quan-jean-procool-icondenim-coolmax-performance-indigo-slim"
                                        title="Quần Jean Nam Procool ICONDENIM CoolMax Indigo Slim"
                                        tabindex="-1"
                                      >
                                        Quần Jean Nam Procool ICONDENIM CoolMax
                                        Indigo Slim
                                      </a>
                                    </h3>
                                    <div class="box-pro-prices">
                                      <div class="pro-price">
                                        <span> 689,000₫ </span>
                                      </div>
                                      <ul class="hash-tag-loop d-flex"></ul>
                                    </div>
                                  </div>
                                </div>
                                <h1></h1>
                              </div>
                              <div
                                class="d-flex-column item-owl pd-left--15 slick-slide"
                                tabindex="-1"
                                role="tabpanel"
                                id="slick-slide04"
                                style={{ width: "102px" }}
                                data-slick-index="4"
                                aria-hidden="true"
                              >
                                <div class="product-block item">
                                  <div
                                    class="product-img has-hover"
                                    data-frame="hangmoi FD-YUNA Quần jean KIỂM KÊ SPM (-50) sale10 ONPOS PROCOOLJEANS PROCOOL SPEE2024-09-17 ONWEB video_lbD6-AbEdFg Form_Slim BLINDBOX JEANSTET jean_xanh do_he"
                                  >
                                    <a
                                      href="/products/quan-jeans-procool-icondenim-coolmax-performance-slim-jeans-4"
                                      title="Quần Jean Nam ProCOOL ICONDENIM CoolMax Light Blue Slim"
                                      class="image-resize"
                                      tabindex="-1"
                                    >
                                      <picture>
                                        <source
                                          media="(max-width: 480px)"
                                          data-srcset="//product.hstatic.net/1000253775/product/video_tensp_2af95e6277394f1289b9a2ef2f92961c_large.jpg"
                                          srcset="
                                                    //product.hstatic.net/1000253775/product/video_tensp_2af95e6277394f1289b9a2ef2f92961c_large.jpg
                                                "
                                        />
                                        <source
                                          media="(min-width: 481px)"
                                          data-srcset="//product.hstatic.net/1000253775/product/video_tensp_2af95e6277394f1289b9a2ef2f92961c_large.jpg"
                                          srcset="
                                                    //product.hstatic.net/1000253775/product/video_tensp_2af95e6277394f1289b9a2ef2f92961c_large.jpg
                                                "
                                        />
                                        <img
                                          class="dt-width-100 img-first ls-is-cached lazyloaded"
                                          loading="lazy"
                                          width="260"
                                          height="260"
                                          src="//product.hstatic.net/1000253775/product/video_tensp_2af95e6277394f1289b9a2ef2f92961c_large.jpg"
                                          alt="video_tensp"
                                          title="video_tensp"
                                        />
                                      </picture>
                                      <picture>
                                        <source
                                          media="(min-width: 481px)"
                                          data-srcset="//product.hstatic.net/1000253775/product/qjid0227_f75d4568994e4fe88c4dba752b7bbc38_large.png"
                                          srcset="
                                                    //product.hstatic.net/1000253775/product/qjid0227_f75d4568994e4fe88c4dba752b7bbc38_large.png
                                                "
                                        />
                                        <img
                                          class="dt-width-100 img-hover hidden-xs ls-is-cached lazyloaded"
                                          loading="lazy"
                                          width="260"
                                          height="260"
                                          src="//product.hstatic.net/1000253775/product/qjid0227_f75d4568994e4fe88c4dba752b7bbc38_large.png"
                                          alt="video_tensp"
                                          title="video_tensp"
                                        />
                                      </picture>
                                    </a>

                                    <div class="button-loop-pro hidden-xs hidden-sm">
                                      <button
                                        class="btn-quickview"
                                        onclick="window.wd.scofield.quickview('/products/quan-jeans-procool-icondenim-coolmax-performance-slim-jeans-4?view=quickview-nochoose')"
                                        type="button"
                                        tabindex="-1"
                                      >
                                        <img
                                          src="https://file.hstatic.net/200000525917/file/search-icon_61351aaf4f2a4ba0b163434492c75c0d.svg"
                                          width="16"
                                          height="16"
                                          alt="Btn Quickview"
                                          title="Btn Quickview"
                                        />
                                      </button>
                                    </div>

                                    <div class="atc-loop d-flex js-center mg-top-auto">
                                      <button
                                        onclick="window.wd.scofield.addtocartloop('true','1128050480','/products/quan-jeans-procool-icondenim-coolmax-performance-slim-jeans-4',event,'1056304675')"
                                        class="atc-mb-loop"
                                        type="button"
                                        tabindex="-1"
                                      >
                                        <span class="atc-text">
                                          Thêm vào giỏ
                                        </span>
                                        <span class="bd-cart">
                                          <img
                                            class="atc-default"
                                            width="20"
                                            height="20"
                                            src="//theme.hstatic.net/1000253775/1001342694/14/add-to-cart.svg?v=830"
                                            alt="Thêm vào giỏ"
                                          />
                                          <img
                                            class="atc-hv"
                                            width="20"
                                            height="20"
                                            src="//theme.hstatic.net/1000253775/1001342694/14/add-to-cart-hv.svg?v=830"
                                            alt="Thêm vào giỏ"
                                          />
                                        </span>
                                      </button>
                                    </div>
                                  </div>

                                  <div class="label_product-tag label-tag label-quyen">
                                    <div class="label_wrapper">Siêu Mát</div>
                                  </div>
                                  <div class="product-detail">
                                    <h3 class="pro-name">
                                      <a
                                        href="/products/quan-jeans-procool-icondenim-coolmax-performance-slim-jeans-4"
                                        title="Quần Jean Nam ProCOOL ICONDENIM CoolMax Light Blue Slim"
                                        tabindex="-1"
                                      >
                                        Quần Jean Nam ProCOOL ICONDENIM CoolMax
                                        Light Blue Slim
                                      </a>
                                    </h3>
                                    <div class="box-pro-prices">
                                      <div class="pro-price">
                                        <span> 689,000₫ </span>
                                      </div>
                                      <ul class="hash-tag-loop d-flex"></ul>
                                    </div>
                                  </div>
                                </div>
                                <h1></h1>
                              </div>
                              <div
                                class="d-flex-column item-owl pd-left--15 slick-slide"
                                tabindex="-1"
                                role="tabpanel"
                                id="slick-slide05"
                                aria-describedby="slick-slide-control01"
                                style={{ width: "102px" }}
                                data-slick-index="5"
                                aria-hidden="true"
                              >
                                <div class="product-block item">
                                  <div
                                    class="product-img has-hover"
                                    data-frame="Quần jean KIỂM KÊ hangmoi FD-YUNA sale10 SPM (-50) ONPOS PROCOOLJEANS PROCOOL SPEE2024-09-17 ONWEB Form_Slim BLINDBOX JEANSTET jean_den do_he video_jj1fskSYwdE"
                                  >
                                    <a
                                      href="/products/quan-jeans-procool-icondenim-coolmax-performance-slim-jeans-3"
                                      title="Quần Jean Nam Procool ICONDENIM CoolMax Black Slim"
                                      class="image-resize"
                                      tabindex="-1"
                                    >
                                      <picture>
                                        <source
                                          media="(max-width: 480px)"
                                          data-srcset="//product.hstatic.net/1000253775/product/video_tensp_83582f9c988b4f6e9771f7156782d3b4_large.jpg"
                                          srcset="
                                                    //product.hstatic.net/1000253775/product/video_tensp_83582f9c988b4f6e9771f7156782d3b4_large.jpg
                                                "
                                        />
                                        <source
                                          media="(min-width: 481px)"
                                          data-srcset="//product.hstatic.net/1000253775/product/video_tensp_83582f9c988b4f6e9771f7156782d3b4_large.jpg"
                                          srcset="
                                                    //product.hstatic.net/1000253775/product/video_tensp_83582f9c988b4f6e9771f7156782d3b4_large.jpg
                                                "
                                        />
                                        <img
                                          class="dt-width-100 img-first ls-is-cached lazyloaded"
                                          loading="lazy"
                                          width="260"
                                          height="260"
                                          src="//product.hstatic.net/1000253775/product/video_tensp_83582f9c988b4f6e9771f7156782d3b4_large.jpg"
                                          alt="video_tensp"
                                          title="video_tensp"
                                        />
                                      </picture>
                                      <picture>
                                        <source
                                          media="(min-width: 481px)"
                                          data-srcset="//product.hstatic.net/1000253775/product/quan-jeans-procool-icondenim-coolmax-performance-slim-jeans-3_43df5feab604417eb4100f081a97a326_large.jpg"
                                          srcset="
                                                    //product.hstatic.net/1000253775/product/quan-jeans-procool-icondenim-coolmax-performance-slim-jeans-3_43df5feab604417eb4100f081a97a326_large.jpg
                                                "
                                        />
                                        <img
                                          class="dt-width-100 img-hover hidden-xs ls-is-cached lazyloaded"
                                          loading="lazy"
                                          width="260"
                                          height="260"
                                          src="//product.hstatic.net/1000253775/product/quan-jeans-procool-icondenim-coolmax-performance-slim-jeans-3_43df5feab604417eb4100f081a97a326_large.jpg"
                                          alt="video_tensp"
                                          title="video_tensp"
                                        />
                                      </picture>
                                    </a>

                                    <div class="button-loop-pro hidden-xs hidden-sm">
                                      <button
                                        class="btn-quickview"
                                        onclick="window.wd.scofield.quickview('/products/quan-jeans-procool-icondenim-coolmax-performance-slim-jeans-3?view=quickview-nochoose')"
                                        type="button"
                                        tabindex="-1"
                                      >
                                        <img
                                          src="https://file.hstatic.net/200000525917/file/search-icon_61351aaf4f2a4ba0b163434492c75c0d.svg"
                                          width="16"
                                          height="16"
                                          alt="Btn Quickview"
                                          title="Btn Quickview"
                                        />
                                      </button>
                                    </div>

                                    <div class="atc-loop d-flex js-center mg-top-auto">
                                      <button
                                        onclick="window.wd.scofield.addtocartloop('true','1128046223','/products/quan-jeans-procool-icondenim-coolmax-performance-slim-jeans-3',event,'1056303326')"
                                        class="atc-mb-loop"
                                        type="button"
                                        tabindex="-1"
                                      >
                                        <span class="atc-text">
                                          Thêm vào giỏ
                                        </span>
                                        <span class="bd-cart">
                                          <img
                                            class="atc-default"
                                            width="20"
                                            height="20"
                                            src="//theme.hstatic.net/1000253775/1001342694/14/add-to-cart.svg?v=830"
                                            alt="Thêm vào giỏ"
                                          />
                                          <img
                                            class="atc-hv"
                                            width="20"
                                            height="20"
                                            src="//theme.hstatic.net/1000253775/1001342694/14/add-to-cart-hv.svg?v=830"
                                            alt="Thêm vào giỏ"
                                          />
                                        </span>
                                      </button>
                                    </div>
                                  </div>

                                  <div class="label_product-tag label-tag label-quyen">
                                    <div class="label_wrapper">Siêu Mát</div>
                                  </div>
                                  <div class="product-detail">
                                    <h3 class="pro-name">
                                      <a
                                        href="/products/quan-jeans-procool-icondenim-coolmax-performance-slim-jeans-3"
                                        title="Quần Jean Nam Procool ICONDENIM CoolMax Black Slim"
                                        tabindex="-1"
                                      >
                                        Quần Jean Nam Procool ICONDENIM CoolMax
                                        Black Slim
                                      </a>
                                    </h3>
                                    <div class="box-pro-prices">
                                      <div class="pro-price">
                                        <span> 689,000₫ </span>
                                      </div>
                                      <ul class="hash-tag-loop d-flex"></ul>
                                    </div>
                                  </div>
                                </div>
                                <h1></h1>
                              </div>
                              <div
                                class="d-flex-column item-owl pd-left--15 slick-slide"
                                tabindex="-1"
                                role="tabpanel"
                                id="slick-slide06"
                                style={{ width: "102px" }}
                                data-slick-index="6"
                                aria-hidden="true"
                                aria-describedby="slick-slide-control02"
                              >
                                <div class="product-block item">
                                  <div
                                    class="product-img has-hover"
                                    data-frame="HÀNGCHƯAVỀ Quần jean hangmoi KIỂM KÊ FD-YUNA SPM (-50) sale10 ONPOS PROCOOLJEANS PROCOOL SPEE2024-09-17 ONWEB Form_Slim BLINDBOX JEANSTET jean_xanh do_he video_jj1fskSYwdE"
                                  >
                                    <a
                                      href="/products/quan-jeans-procool-icondenim-coolmax-performance-slim-jeans-2"
                                      title="Quần Jean Nam Procool ICONDENIM CoolMax Dark Blue Slim"
                                      class="image-resize"
                                      tabindex="-1"
                                    >
                                      <picture>
                                        <source
                                          media="(max-width: 480px)"
                                          data-srcset="//product.hstatic.net/1000253775/product/video_tensp_ab56f6fcea2c47c993860285f10fbbe2_large.jpg"
                                          srcset="
                                                    //product.hstatic.net/1000253775/product/video_tensp_ab56f6fcea2c47c993860285f10fbbe2_large.jpg
                                                "
                                        />
                                        <source
                                          media="(min-width: 481px)"
                                          data-srcset="//product.hstatic.net/1000253775/product/video_tensp_ab56f6fcea2c47c993860285f10fbbe2_large.jpg"
                                          srcset="
                                                    //product.hstatic.net/1000253775/product/video_tensp_ab56f6fcea2c47c993860285f10fbbe2_large.jpg
                                                "
                                        />
                                        <img
                                          class="dt-width-100 img-first ls-is-cached lazyloaded"
                                          loading="lazy"
                                          width="260"
                                          height="260"
                                          src="//product.hstatic.net/1000253775/product/video_tensp_ab56f6fcea2c47c993860285f10fbbe2_large.jpg"
                                          alt="video_tensp"
                                          title="video_tensp"
                                        />
                                      </picture>
                                      <picture>
                                        <source
                                          media="(min-width: 481px)"
                                          data-srcset="//product.hstatic.net/1000253775/product/qjid0225_1f6330dab0fc4c9c9a475fd2e46d3fb4_large.jpg"
                                          srcset="
                                                    //product.hstatic.net/1000253775/product/qjid0225_1f6330dab0fc4c9c9a475fd2e46d3fb4_large.jpg
                                                "
                                        />
                                        <img
                                          class="dt-width-100 img-hover hidden-xs ls-is-cached lazyloaded"
                                          loading="lazy"
                                          width="260"
                                          height="260"
                                          src="//product.hstatic.net/1000253775/product/qjid0225_1f6330dab0fc4c9c9a475fd2e46d3fb4_large.jpg"
                                          alt="video_tensp"
                                          title="video_tensp"
                                        />
                                      </picture>
                                    </a>

                                    <div class="button-loop-pro hidden-xs hidden-sm">
                                      <button
                                        class="btn-quickview"
                                        onclick="window.wd.scofield.quickview('/products/quan-jeans-procool-icondenim-coolmax-performance-slim-jeans-2?view=quickview-nochoose')"
                                        type="button"
                                        tabindex="-1"
                                      >
                                        <img
                                          src="https://file.hstatic.net/200000525917/file/search-icon_61351aaf4f2a4ba0b163434492c75c0d.svg"
                                          width="16"
                                          height="16"
                                          alt="Btn Quickview"
                                          title="Btn Quickview"
                                        />
                                      </button>
                                    </div>

                                    <div class="atc-loop d-flex js-center mg-top-auto">
                                      <button
                                        onclick="window.wd.scofield.addtocartloop('true','1128045992','/products/quan-jeans-procool-icondenim-coolmax-performance-slim-jeans-2',event,'1056303247')"
                                        class="atc-mb-loop"
                                        type="button"
                                        tabindex="-1"
                                      >
                                        <span class="atc-text">
                                          Thêm vào giỏ
                                        </span>
                                        <span class="bd-cart">
                                          <img
                                            class="atc-default"
                                            width="20"
                                            height="20"
                                            src="//theme.hstatic.net/1000253775/1001342694/14/add-to-cart.svg?v=830"
                                            alt="Thêm vào giỏ"
                                          />
                                          <img
                                            class="atc-hv"
                                            width="20"
                                            height="20"
                                            src="//theme.hstatic.net/1000253775/1001342694/14/add-to-cart-hv.svg?v=830"
                                            alt="Thêm vào giỏ"
                                          />
                                        </span>
                                      </button>
                                    </div>
                                  </div>

                                  <div class="label_product-tag label-tag label-quyen">
                                    <div class="label_wrapper">Siêu Mát</div>
                                  </div>
                                  <div class="product-detail">
                                    <h3 class="pro-name">
                                      <a
                                        href="/products/quan-jeans-procool-icondenim-coolmax-performance-slim-jeans-2"
                                        title="Quần Jean Nam Procool ICONDENIM CoolMax Dark Blue Slim"
                                        tabindex="-1"
                                      >
                                        Quần Jean Nam Procool ICONDENIM CoolMax
                                        Dark Blue Slim
                                      </a>
                                    </h3>
                                    <div class="box-pro-prices">
                                      <div class="pro-price">
                                        <span> 689,000₫ </span>
                                      </div>
                                      <ul class="hash-tag-loop d-flex"></ul>
                                    </div>
                                  </div>
                                </div>
                                <h1></h1>
                              </div>
                              <div
                                class="d-flex-column item-owl pd-left--15 slick-slide"
                                tabindex="-1"
                                role="tabpanel"
                                id="slick-slide07"
                                style={{ width: "102px" }}
                                data-slick-index="7"
                                aria-hidden="true"
                              >
                                <div class="product-block item">
                                  <div
                                    class="product-img has-hover"
                                    data-frame="FD-YUNA hangmoi Quần jean HÀNGCHƯAVỀ KIỂM KÊ sale10 SPM (-50) ONPOS PROCOOLJEANS PROCOOL SPEE2024-09-17 ONWEB video_lbD6-AbEdFg Form_Slim BLINDBOX JEANSTET jean_xanh do_he"
                                  >
                                    <a
                                      href="/products/quan-jeans-procool-icondenim-coolmax-performance-slim-jeans-1"
                                      title="Quần Jean Procool ICONDENIM CoolMax Performance Blue Slim"
                                      class="image-resize"
                                      tabindex="-1"
                                    >
                                      <picture>
                                        <source
                                          media="(max-width: 480px)"
                                          data-srcset="//product.hstatic.net/1000253775/product/video_tensp_f9029b9954c84df9b6f37fdb1f962fa4_large.jpg"
                                          srcset="
                                                    //product.hstatic.net/1000253775/product/video_tensp_f9029b9954c84df9b6f37fdb1f962fa4_large.jpg
                                                "
                                        />
                                        <source
                                          media="(min-width: 481px)"
                                          data-srcset="//product.hstatic.net/1000253775/product/video_tensp_f9029b9954c84df9b6f37fdb1f962fa4_large.jpg"
                                          srcset="
                                                    //product.hstatic.net/1000253775/product/video_tensp_f9029b9954c84df9b6f37fdb1f962fa4_large.jpg
                                                "
                                        />
                                        <img
                                          class="dt-width-100 img-first ls-is-cached lazyloaded"
                                          loading="lazy"
                                          width="260"
                                          height="260"
                                          src="//product.hstatic.net/1000253775/product/video_tensp_f9029b9954c84df9b6f37fdb1f962fa4_large.jpg"
                                          alt="video_tensp"
                                          title="video_tensp"
                                        />
                                      </picture>
                                      <picture>
                                        <source
                                          media="(min-width: 481px)"
                                          data-srcset="//product.hstatic.net/1000253775/product/160_jean_224-1_f581f666cf354045bf55f8dda5a7ff60_large.jpg"
                                          srcset="
                                                    //product.hstatic.net/1000253775/product/160_jean_224-1_f581f666cf354045bf55f8dda5a7ff60_large.jpg
                                                "
                                        />
                                        <img
                                          class="dt-width-100 img-hover hidden-xs ls-is-cached lazyloaded"
                                          loading="lazy"
                                          width="260"
                                          height="260"
                                          src="//product.hstatic.net/1000253775/product/160_jean_224-1_f581f666cf354045bf55f8dda5a7ff60_large.jpg"
                                          alt="video_tensp"
                                          title="video_tensp"
                                        />
                                      </picture>
                                    </a>

                                    <div class="button-loop-pro hidden-xs hidden-sm">
                                      <button
                                        class="btn-quickview"
                                        onclick="window.wd.scofield.quickview('/products/quan-jeans-procool-icondenim-coolmax-performance-slim-jeans-1?view=quickview-nochoose')"
                                        type="button"
                                        tabindex="-1"
                                      >
                                        <img
                                          src="https://file.hstatic.net/200000525917/file/search-icon_61351aaf4f2a4ba0b163434492c75c0d.svg"
                                          width="16"
                                          height="16"
                                          alt="Btn Quickview"
                                          title="Btn Quickview"
                                        />
                                      </button>
                                    </div>

                                    <div class="atc-loop d-flex js-center mg-top-auto">
                                      <button
                                        onclick="window.wd.scofield.addtocartloop('true','1128045732','/products/quan-jeans-procool-icondenim-coolmax-performance-slim-jeans-1',event,'1056303131')"
                                        class="atc-mb-loop"
                                        type="button"
                                        tabindex="-1"
                                      >
                                        <span class="atc-text">
                                          Thêm vào giỏ
                                        </span>
                                        <span class="bd-cart">
                                          <img
                                            class="atc-default"
                                            width="20"
                                            height="20"
                                            src="//theme.hstatic.net/1000253775/1001342694/14/add-to-cart.svg?v=830"
                                            alt="Thêm vào giỏ"
                                          />
                                          <img
                                            class="atc-hv"
                                            width="20"
                                            height="20"
                                            src="//theme.hstatic.net/1000253775/1001342694/14/add-to-cart-hv.svg?v=830"
                                            alt="Thêm vào giỏ"
                                          />
                                        </span>
                                      </button>
                                    </div>
                                  </div>

                                  <div class="label_product-tag label-tag label-quyen">
                                    <div class="label_wrapper">Siêu Mát</div>
                                  </div>
                                  <div class="product-detail">
                                    <h3 class="pro-name">
                                      <a
                                        href="/products/quan-jeans-procool-icondenim-coolmax-performance-slim-jeans-1"
                                        title="Quần Jean Procool ICONDENIM CoolMax Performance Blue Slim"
                                        tabindex="-1"
                                      >
                                        Quần Jean Procool ICONDENIM CoolMax
                                        Performance Blue Slim
                                      </a>
                                    </h3>
                                    <div class="box-pro-prices">
                                      <div class="pro-price">
                                        <span> 689,000₫ </span>
                                      </div>
                                      <ul class="hash-tag-loop d-flex"></ul>
                                    </div>
                                  </div>
                                </div>
                                <h1></h1>
                              </div>
                              <div
                                class="d-flex-column item-owl pd-left--15 slick-slide"
                                tabindex="-1"
                                role="tabpanel"
                                id="slick-slide08"
                                style={{ width: "102px" }}
                                data-slick-index="8"
                                aria-hidden="true"
                              >
                                <div class="product-block item">
                                  <div
                                    class="product-img has-hover"
                                    data-frame="KIỂM KÊ FD-YUNA Quần jean hangmoi sale10 SPM (-50) ONPOS PROCOOLJEANS PROCOOL SPEE2024-09-17 ONWEB video_lbD6-AbEdFg Form_Slim BLINDBOX JEANSTET do_he"
                                  >
                                    <a
                                      href="/products/quan-jeans-procool-icondenim-coolmax-performance-slim-jeans"
                                      title="Quần Jean Nam Procool ICONDENIM CoolMax Sand Blue Slim"
                                      class="image-resize"
                                      tabindex="-1"
                                    >
                                      <picture>
                                        <source
                                          media="(max-width: 480px)"
                                          data-srcset="//product.hstatic.net/1000253775/product/video_tensp_1770f50c493e4597bffbadfea5346f8d_large.jpg"
                                          srcset="
                                                    //product.hstatic.net/1000253775/product/video_tensp_1770f50c493e4597bffbadfea5346f8d_large.jpg
                                                "
                                        />
                                        <source
                                          media="(min-width: 481px)"
                                          data-srcset="//product.hstatic.net/1000253775/product/video_tensp_1770f50c493e4597bffbadfea5346f8d_large.jpg"
                                          srcset="
                                                    //product.hstatic.net/1000253775/product/video_tensp_1770f50c493e4597bffbadfea5346f8d_large.jpg
                                                "
                                        />
                                        <img
                                          class="dt-width-100 img-first lazyloaded"
                                          loading="lazy"
                                          width="260"
                                          height="260"
                                          src="//product.hstatic.net/1000253775/product/video_tensp_1770f50c493e4597bffbadfea5346f8d_large.jpg"
                                          alt="video_tensp"
                                          title="video_tensp"
                                        />
                                      </picture>
                                      <picture>
                                        <source
                                          media="(min-width: 481px)"
                                          data-srcset="//product.hstatic.net/1000253775/product/091a8967_b46e0f08faf84beb80aae57ba0c69b38_large.png"
                                          srcset="
                                                    //product.hstatic.net/1000253775/product/091a8967_b46e0f08faf84beb80aae57ba0c69b38_large.png
                                                "
                                        />
                                        <img
                                          class="dt-width-100 img-hover hidden-xs lazyloaded"
                                          loading="lazy"
                                          width="260"
                                          height="260"
                                          src="//product.hstatic.net/1000253775/product/091a8967_b46e0f08faf84beb80aae57ba0c69b38_large.png"
                                          alt="video_tensp"
                                          title="video_tensp"
                                        />
                                      </picture>
                                    </a>

                                    <div class="button-loop-pro hidden-xs hidden-sm">
                                      <button
                                        class="btn-quickview"
                                        onclick="window.wd.scofield.quickview('/products/quan-jeans-procool-icondenim-coolmax-performance-slim-jeans?view=quickview-nochoose')"
                                        type="button"
                                        tabindex="-1"
                                      >
                                        <img
                                          src="https://file.hstatic.net/200000525917/file/search-icon_61351aaf4f2a4ba0b163434492c75c0d.svg"
                                          width="16"
                                          height="16"
                                          alt="Btn Quickview"
                                          title="Btn Quickview"
                                        />
                                      </button>
                                    </div>

                                    <div class="atc-loop d-flex js-center mg-top-auto">
                                      <button
                                        onclick="window.wd.scofield.addtocartloop('true','1128045357','/products/quan-jeans-procool-icondenim-coolmax-performance-slim-jeans',event,'1056302979')"
                                        class="atc-mb-loop"
                                        type="button"
                                        tabindex="-1"
                                      >
                                        <span class="atc-text">
                                          Thêm vào giỏ
                                        </span>
                                        <span class="bd-cart">
                                          <img
                                            class="atc-default"
                                            width="20"
                                            height="20"
                                            src="//theme.hstatic.net/1000253775/1001342694/14/add-to-cart.svg?v=830"
                                            alt="Thêm vào giỏ"
                                          />
                                          <img
                                            class="atc-hv"
                                            width="20"
                                            height="20"
                                            src="//theme.hstatic.net/1000253775/1001342694/14/add-to-cart-hv.svg?v=830"
                                            alt="Thêm vào giỏ"
                                          />
                                        </span>
                                      </button>
                                    </div>
                                  </div>

                                  <div class="label_product-tag label-tag label-quyen">
                                    <div class="label_wrapper">Siêu Mát</div>
                                  </div>
                                  <div class="product-detail">
                                    <h3 class="pro-name">
                                      <a
                                        href="/products/quan-jeans-procool-icondenim-coolmax-performance-slim-jeans"
                                        title="Quần Jean Nam Procool ICONDENIM CoolMax Sand Blue Slim"
                                        tabindex="-1"
                                      >
                                        Quần Jean Nam Procool ICONDENIM CoolMax
                                        Sand Blue Slim
                                      </a>
                                    </h3>
                                    <div class="box-pro-prices">
                                      <div class="pro-price">
                                        <span> 689,000₫ </span>
                                      </div>
                                      <ul class="hash-tag-loop d-flex"></ul>
                                    </div>
                                  </div>
                                </div>
                                <h1></h1>
                              </div>
                              <div
                                class="d-flex-column item-owl pd-left--15 slick-slide"
                                tabindex="-1"
                                role="tabpanel"
                                id="slick-slide09"
                                style={{ width: "102px" }}
                                data-slick-index="9"
                                aria-hidden="true"
                                aria-describedby="slick-slide-control03"
                              >
                                <div class="product-block item">
                                  <div
                                    class="product-img has-hover"
                                    data-frame="Vớ hangmoi FD-TUYEN KIỂM KÊ sale10 SPM (-50) ONPOS ONWEB SPEE2024-12-31 DOUBLEDAY55"
                                  >
                                    <a
                                      href="/products/vo-co-thap-icondenim-monotrio-socks"
                                      title="Vớ Cổ Ngắn Nam ICONDENIM MonoTrio Socks"
                                      class="image-resize"
                                      tabindex="-1"
                                    >
                                      <div class="product-sale">
                                        <span>-%</span>
                                      </div>
                                      <picture>
                                        <source
                                          media="(max-width: 480px)"
                                          data-srcset="//product.hstatic.net/1000253775/product/160_vo_036-7_3f33b7c2fb994a87bc712e416c0c8ee9_large.jpg"
                                          srcset="
                                                    //product.hstatic.net/1000253775/product/160_vo_036-7_3f33b7c2fb994a87bc712e416c0c8ee9_large.jpg
                                                "
                                        />
                                        <source
                                          media="(min-width: 481px)"
                                          data-srcset="//product.hstatic.net/1000253775/product/160_vo_036-7_3f33b7c2fb994a87bc712e416c0c8ee9_large.jpg"
                                          srcset="
                                                    //product.hstatic.net/1000253775/product/160_vo_036-7_3f33b7c2fb994a87bc712e416c0c8ee9_large.jpg
                                                "
                                        />
                                        <img
                                          class="dt-width-100 img-first ls-is-cached lazyloaded"
                                          loading="lazy"
                                          width="260"
                                          height="260"
                                          src="//product.hstatic.net/1000253775/product/160_vo_036-7_3f33b7c2fb994a87bc712e416c0c8ee9_large.jpg"
                                          alt="Vớ Cổ Ngắn Nam ICONDENIM MonoTrio Socks"
                                          title="Vớ Cổ Ngắn Nam ICONDENIM MonoTrio Socks"
                                        />
                                      </picture>
                                      <picture>
                                        <source
                                          media="(min-width: 481px)"
                                          data-srcset="//product.hstatic.net/1000253775/product/160_vo_036-9_757a323a5d73444c87daf3a3d8288fb4_large.jpg"
                                          srcset="
                                                    //product.hstatic.net/1000253775/product/160_vo_036-9_757a323a5d73444c87daf3a3d8288fb4_large.jpg
                                                "
                                        />
                                        <img
                                          class="dt-width-100 img-hover hidden-xs ls-is-cached lazyloaded"
                                          loading="lazy"
                                          width="260"
                                          height="260"
                                          src="//product.hstatic.net/1000253775/product/160_vo_036-9_757a323a5d73444c87daf3a3d8288fb4_large.jpg"
                                          alt="Vớ Cổ Ngắn Nam ICONDENIM MonoTrio Socks"
                                          title="Vớ Cổ Ngắn Nam ICONDENIM MonoTrio Socks"
                                        />
                                      </picture>
                                    </a>

                                    <div class="button-loop-pro hidden-xs hidden-sm">
                                      <button
                                        class="btn-quickview"
                                        onclick="window.wd.scofield.quickview('/products/vo-co-thap-icondenim-monotrio-socks?view=quickview-nochoose')"
                                        type="button"
                                        tabindex="-1"
                                      >
                                        <img
                                          src="https://file.hstatic.net/200000525917/file/search-icon_61351aaf4f2a4ba0b163434492c75c0d.svg"
                                          width="16"
                                          height="16"
                                          alt="Btn Quickview"
                                          title="Btn Quickview"
                                        />
                                      </button>
                                    </div>

                                    <div class="atc-loop d-flex js-center mg-top-auto">
                                      <button
                                        onclick="window.wd.scofield.addtocartloop('true','1125568839','/products/vo-co-thap-icondenim-monotrio-socks',event,'1055649693')"
                                        class="atc-mb-loop"
                                        type="button"
                                        tabindex="-1"
                                      >
                                        <span class="atc-text">
                                          Thêm vào giỏ
                                        </span>
                                        <span class="bd-cart">
                                          <img
                                            class="atc-default"
                                            width="20"
                                            height="20"
                                            src="//theme.hstatic.net/1000253775/1001342694/14/add-to-cart.svg?v=830"
                                            alt="Thêm vào giỏ"
                                          />
                                          <img
                                            class="atc-hv"
                                            width="20"
                                            height="20"
                                            src="//theme.hstatic.net/1000253775/1001342694/14/add-to-cart-hv.svg?v=830"
                                            alt="Thêm vào giỏ"
                                          />
                                        </span>
                                      </button>
                                    </div>
                                  </div>

                                  <div class="label_product-tag label-tag label-outlet">
                                    <div class="label_wrapper">Sale</div>
                                  </div>

                                  <div class="product-detail">
                                    <h3 class="pro-name">
                                      <a
                                        href="/products/vo-co-thap-icondenim-monotrio-socks"
                                        title="Vớ Cổ Ngắn Nam ICONDENIM MonoTrio Socks"
                                        tabindex="-1"
                                      >
                                        Vớ Cổ Ngắn Nam ICONDENIM MonoTrio Socks
                                      </a>
                                    </h3>
                                    <div class="box-pro-prices">
                                      <div class="pro-price-sale">
                                        <span>25,000₫</span>
                                        <del class="compare-price">29,000₫</del>

                                        <div class="label_product-discount label-sale">
                                          <div class="label_wrapper">14%</div>
                                        </div>
                                      </div>
                                      <ul class="hash-tag-loop d-flex"></ul>
                                    </div>
                                  </div>
                                </div>
                                <h1></h1>
                              </div>
                              <div
                                class="d-flex-column item-owl pd-left--15 slick-slide"
                                tabindex="-1"
                                role="tabpanel"
                                id="slick-slide010"
                                aria-describedby="slick-slide-control02"
                                style={{ width: "102px" }}
                                data-slick-index="10"
                                aria-hidden="true"
                              >
                                <div class="product-block item">
                                  <div
                                    class="product-img has-hover"
                                    data-frame="hangmoi FD-THUONG KIỂM KÊ Underwear ONPOS HÀNGCHƯAVỀ onweb SPM (-50) sale10 SPEE2024-01-23 RS1"
                                  >
                                    <a
                                      href="/products/quan-boxer-icondenim-with-logo"
                                      title="Quần Boxer Extra-cool ICONDENIM With Logo"
                                      class="image-resize"
                                      tabindex="-1"
                                    >
                                      <picture>
                                        <source
                                          media="(max-width: 480px)"
                                          data-srcset="//product.hstatic.net/1000253775/product/160_boxer_34-10_f7e8c4864ac44901a7bd101560ecf48f_large.jpg"
                                          srcset="
                                                    //product.hstatic.net/1000253775/product/160_boxer_34-10_f7e8c4864ac44901a7bd101560ecf48f_large.jpg
                                                "
                                        />
                                        <source
                                          media="(min-width: 481px)"
                                          data-srcset="//product.hstatic.net/1000253775/product/160_boxer_34-10_f7e8c4864ac44901a7bd101560ecf48f_large.jpg"
                                          srcset="
                                                    //product.hstatic.net/1000253775/product/160_boxer_34-10_f7e8c4864ac44901a7bd101560ecf48f_large.jpg
                                                "
                                        />
                                        <img
                                          class="dt-width-100 img-first ls-is-cached lazyloaded"
                                          loading="lazy"
                                          width="260"
                                          height="260"
                                          src="//product.hstatic.net/1000253775/product/160_boxer_34-10_f7e8c4864ac44901a7bd101560ecf48f_large.jpg"
                                          alt="Quần Boxer Extra-cool ICONDENIM With Logo"
                                          title="Quần Boxer Extra-cool ICONDENIM With Logo"
                                        />
                                      </picture>
                                      <picture>
                                        <source
                                          media="(min-width: 481px)"
                                          data-srcset="//product.hstatic.net/1000253775/product/160_boxer_34-13_66086845bfd44c0b992808a3ec014d97_large.jpg"
                                          srcset="
                                                    //product.hstatic.net/1000253775/product/160_boxer_34-13_66086845bfd44c0b992808a3ec014d97_large.jpg
                                                "
                                        />
                                        <img
                                          class="dt-width-100 img-hover hidden-xs ls-is-cached lazyloaded"
                                          loading="lazy"
                                          width="260"
                                          height="260"
                                          src="//product.hstatic.net/1000253775/product/160_boxer_34-13_66086845bfd44c0b992808a3ec014d97_large.jpg"
                                          alt="Quần Boxer Extra-cool ICONDENIM With Logo"
                                          title="Quần Boxer Extra-cool ICONDENIM With Logo"
                                        />
                                      </picture>
                                    </a>

                                    <div class="button-loop-pro hidden-xs hidden-sm">
                                      <button
                                        class="btn-quickview"
                                        onclick="window.wd.scofield.quickview('/products/quan-boxer-icondenim-with-logo?view=quickview-nochoose')"
                                        type="button"
                                        tabindex="-1"
                                      >
                                        <img
                                          src="https://file.hstatic.net/200000525917/file/search-icon_61351aaf4f2a4ba0b163434492c75c0d.svg"
                                          width="16"
                                          height="16"
                                          alt="Btn Quickview"
                                          title="Btn Quickview"
                                        />
                                      </button>
                                    </div>

                                    <div class="atc-loop d-flex js-center mg-top-auto">
                                      <button
                                        onclick="window.wd.scofield.addtocartloop('true','1117512509','/products/quan-boxer-icondenim-with-logo',event,'1052269941')"
                                        class="atc-mb-loop"
                                        type="button"
                                        tabindex="-1"
                                      >
                                        <span class="atc-text">
                                          Thêm vào giỏ
                                        </span>
                                        <span class="bd-cart">
                                          <img
                                            class="atc-default"
                                            width="20"
                                            height="20"
                                            src="//theme.hstatic.net/1000253775/1001342694/14/add-to-cart.svg?v=830"
                                            alt="Thêm vào giỏ"
                                          />
                                          <img
                                            class="atc-hv"
                                            width="20"
                                            height="20"
                                            src="//theme.hstatic.net/1000253775/1001342694/14/add-to-cart-hv.svg?v=830"
                                            alt="Thêm vào giỏ"
                                          />
                                        </span>
                                      </button>
                                    </div>
                                  </div>

                                  <div class="label_product_new">
                                    <div class="label_wrapper">Hàng Mới</div>
                                  </div>

                                  <div class="product-detail">
                                    <h3 class="pro-name">
                                      <a
                                        href="/products/quan-boxer-icondenim-with-logo"
                                        title="Quần Boxer Extra-cool ICONDENIM With Logo"
                                        tabindex="-1"
                                      >
                                        Quần Boxer Extra-cool ICONDENIM With
                                        Logo
                                      </a>
                                    </h3>
                                    <div class="box-pro-prices">
                                      <div class="pro-price">
                                        <span> 120,000₫ </span>
                                      </div>
                                      <ul class="hash-tag-loop d-flex"></ul>
                                    </div>
                                  </div>
                                </div>
                                <h1></h1>
                              </div>
                              <div
                                class="d-flex-column item-owl pd-left--15 slick-slide"
                                tabindex="-1"
                                role="tabpanel"
                                id="slick-slide011"
                                style={{ width: "102px" }}
                                data-slick-index="11"
                                aria-hidden="true"
                              >
                                <div class="product-block item">
                                  <div
                                    class="product-img has-hover"
                                    data-frame="KIỂM KÊ FD-TON 23bs SPM (-50) sale10 RS2 RS1 fram1 frame1 QKNG RS3 SPEE2024-05-30 BSSAN BOSUA"
                                  >
                                    <a
                                      href="/products/quan-boxer-icondenim-coolmax"
                                      title="Quần Boxer Nam ICONDENIM Coolmax"
                                      class="image-resize"
                                      tabindex="-1"
                                    >
                                      <picture>
                                        <source
                                          media="(max-width: 480px)"
                                          data-srcset="//product.hstatic.net/1000253775/product/160_boxer_3m_16-12_ed7c5c1a0b8c46cdbcd880aaca3dc864_large.jpg"
                                          srcset="
                                                    //product.hstatic.net/1000253775/product/160_boxer_3m_16-12_ed7c5c1a0b8c46cdbcd880aaca3dc864_large.jpg
                                                "
                                        />
                                        <source
                                          media="(min-width: 481px)"
                                          data-srcset="//product.hstatic.net/1000253775/product/160_boxer_3m_16-12_ed7c5c1a0b8c46cdbcd880aaca3dc864_large.jpg"
                                          srcset="
                                                    //product.hstatic.net/1000253775/product/160_boxer_3m_16-12_ed7c5c1a0b8c46cdbcd880aaca3dc864_large.jpg
                                                "
                                        />
                                        <img
                                          class="dt-width-100 img-first ls-is-cached lazyloaded"
                                          loading="lazy"
                                          width="260"
                                          height="260"
                                          src="//product.hstatic.net/1000253775/product/160_boxer_3m_16-12_ed7c5c1a0b8c46cdbcd880aaca3dc864_large.jpg"
                                          alt="Quần Boxer Nam ICONDENIM Coolmax"
                                          title="Quần Boxer Nam ICONDENIM Coolmax"
                                        />
                                      </picture>
                                      <picture>
                                        <source
                                          media="(min-width: 481px)"
                                          data-srcset="//product.hstatic.net/1000253775/product/160_boxer_3m_16-6_125328f27fdb481fa4994183cf9cfc81_large.jpg"
                                          srcset="
                                                    //product.hstatic.net/1000253775/product/160_boxer_3m_16-6_125328f27fdb481fa4994183cf9cfc81_large.jpg
                                                "
                                        />
                                        <img
                                          class="dt-width-100 img-hover hidden-xs ls-is-cached lazyloaded"
                                          loading="lazy"
                                          width="260"
                                          height="260"
                                          src="//product.hstatic.net/1000253775/product/160_boxer_3m_16-6_125328f27fdb481fa4994183cf9cfc81_large.jpg"
                                          alt="Quần Boxer Nam ICONDENIM Coolmax"
                                          title="Quần Boxer Nam ICONDENIM Coolmax"
                                        />
                                      </picture>
                                    </a>

                                    <div class="button-loop-pro hidden-xs hidden-sm">
                                      <button
                                        class="btn-quickview"
                                        onclick="window.wd.scofield.quickview('/products/quan-boxer-icondenim-coolmax?view=quickview-nochoose')"
                                        type="button"
                                        tabindex="-1"
                                      >
                                        <img
                                          src="https://file.hstatic.net/200000525917/file/search-icon_61351aaf4f2a4ba0b163434492c75c0d.svg"
                                          width="16"
                                          height="16"
                                          alt="Btn Quickview"
                                          title="Btn Quickview"
                                        />
                                      </button>
                                    </div>

                                    <div class="atc-loop d-flex js-center mg-top-auto">
                                      <button
                                        onclick="window.wd.scofield.addtocartloop('true','1097598881','/products/quan-boxer-icondenim-coolmax',event,'1044327007')"
                                        class="atc-mb-loop"
                                        type="button"
                                        tabindex="-1"
                                      >
                                        <span class="atc-text">
                                          Thêm vào giỏ
                                        </span>
                                        <span class="bd-cart">
                                          <img
                                            class="atc-default"
                                            width="20"
                                            height="20"
                                            src="//theme.hstatic.net/1000253775/1001342694/14/add-to-cart.svg?v=830"
                                            alt="Thêm vào giỏ"
                                          />
                                          <img
                                            class="atc-hv"
                                            width="20"
                                            height="20"
                                            src="//theme.hstatic.net/1000253775/1001342694/14/add-to-cart-hv.svg?v=830"
                                            alt="Thêm vào giỏ"
                                          />
                                        </span>
                                      </button>
                                    </div>
                                  </div>

                                  <div class="label_product_new">
                                    <div class="label_wrapper">Hàng Mới</div>
                                  </div>

                                  <div class="product-detail">
                                    <h3 class="pro-name">
                                      <a
                                        href="/products/quan-boxer-icondenim-coolmax"
                                        title="Quần Boxer Nam ICONDENIM Coolmax"
                                        tabindex="-1"
                                      >
                                        Quần Boxer Nam ICONDENIM Coolmax
                                      </a>
                                    </h3>
                                    <div class="box-pro-prices">
                                      <div class="pro-price">
                                        <span> 100,000₫ </span>
                                      </div>
                                      <ul class="hash-tag-loop d-flex"></ul>
                                    </div>
                                  </div>
                                </div>
                                <h1></h1>
                              </div>
                              <div
                                class="d-flex-column item-owl pd-left--15 slick-slide slick-cloned"
                                tabindex="-1"
                                role="tabpanel"
                                aria-describedby="slick-slide-control00"
                                style={{ width: "102px" }}
                                data-slick-index="12"
                                aria-hidden="true"
                              >
                                <div class="product-block item">
                                  <div
                                    class="product-img has-hover"
                                    data-frame="hangmoi Áo polo FD-YUNA KIỂM KÊ SPM (-50) sale10 ONPOS PROCOOL SPEE2024-09-17 ONWEB PROCOOLAO video_JwQMhTtioUQ do_he"
                                  >
                                    <a
                                      href="/products/ao-polo-procool-icondenim-slim-fit-seam-sealing"
                                      title="Áo Polo Nam Procool ICONDENIM Seam Sealing"
                                      class="image-resize"
                                      tabindex="-1"
                                    >
                                      <picture>
                                        <source
                                          media="(max-width: 480px)"
                                          data-srcset="//product.hstatic.net/1000253775/product/z5848580872178_fe8bffd627976d356428181577f01aba_47b3e153206847b38b301a3ca8b5c0bc_large.jpg"
                                          srcset="
                                                    //product.hstatic.net/1000253775/product/z5848580872178_fe8bffd627976d356428181577f01aba_47b3e153206847b38b301a3ca8b5c0bc_large.jpg
                                                "
                                        />
                                        <source
                                          media="(min-width: 481px)"
                                          data-srcset="//product.hstatic.net/1000253775/product/z5848580872178_fe8bffd627976d356428181577f01aba_47b3e153206847b38b301a3ca8b5c0bc_large.jpg"
                                          srcset="
                                                    //product.hstatic.net/1000253775/product/z5848580872178_fe8bffd627976d356428181577f01aba_47b3e153206847b38b301a3ca8b5c0bc_large.jpg
                                                "
                                        />
                                        <img
                                          class="dt-width-100 img-first ls-is-cached lazyloaded"
                                          loading="lazy"
                                          width="260"
                                          height="260"
                                          src="//product.hstatic.net/1000253775/product/z5848580872178_fe8bffd627976d356428181577f01aba_47b3e153206847b38b301a3ca8b5c0bc_large.jpg"
                                          alt="Áo Polo Nam Procool ICONDENIM Seam Sealing"
                                          title="Áo Polo Nam Procool ICONDENIM Seam Sealing"
                                        />
                                      </picture>
                                      <picture>
                                        <source
                                          media="(min-width: 481px)"
                                          data-srcset="//product.hstatic.net/1000253775/product/z5816305453622_a796581509ba47578f83b09fef4bbd7c_e1d3464940214462a9414aa563a24495_large.jpg"
                                          srcset="
                                                    //product.hstatic.net/1000253775/product/z5816305453622_a796581509ba47578f83b09fef4bbd7c_e1d3464940214462a9414aa563a24495_large.jpg
                                                "
                                        />
                                        <img
                                          class="dt-width-100 img-hover hidden-xs ls-is-cached lazyloaded"
                                          loading="lazy"
                                          width="260"
                                          height="260"
                                          src="//product.hstatic.net/1000253775/product/z5816305453622_a796581509ba47578f83b09fef4bbd7c_e1d3464940214462a9414aa563a24495_large.jpg"
                                          alt="Áo Polo Nam Procool ICONDENIM Seam Sealing"
                                          title="Áo Polo Nam Procool ICONDENIM Seam Sealing"
                                        />
                                      </picture>
                                    </a>

                                    <div class="button-loop-pro hidden-xs hidden-sm">
                                      <button
                                        class="btn-quickview"
                                        onclick="window.wd.scofield.quickview('/products/ao-polo-procool-icondenim-slim-fit-seam-sealing?view=quickview-nochoose')"
                                        type="button"
                                        tabindex="-1"
                                      >
                                        <img
                                          src="https://file.hstatic.net/200000525917/file/search-icon_61351aaf4f2a4ba0b163434492c75c0d.svg"
                                          width="16"
                                          height="16"
                                          alt="Btn Quickview"
                                          title="Btn Quickview"
                                        />
                                      </button>
                                    </div>

                                    <div class="atc-loop d-flex js-center mg-top-auto">
                                      <button
                                        onclick="window.wd.scofield.addtocartloop('true','1126491325','/products/ao-polo-procool-icondenim-slim-fit-seam-sealing',event,'1055966950')"
                                        class="atc-mb-loop"
                                        type="button"
                                        tabindex="-1"
                                      >
                                        <span class="atc-text">
                                          Thêm vào giỏ
                                        </span>
                                        <span class="bd-cart">
                                          <img
                                            class="atc-default"
                                            width="20"
                                            height="20"
                                            src="//theme.hstatic.net/1000253775/1001342694/14/add-to-cart.svg?v=830"
                                            alt="Thêm vào giỏ"
                                          />
                                          <img
                                            class="atc-hv"
                                            width="20"
                                            height="20"
                                            src="//theme.hstatic.net/1000253775/1001342694/14/add-to-cart-hv.svg?v=830"
                                            alt="Thêm vào giỏ"
                                          />
                                        </span>
                                      </button>
                                    </div>
                                  </div>

                                  <div class="label_product-tag label-tag label-quyen">
                                    <div class="label_wrapper">Siêu Mát</div>
                                  </div>
                                  <div class="product-detail">
                                    <h3 class="pro-name">
                                      <a
                                        href="/products/ao-polo-procool-icondenim-slim-fit-seam-sealing"
                                        title="Áo Polo Nam Procool ICONDENIM Seam Sealing"
                                        tabindex="-1"
                                      >
                                        Áo Polo Nam Procool ICONDENIM Seam
                                        Sealing
                                      </a>
                                    </h3>
                                    <div class="box-pro-prices">
                                      <div class="pro-price">
                                        <span> 389,000₫ </span>
                                      </div>
                                      <ul class="hash-tag-loop d-flex"></ul>
                                    </div>
                                  </div>
                                </div>
                                <h1></h1>
                              </div>
                              <div
                                class="d-flex-column item-owl pd-left--15 slick-slide slick-cloned"
                                tabindex="-1"
                                role="tabpanel"
                                style={{ width: "102px" }}
                                data-slick-index="13"
                                aria-hidden="true"
                              >
                                <div class="product-block item">
                                  <div
                                    class="product-img has-hover"
                                    data-frame="Áo thun FD-YUNA hangmoi KIỂM KÊ SPM (-50) sale10 ONPOS PROCOOL SPEE2024-09-17 ONWEB PROCOOLAO video_7e-wRbNInJk do_he"
                                  >
                                    <a
                                      href="/products/ao-thun-procool-icondenim-slimfit-seam-sealing"
                                      title="Áo Thun Nam Procool ICONDENIM Seam Sealing"
                                      class="image-resize"
                                      tabindex="-1"
                                    >
                                      <picture>
                                        <source
                                          media="(max-width: 480px)"
                                          data-srcset="//product.hstatic.net/1000253775/product/z5848580891695_246f48e5160587778dbbe578637f80de_5a388da3f72c40eba1c9719142ebdb85_large.jpg"
                                          srcset="
                                                    //product.hstatic.net/1000253775/product/z5848580891695_246f48e5160587778dbbe578637f80de_5a388da3f72c40eba1c9719142ebdb85_large.jpg
                                                "
                                        />
                                        <source
                                          media="(min-width: 481px)"
                                          data-srcset="//product.hstatic.net/1000253775/product/z5848580891695_246f48e5160587778dbbe578637f80de_5a388da3f72c40eba1c9719142ebdb85_large.jpg"
                                          srcset="
                                                    //product.hstatic.net/1000253775/product/z5848580891695_246f48e5160587778dbbe578637f80de_5a388da3f72c40eba1c9719142ebdb85_large.jpg
                                                "
                                        />
                                        <img
                                          class="dt-width-100 img-first ls-is-cached lazyloaded"
                                          loading="lazy"
                                          width="260"
                                          height="260"
                                          src="//product.hstatic.net/1000253775/product/z5848580891695_246f48e5160587778dbbe578637f80de_5a388da3f72c40eba1c9719142ebdb85_large.jpg"
                                          alt="Áo Thun Nam Procool ICONDENIM Seam Sealing"
                                          title="Áo Thun Nam Procool ICONDENIM Seam Sealing"
                                        />
                                      </picture>
                                      <picture>
                                        <source
                                          media="(min-width: 481px)"
                                          data-srcset="//product.hstatic.net/1000253775/product/z5816310391696_d9c5d17f2f40163af0995d2488023a23_42cd0d16f5f44448a517a9b7f3d9092b_large.jpg"
                                          srcset="
                                                    //product.hstatic.net/1000253775/product/z5816310391696_d9c5d17f2f40163af0995d2488023a23_42cd0d16f5f44448a517a9b7f3d9092b_large.jpg
                                                "
                                        />
                                        <img
                                          class="dt-width-100 img-hover hidden-xs ls-is-cached lazyloaded"
                                          loading="lazy"
                                          width="260"
                                          height="260"
                                          src="//product.hstatic.net/1000253775/product/z5816310391696_d9c5d17f2f40163af0995d2488023a23_42cd0d16f5f44448a517a9b7f3d9092b_large.jpg"
                                          alt="Áo Thun Nam Procool ICONDENIM Seam Sealing"
                                          title="Áo Thun Nam Procool ICONDENIM Seam Sealing"
                                        />
                                      </picture>
                                    </a>

                                    <div class="button-loop-pro hidden-xs hidden-sm">
                                      <button
                                        class="btn-quickview"
                                        onclick="window.wd.scofield.quickview('/products/ao-thun-procool-icondenim-slimfit-seam-sealing?view=quickview-nochoose')"
                                        type="button"
                                        tabindex="-1"
                                      >
                                        <img
                                          src="https://file.hstatic.net/200000525917/file/search-icon_61351aaf4f2a4ba0b163434492c75c0d.svg"
                                          width="16"
                                          height="16"
                                          alt="Btn Quickview"
                                          title="Btn Quickview"
                                        />
                                      </button>
                                    </div>

                                    <div class="atc-loop d-flex js-center mg-top-auto">
                                      <button
                                        onclick="window.wd.scofield.addtocartloop('true','1126492715','/products/ao-thun-procool-icondenim-slimfit-seam-sealing',event,'1055967877')"
                                        class="atc-mb-loop"
                                        type="button"
                                        tabindex="-1"
                                      >
                                        <span class="atc-text">
                                          Thêm vào giỏ
                                        </span>
                                        <span class="bd-cart">
                                          <img
                                            class="atc-default"
                                            width="20"
                                            height="20"
                                            src="//theme.hstatic.net/1000253775/1001342694/14/add-to-cart.svg?v=830"
                                            alt="Thêm vào giỏ"
                                          />
                                          <img
                                            class="atc-hv"
                                            width="20"
                                            height="20"
                                            src="//theme.hstatic.net/1000253775/1001342694/14/add-to-cart-hv.svg?v=830"
                                            alt="Thêm vào giỏ"
                                          />
                                        </span>
                                      </button>
                                    </div>
                                  </div>

                                  <div class="label_product-tag label-tag label-quyen">
                                    <div class="label_wrapper">Siêu Mát</div>
                                  </div>
                                  <div class="product-detail">
                                    <h3 class="pro-name">
                                      <a
                                        href="/products/ao-thun-procool-icondenim-slimfit-seam-sealing"
                                        title="Áo Thun Nam Procool ICONDENIM Seam Sealing"
                                        tabindex="-1"
                                      >
                                        Áo Thun Nam Procool ICONDENIM Seam
                                        Sealing
                                      </a>
                                    </h3>
                                    <div class="box-pro-prices">
                                      <div class="pro-price">
                                        <span> 319,000₫ </span>
                                      </div>
                                      <ul class="hash-tag-loop d-flex"></ul>
                                    </div>
                                  </div>
                                </div>
                                <h1></h1>
                              </div>
                              <div
                                class="d-flex-column item-owl pd-left--15 slick-slide slick-cloned"
                                tabindex="-1"
                                role="tabpanel"
                                style={{ width: "102px" }}
                                data-slick-index="14"
                                aria-hidden="true"
                              >
                                <div class="product-block item">
                                  <div
                                    class="product-img has-hover"
                                    data-frame="hangmoi FD-THUONG Quần short KIỂM KÊ SPM (-50) sale10 PROCOOL SPEE2024-09-17 PROCOOLAO ONWEB do_he"
                                  >
                                    <a
                                      href="/products/quan-short-icondenim-strecth-hips-on-both-sides"
                                      title="Quần Short Nam Procool ICONDENIM Strecth Hips"
                                      class="image-resize"
                                      tabindex="-1"
                                    >
                                      <picture>
                                        <source
                                          media="(max-width: 480px)"
                                          data-srcset="//product.hstatic.net/1000253775/product/z5846943479467_53237a9f9ebe58a813eb9e828ea273fe_a5e1c88af73243fcbca81ebbed4f006a_large.jpg"
                                          srcset="
                                                    //product.hstatic.net/1000253775/product/z5846943479467_53237a9f9ebe58a813eb9e828ea273fe_a5e1c88af73243fcbca81ebbed4f006a_large.jpg
                                                "
                                        />
                                        <source
                                          media="(min-width: 481px)"
                                          data-srcset="//product.hstatic.net/1000253775/product/z5846943479467_53237a9f9ebe58a813eb9e828ea273fe_a5e1c88af73243fcbca81ebbed4f006a_large.jpg"
                                          srcset="
                                                    //product.hstatic.net/1000253775/product/z5846943479467_53237a9f9ebe58a813eb9e828ea273fe_a5e1c88af73243fcbca81ebbed4f006a_large.jpg
                                                "
                                        />
                                        <img
                                          class="dt-width-100 img-first ls-is-cached lazyloaded"
                                          loading="lazy"
                                          width="260"
                                          height="260"
                                          src="//product.hstatic.net/1000253775/product/z5846943479467_53237a9f9ebe58a813eb9e828ea273fe_a5e1c88af73243fcbca81ebbed4f006a_large.jpg"
                                          alt="Quần Short Nam Procool ICONDENIM Strecth Hips"
                                          title="Quần Short Nam Procool ICONDENIM Strecth Hips"
                                        />
                                      </picture>
                                      <picture>
                                        <source
                                          media="(min-width: 481px)"
                                          data-srcset="//product.hstatic.net/1000253775/product/1600051_0191b45e4878487d80effdaf0016a24e_large.png"
                                          srcset="
                                                    //product.hstatic.net/1000253775/product/1600051_0191b45e4878487d80effdaf0016a24e_large.png
                                                "
                                        />
                                        <img
                                          class="dt-width-100 img-hover hidden-xs ls-is-cached lazyloaded"
                                          loading="lazy"
                                          width="260"
                                          height="260"
                                          src="//product.hstatic.net/1000253775/product/1600051_0191b45e4878487d80effdaf0016a24e_large.png"
                                          alt="Quần Short Nam Procool ICONDENIM Strecth Hips"
                                          title="Quần Short Nam Procool ICONDENIM Strecth Hips"
                                        />
                                      </picture>
                                    </a>

                                    <div class="button-loop-pro hidden-xs hidden-sm">
                                      <button
                                        class="btn-quickview"
                                        onclick="window.wd.scofield.quickview('/products/quan-short-icondenim-strecth-hips-on-both-sides?view=quickview-nochoose')"
                                        type="button"
                                        tabindex="-1"
                                      >
                                        <img
                                          src="https://file.hstatic.net/200000525917/file/search-icon_61351aaf4f2a4ba0b163434492c75c0d.svg"
                                          width="16"
                                          height="16"
                                          alt="Btn Quickview"
                                          title="Btn Quickview"
                                        />
                                      </button>
                                    </div>

                                    <div class="atc-loop d-flex js-center mg-top-auto">
                                      <button
                                        onclick="window.wd.scofield.addtocartloop('true','1126497631','/products/quan-short-icondenim-strecth-hips-on-both-sides',event,'1055969609')"
                                        class="atc-mb-loop"
                                        type="button"
                                        tabindex="-1"
                                      >
                                        <span class="atc-text">
                                          Thêm vào giỏ
                                        </span>
                                        <span class="bd-cart">
                                          <img
                                            class="atc-default"
                                            width="20"
                                            height="20"
                                            src="//theme.hstatic.net/1000253775/1001342694/14/add-to-cart.svg?v=830"
                                            alt="Thêm vào giỏ"
                                          />
                                          <img
                                            class="atc-hv"
                                            width="20"
                                            height="20"
                                            src="//theme.hstatic.net/1000253775/1001342694/14/add-to-cart-hv.svg?v=830"
                                            alt="Thêm vào giỏ"
                                          />
                                        </span>
                                      </button>
                                    </div>
                                  </div>

                                  <div class="label_product-tag label-tag label-quyen">
                                    <div class="label_wrapper">Siêu Mát</div>
                                  </div>
                                  <div class="product-detail">
                                    <h3 class="pro-name">
                                      <a
                                        href="/products/quan-short-icondenim-strecth-hips-on-both-sides"
                                        title="Quần Short Nam Procool ICONDENIM Strecth Hips"
                                        tabindex="-1"
                                      >
                                        Quần Short Nam Procool ICONDENIM Strecth
                                        Hips
                                      </a>
                                    </h3>
                                    <div class="box-pro-prices">
                                      <div class="pro-price">
                                        <span> 349,000₫ </span>
                                      </div>
                                      <ul class="hash-tag-loop d-flex"></ul>
                                    </div>
                                  </div>
                                </div>
                                <h1></h1>
                              </div>
                              <div
                                class="d-flex-column item-owl pd-left--15 slick-slide slick-cloned"
                                tabindex="-1"
                                role="tabpanel"
                                style={{ width: "102px" }}
                                data-slick-index="15"
                                aria-hidden="true"
                              >
                                <div class="product-block item">
                                  <div
                                    class="product-img has-hover"
                                    data-frame="hangmoi Quần jean KIỂM KÊ SPM (-50) sale10 BLINDBOX video_lbD6-AbEdFg onpos JEANSTET PROCOOLJEANS SPEE2025-01-11 PROCOOL"
                                  >
                                    <a
                                      href="/products/quan-jean-procool-icondenim-coolmax-performance-indigo-slim"
                                      title="Quần Jean Nam Procool ICONDENIM CoolMax Indigo Slim"
                                      class="image-resize"
                                      tabindex="-1"
                                    >
                                      <picture>
                                        <source
                                          media="(max-width: 480px)"
                                          data-srcset="//product.hstatic.net/1000253775/product/qjid0228_3d8c17189f62421c95283bfbf7a75ffc_large.jpg"
                                          srcset="
                                                    //product.hstatic.net/1000253775/product/qjid0228_3d8c17189f62421c95283bfbf7a75ffc_large.jpg
                                                "
                                        />
                                        <source
                                          media="(min-width: 481px)"
                                          data-srcset="//product.hstatic.net/1000253775/product/qjid0228_3d8c17189f62421c95283bfbf7a75ffc_large.jpg"
                                          srcset="
                                                    //product.hstatic.net/1000253775/product/qjid0228_3d8c17189f62421c95283bfbf7a75ffc_large.jpg
                                                "
                                        />
                                        <img
                                          class="dt-width-100 img-first ls-is-cached lazyloaded"
                                          loading="lazy"
                                          width="260"
                                          height="260"
                                          src="//product.hstatic.net/1000253775/product/qjid0228_3d8c17189f62421c95283bfbf7a75ffc_large.jpg"
                                          alt="Quần Jean Nam Procool ICONDENIM CoolMax Indigo Slim"
                                          title="Quần Jean Nam Procool ICONDENIM CoolMax Indigo Slim"
                                        />
                                      </picture>
                                      <picture>
                                        <source
                                          media="(min-width: 481px)"
                                          data-srcset="//product.hstatic.net/1000253775/product/thiet_ke_chua_co_ten_6bab50d2e7724dfb9a82f8f564a1180a_large.png"
                                          srcset="
                                                    //product.hstatic.net/1000253775/product/thiet_ke_chua_co_ten_6bab50d2e7724dfb9a82f8f564a1180a_large.png
                                                "
                                        />
                                        <img
                                          class="dt-width-100 img-hover hidden-xs ls-is-cached lazyloaded"
                                          loading="lazy"
                                          width="260"
                                          height="260"
                                          src="//product.hstatic.net/1000253775/product/thiet_ke_chua_co_ten_6bab50d2e7724dfb9a82f8f564a1180a_large.png"
                                          alt="Quần Jean Nam Procool ICONDENIM CoolMax Indigo Slim"
                                          title="Quần Jean Nam Procool ICONDENIM CoolMax Indigo Slim"
                                        />
                                      </picture>
                                    </a>

                                    <div class="button-loop-pro hidden-xs hidden-sm">
                                      <button
                                        class="btn-quickview"
                                        onclick="window.wd.scofield.quickview('/products/quan-jean-procool-icondenim-coolmax-performance-indigo-slim?view=quickview-nochoose')"
                                        type="button"
                                        tabindex="-1"
                                      >
                                        <img
                                          src="https://file.hstatic.net/200000525917/file/search-icon_61351aaf4f2a4ba0b163434492c75c0d.svg"
                                          width="16"
                                          height="16"
                                          alt="Btn Quickview"
                                          title="Btn Quickview"
                                        />
                                      </button>
                                    </div>

                                    <div class="atc-loop d-flex js-center mg-top-auto">
                                      <button
                                        onclick="window.wd.scofield.addtocartloop('true','1141535025','/products/quan-jean-procool-icondenim-coolmax-performance-indigo-slim',event,'1062155354')"
                                        class="atc-mb-loop"
                                        type="button"
                                        tabindex="-1"
                                      >
                                        <span class="atc-text">
                                          Thêm vào giỏ
                                        </span>
                                        <span class="bd-cart">
                                          <img
                                            class="atc-default"
                                            width="20"
                                            height="20"
                                            src="//theme.hstatic.net/1000253775/1001342694/14/add-to-cart.svg?v=830"
                                            alt="Thêm vào giỏ"
                                          />
                                          <img
                                            class="atc-hv"
                                            width="20"
                                            height="20"
                                            src="//theme.hstatic.net/1000253775/1001342694/14/add-to-cart-hv.svg?v=830"
                                            alt="Thêm vào giỏ"
                                          />
                                        </span>
                                      </button>
                                    </div>
                                  </div>

                                  <div class="label_product-tag label-tag label-quyen">
                                    <div class="label_wrapper">Siêu Mát</div>
                                  </div>
                                  <div class="product-detail">
                                    <h3 class="pro-name">
                                      <a
                                        href="/products/quan-jean-procool-icondenim-coolmax-performance-indigo-slim"
                                        title="Quần Jean Nam Procool ICONDENIM CoolMax Indigo Slim"
                                        tabindex="-1"
                                      >
                                        Quần Jean Nam Procool ICONDENIM CoolMax
                                        Indigo Slim
                                      </a>
                                    </h3>
                                    <div class="box-pro-prices">
                                      <div class="pro-price">
                                        <span> 689,000₫ </span>
                                      </div>
                                      <ul class="hash-tag-loop d-flex"></ul>
                                    </div>
                                  </div>
                                </div>
                                <h1></h1>
                              </div>
                              <div
                                class="d-flex-column item-owl pd-left--15 slick-slide slick-cloned"
                                tabindex="-1"
                                role="tabpanel"
                                style={{ width: "102px" }}
                                data-slick-index="16"
                                aria-hidden="true"
                              >
                                <div class="product-block item">
                                  <div
                                    class="product-img has-hover"
                                    data-frame="hangmoi FD-YUNA Quần jean KIỂM KÊ SPM (-50) sale10 ONPOS PROCOOLJEANS PROCOOL SPEE2024-09-17 ONWEB video_lbD6-AbEdFg Form_Slim BLINDBOX JEANSTET jean_xanh do_he"
                                  >
                                    <a
                                      href="/products/quan-jeans-procool-icondenim-coolmax-performance-slim-jeans-4"
                                      title="Quần Jean Nam ProCOOL ICONDENIM CoolMax Light Blue Slim"
                                      class="image-resize"
                                      tabindex="-1"
                                    >
                                      <picture>
                                        <source
                                          media="(max-width: 480px)"
                                          data-srcset="//product.hstatic.net/1000253775/product/video_tensp_2af95e6277394f1289b9a2ef2f92961c_large.jpg"
                                          srcset="
                                                    //product.hstatic.net/1000253775/product/video_tensp_2af95e6277394f1289b9a2ef2f92961c_large.jpg
                                                "
                                        />
                                        <source
                                          media="(min-width: 481px)"
                                          data-srcset="//product.hstatic.net/1000253775/product/video_tensp_2af95e6277394f1289b9a2ef2f92961c_large.jpg"
                                          srcset="
                                                    //product.hstatic.net/1000253775/product/video_tensp_2af95e6277394f1289b9a2ef2f92961c_large.jpg
                                                "
                                        />
                                        <img
                                          class="dt-width-100 img-first ls-is-cached lazyloaded"
                                          loading="lazy"
                                          width="260"
                                          height="260"
                                          src="//product.hstatic.net/1000253775/product/video_tensp_2af95e6277394f1289b9a2ef2f92961c_large.jpg"
                                          alt="video_tensp"
                                          title="video_tensp"
                                        />
                                      </picture>
                                      <picture>
                                        <source
                                          media="(min-width: 481px)"
                                          data-srcset="//product.hstatic.net/1000253775/product/qjid0227_f75d4568994e4fe88c4dba752b7bbc38_large.png"
                                          srcset="
                                                    //product.hstatic.net/1000253775/product/qjid0227_f75d4568994e4fe88c4dba752b7bbc38_large.png
                                                "
                                        />
                                        <img
                                          class="dt-width-100 img-hover hidden-xs ls-is-cached lazyloaded"
                                          loading="lazy"
                                          width="260"
                                          height="260"
                                          src="//product.hstatic.net/1000253775/product/qjid0227_f75d4568994e4fe88c4dba752b7bbc38_large.png"
                                          alt="video_tensp"
                                          title="video_tensp"
                                        />
                                      </picture>
                                    </a>

                                    <div class="button-loop-pro hidden-xs hidden-sm">
                                      <button
                                        class="btn-quickview"
                                        onclick="window.wd.scofield.quickview('/products/quan-jeans-procool-icondenim-coolmax-performance-slim-jeans-4?view=quickview-nochoose')"
                                        type="button"
                                        tabindex="-1"
                                      >
                                        <img
                                          src="https://file.hstatic.net/200000525917/file/search-icon_61351aaf4f2a4ba0b163434492c75c0d.svg"
                                          width="16"
                                          height="16"
                                          alt="Btn Quickview"
                                          title="Btn Quickview"
                                        />
                                      </button>
                                    </div>

                                    <div class="atc-loop d-flex js-center mg-top-auto">
                                      <button
                                        onclick="window.wd.scofield.addtocartloop('true','1128050480','/products/quan-jeans-procool-icondenim-coolmax-performance-slim-jeans-4',event,'1056304675')"
                                        class="atc-mb-loop"
                                        type="button"
                                        tabindex="-1"
                                      >
                                        <span class="atc-text">
                                          Thêm vào giỏ
                                        </span>
                                        <span class="bd-cart">
                                          <img
                                            class="atc-default"
                                            width="20"
                                            height="20"
                                            src="//theme.hstatic.net/1000253775/1001342694/14/add-to-cart.svg?v=830"
                                            alt="Thêm vào giỏ"
                                          />
                                          <img
                                            class="atc-hv"
                                            width="20"
                                            height="20"
                                            src="//theme.hstatic.net/1000253775/1001342694/14/add-to-cart-hv.svg?v=830"
                                            alt="Thêm vào giỏ"
                                          />
                                        </span>
                                      </button>
                                    </div>
                                  </div>

                                  <div class="label_product-tag label-tag label-quyen">
                                    <div class="label_wrapper">Siêu Mát</div>
                                  </div>
                                  <div class="product-detail">
                                    <h3 class="pro-name">
                                      <a
                                        href="/products/quan-jeans-procool-icondenim-coolmax-performance-slim-jeans-4"
                                        title="Quần Jean Nam ProCOOL ICONDENIM CoolMax Light Blue Slim"
                                        tabindex="-1"
                                      >
                                        Quần Jean Nam ProCOOL ICONDENIM CoolMax
                                        Light Blue Slim
                                      </a>
                                    </h3>
                                    <div class="box-pro-prices">
                                      <div class="pro-price">
                                        <span> 689,000₫ </span>
                                      </div>
                                      <ul class="hash-tag-loop d-flex"></ul>
                                    </div>
                                  </div>
                                </div>
                                <h1></h1>
                              </div>
                              <div
                                class="d-flex-column item-owl pd-left--15 slick-slide slick-cloned"
                                tabindex="-1"
                                role="tabpanel"
                                aria-describedby="slick-slide-control01"
                                style={{ width: "102px" }}
                                data-slick-index="17"
                                aria-hidden="true"
                              >
                                <div class="product-block item">
                                  <div
                                    class="product-img has-hover"
                                    data-frame="Quần jean KIỂM KÊ hangmoi FD-YUNA sale10 SPM (-50) ONPOS PROCOOLJEANS PROCOOL SPEE2024-09-17 ONWEB Form_Slim BLINDBOX JEANSTET jean_den do_he video_jj1fskSYwdE"
                                  >
                                    <a
                                      href="/products/quan-jeans-procool-icondenim-coolmax-performance-slim-jeans-3"
                                      title="Quần Jean Nam Procool ICONDENIM CoolMax Black Slim"
                                      class="image-resize"
                                      tabindex="-1"
                                    >
                                      <picture>
                                        <source
                                          media="(max-width: 480px)"
                                          data-srcset="//product.hstatic.net/1000253775/product/video_tensp_83582f9c988b4f6e9771f7156782d3b4_large.jpg"
                                          srcset="
                                                    //product.hstatic.net/1000253775/product/video_tensp_83582f9c988b4f6e9771f7156782d3b4_large.jpg
                                                "
                                        />
                                        <source
                                          media="(min-width: 481px)"
                                          data-srcset="//product.hstatic.net/1000253775/product/video_tensp_83582f9c988b4f6e9771f7156782d3b4_large.jpg"
                                          srcset="
                                                    //product.hstatic.net/1000253775/product/video_tensp_83582f9c988b4f6e9771f7156782d3b4_large.jpg
                                                "
                                        />
                                        <img
                                          class="dt-width-100 img-first ls-is-cached lazyloaded"
                                          loading="lazy"
                                          width="260"
                                          height="260"
                                          src="//product.hstatic.net/1000253775/product/video_tensp_83582f9c988b4f6e9771f7156782d3b4_large.jpg"
                                          alt="video_tensp"
                                          title="video_tensp"
                                        />
                                      </picture>
                                      <picture>
                                        <source
                                          media="(min-width: 481px)"
                                          data-srcset="//product.hstatic.net/1000253775/product/quan-jeans-procool-icondenim-coolmax-performance-slim-jeans-3_43df5feab604417eb4100f081a97a326_large.jpg"
                                          srcset="
                                                    //product.hstatic.net/1000253775/product/quan-jeans-procool-icondenim-coolmax-performance-slim-jeans-3_43df5feab604417eb4100f081a97a326_large.jpg
                                                "
                                        />
                                        <img
                                          class="dt-width-100 img-hover hidden-xs ls-is-cached lazyloaded"
                                          loading="lazy"
                                          width="260"
                                          height="260"
                                          src="//product.hstatic.net/1000253775/product/quan-jeans-procool-icondenim-coolmax-performance-slim-jeans-3_43df5feab604417eb4100f081a97a326_large.jpg"
                                          alt="video_tensp"
                                          title="video_tensp"
                                        />
                                      </picture>
                                    </a>

                                    <div class="button-loop-pro hidden-xs hidden-sm">
                                      <button
                                        class="btn-quickview"
                                        onclick="window.wd.scofield.quickview('/products/quan-jeans-procool-icondenim-coolmax-performance-slim-jeans-3?view=quickview-nochoose')"
                                        type="button"
                                        tabindex="-1"
                                      >
                                        <img
                                          src="https://file.hstatic.net/200000525917/file/search-icon_61351aaf4f2a4ba0b163434492c75c0d.svg"
                                          width="16"
                                          height="16"
                                          alt="Btn Quickview"
                                          title="Btn Quickview"
                                        />
                                      </button>
                                    </div>

                                    <div class="atc-loop d-flex js-center mg-top-auto">
                                      <button
                                        onclick="window.wd.scofield.addtocartloop('true','1128046223','/products/quan-jeans-procool-icondenim-coolmax-performance-slim-jeans-3',event,'1056303326')"
                                        class="atc-mb-loop"
                                        type="button"
                                        tabindex="-1"
                                      >
                                        <span class="atc-text">
                                          Thêm vào giỏ
                                        </span>
                                        <span class="bd-cart">
                                          <img
                                            class="atc-default"
                                            width="20"
                                            height="20"
                                            src="//theme.hstatic.net/1000253775/1001342694/14/add-to-cart.svg?v=830"
                                            alt="Thêm vào giỏ"
                                          />
                                          <img
                                            class="atc-hv"
                                            width="20"
                                            height="20"
                                            src="//theme.hstatic.net/1000253775/1001342694/14/add-to-cart-hv.svg?v=830"
                                            alt="Thêm vào giỏ"
                                          />
                                        </span>
                                      </button>
                                    </div>
                                  </div>

                                  <div class="label_product-tag label-tag label-quyen">
                                    <div class="label_wrapper">Siêu Mát</div>
                                  </div>
                                  <div class="product-detail">
                                    <h3 class="pro-name">
                                      <a
                                        href="/products/quan-jeans-procool-icondenim-coolmax-performance-slim-jeans-3"
                                        title="Quần Jean Nam Procool ICONDENIM CoolMax Black Slim"
                                        tabindex="-1"
                                      >
                                        Quần Jean Nam Procool ICONDENIM CoolMax
                                        Black Slim
                                      </a>
                                    </h3>
                                    <div class="box-pro-prices">
                                      <div class="pro-price">
                                        <span> 689,000₫ </span>
                                      </div>
                                      <ul class="hash-tag-loop d-flex"></ul>
                                    </div>
                                  </div>
                                </div>
                                <h1></h1>
                              </div>
                              <div
                                class="d-flex-column item-owl pd-left--15 slick-slide slick-cloned"
                                tabindex="-1"
                                role="tabpanel"
                                style={{ width: "102px" }}
                                data-slick-index="18"
                                aria-hidden="true"
                              >
                                <div class="product-block item">
                                  <div
                                    class="product-img has-hover"
                                    data-frame="HÀNGCHƯAVỀ Quần jean hangmoi KIỂM KÊ FD-YUNA SPM (-50) sale10 ONPOS PROCOOLJEANS PROCOOL SPEE2024-09-17 ONWEB Form_Slim BLINDBOX JEANSTET jean_xanh do_he video_jj1fskSYwdE"
                                  >
                                    <a
                                      href="/products/quan-jeans-procool-icondenim-coolmax-performance-slim-jeans-2"
                                      title="Quần Jean Nam Procool ICONDENIM CoolMax Dark Blue Slim"
                                      class="image-resize"
                                      tabindex="-1"
                                    >
                                      <picture>
                                        <source
                                          media="(max-width: 480px)"
                                          data-srcset="//product.hstatic.net/1000253775/product/video_tensp_ab56f6fcea2c47c993860285f10fbbe2_large.jpg"
                                          srcset="
                                                    //product.hstatic.net/1000253775/product/video_tensp_ab56f6fcea2c47c993860285f10fbbe2_large.jpg
                                                "
                                        />
                                        <source
                                          media="(min-width: 481px)"
                                          data-srcset="//product.hstatic.net/1000253775/product/video_tensp_ab56f6fcea2c47c993860285f10fbbe2_large.jpg"
                                          srcset="
                                                    //product.hstatic.net/1000253775/product/video_tensp_ab56f6fcea2c47c993860285f10fbbe2_large.jpg
                                                "
                                        />
                                        <img
                                          class="dt-width-100 img-first ls-is-cached lazyloaded"
                                          loading="lazy"
                                          width="260"
                                          height="260"
                                          src="//product.hstatic.net/1000253775/product/video_tensp_ab56f6fcea2c47c993860285f10fbbe2_large.jpg"
                                          alt="video_tensp"
                                          title="video_tensp"
                                        />
                                      </picture>
                                      <picture>
                                        <source
                                          media="(min-width: 481px)"
                                          data-srcset="//product.hstatic.net/1000253775/product/qjid0225_1f6330dab0fc4c9c9a475fd2e46d3fb4_large.jpg"
                                          srcset="
                                                    //product.hstatic.net/1000253775/product/qjid0225_1f6330dab0fc4c9c9a475fd2e46d3fb4_large.jpg
                                                "
                                        />
                                        <img
                                          class="dt-width-100 img-hover hidden-xs ls-is-cached lazyloaded"
                                          loading="lazy"
                                          width="260"
                                          height="260"
                                          src="//product.hstatic.net/1000253775/product/qjid0225_1f6330dab0fc4c9c9a475fd2e46d3fb4_large.jpg"
                                          alt="video_tensp"
                                          title="video_tensp"
                                        />
                                      </picture>
                                    </a>

                                    <div class="button-loop-pro hidden-xs hidden-sm">
                                      <button
                                        class="btn-quickview"
                                        onclick="window.wd.scofield.quickview('/products/quan-jeans-procool-icondenim-coolmax-performance-slim-jeans-2?view=quickview-nochoose')"
                                        type="button"
                                        tabindex="-1"
                                      >
                                        <img
                                          src="https://file.hstatic.net/200000525917/file/search-icon_61351aaf4f2a4ba0b163434492c75c0d.svg"
                                          width="16"
                                          height="16"
                                          alt="Btn Quickview"
                                          title="Btn Quickview"
                                        />
                                      </button>
                                    </div>

                                    <div class="atc-loop d-flex js-center mg-top-auto">
                                      <button
                                        onclick="window.wd.scofield.addtocartloop('true','1128045992','/products/quan-jeans-procool-icondenim-coolmax-performance-slim-jeans-2',event,'1056303247')"
                                        class="atc-mb-loop"
                                        type="button"
                                        tabindex="-1"
                                      >
                                        <span class="atc-text">
                                          Thêm vào giỏ
                                        </span>
                                        <span class="bd-cart">
                                          <img
                                            class="atc-default"
                                            width="20"
                                            height="20"
                                            src="//theme.hstatic.net/1000253775/1001342694/14/add-to-cart.svg?v=830"
                                            alt="Thêm vào giỏ"
                                          />
                                          <img
                                            class="atc-hv"
                                            width="20"
                                            height="20"
                                            src="//theme.hstatic.net/1000253775/1001342694/14/add-to-cart-hv.svg?v=830"
                                            alt="Thêm vào giỏ"
                                          />
                                        </span>
                                      </button>
                                    </div>
                                  </div>

                                  <div class="label_product-tag label-tag label-quyen">
                                    <div class="label_wrapper">Siêu Mát</div>
                                  </div>
                                  <div class="product-detail">
                                    <h3 class="pro-name">
                                      <a
                                        href="/products/quan-jeans-procool-icondenim-coolmax-performance-slim-jeans-2"
                                        title="Quần Jean Nam Procool ICONDENIM CoolMax Dark Blue Slim"
                                        tabindex="-1"
                                      >
                                        Quần Jean Nam Procool ICONDENIM CoolMax
                                        Dark Blue Slim
                                      </a>
                                    </h3>
                                    <div class="box-pro-prices">
                                      <div class="pro-price">
                                        <span> 689,000₫ </span>
                                      </div>
                                      <ul class="hash-tag-loop d-flex"></ul>
                                    </div>
                                  </div>
                                </div>
                                <h1></h1>
                              </div>
                              <div
                                class="d-flex-column item-owl pd-left--15 slick-slide slick-cloned"
                                tabindex="-1"
                                role="tabpanel"
                                style={{ width: "102px" }}
                                data-slick-index="19"
                                aria-hidden="true"
                              >
                                <div class="product-block item">
                                  <div
                                    class="product-img has-hover"
                                    data-frame="FD-YUNA hangmoi Quần jean HÀNGCHƯAVỀ KIỂM KÊ sale10 SPM (-50) ONPOS PROCOOLJEANS PROCOOL SPEE2024-09-17 ONWEB video_lbD6-AbEdFg Form_Slim BLINDBOX JEANSTET jean_xanh do_he"
                                  >
                                    <a
                                      href="/products/quan-jeans-procool-icondenim-coolmax-performance-slim-jeans-1"
                                      title="Quần Jean Procool ICONDENIM CoolMax Performance Blue Slim"
                                      class="image-resize"
                                      tabindex="-1"
                                    >
                                      <picture>
                                        <source
                                          media="(max-width: 480px)"
                                          data-srcset="//product.hstatic.net/1000253775/product/video_tensp_f9029b9954c84df9b6f37fdb1f962fa4_large.jpg"
                                          srcset="
                                                    //product.hstatic.net/1000253775/product/video_tensp_f9029b9954c84df9b6f37fdb1f962fa4_large.jpg
                                                "
                                        />
                                        <source
                                          media="(min-width: 481px)"
                                          data-srcset="//product.hstatic.net/1000253775/product/video_tensp_f9029b9954c84df9b6f37fdb1f962fa4_large.jpg"
                                          srcset="
                                                    //product.hstatic.net/1000253775/product/video_tensp_f9029b9954c84df9b6f37fdb1f962fa4_large.jpg
                                                "
                                        />
                                        <img
                                          class="dt-width-100 img-first ls-is-cached lazyloaded"
                                          loading="lazy"
                                          width="260"
                                          height="260"
                                          src="//product.hstatic.net/1000253775/product/video_tensp_f9029b9954c84df9b6f37fdb1f962fa4_large.jpg"
                                          alt="video_tensp"
                                          title="video_tensp"
                                        />
                                      </picture>
                                      <picture>
                                        <source
                                          media="(min-width: 481px)"
                                          data-srcset="//product.hstatic.net/1000253775/product/160_jean_224-1_f581f666cf354045bf55f8dda5a7ff60_large.jpg"
                                          srcset="
                                                    //product.hstatic.net/1000253775/product/160_jean_224-1_f581f666cf354045bf55f8dda5a7ff60_large.jpg
                                                "
                                        />
                                        <img
                                          class="dt-width-100 img-hover hidden-xs ls-is-cached lazyloaded"
                                          loading="lazy"
                                          width="260"
                                          height="260"
                                          src="//product.hstatic.net/1000253775/product/160_jean_224-1_f581f666cf354045bf55f8dda5a7ff60_large.jpg"
                                          alt="video_tensp"
                                          title="video_tensp"
                                        />
                                      </picture>
                                    </a>

                                    <div class="button-loop-pro hidden-xs hidden-sm">
                                      <button
                                        class="btn-quickview"
                                        onclick="window.wd.scofield.quickview('/products/quan-jeans-procool-icondenim-coolmax-performance-slim-jeans-1?view=quickview-nochoose')"
                                        type="button"
                                        tabindex="-1"
                                      >
                                        <img
                                          src="https://file.hstatic.net/200000525917/file/search-icon_61351aaf4f2a4ba0b163434492c75c0d.svg"
                                          width="16"
                                          height="16"
                                          alt="Btn Quickview"
                                          title="Btn Quickview"
                                        />
                                      </button>
                                    </div>

                                    <div class="atc-loop d-flex js-center mg-top-auto">
                                      <button
                                        onclick="window.wd.scofield.addtocartloop('true','1128045732','/products/quan-jeans-procool-icondenim-coolmax-performance-slim-jeans-1',event,'1056303131')"
                                        class="atc-mb-loop"
                                        type="button"
                                        tabindex="-1"
                                      >
                                        <span class="atc-text">
                                          Thêm vào giỏ
                                        </span>
                                        <span class="bd-cart">
                                          <img
                                            class="atc-default"
                                            width="20"
                                            height="20"
                                            src="//theme.hstatic.net/1000253775/1001342694/14/add-to-cart.svg?v=830"
                                            alt="Thêm vào giỏ"
                                          />
                                          <img
                                            class="atc-hv"
                                            width="20"
                                            height="20"
                                            src="//theme.hstatic.net/1000253775/1001342694/14/add-to-cart-hv.svg?v=830"
                                            alt="Thêm vào giỏ"
                                          />
                                        </span>
                                      </button>
                                    </div>
                                  </div>

                                  <div class="label_product-tag label-tag label-quyen">
                                    <div class="label_wrapper">Siêu Mát</div>
                                  </div>
                                  <div class="product-detail">
                                    <h3 class="pro-name">
                                      <a
                                        href="/products/quan-jeans-procool-icondenim-coolmax-performance-slim-jeans-1"
                                        title="Quần Jean Procool ICONDENIM CoolMax Performance Blue Slim"
                                        tabindex="-1"
                                      >
                                        Quần Jean Procool ICONDENIM CoolMax
                                        Performance Blue Slim
                                      </a>
                                    </h3>
                                    <div class="box-pro-prices">
                                      <div class="pro-price">
                                        <span> 689,000₫ </span>
                                      </div>
                                      <ul class="hash-tag-loop d-flex"></ul>
                                    </div>
                                  </div>
                                </div>
                                <h1></h1>
                              </div>
                              <div
                                class="d-flex-column item-owl pd-left--15 slick-slide slick-cloned"
                                tabindex="-1"
                                role="tabpanel"
                                style={{ width: "102px" }}
                                data-slick-index="20"
                                aria-hidden="true"
                              >
                                <div class="product-block item">
                                  <div
                                    class="product-img has-hover"
                                    data-frame="KIỂM KÊ FD-YUNA Quần jean hangmoi sale10 SPM (-50) ONPOS PROCOOLJEANS PROCOOL SPEE2024-09-17 ONWEB video_lbD6-AbEdFg Form_Slim BLINDBOX JEANSTET do_he"
                                  >
                                    <a
                                      href="/products/quan-jeans-procool-icondenim-coolmax-performance-slim-jeans"
                                      title="Quần Jean Nam Procool ICONDENIM CoolMax Sand Blue Slim"
                                      class="image-resize"
                                      tabindex="-1"
                                    >
                                      <picture>
                                        <source
                                          media="(max-width: 480px)"
                                          data-srcset="//product.hstatic.net/1000253775/product/video_tensp_1770f50c493e4597bffbadfea5346f8d_large.jpg"
                                          srcset="
                                                    //product.hstatic.net/1000253775/product/video_tensp_1770f50c493e4597bffbadfea5346f8d_large.jpg
                                                "
                                        />
                                        <source
                                          media="(min-width: 481px)"
                                          data-srcset="//product.hstatic.net/1000253775/product/video_tensp_1770f50c493e4597bffbadfea5346f8d_large.jpg"
                                          srcset="
                                                    //product.hstatic.net/1000253775/product/video_tensp_1770f50c493e4597bffbadfea5346f8d_large.jpg
                                                "
                                        />
                                        <img
                                          class="dt-width-100 img-first lazyloading"
                                          loading="lazy"
                                          width="260"
                                          height="260"
                                          src="//product.hstatic.net/1000253775/product/video_tensp_1770f50c493e4597bffbadfea5346f8d_large.jpg"
                                          alt="video_tensp"
                                          title="video_tensp"
                                        />
                                      </picture>
                                      <picture>
                                        <source
                                          media="(min-width: 481px)"
                                          data-srcset="//product.hstatic.net/1000253775/product/091a8967_b46e0f08faf84beb80aae57ba0c69b38_large.png"
                                          srcset="
                                                    //product.hstatic.net/1000253775/product/091a8967_b46e0f08faf84beb80aae57ba0c69b38_large.png
                                                "
                                        />
                                        <img
                                          class="dt-width-100 img-hover hidden-xs lazyloading"
                                          loading="lazy"
                                          width="260"
                                          height="260"
                                          src="//product.hstatic.net/1000253775/product/091a8967_b46e0f08faf84beb80aae57ba0c69b38_large.png"
                                          alt="video_tensp"
                                          title="video_tensp"
                                        />
                                      </picture>
                                    </a>

                                    <div class="button-loop-pro hidden-xs hidden-sm">
                                      <button
                                        class="btn-quickview"
                                        onclick="window.wd.scofield.quickview('/products/quan-jeans-procool-icondenim-coolmax-performance-slim-jeans?view=quickview-nochoose')"
                                        type="button"
                                        tabindex="-1"
                                      >
                                        <img
                                          src="https://file.hstatic.net/200000525917/file/search-icon_61351aaf4f2a4ba0b163434492c75c0d.svg"
                                          width="16"
                                          height="16"
                                          alt="Btn Quickview"
                                          title="Btn Quickview"
                                        />
                                      </button>
                                    </div>

                                    <div class="atc-loop d-flex js-center mg-top-auto">
                                      <button
                                        onclick="window.wd.scofield.addtocartloop('true','1128045357','/products/quan-jeans-procool-icondenim-coolmax-performance-slim-jeans',event,'1056302979')"
                                        class="atc-mb-loop"
                                        type="button"
                                        tabindex="-1"
                                      >
                                        <span class="atc-text">
                                          Thêm vào giỏ
                                        </span>
                                        <span class="bd-cart">
                                          <img
                                            class="atc-default"
                                            width="20"
                                            height="20"
                                            src="//theme.hstatic.net/1000253775/1001342694/14/add-to-cart.svg?v=830"
                                            alt="Thêm vào giỏ"
                                          />
                                          <img
                                            class="atc-hv"
                                            width="20"
                                            height="20"
                                            src="//theme.hstatic.net/1000253775/1001342694/14/add-to-cart-hv.svg?v=830"
                                            alt="Thêm vào giỏ"
                                          />
                                        </span>
                                      </button>
                                    </div>
                                  </div>

                                  <div class="label_product-tag label-tag label-quyen">
                                    <div class="label_wrapper">Siêu Mát</div>
                                  </div>
                                  <div class="product-detail">
                                    <h3 class="pro-name">
                                      <a
                                        href="/products/quan-jeans-procool-icondenim-coolmax-performance-slim-jeans"
                                        title="Quần Jean Nam Procool ICONDENIM CoolMax Sand Blue Slim"
                                        tabindex="-1"
                                      >
                                        Quần Jean Nam Procool ICONDENIM CoolMax
                                        Sand Blue Slim
                                      </a>
                                    </h3>
                                    <div class="box-pro-prices">
                                      <div class="pro-price">
                                        <span> 689,000₫ </span>
                                      </div>
                                      <ul class="hash-tag-loop d-flex"></ul>
                                    </div>
                                  </div>
                                </div>
                                <h1></h1>
                              </div>
                              <div
                                class="d-flex-column item-owl pd-left--15 slick-slide slick-cloned"
                                tabindex="-1"
                                role="tabpanel"
                                style={{ width: "102px" }}
                                data-slick-index="21"
                                aria-hidden="true"
                              >
                                <div class="product-block item">
                                  <div
                                    class="product-img has-hover"
                                    data-frame="Vớ hangmoi FD-TUYEN KIỂM KÊ sale10 SPM (-50) ONPOS ONWEB SPEE2024-12-31 DOUBLEDAY55"
                                  >
                                    <a
                                      href="/products/vo-co-thap-icondenim-monotrio-socks"
                                      title="Vớ Cổ Ngắn Nam ICONDENIM MonoTrio Socks"
                                      class="image-resize"
                                      tabindex="-1"
                                    >
                                      <div class="product-sale">
                                        <span>-%</span>
                                      </div>
                                      <picture>
                                        <source
                                          media="(max-width: 480px)"
                                          data-srcset="//product.hstatic.net/1000253775/product/160_vo_036-7_3f33b7c2fb994a87bc712e416c0c8ee9_large.jpg"
                                          srcset="
                                                    //product.hstatic.net/1000253775/product/160_vo_036-7_3f33b7c2fb994a87bc712e416c0c8ee9_large.jpg
                                                "
                                        />
                                        <source
                                          media="(min-width: 481px)"
                                          data-srcset="//product.hstatic.net/1000253775/product/160_vo_036-7_3f33b7c2fb994a87bc712e416c0c8ee9_large.jpg"
                                          srcset="
                                                    //product.hstatic.net/1000253775/product/160_vo_036-7_3f33b7c2fb994a87bc712e416c0c8ee9_large.jpg
                                                "
                                        />
                                        <img
                                          class="dt-width-100 img-first ls-is-cached lazyloaded"
                                          loading="lazy"
                                          width="260"
                                          height="260"
                                          src="//product.hstatic.net/1000253775/product/160_vo_036-7_3f33b7c2fb994a87bc712e416c0c8ee9_large.jpg"
                                          alt="Vớ Cổ Ngắn Nam ICONDENIM MonoTrio Socks"
                                          title="Vớ Cổ Ngắn Nam ICONDENIM MonoTrio Socks"
                                        />
                                      </picture>
                                      <picture>
                                        <source
                                          media="(min-width: 481px)"
                                          data-srcset="//product.hstatic.net/1000253775/product/160_vo_036-9_757a323a5d73444c87daf3a3d8288fb4_large.jpg"
                                          srcset="
                                                    //product.hstatic.net/1000253775/product/160_vo_036-9_757a323a5d73444c87daf3a3d8288fb4_large.jpg
                                                "
                                        />
                                        <img
                                          class="dt-width-100 img-hover hidden-xs ls-is-cached lazyloaded"
                                          loading="lazy"
                                          width="260"
                                          height="260"
                                          src="//product.hstatic.net/1000253775/product/160_vo_036-9_757a323a5d73444c87daf3a3d8288fb4_large.jpg"
                                          alt="Vớ Cổ Ngắn Nam ICONDENIM MonoTrio Socks"
                                          title="Vớ Cổ Ngắn Nam ICONDENIM MonoTrio Socks"
                                        />
                                      </picture>
                                    </a>

                                    <div class="button-loop-pro hidden-xs hidden-sm">
                                      <button
                                        class="btn-quickview"
                                        onclick="window.wd.scofield.quickview('/products/vo-co-thap-icondenim-monotrio-socks?view=quickview-nochoose')"
                                        type="button"
                                        tabindex="-1"
                                      >
                                        <img
                                          src="https://file.hstatic.net/200000525917/file/search-icon_61351aaf4f2a4ba0b163434492c75c0d.svg"
                                          width="16"
                                          height="16"
                                          alt="Btn Quickview"
                                          title="Btn Quickview"
                                        />
                                      </button>
                                    </div>

                                    <div class="atc-loop d-flex js-center mg-top-auto">
                                      <button
                                        onclick="window.wd.scofield.addtocartloop('true','1125568839','/products/vo-co-thap-icondenim-monotrio-socks',event,'1055649693')"
                                        class="atc-mb-loop"
                                        type="button"
                                        tabindex="-1"
                                      >
                                        <span class="atc-text">
                                          Thêm vào giỏ
                                        </span>
                                        <span class="bd-cart">
                                          <img
                                            class="atc-default"
                                            width="20"
                                            height="20"
                                            src="//theme.hstatic.net/1000253775/1001342694/14/add-to-cart.svg?v=830"
                                            alt="Thêm vào giỏ"
                                          />
                                          <img
                                            class="atc-hv"
                                            width="20"
                                            height="20"
                                            src="//theme.hstatic.net/1000253775/1001342694/14/add-to-cart-hv.svg?v=830"
                                            alt="Thêm vào giỏ"
                                          />
                                        </span>
                                      </button>
                                    </div>
                                  </div>

                                  <div class="label_product-tag label-tag label-outlet">
                                    <div class="label_wrapper">Sale</div>
                                  </div>

                                  <div class="product-detail">
                                    <h3 class="pro-name">
                                      <a
                                        href="/products/vo-co-thap-icondenim-monotrio-socks"
                                        title="Vớ Cổ Ngắn Nam ICONDENIM MonoTrio Socks"
                                        tabindex="-1"
                                      >
                                        Vớ Cổ Ngắn Nam ICONDENIM MonoTrio Socks
                                      </a>
                                    </h3>
                                    <div class="box-pro-prices">
                                      <div class="pro-price-sale">
                                        <span>25,000₫</span>
                                        <del class="compare-price">29,000₫</del>

                                        <div class="label_product-discount label-sale">
                                          <div class="label_wrapper">14%</div>
                                        </div>
                                      </div>
                                      <ul class="hash-tag-loop d-flex"></ul>
                                    </div>
                                  </div>
                                </div>
                                <h1></h1>
                              </div>
                              <div
                                class="d-flex-column item-owl pd-left--15 slick-slide slick-cloned"
                                tabindex="-1"
                                role="tabpanel"
                                aria-describedby="slick-slide-control02"
                                style={{ width: "102px" }}
                                data-slick-index="22"
                                aria-hidden="true"
                              >
                                <div class="product-block item">
                                  <div
                                    class="product-img has-hover"
                                    data-frame="hangmoi FD-THUONG KIỂM KÊ Underwear ONPOS HÀNGCHƯAVỀ onweb SPM (-50) sale10 SPEE2024-01-23 RS1"
                                  >
                                    <a
                                      href="/products/quan-boxer-icondenim-with-logo"
                                      title="Quần Boxer Extra-cool ICONDENIM With Logo"
                                      class="image-resize"
                                      tabindex="-1"
                                    >
                                      <picture>
                                        <source
                                          media="(max-width: 480px)"
                                          data-srcset="//product.hstatic.net/1000253775/product/160_boxer_34-10_f7e8c4864ac44901a7bd101560ecf48f_large.jpg"
                                        />
                                        <source
                                          media="(min-width: 481px)"
                                          data-srcset="//product.hstatic.net/1000253775/product/160_boxer_34-10_f7e8c4864ac44901a7bd101560ecf48f_large.jpg"
                                        />
                                        <img
                                          class="lazyload dt-width-100 img-first"
                                          loading="lazy"
                                          width="260"
                                          height="260"
                                          src="//product.hstatic.net/1000253775/product/160_boxer_34-10_f7e8c4864ac44901a7bd101560ecf48f_large.jpg"
                                          alt="Quần Boxer Extra-cool ICONDENIM With Logo"
                                          title="Quần Boxer Extra-cool ICONDENIM With Logo"
                                        />
                                      </picture>
                                      <picture>
                                        <source
                                          media="(min-width: 481px)"
                                          data-srcset="//product.hstatic.net/1000253775/product/160_boxer_34-13_66086845bfd44c0b992808a3ec014d97_large.jpg"
                                        />
                                        <img
                                          class="lazyload dt-width-100 img-hover hidden-xs"
                                          loading="lazy"
                                          width="260"
                                          height="260"
                                          src="//product.hstatic.net/1000253775/product/160_boxer_34-13_66086845bfd44c0b992808a3ec014d97_large.jpg"
                                          alt="Quần Boxer Extra-cool ICONDENIM With Logo"
                                          title="Quần Boxer Extra-cool ICONDENIM With Logo"
                                        />
                                      </picture>
                                    </a>

                                    <div class="button-loop-pro hidden-xs hidden-sm">
                                      <button
                                        class="btn-quickview"
                                        onclick="window.wd.scofield.quickview('/products/quan-boxer-icondenim-with-logo?view=quickview-nochoose')"
                                        type="button"
                                        tabindex="-1"
                                      >
                                        <img
                                          src="https://file.hstatic.net/200000525917/file/search-icon_61351aaf4f2a4ba0b163434492c75c0d.svg"
                                          width="16"
                                          height="16"
                                          alt="Btn Quickview"
                                          title="Btn Quickview"
                                        />
                                      </button>
                                    </div>

                                    <div class="atc-loop d-flex js-center mg-top-auto">
                                      <button
                                        onclick="window.wd.scofield.addtocartloop('true','1117512509','/products/quan-boxer-icondenim-with-logo',event,'1052269941')"
                                        class="atc-mb-loop"
                                        type="button"
                                        tabindex="-1"
                                      >
                                        <span class="atc-text">
                                          Thêm vào giỏ
                                        </span>
                                        <span class="bd-cart">
                                          <img
                                            class="atc-default"
                                            width="20"
                                            height="20"
                                            src="//theme.hstatic.net/1000253775/1001342694/14/add-to-cart.svg?v=830"
                                            alt="Thêm vào giỏ"
                                          />
                                          <img
                                            class="atc-hv"
                                            width="20"
                                            height="20"
                                            src="//theme.hstatic.net/1000253775/1001342694/14/add-to-cart-hv.svg?v=830"
                                            alt="Thêm vào giỏ"
                                          />
                                        </span>
                                      </button>
                                    </div>
                                  </div>

                                  <div class="label_product_new">
                                    <div class="label_wrapper">Hàng Mới</div>
                                  </div>

                                  <div class="product-detail">
                                    <h3 class="pro-name">
                                      <a
                                        href="/products/quan-boxer-icondenim-with-logo"
                                        title="Quần Boxer Extra-cool ICONDENIM With Logo"
                                        tabindex="-1"
                                      >
                                        Quần Boxer Extra-cool ICONDENIM With
                                        Logo
                                      </a>
                                    </h3>
                                    <div class="box-pro-prices">
                                      <div class="pro-price">
                                        <span> 120,000₫ </span>
                                      </div>
                                      <ul class="hash-tag-loop d-flex"></ul>
                                    </div>
                                  </div>
                                </div>
                                <h1></h1>
                              </div>
                              <div
                                class="d-flex-column item-owl pd-left--15 slick-slide slick-cloned"
                                tabindex="-1"
                                role="tabpanel"
                                style={{ width: "102px" }}
                                data-slick-index="23"
                                aria-hidden="true"
                              >
                                <div class="product-block item">
                                  <div
                                    class="product-img has-hover"
                                    data-frame="KIỂM KÊ FD-TON 23bs SPM (-50) sale10 RS2 RS1 fram1 frame1 QKNG RS3 SPEE2024-05-30 BSSAN BOSUA"
                                  >
                                    <a
                                      href="/products/quan-boxer-icondenim-coolmax"
                                      title="Quần Boxer Nam ICONDENIM Coolmax"
                                      class="image-resize"
                                      tabindex="-1"
                                    >
                                      <picture>
                                        <source
                                          media="(max-width: 480px)"
                                          data-srcset="//product.hstatic.net/1000253775/product/160_boxer_3m_16-12_ed7c5c1a0b8c46cdbcd880aaca3dc864_large.jpg"
                                        />
                                        <source
                                          media="(min-width: 481px)"
                                          data-srcset="//product.hstatic.net/1000253775/product/160_boxer_3m_16-12_ed7c5c1a0b8c46cdbcd880aaca3dc864_large.jpg"
                                        />
                                        <img
                                          class="lazyload dt-width-100 img-first"
                                          loading="lazy"
                                          width="260"
                                          height="260"
                                          src="//product.hstatic.net/1000253775/product/160_boxer_3m_16-12_ed7c5c1a0b8c46cdbcd880aaca3dc864_large.jpg"
                                          alt="Quần Boxer Nam ICONDENIM Coolmax"
                                          title="Quần Boxer Nam ICONDENIM Coolmax"
                                        />
                                      </picture>
                                      <picture>
                                        <source
                                          media="(min-width: 481px)"
                                          data-srcset="//product.hstatic.net/1000253775/product/160_boxer_3m_16-6_125328f27fdb481fa4994183cf9cfc81_large.jpg"
                                        />
                                        <img
                                          class="lazyload dt-width-100 img-hover hidden-xs"
                                          loading="lazy"
                                          width="260"
                                          height="260"
                                          src="//product.hstatic.net/1000253775/product/160_boxer_3m_16-6_125328f27fdb481fa4994183cf9cfc81_large.jpg"
                                          alt="Quần Boxer Nam ICONDENIM Coolmax"
                                          title="Quần Boxer Nam ICONDENIM Coolmax"
                                        />
                                      </picture>
                                    </a>

                                    <div class="button-loop-pro hidden-xs hidden-sm">
                                      <button
                                        class="btn-quickview"
                                        onclick="window.wd.scofield.quickview('/products/quan-boxer-icondenim-coolmax?view=quickview-nochoose')"
                                        type="button"
                                        tabindex="-1"
                                      >
                                        <img
                                          src="https://file.hstatic.net/200000525917/file/search-icon_61351aaf4f2a4ba0b163434492c75c0d.svg"
                                          width="16"
                                          height="16"
                                          alt="Btn Quickview"
                                          title="Btn Quickview"
                                        />
                                      </button>
                                    </div>

                                    <div class="atc-loop d-flex js-center mg-top-auto">
                                      <button
                                        onclick="window.wd.scofield.addtocartloop('true','1097598881','/products/quan-boxer-icondenim-coolmax',event,'1044327007')"
                                        class="atc-mb-loop"
                                        type="button"
                                        tabindex="-1"
                                      >
                                        <span class="atc-text">
                                          Thêm vào giỏ
                                        </span>
                                        <span class="bd-cart">
                                          <img
                                            class="atc-default"
                                            width="20"
                                            height="20"
                                            src="//theme.hstatic.net/1000253775/1001342694/14/add-to-cart.svg?v=830"
                                            alt="Thêm vào giỏ"
                                          />
                                          <img
                                            class="atc-hv"
                                            width="20"
                                            height="20"
                                            src="//theme.hstatic.net/1000253775/1001342694/14/add-to-cart-hv.svg?v=830"
                                            alt="Thêm vào giỏ"
                                          />
                                        </span>
                                      </button>
                                    </div>
                                  </div>

                                  <div class="label_product_new">
                                    <div class="label_wrapper">Hàng Mới</div>
                                  </div>

                                  <div class="product-detail">
                                    <h3 class="pro-name">
                                      <a
                                        href="/products/quan-boxer-icondenim-coolmax"
                                        title="Quần Boxer Nam ICONDENIM Coolmax"
                                        tabindex="-1"
                                      >
                                        Quần Boxer Nam ICONDENIM Coolmax
                                      </a>
                                    </h3>
                                    <div class="box-pro-prices">
                                      <div class="pro-price">
                                        <span> 100,000₫ </span>
                                      </div>
                                      <ul class="hash-tag-loop d-flex"></ul>
                                    </div>
                                  </div>
                                </div>
                                <h1></h1>
                              </div>
                            </div>
                          </div>
                          <button
                            type="button"
                            class="slick-next slick-arrow custom-style"
                            aria-label="Next"
                            style={{ display: "block" }}
                          >
                            <span class="arrow-custom arrow-right">
                              <div class="arrow-top"></div>
                              <div class="arrow-bottom"></div>
                            </span>
                          </button>
                          <ul
                            class="slick-dots"
                            style={{ display: "block" }}
                            role="tablist"
                          >
                            <li class="slick-active" role="presentation">
                              <button
                                type="button"
                                role="tab"
                                id="slick-slide-control00"
                                aria-controls="slick-slide00"
                                aria-label="1 of 4"
                                tabindex="0"
                                aria-selected="true"
                              >
                                1
                              </button>
                            </li>
                            <li role="presentation">
                              <button
                                type="button"
                                role="tab"
                                id="slick-slide-control01"
                                aria-controls="slick-slide03"
                                aria-label="2 of 4"
                                tabindex="-1"
                              >
                                2
                              </button>
                            </li>
                            <li role="presentation">
                              <button
                                type="button"
                                role="tab"
                                id="slick-slide-control02"
                                aria-controls="slick-slide06"
                                aria-label="3 of 4"
                                tabindex="-1"
                              >
                                3
                              </button>
                            </li>
                            <li role="presentation">
                              <button
                                type="button"
                                role="tab"
                                id="slick-slide-control03"
                                aria-controls="slick-slide09"
                                aria-label="4 of 4"
                                tabindex="-1"
                              >
                                4
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </section>
          <section class="section-mobile show-button-buy">
            <div class="order_total">
              <button
                class="btncart-checkout text-center btn-checkout-mobile"
                name="checkout"
                type="submit"
              >
                THANH TOÁN NGAY
                <p>
                  <span class="total-price-checkout total-price-sale">
                    Tiết kiệm 800,000₫
                  </span>
                </p>
              </button>
            </div>
          </section>
        </main>

        <div class="prefooter-customer mg-top-30">
          <div class="container">
            <div class="bg-prefooter">
              <div class="d-flex row d-flex-center">
                <div class="col-md-7 col-sm-7 col-xs-12 d-flex d-flex-center js-between">
                  <p class="title-regis">Đăng kí nhận tin</p>
                  <div class="form-ft-wanda">
                    <form
                      accept-charset="UTF-8"
                      action="/account/contact"
                      class="contact-form"
                      method="post"
                    >
                      <input name="form_type" type="hidden" value="customer" />
                      <input name="utf8" type="hidden" value="✓" />
                      <div class="form-group mb-0 icon-email">
                        <input
                          type="hidden"
                          id="contact_tags"
                          name="contact[tags]"
                          value="khách hàng tiềm năng-https://160store.com/cart"
                        />
                        <input
                          type="email"
                          required="required"
                          autocomplete="on"
                          name="contact[email]"
                          id="contact_email"
                          placeholder="Email"
                        />
                      </div>
                      <button class="btn" type="submit">
                        <i class="fa fa-paper-plane-o" aria-hidden="true"></i>{" "}
                        Đăng ký
                      </button>

                      <input
                        name="__RequestVerificationToken"
                        type="hidden"
                        value="CfDJ8FyFPV59mBtNhmQGz0fYZt-AiHzgk-NBlgEesFqwQUOjW-GRWorOOlveMlApJGFJXbkLqU0GsOPYBLY9NYeGnQ0K_JvquOsB-U50nSzevRxGd8uhL_lI9Z5-i2OQDu2tVr-mUObzhF-ncseY4Bm6qzA"
                      />
                      <input
                        id="0887118579b4425ab1c3f24346b9941a"
                        name="g-recaptcha-response"
                        type="hidden"
                      />
                    </form>
                  </div>
                </div>
                <div class="col-md-5 col-sm-5 col-xs-12">
                  <ul class="social-footer d-flex d-flex-center">
                    <li class="zalo">
                      <a href="//zalo.me/3664144181122308942" rel="nofollow">
                        <img
                          width="30"
                          height="30"
                          src="https://file.hstatic.net/200000397757/file/zalo-icon_0adb17d386cc4785b30ef66e470b4342.svg"
                          alt="Liên hệ với chúng tôi qua Zalo"
                        />
                      </a>
                    </li>
                    <li class="youtube">
                      <a
                        href="https://www.youtube.com/@storehanghieu1608"
                        rel="nofollow"
                      >
                        <i class="fa fa-youtube" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li class="instagram">
                      <a
                        href="https://www.instagram.com/160store"
                        rel="nofollow"
                      >
                        <i class="fa fa-instagram" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li class="facebook">
                      <a
                        href="https://www.facebook.com/160store"
                        rel="nofollow"
                      >
                        <i class="fa fa-facebook" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer class="mg-0 pd-bt-50-mb">
          <div class="top-ft-wanda">
            <div class="container">
              <div class="d-flex row">
                <div class="col-md-3 col-sm-6 col-xs-12 infomation mg-bottom-15">
                  <div class="title-footer">
                    <div class="h4">Giới thiệu</div>
                  </div>
                  <div class="infomation-wanda info_one">
                    <p>160STORE - Chuỗi Phân Phối Thời Trang Nam Chuẩn Hiệu</p>
                    <ul>
                      <li>
                        <i class="fa fa-mobile-phone" aria-hidden="true"></i>
                        <a rel="nofollow" href="tel:02871006789">
                          02871006789
                        </a>
                      </li>
                      <li>
                        <i class="fa fa-envelope-o" aria-hidden="true"></i>
                        <a rel="nofollow" href="mailto:cs@160store.com">
                          cs@160store.com
                        </a>
                      </li>

                      <li>
                        <i class="fa fa-clock-o" aria-hidden="true"></i>
                        <a rel="nofollow">Giờ mở cửa : 08:30 - 22:00</a>
                      </li>
                      <li>
                        <i class="fa fa-headphones" aria-hidden="true"></i>
                        <a rel="nofollow">
                          Nhân viên tư vấn phản hồi tin nhắn đến 24:00 (Mỗi
                          ngày)
                        </a>
                      </li>
                      <li class="bocongthuong">
                        <a
                          rel="nofollow"
                          href="http://online.gov.vn/Home/WebDetails/121880"
                        >
                          <img
                            class="ls-is-cached lazyloaded"
                            loading="lazy"
                            width="160"
                            height="80"
                            src="https://file.hstatic.net/200000397757/file/dathongbao_48067cd02fae41b68bf0294777c39c94_compact.png"
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          rel="nofollow"
                          href="https://www.dmca.com/Protection/Status.aspx?ID=9049de26-d97b-48dc-ab97-1e5fcb221fba&amp;refurl=https://160store.com/cart"
                          title="DMCA.com Protection Status"
                          class="dmca-badge"
                        >
                          <img
                            src="https://images.dmca.com/Badges/dmca_protected_16_120.png?ID=9049de26-d97b-48dc-ab97-1e5fcb221fba"
                            alt="DMCA.com Protection Status"
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-3 col-sm-6 col-xs-12 tablink mg-bottom-15">
                  <div class="title-footer">
                    <div class="h4">CHÍNH SÁCH</div>
                  </div>
                  <div class="footer-link-wanda infomation-wanda footer-click">
                    <ul>
                      <li>
                        <a href="/pages/huong-dan-dat-hang">
                          Hướng dẫn đặt hàng
                        </a>
                      </li>
                      <li>
                        <div class="footer-flex clicked">
                          <div class="location_flex">
                            <p>Chính sách</p>
                          </div>

                          <i class="fa fa-chevron-down" aria-hidden="true"></i>
                        </div>
                        <div class="footer-link-wanda submenu">
                          <ul>
                            <li>
                              <a href="https://160store.com/pages/chinh-sach-sinh-nhat">
                                Chính Sách Ưu Đãi Sinh Nhật
                              </a>
                            </li>
                            <li>
                              <a href="https://160store.com/pages/ctmembership">
                                Chính Sách Khách Hàng Thân Thiết
                              </a>
                            </li>
                            <li>
                              <a href="https://160store.com/pages/chinh-sach-giao-hang">
                                Chính Sách Giao Hàng
                              </a>
                            </li>
                            <li>
                              <a href="https://160store.com/pages/chinh-sach-bao-mat">
                                Chính Sách Bảo Mật
                              </a>
                            </li>
                            <li>
                              <a href="https://160store.com/pages/chinh-sach-doi-tra">
                                Chính Sách Đổi Hàng Và Bảo Hành
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-3 col-sm-6 col-xs-12 tablink mg-bottom-15">
                  <div class="title-footer title-store">
                    <div class="h4">
                      <a href="https://www.160store.com/pages/lien-he">
                        ĐỊA CHỈ CỬA HÀNG (22 CH)
                      </a>
                    </div>
                  </div>
                  <div class="footer_store">
                    <div class="footer-link-wanda submenu">
                      <div class="location-container">
                        <div class="location_flex">
                          <img
                            class="ls-is-cached lazyloaded"
                            loading="lazy"
                            height="25px"
                            width="25px"
                            src="https://file.hstatic.net/1000253775/file/location_a1e4d2d625914daa90748f218350e7b7.svg"
                          />
                          <p class="title-ch">HỒ CHÍ MINH (10 CH)</p>
                        </div>
                        <p>
                          297/3 Tô Hiến Thành, Phường 13, Quận 10, TP Hồ Chí
                          Minh
                        </p>
                      </div>
                      <div class="location-container">
                        <div class="location_flex">
                          <img
                            class="ls-is-cached lazyloaded"
                            loading="lazy"
                            height="25px"
                            width="25px"
                            src="https://file.hstatic.net/1000253775/file/location_a1e4d2d625914daa90748f218350e7b7.svg"
                          />
                          <p class="title-ch">HÀ NỘI (2 CH)</p>
                        </div>
                        <p>
                          Số 26 phố Lê Đại Hành, Phường Lê Đại Hành, Quận Hai Bà
                          Trưng, TP Hà Nội
                        </p>
                      </div>
                      <div class="location-container">
                        <div class="location_flex">
                          <img
                            class="ls-is-cached lazyloaded"
                            loading="lazy"
                            height="25px"
                            width="25px"
                            src="https://file.hstatic.net/1000253775/file/location_a1e4d2d625914daa90748f218350e7b7.svg"
                          />
                          <p class="title-ch">CẦN THƠ (2 CH)</p>
                        </div>
                        <p>
                          Số 35 Trần Phú, Phường Cái Khế, Quận Ninh Kiều, TP Cần
                          Thơ, Cần Thơ
                        </p>
                      </div>
                      <div class="location-container">
                        <div class="location_flex">
                          <img
                            class="ls-is-cached lazyloaded"
                            loading="lazy"
                            height="25px"
                            width="25px"
                            src="https://file.hstatic.net/1000253775/file/location_a1e4d2d625914daa90748f218350e7b7.svg"
                          />
                          <p class="title-ch">ĐÀ NẴNG (2 CH)</p>
                        </div>
                        <p class="store-dn">
                          332 Đ. Lê Duẩn, Tân Chính, Thanh Khê, Đà Nẵng
                          <span class="new-footer">New</span>
                        </p>
                      </div>
                      <div class="btn-view-store">
                        <a href="https://www.160store.com/pages/lien-he">
                          XEM TẤT CẢ CỬA HÀNG
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 col-sm-6 col-xs-12">
                  <div class="title-footer">
                    <div class="payment-methold">
                      <div class="h4">PHƯƠNG THỨC THANH TOÁN</div>
                      <div class="footer-payment">
                        <img
                          class="ls-is-cached lazyloaded"
                          loading="lazy"
                          src="https://file.hstatic.net/1000253775/file/shoppy_new_18600e8ad9f64537b7e31d009457e215.jpg"
                          width="50px"
                          height="30px"
                          alt="Image Spay"
                        />
                        <img
                          class="ls-is-cached lazyloaded"
                          loading="lazy"
                          src="https://file.hstatic.net/1000253775/file/vnpay_new_ec21c03b2f4c49689d180c8a485c8d5b.jpg"
                          width="50px"
                          height="30px"
                          alt="Image VNPay"
                        />
                        <img
                          class="ls-is-cached lazyloaded"
                          loading="lazy"
                          src="https://file.hstatic.net/1000253775/file/cod_new_2316cf8e29bd4a858810a3d7b9eb39e4.jpg"
                          width="50px"
                          height="30px"
                          alt="Image Cod"
                        />
                      </div>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="copyright-wanda">
                <div class="container">
                  <div class="row">
                    <div class="col-md-12 text-center">
                      <div class="text-copyright mb-0">
                        <span>BẢN QUYỀN THUỘC VỀ 160STORE</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>

        <iframe
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
        <iframe
          allow="join-ad-interest-group"
          data-tagging-id="AW-16520474317/Y8rvCOqPpuQZEM3dycU9"
          data-load-time="1746284762754"
          height="0"
          width="0"
          src="https://td.doubleclick.net/td/rul/16520474317?random=1746284762749&amp;cv=11&amp;fst=1746284762749&amp;fmt=3&amp;bg=ffffff&amp;guid=ON&amp;async=1&amp;gcl_ctr=21&amp;gtm=45be54u1v9193905488z89174885355za200&amp;gcd=13l3l3l3l1l1&amp;dma=0&amp;tag_exp=101509157~102015666~103101747~103101749~103116025~103200001~103233427~103251618~103251620&amp;u_w=1920&amp;u_h=1080&amp;url=https%3A%2F%2F160store.com%2Fcart&amp;ref=https%3A%2F%2F160store.com%2Fproducts%2Fao-khoac-icondenim-puffer-coat-with-removable-hood-and-zipper&amp;label=Y8rvCOqPpuQZEM3dycU9&amp;hn=www.google.com&amp;frm=0&amp;tiba=Gi%E1%BB%8F%20h%C3%A0ng%20c%E1%BB%A7a%20b%E1%BA%A1n%20-%20160STORE&amp;value=0&amp;bttype=purchase&amp;npa=0&amp;pscdl=noapi&amp;auid=1258621391.1745720641&amp;uaa=x86&amp;uab=64&amp;uafvl=Chromium%3B136.0.7103.49%7CMicrosoft%2520Edge%3B136.0.3240.50%7CNot.A%252FBrand%3B99.0.0.0&amp;uamb=0&amp;uam=&amp;uap=Windows&amp;uapv=10.0.0&amp;uaw=0&amp;fledge=1&amp;capi=1&amp;_tu=Cg&amp;ct_cookie_present=0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
        <iframe
          allow="join-ad-interest-group"
          data-tagging-id="AW-16520474317"
          data-load-time="1746284762762"
          height="0"
          width="0"
          src="https://td.doubleclick.net/td/rul/16520474317?random=1746284762756&amp;cv=11&amp;fst=1746284762756&amp;fmt=3&amp;bg=ffffff&amp;guid=ON&amp;async=1&amp;gtm=45be54u1v9193905488z89174885355za200&amp;gcd=13l3l3l3l1l1&amp;dma=0&amp;tag_exp=101509157~102015666~103101747~103101749~103116025~103200001~103233427~103251618~103251620&amp;u_w=1920&amp;u_h=1080&amp;url=https%3A%2F%2F160store.com%2Fcart&amp;ref=https%3A%2F%2F160store.com%2Fproducts%2Fao-khoac-icondenim-puffer-coat-with-removable-hood-and-zipper&amp;hn=www.googleadservices.com&amp;frm=0&amp;tiba=Gi%E1%BB%8F%20h%C3%A0ng%20c%E1%BB%A7a%20b%E1%BA%A1n%20-%20160STORE&amp;npa=0&amp;pscdl=noapi&amp;auid=1258621391.1745720641&amp;uaa=x86&amp;uab=64&amp;uafvl=Chromium%3B136.0.7103.49%7CMicrosoft%2520Edge%3B136.0.3240.50%7CNot.A%252FBrand%3B99.0.0.0&amp;uamb=0&amp;uam=&amp;uap=Windows&amp;uapv=10.0.0&amp;uaw=0&amp;fledge=1&amp;_tu=Cg"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
        <div class="modal" id="pro-qv-wanda"></div>
        <div id="pro-quickview-mobile"></div>
        <div id="pro-quickview-buynow"></div>
        <div class="fixed-action-btn">
          <ul>
            <li class="hotline">
              <a
                class="btn-secondary btn-floating"
                href="tel:02871006789"
                rel="nofollow"
                data-toggle="tooltip"
                data-original-title="Liên hệ 02871006789"
              >
                <i class="fa fa-phone"></i>
              </a>
            </li>
            <li class="facebook">
              <a
                class="btn-secondary btn-floating"
                href="//m.me/1042686802417049"
                rel="nofollow"
                data-toggle="tooltip"
                data-original-title="Liên hệ với chúng tôi qua Facebook"
              >
                <img
                  width="45"
                  height="45"
                  class="dt-width-auto"
                  src="https://file.hstatic.net/200000525917/file/messenger-fb_8fcc524fbaad4b1195a150dc5e0575d7.png"
                />
              </a>
            </li>
            <li class="zalo">
              <a
                class="btn-secondary btn-floating"
                href="//zalo.me/3664144181122308942"
                rel="nofollow"
                data-toggle="tooltip"
                data-original-title="Liên hệ với chúng tôi qua Zalo"
              >
                <img
                  width="45"
                  height="45"
                  class="dt-width-auto"
                  src="https://file.hstatic.net/200000397757/file/zalo-icon_0adb17d386cc4785b30ef66e470b4342.svg"
                  alt="Liên hệ với chúng tôi qua Zalo"
                />
              </a>
            </li>
          </ul>
          <a id="btn-main" class="btn-primary btn-floating btn-large red">
            {" "}
          </a>
        </div>

        <div class="modal" id="success-subcribe-wanda">
          <div class="row">
            <div class="modal-content">
              <div class="modal-icon sweet-alert">
                <div class="sa-icon sa-success animate">
                  <span class="sa-line sa-tip animateSuccessTip"></span>
                  <span class="sa-line sa-long animateSuccessLong"></span>
                  <div class="sa-placeholder"></div>
                  <div class="sa-fix"></div>
                </div>
              </div>
              <div class="modal-body text-center">
                <p class="modal-title">
                  Đăng ký thành công.
                  <br />
                  Thông báo sẽ tự động tắt sau 2 giây
                </p>
              </div>
            </div>
          </div>
        </div>
        <button class="back-to-top show" type="button">
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xlinkHref="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="64px"
            height="64px"
            viewBox="0 0 64 64"
            enableBackground="new 0 0 64 64"
          >
            <g>
              <polyline
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linejoin="bevel"
                stroke-miterlimit="10"
                points="15,40 32,23 49,40 	"
              ></polyline>
            </g>
          </svg>
          back to top
        </button>
        <div class="modal-backdrop fade js-backdrop"></div>
        <div class="suggest-notify anislideOutDown sales_animated"></div>

        <div id="cart-popup" class="model-add-cart"></div>
        <div id="cart-popup-gift" class="model-add-cart-gift"></div>
        <div id="error-size" class="error-size-style">
          <p>Bạn chưa chọn size sản phẩm!</p>
        </div>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NWF8TCVR"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <div class="dlpm-toast-notify">
          <div class="toast-dialog">
            <div class="toast-notify-icon">
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.0002 33.6668C7.79516 33.6668 0.333496 26.2052 0.333496 17.0002C0.333496 7.79516 7.79516 0.333496 17.0002 0.333496C26.2052 0.333496 33.6668 7.79516 33.6668 17.0002C33.6668 26.2052 26.2052 33.6668 17.0002 33.6668ZM17.0002 30.3335C20.5364 30.3335 23.9278 28.9287 26.4283 26.4283C28.9287 23.9278 30.3335 20.5364 30.3335 17.0002C30.3335 13.4639 28.9287 10.0726 26.4283 7.57207C23.9278 5.07159 20.5364 3.66683 17.0002 3.66683C13.4639 3.66683 10.0726 5.07159 7.57207 7.57207C5.07159 10.0726 3.66683 13.4639 3.66683 17.0002C3.66683 20.5364 5.07159 23.9278 7.57207 26.4283C10.0726 28.9287 13.4639 30.3335 17.0002 30.3335V30.3335ZM15.3385 23.6668L8.26683 16.5952L10.6235 14.2385L15.3385 18.9535L24.7652 9.52516L27.1235 11.8818L15.3385 23.6668Z"
                  fill="white"
                ></path>
              </svg>
            </div>
            <div class="toast-notify-content"></div>
          </div>
        </div>
        <div class="dlpm-hrvmodal dlpm-hrvmodal--dialog dlpm-hrvmodal-coupon-minimum">
          <div class="dlpm-hrvmodal--content">
            <div class="dlpm-hrvmodal--header">
              <div class="dlpm-hrvmodal-base--list">
                <div class="dlpm-hrvmodal--header__title">Mã khuyến mãi</div>
                <div class="dlpm-hrvmodal-close btn-hrvmodal-coupon__close">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                      fill="#4B5563"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <hr />
            <div class="dlpm-hrvmodal--body">
              <div class="dlpm-mini--slide"></div>
            </div>
          </div>
        </div>
        <div class="dlpm-hrvmodal dlpm-hrvmodal--dialog dlpm-hrvmodal-coupon">
          <div class="dlpm-hrvmodal--content">
            <div class="dlpm-hrvmodal--header">
              <div class="dlpm-hrvmodal-base--detail">
                <div class="dlpm-hrvmodal-pre">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.9042 3.14166L13.4292 1.66666L5.09583 9.99999L13.4292 18.3333L14.9042 16.8583L8.04583 9.99999L14.9042 3.14166Z"
                      fill="#4B5563"
                    ></path>
                  </svg>
                </div>
                <div class="dlpm-hrvmodal--header__title">
                  Danh sách sản phẩm
                </div>
              </div>
              <div class="dlpm-hrvmodal-base--list">
                <div class="dlpm-hrvmodal--header__title">Chi tiết mã giảm</div>
                <div class="dlpm-hrvmodal-close btn-hrvmodal-coupon__close">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                      fill="#4B5563"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <hr />
            <div class="dlpm-hrvmodal--body">
              <div class="dlpm-detail-items">
                <div class="detail-info">
                  <div class="detail-info__label">Giảm 20%</div>
                  <div class="detail-description__1">
                    Cho đơn hàng tối thiểu 1,000,000
                  </div>
                  <div class="detail-description__2">
                    Mã khuyến mãi áp dụng cho nhóm sản phẩm và sản phẩm thuộc
                    trang sức cao cấp
                  </div>
                </div>
                <hr />
                <div class="detail-code">
                  <div class="detail-code__label">Mã giảm giá</div>
                  <div class="detail-code__copy">
                    <div class="detail-code__copy-label">DISCOUNT8</div>
                    <div class="detail-code__copy-btn">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.75 0.833344H3.74998C2.83331 0.833344 2.08331 1.58334 2.08331 2.50001V14.1667H3.74998V2.50001H13.75V0.833344ZM16.25 4.16668H7.08331C6.16665 4.16668 5.41665 4.91668 5.41665 5.83334V17.5C5.41665 18.4167 6.16665 19.1667 7.08331 19.1667H16.25C17.1666 19.1667 17.9166 18.4167 17.9166 17.5V5.83334C17.9166 4.91668 17.1666 4.16668 16.25 4.16668ZM16.25 17.5H7.08331V5.83334H16.25V17.5Z"
                          fill="#2463EB"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <hr />
                <div class="detail-datetime">
                  <div class="detail-datetime__label">Áp dụng từ</div>
                  <div class="detail-datetime__content">
                    20/5/2023 - 9/9/2023
                  </div>
                </div>
                <hr />
                <div class="detail-content">
                  <div class="detail-content__label">Chi tiết</div>
                  <div class="detail-content__description">
                    <ul></ul>
                  </div>
                </div>
              </div>
              <div class="dlpm-detail-item__product">
                <div class="detail-product">
                  <div class="detail-product__label">Sản phẩm áp dụng</div>
                  <div class="detail-product__list">
                    <ul></ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="dlpm-hrvmodal--footer">
              <hr />
              <div class="dlpm-hrvmodal--footer__action">
                <div class="dlpm-footer--action__close btn-hrvmodal-coupon__close">
                  Đóng
                </div>
                <div class="dlpm-footer--action__copy dlpm-btn-copy">
                  Sao chép
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="dlpm-hrvmodal dlpm-hrvmodal--dialog dlpm-hrvmodal-discount-minimum">
          <div class="dlpm-hrvmodal--content">
            <div class="dlpm-hrvmodal--header">
              <div class="dlpm-hrvmodal-base--list">
                <div class="dlpm-hrvmodal--header__title">
                  Chương trình khuyến mãi
                </div>
                <div class="dlpm-hrvmodal-close btn-hrvmodal-discount__close">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                      fill="#4B5563"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <hr />
            <div class="dlpm-hrvmodal--body">
              <div class="dlpm-mini--slide"></div>
            </div>
          </div>
        </div>
        <div class="dlpm-hrvmodal dlpm-hrvmodal--dialog dlpm-hrvmodal-discount">
          <div class="dlpm-hrvmodal--content">
            <div class="dlpm-hrvmodal--header">
              <div class="dlpm-hrvmodal-base--detail">
                <div class="dlpm-hrvmodal-pre">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.9042 3.14166L13.4292 1.66666L5.09583 9.99999L13.4292 18.3333L14.9042 16.8583L8.04583 9.99999L14.9042 3.14166Z"
                      fill="#4B5563"
                    ></path>
                  </svg>
                </div>
                <div class="dlpm-hrvmodal--header__title">
                  Danh sách sản phẩm
                </div>
              </div>
              <div class="dlpm-hrvmodal-base--list">
                <div class="dlpm-hrvmodal--header__title">
                  Chi tiết khuyến mãi
                </div>
                <div class="dlpm-hrvmodal-close btn-hrvmodal-discount__close">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                      fill="#4B5563"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <hr />
            <div class="dlpm-hrvmodal--body">
              <div class="dlpm-detail-items">
                <div class="detail-info">
                  <div class="detail-info__label--mini dlpm-text__2">
                    Mùa hè bất tận
                  </div>
                  <div class="detail-info__label--large">Giảm 20%</div>
                  <div class="detail-description__1">
                    Cho đơn hàng tối thiểu 1,000,000
                  </div>
                  <div class="detail-description__2">
                    Mã khuyến mãi áp dụng cho nhóm sản phẩm và sản phẩm thuộc
                    trang sức cao cấp
                  </div>
                </div>
                <hr />
                <div class="detail-datetime">
                  <div class="detail-datetime__label">Áp dụng từ</div>
                  <div class="detail-datetime__content">
                    20/5/2023 - 9/9/2023
                  </div>
                </div>
                <hr />
                <div class="detail-content">
                  <div class="detail-content__label">Chi tiết</div>
                  <div class="detail-content__description">
                    <ul>
                      <li>Giảm 20% cho đơn hàng khi mua đơn hàng từ 250k</li>
                      <li>
                        Áp dụng cho một vài sản phẩm
                        <a href="#" class="btn-hrvmodal-detail-discount">
                          Xem danh sách sản phẩm
                        </a>
                      </li>
                      <li>Mỗi khách hàng áp dụng khuyến mãi tối đa 2 lần</li>
                      <li>
                        Mã khuyến mãi được sử dụng chung với chương trình khuyến
                        mãi
                      </li>
                      <li>Giảm giá 1 lần trên toàn bộ đơn hàng</li>
                      <li>Khu vực giao hàng áp dụng trên toàn quốc</li>
                      <li>Có hiệu lực từ 23/06/2023 - 30/06/2023</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="dlpm-detail-item__product">
                <div class="detail-product">
                  <div class="detail-product__label">Sản phẩm áp dụng</div>
                  <div class="detail-product__list">
                    <ul></ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="dlpm-hrvmodal--footer">
              <hr />
              <div class="dlpm-hrvmodal--footer__action">
                <div class="dlpm-footer--action__close btn-hrvmodal-discount__close">
                  Đóng
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default ShopingCart;
