import React, { Component } from "react";
import { urlapi } from "../../../../setting/store/const";
import DataTable from "react-data-table-component";
import "../customer/list/CustomerManager.css";
import ChooseAddress from "../../../service_sector/sector_shop/customer/view/shoping_cart/ChooseAddress";

class AdminManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: [],
      searchQuery: "",
      showModal: false,
      editModal: false,
      roleModal: false,
      isEditing: false,
      showContextMenu: false,
      contextMenuX: 0,
      contextMenuY: 0,
      currentCustomer: {
        id: null,
        name: "",
        email: "",
        phone: "",
        address: "",
        gender: "nam",
        dob: "",
        username: "",
        totalOrders: 0,
        cancelledOrders: 0,
        deliveringOrders: 0,
        deliveredOrders: 0,
        totalValue: 0,
        pathAvatar: "",
        role: "staff",
        idShop: "",
      },
      listShops: [],
      selectedRole: "staff",
      selectedShop: "", // role=staff: string; role=manager: array
      image_avatar_new: null,
      path_image_old: null,
    };
  }

  componentDidMount() {
    this.fetchCustomers();
    this.fetchShops();
    document.addEventListener("click", this.closeContextMenu);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.closeContextMenu);
  }

  fetchCustomers = () => {
    fetch(urlapi + "/api/Users/getAllAdminsAndStaff")
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "200" && data.data) {
          const Clients = data.data.map((Client) => ({
            id: Client?.idUser || "",
            name: Client?.fullName || "",
            email: Client?.email || "",
            phone: Client?.phoneNumber || "",
            address: Client?.address || "",
            gender: Client?.gender ? "nam" : "nữ",
            dob: Client?.birthDay || "",
            username: Client?.username || "",
            pathAvatar: Client?.pathAvatar || "",
            role: Client?.role || "staff",
            idShop: Client?.idShop || "",
          }));
          this.setState({ customers: Clients });
        }
      })
      .catch((error) => console.error(error));
  };

  fetchShops = () => {
    fetch(urlapi + "/api/Shop/getAll")
      .then((res) => res.json())
      .then((data) => {
        if (data.data) {
          this.setState({ listShops: data.data });
        }
      })
      .catch((err) => console.error("Lỗi fetch Shop:", err));
  };

  openAddModal = () => {
    this.setState({
      editModal: true,
      isEditing: false,
      currentCustomer: {
        id: null,
        name: "",
        email: "",
        phone: "",
        address: "",
        gender: "nam",
        dob: "",
        username: "",
        totalOrders: 0,
        cancelledOrders: 0,
        deliveringOrders: 0,
        deliveredOrders: 0,
        totalValue: 0,
        pathAvatar: "",
        role: "staff",
        idShop: "",
      },
      image_avatar_new: null,
      path_image_old: null,
    });
  };

  openEditModal = () => {
    if (this.state.currentCustomer && this.state.currentCustomer.id != null) {
      this.setState({
        editModal: true,
        isEditing: true,
        path_image_old: this.state.currentCustomer.pathAvatar,
        image_avatar_new: null,
      });
    } else alert("Bạn chưa chọn dòng dữ liệu muốn sửa!");
  };

  openShowModal = () => {
    if (this.state.currentCustomer && this.state.currentCustomer.id != null) {
      this.setState({ showModal: true });
    }
  };

  openRoleModal = () => {
    if (this.state.currentCustomer && this.state.currentCustomer.id != null) {
      const currentRole = this.state.currentCustomer.role || "staff";
      const currentShopRaw = this.state.currentCustomer.idShop || "";

      let initialShop;
      if (currentRole === "manager") {
        if (Array.isArray(currentShopRaw)) {
          initialShop = currentShopRaw;
        } else if (typeof currentShopRaw === "string" && currentShopRaw.trim() !== "") {
          initialShop = currentShopRaw.split(",").map((s) => s.trim());
        } else {
          initialShop = [];
        }
      } else {
        initialShop = typeof currentShopRaw === "string" ? currentShopRaw : "";
      }

      this.setState({
        roleModal: true,
        selectedRole: currentRole,
        selectedShop: initialShop,
      });
    } else alert("Bạn chưa chọn dòng dữ liệu!");
  };

  closeContextMenu = () => {
    this.setState({ showContextMenu: false });
  };

  closeModal = () => {
    this.setState({
      editModal: false,
      isEditing: false,
      showModal: false,
      roleModal: false,
    });
  };

  handleSearchChange = (e) => {
    this.setState({ searchQuery: e.target.value });
  };

  handleAvatarChange = () => {
    document.getElementById("imageInput").click();
  };

  handleFileSelected = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.setState((prevState) => ({
          currentCustomer: {
            ...prevState.currentCustomer,
            pathAvatar: e.target.result,
          },
          image_avatar_new: [file],
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Đổi role -> Cập nhật cấu trúc lưu selectedShop
  handleRoleSelectChange = (e) => {
    const newRole = e.target.value;
    this.setState({
      selectedRole: newRole,
      selectedShop: newRole === "manager" ? [] : "",
    });
  };

  // Xử lý Checkbox chọn nhiều shop đối với Manager
  handleShopCheckboxChange = (shopId) => {
    this.setState((prevState) => {
      let currentList = Array.isArray(prevState.selectedShop)
        ? [...prevState.selectedShop]
        : [];

      if (currentList.includes(shopId)) {
        currentList = currentList.filter((id) => id !== shopId);
      } else {
        currentList.push(shopId);
      }
      return { selectedShop: currentList };
    });
  };

  // Xử lý Lưu Role & Shop phụ trách
  handleSaveRoleAndShop = (e) => {
    e.preventDefault();
    const { currentCustomer, selectedRole, selectedShop } = this.state;

    let finalShopData = "";
    if (selectedRole === "manager") {
      finalShopData = Array.isArray(selectedShop) ? selectedShop.join(",") : selectedShop;
    } else if (selectedRole === "staff") {
      finalShopData = typeof selectedShop === "string" ? selectedShop : "";
    } else {
      finalShopData = ""; // customer và admin không cần idShop
    }

    const payload = {
      idUser: currentCustomer.id,
      role: selectedRole,
      idShop: finalShopData,
    };

    fetch(urlapi + "/api/Users/updateRoleAndShop", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "200" || data.status === 200) {
          alert("Cập nhật quyền và Shop phụ trách thành công!");
          this.fetchCustomers();
          this.closeModal();
        } else {
          alert("Cập nhật thất bại!");
        }
      })
      .catch((err) => console.error("Lỗi cập nhật Role/Shop:", err));
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    if (this.state.isEditing) {
      this.editClient();
    } else {
      this.addClient();
    }
  };

  addClient = () => {
    const { currentCustomer, image_avatar_new } = this.state;

    const usersData = {
      idUser: null,
      username: null,
      password: null,
      status: true,
      role: currentCustomer.role || "staff",
      fullName: currentCustomer.name,
      address: currentCustomer.address,
      birthDay: currentCustomer.dob,
      gender: currentCustomer.gender === "nam",
      email: currentCustomer.email,
      phoneNumber: currentCustomer.phone,
      pathAvatar: null,
    };

    const formData = new FormData();
    formData.append(
      "Users",
      new Blob([JSON.stringify(usersData)], { type: "application/json" })
    );

    if (image_avatar_new) {
      image_avatar_new.forEach((file) => formData.append("addimages", file));
    }

    fetch(urlapi + "/api/Users/insert", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "200") {
          this.fetchCustomers();
          this.closeModal();
          alert("Thêm thông tin thành công!");
        } else {
          alert("Thêm thông tin thất bại!");
        }
      })
      .catch((error) => console.error("Lỗi POST:", error));
  };

  editClient = () => {
    const { currentCustomer, image_avatar_new, path_image_old } = this.state;

    const usersData = {
      idUser: currentCustomer.id,
      username: null,
      password: null,
      status: true,
      role: currentCustomer.role || "staff",
      fullName: currentCustomer.name,
      address: currentCustomer.address,
      birthDay: currentCustomer.dob,
      gender: currentCustomer.gender === "nam",
      email: currentCustomer.email,
      phoneNumber: currentCustomer.phone,
      pathAvatar: null,
    };

    const formData = new FormData();
    formData.append(
      "Users",
      new Blob([JSON.stringify(usersData)], { type: "application/json" })
    );

    if (path_image_old) {
      formData.append("oldImage", path_image_old);
    }

    if (image_avatar_new) {
      image_avatar_new.forEach((file) => formData.append("addimages", file));
    }

    fetch(urlapi + "/api/Users/Update", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "200") {
          this.fetchCustomers();
          this.closeModal();
          alert("Chỉnh sửa thông tin thành công!");
        } else {
          alert("Chỉnh sửa thông tin thất bại!");
        }
      })
      .catch((error) => console.error("Lỗi POST:", error));
  };

  render() {
    const {
      customers,
      searchQuery,
      editModal,
      currentCustomer,
      isEditing,
      showModal,
      roleModal,
      selectedRole,
      selectedShop,
      listShops,
    } = this.state;

    const conditionalRowStyles = [
      {
        when: (row) => row.id === currentCustomer.id,
        style: {
          backgroundColor: "#d1e7dd",
          color: "#000",
        },
      },
    ];

    const filteredCustomers = customers.filter(
      (cust) =>
        cust.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cust.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cust.phone.includes(searchQuery)
    );

    const columns = [
      { name: "idUser", selector: (row) => row.id, width: "120px" },
      { name: "Họ tên", selector: (row) => row.name, sortable: true, wrap: true, width: "150px" },
      { name: "SĐT", selector: (row) => row.phone, wrap: true, width: "130px" },
      { name: "Chức vụ", selector: (row) => row.role, width: "110px" },
      { name: "Giới tính", selector: (row) => row.gender, width: "100px" },
      { name: "Ngày sinh", selector: (row) => row.dob, width: "110px" },
      { name: "Địa chỉ", selector: (row) => row.address, wrap: true, width: "200px" },
    ];

    const avatarSrc = currentCustomer?.pathAvatar
      ? currentCustomer.pathAvatar.startsWith("data:") || currentCustomer.pathAvatar.startsWith("http")
        ? currentCustomer.pathAvatar
        : `${urlapi}/api/Image/${currentCustomer.pathAvatar}`
      : "https://i.pinimg.com/736x/8f/1c/a2/8f1ca2029e2efceebd22fa05cca423d7.jpg";

    const defaultShops = [
      { idShop: "SHOP_01", shopName: "Shop Đà Nẵng 01" },
      { idShop: "SHOP_02", shopName: "Shop Đà Nẵng 02" },
      { idShop: "SHOP_03", shopName: "Shop Đà Nẵng 03" },
    ];
    const displayShops = listShops.length > 0 ? listShops : defaultShops;

    return (
      <div className="customer-manager">
        <h2>Quản lý Nhân sự & Khách hàng</h2>

        <div style={{ display: "flex", justifyContent: "flex-end", gap: "50px", marginBottom: "10px" }}>
          <button onClick={this.openAddModal} className="add-btn">
            Thêm tài khoản
          </button>
        </div>

        <div className="toolbar">
          <input
            type="text"
            placeholder="Tìm kiếm..."
            value={searchQuery}
            onChange={this.handleSearchChange}
            className="search-input"
          />
        </div>

        <DataTable
          columns={columns}
          data={filteredCustomers}
          pagination
          highlightOnHover
          fixedHeader
          responsive
          striped
          dense
          conditionalRowStyles={conditionalRowStyles}
          onRowClicked={(row) => this.setState({ currentCustomer: row })}
          onRowDoubleClicked={(row, event) => {
            this.setState({
              currentCustomer: row,
              showContextMenu: true,
              contextMenuX: event.clientX,
              contextMenuY: event.clientY,
            });
          }}
        />

        {/* Context Menu */}
        {this.state.showContextMenu && (
          <div
            className="context-menu"
            style={{
              left: this.state.contextMenuX,
              top: this.state.contextMenuY,
            }}
          >
            <div onClick={this.openEditModal}>✏ Sửa thông tin</div>
            <div onClick={this.openRoleModal}>🔑 Đổi quyền & Shop phụ trách</div>
            <div onClick={() => alert("Xóa người dùng")}>🗑 Xóa liên hệ</div>
            <div onClick={this.openShowModal}>👁 Xem thông tin chi tiết</div>
          </div>
        )}

        {/* Modal Thêm / Sửa Thông Tin */}
        {editModal && (
          <div className="modal-overlay">
            <div className="modal-overlay-min">
              <div className="img-container">
                <img src={avatarSrc} alt="Avatar" />
                <input
                  type="button"
                  value={isEditing ? "Đổi ảnh đại diện" : "Chọn ảnh đại diện"}
                  id="btnChonAnh"
                  onClick={this.handleAvatarChange}
                />
                <input
                  type="file"
                  id="imageInput"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={this.handleFileSelected}
                />
              </div>

              <div className="modal modal-dialog modal-dialog-centered" style={{ width: "80%", maxWidth: "800px" }}>
                <h3>{isEditing ? "Chỉnh sửa thông tin" : "Thêm thông tin"}</h3>
                <form onSubmit={this.handleFormSubmit} className="form">
                  <label>
                    Họ tên:
                    <input
                      type="text"
                      value={currentCustomer?.name || ""}
                      onChange={(e) => {
                        const val = e.target.value;
                        this.setState((prev) => ({
                          currentCustomer: { ...prev.currentCustomer, name: val },
                        }));
                      }}
                    />
                  </label>

                  <label>
                    Email:
                    <input
                      type="text"
                      value={currentCustomer?.email || ""}
                      onChange={(e) => {
                        const val = e.target.value;
                        this.setState((prev) => ({
                          currentCustomer: { ...prev.currentCustomer, email: val },
                        }));
                      }}
                    />
                  </label>

                  <label>
                    Địa chỉ:
                    <ChooseAddress {...this.props} />
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <input
                        type="button"
                        value="Xác nhận địa chỉ"
                        style={{ height: "38px", width: "125px" }}
                        onClick={() => {
                          const addressData = this.props.state_data?.data_page?.data;
                          if (addressData) {
                            const fullAddr = `${addressData.detailaddress || ""}, ${addressData.district || ""}, ${addressData.province || ""}`;
                            this.setState((prev) => ({
                              currentCustomer: { ...prev.currentCustomer, address: fullAddr },
                            }));
                          }
                        }}
                      />
                    </div>
                    <input type="text" disabled value={currentCustomer?.address || ""} />
                  </label>

                  <div className="row">
                    <label>
                      Số điện thoại:
                      <input
                        type="text"
                        value={currentCustomer?.phone || ""}
                        onChange={(e) => {
                          const val = e.target.value;
                          this.setState((prev) => ({
                            currentCustomer: { ...prev.currentCustomer, phone: val },
                          }));
                        }}
                      />
                    </label>

                    <label>
                      Giới tính:
                      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "70px" }}>
                        <label style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                          <input
                            type="radio"
                            name="gender"
                            value="nam"
                            checked={currentCustomer?.gender === "nam"}
                            onChange={(e) => {
                              const val = e.target.value;
                              this.setState((prev) => ({
                                currentCustomer: { ...prev.currentCustomer, gender: val },
                              }));
                            }}
                          />
                          Nam
                        </label>
                        <label style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                          <input
                            type="radio"
                            name="gender"
                            value="nữ"
                            checked={currentCustomer?.gender === "nữ"}
                            onChange={(e) => {
                              const val = e.target.value;
                              this.setState((prev) => ({
                                currentCustomer: { ...prev.currentCustomer, gender: val },
                              }));
                            }}
                          />
                          Nữ
                        </label>
                      </div>
                    </label>

                    <label>
                      Ngày sinh:
                      <input
                        type="date"
                        value={currentCustomer?.dob || ""}
                        onChange={(e) => {
                          const val = e.target.value;
                          this.setState((prev) => ({
                            currentCustomer: { ...prev.currentCustomer, dob: val },
                          }));
                        }}
                      />
                    </label>
                  </div>

                  <div className="modal-actions">
                    <button type="submit" className="save-btn">
                      Lưu
                    </button>
                    <button type="button" onClick={this.closeModal} className="cancel-btn">
                      Hủy
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* Modal Thay Đổi Quyền & Shop Phụ Trách */}
        {roleModal && (
          <div className="modal-overlay">
            <div className="modal-overlay-min">
              <div className="img-container">
                <img src={avatarSrc} alt="Avatar" />
              </div>
              <div className="modal modal-dialog modal-dialog-centered" style={{ width: "80%", maxWidth: "1000px"}}>
                <h3>Thay đổi quyền & Shop phụ trách</h3>
                <form onSubmit={this.handleSaveRoleAndShop} className="form">
                  <div className="group-info">
                    <label>Họ tên người dùng:</label>
                    <input type="text" value={currentCustomer?.name || ""} disabled />
                  </div>

                  <div className="group-info" style={{ marginTop: "15px" }}>
                    <label>Phân quyền (Role):</label>
                    <select
                      value={selectedRole}
                      onChange={this.handleRoleSelectChange}
                      style={{ width: "100%", height: "38px", borderRadius: "5px", padding: "5px" }}
                    >
                      <option value="manager">Quản lý (Manager)</option>
                      <option value="staff">Nhân viên (Staff)</option>
                      <option value="customer">Khách hàng (Customer)</option>
                      <option value="admin">Quản trị viên (Admin)</option>
                    </select>
                  </div>

                  {/* 1. Nếu là STAFF: Cho chọn 1 Shop (Dropdown) */}
                  {selectedRole === "staff" && (
                    <div className="group-info" style={{ marginTop: "15px" }}>
                      <label>Shop phụ trách (Chỉ chọn 1):</label>
                      <select
                        value={typeof selectedShop === "string" ? selectedShop : ""}
                        onChange={(e) => this.setState({ selectedShop: e.target.value })}
                        style={{ width: "100%", height: "38px", borderRadius: "5px", padding: "5px" }}
                      >
                        <option value="">-- Chưa gán Shop --</option>
                        {displayShops.map((shop) => (
                          <option key={shop.idShop || shop.id} value={shop.idShop || shop.id}>
                            {shop.shopName || shop.name || shop.idShop}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  {/* 2. Nếu là MANAGER: Cho chọn nhiều Shop (Checkbox List) */}
                  {selectedRole === "manager" && (
                    <div className="group-info" style={{ marginTop: "15px" }}>
                      <label>Danh sách Shop phụ trách (Được chọn nhiều):</label>
                      <div
                        style={{
                          maxHeight: "160px",
                          overflowY: "auto",
                          border: "1px solid #ccc",
                          borderRadius: "5px",
                          padding: "10px",
                          marginTop: "5px",
                          backgroundColor: "#f9f9f9",
                        }}
                      >
                        {displayShops.map((shop) => {
                          const sId = shop.idShop || shop.id;
                          const isChecked = Array.isArray(selectedShop) && selectedShop.includes(sId);
                          return (
                            <label
                              key={sId}
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                                marginBottom: "8px",
                                cursor: "pointer",
                              }}
                            >
                              <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={() => this.handleShopCheckboxChange(sId)}
                              />
                              {shop.shopName || shop.name || sId}
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* 3. Nếu là CUSTOMER hoặc ADMIN: ĐÃ ẨN VÙNG CHỌN CỬA HÀNG */}

                  <div className="modal-actions" style={{ marginTop: "20px" }}>
                    <button type="submit" className="save-btn">
                      Lưu thay đổi
                    </button>
                    <button type="button" onClick={this.closeModal} className="cancel-btn">
                      Hủy
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* Modal Xem Chi Tiết */}
        {showModal && (
          <div className="modal-overlay">
            <div className="modal-overlay-min">
              <div className="img-container">
                <img src={avatarSrc} alt="Avatar" />
              </div>
              <div className="modal modal-dialog modal-dialog-centered" style={{ width: "80%", maxWidth: "800px" }}>
                <h3>Thông tin chi tiết</h3>
                <div className="form">
                  <div className="group-info">
                    <label>Họ tên:</label>
                    <input type="text" value={currentCustomer?.name || ""} disabled />
                  </div>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div className="group-info">
                      <label>Giới tính:</label>
                      <input type="text" style={{ width: "70%" }} value={currentCustomer?.gender || ""} disabled />
                    </div>
                    <div className="group-info">
                      <label>Ngày sinh:</label>
                      <input type="text" value={currentCustomer?.dob || ""} disabled />
                    </div>
                  </div>
                  <div className="group-info">
                    <label>Email:</label>
                    <input type="text" value={currentCustomer?.email || ""} disabled />
                  </div>
                  <div className="group-info">
                    <label>Chức vụ (Role):</label>
                    <input type="text" value={currentCustomer?.role || ""} disabled />
                  </div>
                  <div className="group-info">
                    <label>Địa chỉ:</label>
                    <textarea
                      value={currentCustomer?.address || ""}
                      disabled
                      style={{ width: "100%", height: "80px", borderRadius: "5px", padding: "5px", marginTop: "5px" }}
                    />
                  </div>
                  <div className="group-info">
                    <label>Số điện thoại:</label>
                    <input type="text" value={currentCustomer?.phone || ""} disabled />
                  </div>
                  <div className="modal-actions">
                    <button type="button" onClick={this.closeModal} className="cancel-btn">
                      Đóng
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default AdminManager;