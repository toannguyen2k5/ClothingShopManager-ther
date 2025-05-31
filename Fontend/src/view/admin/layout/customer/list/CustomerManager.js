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
      },
    };
  }
  openAddModal = () => {
    this.setState({
      showModal: true,
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
    });
  };
  openEditModal = () => {
    if (this.state.currentCustomer && this.state.currentCustomer.id != null) {
      this.setState({
        showModal: true,
        isEditing: true,
      });
    } else alert("bạn chưa chọn dòng dữ liệu muốn sửa !");
  };
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
  }

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
        showModal: false,
      });
    } else {
      const newCustomer = {
        ...currentCustomer,
        id: customers.length > 0 ? customers[customers.length - 1].id + 1 : 1,
      };
      this.setState({
        customers: [...customers, newCustomer],
        showModal: false,
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
    const { currentCustomer } = this.state;
    const req = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
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
      }),
    };
    fetch(urlapi + "/api/Users/UpdateUser", req)
      .then((response) => response.json())
      .then((data) => {
        if (data.status && data.status === "200") {
          this.componentDidMount();
          alert("Chỉnh sửa thông tin khách hàng thành công !");
        } else alert("Chỉnh sửa thông tin khách hàng thất bại !");
        console.log("Response từ server:", data);
      })
      .catch((error) => console.error("Lỗi POST:", error));
    console.log("data update :", req);
  };
  closeModal = () => {
    this.setState({ showModal: false, isEditing: false });
  };
  render() {
    const { customers, searchQuery, showModal, currentCustomer, isEditing } =
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
      { name: "Username", selector: (row) => row.username, width: "180px" },
      {
        name: "Họ tên",
        selector: (row) => row.name,
        sortable: true,
        wrap: true,
        width: "150px",
      },
      {
        name: "Email",
        selector: (row) => row.email,
        sortable: true,
        wrap: true,
        width: "250px",
      },
      { name: "SĐT", selector: (row) => row.phone, wrap: true, width: "110px" },
      {
        name: "Địa chỉ",
        selector: (row) => row.address,
        wrap: true,
        width: "255px",
      },
      { name: "Giới tính", selector: (row) => row.gender },
      { name: "Ngày sinh", selector: (row) => row.dob },
      { name: "Đơn mua", selector: (row) => row.totalOrders, width: "100px" },
      {
        name: "Đơn hủy",
        selector: (row) => row.cancelledOrders,
        width: "100px",
      },
      {
        name: "Tổng giá trị",
        selector: (row) => row.totalValue.toLocaleString() + "₫",
        sortable: true,
        right: true,
        width: "150px",
      },
    ];
    return (
      <div className="customer-manager">
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css"
        />

        <h2>Quản lý Khách hàng</h2>
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
        />

        {showModal && (
          <div className="modal-overlay">
            <div
              className="modal modal-dialog modal-dialog-centered"
              style={{
                width: "80%",
                maxWidth: "1200px",
              }}
            >
              <h3>{isEditing ? "Chỉnh sửa Khách hàng" : "Thêm Khách hàng"}</h3>
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
                      value="Tạo địa chỉ"
                      style={{
                        height: "38px",
                        width: "100px",
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
        )}
        <div style={{ display: "flex", justifyContent: "center", gap: "50px" }}>
          <button onClick={this.openAddModal} className="add-btn">
            Thêm khách hàng
          </button>
          <button onClick={this.openEditModal} className="add-btn">
            Sửa thông tin
          </button>
        </div>
      </div>
    );
  }
}

export default CustomerManager;
