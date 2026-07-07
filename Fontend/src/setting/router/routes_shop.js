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

const ShopList = React.lazy(() =>
  import(
    "../../view/service_sector/sector_shop/customer/view/list_shop/ShopList"
  )
);
const ListProductCategory = React.lazy(() =>
  import(
    "../../view/service_sector/sector_shop/customer/view/view_product_category/ListProductCategory"
  )
);
const InforUser = React.lazy(() =>
  import(
    "../../view/service_sector/sector_shop/customer/view/infor_user/InforUser"
  )
);
const Checkout = React.lazy(() =>
  import(
    "../../view/service_sector/sector_shop/customer/view/CheckOut/Checkout"
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
    path: "/shop/list_product/c_:id_category/",
    exact: true,
    name: "Detail Product",
    component: ListProductCategory,
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
    path: "/shop/view_list",
    exact: true,
    name: "Form Home",
    component: ShopList,
    file_name: "",
  },
  {
    path: "/shop/infor",
    exact: true,
    name: "Information User",
    component: InforUser,
    file_name: "",
  },
  {
    path: "/shop",
    exact: true,
    name: "Form Home",
    component: Cust_Home,
    file_name: "",
  },
  {
    path: "/shop/checkout",
    exact: true,
    name: "Checkout",
    component: Checkout,
    file_name: "",
  },
];
