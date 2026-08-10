import React from "react";
import DataTable from "react-data-table-component";
import "./ProductInventory.css";
import { define_nav, urlapi, role_customer, role_manager, role_admin } from "../../../../setting/store/const";
import ChooseAddress from "../../../service_sector/sector_shop/customer/view/shoping_cart/ChooseAddress";
class ProductInventory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      list_shop: [],
      data: [],
      isActionAdd: true,
      showContextMenu: false,
      contextMenuX: 0,
      contextMenuY: 0,
      selectedRow: null,
      showModelDetail: false,
      showEditModal: false,
      dataEdit: null,
    };
  }
  hanldeChangeValue = (e) => {
    const { name, value } = e.target;
    this.setState({
      dataEdit: {
        ...this.state.dataEdit, [name]: value
      }
    })
  }

  getListShop = () => {
    fetch(urlapi + "/api/Shop/sellectAll/all/all/")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          list_shop: data.data.map((item, index) => {
            return { ...item, index: index + 1 };
          }),
          data: data.data.map((item, index) => {
            return { ...item, index: index + 1 };
          }),
        })
        console.log("data shop ", data.data)
      }
      )
      .catch((error) => console.error(error));
  };
  componentDidMount() {
    // Định nghĩa cột cho DataTable
    this.columns = [
      { name: "STT", selector: (row) => row.index, grow: 1 },
      {
        name: "Tên Cửa Hàng",
        selector: (row) => row.nameShop,
        sortable: true,
        grow: 3,
      },
      {
        name: "Trạng Thái hoạt động",
        cell: (row) => (
          row.status ? (
            <i className="bi bi-check-circle-fill" style={{ color: "green", fontSize: "20px" }}></i>
          ) : (
            <i className="bi bi-x-circle-fill" style={{ color: "red", fontSize: "20px" }}></i>
          )
        ),
        grow: 2,
        center: true
      },
      {
        name: "Địa Chỉ",
        selector: (row) => row.address,
        grow: 6,
      },
    ];
    this.getListShop();
    document.addEventListener("click", this.closeContextMenu);
  }
  closeContextMenu = () => {
    this.setState({
      showContextMenu: false,
    });
  };
  componentWillUnmount() {
    document.removeEventListener("click", this.closeContextMenu);
  }
  handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    const { list_shop } = this.state;

    const filtered = list_shop.filter(
      (p) =>
        p.idShop.toLowerCase().includes(value) ||
        p.nameShop.toLowerCase().includes(value) ||
        p.address.toLowerCase().includes(value)
    );
    this.setState({ searchText: value, data: filtered });
  };
  AddShop = () => {
    const req = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        idShop: null,
        nameShop: this.state.dataEdit.nameShop,
        address: this.state.dataEdit.address,
        openingTime: this.state.dataEdit.openingTime,
        closingTime: this.state.dataEdit.closingTime,
        status: false,
      }),
    };
    fetch(urlapi + "/api/Shop/insertShop", req)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "200") alert("Thêm Cửa Hàng Thành Công!");
        else alert("Thêm Cửa Hàng Thất Bại!");
        console.log("Response từ server:", data);
        this.getListShop();
      })
      .catch((error) => console.error("Lỗi POST:", error));
  };
  updateInforShop = () => {
    const req = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // dữ liệu gửi lên server
        idShop: this.state.dataEdit.idShop,
        nameShop: this.state.dataEdit.nameShop,
        address: this.state.dataEdit.address,
        openingTime: this.state.dataEdit.openingTime,
        closingTime: this.state.dataEdit.closingTime,
        status: this.state.dataEdit.status,
      }),
    };
  };
  updateStatusShop = () => {
    const req = {
      method: "POST",
    };
    fetch(urlapi + "/api/Shop/update/status?id=" + this.state.selectedRow.idShop + "&status=" + !this.state.selectedRow.status, req)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "200") alert("Cập Nhật Cửa Hàng Thành Công!");
        this.getListShop();
        this.clearShopInfo();
      })
      .catch((error) => console.error("Lỗi POST:", error));
  }

  clearShopInfo = () => {
    this.setState({
      dataEdit: this.state.selectedRow
    });
  };
  handleOpenModelDetail = () => {
    fetch(urlapi + "/api/Shop/byId?id=" + this.state.selectedRow.idShop)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "200") this.setState({ selectedRow: data.data, showModelDetail: true })
        else alert("dữ liệu không tồn tại")
        console.log("data :", data.data)
      })
  }

  handleOpenModelEdit = () => {
    fetch(urlapi + "/api/Shop/byId?id=" + this.state.selectedRow.idShop)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "200") this.setState({ selectedRow: data.data, showEditModal: true, dataEdit: data.data, isActionAdd: false })
        else alert("dữ liệu không tồn tại")
        console.log("data :", data.data)
      })
  }

  closeShowModel = () => {
    this.setState({ showModelDetail: false , selectedRow : null , dataEdit : null})
  }
  CloseEditModal = () => {
    this.setState({ showEditModal: false , selectedRow : null , dataEdit : null})
  }

  render() {
    const { selectedRow, showEditModal, dataEdit, isActionAdd } = this.state;
    if (this.props.state_data.current_page.name !== define_nav.admin.shop.name)
      this.props.actions.current_page({
        name_new: define_nav.admin.shop.name,
        path_new: define_nav.admin.shop.path,
        old_page: this.props.state_data.current_page,
      });

    return (
      <div style={{ paddingLeft: "20px", fontFamily: "Arial, sans-serif" }}>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
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
              <div onClick={() => this.handleOpenModelDetail()}>
                👁 Xem thông tin cửa hàng
              </div>
              {this.props.state_data.user_info.role_level >= role_admin && (
                <div onClick={()=>this.updateStatusShop()}>
                  ✏ đổi trạng hoạt động
                </div>
              )}
              <div onClick={() => this.handleOpenModelEdit()}>
                ✏ chỉnh sửa thông tin cửa hàng
              </div>

            </div>
          )
        }
        <div className="row">
          <div className="row d-flex justify-content-between align-items-center mb-3">
            &nbsp;
            <input
              type="text"
              placeholder="Tìm kiếm cửa hàng..."
              className="col-5 border p-2 rounded form-control-sm"
              onChange={this.handleSearch}
              value={this.state.searchText}
              style={{ float: "right" }}
            />
          </div>
          <div className="row d-flex justify-content-between align-items-center mb-3">
            &nbsp;
            <input
              type="button"
              value="Thêm mới cửa hàng"
              className="bt_close"
              style={{width:"200px",justifyContent:"end"}}
              onClick={()=>{this.setState({isActionAdd:true,showEditModal:true})}}
            />
          </div>
          <div className="row">
            <DataTable
              columns={this.columns}
              data={this.state.data}
              onRowDoubleClicked={(row, event) => {
                this.setState({
                  selectedRow: row,
                  showContextMenu: true,
                  contextMenuX: event.clientX,
                  contextMenuY: event.clientY,
                }, console.log("selectedRow : ", this.state.selectedRow));
              }}
              pagination
              paginationPerPage={10} // 👈 Số dòng mỗi trang
              paginationRowsPerPageOptions={[5]} // 👈 Ẩn tùy chọn khác
              highlightOnHover
              striped
              responsive
            />
          </div>
        </div>
        <div className="">
          {this.state.showModelDetail && (
            <div
              className="psl-modal-overlay"
              onClick={this.closeShowModel}
            >
              <div
                className="psl-modal-content"
                onClick={(e) => e.stopPropagation()}
                style={{
                  width: "100%",
                  height: "450px",
                  overflowY: "auto",
                }}
              >
                <button
                  className="psl-modal-close"
                  onClick={this.closeShowModel}
                >
                  ×
                </button>
                <div className="container-detail">
                  <div className="container-hafl">
                    <h2>Thông tin cửa hàng</h2>
                    <div className="block-input">
                      <label>mã cửa hàng</label>
                      <input
                        type="text"
                        defaultValue={selectedRow?.idShop || "không có thông tin"}
                        disabled
                      />
                    </div>
                    <div className="block-input">
                      <label>tên cửa hàng</label>
                      <input
                        type="text"
                        defaultValue={selectedRow?.nameShop || "không có thông tin"}
                        disabled
                      />
                    </div>
                    <div className="block-input">
                      <label>trạng thái hoạt động</label>
                      <input
                        type="text"
                        defaultValue={selectedRow?.status ? "Đang hoạt động" : "Ngưng hoạt động" || "không có thông tin"}
                        disabled
                      />
                    </div>
                    <div className="container-detail">
                      <div className="block-input">
                        <label>giờ mở cửa</label>
                        <input
                          type="text"
                          defaultValue={selectedRow?.openingTime || "không có thông tin"}
                          disabled
                        />
                      </div>
                      <div className="block-input">
                        <label>giờ đóng cửa</label>
                        <input
                          type="text"
                          defaultValue={selectedRow?.closingTime || "không có thông tin"}
                          disabled
                        />
                      </div>
                    </div>
                    <label style={{
                      width: "200px",
                      fontWeight: "bold"
                    }}>Địa chỉ</label>
                    <textarea
                      type="text"
                      defaultValue={selectedRow?.address || "không có thông tin"}
                      disabled
                      style={{ width: "100%", height: "75px", borderRadius: "10px", marginLeft: "20px", marginBottom: "10px" }}
                    />
                    <div style={{ display: "flex", alignItems: "center", flexDirection: "row", justifyContent: "center" }} >
                      <input type="button" className="bt_close" value="close" onClick={this.closeShowModel} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="">
          {showEditModal && (
            <div
              className="psl-modal-overlay"
              onClick={this.CloseEditModal}
            >
              <div
                className="psl-modal-content"
                onClick={(e) => e.stopPropagation()}
                style={{
                  width: "100%",
                  height: "700px",
                  overflowY: "auto",
                }}
              >
                <button
                  className="psl-modal-close"
                  onClick={this.CloseEditModal}
                >
                  ×
                </button>
                <div>
                  <h4 style={{ textAlign: "center" }}>Thông Tin Cửa Hàng</h4>
                  <div className="row">
                    <div className="form-group">
                      <div className="row">
                        <label for="shopName" className="col-sm-3 col-form-label">
                          Tên Cửa Hàng
                        </label>
                        <div className="col-sm">
                          <input
                            type="text"
                            className="form-control form-control-sm"
                            name="nameShop"
                            onChange={this.hanldeChangeValue}
                            style={{ borderRadius: "10px" }}
                            id="shopName"
                            value={dataEdit?.nameShop || ""}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group mt-2">
                      <div className="row">
                        <label for="openingTime" className="col-sm-3 col-form-label">
                          Giờ Mở Cửa
                        </label>
                        <div className="col-2">
                          <input
                            type="time"
                            className="form-control form-control-sm"
                            onChange={this.hanldeChangeValue}
                            id="openingTime"
                            name="openingTime"
                            value={dataEdit?.openingTime || ""}
                            style={{ borderRadius: "10px", width: "120px", marginBottom: "10px" }}
                          />
                        </div>
                        <label for="closeTime" className="col-sm-3 col-form-label">
                          Giờ Đóng Cửa
                        </label>
                        <div className="col-2">
                          <input
                            type="time"
                            className="form-control form-control-sm"
                            onChange={this.hanldeChangeValue}
                            id="closeTime"
                            name="closingTime"
                            value={dataEdit?.closingTime || ""}
                            style={{ borderRadius: "10px", width: "120px", marginBottom: "10px" }}
                          />
                        </div>
                      </div>
                    </div>
                    <ChooseAddress {...this.props} />
                    <div className="form-group">
                      <div className="row">
                        <div className="col-sm-3"></div>
                        <div className="col-sm">
                          <button
                            className="btn btn-primary"
                            onClick={() => {
                              this.setState((prevState) => ({
                                dataEdit: {
                                  ...prevState.dataEdit,
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
                          >
                            Xác nhận địa chỉ
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="row">
                        <label for="adress" className="col-sm-3 col-form-label">
                          Địa Chỉ
                        </label>
                        <div className="col-sm">
                          <textarea
                            className="form-control  form-control-sm"
                            id="adress"
                            name="address"
                            onChange={this.hanldeChangeValue}
                            rows="2"
                            value={dataEdit?.address || ""}
                            style={{ marginBottom: "20px" }}
                            disabled
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="row">
                        <div className="col-sm-3"></div>
                        <div className="col-sm">
                          <button
                            className="btn btn-primary"
                            onClick={
                              isActionAdd ? this.AddShop : this.updateInforShop
                            }
                          >
                            {isActionAdd
                              ? "Thêm Mới Cửa Hàng"
                              : "Cập Nhật Cửa Hàng"}
                          </button>
                          &nbsp;
                          <button
                            className="btn btn-primary"
                            onClick={this.clearShopInfo}
                          >
                            Clear
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default ProductInventory;
