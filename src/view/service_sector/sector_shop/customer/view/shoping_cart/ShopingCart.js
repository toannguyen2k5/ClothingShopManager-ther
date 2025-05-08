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
    this.total_Bill_Before_DisCode = 0;
    this.total_Bill_After_DisCode = 0;
    this.quantity = 0;
  }
  render() {
    console.log(this.props);
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
                          <span class="cart-counter">
                            {this.props.state_data.data_page.totalquantity}{" "}
                          </span>
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
                        <ShopingCartItem
                          total={this.callBack}
                          idUser="User0001"
                          {...this.props}
                        />
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
                              {this.total_Bill_Before_DisCode}đ
                            </span>
                          </p>
                          <p>
                            Giá giảm:
                            <span class="total-price-sale">
                              -
                              {this.total_Bill_Before_DisCode -
                                this.total_Bill_After_DisCode}
                            </span>
                          </p>
                          <p>
                            Tổng tiền:
                            <span id="total-price-new" class="total-price">
                              {this.total_Bill_After_DisCode}
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
                            total={0}
                            {...this.props}
                          />
                        </div>
                        <div class="order_action">
                          <button
                            class="btncart-checkout text-center"
                            name="checkout"
                            type="submit"
                          >
                            Giao Hàng Ngay
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
                </div>
              </form>
            </div>
          </section>
        </main>
        //////
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
      </>
    );
  }
}
export default ShopingCart;
