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
      shippingFee: 0,
      address: "",
    };
  }
  componentDidMount() {
    this.GetShopingCartItem();
    this.GetAddress();
  }
  GetAddress = () => {
    fetch(
      `${urlapi}/api/Users/${this.props.state_data.user_info.id_user}/getInfo`,
      {
        method: "PUT",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({ address: data.data.address });
      })
      .catch((error) => {});
  };
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
            { shopingcart_items: data.data },
            this.GetShopByInventory
          );
        }
        console.log("data shopitem :", data);
      })
      .catch((error) => console.error(error));
  };
  GetShopByInventory = () => {
    const params = new URLSearchParams();
    const { shopingcart_items } = this.state;
    shopingcart_items.map((item, idx) => {
      if (item.status) params.append("idDetailProducts", item.idDetail);
    });
    fetch(urlapi + `/api/SalesSlip/GetShopByInventory?${params}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.status && data.status === "200") {
          this.setState({ shops: data.data, selectedShop: null });
        }
        console.log("data shop inven :", data);
      })
      .catch((error) => console.error(error));
  };
  GetInventoryByShop = () => {
    const params = new URLSearchParams();
    const { shopingcart_items, selectedShop } = this.state;
    params.append("idShop", selectedShop);
    shopingcart_items.map((item, idx) => {
      params.append("idDetailProducts", item.idDetail);
    });
    fetch(urlapi + `/api/SalesSlip/GetInventoryByShop?${params}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.status && data.status === "200") {
          this.setState({ inventory: null }, () => {
            let arrray = [];
            this.state.shopingcart_items.map((item, index) => {
              arrray.push({
                idShoppingCart: item.idShoppingCart,
                quantity: data.data[index],
              });
            });
            this.setState({ inventory: arrray });
          });
        }
        console.log("data inven shop:", this.state.inventory);
      })
      .catch((error) => console.error(error));
  };
  GetShipFree = () => {
    const queryString = new URLSearchParams();
    queryString.append("addressReceive", this.state.address);
    queryString.append("idShops", this.state.selectedShop);
    fetch(
      urlapi + `/api/SalesSlip/calculateShippingFee?${queryString.toString()}`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.status && data.status == "200") {
          this.setState({
            shippingFee: data.data,
          });
        } else
          this.setState({
            shippingFee: 0,
          });
      })
      .catch((error) => console.error(error));
  };
  changeShop = (e) => {
    this.setState({ selectedShop: e.target.value }, () => {
      this.GetInventoryByShop();
      this.GetShipFree();
    });
  };
  submitForm = () => {
    const { inventory } = this.state;
    const groupedData = [];
    this.state.shopingcart_items.map((item, index) => {
      if (item.status) {
        groupedData.push({
          idDetail: item.idDetail,
          quantity: parseInt(
            item.quantity > inventory[index].quantity
              ? inventory[index].quantity
              : item.quantity,
            10
          ),
          price: item.price,
        });
      }
    });
    let totalBill = 0;
    if (this.state.discode) {
      if (this.state.discode.discountOrPrice > 1) {
        totalBill =
          this.TotalMoneyCurrent() -
          this.state.discode.discountOrPrice +
          this.state.shippingFee;
      } else {
        totalBill =
          this.TotalMoneyCurrent() * (1 - this.state.discode.discountOrPrice) +
          this.state.shippingFee;
      }
    } else {
      totalBill = this.TotalMoneyCurrent() + this.state.shippingFee;
    }
    const today = new Date();
    const req = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        salesSlipData: {
          idCreater: this.props.state_data.user_info.id_user,
          idClient: this.props.state_data.user_info.id_user,
          createDate: today,
          deliveryAddress: this.state.address,
          totalBill: totalBill,
          shippingFee: this.state.shippingFee,
          note: this.state.note,
          discountcode: this.state.discode?.discountCode,
        },
        shopDeliveryData: [
          {
            idShop: this.state.selectedShop,
            shoppingCartData: groupedData,
          },
        ],
      }),
    };
    fetch(urlapi + "/api/SalesSlip/insertSalesSlip", req)
      .then((response) => response.json())
      .then((data) => {
        if (data.status && data.status === "200")
          alert("Tạo phiếu thành công !");
        else alert("Tạo phiếu thất bại!");
        console.log("Response tạo phiếu từ server:", data);
      })
      .catch((error) => console.error("Lỗi POST:", error));
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
                        <div className="checkout-buttons clearfix">
                          <label for="note" className="note-label">
                            Cửa Hàng
                          </label>
                          <div className="store_ship">
                            <div className="title_ship"></div>
                            <div id="tab-content">
                              <div
                                id="tabaddress1"
                                className="tab-pane fade in active"
                              >
                                <div className="select_option-address">
                                  <select
                                    name="change-tinh"
                                    className="change-tinh"
                                    style={{ width: "100000px" }}
                                    onChange={this.changeShop}
                                  >
                                    <option value="all">Chọn cửa hàng</option>
                                    {this.state.shops.map((shop, idx) => (
                                      <option
                                        key={shop.idShop}
                                        value={shop.idShop}
                                      >
                                        {shop.nameShop}
                                      </option>
                                    ))}
                                  </select>
                                </div>
                                <label> địa chỉ </label>
                                <textarea
                                  type="text"
                                  placeholder="Địa chỉ cửa hàng"
                                  readOnly
                                  disabled
                                  value={selectedShop?.address}
                                  style={{
                                    width: "1000px",
                                    height: "70px",
                                    backgroundColor: "InactiveCaption",
                                  }}
                                ></textarea>
                              </div>
                            </div>
                          </div>
                        </div>
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
                              {this.TotalMoneyCurrent().toLocaleString()} đ
                            </span>
                          </p>
                          <p>
                            Phí Ship:
                            <span
                              className="total-price total-price-cart"
                              style={{ color: "#000" }}
                            >
                              {this.state.shippingFee.toLocaleString()}đ
                            </span>
                          </p>
                          <p>
                            Giá giảm:
                            <span className="total-price-sale">
                              -{" "}
                              {this.state.discode &&
                                (this.state.discode.discountOrPrice > 1
                                  ? this.state.discode.discountOrPrice
                                  : this.TotalMoneyCurrent() *
                                    this.state.discode.discountOrPrice
                                ).toLocaleString()}{" "}
                              đ
                            </span>
                          </p>
                          <p>
                            Tổng tiền:
                            <span id="total-price-new" className="total-price">
                              {this.state.discode &&
                                (this.state.discode.discountOrPrice > 1
                                  ? this.TotalMoneyCurrent() -
                                    this.state.discode.discountOrPrice +
                                    this.state.shippingFee
                                  : this.TotalMoneyCurrent() *
                                      (1 - this.state.discode.discountOrPrice) +
                                    this.state.shippingFee
                                ).toLocaleString()}{" "}
                              {!this.state.discode &&
                                (
                                  this.TotalMoneyCurrent() +
                                  this.state.shippingFee
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
                          <ChooseAddress
                            {...this.props}
                            choosed={(data) => {
                              this.setState(
                                { ...this.state, address: data },
                                this.GetShipFree
                              );
                            }}
                          />
                          <label
                            for="note"
                            className="note-label"
                            style={{ fontSize: "14px" }}
                          >
                            Địa chỉ giao hàng
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
                            value={this.state.address}
                          ></textarea>
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
                            value={this.state.note}
                            onChange={(e) => {
                              this.setState({ note: e.target.value });
                            }}
                          />
                          <ChooseUserDiscountCode
                            Choosed={(data) => {
                              this.setState({ discode: data });
                            }}
                            idUser={this.props.state_data.user_info.id_user}
                            total={0}
                            {...this.props}
                          />
                        </div>
                        <div className="order_action">
                          <button
                            className="btncart-checkout text-center"
                            name="checkout"
                            type="button"
                            onClick={this.submitForm}
                          >
                            Giao Hàng
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
