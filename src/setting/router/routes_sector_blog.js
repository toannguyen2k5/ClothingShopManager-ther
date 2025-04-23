import React from "react";
const Cust_Home = React.lazy(() =>
  import("../../view/service_sector/sector_shop/customer/view/home/Home")
);
export const routes_sector_blog = [
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
    path: "/blog/home",
    exact: true,
    name: "Form Home",
    component: Cust_Home,
    file_name: "",
  },
  {
    path: "/blog/",
    exact: true,
    name: "Form Home",
    component: Cust_Home,
    file_name: "",
  },
  {
    path: "/blog",
    exact: true,
    name: "Form Home",
    component: Cust_Home,
    file_name: "",
  },
];
