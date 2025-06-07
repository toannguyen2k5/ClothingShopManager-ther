import React, { Component } from "react";
import { urlapi } from "../../../../../../../../../setting/store/const";

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: "",
    };
  }

  render() {
    console.log("state_data Account: ",this.props.state_data);
    if (this.props.state_data.user_info.role_level >= 5)
      // "admin")
      return (
        <>
          <a
            href="#"
            className="nav-link text-body font-weight-bold px-0"
            onClick={(e) => {
              e.preventDefault();
              this.setState({
                show: this.state.show === "" ? "show" : "",
              });
            }}
          >
            <img
              src={`${urlapi}/api/Image/${this.props.state_data.user_info.avatar}`}
              style={{ width: "40px", height: "auto" }}
            />
            &nbsp;
            <span className="d-sm-inline d-none">
              {this.props.state_data.user_info.full_name}
            </span>
          </a>
          <ul
            class={`dropdown-menu  dropdown-menu-end  px-2 py-3 me-sm-n4 ${this.state.show}`}
            aria-labelledby="dropdownMenuButton"
          >
            <li className="mb-2">
              <a
                className="dropdown-item border-radius-md"
                href="/admin/profile"
              >
                <i
                  className="fa fa-address-card-o me-sm-1"
                  aria-hidden="true"
                ></i>
                <span className="d-sm-inline">&nbsp;Thông tin cá nhân</span>
              </a>
            </li>
            <li className="mb-2">
              <a
                className="dropdown-item border-radius-md"
                href="/admin/billing/"
              >
                <i className="fa fa-credit-card me-sm-1" aria-hidden="true"></i>
                <span className="d-sm-inline">&nbsp;Thông tin giao dịch</span>
              </a>
            </li>
            <li className="mb-2">
              <a className="dropdown-item border-radius-md" href="#">
                <i className="fa fa-inbox me-sm-1" aria-hidden="true"></i>
                <span className="d-sm-inline">&nbsp;Hộp thư đến</span>
              </a>
            </li>
            <li className="mb-2">
              <a className="dropdown-item border-radius-md" href="#">
                <i className="fa fa-comments me-sm-1" aria-hidden="true"></i>
                <span className="d-sm-inline">&nbsp;Bình luận</span>
              </a>
            </li>
            <hr />
            <li className="mb-2">
              <a
                className="dropdown-item border-radius-md"
                href="/admin/setting/"
              >
                <i className="fa fa-cog me-sm-1" aria-hidden="true"></i>
                <span className="d-sm-inline">&nbsp;Thiết lập tài khoản</span>
              </a>
            </li>
            <hr />
            <li>
              <a
                className="dropdown-item border-radius-md"
                href="/home"
                onClick={(e) => {
                  this.props.actions.log_out();
                }}
              >
                <i className="fa fa-sign-out me-sm-1" aria-hidden="true"></i>
                <span className="d-sm-inline">&nbsp;Đăng xuất</span>
              </a>
            </li>
          </ul>
        </>
      );
    else
      return (
        <a href="#" className="nav-link text-body font-weight-bold px-0">
          <i className="fa fa-user me-sm-1" aria-hidden="true"></i>
          <span className="d-sm-inline d-none">Sign In</span>
        </a>
      );
  }
}

export default Account;
