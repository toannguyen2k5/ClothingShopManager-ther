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
import "../../../../../admin/layout/order/input/list/PurchaseSlipList.css";
import { urlapi } from "../../../../../../setting/store/const";
class ShopingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shopingcart_items: [],
      shops: [],
      selectedShop: null,
      inventory: [],
      discode: null,
      note: "",
      address: "",
      shippingFee: 0
    };
  }
  componentDidMount() {
    this.GetShopingCartItem();
  }
  GetShopingCartItem = () => {
    fetch(
      urlapi +
        "/api/shoppingcart/sellectShoppingCart?idUser=" +
        this.props.state_data.user_info.id_user
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.status && data.status === "200") {
          this.setState(
            { shopingcart_items: data.data }
          );
        }
        console.log("data shopitem :", data);
      })
      .catch((error) => console.error(error));
  };
  TotalMoneyCurrent = () => {
    const { shopingcart_items } = this.state;
    const total = shopingcart_items.reduce((sum, item) => {
      if (item.status) {
        let itemTotal = 0;
        if (item.decrease && item.quantityLimit) {
          if (item.quantity > item.quantityLimit) {
            itemTotal =
              (item.quantity - item.quantityLimit) * item.price +
              item.quantityLimit * item.price * (1 - item.decrease);
          } else {
            itemTotal = item.quantity * item.price * (1 - item.decrease);
          }
        } else {
          itemTotal = item.quantity * item.price;
        }
        return sum + itemTotal;
      }
      return sum; // nếu item.status === false thì trả về sum
    }, 0);
    return total;
  };
  CountSelectedItems = () => {
    return this.state.shopingcart_items.filter(
        item => item.status
    ).length;
}
TotalQuantity = () => {
    return this.state.shopingcart_items.reduce(
        (sum,item)=>
            item.status
                ? sum + item.quantity
                : sum,
        0
    );
}
TotalOriginalMoney = () => {
  return this.state.shopingcart_items.reduce((sum, item) => {
    if (!item.status) return sum;

    return sum + item.price * item.quantity;
  }, 0);
};
TotalSavedMoney = () => {
  return this.TotalOriginalMoney() - this.TotalMoneyCurrent();
};
submitOrder =()=>{
  const items = this.state.shopingcart_items.filter(item => item.status);
  this.props.actions.change_state_data({
    cartItems: items,
    subTotal: this.TotalMoneyCurrent()
  });
  this.props.history.push("/shop/checkout")
}
  render() {
    console.log(this.props);
    const selectedShop = this.state.shops.find(
      (shop) => shop.idShop === this.state.selectedShop
    );
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
              <form action="/cart" method="post" encType="multipart/form-data">
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
                          update={this.GetShopingCartItem}
                          inventory={this.state.inventory}
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
                          <h4>TÓM TẮT ĐƠN HÀNG</h4>
                        </div>
                        <div className="summary-row">
                          <span>📦 Sản phẩm đã chọn</span>
                          <span>{this.CountSelectedItems()}</span>
                        </div>
                        <div className="summary-row">
                          <span>🛒 Tổng số lượng</span>
                          <span>{this.TotalQuantity()}</span>
                        </div>
                        <div className="summary-row">
                          <span>Giá gốc</span>
                          <span>
                            {this.TotalOriginalMoney().toLocaleString()}đ
                          </span>
                        </div>

                        <div className="summary-row save-row">
                          <span>Tiết kiệm</span>
                          <span>
                            -{this.TotalSavedMoney().toLocaleString()}đ
                          </span>
                        </div>
                          <hr/>
                          <div className="summary-row total-price">
                          <span>💰 Tạm tính</span>
                          <span>{this.TotalMoneyCurrent().toLocaleString()}đ</span>
                        </div>
                          <div className="summary-row">
                              Voucher và phí vận chuyển sẽ
                              được tính ở bước tiếp theo.
                          </div>
                      </div>
                        <div className="order_total">
                            </div>
                            <div className="order_action">
                              <button
                                className="btncart-checkout text-center"
                                name="checkout"
                                type="button"
                                onClick={this.submitOrder}
                              >
                                TIẾN HÀNH THANH TOÁN
                              </button>
                              <p className="link-continue text-center">
                                <a href="/home">
                                  <i className="fa fa-reply"></i> Tiếp tục mua hàng
                                </a>
                              </p>
                            </div>
                            <br />
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
