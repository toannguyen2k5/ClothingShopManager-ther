import React, { Component } from "react";
import { urlapi } from "../../../../../../setting/store/const";
class ViewInfoBuyProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      nameSize: null,
      nameColor: null,
    };
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  AddToCart = () => {
    console.log(this.props);
    console.log(this.props.state_data.user_info.id_user);
    if (this.props.state_data.user_info.id_user) {
      if (!this.state.nameColor || !this.state.nameSize)
        alert("bạn chưa chọn màu sắc hoặc kích thước");
      else {
        const req = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            // dữ liệu gửi lên server
            idUser: this.props.state_data.user_info.id_user,
            nameColor: this.state.nameColor,
            nameSize: this.state.nameSize,
            idProduct: this.props.idProduct,
            quantity: this.state.quantity,
          }),
        };
        fetch(urlapi + "/api/shoppingcart/addToCart", req)
          .then((response) => response.json())
          .then((data) => {
            console.log("Response từ server:", data);
            alert(data.Messenger);
          })
          .catch((error) => console.error("Lỗi POST:", error));
      }
    } else {
      alert("vui lòng đăng nhập tài khoản !");
    }
  };
  render() {
    console.log("state :", this.state);
    return (
      <>
        <div class="select-swatch-detail">
          <form
            id="add-item-form"
            action="/cart/add"
            method="post"
            class="variants clearfix"
          >
            <div class="row">
              <div
                class="select-swatch clearfix col-xs-12 col-md-12 col-sm-12"
                style={{ display: "flex" }}
              >
                <div
                  id="variant-swatch-0"
                  class="swatch clearfix type-image"
                  data-option="option1"
                  data-option-index="0"
                  style={{ padding: "20px" }}
                >
                  <div className="header">
                    <div className="big-label mb-3">Kích thước:</div>
                    <div className="form-group mb-3">
                      <select
                        id="Size"
                        name="nameSize"
                        className="form-control big-select"
                        value={this.state.nameSize}
                        onChange={this.handleChange}
                        style={{
                          border: "1px solid",
                          width: "100px",
                          borderRadius: "10px",
                          height: "30px",
                          marginTop: "10px",
                          paddingLeft: "8px",
                          marginLeft: "10px",
                          textAlign: "center",
                        }}
                      >
                        <option value="">Choose...</option>
                        {this.props.ColorSize.map((item, index) => (
                          <option key={index} value={item.nameSize}>
                            {item.nameSize}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                <div
                  id="variant-swatch-0"
                  class="swatch clearfix type-image"
                  data-option="option1"
                  data-option-index="0"
                  style={{ padding: "20px" }}
                >
                  <div className="header">
                    <div className="big-label mb-3">Màu sắc:</div>
                    <div className="form-group mb-3">
                      <select
                        id="color"
                        name="nameColor"
                        className="form-control big-select"
                        value={this.state.nameColor}
                        onChange={this.handleChange}
                        style={{
                          border: "1px solid",
                          width: "100px",
                          borderRadius: "10px",
                          height: "30px",
                          marginTop: "10px",
                          paddingLeft: "8px",
                          marginLeft: "10px",
                          textAlign: "center",
                        }}
                      >
                        <option value="">Choose...</option>
                        {this.state.nameSize &&
                          this.props.ColorSize.map(
                            (item, index) =>
                              item.nameSize === this.state.nameSize && (
                                <option key={index} value={item.nameColor}>
                                  {item.nameColor}
                                </option>
                              )
                          )}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="row quantity">
          <div class="col-xs-12 selector-actions d-flex d-flex-center pd-top-10 button-swatch-detail-8">
            <div class="quantity-area">
              <input
                type="button"
                defaultValue="–"
                onClick={() => {
                  this.state.quantity > 1 &&
                    this.setState({ quantity: this.state.quantity - 1 });
                }}
                class="qty-btn qtyminus"
              />
              <input
                readOnly=""
                type="text"
                id="quantity"
                name="quantity"
                value={this.state.quantity}
                min="1"
                class="quantity-selector"
              />
              <input
                type="button"
                defaultValue="+"
                onClick={() => {
                  this.setState({ quantity: this.state.quantity + 1 });
                }}
                class="qty-btn qtyplus"
              />
            </div>
            <div className="wrap-addcart">
              <div className="row-flex">
                <div className="btn-action-addtocart">
                  <button
                    type="button"
                    id="add-to-cart"
                    className="flex-addcart-mb add-to-cart-style loading-container"
                    name="add"
                    data-id="1056846128"
                    style={{
                      color: "black",
                      border: "1px solid",
                      borderRadius: "10px",
                      fontWeight: "bold",
                    }}
                    onClick={this.AddToCart}
                  >
                    <span id="loading-content" className="loading-content">
                      Thêm vào giỏ
                    </span>
                  </button>
                </div>

                <div
                  className="btn-action btn-action-buynow"
                  style={{ border: "1px solid", borderRadius: "10px" }}
                >
                  <button
                    type="button"
                    className="btn-buynow hidden-xs buynow-style buy-now-event"
                    id="buy-now"
                    name="add"
                    data-id="1056846128"
                  >
                    <span>Mua ngay</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="service-product"></div>
        </div>
      </>
    );
  }
}
export default ViewInfoBuyProduct;
