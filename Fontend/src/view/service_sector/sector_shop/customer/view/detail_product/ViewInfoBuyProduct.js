import React, { Component } from "react";
import { urlapi } from "../../../../../../setting/store/const";
class ViewInfoBuyProduct extends Component {
  constructor(props) {
    super(props);
    const item_first = (this.props.ColorSize || []).find(
      (item) => item?.nameSize != null  && item?.nameColor != null);
    this.state = {
      quantity_selected: 1,
      nameSize: item_first?.nameSize || null,
      nameColor: item_first?.nameColor || null,
      quantity: item_first?.quantity || null
    };
  }
  getVariant = (nameSize, nameColor) =>
    (this.props.ColorSize || []).find(
      (item) =>
        item.nameSize === nameSize && item.nameColor === nameColor
    );

  handleChange = (e) => {
    const { name, value } = e.target;
    const variants = this.props.ColorSize || [];
    if (name === "nameSize") {
      const variantsForSize = variants.filter((item) => item.nameSize === value);
      const matchingVariant =
        variantsForSize.find((item) => item.nameColor === this.state.nameColor) ||
        variantsForSize[0];
      this.setState((prevState) => ({
        nameSize: value,
        nameColor: matchingVariant ? matchingVariant.nameColor : "",
        quantity: matchingVariant ? matchingVariant.quantity : 0,
        quantity_selected: matchingVariant
          ? Math.min(prevState.quantity_selected, matchingVariant.quantity || 1)
          : 1,
      }));
      return;
    }
    const matchingVariant = this.getVariant(this.state.nameSize, value);
    this.setState((prevState) => ({
      nameColor: value,
      quantity: matchingVariant ? matchingVariant.quantity : 0,
      quantity_selected: matchingVariant
        ? Math.min(prevState.quantity_selected, matchingVariant.quantity || 1)
        : 1,
    }));
  };
  increase = () => {
    if(this.state?.quantity === null){
      alert("bạn chưa chọn màu sắc hoặc kích thước");
      return;
    }
    if(!this.state.nameSize || !this.state.nameColor){
      alert("bạn chưa chọn màu sắc hoặc kích thước");
      return;
    }
    if (!this.state.quantity || this.state.quantity_selected > this.state.quantity) {
      alert("Sản phẩm với kích thước và màu sắc này hiện không đủ hàng");
      return;
    }
    if(this.state.quantity_selected < this.state.quantity){
      this.setState({ quantity_selected: this.state.quantity_selected + 1 });
    }
    else alert("sản phẩm có size và màu sắc này chỉ còn " + this.state.quantity + " sản phẩm");
  };
  decrease = () => {
    if (this.state.quantity_selected > 1) {
      this.setState({ quantity_selected: this.state.quantity_selected - 1 });
    }
  };
  AddToCart = () => {
    console.log(this.props);
    console.log(this.props.state_data.user_info.id_user);
    if (this.props.state_data.user_info.id_user) {
      if (!this.state.nameColor || !this.state.nameSize)
        alert("bạn chưa chọn màu sắc hoặc kích thước");
      else if (
        !this.state.quantity ||
        this.state.quantity_selected > this.state.quantity
      )
        alert("Sản phẩm với kích thước và màu sắc này hiện không đủ hàng");
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
            quantity: this.state.quantity_selected,
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
      alert("Đăng nhập để thêm sản phẩm vào giỏ hàng !");
      this.props.history.push("/login");
    }
  };
  buyNow = () => {
    if (this.props.state_data.user_info.id_user) {
      if (!this.state.nameColor || !this.state.nameSize) {
        alert("bạn chưa chọn màu sắc hoặc kích thước");
        return;
      }
      if (!this.state.quantity) {
        alert("Sản phẩm với kích thước và màu sắc này hiện không đủ hàng");
        return;
      }
      const req = "?idUser=" + this.props.state_data.user_info.id_user +
            "&idProduct=" + this.props.idProduct +
            "&nameSize=" + this.state.nameSize +
            "&nameColor=" + this.state.nameColor
      fetch(urlapi + "/api/shoppingcart/updateStatusBuyNow" + req)
            .then((response) => response.json())
            .then((data) => {
              console.log("Response từ server:", data);
              alert(data.Messenger);
              if(data.status === "200"){
                this.props.history.push("/shop/shoping_cart");
              }
            })
            .catch((error) => console.error("Lỗi POST:", error));
    } else {
      alert("Đăng nhập để mua sản phẩm !");
      this.props.history.push("/login");
    }
  }
  render() {
    console.log("state :", this.state);
    return (
      <>
        <div className="select-swatch-detail">
          <form
            id="add-item-form"
            action="/cart/add"
            method="post"
            className="variants clearfix"
          >
            <div className="row">
              <div
                className="select-swatch clearfix col-xs-12 col-md-12 col-sm-12"
                style={{ display: "flex" }}
              >
                <div
                  id="variant-swatch-0"
                  className="swatch clearfix type-image"
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
                        {[...new Set((this.props.ColorSize || []).map((item) => item.nameSize))].map((size, index) => (
                          <option key={`${size}-${index}`} value={size}>
                            {size}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                <div
                  id="variant-swatch-0"
                  className="swatch clearfix type-image"
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
                        {this.state.nameSize &&
                          [
                            ...new Set(
                              (this.props.ColorSize || [])
                                .filter((item) => item.nameSize === this.state.nameSize)
                                .map((item) => item.nameColor)
                            ),
                          ].map((color) => (
                            <option key={color} value={color}>
                              {color}
                            </option>
                          ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="row quantity">
          <div className="col-xs-12 selector-actions d-flex d-flex-center pd-top-10 button-swatch-detail-8">
            <div className="quantity-area">
              <input
                type="button"
                defaultValue="–"
                onClick={this.decrease}
                className="qty-btn qtyminus"
              />
              <input
                readOnly=""
                type="text"
                id="quantity"
                name="quantity"
                value={this.state.quantity_selected}
                min="1"
                className="quantity-selector"
              />
              <input
                type="button"
                defaultValue="+"
                onClick={this.increase}
                className="qty-btn qtyplus"
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
                    onClick={this.buyNow}
                  >
                    <span>Mua ngay</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="service-product"></div>
        </div>
      </>
    );
  }
}
export default ViewInfoBuyProduct;
