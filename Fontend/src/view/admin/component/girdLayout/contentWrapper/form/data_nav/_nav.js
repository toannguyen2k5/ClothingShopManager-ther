export const nav = [
  {
    sidebarHeading: "",
    nav_arr: [
      {
        id_nav: "nav0001",
        nav_name: "Quản lý sản phẩm",
        nav_icon: "fa fa-area-chart",
        nav_to: "#",
        role_level:5,
        nav_sub_arr: [
          {
            id_sub_nav: "subnav001",
            nav_sub_name: "Xem danh sách sản phẩm",
            nav_sub_to: "/admin/manager/product/list/",
            nav_sub_icon: "",
            role_level:5,
          },
          {
            id_sub_nav: "subnav002",
            nav_sub_name: "Thêm mới sản phẩm",
            nav_sub_to: "/admin/manager/product/new/",
            nav_sub_icon: "",
            role_level:5,
          },
          {
            id_sub_nav: "subnav003",
            nav_sub_name: "Cập nhật sản phẩm",
            nav_sub_to: "/admin/manager/product/update/",
            nav_sub_icon: "",
            role_level:5,
          },
        ],
      },
      {
        id_nav: "nav0002",
        nav_name: "Quản lý danh mục",
        nav_icon: "fa fa-area-chart",
        nav_to: "/admin/manager/categories/",
        role_level:5,
        nav_sub_arr: [
        ],
      },
      {
        id_nav: "nav0003",
        nav_name: "Quản lý đơn hàng",
        nav_icon: "fa fa-area-chart",
        nav_to: "#",
        role_level:5,
        nav_sub_arr: [
          {
            id_sub_nav: "subnav004",
            nav_sub_name: "Danh sách đơn hàng",
            nav_sub_to: "/admin/manager/order/export/list",
            nav_sub_icon: "",
            role_level:5,
          },
          {
            id_sub_nav: "subnav005",
            nav_sub_name: "Tạo mới đơn hàng",
            nav_sub_to: "/admin/manager/order/export/new/",
            nav_sub_icon: "",
            role_level:5,
          },
        ],
      },
      {
        id_nav: "nav0004",
        nav_name: "Quản lý khách hàng",
        nav_icon: "fa fa-area-chart",
        nav_to: "/admin/manager/customer/list/",
        role_level:5,
        nav_sub_arr: [
        ],
      },
      {
        id_nav: "nav0005",
        nav_name: "Quản lý mã giảm giá",
        nav_icon: "fa fa-area-chart",
        nav_to: "#",
        role_level:5,
        nav_sub_arr: [
          {
            id_sub_nav: "subnav010",
            nav_sub_name: "Danh sách mã khuyến mãi",
            nav_sub_to: "/admin/manager/coupons/list/",
            nav_sub_icon: "",
            role_level:5,
          },
          {
            id_sub_nav: "subnav012",
            nav_sub_name: "Cập nhật mã khuyến mãi cho sản phẩm",
            nav_sub_to: "/admin/manager/coupons/update/",
            nav_sub_icon: "",
            role_level:5,
          },
        ],
      },
      {
        id_nav: "nav0006",
        nav_name: "Quản lý đánh giá sản phẩm",
        nav_icon: "fa fa-area-chart",
        nav_to: "/admin/manager/review_product/",
        role_level:5,
        nav_sub_arr: [
        ],
      },
      {
        id_nav: "nav0007",
        nav_name: "Quản lý kho hàng",
        nav_icon: "fa fa-area-chart",
        nav_to: "/admin/manager/coupons/inventory/",
        role_level:5,
        nav_sub_arr: [
        ],
      },
    ],
  },
  {
    sidebarHeading: "Nâng Cao",
    nav_arr: [
      {
        id_nav: "nav0008",
        nav_name: "Quản trị viên",
        nav_icon: "fa fa-area-chart",
        nav_to: "#",
        role_level:99,
        nav_sub_arr: [
          {
            id_sub_nav: "subnav013",
            nav_sub_name: "Quản lý tài khoản admin",
            nav_sub_to: "/admin/manager/account/list/",
            nav_sub_icon: "",
            role_level:5,
          },
          {
            id_sub_nav: "subnav014",
            nav_sub_name: "Log hoạt động quản trị viên",
            nav_sub_to: "/admin/manager/account/log/",
            nav_sub_icon: "",
            role_level:5,
          },
        ],
      },
      {
        id_nav: "nav0014",
        nav_name: "Quản lý đơn nhập hàng",
        nav_icon: "fa fa-area-chart",
        nav_to: "#",
        role_level:5,
        nav_sub_arr: [
          {
            id_sub_nav: "subnav015",
            nav_sub_name: "Danh sách đơn hàng",
            nav_sub_to: "/admin/manager/order/input/list/",
            nav_sub_icon: "",
            role_level:5,
          },
          {
            id_sub_nav: "subnav016",
            nav_sub_name: "Thêm đơn nhập hàng",
            nav_sub_to: "/admin/manager/order/input/new/",
            nav_sub_icon: "",
            role_level:5,
          },
        ],
      },
    ],
  },
];
