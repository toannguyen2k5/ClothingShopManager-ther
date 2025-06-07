import React, { Component } from "react";
import DataTable from "react-data-table-component";
import { role_manager, urlapi } from "../../../../../../setting/store/const";
import "../../input/list/PurchaseSlipList.css";

export default class SalesSlipList extends Component {
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
      statusOptions: [
        { value: "SCd001", text: "Chưa duyệt" },
        { value: "SCd002", text: "Đã duyệt" },
        { value: "SCd003", text: "Đang giao hàng" },
        { value: "SCd004", text: "hoàn thành" },
      ],
      selectedStatus: "",
    };
  }

  componentDidMount() {
    this.fetchSlips();
  }
  getStatusText = (code) => {
    const status = this.state.statusOptions.find((opt) => opt.value === code);
    return status ? status.text : "Không rõ";
  };
  fetchSlips = async () => {
    fetch(urlapi + "/api/SalesSlip/SelectAll/all/all/")
      .then((response) => response.json())
      .then((data) => {
        if (data.status && data.status === "200") {
          console.log("data : ", data);
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
        fetch(urlapi + "/api/SalesSlip/SelectDetail?idSalesSlip=" + slipId)
          .then((response) => response.json())
          .then((data) => {
            if (data.status && data.status === "200") {
              console.log("data : ", data);
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
        slips: prev.slips.filter((s) => s.idSalesSlip !== slipId),
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

  handleStatusChange = (e) => {
    const updatedStatus = e.target.value;
    this.setState((prev) => ({
      slips: prev.slips.map((slip) =>
        slip.idSalesSlip === prev.selectedSlipId
          ? { ...slip, deliveryStatus: updatedStatus }
          : slip
      ),
      deliveryStatus: updatedStatus,
    }));
  };
  handleUpdateStatus = () => {
    const data = {
      deliveryStatus: this.state.deliveryStatus,
      idSalesSlip: this.state.selectedSlipId,
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
    fetch(urlapi + "/api/SalesSlip/updateStatusSalesSlip", req)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "200") {
          alert("Cập nhật trạng thái đơn nhập hàng thành công!!!");
          this.setState({
            deliveryStatus: "",
          });
        }
        console.log("Response từ server:", data);
        // cập nhật state nếu cần
      })
      .catch((error) => console.error("Lỗi POST:", error));
  };

  render() {
    const {
      slips,
      loading,
      searchText,
      showModal,
      selectedSlipId,
      slipItems,
      itemsLoading,
      itemSearchText,
      statusOptions,
    } = this.state;

    const filteredSlips = slips.filter(
      (slip) =>
        slip.idSalesSlip.toLowerCase().includes(searchText.toLowerCase()) ||
        slip.nameCreate.toLowerCase().includes(searchText.toLowerCase()) ||
        slip.nameClient.toLowerCase().includes(searchText.toLowerCase())
    );

    const selectedSlip = slips.find((s) => s.idSalesSlip === selectedSlipId);

    const slipColumns = [
      {
        name: "ID Phiếu",
        selector: (row) => row.idSalesSlip,
        sortable: true,
      },
      { name: "Người tạo", selector: (row) => row.nameCreate, sortable: true },
      {
        name: "Khách hàng",
        selector: (row) => row.nameClient,
        sortable: true,
      },
      { name: "Ngày tạo", selector: (row) => row.createDate, sortable: true },
      {
        name: "Địa chỉ giao",
        selector: (row) => row.deliveryAddress,
        sortable: true,
      },
      {
        name: "Tiền ship",
        selector: (row) => row.shippingFee.toLocaleString() + " VND",
        sortable: true,
      },
      {
        name: "Tổng tiền",
        selector: (row) => row.totalBill,
        format: (row) => row.totalBill.toLocaleString() + " VND",
        sortable: true,
      },
      {
        name: "Trạng thái nhận hàng",
        selector: (row) => this.getStatusText(row.deliveryStatus),
        sortable: true,
      },
      {
        name: "Actions",
        cell: (row) =>
          !row.approveStatus && (
            <>
              <button
                className="btn btn-sm btn-outline-danger"
                onClick={() => this.handleDeleteSlip(row.idSalesSlip)}
              >
                Xóa
              </button>
            </>
          ),
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
        <h2>Danh sách Đơn Hàng</h2>
        <DataTable
          columns={slipColumns}
          data={filteredSlips}
          progressPending={loading}
          pagination
          paginationPerPage={5}
          paginationRowsPerPageOptions={[5, 10, 15, 20, 50]}
          highlightOnHover
          pointerOnHover
          onRowClicked={(row) => this.fetchSlipItems(row.idSalesSlip)}
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
                      <strong>ID Phiếu:</strong> {selectedSlip.idSalesSlip}
                    </p>
                    <p>
                      <strong>Ngày tạo:</strong> {selectedSlip.createDate}
                    </p>
                  </div>
                  <div className="psl-row">
                    <p>
                      <strong>Người tạo:</strong> {selectedSlip.nameCreate}
                    </p>
                    <p>
                      <strong>Khách hàng:</strong> {selectedSlip.nameClient}
                    </p>
                  </div>
                  <div className="psl-row">
                    <p>
                      <strong>tiền ship:</strong>{" "}
                      {selectedSlip.shippingFee.toLocaleString()} VND
                    </p>
                  </div>
                  <div className="psl-row">
                    <p>
                      <strong>Tổng tiền:</strong>{" "}
                      {selectedSlip.totalBill.toLocaleString()} VND
                    </p>
                  </div>
                  <div className="psl-slip-row">
                    <strong>Trạng thái:</strong>
                    {selectedSlip.deliveryStatus === "SCd004" &&
                    this.state.deliveryStatus !== selectedSlip.deliveryStatus &&
                    this.props.state_data.user_info.role_level >=
                      role_manager ? (
                      <span>
                        {this.getStatusText(selectedSlip.deliveryStatus)}
                      </span>
                    ) : (
                      <>
                        <select
                          className="form-control form-control-sm  select-slip"
                          value={selectedSlip.deliveryStatus}
                          onChange={this.handleStatusChange}
                        >
                          {statusOptions.map((status) => (
                            <option key={status} value={status.value}>
                              {status.text}
                            </option>
                          ))}
                        </select>
                        <button
                          className="btn btn-sm btn-success ml-2"
                          onClick={this.handleUpdateStatus}
                        >
                          Update Trạng Thái
                        </button>
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
