import React from "react";
import ItemProductV1 from "./item_product_1/ItemProductV1";
import ItemProductV2 from "./item_product_2/ItemProductV2";

const ListProduct = ({ src, alt }) => {
  return (
    <div
      class="content-product-list product-list filter d-flex row-left-list "
      data-count="95"
    >
      <ItemProductV2
        product={{
          name: "iPhone 14 Pro Max 256GB hdsjhfsdf sdf sdf sd fsd f sd f sdf sd fsd f sd ewr ưe rwe rwerwe rwer",
          image: "//product.hstatic.net/1000253775/product/160_ao_thun_544-6_7a37a6976a3049538b7924af184e050c_large.jpg",
          price: 28990000,
          oldPrice: 31990000,
          sale: 10,
          id:"ID001"
        }}
      />
      <ItemProductV2
        product={{
          name: "iPhone 14 Pro Max 256GB hdsjhfsdf sdf sdf sd fsd f sd f sdf sd fsd f sd ewr ưe rwe rwerwe rwer",
          image: "//product.hstatic.net/1000253775/product/160_ao_thun_544-6_7a37a6976a3049538b7924af184e050c_large.jpg",
          price: 28990000,
          oldPrice: 31990000,
          sale: 10,
          id:"ID001"
        }}
      />
      <ItemProductV2
        product={{
          name: "iPhone 14 Pro Max 256GB hdsjhfsdf sdf sdf sd fsd f sd f sdf sd fsd f sd ewr ưe rwe rwerwe rwer",
          image: "//product.hstatic.net/1000253775/product/160_ao_thun_544-6_7a37a6976a3049538b7924af184e050c_large.jpg",
          price: 28990000,
          oldPrice: 31990000,
          sale: 10,
          id:"ID001"
        }}
      />
      <ItemProductV2
        product={{
          name: "iPhone 14 Pro Max 256GB hdsjhfsdf sdf sdf sd fsd f sd f sdf sd fsd f sd ewr ưe rwe rwerwe rwer",
          image: "//product.hstatic.net/1000253775/product/160_ao_thun_544-6_7a37a6976a3049538b7924af184e050c_large.jpg",
          price: 28990000,
          oldPrice: 31990000,
          sale: 10,
          id:"ID001"
        }}
      />
      
    </div>
  );
};

export default ListProduct;
