import React, { Component } from "react";
import "./style.css";
import {nameWebsite} from '../../../setting/store/const';
export default class ResetPass extends Component {
  render() {
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
                </div>&nbsp;
                {nameWebsite}
              </h1>
            </header>
            <div className="auth-content">
              <p className="text-center">PASSWORD RECOVER</p>
              <p className="text-muted text-center">
                <small>
                  Enter your email address to recover your password.
                </small>
              </p>
              <form id="reset-form">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control underlined"
                    name="email1"
                    id="email1"
                    placeholder="Your email address"
                    required=""
                  />
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-block btn-primary">
                    Reset
                  </button>
                </div>
                <div className="form-group clearfix">
                  <a className="pull-left" href="/login">
                    Return to Login
                  </a>
                  <a className="pull-right" href="/signup">
                    Sign Up
                  </a>
                </div>
                <div className="form-group">
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
