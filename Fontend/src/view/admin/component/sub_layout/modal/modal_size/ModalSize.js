import React, { Component } from "react";
import { urlapi } from "../../../../../../setting/store/const";
import DataTable from "react-data-table-component";

class ModalSize extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      searchText: "",
      list_shop: [],
      data: [],
      isShowList: true,
      nameSize: "",
      description: "",
    };
  }
  handleRowClick = (row) => {
    console.log("Row clicked:", row);
    this.props.updateColor({
      idSize: row.idSize,
      nameSize: row.nameSize,
    });
    this.setState({ show: false });
    if (this.props.onClose) {
      this.props.onClose(); // gọi hàm đóng từ component cha nếu có
    }
    // You can navigate or open modal or perform other actions here
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
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
        p.idSize.toLowerCase().includes(value) ||
        p.nameSize.toLowerCase().includes(value) ||
        p.description.toLowerCase().includes(value)
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
        nameSize: this.state.nameSize,
        description: this.state.description,
      }),
    };
    fetch(urlapi + "/api/Size/insertSize", req)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "200") alert("Thêm Màu Thành Công!");
        console.log("Response từ server:", data);
        // cập nhật state nếu cần
        this.setState({ message: data.message });
        this.getListSupplier();
      })
      .catch((error) => console.error("Lỗi POST:", error));
  };
  getListSupplier = () => {
    fetch(urlapi + "/api/Size/sellectAll/all/all/")
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
    this.getListSupplier();
    this.columns = [
      { name: "STT", selector: (row, index) => index + 1, width: "80px" },
      {
        name: "Mã Size",
        selector: (row) => row.idSize,
        width: "200px",
      },
      {
        name: "Tên Size",
        selector: (row) => row.nameSize,
        sortable: true,
        width: "200px",
      },
      {
        name: "Mô tả",
        selector: (row) => row.description,
        sortable: true,
        width: "200px",
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
              <h5 className="modal-title">Chọn Size</h5>
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
                      placeholder="Tìm kiếm tên size..."
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
                      <label for="nameSize" className="col-sm-2 col-form-label">
                        Tên Màu
                      </label>
                      <div className="col-sm">
                        <input
                          type="text"
                          className="form-control form-control-sm"
                          onChange={this.handleChange}
                          name="nameSize"
                          id="nameSize"
                          value={this.state.nameSize}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="row">
                      <label for="description" className="col-sm-2 col-form-label">
                        Mô Tả
                      </label>
                      <div className="col-sm">
                        <input
                          type="text"
                          className="form-control form-control-sm"
                          onChange={this.handleChange}
                          name="description"
                          id="description"
                          value={this.state.description}
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
                  Thêm Màu
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default ModalSize;
