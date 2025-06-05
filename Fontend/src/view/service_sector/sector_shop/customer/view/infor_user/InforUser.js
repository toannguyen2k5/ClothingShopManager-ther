import React, { Component } from "react";
import Information from "./Information";
import "./plugin-style.css";
import "./style-smb.css";
import AddressUser from "./AddressUser";
import ResetPass from "./ResetPass";
import DiscountUser from "./DiscountUser";
import OrderUser from "./OrderUser";
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
        return <Information {...this.props} />;
      case "orders":
        return <OrderUser {...this.props} />;
      case "address":
        return <AddressUser {...this.props} />;
      case "vouchers":
        return <DiscountUser {...this.props} />;
      case "reset":
        return <ResetPass {...this.props} />;
      default:
        return <Information {...this.props} />;
    }
  };
  render() {
    return (
      <>
        <div className="layout-info-account">
          <div className="container">
            <div className="title-login-account text-center">
              <img
                width="30"
                height="30"
                src="https://file.hstatic.net/1000253775/file/download-icon-people_person_profile_user_icon-1320186207447274965_64_b60e4f7fb4054e4d9e38917a17deddf7.png"
                alt="Tài khoản"
              />
              <h1>Tài khoản của bạn</h1>
            </div>
            <div className="row d-flex">
              <div className="col-xs-12 col-sm-3 col-md-3 sidebar-account accounts-left">
                <div className="AccountSidebar hidden-xs">
                  <div className="title_account">
                    <div className="content_account">
                      <h2 className="name_account">Hi,</h2>
                      <p></p>
                    </div>
                  </div>
                  <div className="AccountContent">
                    <div className="AccountList">
                      <ul className="list-unstyled">
                        <li
                          className="current"
                          onClick={() => {
                            this.setState({ selectedMenu: "profile" });
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          <a>
                            <span>
                              <i className="fas fa-user"></i>
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
                              <i className="fas fa-file-invoice"></i>
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
                              <i className="fas fa-map-marker-alt"></i>
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
                          <a className="btn-voucher">
                            <span>
                              {" "}
                              <i className="fas fa-tags"></i>
                            </span>
                            <span> Vouchers</span>
                          </a>
                          <img
                            className=""
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
                              <i className="fas fa-lock"></i>
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
