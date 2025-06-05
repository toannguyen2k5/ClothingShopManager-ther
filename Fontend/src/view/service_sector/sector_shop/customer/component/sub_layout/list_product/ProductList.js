import React, { Component } from "react";
import ItemProductV2 from "./item_product_2/ItemProductV2";
import { urlapi } from "../../../../../../../setting/store/const";
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
        {list_product.map((item, index) => (
          <ItemProductV2
            product={{
              ...item,
              nameProduct: item.nameProduct,
              path: urlapi + "/api/Image/" + item.path,
              price: item?.price * (1 - item?.decrease) || 0,
              oldPrice: item?.price || 0,
              sale: item?.decrease * 100 || 0,
              idProduct: item.idProduct,
            }}
            {...this.props}
          />
        ))}
      </div>
    );
  }
}

export default ProductList;
