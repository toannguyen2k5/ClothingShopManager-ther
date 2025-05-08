import React, { Component } from "react";
import { urlapi } from "../../../../../../setting/store/const";

class ShopingCartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shopingcart_items: [],
    };
    this.data = {
      total_Bill_Before_DisCode: 0,
      total_Bill_After_DisCode: 0,
      amount_discounted: 0,
      quantity: 0,
    };
  }
  componentDidMount() {
    const { actions } = this.props;
    console.log("Get Data");
    fetch(
      urlapi +
        "/api/shoppingcart/sellectShoppingCart?idUser=" +
        this.props.idUser
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.status && data.status === "200") {
          const totalquantity = data.data.reduce(
            (sum, item) => sum + item.quantity,
            0
          );
          actions.change_state_data({ totalquantity: totalquantity });
          this.setState({ shopingcart_items: data.data });
        }
        console.log(data);
      })
      .catch((error) => console.error(error));
  }
  TotalMoneyNoDiscountEvent = (shopingcart_item) => {
    const total = shopingcart_item.quantity * shopingcart_item.price;
    this.data.total_Bill_Before_DisCode += total;
    return total;
  };
  TotalMoneyCurrent = (item) => {
    let total = 0;
    this.data.quantity += item.quantity;
    if (item.decrease && item.quantityLimit) {
      if (item.quantity > item.quantityLimit) {
        total =
          (item.quantity - item.quantityLimit) * item.price +
          item.quantityLimit * item.price * item.decrease;
      } else {
        total = item.quantity * item.price * item.decrease;
      }
    } else {
      total = item.quantity * item.price;
    }
    this.data.total_Bill_After_DisCode += total;
    return total;
  };
  increase(index) {
    const { actions, state_data } = this.props;
    let items = [...this.state.shopingcart_items];
    items[index].quantity += 1;
    fetch(
      urlapi +
        "/api/shoppingcart/updateShoppingCart?quantity=" +
        items[index].quantity +
        "&idShoppingCart=" +
        items[index].idShoppingCart
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.status && data.status === "200") this.data.quantity += 1;
        console.log(data);
      })
      .catch((error) => console.error(error));
    this.setState({ shopingcart_items: items });
    actions.change_state_data({
      totalquantity: state_data.data_page.totalquantity + 1,
    });
  }
  decrease(index) {
    const { actions, state_data } = this.props;
    let items = [...this.state.shopingcart_items];
    items[index].quantity -= 1;
    fetch(
      urlapi +
        "/api/shoppingcart/updateShoppingCart?quantity=" +
        items[index].quantity +
        "&idShoppingCart=" +
        items[index].idShoppingCart
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.status && data.status === "200") this.data.quantity -= 1;
        console.log(data);
      })
      .catch((error) => console.error(error));
    this.setState({ shopingcart_items: items });
    actions.change_state_data({
      totalquantity: state_data.data_page.totalquantity - 1,
    });
  }
  render() {
    return (
      <div>
        {this.state.shopingcart_items.map((shopingcart_item, index) => (
          <div className="cart-wrap" key={index}>
            <div className="item-info">
              <div className="item-img">
                <a href="#">
                  <img src={shopingcart_item.path} alt="Sản phẩm" />
                </a>
              </div>
              <div className="cart_content">
                <div className="item-title">
                  <div className="cart_des">
                    <a href="#">{shopingcart_item.nameProduct}</a>
                  </div>
                  <div className="item-remove">
                    <span className="remove-wrap">
                      <a href="#">
                        <i className="fa fa-times"></i>
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
                            {this.TotalMoneyCurrent(shopingcart_item)}đ
                          </span>
                          <del>
                            {shopingcart_item.decrease !== null && (
                              <>
                                {this.TotalMoneyNoDiscountEvent(
                                  shopingcart_item
                                )}
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
        {this.props.onDataSend(this.data)}
      </div>
    );
  }
}

export default ShopingCartItem;
