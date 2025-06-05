import React, { Component } from "react";
import { urlapi } from "../../../../../../setting/store/const";
import ChooseAddress from "../shoping_cart/ChooseAddress";
import "./plugin-style.css";
import "./style-smb.css";
import { data } from "jquery";
class AddressUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        idUser: null,
        username: null,
        address: null,
        birthDay: null,
        email: null,
        fullName: null,
        gender: null,
        password: null,
        pathAvatar: null,
        phoneNumber: null,
        role: null,
        status: null,
      },
    };
  }
  saveInforUser = (e) => {
    if (
      this.props.state_data.data_page.data.detailaddress &&
      this.props.state_data.data_page.data.district &&
      this.props.state_data.data_page.data.province
    ) {
      e.preventDefault();
      const { user } = this.state;
      const req = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          idUser: user.idUser,
          username: user.username,
          password: user.password,
          status: user.status,
          role: user.role,
          fullName: user.fullName,
          address:
            this.props.state_data.data_page.data?.detailaddress +
            ", " +
            this.props.state_data.data_page.data?.district +
            ", " +
            this.props.state_data.data_page.data?.province,
          birthDay: user.birthDay,
          gender: user.gender,
          email: user.email,
          phoneNumber: user.phoneNumber,
          pathAvatar: user.pathAvatar,
        }),
      };
      fetch(urlapi + "/api/Users/UpdateUser", req)
        .then((response) => response.json())
        .then((data) => {
          if (data.status === "200")
            alert("Cập nhật thông tin người dùng thành công !");
          else alert("Cập nhật thông tin người dùng thất bại !");
        })
        .catch((error) => console.error("Lỗi POST:", error));
    } else alert("bạn nhâp địa chỉ thiếu thông tin !");
  };
  getInfoUser = (id) => {
    fetch(`${urlapi}/api/Users/${id}/getInfo`, {
      method: "PUT",
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ user: data.data });
      })
      .catch((error) => {});
  };
  componentDidMount() {
    this.getInfoUser(this.props.state_data.user_info.id_user);
  }
  render() {
    console.log("data props :", this.props);
    console.log("data state :", this.state);
    return (
      <>
        <div className="col-xs-12 col-sm-9 col-md-9 accounts-right">
          <div className="row">
            <div className="col-xs-12" id="customer_sidebar">
              <div className="accounts style-bg">
                <div className="accounts_title">
                  <h2>Địa chỉ</h2>
                </div>
                <ChooseAddress {...this.props} />
                <div className="account_col">
                  <div className="account_main col_main_submit">
                    <button
                      id="submit_info"
                      className="updateAccount"
                      type="button"
                      onClick={this.saveInforUser}
                    >
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
  }
}
export default AddressUser;
