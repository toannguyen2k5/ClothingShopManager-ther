import React, { Component } from "react";
import ItemProductV2 from "./item_product_2/ItemProductV2";

class ProductList extends Component {
  render() {
    const { list_product } = this.props;
    if (!list_product)
      return (
        <div className="content-product-list product-list filter d-flex row-left-list">
          No Record
        </div>
      );
    return (
      <div
        className="content-product-list product-list filter d-flex row-left-list"
        data-count={list_product.length}
      >
        {list_product.map((product) => (
          <ItemProductV2 key={product.id} product={product} />
        ))}
      </div>
    );
  }
}

export default ProductList;
