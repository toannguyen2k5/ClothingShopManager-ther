import React, { Component } from "react";

export default class PromoCodeForm extends Component {
  render() {
    const { form, onChange, onOpenProductModal, selectedProduct } = this.props;
    return (
      <div>
        <label>
          Code:
          <input name="eventCode" value={form.eventCode} onChange={onChange} />
        </label>
        <label>
          Mã sản phẩm:
          <button
            type="button"
            style={{ borderRadius: "10px" }}
            onClick={onOpenProductModal}
          >
            Chọn sản phẩm
          </button>
          <input type="text" disabled value={form.idProduct || ""} />
        </label>
        <label>
          Mô tả:
          <input
            name="description"
            value={form.description}
            onChange={onChange}
          />
        </label>
        <label>
          Giảm giá:
          <input name="decrease" value={form.decrease} onChange={onChange} />
        </label>
        <label>
          Số lượng tối thiểu:
          <input
            name="quantityLimit"
            type="number"
            value={form.quantityLimit}
            onChange={onChange}
          />
        </label>
        <label>
          Kết thúc:
          <input
            name="eventDeadline"
            type="date"
            value={
              form.eventDeadline
                ? new Date(form.eventDeadline).toISOString().split("T")[0]
                : ""
            }
            onChange={onChange}
          />
        </label>
      </div>
    );
  }
}
