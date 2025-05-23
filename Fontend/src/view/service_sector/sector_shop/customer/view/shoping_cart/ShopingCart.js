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
  }
  render() {
    console.log(this.props);
    return (
      <>
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
                            {this.props?.state_data?.data_page?.data
                              ?.quantity || 0}{" "}
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
                              {(
                                this.props?.state_data?.data_page?.data
                                  ?.total_Bill_Before_DisCode || 0
                              ).toLocaleString()}{" "}
                              đ
                            </span>
                          </p>
                          <p>
                            Giá giảm:
                            <span class="total-price-sale">
                              -{" "}
                              {(
                                (this.props?.state_data?.data_page?.data
                                  ?.total_Bill_Before_DisCode || 0) -
                                (this.props?.state_data?.data_page?.data
                                  ?.total_Bill_After_DisCode || 0)
                              ).toLocaleString()}{" "}
                              đ
                            </span>
                          </p>
                          <p>
                            Tổng tiền:
                            <span id="total-price-new" class="total-price">
                              {(
                                this.props?.state_data?.data_page?.data
                                  ?.total_Bill_After_DisCode || 0
                              ).toLocaleString()}{" "}
                              đ
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
      </>
    );
  }
}
export default ShopingCart;
