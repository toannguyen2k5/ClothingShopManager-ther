import React, { Component } from "react";
import Information from "./Information";
import "./plugin-style.css";
import "./style-smb.css";
import ChooseAddress from "../shoping_cart/ChooseAddress";
class InforUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMenu: null,
    };
  }
  renderContent = () => {
    switch (this.state.selectedMenu) {
      case "profile":
        return <Information />;
      case "orders":
        return <></>;
      case "address":
        return (
          <>
            <div class="col-xs-12 col-sm-9 col-md-9 accounts-right">
              <div class="row">
                <div class="col-xs-12" id="customer_sidebar">
                  <div class="accounts style-bg">
                    <div class="accounts_title">
                      <h2>Địa chỉ</h2>
                    </div>
                    <ChooseAddress />
                    <div class="account_col">
                      <div class="account_main col_main_submit">
                        <button id="submit_info" class="updateAccount">
                          <span>Cập nhật</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      case "vouchers":
        return <></>;
      case "reset":
        return (
          <>
            <div class="col-xs-12 col-sm-9 col-md-9 accounts-right">
              <div class="row">
                <div class="col-xs-12" id="customer_sidebar">
                  <div class="accounts style-bg">
                    <div class="accounts_title">
                      <h2>Đổi mật khẩu</h2>
                    </div>
                    <div class="account_col">
                      <div class="account_main">
                        <strong>Email </strong>
                        <input
                          required=""
                          type="email"
                          placeholder="Địa chỉ email"
                          class="text"
                          size="30"
                          style={{ width: "850px" }}
                        />
                      </div>
                    </div>
                    <div class="account_col">
                      <div class="account_main col_main_submit">
                        <button id="submit_info" class="updateAccount">
                          <span>Reset</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      default:
        return <Information />;
    }
  };
  render() {
    return (
      <>
        <div class="layout-info-account">
          <div class="container">
            <div class="title-login-account text-center">
              <img
                width="30"
                height="30"
                src="https://file.hstatic.net/1000253775/file/download-icon-people_person_profile_user_icon-1320186207447274965_64_b60e4f7fb4054e4d9e38917a17deddf7.png"
                alt="Tài khoản"
              />
              <h1>Tài khoản của bạn</h1>
            </div>
            <div class="row d-flex">
              <div class="col-xs-12 col-sm-3 col-md-3 sidebar-account accounts-left">
                <div class="AccountSidebar hidden-xs">
                  <div class="title_account">
                    <div class="content_account">
                      <h2 class="name_account">Hi,</h2>
                      <p></p>
                    </div>
                  </div>
                  <div class="AccountContent">
                    <div class="AccountList">
                      <ul class="list-unstyled">
                        <li
                          class="current"
                          onClick={() => {
                            this.setState({ selectedMenu: "profile" });
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          <a>
                            <span>
                              <i class="fas fa-user"></i>
                            </span>
                            <span> Hồ sơ của tôi </span>
                          </a>
                        </li>
                        <li
                          onClick={() => {
                            this.setState({ selectedMenu: "orders" });
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          <a>
                            <span>
                              <i class="fas fa-file-invoice"></i>
                            </span>
                            <span> Đơn hàng của tôi </span>
                          </a>
                        </li>
                        <li
                          onClick={() => {
                            this.setState({ selectedMenu: "address" });
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          <a>
                            <span>
                              {" "}
                              <i class="fas fa-map-marker-alt"></i>
                            </span>
                            <span> Sổ địa chỉ</span>
                          </a>
                        </li>

                        <li
                          id="voucher-content-acccount"
                          onClick={() => {
                            this.setState({ selectedMenu: "vouchers" });
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          <a class="btn-voucher">
                            <span>
                              {" "}
                              <i class="fas fa-tags"></i>
                            </span>
                            <span> Vouchers</span>
                          </a>
                          <img
                            class=""
                            src="https://file.hstatic.net/1000253775/file/vouvher__tag-02_2b4bab40f8cf476daf4d0ddc6ea1d8c6_medium.png"
                            alt="Tag Sale Img"
                          />
                        </li>

                        <li
                          onClick={() => {
                            this.setState({ selectedMenu: "reset" });
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          <a>
                            <span>
                              <i class="fas fa-lock"></i>
                            </span>
                            <span>Đổi mật khẩu</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {this.renderContent(this.state.selectedMenu)}
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default InforUser;
