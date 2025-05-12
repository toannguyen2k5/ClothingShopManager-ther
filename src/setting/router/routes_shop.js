import React from "react";
const Cust_Home = React.lazy(() =>
  import("../../view/service_sector/sector_shop/customer/view/home/Home")
);

const DetailProduct = React.lazy(() =>
  import(
    "../../view/service_sector/sector_shop/customer/view/detail_product/DetailProduct"
  )
);
const ShopingCart = React.lazy(() =>
  import(
    "../../view/service_sector/sector_shop/customer/view/shoping_cart/ShopingCart"
  )
);
export const routes_shop = [
  {
    path: "/",
    exact: true,
    name: "Form Home",
    component: Cust_Home,
    file_name: "",
  },
  {
    path: "/home",
    exact: true,
    name: "Form Home",
    component: Cust_Home,
    file_name: "",
  },
  {
    path: "/shop/detail_product/:idProduct/",
    exact: true,
    name: "Detail Product",
    component: DetailProduct,
    file_name: "",
  },
  {
    path: "/shop/shoping_cart",
    exact: true,
    name: "Shoping Cart",
    component: ShopingCart,
    file_name: "",
  },
  {
    path: "/shop/",
    exact: true,
    name: "Form Home",
    component: Cust_Home,
    file_name: "",
  },
  {
    path: "/shop",
    exact: true,
    name: "Form Home",
    component: Cust_Home,
    file_name: "",
  },
];
