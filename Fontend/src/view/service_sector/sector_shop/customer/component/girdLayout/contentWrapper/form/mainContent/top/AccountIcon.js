import React, { Component } from "react";
import { urlapi } from "../../../../../../../../../../setting/store/const";
class AccountIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
    };
  }
  SetisMenuOpen = () => {
    const result = this.state.isMenuOpen;
    this.props.state_data.user_info.full_name &&
      this.setState({ isMenuOpen: !result });
  };
  render() {
    const { user_info } = this.props.state_data;
    console.log("data user_info :", user_info);
    return (
      <div style={{ marginRight: "15px", marginLeft: "15px" }}>
        <li className="list-inline-item mr-0 header-account">
          <div className="list-inline-item-text">
            <a
              className="group-icon-item group-icon-item-popup d-flex d-flex-center account-header"
              href={user_info.full_name ? "#" : "/login"}
            >
              <span className="box-icon">
                <img
                  style={{ borderRadius: "50%" }}
                  width="24"
                  height="24"
                  src={
                    user_info && user_info.avatar
                      ? urlapi + "/api/Image/" + user_info.avatar
                      : "//theme.hstatic.net/1000253775/1001315144/14/user-account.svg?v=634"
                  }
                  alt="Tài khoản"
                  onClick={this.SetisMenuOpen}
                />
              </span>
              {this.state.isMenuOpen && (
                <div
                  style={{
                    position: "absolute",
                    top: "100%",
                    right: 0,
                    backgroundColor: "#fff",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                    borderRadius: "8px",
                    padding: "10px",
                    zIndex: 100,
                  }}
                >
                  <ul
                    style={{
                      margin: 0,
                      padding: 0,
                      listStyle: "none",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <li style={{ padding: "5px 30px", cursor: "pointer" }}>
                      <a href="/shop/infor">Thông tin cá nhân</a>
                    </li>
                    <li style={{ padding: "5px 30px", cursor: "pointer" }}>
                      <a
                        className="dropdown-item border-radius-md"
                        href="/home"
                        onClick={(e) => {
                          this.props.actions.log_out();
                        }}
                      >
                        {" "}
                        Đăng xuất
                      </a>
                    </li>
                  </ul>
                </div>
              )}
              <span className="box-text box-text-login hidden-sm hidden-xs">
                {user_info.full_name || "Đăng nhập"}
              </span>
              <span className="box-arrow">
                <svg viewBox="0 0 20 9" role="presentation">
                  <path
                    d="M.47108938 9c.2694725-.26871321.57077721-.56867841.90388257-.89986354C3.12384116 6.36134886 5.74788116 3.76338565 9.2467995.30653888c.4145057-.4095171 1.0844277-.40860098 1.4977971.00205122L19.4935156 9H.47108938z"
                    fill="#ffffff"
                  ></path>
                </svg>
              </span>
            </a>
          </div>
        </li>
      </div>
    );
  }
}

export default AccountIcon;
