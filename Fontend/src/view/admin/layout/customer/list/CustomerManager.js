import React, { Component } from "react";
import { urlapi } from "../../../../../setting/store/const";
import DataTable from "react-data-table-component";
import "./CustomerManager.css";
import ChooseAddress from "../../../../service_sector/sector_shop/customer/view/shoping_cart/ChooseAddress";
class CustomerManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: [],
      ListCustomers: [],
      searchQuery: "",
      showModal: false,
      editModal: false,
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
        totalValue: 0,
        showContextMenu: false,
        contextMenuX: 0,
        contextMenuY: 0,
        selectedRow: null,
      },
      path_image_new: null,
      path_image_old: null,
    };
  }
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
        createdAt: "",
        totalOrders: 0,
        cancelledOrders: 0,
        totalValue: 0,
      },
      path_image_new: null,
      path_image_old: null,
    });
  };
  openEditModal = () => {
    if (this.state.currentCustomer && this.state.currentCustomer.id != null) {
      this.setState({
        editModal: true,
        isEditing: true,
        path_image_old: this.state.currentCustomer.pathAvatar,
        path_image_new: null,
      });
    } else alert("bạn chưa chọn dòng dữ liệu muốn sửa !");
  };
  openShowModal = () => {
    if (this.state.currentCustomer && this.state.currentCustomer.id != null) {
      this.setState({
        showModal: true,
      });
    }
  }
  componentDidMount() {
    fetch(urlapi + "/api/Users/ShowAllClient")
      .then((response) => response.json())
      .then((data) => {
        if (data.status && data.status === "200") {
          const Clients = data.data.map((Client) => ({
            id: Client?.idUser || "",
            name: Client?.fullName || "",
            email: Client?.email || "",
            phone: Client?.phoneNumber || "",
            address: Client?.address || "",
            gender: Client?.gender ? "nam" : "nữ" || "",
            dob: Client?.birthDay || "",
            username: Client?.username || "",
            totalOrders: Client.totalOrders,
            cancelledOrders: Client.cancelledOrders,
            totalValue: Client.totalValue,
          }));
          this.setState({ customers: Clients, ListCustomers: Clients });
        }
        console.log(data);
      })
      .catch((error) => console.error(error));
    document.addEventListener("click", this.closeContextMenu);
  }
  componentWillUnmount() {
    document.removeEventListener("click", this.closeContextMenu);
  }
  closeContextMenu = () => {
    this.setState({
      showContextMenu: false,
    });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      currentCustomer: {
        ...prevState.currentCustomer,
        [name]: value,
      },
    }));
  };

  handleSearchChange = (e) => {
    this.setState({ searchQuery: e.target.value });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    const { customers, currentCustomer, isEditing } = this.state;
    if (isEditing) {
      this.setState({
        customers: customers.map((cust) =>
          cust.id === currentCustomer.id ? currentCustomer : cust
        ),
        editModal: false,
      });
    } else {
      const newCustomer = {
        ...currentCustomer,
        id: customers.length > 0 ? customers[customers.length - 1].id + 1 : 1,
      };
      this.setState({
        customers: [...customers, newCustomer],
        editModal: false,
      });
    }
  };
  addClient = () => {
    const { currentCustomer } = this.state;
    const req = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        idUser: null,
        username: null,
        password: null,
        status: true,
        role: "customer",
        fullName: currentCustomer.name,
        address: currentCustomer.address,
        birthDay: currentCustomer.dob,
        gender: currentCustomer.gender === "nam",
        email: currentCustomer.email,
        phoneNumber: currentCustomer.phone,
        pathAvatar: null,
      }),
    };
    fetch(urlapi + "/api/Users/insertUser", req)
      .then((response) => response.json())
      .then((data) => {
        if (data.status && data.status === "200") {
          this.componentDidMount();
          alert("Thêm thông tin khách hàng thành công !");
        } else alert("Thêm thông tin khách hàng thất bại !");
        console.log("Response từ server:", data);
      })
      .catch((error) => console.error("Lỗi POST:", error));
  };
  editClient = () => {
    const { currentCustomer,path_image_new,path_image_old } = this.state;

    const usersData = {
      idUser: currentCustomer.id,
      username: null,
      password: null,
      status: true,
      role: "customer",
      fullName: currentCustomer.name,
      address: currentCustomer.address,
      birthDay: currentCustomer.dob,
      gender: currentCustomer.gender === "nam",
      email: currentCustomer.email,
      phoneNumber: currentCustomer.phone,
      pathAvatar: null,
    };

    // deleimages: HashMap<String, String> — ví dụ { "1": "url_anh_1.jpg", "2": "url_anh_2.jpg" }
    const deleImages = path_image_old || {};
    // addimages: các File mới người dùng vừa chọn (mảng File object)
    const addImages = path_image_new || [];

    const formData = new FormData();

    // Gửi Users dưới dạng 1 part JSON
    formData.append(
      "Users",
      new Blob([JSON.stringify(usersData)], { type: "application/json" })
    );

    // deleimages: Spring bind @RequestParam Map<String,String> bằng cách gom
    // TẤT CẢ các request param dạng key-value còn lại (không phải file, không phải "Users")
    // -> nên append trực tiếp key/value, KHÔNG lồng "deleimages[key]"
    Object.entries(deleImages).forEach(([key, value]) => {
      formData.append(key, value);
    });

    // addimages: mỗi file append cùng tên "addimages"
    addImages.forEach((file) => {
      formData.append("addimages", file);
    });

    fetch(urlapi + "/api/Users/UpdateUsers", {
      method: "POST",
      body: formData,
      // KHÔNG set Content-Type thủ công — browser sẽ tự thêm boundary cho multipart/form-data
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status && data.status === "200") {
          this.componentDidMount();
          alert("Chỉnh sửa thông tin khách hàng thành công !");
        } else {
          alert("Chỉnh sửa thông tin khách hàng thất bại !");
        }
        console.log("Response từ server:", data);
      })
      .catch((error) => console.error("Lỗi POST:", error));
  };
  closeModal = () => {
    this.setState({ editModal: false, isEditing: false, showModal: false });
  };
  handleAvatarChange = () => {
    document.getElementById('imageInput').click();
  };

  handleFileSelected = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.setState((prevState) => ({
          currentCustomer: {
            ...prevState.currentCustomer,
            pathAvatar: e.target.result, // cập nhật để <img> avatar tự re-render
          },
          path_image_new: e.target.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };
  render() {
    const { customers, searchQuery, editModal, currentCustomer, isEditing, showModal } =
      this.state;
    const conditionalRowStyles = [
      {
        when: (row) => row.id === this.state.currentCustomer.id,
        style: {
          backgroundColor: "#d1e7dd", // màu nền của dòng được chọn (xanh nhạt)
          color: "#000", // màu chữ
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
      { name: "idUser", selector: (row) => row.id, width: "180px" },
      {
        name: "Họ tên",
        selector: (row) => row.name,
        sortable: true,
        wrap: true,
        width: "150px",
      },
      { name: "SĐT", selector: (row) => row.phone, wrap: true, width: "150px" },
      { name: "Giới tính", selector: (row) => row.gender, width: "100px" },
      { name: "Ngày sinh", selector: (row) => row.dob, width: "100px" },
      {
        name: "Địa chỉ",
        selector: (row) => row.address,
        wrap: true,
        width: "100%px",
      },
    ];
    return (
      <div className="customer-manager">
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css"
        />

        <h2>Quản lý Khách hàng</h2>
        <div style={{ display: "flex", justifyContent: "flex-end", gap: "50px", marginBottom: "10px" }}>
          <button onClick={this.openAddModal} className="add-btn">
            Thêm khách hàng
          </button>
        </div>
        <div className="toolbar">
          <input
            type="text"
            placeholder="Tìm kiếm khách hàng..."
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
          onRowClicked={(row) => {
            this.setState(
              {
                currentCustomer: row,
              },
              () => {
                console.log("row :", row);
              }
            );
          }}
          onRowDoubleClicked={(row, event) => {
            this.setState({
              selectedRow: row,
              showContextMenu: true,
              contextMenuX: event.clientX,
              contextMenuY: event.clientY,
            });
          }}
        />
        {
          this.state.showContextMenu && (
            <div
              className="context-menu"
              style={{
                left: this.state.contextMenuX,
                top: this.state.contextMenuY,
              }}
            >
              <div onClick={this.openEditModal}>
                ✏ Sửa thông tin
              </div>

              <div onClick={() => alert("Xóa khách hàng")}>
                🗑 Xóa liên hệ
              </div>

              <div onClick={() => this.openShowModal()}>
                👁 Xem thông tin chi tiết
              </div>
            </div>
          )
        }
        {editModal && (
          <div className="modal-overlay">
            <div className="modal-overlay-min">
              <div className="img-container">
                <img
                  src={currentCustomer?.pathAvatar || "https://i.pinimg.com/736x/8f/1c/a2/8f1ca2029e2efceebd22fa05cca423d7.jpg"}
                  alt="Avatar"
                />
                <input type="button" value={isEditing ? "Đổi ảnh đại diện" : "Chọn ảnh đại diện"} id="btnChonAnh" onClick={this.handleAvatarChange} />
                <input type="file" id="imageInput" accept="image/*" style={{ display: "none" }} onChange={this.handleFileSelected} />
              </div>
              <div
                className="modal modal-dialog modal-dialog-centered"
                style={{
                  width: "80%",
                  maxWidth: "800px",
                }}
              >
                <h3>{isEditing ? "Chỉnh sửa thông tin khách hàng" : "Thêm thông tin khách hàng"}</h3>
                <form onSubmit={this.handleFormSubmit} className="form">
                  <label>
                    Họ tên:
                    <input
                      type="text"
                      defaultValue={currentCustomer?.name || ""}
                      onChange={(e) => {
                        this.setState((prevState) => ({
                          currentCustomer: {
                            ...prevState.currentCustomer,
                            name: e.target.value,
                          },
                        }));
                      }}
                    />
                  </label>
                  <label>
                    Email:
                    <input
                      type="text"
                      defaultValue={currentCustomer?.email || ""}
                      onChange={(e) => {
                        this.setState((prevState) => ({
                          currentCustomer: {
                            ...prevState.currentCustomer,
                            email: e.target.value,
                          },
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
                        style={{
                          height: "38px",
                          width: "125px",
                        }}
                        onClick={() => {
                          this.setState((prevState) => ({
                            currentCustomer: {
                              ...prevState.currentCustomer,
                              address:
                                this.props.state_data.data_page.data
                                  ?.detailaddress +
                                ", " +
                                this.props.state_data.data_page.data?.district +
                                ", " +
                                this.props.state_data.data_page.data?.province,
                            },
                          }));
                        }}
                      />
                    </div>
                    <input
                      type="text"
                      disabled
                      value={currentCustomer?.address || ""}
                      onChange={(e) => {
                        this.setState((prevState) => ({
                          currentCustomer: {
                            ...prevState.currentCustomer,
                            address: e.target.value,
                          },
                        }));
                      }}
                    />
                  </label>
                  <div className="row">
                    <label>
                      Số điện thoại:
                      <input
                        type="text"
                        defaultValue={currentCustomer?.phone || ""}
                        onChange={(e) => {
                          this.setState((prevState) => ({
                            currentCustomer: {
                              ...prevState.currentCustomer,
                              phone: e.target.value,
                            },
                          }));
                        }}
                      />
                    </label>
                    <label>
                      Giới tính:
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: "70px",
                        }}
                      >
                        <label
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "5px",
                          }}
                        >
                          <input
                            type="radio"
                            name="gender"
                            value="nam"
                            checked={this.state.currentCustomer?.gender === "nam"}
                            onChange={(e) => {
                              this.setState((prevState) => ({
                                currentCustomer: {
                                  ...prevState.currentCustomer,
                                  gender: e.target.value,
                                },
                              }));
                            }}
                          />
                          Nam
                        </label>

                        <label
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "5px",
                          }}
                        >
                          <input
                            type="radio"
                            name="gender"
                            value="nữ"
                            checked={this.state.currentCustomer?.gender === "nữ"}
                            onChange={(e) => {
                              this.setState((prevState) => ({
                                currentCustomer: {
                                  ...prevState.currentCustomer,
                                  gender: e.target.value,
                                },
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
                        defaultValue={currentCustomer?.dob || ""}
                        onChange={(e) => {
                          this.setState((prevState) => ({
                            currentCustomer: {
                              ...prevState.currentCustomer,
                              dob: e.target.value,
                            },
                          }));
                        }}
                      />
                    </label>
                  </div>
                  <div className="modal-actions">
                    <button
                      type="submit"
                      className="save-btn"
                      onClick={
                        this.state.isEditing ? this.editClient : this.addClient
                      }
                    >
                      Lưu
                    </button>
                    <button
                      type="button"
                      onClick={this.closeModal}
                      className="cancel-btn"
                    >
                      Hủy
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
        {showModal && (
          <div className="modal-overlay">
            <div className="modal-overlay-min">
              <div className="img-container">
                <img
                  src={currentCustomer?.pathAvatar || "https://i.pinimg.com/736x/8f/1c/a2/8f1ca2029e2efceebd22fa05cca423d7.jpg"}
                  alt="Avatar"
                />
              </div>
              <div
                className="modal modal-dialog modal-dialog-centered"
                style={{
                  width: "80%",
                  maxWidth: "800px",
                }}
              >
                <h3>Thông tin khách hàng</h3>
                <form onSubmit={this.handleFormSubmit} className="form">
                  <div className="group-info">
                    <label>
                      Họ tên:
                    </label>
                    <input
                      type="text"
                      defaultValue={currentCustomer?.name || "hiển thị tên lỗi"}
                      disabled
                    />
                  </div>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div className="group-info">
                      <label>
                        giới tính:
                      </label>
                      <input
                        type="text"
                        style={{ width: "70%" }}
                        defaultValue={currentCustomer?.gender || "hiển thị tên lỗi"}
                        disabled
                      />
                    </div>
                    <div className="group-info">
                      <label>
                        Ngày sinh:
                      </label>
                      <input
                        type="text"
                        defaultValue={currentCustomer?.dob || "hiển thị tên lỗi"}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="group-info">
                    <label>
                      Email:
                    </label>
                    <input
                      type="text"
                      defaultValue={currentCustomer?.email || ""}
                      disabled
                    />
                  </div>
                  <div className="group-info">
                    <label>
                      Địa chỉ:
                    </label>
                    <textarea
                      defaultValue={currentCustomer?.address || ""}
                      disabled
                      style={{ width: "100%", height: "80px", borderRadius: "5px", padding: "5px", marginTop: "5px", }}
                    />
                  </div>
                  <div className="group-info">
                    <label>
                      Số điện thoại:
                    </label>
                    <input
                      type="text"
                      defaultValue={currentCustomer?.phone || ""}
                      disabled
                    />
                  </div>
                  <div className="group-info">
                    <label>
                      tổng đơn hàng :
                    </label>
                    <input
                      type="text"
                      defaultValue={currentCustomer?.totalOrders || ""}
                      disabled
                    />
                  </div>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div className="group-info">
                      <label>
                        đã hủy :
                      </label>
                      <input
                        type="text"
                        defaultValue={currentCustomer?.totalCancelledOrders || ""}
                        disabled
                        style={{ width: "43%" }}
                      />
                    </div>
                    <div className="group-info">
                      <label>
                        đang giao :
                      </label>
                      <input
                        type="text"
                        defaultValue={currentCustomer?.totalShippedOrders || ""}
                        disabled
                        style={{ width: "50%" }}
                      />
                    </div>
                    <div className="group-info">
                      <label>
                        đã giao :
                      </label>
                      <input
                        type="text"
                        defaultValue={currentCustomer?.totalDeliveredOrders || ""}
                        disabled
                        style={{ width: "50%" }}
                      />
                    </div>
                  </div>
                  <div className="group-info">
                    <label>
                      tổng giá trị đơn :
                    </label>
                    <input
                      type="text"
                      defaultValue={currentCustomer?.totalOrderValue || ""}
                      disabled
                    />
                  </div>
                  <div className="modal-actions">
                    <button
                      type="button"
                      onClick={this.closeModal}
                      className="cancel-btn"
                    >
                      đóng
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default CustomerManager;
