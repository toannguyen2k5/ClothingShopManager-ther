import React, { Component } from "react";
import { urlapi } from "../../../../../../setting/store/const";
import md5 from "md5";
const generateRandomCode = () => {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let code = "";
  for (let i = 0; i < 8; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
};
class Information extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: null,
      import_code: null,
      modal_reset: false,
      pass: "",
    };
  }
  SendEmail = () => {
    this.setState({ code: generateRandomCode() }, () => {
      fetch(
        urlapi +
          "/api/auth/forgetpass?email=" +
          this.props.state_data.user_info.email +
          "&code=" +
          this.state.code
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.status && data.status === "200") {
            alert("gửi mã đến email thành công !");
          } else alert("gửi mã đến email thất bại !");
          console.log(data);
        })
        .catch((error) => console.error(error));
    });
  };
  authenticInfor = () => {
    const { code, import_code } = this.state;
    if (code && code === import_code) {
      this.setState({ modal_reset: true });
    } else alert("mã không chính xác !");
  };
  updatePass = () => {
    fetch(
      urlapi +
        "/api/auth/reset?idUser=" +
        this.props.state_data.user_info.id_user +
        "&pass=" +
        md5(this.state.pass)
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.status && data.status === "200") {
          alert("đổi mật khẩu thành công !");
        } else alert("đổi mật khẩu thất bại !");
        console.log(data);
      })
      .catch((error) => console.error(error));
  };
  render() {
    return (
      <>
        <div className="col-xs-12 col-sm-9 col-md-9 accounts-right">
          <div className="row">
            <div className="col-xs-12" id="customer_sidebar">
              <div className="accounts style-bg">
                <div className="accounts_title">
                  <h2>Đổi mật khẩu</h2>
                </div>
                <div className="account_col">
                  <div className="account_main">
                    <strong>import code </strong>
                    <input
                      required=""
                      type="text"
                      placeholder="code"
                      className="text"
                      size="30"
                      style={{ width: "300px" }}
                      onChange={(e) => {
                        this.setState({ import_code: e.target.value });
                      }}
                    />
                    <button
                      style={{
                        backgroundColor: "ButtonShadow",
                        borderRadius: "10px",
                        padding: "7px 10px",
                        marginLeft: "10px",
                        marginRight: "10px",
                      }}
                      onClick={this.authenticInfor}
                    >
                      <span>xác thực</span>
                    </button>
                  </div>
                </div>
                {this.state.modal_reset && (
                  <>
                    <div className="account_col">
                      <div className="account_main">
                        <strong>new pass </strong>
                        <input
                          required=""
                          type="password"
                          placeholder="new pass"
                          className="text"
                          size="30"
                          style={{ width: "300px" }}
                          onChange={(e) => {
                            this.setState({ pass: e.target.value });
                          }}
                        />
                      </div>
                    </div>
                    <div className="account_col">
                      <div className="account_main col_main_submit">
                        <button
                          id="submit_info"
                          className="updateAccount"
                          onClick={this.updatePass}
                        >
                          <span>reset</span>
                        </button>
                      </div>
                    </div>
                  </>
                )}
                {!this.state.modal_reset && (
                  <div className="account_col">
                    <div className="account_main col_main_submit">
                      <button
                        id="submit_info"
                        className="updateAccount"
                        onClick={this.SendEmail}
                      >
                        <span>gửi mã</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Information;
