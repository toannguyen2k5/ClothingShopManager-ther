export const nav = [
  {
    sidebarHeading: "",
    nav_arr: [
      {
        id_nav: "nav0001",
        nav_name: "QUẢN LÝ SẢN PHẨM",
        nav_icon: "fa fa-area-chart",
        nav_to: "#",
        role_level: 5,
        nav_sub_arr: [
          {
            id_sub_nav: "subnav001",
            nav_sub_name: "Xem danh sách sản phẩm",
            nav_sub_to: "/admin/manager/product/list/",
            nav_sub_icon: "",
            role_level: 5,
          },
          {
            id_sub_nav: "subnav002",
            nav_sub_name: "Thêm mới sản phẩm",
            nav_sub_to: "/admin/manager/product/new/",
            nav_sub_icon: "",
            role_level: 10,
          },
          {
            id_sub_nav: "subnav003",
            nav_sub_name: "Danh mục sản phẩm",
            nav_sub_to: "/admin/manager/categories/",
            nav_sub_icon: "",
            role_level: 99,
          },
          {
            id_sub_nav: "subnav004",
            nav_sub_name: "Thuộc tính sản phẩm",
            nav_sub_to: "/admin/manager/product/property/",
            nav_sub_icon: "",
            role_level: 99,
          }
        ],
      },
      {
        id_nav: "nav0002",
        nav_name: "QUẢN LÝ KHO & CHI NHÁNH",
        nav_icon: "fa fa-area-chart",
        nav_to: "#",
        role_level: 99,
        nav_sub_arr: [
          {
            id_sub_nav: "subnav005",
            nav_sub_name: "Danh sách cửa hàng",
            nav_sub_to: "/admin/manager/shop",
            nav_sub_icon: "",
            role_level: 99,
          },
          {
            id_sub_nav: "subnav006",
            nav_sub_name: "Danh sách đơn nhập hàng",
            nav_sub_to: "/admin/manager/order/input/list/",
            nav_sub_icon: "",
            role_level: 99,
          },
          {
            id_sub_nav: "subnav007",
            nav_sub_name: "Tạo đơn nhập hàng",
            nav_sub_to: "/admin/manager/order/input/new/",
            nav_sub_icon: "",
            role_level: 99,
          },
          {
            id_sub_nav: "subnav008",
            nav_sub_name: "Tồn kho theo chi nhánh",
            nav_sub_to: "/admin/manager/shop/inventory",
            nav_sub_icon: "",
            role_level: 99,
          },
          {
            id_sub_nav: "subnav009",
            nav_sub_name: "Nhà cung cấp",
            nav_sub_to: "/admin/manager/supplier/",
            nav_sub_icon: "",
            role_level: 99,
          }
        ],
      },
      {
        id_nav: "nav0003",
        nav_name: "QUẢN LÝ ĐƠN HÀNG",
        nav_icon: "fa fa-area-chart",
        nav_to: "#",
        role_level: 5,
        nav_sub_arr: [
          {
            id_sub_nav: "subnav005",
            nav_sub_name: "Tạo mới đơn hàng",
            nav_sub_to: "/admin/manager/order/export/new/",
            nav_sub_icon: "",
            role_level: 5,
          },
          {
            id_sub_nav: "subnav006",
            nav_sub_name: "Danh sách đơn hàng online",
            nav_sub_to: "/admin/manager/order/export/list/online/",
            nav_sub_icon: "",
            role_level: 5,
          },
          {
            id_sub_nav: "subnav007",
            nav_sub_name: "Hóa đơn bán tại quầy",
            nav_sub_to: "/admin/manager/order/export/list/offline/",
            nav_sub_icon: "",
            role_level: 5,
          },
          {
            id_sub_nav: "subnav008",
            nav_sub_name: "Đổi trả hàng",
            nav_sub_to: "/admin/manager/order/export/list/",
            nav_sub_icon: "",
            role_level: 5,
          },
        ],
      },
      {
        id_nav: "nav0004",
        nav_name: "QUẢN LÝ KHÁCH HÀNG",
        nav_icon: "fa fa-area-chart",
        nav_to: "/admin/manager/customer/list/",
        role_level: 5,
        nav_sub_arr: [],
      },
      {
        id_nav: "nav0005",
        nav_name: "QUẢN LÝ MÃ KHUYẾN MÃI",
        nav_icon: "fa fa-area-chart",
        nav_to: "#",
        role_level: 10,
        nav_sub_arr: [
          {
            id_sub_nav: "subnav010",
            nav_sub_name: "Danh sách mã khuyến mãi",
            nav_sub_to: "/admin/manager/coupons/list/",
            nav_sub_icon: "",
            role_level: 10,
          },
          {
            id_sub_nav: "subnav012",
            nav_sub_name: "Danh sách mã khuyến mãi cho người dùng",
            nav_sub_to: "/admin/manager/coupons/update/",
            nav_sub_icon: "",
            role_level: 99,
          },
        ],
      },
      {
        id_nav: "nav0006",
        nav_name: "XEM ĐÁNH GIÁ SẢN PHẨM",
        nav_icon: "fa fa-area-chart",
        nav_to: "/admin/manager/review_product/",
        role_level: 5,
        nav_sub_arr: [],
      },
      {
        id_nav: "nav0007",
        nav_name: "QUẢN LÝ NHÂN VIÊN",
        nav_icon: "fa fa-area-chart",
        nav_to: "#",
        role_level: 5,
        nav_sub_arr: [
          {
            id_sub_nav: "subnav010",
            nav_sub_name: "Danh sách nhân viên",
            nav_sub_to: "/admin/manager/employee/list/",
            nav_sub_icon: "",
            role_level: 5,
          },
          {
            id_sub_nav: "subnav012",
            nav_sub_name: "phân quyền / vai trò",
            nav_sub_to: "/admin/manager/employee/access_rights_assignment/",
            nav_sub_icon: "",
            role_level: 99,
          },
          {
            id_sub_nav: "subnav012",
            nav_sub_name: "phân công phụ trách cửa hàng",
            nav_sub_to: "/admin/manager/employee/delegation_of_responsibility/",
            nav_sub_icon: "",
            role_level: 99,
          },
        ],
      }
    ],
  }
];
