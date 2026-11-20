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
      editingDiscountCode: null,
      isOpenModalClient: false,
      form: {
        discountCode: "",
        code: "",
        nameCreater: "",
        idUser: "",
        nameUser: "",
        discountOrPrice: "",
        type: "PERCENT",
        maxDiscountValue: "",
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
    this.loadPromos();
  }

  loadPromos = () => {
    fetch(`${urlapi}/api/UserDiscountCode/sellectAll`)
      .then((response) => response.json())
      .then((data) => {
        if (data.status && data.status == "200") {
          this.setState({ promos: data.data });
        }
      })
      .catch((error) => {
        console.error("Lỗi khi fetch:", error);
      });
  };

  openModal = (discountCode = null) => {
    if (discountCode != null) {
      const promo = this.state.promos.find(
        (item) => item.discountCode === discountCode
      );
      if (!promo) return;
      this.setState(
        {
          editingDiscountCode: discountCode,
          form: {
            discountCode: promo.discountCode,
            code: promo.code,
            nameCreater: promo.nameCreater,
            idUser: promo.idUser,
            nameUser: promo.nameUser,
            discountOrPrice: promo.discountOrPrice,
            type: promo.type || "VALUE",
            maxDiscountValue: promo.maxDiscountValue || "",
            minimumOrderValue: promo.minimumOrderValue,
            expiry: promo.expiry,
          },
          showModal: true,
        }
      );
    } else {
      this.setState({
        editingDiscountCode: null,
        form: {
          discountCode: "",
          code: "",
          nameCreater: "",
          idUser: "",
          nameUser: "",
          discountOrPrice: "",
          type: "PERCENT",
          maxDiscountValue: "",
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
    const { editingDiscountCode, form } = this.state;
    const discount = Number(form.discountOrPrice);
    const minimumOrderValue = Number(form.minimumOrderValue);
    const maxDiscountValue = Number(form.maxDiscountValue || 0);
    if (
      !form.code.trim() ||
      !form.idUser ||
      !form.expiry ||
      !Number.isInteger(discount) ||
      discount < 0 ||
      (form.type === "PERCENT" && discount > 100) ||
      !Number.isInteger(minimumOrderValue) ||
      minimumOrderValue < 0 ||
      !Number.isInteger(maxDiscountValue) ||
      maxDiscountValue < 0
    ) {
      alert("Vui lòng kiểm tra mã, loại giảm giá và các giá trị đã nhập.");
      return;
    }

    const payload = {
      discountCode: editingDiscountCode,
      code: form.code.trim(),
      idUser: form.idUser,
      idCreater: this.props.state_data.user_info.id_user,
      discount,
      type: form.type,
      maxDiscountValue: form.type === "PERCENT" ? maxDiscountValue : 0,
      minimumOrderValue,
      expiry: form.expiry,
    };

    if (editingDiscountCode == null) {
      const req = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      };
      fetch(urlapi + "/api/UserDiscountCode/insertUserDiscountCode", req)
        .then((response) => response.json())
        .then((data) => {
          if (data.status && data.status === "200") {
            this.setState({ showModal: false }, this.loadPromos);
            alert("Tạo mã giảm giá cho người dùng thành công !");
          } else alert("Tạo mã giảm giá cho người dùng thất bại !");
        })
        .catch((error) => console.error("Lỗi POST:", error));
    } else {
      const req = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      };
      fetch(urlapi + "/api/UserDiscountCode/updateUserDiscountCode", req)
        .then((response) => response.json())
        .then((data) => {
          if (data.status && data.status === "200") {
            this.setState({ showModal: false }, this.loadPromos);
            alert("Sửa mã giảm giá cho người dùng thành công !");
          } else alert("Sửa mã giảm giá cho người dùng thất bại !");
        })
        .catch((error) => console.error("Lỗi POST:", error));
    }
  };

  deleteAssignment = (discountCode) => {
    if (window.confirm("Xóa cấu hình khuyến mãi này?")) {
      fetch(
        urlapi +
          "/api/UserDiscountCode/deleteUserDiscountCode?discountCode=" +
          encodeURIComponent(discountCode)
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.status && data.status === "200") {
            this.setState((prev) => ({
              promos: prev.promos.filter(
                (promo) => promo.discountCode !== discountCode
              ),
            }));
            alert("Xóa mã giảm giá cho người dùng thành công !");
          } else alert("Xóa mã giảm giá cho người dùng thất bại !");
        })
        .catch((error) => console.error("Lỗi POST:", error));
    }
  };

  handleFilter = (e) => this.setState({ filterText: e.target.value });

  render() {
    const { promos, filterText, showModal, form } = this.state;
    const filtered = promos.filter(
      (a) =>
        (a.nameUser || "").includes(filterText) ||
        (a.code || "").includes(filterText) ||
        (a.nameCreater || "").includes(filterText)
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
        name: "Loại giảm giá",
        selector: (row) => row.type || "VALUE",
      },
      {
        name: "Giá trị giảm",
        selector: (row) =>
          row.type === "PERCENT"
            ? `${row.discountOrPrice}%`
            : `${Number(row.discountOrPrice).toLocaleString()}đ`,
        sortable: true,
      },
      {
        name: "Giảm tối đa",
        selector: (row) =>
          row.maxDiscountValue
            ? `${Number(row.maxDiscountValue).toLocaleString()}đ`
            : "Không giới hạn",
      },
      {
        name: "minimumOrderValue",
        selector: (row) => row.minimumOrderValue,
        sortable: true,
      },
      { name: "expiry", selector: (row) => row.expiry },
      {
        name: "Actions",
        cell: (row) => (
          <>
            <button
              onClick={() => this.openModal(row.discountCode)}
              className="btn-edit"
            >
              Sửa
            </button>
            <button
              onClick={() => this.deleteAssignment(row.discountCode)}
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
                {this.state.editingDiscountCode == null ? "Thêm" : "Sửa"} Khuyến mãi
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
                Loại giảm giá:
                <select
                  className="form-control form-control-sm"
                  name="type"
                  value={form.type}
                  onChange={this.handleFormChange}
                >
                  <option value="PERCENT">Phần trăm</option>
                  <option value="VALUE">Số tiền cố định</option>
                </select>
              </label>
              <label>
                Giá trị giảm {form.type === "PERCENT" ? "(%)" : "(VNĐ)"}:
                <input
                  type="number"
                  class="form-control form-control-sm"
                  id="idProduct"
                  name="discountOrPrice"
                  value={form.discountOrPrice}
                  min="0"
                  max={form.type === "PERCENT" ? "100" : undefined}
                  step="1"
                  style={{ width: "763px" }}
                  onChange={this.handleFormChange}
                />
              </label>
              {form.type === "PERCENT" && (
                <label>
                  Giảm tối đa (VNĐ, 0 = không giới hạn):
                  <input
                    type="number"
                    class="form-control form-control-sm"
                    name="maxDiscountValue"
                    value={form.maxDiscountValue}
                    min="0"
                    step="1"
                    style={{ width: "763px" }}
                    onChange={this.handleFormChange}
                  />
                </label>
              )}
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
