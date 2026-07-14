import React, { Component } from "react";
import DataTable from "react-data-table-component";
import "./StorePromoManager.css";
import { urlapi } from "../../../../setting/store/const";
import ModalClient from "../../component/sub_layout/modal/modal_client/ModalClient";
export default class StorePromoManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      promos: [], // list of promotions
      filterText: "",
      showModal: false,
      editingIndex: null,
      isOpenModalClient: false,
      form: {
        discountCode: "",
        code: "",
        nameCreater: "",
        idUser: "",
        nameUser: "",
        discountOrPrice: "",
        minimumOrderValue: "",
        expiry: "",
      },
    };
  }
  updateClient = (data) => {
    this.setState((prev) => ({
      form: {
        ...prev.form,
        idUser: data.idClient,
        nameUser: data.fullName,
      },
    }));
  };
  handleOpenModalClient = () => {
    this.setState({ ...this.state, isOpenModalClient: true });
  };
  componentDidMount() {
    // lấy dữ liệu product
    fetch(`${urlapi}/api/UserDiscountCode/sellectAll`)
      .then((response) => response.json())
      .then((data) => {
        if (data.status && data.status == "200") {
          this.setState({ promos: data.data });
        }
        console.log(data);
      })
      .catch((error) => {
        console.error("Lỗi khi fetch:", error);
      });
  }

  openModal = (idx = null) => {
    if (idx != null) {
      this.setState(
        {
          editingIndex: idx,
          form: {
            discountCode: this.state.promos[idx].discountCode,
            code: this.state.promos[idx].code,
            nameCreater: this.state.promos[idx].nameCreater,
            idUser: this.state.promos[idx].idUser,
            nameUser: this.state.promos[idx].nameUser,
            discountOrPrice: this.state.promos[idx].discountOrPrice,
            minimumOrderValue: this.state.promos[idx].minimumOrderValue,
            expiry: this.state.promos[idx].expiry,
          },
          showModal: true,
        },
        () => {
          console.log("data form : ", this.state.form);
        }
      );
    } else {
      this.setState({
        editingIndex: null,
        form: {
          discountCode: "",
          code: "",
          nameCreater: "",
          idUser: "",
          nameUser: "",
          discountOrPrice: "",
          minimumOrderValue: "",
          expiry: "",
        },
        showModal: true,
      });
    }
  };

  closeModal = () => this.setState({ showModal: false });

  handleFormChange = (e) => {
    const { name, value } = e.target;
    this.setState((prev) => ({ form: { ...prev.form, [name]: value } }));
  };

  saveAssignment = () => {
    const { editingIndex, form, promos } = this.state;
    console.log("form ", form);
    if (editingIndex == null) {
      const req = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          discountCode: null,
          code: form.code,
          idUser: form.idUser,
          idCreater: this.props.state_data.user_info.id_user,
          discountOrPrice: form.discountOrPrice,
          minimumOrderValue: form.minimumOrderValue,
          expiry: form.expiry,
        }),
      };
      fetch(urlapi + "/api/UserDiscountCode/insertUserDiscountCode", req)
        .then((response) => response.json())
        .then((data) => {
          if (data.status && data.status === "200") {
            this.setState({ promos: [...promos, form], showModal: false });
            alert("Tạo mã giảm giá cho người dùng thành công !");
          } else alert("Tạo mã giảm giá cho người dùng thất bại !");
          console.log("Response tạo phiếu từ server:", data);
          // cập nhật state nếu cần
        })
        .catch((error) => console.error("Lỗi POST:", error));
    } else {
      const req = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          discountCode: form.discountCode,
          code: form.code,
          idUser: form.idUser,
          idCreater: this.props.state_data.user_info.id_user,
          discountOrPrice: form.discountOrPrice,
          minimumOrderValue: form.minimumOrderValue,
          expiry: form.expiry,
        }),
      };
      fetch(urlapi + "/api/UserDiscountCode/updateUserDiscountCode", req)
        .then((response) => response.json())
        .then((data) => {
          if (data.status && data.status === "200") {
            const arr = [...promos];
            arr[editingIndex] = form;
            this.setState({ promos: arr, showModal: false });
            alert("Sửa mã giảm giá cho người dùng thành công !");
          } else alert("Sửa mã giảm giá cho người dùng thất bại !");
          console.log("Response tạo phiếu từ server:", data);
          // cập nhật state nếu cần
        })
        .catch((error) => console.error("Lỗi POST:", error));
    }
  };

  deleteAssignment = (idx) => {
    const { promos } = this.state;
    if (window.confirm("Xóa cấu hình khuyến mãi này?")) {
      fetch(
        urlapi +
          "/api/UserDiscountCode/deleteUserDiscountCode?discountCode=" +
          promos[idx].discountCode
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.status && data.status === "200") {
            this.setState((prev) => ({
              promos: prev.promos.filter((_, i) => i !== idx),
            }));
            alert("Xóa mã giảm giá cho người dùng thành công !");
          } else alert("Xóa mã giảm giá cho người dùng thất bại !");
          console.log("Response tạo phiếu từ server:", data);
          // cập nhật state nếu cần
        })
        .catch((error) => console.error("Lỗi POST:", error));
    }
  };

  handleFilter = (e) => this.setState({ filterText: e.target.value });

  render() {
    const { promos, filterText, showModal, form } = this.state;
    const filtered = promos.filter(
      (a) =>
        a.nameUser.includes(filterText) ||
        a.code.includes(filterText) ||
        a.nameCreater.includes(filterText)
    );

    const columns = [
      {
        name: "discountCode",
        selector: (row) => row.discountCode,
        sortable: true,
      },
      {
        name: "code",
        selector: (row) => row.code,
        sortable: true,
      },
      {
        name: "nameCreater",
        selector: (row) => row.nameCreater,
        sortable: true,
      },
      { name: "nameUser", selector: (row) => row.nameUser, sortable: true },
      {
        name: "discountOrPrice",
        selector: (row) => row.discountOrPrice,
        sortable: true,
      },
      {
        name: "minimumOrderValue",
        selector: (row) => row.minimumOrderValue,
        sortable: true,
      },
      { name: "expiry", selector: (row) => row.expiry },
      {
        name: "Actions",
        cell: (row, i) => (
          <>
            <button onClick={() => this.openModal(i)} className="btn-edit">
              Sửa
            </button>
            <button
              onClick={() => this.deleteAssignment(i)}
              className="btn-delete"
            >
              Xóa
            </button>
          </>
        ),
        ignoreRowClick: true,
        button: true,
      },
    ];

    return (
      <div className="">
        <h2>Quản lý Khuyến mãi theo Cửa hàng</h2>
        <div className="spm-toolbar">
          <input
            type="text"
            placeholder="Filter by store/product/promo"
            value={filterText}
            onChange={this.handleFilter}
            className="spm-search"
          />
          <button onClick={() => this.openModal()} className="spm-btn-add">
            Thêm cấu hình
          </button>
        </div>

        <DataTable
          columns={columns}
          data={filtered}
          pagination
          highlightOnHover
        />

        {showModal && (
          <div className="spm-modal" onClick={this.closeModal}>
            <div
              className="spm-modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <h3>
                {this.state.editingIndex == null ? "Thêm" : "Sửa"} Khuyến mãi
              </h3>
              <div class="form-group col-5">
                <div className="row">
                  <label>Tên khách hàng</label>
                  <div class="col-sm-8">
                    <div className="row form-inline">
                      <div className="d-flex align-items-center">
                        <div className="col-10">
                          <input
                            type="text"
                            class="form-control form-control-sm"
                            id="idProduct"
                            value={form.nameUser}
                            readOnly
                            disabled
                            style={{ width: "763px" }}
                          />
                        </div>
                      </div>
                      <ModalClient
                        isOpen={this.state.isOpenModalClient}
                        onClose={() =>
                          this.setState({ isOpenModalClient: false })
                        }
                        updateClient={(data) => this.updateClient(data)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <button
                  type="button"
                  onClick={this.handleOpenModalClient}
                  style={{
                    marginTop: "10px", // khoảng cách phía trên
                    padding: "5px 20px",
                    backgroundColor: "#007bff",
                    color: "#fff",
                    border: "none",
                    borderRadius: "10px",
                    cursor: "pointer",
                  }}
                >
                  Chọn Người dùng
                </button>
              </div>

              <label>
                Mã khuyến mãi:
                <input
                  type="text"
                  class="form-control form-control-sm"
                  id="idProduct"
                  name="code"
                  value={form.code}
                  style={{ width: "763px" }}
                  onChange={this.handleFormChange}
                />
              </label>
              <label>
                Giảm giá(% or VNĐ):
                <input
                  type="number"
                  class="form-control form-control-sm"
                  id="idProduct"
                  name="discountOrPrice"
                  value={form.discountOrPrice}
                  style={{ width: "763px" }}
                  onChange={this.handleFormChange}
                />
              </label>
              <label>
                Giá trị đơn hàng tối thiểu(VNĐ):
                <input
                  type="number"
                  class="form-control form-control-sm"
                  id="idProduct"
                  name="minimumOrderValue"
                  value={form.minimumOrderValue}
                  style={{ width: "763px" }}
                  onChange={this.handleFormChange}
                />
              </label>
              <label>
                Hạn sử dụng:
                <input
                  type="date"
                  name="expiry"
                  value={
                    form.expiry
                      ? new Date(form.expiry).toISOString().split("T")[0]
                      : ""
                  }
                  onChange={this.handleFormChange}
                />
              </label>

              <div className="spm-modal-actions">
                <button onClick={this.saveAssignment} className="spm-btn-save">
                  Lưu
                </button>
                <button onClick={this.closeModal} className="spm-btn-cancel">
                  Hủy
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
