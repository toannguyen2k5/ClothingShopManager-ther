import React, { Component } from "react";
import { urlapi } from "../../../../../../setting/store/const";
import DataTable from "react-data-table-component";

class ModalShop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      searchText: "",
      list_shop: [],
      data: [],
      isShowList: true,
      shopName: "",
      adress: "",
      openingTime: "",
      closeTime: "",
    };
  }

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

  handleClose = () => {
    this.setState({ show: false });
    if (this.props.onClose) {
      this.props.onClose(); // gọi hàm đóng từ component cha nếu có
    }
  };
  handleShowList = () => {
    this.setState({ isShowList: true });
  };

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
        console.log("Response từ server:", data);
        // cập nhật state nếu cần
        this.setState({ message: data.message });
      })
      .catch((error) => console.error("Lỗi POST:", error));
  };

  componentDidMount() {
    fetch(urlapi + "/api/Shop/sellectAll/all/all/")
      .then((response) => response.json())
      .then((data) =>
        this.setState({ show: this.props.isOpen, list_shop: data.data, data: data.data})
      )
      .catch((error) => console.error(error));
    this.columns = [
      { name: "STT", selector: (row, index) => index + 1, width: "80px" },
      { name: "Mã Cửa Hàng", selector: (row) => row.idShop, width: "200px" },
      {
        name: "Tên Cửa Hàng",
        selector: (row) => row.nameShop,
        sortable: true,
        width: "200px",
      },
      {
        name: "Địa Chỉ",
        selector: (row) => row.address,
        sortable: true,
        width: "450px",
      },
      {
        name: "Hành Động",
        cell: (row) => (
          <button
            className="bg-yellow-400 text-white px-2 py-1 rounded mr-2"
            onClick={this.props.updateShop({
              idShop: row.idShop,
              nameShop: row.nameShop,
            })}
          >
            <i class="fa-solid fa-square-pen"></i>
          </button>
        ),
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
        width: "100px",
      },
    ];
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isOpen !== this.props.isOpen) {
      this.setState({ show: this.props.isOpen });
    }
  }

  render() {
    const { show } = this.state;
    console.log(this.state);
    if (!show) return null;

    return (
      <div
        className="modal fade show d-block"
        tabIndex="-1"
        role="dialog"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <div
          className="modal-dialog  modal-dialog-centered"
          role="document"
          style={{ maxWidth: "none", width: "1100px", margin: "1.75rem auto" }}
        >
          <div
            className="modal-content"
            style={{
              width: "1100px",
              minHeight: "500px",
              height: "550px",
              maxHeight: "600px",
            }}
          >
            <div className="modal-header" style={{ width: "1100px" }}>
              <h5 className="modal-title">Chọn Cửa Hàng</h5>
              <button
                type="button"
                className="close btn"
                onClick={this.handleClose}
              >
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {this.state.isShowList && (
                <div className="row">
                  <div className="row d-flex justify-content-between align-items-center mb-3">
                    <button
                      className="btn btn-primary ml-3"
                      onClick={() => this.setState({ isShowList: false })}
                      style={{ width: "100px" }}
                    >
                      [<i class="fa-solid fa-plus"></i>]&nbsp;Add
                    </button>
                    <input
                      type="text"
                      placeholder="Tìm kiếm sản phẩm..."
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
                      pagination
                      paginationPerPage={[5]}
                      highlightOnHover
                      striped
                      responsive
                    />
                  </div>
                </div>
              )}
              {!this.state.isShowList && (
                <div className="row">
                  <div class="form-group">
                    <div className="row">
                      <label for="shopName" class="col-sm-2 col-form-label">
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
                      <label for="adress" class="col-sm-2 col-form-label">
                        Địa Chỉ
                      </label>
                      <div class="col-sm">
                        <textarea
                          class="form-control  form-control-sm"
                          id="adress"
                          onChange={this.changAdress}
                          rows="3"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <div className="row">
                      <label for="openingTime" class="col-sm-2 col-form-label">
                        Giờ Mở Cửa
                      </label>
                      <div class="col-sm-3">
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
                      <label for="closeTime" class="col-sm-2 col-form-label">
                        Giờ Đóng Cửa
                      </label>
                      <div class="col-sm-3">
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
                </div>
              )}
            </div>
            {!this.state.isShowList && (
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={this.handleShowList}
                >
                  Back
                </button>
                <button className="btn btn-primary" onClick={this.AddShop}>
                  Thêm Cửa Hàng
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default ModalShop;
