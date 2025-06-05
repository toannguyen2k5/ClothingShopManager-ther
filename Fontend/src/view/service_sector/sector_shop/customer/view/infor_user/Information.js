import React, { Component } from "react";
import { urlapi } from "../../../../../../setting/store/const";
class Information extends Component {
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
        address: user.address,
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
  };
  handleChangeValue = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      user: {
        ...prevState.user,
        [name]: name === "gender" ? value === "true" : value,
      },
    }));
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
    const { user } = this.state;
    console.log("data user :", user);
    return (
      <>
        <div className="col-xs-12 col-sm-9 col-md-9 accounts-right">
          <div className="row">
            <div className="col-xs-12" id="customer_sidebar">
              <div className="accounts style-bg">
                <div className="accounts_title">
                  <h2>Hồ sơ của tôi</h2>
                </div>
                <div className="accounts_main">
                  <div className="account">
                    <form
                      accept-charset="UTF-8"
                      action="/account"
                      id="update_customer"
                      method="post"
                    >
                      <input
                        name="form_type"
                        type="hidden"
                        value="update_customer"
                      />
                      <input name="utf8" type="hidden" value="✓" />
                      <input
                        name="__RequestVerificationToken"
                        type="hidden"
                        value="CfDJ8FyFPV59mBtNhmQGz0fYZt8BGe8et1kRy5js5fnlxhPRk1y5Lk6qX7N43FEcAbfFHPn0o-pq_79XURlI_duZquD63v-LWj5grtFqbbdEUeOJ4p4wz9zMntXLaFNo3odeuPPi_1xp3zpkru_g7ncze27yZ5Gp5P6CMIfvbSmue7-7MdttLxLlFwZzv9MZ-7SYSw"
                      />

                      <div className="account_col">
                        <div className="account_main">
                          <label>Họ và tên </label>
                          <input
                            required=""
                            type="text"
                            name="fullName"
                            placeholder="Họ và tên"
                            value={user?.fullName}
                            id="last_name"
                            className="text"
                            size="30"
                            style={{ width: "850px" }}
                            onChange={this.handleChangeValue}
                          />
                        </div>
                      </div>
                      <div className="account_col">
                        <div className="account_main">
                          <label>Sinh nhật</label>
                          <input
                            required=""
                            type="date"
                            id="datepicker"
                            name="birthDay"
                            placeholder="Ngày sinh"
                            className="text"
                            size="30"
                            value={user?.birthDay}
                            onChange={this.handleChangeValue}
                          />
                        </div>
                      </div>

                      <div className="account_col">
                        <div className="account_main">
                          <label>Số điện thoại</label>
                          <input
                            type="text"
                            name="phoneNumber"
                            className="text phone"
                            size="30"
                            value={user?.phoneNumber}
                            onChange={this.handleChangeValue}
                          />
                        </div>
                      </div>
                      <div className="account_col">
                        <div className="account_main">
                          <label>Email</label>
                          <input
                            type="text"
                            name="email"
                            className="text phone"
                            size="30"
                            value={user?.email}
                            disabled
                            readOnly
                            style={{ backgroundColor: "blanchedalmond" }}
                          />
                        </div>
                      </div>
                      <div className="account_col">
                        <div className="account_main">
                          <label>địa chỉ</label>
                          <input
                            type="text"
                            name="address"
                            className="text phone"
                            size="30"
                            value={user?.address}
                            readOnly
                            disabled
                            style={{ backgroundColor: "blanchedalmond" }}
                          />
                        </div>
                      </div>
                      <div className="account_col account_col_seeq">
                        <div className="account_main">
                          <label>Giới tính</label>
                          <div className="genders">
                            <div className="gender">
                              <input
                                id="gender_m"
                                type="radio"
                                name="gender"
                                value="true"
                                checked={user?.gender === true}
                                onChange={this.handleChangeValue}
                              />
                              <label for="gender_m">
                                <span className="sp_input"></span>
                                <span className="sp_lable">Nam</span>
                              </label>
                            </div>

                            <div className="gender">
                              <input
                                id="gender_f"
                                type="radio"
                                name="gender"
                                value="false"
                                checked={user?.gender === false}
                                onChange={this.handleChangeValue}
                              />
                              <label for="gender_f">
                                <span className="sp_input"></span>
                                <span className="sp_lable">Nữ</span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="account_col">
                        <div className="account_main col_main_submit">
                          <button
                            type="button"
                            id="submit_info"
                            className="updateAccount"
                            onClick={this.saveInforUser}
                          >
                            <span>Cập nhật</span>
                          </button>
                        </div>
                      </div>
                    </form>
                    <div className="clearfix"></div>
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
export default Information;
