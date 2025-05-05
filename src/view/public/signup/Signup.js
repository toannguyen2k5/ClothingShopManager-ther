import md5 from "md5";
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./style.css";
import {
  alert_not_sent_otp_mail,
  alert_sent_otp_mail,
  mailformat,
  nameWebsite,
  rePassword,
  urlapi,
  validate_email_duplicate,
  validate_email_empty,
  validate_email_invaild,
  validate_info_empty,
  validate_name_first_empty,
  validate_name_full_empty,
  validate_name_last_empty,
  validate_otp_not_map,
  validate_pass_empty,
  validate_pass_invaild,
  validate_pass_re_empty,
  validate_pass_re_input,
} from "../../../setting/store/const";
export default class Signup extends Component {
  constructor() {
    super();
    this.state = {
      first_name_dk: "",
      last_name_dk: "",
      email_dk: "",
      password_dk: "",
      password_dk_1: "",
      password_dk_2: "",
      requestHome: false,
      isCheckLogin: false,

      status_input_name: false,
      err_input_name: "",
      status_input_email: false,
      err_input_email: "",
      status_input_pass: false,
      err_input_pass: "",

      show_input_otp: false,
      otp: "",
      re_otp: "",

      status_input_otp: false,
      err_input_otp: "",
    };
  }
  enter_email_dk(e) {
    this.setState({
      email_dk: e.target.value,
    });
  }
  enter_first_name_dk(e) {
    this.setState({
      first_name_dk: e.target.value,
    });
  }
  enter_last_name_dk(e) {
    this.setState({
      last_name_dk: e.target.value,
    });
  }
  enter_password_dk(e) {
    this.setState({
      password_dk: e.target.value,
    });
  }
  enter_password_dk_1(e) {
    this.setState({
      password_dk_1: e.target.value,
    });
  }
  enter_password_dk_2(e) {
    this.setState({
      password_dk_2: e.target.value,
    });
  }
  enter_otp(e) {
    this.setState({
      re_otp: e.target.value,
    });
  }
  async checkLogin() {
    const req = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        key: "111111111",
        user: {
          code: localStorage.getItem("code"),
        },
      }),
    };
    console.log(req);
    const response = await fetch(`${urlapi}/getRole/`, req);
    const { data } = await response.json();
    console.log(data);
    let bool = false;
    if (data.status) {
      bool = true;
    }
    this.setState({
      requestHome: bool,
      isCheckLogin: true,
    });
  }
  getRole() {
    if (localStorage.getItem("code") !== null) this.checkLogin();
    this.setState({
      isCheckLogin: true,
    });
  }
  async confirmAccount(e) {
    e.preventDefault();
    if (this.state.first_name_dk.trim() === "")
      this.state.err_input_name = validate_name_first_empty;
    else this.state.err_input_name = "";

    if (this.state.last_name_dk.trim() === "")
      this.state.err_input_name =
        this.state.err_input_name === ""
          ? validate_name_last_empty
          : validate_name_full_empty;
    else
      this.state.err_input_name =
        this.state.err_input_name === "" ? "" : this.state.err_input_name;

    if (this.state.email_dk.trim() === "")
      this.state.err_input_email = validate_email_empty;
    else if (mailformat.test(this.state.email_dk) === true) {
      this.state.err_input_email = "";
    } else this.state.err_input_email = validate_email_invaild;

    if (this.state.password_dk.trim() === "")
      this.state.err_input_pass = validate_pass_empty;
    else if (rePassword.test(this.state.password_dk) === true) {
      if (this.state.password_dk_1 !== this.state.password_dk_2) {
        if (
          this.state.password_dk === this.state.password_dk_1 &&
          this.state.password_dk !== this.state.password_dk_2
        ) {
          this.state.err_input_pass = "";
        } else {
          this.state.err_input_pass = validate_pass_re_input;
        }
      } else this.state.err_input_pass = validate_pass_re_empty;
    } else this.state.err_input_pass = validate_pass_invaild;
    if (
      this.state.err_input_email !== "" ||
      this.state.err_input_pass !== "" ||
      this.state.err_input_name !== ""
    ) {
      this.setState({
        status_input_email: this.state.err_input_email !== "",
        status_input_pass: this.state.err_input_pass !== "",
        status_input_name: this.state.err_input_name !== "",
      });
      return;
    }
    const otp = this.getOTP();
    let email = {
      html:
        "<p>Xin chào bạn: " +
        "</p> <br/> <p>Bạn đã đăng kí tài khoản tại(<a href='http://localhost:3000/'>ShopStar.</a>) </p><br/>" +
        "Để xác nhận đăng kí tài khoản, xin vui lòng nhập mã OTP: " +
        otp +
        "<br/>" +
        "<h3>Thanks!!!</h3>",
      email: this.state.email_dk.trim(),
      subject: "Xác nhận tài khoản",
    };
    const req = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        key: "111111111",
        email: email,
      }),
    };
    const response = await fetch(`${urlapi}/customer/confirmAccount`, req);
    const { data } = await response.json();
    console.log(data);
    if (data.status) {
      // alert("gửi mail thành công");
      this.setState({
        show_input_otp: true,
        err_input_email: alert_sent_otp_mail,
        status_input_email: true,
        otp: otp,
      });
    } else {
      this.setState({
        show_input_otp: false,
        err_input_email: alert_not_sent_otp_mail,
        status_input_email: true,
        otp: otp,
      });
    }
  }
  async btnDangKi(e) {
    e.preventDefault();
    if (this.state.first_name_dk.trim() === "")
      this.state.err_input_name = validate_name_first_empty;
    else this.state.err_input_name = "";

    if (this.state.re_otp === "" && this.state.otp !== "")
      this.state.err_input_otp = validate_info_empty;
    else if (this.state.re_otp === this.state.otp)
      this.state.err_input_otp = "";
    else this.state.err_input_otp = validate_otp_not_map;

    if (this.state.last_name_dk.trim() === "")
      this.state.err_input_name =
        this.state.err_input_name === ""
          ? validate_name_last_empty
          : validate_name_full_empty;
    else
      this.state.err_input_name =
        this.state.err_input_name === "" ? "" : this.state.err_input_name;

    if (this.state.email_dk.trim() === "")
      this.state.err_input_email = validate_email_empty;
    else if (mailformat.test(this.state.email_dk) === true) {
      this.state.err_input_email = "";
    } else this.state.err_input_email = validate_email_invaild;

    if (this.state.password_dk.trim() === "")
      this.state.err_input_pass = validate_pass_empty;
    else if (rePassword.test(this.state.password_dk) === true) {
      if (this.state.password_dk_1 !== this.state.password_dk_2) {
        if (
          this.state.password_dk === this.state.password_dk_1 &&
          this.state.password_dk !== this.state.password_dk_2
        ) {
          this.state.err_input_pass = "";
        } else {
          this.state.err_input_pass = validate_pass_re_input;
        }
      } else this.state.err_input_pass = validate_pass_re_empty;
    } else this.state.err_input_pass = validate_pass_invaild;
    if (
      this.state.err_input_email !== "" ||
      this.state.err_input_pass !== "" ||
      this.state.err_input_otp !== "" ||
      this.state.err_input_name !== ""
    ) {
      this.setState({
        status_input_email: this.state.err_input_email !== "",
        status_input_pass: this.state.err_input_pass !== "",
        status_input_name: this.state.err_input_name !== "",

        status_input_otp: this.state.err_input_otp !== "",
      });
      return;
    }
    if (
      !this.state.show_input_otp &&
      (this.state.otp === "" || this.state.re_otp !== this.state.otp)
    ) {
      this.confirmAccount(e);
      return;
    }

    const req = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        key: "111111111",
        user: {
          id: md5(new Date().getTime().toString()),
          first_name: this.state.first_name_dk,
          last_name: this.state.last_name_dk,
          email: this.state.email_dk,
          password: md5(this.state.password_dk),
          avatar: "",
          birthday: "1990-01-01",
          number_phone: "",
          code: "",
        },
      }),
    };
    const response = await fetch(`${urlapi}/dangkitaikhoan`, req);
    const { data } = await response.json();
    console.log(data);
    if (data.status) {
      alert("đăng kí thành công");
      // localStorage.setItem("code", data.data.code);
      this.setState({
        requestHome: true,
      });
    } else {
      alert("đăng kí thất bại");
      if (data.content === "duplicate email")
        this.state.err_input_email = validate_email_duplicate;
      if (this.state.err_input_email !== "")
        this.setState({
          status_input_email: this.state.err_input_email !== "",
        });
    }
  }
  getOTP() {
    const timestamp = "" + new Date().getTime();
    const secret_key = "the-very-secret-key";
    const sha256 = require("sha256");
    const hashed_value = sha256(timestamp + secret_key);
    const last_six_characters = hashed_value.substr(hashed_value.length - 6);

    const otp = parseInt(last_six_characters, 16);

    let otp_string = otp.toString();

    while (otp_string.length < 8) {
      otp_string = "0" + otp_string;
    }

    return otp_string;
  }

  render() {
    if (this.state.requestHome) return <Redirect to="/Home" />;
    if (!this.state.isCheckLogin) this.getRole();
    return (
      <div className="auth">
        <div className="auth-container">
          <div className="card">
            <header className="auth-header">
              <h1 className="auth-title">
                <div className="logo">
                  <span className="l l1"></span>
                  <span className="l l2"></span>
                  <span className="l l3"></span>
                  <span className="l l4"></span>
                  <span className="l l5"></span>
                </div>
                {nameWebsite}
              </h1>
            </header>
            <div className="auth-content">
              <p className="text-center">SIGNUP TO GET INSTANT ACCESS</p>
              <form
                id="signup-form"
                action="/index.html"
                method="GET"
                novalidate="novalidate"
              >
                <div className="form-group">
                  <label htmlFor="firstname">Full Name</label>
                  <div className="row">
                    <div className="col-sm-6">
                      <input
                        type="text"
                        className="form-control underlined"
                        name="firstname"
                        id="firstname"
                        placeholder="Enter first name"
                        required=""
                        value={this.state.first_name_dk}
                        onChange={this.enter_first_name_dk.bind(this)}
                      />
                    </div>
                    <div className="col-sm-5">
                      <input
                        type="text"
                        className="form-control underlined"
                        name="lastname"
                        id="lastname"
                        placeholder="Enter last name"
                        required=""
                        value={this.state.last_name_dk}
                        onChange={this.enter_last_name_dk.bind(this)}
                      />
                    </div>
                    <div className="col-sm-12">
                      {this.state.status_input_name ? (
                        <small id="passHelp" className="form-text text-danger">
                          <p
                            dangerouslySetInnerHTML={{
                              __html: this.state.err_input_name,
                            }}
                          />
                        </small>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control underlined"
                    name="email"
                    id="email"
                    placeholder="Enter email address"
                    required=""
                    value={this.state.email_dk}
                    onChange={this.enter_email_dk.bind(this)}
                  />
                  {this.state.status_input_email ? (
                    <small id="emailHelp" className="form-text text-danger">
                      <p
                        dangerouslySetInnerHTML={{
                          __html: this.state.err_input_email,
                        }}
                      />
                    </small>
                  ) : null}
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <div className="row">
                    <div className="col-sm-6">
                      <input
                        type="password"
                        className="form-control underlined"
                        name="password"
                        id="password"
                        placeholder="Enter password"
                        required=""
                        value={this.state.password_dk}
                        onChange={this.enter_password_dk.bind(this)}
                      />
                      &nbsp;
                    </div>
                    <div className="col-sm-6">
                      <input
                        type="password"
                        className="form-control underlined"
                        name="retype_password"
                        id="retype_password"
                        placeholder="Re-type password"
                        required=""
                        value={this.state.password_dk_1}
                        onChange={this.enter_password_dk_1.bind(this)}
                      />
                    </div>
                    <div className="col-sm-12">
                      {this.state.status_input_pass ? (
                        <small id="passHelp" className="form-text text-danger">
                          <p
                            dangerouslySetInnerHTML={{
                              __html: this.state.err_input_pass,
                            }}
                          />
                        </small>
                      ) : null}
                    </div>
                  </div>
                </div>
                {this.state.show_input_otp ? (
                  <div className="form-group">
                    <label htmlFor="password">OTP</label>
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
                        />
                        &nbsp;
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
                    onClick={this.btnDangKi.bind(this)}
                  >
                    {this.state.show_input_otp ? "Sign Up" : "Confirm Email"}
                  </button>
                </div>
                <div className="form-group">
                  <p className="text-muted text-center">
                    Already have an account? <a href="/login">Login</a>
                  </p>
                  <p className="text-muted text-center">
                    Back to <a href="/home">Home</a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
