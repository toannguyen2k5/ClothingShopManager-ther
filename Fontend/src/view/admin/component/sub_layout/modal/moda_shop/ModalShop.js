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
  handleRowClick = (row) => {
    console.log("Row clicked:", row);
    this.props.updateShop({
      idShop: row.idShop,
      nameShop: row.nameShop,
    });
    this.setState({ show: false });
    if (this.props.onClose) {
      this.props.onClose(); // gọi hàm đóng từ component cha nếu có
    }
    // You can navigate or open modal or perform other actions here
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

  getListShop = () => {
    fetch(urlapi + "/api/Shop/sellectAll/all/all/")
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          show: this.props.isOpen,
          list_shop: data.data,
          data: data.data,
        })
      )
      .catch((error) => console.error(error));
  };
  componentDidMount() {
    this.getListShop();
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
                      [<i className="fa-solid fa-plus"></i>]&nbsp;Add
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
              )}
              {!this.state.isShowList && (
                <div className="row">
                  <div className="form-group">
                    <div className="row">
                      <label for="shopName" className="col-sm-2 col-form-label">
                        Tên Cửa Hàng
                      </label>
                      <div className="col-sm">
                        <input
                          type="text"
                          className="form-control form-control-sm"
                          onChange={this.changShopName}
                          id="shopName"
                          value={this.state.shopName}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="row">
                      <label for="adress" className="col-sm-2 col-form-label">
                        Địa Chỉ
                      </label>
                      <div className="col-sm">
                        <textarea
                          className="form-control  form-control-sm"
                          id="adress"
                          onChange={this.changAdress}
                          rows="3"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="row">
                      <label for="openingTime" className="col-sm-2 col-form-label">
                        Giờ Mở Cửa
                      </label>
                      <div className="col-sm-3">
                        <input
                          type="time"
                          className="form-control form-control-sm"
                          onChange={this.changOpeningTime}
                          id="openingTime"
                          value={this.state.openingTime}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="row">
                      <label for="closeTime" className="col-sm-2 col-form-label">
                        Giờ Đóng Cửa
                      </label>
                      <div className="col-sm-3">
                        <input
                          type="time"
                          className="form-control form-control-sm"
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
