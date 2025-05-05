import React, { Component } from "react";
import { urlapi } from "../../../../../../setting/store/const";

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
          const totalquantity = data.reduce(
            (sum, item) => sum + item.quantity,
            0
          );
          this.setState({ shopingcart_items: data.data });
        }
        console.log(data);
      })
      .catch((error) => console.error(error));
  }
  TotalMoneyNoDiscountEvent = (shopingcart_item) => {
    return shopingcart_item.quantity * shopingcart_item.price;
  };
  TotalMoneyCurrent = (shopingcart_item) => {
    if (shopingcart_item.quantity > shopingcart_item.quantityLimit) {
      return (
        (shopingcart_item.quantity - shopingcart_item.quantityLimit) *
          shopingcart_item.price +
        shopingcart_item.quantityLimit *
          shopingcart_item.price *
          shopingcart_item.decrease
      );
    } else {
      return (
        shopingcart_item.quantity *
        shopingcart_item.price *
        shopingcart_item.decrease
      );
    }
  };
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
                      />
                      <input
                        type="text"
                        readOnly
                        value="3"
                        className="quantity-selector quantity-mini"
                      />
                      <input
                        type="button"
                        value="+"
                        className="qty-btn btn-right-quantity"
                      />
                    </div>
                    <div className="group-item-option">
                      <span className="item-option">
                        <span className="item-price">
                          <span className="money">
                            {shopingcart_item.decrease
                              ? this.TotalMoneyCurrent(shopingcart_item)
                              : null}{" "}
                          </span>
                          <del>
                            {this.TotalMoneyNoDiscountEvent(shopingcart_item)}
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
