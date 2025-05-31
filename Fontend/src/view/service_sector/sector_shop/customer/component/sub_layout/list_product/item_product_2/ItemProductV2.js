import React, { Component } from "react";
import "./css.scss"; // Import SCSS vào React

class ItemProductV2 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { product } = this.props;
    console.log(this.props);
    return (
      <div className="col-lg-3 col-md-3 col-sm-4 col-xs-6 mg-bottom-15 pd-right-0 d-flex-column">
        <div className="product-card">
          <div className="image-wrapper">
            <a href={`/shop/detail_product/${product.idProduct}/`}>
              <img src={product?.path} alt={product.nameProduct} />
              {product.sale ? (
                <span className="sale-badge">{`-${product.sale}%`}</span>
              ) : null}
            </a>
          </div>

          <div className="product-info">
            <a href={`/shop/detail_product/${product.idProduct}/`}>
              <h3>{product.nameProduct}</h3>
              <div
                className="row col"
                style={{ marginLeft: 0, marginRight: 0 }}
              >
                <div className="col-6">
                  <p className="brand-title">Thương hiệu</p>
                  <span className="brand">{product.nameBrand}</span>
                </div>
                <div className="col-6">
                  <p className="material-title">Chất liệu</p>
                  <span className="material">{product.nameMaterial}</span>
                </div>
              </div>

              <div className="price">
                <span>Giá:</span>
                <span
                  className="current-price"
                  style={{ marginLeft: "3px", fontWeight: 900 }}
                >
                  {product.price.toLocaleString()}₫
                </span>
                <span className="old-price">
                  {product.oldPrice && (
                    <span className="text-sm text-gray-500 line-through ml-2">
                      {product.oldPrice.toLocaleString()}₫
                    </span>
                  )}
                </span>
                {product.quantity ? (
                  <div className="product-sl">
                    Số Lượng: {product.quantity.toLocaleString()}
                  </div>
                ) : null}
              </div>
            </a>
            <button
              onClick={() =>
                this.props.actions.add_product_to_cart({
                  idProduct: product.idProduct,
                  quantity: 1,
                })
              }
            >
              Thêm vào giỏ hàng
            </button>
          </div>

          <div className="price-info ">
            <span className="current-price">
              {product.price.toLocaleString()}₫
            </span>
            {product.oldPrice > product.price ? (
              <span className="old-price">
                <span className="text-sm text-gray-500 line-through ml-2">
                  {product.oldPrice.toLocaleString()}₫
                </span>
              </span>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default ItemProductV2;
