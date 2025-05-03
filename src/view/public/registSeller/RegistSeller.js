import md5 from "md5";
import React, { Component } from "react";
import dateFormat from "dateformat";
import "./style.css";
import {
  mailformat,
  numberPhoneFormat,
  rePassword,
  urlapi,
  validate_email_empty,
  validate_email_invaild,
  validate_info_empty,
  validate_number_phone_invaild,
  validate_pass_empty,
  validate_pass_invaild,
  validate_pass_re_empty,
  validate_pass_re_input,
} from "../../../setting/store/const";
import { Redirect } from "react-router-dom";

class RegistSeller extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listCategory: [],
      runGetCategory: true,
      email: "",
      fullname: "",
      shopname: "",
      numberphone: "",
      id_category: "",
      short_description: "",
      full_description: "",
      address: "",
      password_1: "",
      password_2: "",
      requestHome: false,

      status_input_email: false,
      err_input_email: "",

      status_input_fullname: false,
      err_input_fullname: "",

      status_input_shopname: false,
      err_input_shopname: "",

      status_input_numberphone: false,
      err_input_numberphone: "",

      status_input_category: false,
      err_input_category: "",

      status_input_short_description: false,
      err_input_short_description: "",

      status_input_full_description: false,
      err_input_full_description: "",

      status_input_address: false,
      err_input_address: "",

      status_input_password: false,
      err_input_password: "",
    };
  }

  changecategory(e) {
    this.setState({
      id_category: e.target.value,
    });
  }
  changeemail(e) {
    this.setState({
      email: e.target.value,
    });
  }
  changefullname(e) {
    this.setState({
      fullname: e.target.value,
    });
  }
  changeshopname(e) {
    this.setState({
      shopname: e.target.value,
    });
  }
  changepassword_1(e) {
    this.setState({
      password_1: e.target.value,
    });
  }
  changepassword_2(e) {
    this.setState({
      password_2: e.target.value,
    });
  }
  changenumberphone(e) {
    this.setState({
      numberphone: e.target.value,
    });
  }
  changeshort_description(e) {
    this.setState({
      short_description: e.target.value,
    });
  }
  changefull_description(e) {
    this.setState({
      full_description: e.target.value,
    });
  }

  changeaddress(e) {
    this.setState({
      address: e.target.value,
    });
  }
  async getAllParentCategory() {
    const req = {
      method: "GET",
    };
    const response = await fetch(`${urlapi}/getAllParentCategory/`, req);
    const { data } = await response.json();
    console.log("=======================================");
    // console.log(data);
    console.log("=======================================");
    this.setState({
      runGetCategory: false,
      listCategory: data.data,
    });
  }
  async registSeller(e) {
    e.preventDefault();
    if (this.state.password_1.trim() === "")
      this.state.err_input_password = validate_pass_empty;
    else if (this.state.password_2.trim() === "")
      this.state.err_input_password = validate_pass_re_empty;
    else if (rePassword.test(this.state.password_1) === true) {
      if (this.state.password_1 !== this.state.password_2)
        this.state.err_input_password = validate_pass_re_input;
      else this.state.err_input_password = "";
    } else this.state.err_input_password = validate_pass_invaild;

    if (this.state.email.trim() === "")
      this.state.err_input_email = validate_email_empty;
    else if (mailformat.test(this.state.email) === false)
      this.state.err_input_email = validate_email_invaild;
    else this.state.err_input_email = "";

    if (this.state.full_description.trim() === "")
      this.state.err_input_full_description = validate_info_empty;
    else this.state.err_input_full_description = "";

    if (this.state.numberphone.trim() === "")
      this.state.err_input_numberphone = validate_info_empty;
    else if (numberPhoneFormat.test(this.state.numberphone) === false)
      this.state.err_input_numberphone = validate_number_phone_invaild;
    else this.state.err_input_numberphone = "";

    if (this.state.short_description.trim() === "")
      this.state.err_input_short_description = validate_info_empty;
    else this.state.err_input_short_description = "";

    if (this.state.shopname.trim() === "")
      this.state.err_input_shopname = validate_info_empty;
    else this.state.err_input_shopname = "";

    if (this.state.fullname.trim() === "")
      this.state.err_input_fullname = validate_info_empty;
    else this.state.err_input_fullname = "";

    if (this.state.id_category.trim() === "")
      this.state.err_input_category = validate_info_empty;
    else this.state.err_input_category = "";

    if (
      this.state.err_input_address !== "" ||
      this.state.err_input_category !== "" ||
      this.state.err_input_email !== "" ||
      this.state.err_input_full_description !== "" ||
      this.state.err_input_fullname !== "" ||
      this.state.err_input_password !== "" ||
      this.state.err_input_numberphone !== "" ||
      this.state.err_input_shopname !== "" ||
      this.state.err_input_short_description !== ""
    ) {
      alert("dm");
      console.log(this.state);
      this.setState({
        status_input_address: this.state.err_input_address !== "",
        status_input_category: this.state.err_input_category !== "",
        status_input_email: this.state.err_input_email !== "",
        status_input_numberphone: this.state.err_input_numberphone !== "",
        status_input_full_description:
          this.state.err_input_full_description !== "",
        status_input_fullname: this.state.err_input_fullname !== "",
        status_input_password: this.state.err_input_password !== "",
        status_input_shopname: this.state.err_input_shopname !== "",
        status_input_short_description:
          this.state.err_input_short_description !== "",
      });
      return;
    }

    let id_user = md5(new Date().getTime().toString().concat("_table_user"));
    let id_shop = md5(new Date().getTime().toString().concat("_table_shop"));
    const req = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        key: "111111111",
        user: {
          id: id_user,
          first_name: this.state.fullname.split(" ").slice(0, -1).join(" "),
          last_name: this.state.fullname.split(" ").slice(-1).join(" "),
          email: this.state.email,
          password: md5(this.state.password_1),
          avatar: "",
          birthday: "",
          number_phone: this.state.numberphone,
          code: "",
        },
        shop: {
          id: id_shop,
          name: this.state.shopname,
          id_user: id_user,
          id_category: this.state.id_category,
          is_activate: 1,
          full_description: this.state.full_description,
          short_description: this.state.short_description,
          phone_number: this.state.numberphone,
          address: this.state.address,
          create_date: dateFormat(new Date(), "yyyy/mm/dd"),
        },
      }),
    };
    const response = await fetch(`${urlapi}/dangkitaikhoanseller`, req);
    const { data } = await response.json();
    console.log(data);
    if (data.status) {
      alert("đăng kí thành công");
      localStorage.setItem("code", data.code);
      this.setState({
        requestHome: true,
      });
    } else alert("đăng kí thất bại");
  }

  render() {
    if (this.state.requestHome === true) return <Redirect to="/Home" />;
    if (this.state.runGetCategory === true) this.getAllParentCategory();
    return (
      <>
        <link rel="stylesheet" href={`${urlapi}/getCss/bootstrap.min.css`} />
        <div className="container">
          <div className="row p-5 ">
            <h1 className="RegisterIntro__Headline-sc-148pvbs-1 bUnnsC ">
              Đăng ký mở cửa hàng
            </h1>
            <div className="col-6">
              <div className="RegisterIntro__Root-sc-148pvbs-0 gRxfBP">
                <h1 className="RegisterIntro__Headline-sc-148pvbs-1 bUnnsC">
                  &nbsp;
                </h1>

                <div className="RegisterIntro__PhotoContainer-sc-148pvbs-4 iKBwKS">
                  <img
                    src={`${urlapi}/getImage/shop-building.jpg`}
                    style={{ width: "100%" }}
                    alt="shop-building"
                  />
                </div>
              </div>
            </div>
            <div className="col-6">
              <>
                <div className="form-group">
                  <label for="inputEmail">Địa chỉ email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail"
                    aria-describedby="emailHelp"
                    placeholder="Nhập địa chỉ email"
                    value={this.state.email}
                    onChange={this.changeemail.bind(this)}
                  />
                  {this.state.status_input_email ? (
                    <small id="passHelp" className="form-text text-danger">
                      <a
                        dangerouslySetInnerHTML={{
                          __html: this.state.err_input_email,
                        }}
                      />
                    </small>
                  ) : null}
                </div>
                <div className="form-group">
                  <label for="fullname">Họ và tên</label> &nbsp;
                  <small id="fullNameHelp" className="form-text text-muted">
                    Điền họ và tên như trên giấy tờ tùy thân.
                  </small>
                  <input
                    type="text"
                    className="form-control"
                    id="fullname"
                    aria-describedby="fullname"
                    placeholder="Nhập họ và tên"
                    value={this.state.fullname}
                    onChange={this.changefullname.bind(this)}
                  />
                  {this.state.status_input_fullname ? (
                    <small id="passHelp" className="form-text text-danger">
                      <a
                        dangerouslySetInnerHTML={{
                          __html: this.state.err_input_fullname,
                        }}
                      />
                    </small>
                  ) : null}
                </div>
                <div className="form-group">
                  <label for="shopname">Tên cửa hàng</label>
                  <input
                    type="text"
                    className="form-control"
                    id="shopname"
                    aria-describedby="fullname"
                    placeholder="Nhập tên cửa hàng"
                    value={this.state.shopname}
                    onChange={this.changeshopname.bind(this)}
                  />
                  {this.state.status_input_shopname ? (
                    <small id="passHelp" className="form-text text-danger">
                      <a
                        dangerouslySetInnerHTML={{
                          __html: this.state.err_input_shopname,
                        }}
                      />
                    </small>
                  ) : null}
                </div>
                <div className="form-group">
                  <label for="numberphone">Số điện thoại</label>
                  <input
                    type="text"
                    className="form-control"
                    id="numberphone"
                    aria-describedby="numberphone"
                    placeholder="Nhập số điện thoại"
                    value={this.state.numberphone}
                    onChange={this.changenumberphone.bind(this)}
                  />
                  {this.state.status_input_numberphone ? (
                    <small id="passHelp" className="form-text text-danger">
                      <a
                        dangerouslySetInnerHTML={{
                          __html: this.state.err_input_numberphone,
                        }}
                      />
                    </small>
                  ) : null}
                </div>
                <div className="form-group">
                  <label for="exampleInputEmail1">Ngành hàng chủ lực</label>
                  <select
                    className="form-control"
                    id="exampleFormControlSelect1"
                    onChange={this.changecategory.bind(this)}
                  >
                    <option value={null}>Chọn ngành hàng chủ lực</option>
                    {this.state.listCategory.map((item) => (
                      <option value={item.id}>{item.name}</option>
                    ))}
                  </select>
                  {this.state.status_input_category ? (
                    <small id="passHelp" className="form-text text-danger">
                      <a
                        dangerouslySetInnerHTML={{
                          __html: this.state.err_input_category,
                        }}
                      />
                    </small>
                  ) : null}
                </div>
                <div className="form-group">
                  <label for="short_description">Mô Tả Shop</label>
                  <input
                    type="text"
                    className="form-control"
                    id="short_description"
                    aria-describedby="numberphone"
                    placeholder="Mô Tả Shop"
                    value={this.state.short_description}
                    onChange={this.changeshort_description.bind(this)}
                  />
                  {this.state.status_input_short_description ? (
                    <small id="passHelp" className="form-text text-danger">
                      <a
                        dangerouslySetInnerHTML={{
                          __html: this.state.err_input_short_description,
                        }}
                      />
                    </small>
                  ) : null}
                </div>
                <div className="form-group">
                  <label for="numberphone">Mô Tả Chi Tiết</label>
                  <input
                    type="text"
                    className="form-control"
                    id="numberphone"
                    aria-describedby="numberphone"
                    placeholder="Mô Tả Chi Tiết"
                    value={this.state.full_description}
                    onChange={this.changefull_description.bind(this)}
                  />
                  {this.state.status_input_full_description ? (
                    <small id="passHelp" className="form-text text-danger">
                      <a
                        dangerouslySetInnerHTML={{
                          __html: this.state.err_input_full_description,
                        }}
                      />
                    </small>
                  ) : null}
                </div>
                <div className="form-group">
                  <label for="inputPassword1">Mật khẩu</label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword1"
                    placeholder="Nhập mật khẩu"
                    value={this.state.password_1}
                    onChange={this.changepassword_1.bind(this)}
                  />
                </div>
                <div className="form-group">
                  <label for="inputPassword2">Xác nhận mật khẩu</label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword2"
                    placeholder="Xác nhận mật khẩu"
                    value={this.state.password_2}
                    onChange={this.changepassword_2.bind(this)}
                  />
                </div>
                {this.state.status_input_password ? (
                  <div className="form-group">
                    <small id="passHelp" className="form-text text-danger">
                      <a
                        dangerouslySetInnerHTML={{
                          __html: this.state.err_input_password,
                        }}
                      />
                    </small>
                  </div>
                ) : null}
                {this.state.show_input_otp ? (
                  <div className="form-group">
                    <label for="password">OTP</label>
                    <div className="row">
                      <div className="col-sm-6">
                        <input
                          type="text"
                          className="form-control underlined"
                          name="otp"
                          id="otp"
                          placeholder="Enter OTP"
                          required=""
                          value={this.state.re_otp}
                          onChange={this.enter_otp.bind(this)}
                        />&nbsp;
                      </div>

                      <div className="col-sm-12">
                        {this.state.status_input_otp ? (
                          <small
                            id="passHelp"
                            className="form-text text-danger"
                          >
                            <p
                              dangerouslySetInnerHTML={{
                                __html: this.state.err_input_otp,
                              }}
                            />
                          </small>
                        ) : null}
                      </div>
                    </div>
                  </div>
                ) : null}
                <div className="form-group">
                  <button
                    type="submit"
                    className="btn btn-block btn-primary"
                    onClick={this.registSeller.bind(this)}
                  >
                    {this.state.show_input_otp
                      ? "Đăng ký ngay"
                      : "Confirm Email"}
                  </button>
                </div>
              </>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default RegistSeller;
