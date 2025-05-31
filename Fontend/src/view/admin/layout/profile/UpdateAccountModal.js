import React, { Component } from "react";
import Modal from "react-modal";
import md5 from "md5";
import "./UpdateAccountModal.css";

Modal.setAppElement("#root");

class UpdateAccountModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        ...props.userData,
        oldPassword: "",
        newPassword: "",
      },
      errors: {
        oldPassword: "",
        newPassword: "",
      },
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.userData !== this.props.userData) {
      this.setState({
        formData: {
          ...this.props.userData,
          oldPassword: "",
          newPassword: "",
        },
        errors: {
          oldPassword: "",
          newPassword: "",
        },
      });
    }
  }

  validateNewPassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return regex.test(password);
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [name]: value,
      },
      errors: {
        ...prevState.errors,
        [name]: "",
      },
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { oldPassword, newPassword } = this.state.formData;
    const currentPasswordHashed = this.props.userData.password;

    let valid = true;
    let errors = { oldPassword: "", newPassword: "" };

    // Validate old password
    if (md5(oldPassword) !== currentPasswordHashed) {
      errors.oldPassword = "Mật khẩu cũ không đúng!";
      valid = false;
    }

    // Validate new password format
    if (newPassword != "" && !this.validateNewPassword(newPassword)) {
      errors.newPassword =
        "Mật khẩu mới phải có ít nhất 8 ký tự, gồm chữ hoa, chữ thường, số và ký tự đặc biệt.";
      valid = false;
    }

    if (!valid) {
      this.setState({ errors });
      return;
    }

    // OK -> cập nhật
    const updatedData = {
      ...this.state.formData,
      password: newPassword === "" ? currentPasswordHashed : md5(newPassword), // gửi hash mới lên server
    };
    delete updatedData.oldPassword;
    delete updatedData.newPassword;

    this.props.onUpdate(updatedData);
    this.props.onClose();
  };

  render() {
    const { isOpen, onClose } = this.props;
    const { formData, errors } = this.state;
    console.log(this.props);
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="Cập nhật tài khoản"
      >
        <h2>Cập nhật tài khoản</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label for="fullName">Họ và tên:</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName || ""}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label for="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email || ""}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label for="phone">Số điện thoại:</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phoneNumber || ""}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label for="address">Địa chỉ:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address || ""}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label for="birthDay">Ngày sinh:</label>
            <input
              type="date"
              id="birthDay"
              name="birthDay"
              value={formData.birthDay || ""}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label for="gender">Giới tính:</label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={this.handleChange}
            >
              <option value="true" selected>
                Nam
              </option>
              <option value="false">Nữ</option>
            </select>
          </div>

          <label>Tài khoản (không thể chỉnh sửa):</label>
          <input name="username" value={formData.username || ""} readOnly />

          <div className="form-group">
            <label for="oldPassword">Mật khẩu cũ:</label>
            <input
              id="oldPassword"
              type="password"
              name="oldPassword"
              value={formData.oldPassword}
              onChange={this.handleChange}
              required
            />
          </div>
          {errors.oldPassword && (
            <div style={{ color: "red", fontSize: "0.9em" }}>
              {errors.oldPassword}
            </div>
          )}
          <div className="form-group">
            <label for="oldPassword">Mật khẩu mới:</label>
            <input
              id="oldPassword"
              type="password"
              name="newPassword"
              value={formData.newPassword}
              onChange={this.handleChange}
            />
          </div>
          {errors.newPassword && (
            <div style={{ color: "red", fontSize: "0.9em" }}>
              {errors.newPassword}
            </div>
          )}

          <div style={{ marginTop: "10px" }}>
            <button type="submit">Cập nhật</button>
            <button type="button" onClick={onClose}>
              Hủy
            </button>
          </div>
        </form>
      </Modal>
    );
  }
}

export default UpdateAccountModal;
