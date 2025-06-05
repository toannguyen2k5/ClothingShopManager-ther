import React, { Component } from "react";
import { urlapi } from "../../../../../../../setting/store/const";
import ItemProductV2 from "./item_product_2/ItemProductV2";

class ListProduct extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div
          className="content-product-list product-list filter d-flex row-left-list "
          data-count="95"
        >
          {this.props.list_product.map((item, index) => (
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
      </>
    );
  }
}

export default ListProduct;
