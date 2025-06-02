import React, { Component } from "react";
import PromoCodeForm from "./PromoCodeForm";
import ModalProduct from "../../component/sub_layout/modal/modal_product/ModalProduct";

export default class PromoCodeModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: props.data
        ? { ...props.data }
        : {
            idEvent: "",
            eventCode: "",
            description: "",
            decrease: "",
            quantityLimit: "",
            eventDeadline: "",
            idProduct: "",
          },
      isOpenModalProduct: false,
      selectedProduct: {},
    };
  }

  handleFormChange = (e) => {
    const { name, value } = e.target;
    this.setState((prev) => ({
      form: { ...prev.form, [name]: value },
    }));
  };

  handleProductSelect = (data) => {
    this.setState((prev) => ({
      selectedProduct: data,
      form: { ...prev.form, idProduct: data.idProduct },
      isOpenModalProduct: false,
    }));
  };

  handleSave = () => {
    this.props.onSave(this.state.form, this.props.editingIndex);
  };

  render() {
    const { form, isOpenModalProduct, selectedProduct } = this.state;
    const { onClose } = this.props;
    console.log("data form :", form);
    return (
      <div className="pm-modal" onClick={onClose}>
        <div className="pm-modal-content" onClick={(e) => e.stopPropagation()}>
          <h3>{this.props.editingIndex === null ? "Thêm Mã" : "Sửa Mã"}</h3>
          <PromoCodeForm
            form={form}
            onChange={this.handleFormChange}
            onOpenProductModal={() =>
              this.setState({ isOpenModalProduct: true })
            }
            selectedProduct={selectedProduct}
          />
          <div className="pm-modal-actions">
            <button onClick={this.handleSave} className="pm-btn pm-btn-add">
              Lưu
            </button>
            <button onClick={onClose} className="pm-btn pm-btn-del">
              Hủy
            </button>
          </div>
          {isOpenModalProduct && (
            <ModalProduct
              isOpen={isOpenModalProduct}
              onClose={() => this.setState({ isOpenModalProduct: false })}
              updateProduct={this.handleProductSelect}
            />
          )}
        </div>
      </div>
    );
  }
}
