import React, { Component } from "react";
import { urlapi } from "../../../../../../setting/store/const";
import { Link } from "react-router-dom";

class ShopingCartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shopingcart_items: [],
    };
  }
  componentDidMount() {
    console.log("Get Data");
    fetch(
      urlapi +
        "/api/shoppingcart/sellectShoppingCart?idUser=" +
        this.props.idUser
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.status && data.status === "200") {
          this.setState({ shopingcart_items: data.data });
        }
        console.log(data);
      })
      .catch((error) => console.error(error));
  }
  TotalMoneyNoDiscountEvent = (shopingcart_item) => {
    return shopingcart_item.quantity * shopingcart_item.price;
  };
  TotalMoneyCurrent = (item) => {
    let total = 0;
    if (item.decrease && item.quantityLimit) {
      if (item.quantity > item.quantityLimit) {
        total =
          (item.quantity - item.quantityLimit) * item.price +
          item.quantityLimit * item.price * (1 - item.decrease);
      } else {
        total = item.quantity * item.price * (1 - item.decrease);
      }
    } else {
      total = item.quantity * item.price;
    }
    return total;
  };
  componentDidUpdate(prevProps, prevState) {
    const { actions } = this.props;
    if (prevState.shopingcart_items !== this.state.shopingcart_items) {
      this.data = {
        total_Bill_Before_DisCode: 0,
        total_Bill_After_DisCode: 0,
        quantity: 0,
      };
      const result = this.state.shopingcart_items.reduce(
        (acc, item) => {
          if (item.status && item.status === true) {
            acc.total_Bill_Before_DisCode +=
              this.TotalMoneyNoDiscountEvent(item);
            acc.total_Bill_After_DisCode += this.TotalMoneyCurrent(item);
          }
          acc.quantity += item.quantity;
          return acc;
        },
        {
          total_Bill_Before_DisCode: 0,
          total_Bill_After_DisCode: 0,
          quantity: 0,
        }
      );

      actions.change_state_data({
        data: result,
      });
    }
  }
  UpdateQuantity(index, is_increase) {
    let items = [...this.state.shopingcart_items];
    is_increase ? (items[index].quantity += 1) : (items[index].quantity -= 1);
    fetch(
      urlapi +
        "/api/shoppingcart/updateShoppingCart?quantity=" +
        items[index].quantity +
        "&idShoppingCart=" +
        items[index].idShoppingCart
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.status && data.status === "200") {
          this.setState({ shopingcart_items: items });
        }
        console.log(data);
      })
      .catch((error) => console.error(error));
  }
  increase(index) {
    fetch(
      urlapi +
        "/api/detailproduct/sellect/inventory?idDetail=" +
        this.state.shopingcart_items[index].idDetail
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.status && data.status === "200") {
          if (data.data >= this.state.shopingcart_items[index].quantity + 1)
            this.UpdateQuantity(index, true);
          else alert("⚠️ Sản phẩm đã hết hàng!");
        }
        console.log(data);
      })
      .catch((error) => console.error(error));
  }
  decrease(index) {
    this.state.shopingcart_items[index].quantity > 1 &&
      this.UpdateQuantity(index, false);
  }
  OnclickCheckbox(index) {
    let items = [...this.state.shopingcart_items];
    items[index].status = !items[index].status;
    fetch(
      urlapi +
        "/api/shoppingcart/updateStatusShoppingCart?status=" +
        items[index].status +
        "&idShoppingCart=" +
        items[index].idShoppingCart
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.status && data.status === "200") {
          this.setState({ shopingcart_items: items });
        }
        console.log(data);
      })
      .catch((error) => console.error(error));
  }
  DeleteShopingCartItem(index) {
    let ShopingCartItems = this.state.shopingcart_items;
    fetch(
      urlapi +
        "/api/shoppingcart/deleteShoppingCart?idShoppingCart=" +
        ShopingCartItems[index].idShoppingCart
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.status && data.status === "200") {
          ShopingCartItems.splice(index, 1);
          this.setState({ shopingcart_items: ShopingCartItems });
        }
        console.log(data);
      })
      .catch((error) => console.error(error));
  }
  render() {
    return (
      <div>
        {this.state.shopingcart_items.map((shopingcart_item, index) => (
          <div className="cart-wrap" key={index}>
            <input
              type="checkbox"
              name="selectedProduct"
              value="product_id"
              onClick={() => this.OnclickCheckbox(index)}
              checked={shopingcart_item.status}
            />
            <div className="item-info">
              <div className="item-img">
                <a href="#">
                  <img src={shopingcart_item.path} alt="Sản phẩm" />
                </a>
              </div>
              <div className="cart_content">
                <div className="item-title">
                  <div className="cart_des">
                    <a
                      href={`/shop/detail_product/${shopingcart_item.idProduct}/`}
                    >
                      {shopingcart_item.nameProduct}
                    </a>
                  </div>
                  <div className="item-remove">
                    <span className="remove-wrap">
                      <a href="#">
                        <i
                          className="fa fa-times"
                          onClick={() => this.DeleteShopingCartItem(index)}
                        ></i>
                      </a>
                    </span>
                  </div>
                </div>
                <div className="cart_qty-pri">
                  <div className="item-qty">
                    <div className="option_content">
                      <span className="item-option">
                        <span>
                          {shopingcart_item.nameColor} /{" "}
                          {shopingcart_item.nameSize}
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="qty_pri-content">
                    <div className="quantity-area">
                      <input
                        type="button"
                        value="–"
                        className="qty-btn btn-left-quantity"
                        onClick={() => this.decrease(index)} // đây là cách đúng
                      />

                      <input
                        type="text"
                        readOnly
                        value={shopingcart_item.quantity}
                        className="quantity-selector quantity-mini"
                      />
                      <input
                        type="button"
                        value="+"
                        className="qty-btn btn-right-quantity"
                        onClick={() => this.increase(index)} // đúng cú pháp
                      />
                    </div>
                    <div className="group-item-option">
                      <span className="item-option">
                        <span className="item-price">
                          <span className="money">
                            {this.TotalMoneyCurrent(
                              shopingcart_item
                            ).toLocaleString()}
                            đ
                          </span>
                          <del>
                            {shopingcart_item.decrease !== null && (
                              <>
                                {this.TotalMoneyNoDiscountEvent(
                                  shopingcart_item
                                ).toLocaleString()}
                                <span>đ</span>
                              </>
                            )}
                          </del>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ShopingCartItem;
