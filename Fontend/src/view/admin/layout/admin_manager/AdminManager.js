import React, { Component } from "react";
import DataTable from "react-data-table-component";
import "./AdminManager.css";
import { urlapi } from "../../../../setting/store/const";
import md5 from "md5";

export default class AdminManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      admins: [],
      showModal: false,
      newAdmin: {
        idUser: "",
        username: "",
        password: "",
        status: true,
        role: "admin",
        fullName: "",
        address: "",
        birthDay: "",
        gender: true,
        email: "",
        phoneNumber: "",
        pathAvatar: "",
      },
      avatarFile: null,
      filterText: "",
    };
  }

  getAllAdminsAndStaff = () => {
    fetch(urlapi + "/api/Users/getAllAdminsAndStaff")
      .then((response) => response.json())
      .then((data) => this.setState({ admins: data.data }))
      .catch((error) => console.error(error));
  };

  componentDidMount() {
    this.getAllAdminsAndStaff();
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState((prev) => ({
      newAdmin: {
        ...prev.newAdmin,
        [name]: name === "gender" ? value === 1 : value,
      },
    }));
  };
  handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      this.setState({ avatarFile: file });
    }
  };

  openModal = () => this.setState({ showModal: true });

  closeModal = () =>
    this.setState({
      showModal: false,
      newAdmin: { name: "", email: "", role: "Quản trị viên" },
    });

  addAdmin = async () => {
    const { newAdmin } = this.state;

    // Validate tối thiểu
    if (
      !newAdmin.fullName ||
      !newAdmin.email ||
      !newAdmin.username ||
      !newAdmin.phoneNumber ||
      !newAdmin.address ||
      !newAdmin.birthDay
    ) {
      alert("Vui lòng nhập đầy đủ thông tin bắt buộc.");
      return;
    }

    // Gửi dữ liệu đến backend
    try {
      const formData = new FormData();
      formData.append("username", newAdmin.username);
      formData.append("password", md5("Pass" + newAdmin.phoneNumber + "!"));
      formData.append("fullName", newAdmin.fullName);
      formData.append("email", newAdmin.email);
      formData.append("status", newAdmin.status);
      formData.append("role", newAdmin.role);
      formData.append("gender", newAdmin.gender);
      formData.append("address", newAdmin.address);
      formData.append("phoneNumber", newAdmin.phoneNumber);
      formData.append("birthDay", newAdmin.birthDay);
      if (this.state.avatarFile) {
        formData.append("avatar", this.state.avatarFile);
      }

      fetch(urlapi + "/api/Users/insertAdmin", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          if (data || data.data === 200) {
            this.getAllAdminsAndStaff();
          } else {
            alert("Thêm quản trị viên thất bại.");
          }
        })
        .catch((error) => console.error(error));
    } catch (error) {
      console.error("Lỗi khi gửi yêu cầu thêm người dùng:", error);
      alert("Đã xảy ra lỗi.");
    }
  };

  hideAdmin = (id, status) => {
    fetch(`${urlapi}/api/Users/${id}/status?status=${!status}`, {
      method: "PUT",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "200")
          this.getAllAdminsAndStaff();
      })
      .catch((error) => {
        alert("Có lỗi xảy ra khi cập nhật trạng thái.");
      });
  };
  handleFilterChange = (e) => {
    const { value } = e.target;

    this.setState((prev) => ({
      ...prev,
      filterText: value,
    }));
  };
  handleInputChange = (e) => {
    const { name, value } = e.target;
    let parsedValue = value;

    // Ép kiểu đúng cho status, gender
    if (name === "status" || name === "gender") {
      parsedValue = parseInt(value, 10);
    }

    this.setState((prev) => ({
      newAdmin: { ...prev.newAdmin, [name]: parsedValue },
    }));
  };

  render() {
    const { admins, showModal, newAdmin, filterText } = this.state;

    const filtered = admins?.filter(
      (admin) =>
        admin.username?.toLowerCase().includes(filterText?.toLowerCase()) ||
        admin.email?.toLowerCase().includes(filterText?.toLowerCase())
    );

    const columns = [
      { name: "STT", selector: (row, index) => index + 1, width: "70px" },
      { name: "Username", selector: (row) => row.username },
      {
        name: "Vai trò",
        selector: (row) => {
          switch (row.role) {
            case "admin":
              return "Quản trị viên";
            case "manager":
              return "Quản lý";
            case "staff":
              return "Nhân viên";
            default:
              return "Không xác định";
          }
        },
      },
      { name: "Họ tên", selector: (row) => row.fullName, sortable: true },
      { name: "Email", selector: (row) => row.email },
      { name: "Điện thoại", selector: (row) => row.phoneNumber },
      { name: "Địa Chỉ", selector: (row) => row.address },
      {
        name: "Trạng thái",
        selector: (row) => (row.status ? "Hoạt động" : "Khóa"),
      },
      {
        name: "Hành động",
        cell: (row) =>
          row.status ? (
            <button
              onClick={() => this.hideAdmin(row.idUser, row.status)}
              className="btn-hide"
            >
              Khóa
            </button>
          ) : (
            <button
              onClick={() => this.hideAdmin(row.idUser, row.status)}
              className="btn-hide"
            >
              Mở
            </button>
          ),
        width: "100px",
      },
    ];

    return (
      <div className="admin-manager">
        <h2>Quản lý Quản trị viên</h2>
        <div className="admin-toolbar">
          <input
            type="text"
            placeholder="Tìm theo tên hoặc email..."
            className="admin-search"
            value={filterText}
            onChange={this.handleFilterChange}
          />
          <button onClick={this.openModal} className="btn-add-admin">
            + Thêm
          </button>
        </div>

        <DataTable
          columns={columns}
          data={filtered}
          pagination
          highlightOnHover
        />

        {showModal && (
          <div className="admin-modal-overlay" onClick={this.closeModal}>
            <div
              className="admin-modal"
              onClick={(e) => e.stopPropagation()}
              style={{ width: "650px" }}
            >
              <h3>Thêm quản trị viên</h3>
              <div className="row">
                <div className="col-6">
                  <label>
                    Username:
                    <input
                      type="text"
                      name="username"
                      value={newAdmin.username}
                      onChange={this.handleInputChange}
                    />
                  </label>
                </div>
                <div className="col-6">
                  <label>
                    Họ tên:
                    <input
                      type="text"
                      name="fullName"
                      value={newAdmin.fullName}
                      onChange={this.handleInputChange}
                    />
                  </label>
                </div>
              </div>
              <div className="row">
                <label>
                  Email:
                  <input
                    type="email"
                    name="email"
                    value={newAdmin.email}
                    onChange={this.handleInputChange}
                  />
                </label>
              </div>
              <div className="row">
                <div className="col-6">
                  <label>
                    Số điện thoại:
                    <input
                      type="text"
                      name="phoneNumber"
                      value={newAdmin.phoneNumber}
                      onChange={this.handleInputChange}
                    />
                  </label>
                </div>
                <div className="col-6">
                  <label>
                    Ngày sinh:
                    <input
                      type="date"
                      name="birthDay"
                      value={newAdmin.birthDay}
                      onChange={this.handleInputChange}
                    />
                  </label>
                </div>
              </div>
              <div className="row">
                <label>
                  Địa chỉ:
                  <input
                    type="text"
                    name="address"
                    value={newAdmin.address}
                    onChange={this.handleInputChange}
                  />
                </label>
              </div>
              <div className="row">
                <div className="col-6">
                  <label>
                    Giới tính:
                    <select
                      name="gender"
                      value={newAdmin.gender ? 1 : 0}
                      onChange={this.handleInputChange}
                    >
                      <option value={1}>Nam</option>
                      <option value={0}>Nữ</option>
                    </select>
                  </label>
                </div>
                <div className="col-6">
                  <label>
                    Vai trò:
                    <select
                      name="role"
                      value={newAdmin.role}
                      onChange={this.handleInputChange}
                    >
                      <option value="admin">Quản trị viên</option>
                      <option value="manager">Quản lý</option>
                      <option value="staff">Nhân viên</option>
                    </select>
                  </label>
                </div>
              </div>
              <div className="row">
                <label>
                  Ảnh đại diện:
                  <input
                    type="file"
                    name="pathAvatar"
                    accept="image/*"
                    onChange={this.handleFileChange}
                  />
                </label>
              </div>
              <div className="row">
                <label>
                  Trạng thái:
                  <select
                    name="status"
                    value={newAdmin.status}
                    onChange={this.handleInputChange}
                  >
                    <option value={1}>Hoạt động</option>
                    <option value={0}>Ẩn</option>
                  </select>
                </label>
              </div>
              <div className="row">
                <div className="col-6"></div>
                <div className="col-6"></div>
              </div>

              <div className="admin-modal-actions">
                <button onClick={this.addAdmin} className="btn-save">
                  Lưu
                </button>
                <button onClick={this.closeModal} className="btn-cancel">
                  Hủy
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
