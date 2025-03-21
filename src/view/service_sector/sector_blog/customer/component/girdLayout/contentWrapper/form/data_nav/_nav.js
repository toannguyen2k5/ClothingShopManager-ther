export const nav = [
  {
    sidebarHeading: "",
    children: [
      {
        navItem: "Quản lý danh mục bài đăng",
        icon: "",
        to: "#",
        children: [
          {
            collapseHeader: "",
            collapseItem: [
              {
                collapseItem: "Danh sách bài đăng",
                to: "/admin/list_post",
              },
              {
                collapseItem: "Thêm mới bài đăng",
                to: "/admin/new_post",
              },
            ],
          },
        ],
      },
      {
        navItem: "Quản lý danh mục",
        icon: "",
        to: "#",
        children: [{
          collapseHeader: "",
          collapseItem: [
            {
              collapseItem: "Danh sách danh mục",
              to: "/admin/list_category",
            },
            {
              collapseItem: "Thêm mới danh mục",
              to: "/admin/new_category",
            },
          ],
        },],
      },
      {
        navItem: "Quản lý Tags",
        icon: "",
        to: "#",
        children: [{
          collapseHeader: "",
          collapseItem: [
            {
              collapseItem: "Danh sách Tags",
              to: "/admin/list_tag",
            },
            {
              collapseItem: "Thêm mới Tags",
              to: "/admin/new_tag",
            },
          ],
        },],
      },
      {
        navItem: "Quản lý User",
        icon: "",
        to: "#",
        children: [{
          collapseHeader: "",
          collapseItem: [
            {
              collapseItem: "Danh sách User",
              to: "/admin/list_tag",
            },
            {
              collapseItem: "Thêm mới User",
              to: "/admin/new_tag",
            },
          ],
        },],
      },
    ],
  },
];
