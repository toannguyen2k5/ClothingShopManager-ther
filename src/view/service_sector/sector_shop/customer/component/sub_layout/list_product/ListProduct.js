import React, { Component } from "react";
import { urlapi } from "../../../../../../../setting/store/const";
import ItemProductV2 from "./item_product_2/ItemProductV2";

class ListProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      quantity: 0,
    };
  }
  componentDidMount() {
    console.log("Get Data");
    fetch(urlapi + `/api/product/sellectAll/${this.state.quantity}/20/`)
      .then((response) => response.json())
      .then((data) => {
        if (data.status && data.status === "200") {
          console.log("data : ", data);
          this.setState({ products: [...this.state.products, ...data.data] });
        }
        console.log(data);
      })
      .catch((error) => console.error(error));
  }
  render() {
    return (
      <div
        class="content-product-list product-list filter d-flex row-left-list "
        data-count="95"
      >
        {this.state.products.map((item, index) => (
          <ItemProductV2
            product={{
              name: item.nameProduct,
              image: urlapi + "/api/Image/product/" + item.path,
              price: item?.price * (1 - item?.decrease) || 0,
              oldPrice: item?.price || 0,
              sale: item?.decrease * 100 || 0,
              id: item.idProduct,
            }}
          />
        ))}
      </div>
    );
  }
}

export default ListProduct;
