import React, { Component } from "react";
import PromoCodeTable from "./PromoCodeTable";
import PromoCodeModal from "./PromoCodeModal";
import { urlapi } from "../../../../setting/store/const";
import "./PromoCodeManager.css";

export default class PromoCodeManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      codes: [],
      filterText: "",
      showModal: false,
      editingIndex: null,
      selectedProduct: {},
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    fetch(urlapi + "/api/DiscountEvent/sellectAll/all/all/")
      .then((res) => res.json())
      .then((data) => {
        if (data.status && data.status === "200") {
          this.setState({ codes: data.data });
        }
      })
      .catch((err) => console.error(err));
  };

  handleOpenModal = (index = null) => {
    this.setState({ editingIndex: index, showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };
  handleSave = (newData, editingIndex) => {
    if (editingIndex === null) {
      const req = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          idEvent: null,
          eventCode: newData.eventCode,
          idProduct: newData.idProduct,
          decrease: newData.decrease,
          quantityLimit: newData.quantityLimit,
          eventDeadline: newData.eventDeadline,
          description: newData.description,
        }),
      };
      fetch(urlapi + "/api/DiscountEvent/insertDiscountEvent", req)
        .then((response) => response.json())
        .then((data) => {
          if (data.status === "200") {
            this.setState((prev) => ({
              codes: [...prev.codes, newData],
              showModal: false,
            }));
            alert("Thêm mã giảm giá thành công !");
          } else alert("Thêm mã giảm giá thất bại !");
          console.log("Response từ server:", data);
        })
        .catch((error) => console.error("Lỗi POST:", error));
    } else {
      // Cập nhật
      const req = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          idEvent: newData.idEvent,
          eventCode: newData.eventCode,
          idProduct: newData.idProduct,
          decrease: newData.decrease,
          quantityLimit: newData.quantityLimit,
          eventDeadline: newData.eventDeadline,
          description: newData.description,
        }),
      };
      fetch(urlapi + "/api/DiscountEvent/updateDiscountEvent", req)
        .then((response) => response.json())
        .then((data) => {
          if (data.status === "200") {
            const updated = [...this.state.codes];
            updated[editingIndex] = newData;
            this.setState({ codes: updated, showModal: false });
            alert("Sửa mã giảm giá thành công !");
          } else alert("Sửa mã giảm giá thất bại !");
          console.log("Response từ server:", data);
        })
        .catch((error) => console.error("Lỗi POST:", error));
    }
  };

  handleDelete = (index) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa mã này?")) {
      fetch(
        urlapi +
          "/api/DiscountEvent/deleteDiscountEvent?idDiscountEvent=" +
          this.state.codes[index].idEvent
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.status && data.status === "200") {
            const updated = [...this.state.codes];
            updated.splice(index, 1);
            this.setState({ codes: updated });
          }
        })
        .catch((err) => console.error(err));
    }
  };

  render() {
    const { codes, filterText, showModal, editingIndex } = this.state;
    const filteredCodes = codes.filter(
      (item) =>
        item.eventCode.toLowerCase().includes(filterText.toLowerCase()) ||
        item.description.toLowerCase().includes(filterText.toLowerCase())
    );

    return (
      <div>
        <h2>Quản lý Mã Khuyến Mãi</h2>
        <div className="pm-toolbar">
          <input
            type="text"
            placeholder="Tìm kiếm..."
            value={filterText}
            onChange={(e) => this.setState({ filterText: e.target.value })}
            className="pm-search"
          />
          <button
            onClick={() => this.handleOpenModal()}
            className="pm-btn pm-btn-add"
          >
            Thêm mã
          </button>
        </div>
        <PromoCodeTable
          data={filteredCodes}
          onEdit={this.handleOpenModal}
          onDelete={this.handleDelete}
        />
        {showModal && (
          <PromoCodeModal
            onClose={this.handleCloseModal}
            onSave={this.handleSave}
            editingIndex={editingIndex}
            data={editingIndex !== null ? codes[editingIndex] : null}
          />
        )}
      </div>
    );
  }
}
