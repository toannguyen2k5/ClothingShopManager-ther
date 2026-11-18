import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import {
  mailformat,
  nameWebsite,
  rePassword,
  url_layout,
  urlapi,
  validate_email_empty,
  validate_email_invaild,
  validate_pass_empty,
  validate_pass_invaild,
} from "../../../setting/store/const";
const md5 = require("md5");
export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email_dn: "",
      password_dn: "",
      requestHome: false,
      isCheckLogin: false,
      status_input_email: false,
      err_input_email: "",
      status_input_pass: false,
      err_input_pass: "",
    };
  }
  enter_email_dn(e) {
    this.setState({
      email_dn: e.target.value,
    });
  }
  enter_password_dn(e) {
    this.setState({
      password_dn: e.target.value,
    });
  }

  async btnLogin(e) {
    e.preventDefault();
    if (this.state.email_dn.trim() === "")
      this.state.err_input_email = validate_email_empty;
    else if (mailformat.test(this.state.email_dn) === true) {
      this.state.err_input_email = "";
    } else this.state.err_input_email = validate_email_invaild;

    if (this.state.password_dn.trim() === "")
      this.state.err_input_pass = validate_pass_empty;
    else if (rePassword.test(this.state.password_dn) === true) {
      this.state.err_input_pass = "";
    } else this.state.err_input_pass = validate_pass_invaild;
    if (this.state.err_input_email !== "" || this.state.err_input_pass !== "") {
      console.log({
        status_input_email: this.state.err_input_email !== "",
        status_input_pass: this.state.err_input_pass !== "",
      });
      this.setState({
        status_input_email: this.state.err_input_email !== "",
        status_input_pass: this.state.err_input_pass !== "",
      });
      return;
    }
    const req = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: this.state.email_dn,
        password: md5(this.state.password_dn),
      }),
    };
    console.log("pass md5 : ", md5(this.state.password_dn));
    fetch(`${urlapi}/api/auth/login`, req)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const { actions } = this.props;
        console.log("data: ", data);
        if (data.status && data.status === "200") {
          actions.login_success(data.data);
          //--------------------------------------------------------
          console.log("Login Line 83", this.props.state_data);
          //--------------------------------------------------------
          this.setState({
            requestHome: true,
          });
        } else {
          alert("đăng nhập thất bại !")
          actions.log_out();
          //--------------------------------------------------------
          console.log("Logout 92", this.props.state_data);
          //--------------------------------------------------------
        }
        if (data.status && data.status === "201")
          alert("Tài khoản này hiện không còn hoạt động !");
      })
      .catch((error) => console.error(error));
  }
  async checkLogin(code) {
    const req = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        key: "111111111",
        user: {
          code: code,
        },
      }),
    };
    console.log(req);
    const response = await fetch(`${urlapi}/getRole/`, req);
    const { data } = await response.json();
    console.log(data);
    let bool = false;
    if (data?.status) {
      bool = true;
    }
    this.setState({
      requestHome: bool,
      isCheckLogin: true,
    });
  }
  getRole() {
    if (
      this.props.state_data.user_info !== null &&
      this.props.state_data.user_info.code !== null
    )
      this.checkLogin(this.props.state_data.user_info.code);
    this.setState({
      isCheckLogin: true,
    });
  }
  btnRevert(e) {
    e.preventDefault();
  }
