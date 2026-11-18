import React, { Component } from "react";
import DataTable from "react-data-table-component";
import { role_manager, role_admin, urlapi } from "../../../../../../setting/store/const";
import { FaCheckCircle, FaTimesCircle, FaClock } from "react-icons/fa";
import "./PurchaseSlipList.css";

export default class PurchaseSlipList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slips: [],
      loading: true,
      error: null,
      searchText: "",
      selectedSlipId: null,
      slipItems: [],
      itemsLoading: false,
      showModal: false,
      itemSearchText: "",
      selectedStatus: "",
    };
  }

  componentDidMount() {
    this.fetchSlips();
  }
  getStatusIcon = (code) => {
    if (code === "SCd001") {
      return (
        <FaCheckCircle
          color="green"
          size={20}
          title="Đã xác nhận"
        />
      );
    }

    if (code === "SCd002") {
      return (
        <FaTimesCircle
          color="red"
          size={20}
          title="Từ chối"
        />
      );
    }

    return (
      <FaClock
        color="orange"
        size={20}
        title="Chưa duyệt"
      />
    );
  };

  fetchSlips = async () => {
    fetch(urlapi + "/api/PurchaseSlip/SelectAll/all/all/")
      .then((response) => response.json())
      .then((data) => {
        if (data.status && data.status === "200") {
          console.log("data purcharsplit: ", data);
          this.setState({ slips: data.data, loading: false });
        }
        console.log(data);
      })
      .catch((error) => console.error(error));
  };

  fetchSlipItems = (slipId) => {
    this.setState(
      {
        itemsLoading: true,
        selectedSlipId: slipId,
        showModal: true,
      },
      () => {
        fetch(
          urlapi + "/api/PurchaseSlip/SelectDetail?idPurchaseSlip=" + slipId
        )
          .then((response) => response.json())
          .then((data) => {
            if (data.status && data.status === "200") {
              console.log("data detail PurchaseSlip: ", data);
              this.setState({ slipItems: data.data, itemsLoading: false });
            }
            console.log(data);
          })
          .catch((error) => console.error(error));
      }
    );
  };

  closeModal = () => {
    this.setState({
      showModal: false,
      selectedSlipId: null,
      slipItems: [],
      itemSearchText: "",
    });
  };

  handleSearch = (e) => {
    this.setState({ searchText: e.target.value });
  };

  handleItemSearch = (e) => {
    this.setState({ itemSearchText: e.target.value });
  };

  handleDeleteSlip = (slipId) => {
    if (window.confirm("Xóa phiếu " + slipId + "?")) {
      this.setState((prev) => ({
        slips: prev.slips.filter((s) => s.idPurchaseSlip !== slipId),
      }));
    }
  };

  handleEditItem = (item) => {
    console.log("Edit item", item);
  };

  handleDeleteItem = (index) => {
    this.setState((prev) => ({
      slipItems: prev.slipItems.filter((_, i) => i !== index),
    }));
  };
  handleUpdateStatus = (approveStatus_code) => {
    const data = {
      approveStatus: approveStatus_code,
      statusUpdateDate: new Date(),
      idStatusEditor: this.props.state_data.user_info.id_user,
      idPurchaseSlip: this.state.selectedSlipId,
    };
    const req = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
      }),
    };
    fetch(urlapi + "/api/PurchaseSlip/updateStatusPurchaseSlip", req)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "200") {
          alert("Cập nhật trạng thái đơn nhập hàng thành công!!!");
          this.fetchSlips();
        }
        console.log("Response từ server:", data);
        // cập nhật state nếu cần
      })
      .catch((error) => console.error("Lỗi POST:", error));
  };

  render() {
    console.log(this.props);
    const {
      slips,
      loading,
      searchText,
      showModal,
      selectedSlipId,
      slipItems,
      itemsLoading,
      itemSearchText,
    } = this.state;

    const filteredSlips = slips.filter(
      (slip) =>
        slip.idPurchaseSlip.includes(searchText) ||
        slip.nameCreater.toLowerCase().includes(searchText.toLowerCase()) ||
        slip.nameSupplier.toLowerCase().includes(searchText.toLowerCase())
    );

    const selectedSlip = slips.find((s) => s.idPurchaseSlip === selectedSlipId);

    const slipColumns = [
      {
        name: "ID Phiếu",
        selector: (row) => row.idPurchaseSlip,
        sortable: true,
      },
      { name: "Người tạo", selector: (row) => row.nameCreater, sortable: true },
      {
        name: "Nhà cung cấp",
        selector: (row) => row.nameSupplier,
        sortable: true,
      },
      { name: "Ngày tạo", selector: (row) => row.dayCreate, sortable: true },
      {
        name: "Tổng tiền",
        selector: (row) => row.totalBill,
        format: (row) => row.totalBill.toLocaleString() + " VND",
        sortable: true,
      },
      {
        name: "Trạng thái duyệt",
        selector: (row) => this.getStatusIcon
          (row.approveStatus),
        sortable: true,
      },
      {
        name: "Trạng thái nhận hàng",
        selector: (row) => row.approveStatus === "SCd001" ? (row.statusReceive ? "Đã nhận hàng" : "Đang nhận hàng") : "",
        sortable: true,
      },
      {
        name: "Actions",
        cell: (row) =>
          row.approveStatus === "SCd003" && (
            <>
              <button
                className="btn btn-sm btn-outline-primary"
                onClick={
                  ()=>this.setState({ selectedSlipId: row.idPurchaseSlip },()=>{this.handleUpdateStatus("SCd001")})
                }
              >
                accept
              </button>
              <button
                className="btn btn-sm btn-outline-danger"
                onClick={
                  ()=>this.setState({ selectedSlipId: row.idPurchaseSlip },()=>{this.handleUpdateStatus("SCd002")})
                }
              >
                refuse
              </button>
            </>
          ) ||
          row.approveStatus === "SCd002" && (
            <>
              <button
                className="btn btn-sm btn-outline-primary"
                onClick={
                  ()=>this.setState({ selectedSlipId: row.idPurchaseSlip },()=>{this.handleUpdateStatus("SCd003")})
                }
              >
                Restore
              </button>
            </>
          )
      },
    ];

    const filteredItems = slipItems.filter(
      (item) =>
        item.idShop.toLowerCase().includes(itemSearchText.toLowerCase()) ||
        item.idProduct.toLowerCase().includes(itemSearchText.toLowerCase()) ||
        item.nameProduct.toLowerCase().includes(itemSearchText.toLowerCase())
    );

    const itemColumns = [
      { name: "STT", selector: (row, index) => index + 1, width: "80px" },
      {
        name: "Tên Cửa Hàng",
        selector: (row) => row.nameShop,
        sortable: true,
        width: "300px",
      },
      {
        name: "Tên Sản Phẩm",
        selector: (row) => row.nameProduct,
        sortable: true,
        width: "300px",
      },
      {
        name: "Màu",
        selector: (row) => row.color,
        sortable: true,
        width: "80px",
      },
      {
        name: "Size",
        selector: (row) => row.size,
        sortable: true,
        width: "80px",
      },
      {
        name: "Số Lượng",
        selector: (row) => row.quantity,
        sortable: true,
        width: "120px",
      },
      {
        name: "Đơn Giá",
        selector: (row) => row.price,
        format: (row) => row.price.toLocaleString() + " VND",
        sortable: true,
      },
    ];

    return (
      <div className="">
        <h2>Danh sách Đơn Nhập Hàng</h2>
        <DataTable
          columns={slipColumns}
          data={filteredSlips}
          progressPending={loading}
          pagination
          paginationPerPage={5}
          paginationRowsPerPageOptions={[5, 10, 15, 20, 50]}
          highlightOnHover
          pointerOnHover
          onRowClicked={(row) => this.fetchSlipItems(row.idPurchaseSlip)}
          subHeader
          subHeaderComponent={
            <input
              type="text"
              placeholder="Tìm kiếm phiếu..."
              className="psl-search"
              value={searchText}
              onChange={this.handleSearch}
            />
          }
        />

        {showModal && (
          <div className="psl-modal-overlay" onClick={this.closeModal}>
            <div
              className="psl-modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button className="psl-modal-close" onClick={this.closeModal}>
                ×
              </button>
              <h3>Chi tiết phiếu</h3>

              {selectedSlip && (
                <div className="psl-slip-info">
                  <div className="psl-row">
                    <p>
                      <strong>ID Phiếu:</strong> {selectedSlip.idPurchaseSlip}
                    </p>
                    <p>
                      <strong>Ngày tạo:</strong> {selectedSlip.dayCreate}
                    </p>
                  </div>
                  <div className="psl-row">
                    <p>
                      <strong>Người tạo:</strong> {selectedSlip.nameCreater}
                    </p>
                    <p>
                      <strong>Nhà cung cấp:</strong> {selectedSlip.nameSupplier}
                    </p>
                  </div>
                  <div className="psl-row">
                    <p>
                      <strong>Tổng tiền:</strong>{" "}
                      {selectedSlip.totalBill.toLocaleString()} VND
                    </p>
                  </div>
                  <div className="psl-slip-row">
                    {selectedSlip.approveStatus === "SCd001" && (
                      <>
                        <strong>Trạng thái nhận hàng</strong>
                        <input
                          type="text"
                          className="form-control form-control-sm ml-2"
                          value={this.state.statusReceive ? "Đã nhận hàng" : "Đang nhận hàng"}
                          readOnly
                        />
                        {this.props.state_data.user_info.role_level < role_admin && (
                          <button
                            className="btn btn-sm btn-success ml-2"
                            onClick={() => this.handleUpdateStatus("SCd003")}
                          >
                            Đã nhận hàng
                          </button>
                        )}
                      </>
                    )}
                  </div>
                </div>
              )}

              <DataTable
                columns={itemColumns}
                data={filteredItems}
                progressPending={itemsLoading}
                pagination
                paginationPerPage={5}
                paginationRowsPerPageOptions={[5, 10, 15, 20, 50]}
                highlightOnHover
                pointerOnHover
                subHeader
                subHeaderComponent={
                  <input
                    type="text"
                    placeholder="Tìm kiếm sản phẩm..."
                    className="psl-search"
                    value={itemSearchText}
                    onChange={this.handleItemSearch}
                  />
                }
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}
