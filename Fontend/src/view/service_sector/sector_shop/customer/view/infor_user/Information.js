import React, { Component } from "react";
import { urlapi } from "../../../../../../setting/store/const";
import "./Information.css";
class Information extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false, // false = chỉ xem (view mode), true = đang chỉnh sửa (edit mode)
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
      originalUser: null, // lưu bản gốc để "Hủy" có thể khôi phục
    };
  }

  saveInforUser = (e) => {
    e.preventDefault();
    const { user } = this.state;

    const formData = new FormData();

    formData.append(
      "Users",
      new Blob([JSON.stringify(user)], {
        type: "application/json",
      })
    );
    fetch(urlapi + "/api/Users/Update",{
      method : "POST",
      body : formData
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "200") {
          alert("Cập nhật thông tin người dùng thành công !");
          // Cập nhật xong thì quay lại chế độ xem, đồng thời cập nhật lại bản gốc
          this.setState((prevState) => ({
            isEditing: false,
            originalUser: prevState.user,
          }));
        } else {
          alert("Cập nhật thông tin người dùng thất bại !");
        }
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
        this.setState({ user: data.data, originalUser: data.data });
      })
      .catch((error) => { });
  };

  componentDidMount() {
    this.getInfoUser(this.props.state_data.user_info.id_user);
  }

  // Bấm "Chỉnh sửa" -> chuyển sang form chỉnh sửa
  handleEditClick = () => {
    this.setState({ isEditing: true });
  };

  // Bấm "Hủy" -> khôi phục dữ liệu gốc, quay lại chế độ xem
  handleCancelClick = () => {
    this.setState((prevState) => ({
      isEditing: false,
      user: prevState.originalUser || prevState.user,
    }));
  };

  renderGenderText = (gender) => {
    if (gender === true) return "Nam";
    if (gender === false) return "Nữ";
    return "Chưa cập nhật";
  };

  render() {
    const { user, isEditing } = this.state;
    const isActive = user?.status === 1 || user?.status === "1" || user?.status === true;
    const displayName = user?.fullName || "Người dùng";
    const initials = displayName
      .split(" ")
      .filter(Boolean)
      .slice(-2)
      .map((name) => name[0])
      .join("")
      .toUpperCase();

    return (
      <div className="accounts-right">
        <div className="accounts style-bg">
          <div className="accounts_title">
            <h2>Hồ sơ của tôi</h2>
            <p>Quản lý thông tin cá nhân và bảo mật tài khoản</p>
          </div>

          <div className="accounts_main">
            <div className="profile-summary">
              <div className="profile-avatar">
                {user?.pathAvatar ? (
                  <img src={user.pathAvatar} alt={displayName} />
                ) : (
                  <span className="profile-avatar-fallback">{initials || "ND"}</span>
                )}
              </div>
              <div className="profile-info">
                <div className="profile-name-row">
                  <h3>{displayName}</h3>
                  <span className={isActive ? "profile-status active" : "profile-status"}>
                    {isActive ? "Đang hoạt động" : "Tài khoản"}
                  </span>
                </div>
                <p><i className="fas fa-envelope"></i>{user?.email || "Chưa có email"}</p>
                <p><i className="fas fa-phone"></i>{user?.phoneNumber || "Chưa có số điện thoại"}</p>
              </div>
            </div>

            <div className="account profile-card">
              {!isEditing ? (
                // ================= CHẾ ĐỘ XEM (VIEW MODE) =================
                <div className="account_view">
                  <div className="account_col"><div className="account_main"><label>Họ và tên</label><p className="view_value">{displayName}</p></div></div>
                  <div className="account_col"><div className="account_main"><label>Số điện thoại</label><p className="view_value">{user?.phoneNumber || "Chưa cập nhật"}</p></div></div>
                  <div className="account_col"><div className="account_main"><label>Email</label><p className="view_value">{user?.email || "Chưa cập nhật"}</p></div></div>
                  <div className="account_col"><div className="account_main"><label>Giới tính</label><p className="view_value">{this.renderGenderText(user?.gender)}</p></div></div>
                  <div className="account_col"><div className="account_main"><label>Ngày sinh</label><p className="view_value">{user?.birthDay || "Chưa cập nhật"}</p></div></div>
                  <div className="account_col account_col_address"><div className="account_main"><label>Địa chỉ</label><p className="view_value">{user?.address || "Chưa cập nhật"}</p></div></div>

                  <div className="account_col">
                    <div className="account_main col_main_submit">
                      <button
                        type="button"
                        id="edit_info"
                        className="updateAccount"
                        onClick={this.handleEditClick}
                      >
                        <span>Chỉnh sửa</span>
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                // ================= CHẾ ĐỘ CHỈNH SỬA (EDIT MODE) =================
                <form
                  acceptCharset="UTF-8"
                  action="/account"
                  id="update_customer"
                  method="post"
                  onSubmit={this.saveInforUser}
                >
                  <input name="form_type" type="hidden" value="update_customer" />
                  <input name="utf8" type="hidden" value="✓" />
                  <input
                    name="__RequestVerificationToken"
                    type="hidden"
                    value="CfDJ8FyFPV59mBtNhmQGz0fYZt8BGe8et1kRy5js5fnlxhPRk1y5Lk6qX7N43FEcAbfFHPn0o-pq_79XURlI_duZquD63v-LWj5grtFqbbdEUeOJ4p4wz9zMntXLaFNo3odeuPPi_1xp3zpkru_g7ncze27yZ5Gp5P6CMIfvbSmue7-7MdttLxLlFwZzv9MZ-7SYSw"
                  />

                  <div className="account_col">
                    <div className="account_main">
                      <label htmlFor="fullName">Họ và tên</label>
                      <input
                        required
                        type="text"
                        id="fullName"
                        name="fullName"
                        placeholder="Họ và tên"
                        value={user?.fullName || ""}
                        className="text"
                        onChange={this.handleChangeValue}
                      />
                    </div>
                  </div>

                  <div className="account_col">
                    <div className="account_main">
                      <label htmlFor="phoneNumber">Số điện thoại</label>
                      <input
                        type="text"
                        id="phoneNumber"
                        name="phoneNumber"
                        className="text phone"
                        value={user?.phoneNumber || ""}
                        onChange={this.handleChangeValue}
                      />
                    </div>
                  </div>

                  <div className="account_col">
                    <div className="account_main">
                      <label htmlFor="email">Email</label>
                      <input
                        type="text"
                        id="email"
                        name="email"
                        className="text phone"
                        value={user?.email || ""}
                        disabled
                        readOnly
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
                          <label htmlFor="gender_m">
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
                          <label htmlFor="gender_f">
                            <span className="sp_input"></span>
                            <span className="sp_lable">Nữ</span>
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="account_col">
                      <div className="account_main">
                        <label htmlFor="birthDay">Ngày sinh</label>
                        <input
                          type="date"
                          id="birthDay"
                          name="birthDay"
                          className="text"
                          value={user?.birthDay || ""}
                          onChange={this.handleChangeValue}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="account_col">
                    <div className="account_main col_main_submit form_actions">
                      <button type="submit" id="submit_info" className="updateAccount">
                        <span>Lưu</span>
                      </button>
                      <button
                        type="button"
                        id="cancel_info"
                        className="cancelAccount"
                        onClick={this.handleCancelClick}
                      >
                        <span>Hủy</span>
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Information;