render() {
  if (this.state.requestHome) return <Redirect to="/" />;
  if (!this.state.isCheckLogin) this.getRole();
  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "2rem"
    }}>
      <div style={{
        background: "#fff",
        borderRadius: "16px",
        border: "1px solid #e5e7eb",
        padding: "2.5rem 2rem",
        width: "100%",
        maxWidth: "400px",
        boxSizing: "border-box"
      }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "56px",
            height: "56px",
            background: "#1a1a2e",
            borderRadius: "50%",
            marginBottom: "1rem"
          }}>
            <span style={{ fontSize: "26px" }}>👗</span>
          </div>
          <h2 style={{
            fontSize: "20px",
            fontWeight: "600",
            margin: "0 0 4px",
            color: "#1a1a2e",
            letterSpacing: "0.05em"
          }}>
            {nameWebsite}
          </h2>
          <p style={{ fontSize: "13px", color: "#6b7280", margin: 0 }}>
            Đăng nhập để tiếp tục mua sắm
          </p>
        </div>

        {/* Email */}
        <div style={{ marginBottom: "1rem" }}>
          <label style={{
            fontSize: "13px",
            fontWeight: "500",
            color: "#374151",
            display: "block",
            marginBottom: "6px"
          }}>
            Email / Tên đăng nhập
          </label>
          <input
            type="text"
            placeholder="example@email.com"
            value={this.state.email_dn}
            onChange={this.enter_email_dn.bind(this)}
            style={{
              width: "100%",
              boxSizing: "border-box",
              border: this.state.status_input_email ? "1px solid #ef4444" : "1px solid #d1d5db",
              borderRadius: "8px",
              padding: "10px 12px",
              fontSize: "14px",
              outline: "none"
            }}
          />
          {this.state.status_input_email && (
            <small style={{ color: "#ef4444", fontSize: "12px" }}>
              <span dangerouslySetInnerHTML={{ __html: this.state.err_input_email }} />
            </small>
          )}
        </div>

        {/* Password */}
        <div style={{ marginBottom: "1rem" }}>
          <label style={{
            fontSize: "13px",
            fontWeight: "500",
            color: "#374151",
            display: "block",
            marginBottom: "6px"
          }}>
            Mật khẩu
          </label>
          <input
            type="password"
            placeholder="Nhập mật khẩu"
            value={this.state.password_dn}
            onChange={this.enter_password_dn.bind(this)}
            style={{
              width: "100%",
              boxSizing: "border-box",
              border: this.state.status_input_pass ? "1px solid #ef4444" : "1px solid #d1d5db",
              borderRadius: "8px",
              padding: "10px 12px",
              fontSize: "14px",
              outline: "none"
            }}
          />
          {this.state.status_input_pass && (
            <small style={{ color: "#ef4444", fontSize: "12px" }}>
              <span dangerouslySetInnerHTML={{ __html: this.state.err_input_pass }} />
            </small>
          )}
        </div>

        {/* Remember me + Forgot */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "1.5rem"
        }}>
          <label style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            fontSize: "13px",
            color: "#6b7280",
            cursor: "pointer"
          }}>
            <input type="checkbox" style={{ accentColor: "#1a1a2e", width: "14px", height: "14px" }} />
            Ghi nhớ đăng nhập
          </label>
          <a href="/reset-pass" style={{ fontSize: "13px", color: "#0f3460", textDecoration: "none" }}>
            Quên mật khẩu?
          </a>
        </div>

        {/* Login button */}
        <button
          onClick={this.btnLogin.bind(this)}
          style={{
            width: "100%",
            background: "#1a1a2e",
            color: "#e2c27d",
            border: "none",
            borderRadius: "8px",
            padding: "12px",
            fontSize: "15px",
            fontWeight: "600",
            cursor: "pointer",
            letterSpacing: "0.08em",
            marginBottom: "1rem"
          }}
        >
          ĐĂNG NHẬP
        </button>

        {/* Footer links */}
        <div style={{
          borderTop: "1px solid #f3f4f6",
          paddingTop: "1rem",
          textAlign: "center"
        }}>
          <p style={{ fontSize: "13px", color: "#6b7280", margin: "0 0 6px" }}>
            Chưa có tài khoản?{" "}
            <a href="/signup" style={{ color: "#0f3460", textDecoration: "none", fontWeight: "500" }}>
              Đăng ký ngay
            </a>
          </p>
          <p style={{ fontSize: "13px", color: "#6b7280", margin: 0 }}>
            <a href="/home" style={{ color: "#6b7280", textDecoration: "none" }}>
              ← Về trang chủ
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
}
