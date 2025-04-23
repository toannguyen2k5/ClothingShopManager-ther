import React from "react";
import "./css.scss"; // Import SCSS vào React

const ItemProductV2 = ({ product }) => {
  return (
    <div class="col-lg-3 col-md-3 col-sm-4 col-xs-6 mg-bottom-15 pd-right-0 d-flex-column">
      <div className="product-card">
        <div className="image-wrapper">
            <a href={`/product/${product.id}`}>
                <img src={product.image} alt={product.name} />
                <span className="new-badge">
                    New
                </span>
                <span className="sale-badge">
                    {product.sale ? `-${product.sale}%` : ""}
                </span>
            </a>
        </div>

        <div className="product-info">
            <a href={`/product/${product.id}`}>
                <h3>{product.name}</h3>
                <div className="price">
                    <span className="current-price">
                    {product.price.toLocaleString()}₫
                    </span>
                    <span className="old-price">
                    {product.oldPrice && (
                        <span className="text-sm text-gray-500 line-through ml-2">
                        {product.oldPrice.toLocaleString()}₫
                        </span>
                    )}
                    </span>
                </div>
            </a>
          <button>Thêm vào giỏ hàng</button>
        </div>
      </div>
    </div>
  );
};

export default ItemProductV2;
