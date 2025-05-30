import React from "react";
import DataTable from "react-data-table-component";
import "./ProductInventory.css";
import { define_nav, urlapi } from "../../../../setting/store/const";

class ProductInventory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      list_shop: [],
      data: [],
      isActionAdd: true,
      shopName: "",
      adress: "",
      openingTime: "",
      closeTime: "",
      idShop: "",
    };
  }
  handleRowClick = (row) => {
    this.updateShopInfo(row);
  };
  changShopName = (e) => {
    const value = e.target.value;
    this.setState({ shopName: value });
  };

  changAdress = (e) => {
    const value = e.target.value;
    this.setState({ adress: value });
  };

  changOpeningTime = (e) => {
    const value = e.target.value;
    this.setState({ openingTime: value });
  };

  changCloseTime = (e) => {
    const value = e.target.value;
    this.setState({ closeTime: value });
  };

  getListShop = () => {
    fetch(urlapi + "/api/Shop/sellectAll/all/all/")
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          list_shop: data.data.map((item, index) => {
            return { ...item, index: index + 1 };
          }),
          data: data.data.map((item, index) => {
            return { ...item, index: index + 1 };
          }),
        })
      )
      .catch((error) => console.error(error));
  };
  componentDidMount() {
    // Định nghĩa cột cho DataTable
    this.columns = [
      { name: "STT", selector: (row) => row.index, width: "80px" },
      {
        name: "Tên Cửa Hàng",
        selector: (row) => row.nameShop,
        sortable: true,
        width: "450px",
      },
      {
        name: "Địa Chỉ",
        selector: (row) => row.address,
        sortable: true,
        width: "850px",
      },
      {
        name: "Hành động",
        cell: (row) => (
          <div className="action-buttons">
            <button
              className="edit-btn"
              onClick={() => this.updateShopInfo(row)}
            >
              <i class="bi bi-pencil"></i>
            </button>{" "}
            <button className="delete-btn" onClick={() => this.deleteShop(row)}>
              <i class="bi bi-trash"></i>
            </button>
          </div>
        ),
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
      },
    ];
    this.getListShop();
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
        // dữ liệu gửi lên server
        nameShop: this.state.shopName,
        address: this.state.adress,
        openingTime: this.state.openingTime,
        closingTime: this.state.closeTime,
        status: true,
      }),
    };
    fetch(urlapi + "/api/Shop/insertShop", req)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "200") alert("Thêm Cửa Hàng Thành Công!");
        console.log("Response từ server:", data);
        // cập nhật state nếu cần
        this.setState({ message: data.message });
        this.getListShop();
      })
      .catch((error) => console.error("Lỗi POST:", error));
  };
  deleteShop = (data) => {
    const req = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // dữ liệu gửi lên server
        idShop: data.idShop,
        nameShop: data.nameShop,
        address: data.address,
        openingTime: data.openingTime,
        closingTime: data.closingTime,
        status: true,
      }),
    };
    fetch(urlapi + "/api/Shop/deleteShop", req)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "200") alert("Xóa Cửa Hàng Thành Công!");
        console.log("Response từ server:", data);
        // cập nhật state nếu cần
        this.setState({ message: data.message });
        this.getListShop();
      })
      .catch((error) => console.error("Lỗi POST:", error));
  };
  updateShop = () => {
    const req = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // dữ liệu gửi lên server
        idShop: this.state.idShop,
        nameShop: this.state.shopName,
        address: this.state.adress,
        openingTime: this.state.openingTime,
        closingTime: this.state.closeTime,
        status: true,
      }),
    };
    fetch(urlapi + "/api/Shop/updateshop", req)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "200") alert("Cập Nhật Cửa Hàng Thành Công!");
        // cập nhật state nếu cần
        this.setState({ isActionAdd: true, message: data.message });
        this.getListShop();
        this.clearShopInfo();
      })
      .catch((error) => console.error("Lỗi POST:", error));
  };
  updateShopInfo = (data) => {
    this.setState({
      shopName: data.nameShop,
      adress: data.address,
      openingTime: data.openingTime,
      closeTime: data.closingTime,
      isActionAdd: false,
      idShop: data.idShop,
    });
  };

  clearShopInfo = () => {
    this.setState({
      shopName: "",
      adress: "",
      openingTime: "",
      closeTime: "",
      idShop: "",
      isActionAdd: true,
    });
  };

  render() {
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
        <div>
          <h4>Thông Tin Cửa Hàng</h4>
          <div className="row">
            <div class="form-group">
              <div className="row">
                <label for="shopName" class="col-sm-3 col-form-label">
                  Tên Cửa Hàng
                </label>
                <div class="col-sm">
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    onChange={this.changShopName}
                    id="shopName"
                    value={this.state.shopName}
                  />
                </div>
              </div>
            </div>
            <div class="form-group">
              <div className="row">
                <label for="adress" class="col-sm-3 col-form-label">
                  Địa Chỉ
                </label>
                <div class="col-sm">
                  <textarea
                    class="form-control  form-control-sm"
                    id="adress"
                    onChange={this.changAdress}
                    rows="2"
                    value={this.state.adress}
                  ></textarea>
                </div>
              </div>
            </div>
            <div class="form-group mt-2">
              <div className="row">
                <label for="openingTime" class="col-sm-3 col-form-label">
                  Giờ Mở Cửa
                </label>
                <div class="col-2">
                  <input
                    type="time"
                    class="form-control form-control-sm"
                    onChange={this.changOpeningTime}
                    id="openingTime"
                    value={this.state.openingTime}
                  />
                </div>
              </div>
            </div>
            <div class="form-group">
              <div className="row">
                <label for="closeTime" class="col-sm-3 col-form-label">
                  Giờ Đóng Cửa
                </label>
                <div class="col-2">
                  <input
                    type="time"
                    class="form-control form-control-sm"
                    onChange={this.changCloseTime}
                    id="closeTime"
                    value={this.state.closeTime}
                  />
                </div>
              </div>
            </div>
            <div class="form-group">
              <div className="row">
                <div className="col-sm-3"></div>
                <div class="col-sm">
                  <button
                    className="btn btn-primary"
                    onClick={
                      this.state.isActionAdd ? this.AddShop : this.updateShop
                    }
                  >
                    {this.state.isActionAdd
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
        <hr />
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
          <div className="row">
            <DataTable
              columns={this.columns}
              data={this.state.data}
              onRowClicked={this.handleRowClick}
              pagination
              paginationPerPage={5} // 👈 Số dòng mỗi trang
              paginationRowsPerPageOptions={[5]} // 👈 Ẩn tùy chọn khác
              highlightOnHover
              striped
              responsive
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ProductInventory;
