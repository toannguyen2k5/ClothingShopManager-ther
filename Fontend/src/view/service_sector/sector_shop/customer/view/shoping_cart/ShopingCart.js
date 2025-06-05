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
          <div className="breadcrumb-shop">
            <div className="container">
              <ol
                className="breadcrumb breadcrumb-arrows"
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
                  className="active"
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

          <section id="cart-template" className="cart-page">
            <div className="container">
              <form action="/cart" method="post" enctype="multipart/form-data">
                <div className="d-flex row-left-list">
                  <div className="col-xs-12 col-lg-7 col-md-12 col-sm-12 mg-top-15 pd-right-0">
                    <div className="bg-while">
                      <div className="cart-title">
                        <h2>Giỏ hàng:</h2>
                        <span className="cart-count">
                          <span className="cart-counter">
                            {this.props?.state_data?.data_page?.data
                              ?.quantity || 0}{" "}
                          </span>
                          <span className="cart-item-title">Sản phẩm</span>
                        </span>
                      </div>

                      <div className="flashsale__progressbar">
                        <div
                          className="flashsale___percent"
                          style={{ width: "100%" }}
                        ></div>
                      </div>
                      <div className="cart-sale"></div>

                      <div className="item-wrap" id="cart-page-result">
                        <ShopingCartItem
                          total={this.callBack}
                          idUser={this.props.state_data.user_info.id_user}
                          {...this.props}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12 col-lg-5 col-md-12 col-sm-12 mg-top-15 pd-right-0">
                    <div className="combo-content">
                      <div className="cart-sale-marvel"></div>
                    </div>

                    <div className="bg-while sidebar-checkout">
                      <div className="sidebar-order-wrap">
                        <div className="order_title">
                          <h4>Tổng giá trị đơn hàng</h4>
                        </div>
                        <div className="order_total">
                          <p>
                            Tạm tính:
                            <span
                              className="total-price total-price-cart"
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
                            <span className="total-price-sale">
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
                            <span id="total-price-new" className="total-price">
                              {(
                                this.props?.state_data?.data_page?.data
                                  ?.total_Bill_After_DisCode || 0
                              ).toLocaleString()}{" "}
                              đ
                            </span>
                          </p>
                        </div>
                        <div className="store_ship">
                          <div className="title_ship">
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
                        <div className="checkout-buttons clearfix">
                          <label for="note" className="note-label">
                            Ghi chú
                          </label>
                          <textarea
                            className="form-control"
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
                        <div className="order_action">
                          <button
                            className="btncart-checkout text-center"
                            name="checkout"
                            type="submit"
                          >
                            Giao Hàng Ngay
                          </button>
                          <p className="link-continue text-center">
                            <a href="/collections/all">
                              <i className="fa fa-reply"></i> Tiếp tục mua hàng
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
