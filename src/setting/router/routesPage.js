import React from "react";

// admin
const Admin_Home = React.lazy(() => import("../../view/admin/layout/home/Home"));
const Admin_Profile = React.lazy(() => import("../../view/admin/layout/profile/Profile"));
const Admin_Setting = React.lazy(() => import("../../view/admin/layout/setting/Setting"));
const Admin_Billing = React.lazy(() => import("../../view/admin/layout/billing/Billing"));
 
export const routes_admin = [
  { path: "/", exact: true, name: "Form Search", component: Admin_Home },
  { path: "/admin/home", exact: true, name: "Form Search", component: Admin_Home },
  { path: "/admin/dashboard", exact: true, name: "Form Search", component: Admin_Home },
  { path: "/admin/profile/", exact: true, name: "Form Search", component: Admin_Profile },
  { path: "/admin/setting/", exact: true, name: "Form Search", component: Admin_Setting },
  { path: "/admin/billing/", exact: true, name: "Form Search", component: Admin_Billing },
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
