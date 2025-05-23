export const urlapi1 = "http://192.168.1.7:8080";
export const urlapi = "http://localhost:8080";
export const urllaypoy = "http://localhost:3000";
export const nameWebsite = "Shop Quần Áo Online";
export const rePassword =
  /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

export const mailformat =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:+)\])/;
export const numberPhoneFormat =
  /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/;
export const validate_email_empty = "Bạn chưa nhập email";
export const validate_email_invaild = "Bạn nhập email không hợp lệ";

export const validate_pass_empty = "Bạn chưa nhập mật khẩu";
export const validate_pass_invaild =
  "Bạn nhập mật khẩu chưa đúng định dạng<br/>Mật khẩu bao gồm:<br/>Kí tự hoa, thường và số<br/>Chứa kí tự đặc biệt<br/>Độ dài mật khẩu từ 8 kí tự trở lên";
export const validate_pass_re_input = "Bạn nhập xác nhận mật khẩu không đúng";
export const validate_pass_re_empty = "Bạn chưa nhập xác nhận mật khẩu";
export const validate_name_first_empty = "Bạn chưa nhập họ của bạn";
export const validate_name_last_empty = "Bạn chưa nhập tên của bạn";
export const validate_name_full_empty = "Bạn chưa nhập họ và tên của bạn";

export const validate_info_empty = "Bạn phải nhập thông tin";
export const validate_number_phone_invaild =
  "Bạn nhập số điện thoại không hợp lệ";
export const validate_percent_invaild =
  "Phần trăm hoa hồng không được dưới 1% và không lớn hơn 60%";
export const validate_max_percent_invaild =
  "Giá trị hoa hồng phải lớn hơn 1000(vnđ)";
export const validate_sale_invaild =
  "Phần trăm giảm giá không được dưới 0% và không lớn hơn 90%";
export const validate_max_sale_invaild =
  "Giá trị giảm giá phải lớn hơn 1000(vnđ)";
export const validate_price_invaild = "Giá trị sản phẩm phải lớn hơn 1000(vnđ)";

export const validate_shop_empty = "Bạn chưa chọn cửa hàng";
export const validate_category_empty = "Bạn chưa chọn danh mục sản phẩm";
export const validate_shop_category_empty =
  "Bạn chưa chọn chọn danh mục bán hàng";
export const validate_amount_invaild =
  "Bạn nhập số lượng sản phẩm không hợp lệ";
export const validate_amount_max = "Số lượng sản phẩm không đủ!!!";
export const alert_question_delete = "Bạn có chắn chắn muốn xóa?";
export const validate_email_duplicate = "Email đã tồn tại";

export const alert_shop_max10 =
  "Bạn đã tạo số cửa hàng giới hạn số lượng cửa hàng lớn nhất!!!";

export const validate_shop_duplicate = "Tên cửa hàng đã tồn tại";
export const validate_price_ship_invaild =
  "Giá vận chuyển phải lớn hơn 1000(vnđ)";

export const alert_sent_otp_mail = "Mã OTP đã được gửi về mail đăng kí";
export const alert_not_sent_otp_mail =
  "Đã có lỗi trong quá trình gửi mã OTP về mail đăng kí";

export const validate_otp_not_map = "Mã OTP đã được sử dụng hoặc hết hạn";

export const define_nav = {
  admin: {
    home: {
      name: "Dashboard",
      path: "/",
    },
    listproduct: {
      name: "Danh Sách Sản Phẩm",
      path: "/admin/manager/product/list/",
    },
    newproduct: {
      name: "Tạo mới Sản Phẩm",
      path: "/admin/manager/product/new/",
    },

    newOrderInputProduct: {
      name: "Thêm Đơn Nhập Hàng",
      path: "/admin/manager/order/input/new/",
    },
    categoryManager: {
      name: "Quản lý Danh mục",
      path: "/admin/manager/categories/",
    },
    profile: {
      name: "Profile",
      path: "/admin/profile",
    },
    setting: {
      name: "Setting",
      path: "/admin/setting",
    },
    billing: {
      name: "Billing",
      path: "/admin/billing",
    },
  },
};

export const define_name_sector = {
  main: {
    home: "blog",
  },
};
