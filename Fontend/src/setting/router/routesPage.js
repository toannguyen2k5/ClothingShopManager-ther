import React from "react";
import { routes_shop } from "./routes_shop";

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
const CreateSalesSlip = React.lazy(() =>
  import("../../view/admin/layout/order/export/new/CreateSalesSlip")
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
    role_level: 5
  },
  {
    path: "/admin/dashboard/",
    exact: true,
    name: "Form Search",
    component: Admin_Home,
    role_level: 5
  },
  {
    path: "/admin/manager/product/list/",
    exact: true,
    name: "Form Search",
    component: ProductList,
    role_level: 5
  },
  {
    path: "/admin/manager/product/new/",
    exact: true,
    name: "Form Search",
    component: ProductForm,
    role_level: 5
  },
  {
    path: "/admin/manager/product/update/",
    exact: true,
    name: "Form Search",
    component: UpdateProduct,
    role_level: 5
  },
  {
    path: "/admin/manager/coupons/list/",
    exact: true,
    name: "Form Search",
    component: PromoCodeManager,
    role_level: 10
  },
  {
    path: "/admin/manager/coupons/update/",
    exact: true,
    name: "Form Search",
    component: StorePromoManager,
    role_level: 10
  },
  {
    path: "/admin/manager/customer/list/",
    exact: true,
    name: "Form Search",
    component: CustomerManager,
    role_level: 5
  },
  {
    path: "/admin/manager/customer/detail/:id/",
    exact: true,
    name: "Form Search",
    component: CustomerDetail,
    role_level: 5
  },
  {
    path: "/admin/manager/review_product/",
    exact: true,
    name: "Form Search",
    component: CommentManager,
    role_level: 5
  },
  {
    path: "/admin/manager/shop",
    exact: true,
    name: "Form Search",
    component: ProductInventory,
    role_level: 5
  },
  {
    path: "/admin/manager/account/list/",
    exact: true,
    name: "Form Search",
    component: AdminManager,
    role_level: 99
  },

  {
    path: "/admin/manager/categories/",
    exact: true,
    name: "Form Search",
    component: CategoryManager,
    role_level: 5
  },
  {
    path: "/admin/manager/order/input/list/",
    exact: true,
    name: "Form Search",
    component: PurchaseSlipList,
    role_level: 5
  },
  {
    path: "/admin/manager/order/export/new/",
    exact: true,
    name: "Form Search",
    component: CreateSalesSlip,
    role_level: 5
  },
  {
    path: "/admin/manager/order/input/new/",
    exact: true,
    name: "Form Search",
    component: PurchaseSlipManager,
    role_level: 5
  },
  {
    path: "/admin/manager/order/input/update/",
    exact: true,
    name: "Form Search",
    component: UpdatePurchaseSlip,
    role_level: 5
  },
  {
    path: "/admin/profile/",
    exact: true,
    name: "Form Search",
    component: Admin_Profile,
    role_level: 5
  },
  {
    path: "/admin/setting/",
    exact: true,
    name: "Form Search",
    component: Admin_Setting,
    role_level: 5
  },
  {
    path: "/admin/billing/",
    exact: true,
    name: "Form Search",
    component: Admin_Billing,
    role_level: 5
  },
  { path: "/", exact: true, name: "Form Search", component: Admin_Home,
    role_level: 5 },
];
//Transtion_Sector
const Transtion_Sector_Shop = React.lazy(() =>
  import("../../view/service_sector/sector_shop/TranstionRole")
);
export const routes_sector = routes_shop.map((item) => ({
  ...item,
  component: Transtion_Sector_Shop,
}));
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
