import React from "react";

// admin
const Admin_Home = React.lazy(() =>
  import("../../view/admin/layout/home/Home")
);
const Admin_Profile = React.lazy(() =>
  import("../../view/admin/layout/profile/Profile")
);
const Admin_Setting = React.lazy(() =>
  import("../../view/admin/layout/setting/Setting")
);
const ProductList = React.lazy(() =>
  import("../../view/admin/layout/product/list/ProductList")
);
const ProductForm = React.lazy(() =>
  import("../../view/admin/layout/product/add_new/ProductForm")
);
const UpdateProduct = React.lazy(() =>
  import("../../view/admin/layout/product/update/UpdateProduct")
);
const PurchaseSlipManager = React.lazy(() =>
  import("../../view/admin/layout/order/input/new/PurchaseSlipManager")
);
const PurchaseSlipList = React.lazy(() =>
  import("../../view/admin/layout/order/input/list/PurchaseSlipList")
);
const UpdatePurchaseSlip = React.lazy(() =>
  import("../../view/admin/layout/order/input/update/UpdatePurchaseSlip")
);
const PromoCodeManager = React.lazy(() =>
  import("../../view/admin/layout/coupons/PromoCodeManager")
);
const StorePromoManager = React.lazy(() =>
  import("../../view/admin/layout/coupons_product/StorePromoManager")
);
const CustomerManager = React.lazy(() =>
  import("../../view/admin/layout/customer/list/CustomerManager")
);
const CustomerDetail = React.lazy(() =>
  import("../../view/admin/layout/customer/detail/CustomerDetail")
);
const CategoryManager = React.lazy(() =>
  import("../../view/admin/layout/category/CategoryManager")
);
const CommentManager = React.lazy(() =>
  import("../../view/admin/layout/comment/CommentManager")
);
const ProductInventory = React.lazy(() =>
  import("../../view/admin/layout/inventory/ProductInventory")
);
const AdminManager = React.lazy(() =>
  import("../../view/admin/layout/admin_manager/AdminManager")
);
const Admin_Billing = React.lazy(() =>
  import("../../view/admin/layout/billing/Billing")
);

export const routes_admin = [
  {
    path: "/admin/home",
    exact: true,
    name: "Form Search",
    component: Admin_Home,
  },
  {
    path: "/admin/dashboard",
    exact: true,
    name: "Form Search",
    component: Admin_Home,
  },
  {
    path: "/admin/manager/product/list/",
    exact: true,
    name: "Form Search",
    component: ProductList,
  },
  {
    path: "/admin/manager/product/new/",
    exact: true,
    name: "Form Search",
    component: ProductForm,
  },
  {
    path: "/admin/manager/product/update/",
    exact: true,
    name: "Form Search",
    component: UpdateProduct,
  },
  {
    path: "/admin/manager/coupons/list/",
    exact: true,
    name: "Form Search",
    component: PromoCodeManager,
  },
  {
    path: "/admin/manager/coupons/update/",
    exact: true,
    name: "Form Search",
    component: StorePromoManager,
  },
  {
    path: "/admin/manager/customer/list/",
    exact: true,
    name: "Form Search",
    component: CustomerManager,
  },
  {
    path: "/admin/manager/customer/detail/:id/",
    exact: true,
    name: "Form Search",
    component: CustomerDetail,
  },
  {
    path: "/admin/manager/review_product/",
    exact: true,
    name: "Form Search",
    component: CommentManager,
  },
  {
    path: "/admin/manager/coupons/inventory/",
    exact: true,
    name: "Form Search",
    component: ProductInventory,
  },
  {
    path: "/admin/manager/account/list/",
    exact: true,
    name: "Form Search",
    component: AdminManager,
  },

  {
    path: "/admin/manager/categories/",
    exact: true,
    name: "Form Search",
    component: CategoryManager,
  },
  {
    path: "/admin/manager/order/input/list/",
    exact: true,
    name: "Form Search",
    component: PurchaseSlipList,
  },
  {
    path: "/admin/manager/order/input/new/",
    exact: true,
    name: "Form Search",
    component: PurchaseSlipManager,
  },
  {
    path: "/admin/manager/order/input/update/",
    exact: true,
    name: "Form Search",
    component: UpdatePurchaseSlip,
  },
  {
    path: "/admin/profile/",
    exact: true,
    name: "Form Search",
    component: Admin_Profile,
  },
  {
    path: "/admin/setting/",
    exact: true,
    name: "Form Search",
    component: Admin_Setting,
  },
  {
    path: "/admin/billing/",
    exact: true,
    name: "Form Search",
    component: Admin_Billing,
  },
  { path: "/", exact: true, name: "Form Search", component: Admin_Home },
];
//Transtion_Sector
const Transtion_Sector_Blog = React.lazy(() =>
  import("../../view/service_sector/sector_shop/TranstionRole")
);
export const routes_sector = [
  {
    path: "/",
    exact: true,
    name: "Form Search",
    component: Transtion_Sector_Blog,
  },
  {
    path: "/blog/*",
    exact: true,
    name: "Form Search",
    component: Transtion_Sector_Blog,
  },
];
//=========================================================

// public
const Login = React.lazy(() => import("../../view/public/login/Login"));
const ResetPass = React.lazy(() =>
  import("../../view/public/resetPass/ResetPass")
);
const Signup = React.lazy(() => import("../../view/public/signup/Signup"));
const Error404 = React.lazy(() => import("../../view/public/error/Error404"));

export const routesPage = [
  { path: "/login/", exact: true, name: "Login", component: Login },
  { path: "/signup/", exact: true, name: "Login", component: Signup },
  { path: "/reset-pass/", exact: true, name: "Login", component: ResetPass },
  { path: "/not_found/404/", exact: true, name: "Login", component: Error404 },
];
