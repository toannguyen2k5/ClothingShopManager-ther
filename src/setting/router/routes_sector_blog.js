import React from "react";
const Cust_Home = React.lazy(() =>
  import("../../view/service_sector/sector_blog/customer/view/home/Home")
);
const Cust_ContentBlog = React.lazy(() =>
  import("../../view/service_sector/sector_blog/customer/view/detail_blog/ContentBlog")
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
  {
    path: "/blog/c1",
    exact: true,
    name: "Form Home",
    component: Cust_ContentBlog,
    file_name: "Content1.js",
  },
];
