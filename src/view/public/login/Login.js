import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./style.css";
import {
  mailformat,
  nameWebsite,
  rePassword,
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

    // const response = await fetch(
    //   `${urlapi}/api/auth/login`,
    //   req
    // );
    // const { data } = await response.json();
    fetch(`${urlapi}/api/auth/login`, req)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const { actions } = this.props;
        if(data.status && data.status === "200"){
          
          actions.login_success(data.data);
          this.setState({
            requestHome: true,
          });
        }
        else{
          actions.log_out();
        }
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
    if (data.status) {
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
    if (this.state.requestHome) return <Redirect to="/home" />;
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
                &nbsp;
                {nameWebsite}
              </h1>
            </header>
            <div className="auth-content">
              <p className="text-center">LOGIN TO CONTINUE</p>
              <form id="login-form">
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    type="email"
                    className="form-control underlined"
                    name="username"
                    id="username"
                    placeholder="Your email address"
                    value={this.state.email_dn}
                    onChange={this.enter_email_dn.bind(this)}
                    required=""
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
                  <input
                    type="password"
                    className="form-control underlined"
                    name="password"
                    id="password"
                    placeholder="Your password"
                    required=""
                    value={this.state.password_dn}
                    onChange={this.enter_password_dn.bind(this)}
                  />
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
                <div className="form-group">
                  <label htmlFor="remember">
                    <input className="checkbox" id="remember" type="checkbox" />
                    <span>Remember me</span>
                  </label>
                  <a href="/reset-pass" className="forgot-btn pull-right">
                    Forgot password?
                  </a>
                </div>
                <div className="form-group">
                  <input
                    type="button"
                    className="btn btn-block btn-primary"
                    onClick={this.btnLogin.bind(this)}
                    defaultValue="Login"
                  />
                </div>
                <div className="form-group">
                  <p className="text-muted text-center">
                    Do not have an account? <a href="/signup">Sign Up</a>
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
