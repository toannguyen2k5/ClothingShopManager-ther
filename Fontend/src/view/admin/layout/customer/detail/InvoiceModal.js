import React, { Component } from 'react';

class InvoiceModal extends Component {
  render() {
    const { invoice, onClose } = this.props;

    return (
      <div className="modal-overlay">
        <div className="modal">
          <h3>Chi tiết hóa đơn #{invoice.id}</h3>
          <p><strong>Ngày mua:</strong> {invoice.date}</p>
          <p><strong>Tổng tiền:</strong> {invoice.total.toLocaleString()}₫</p>
          <h4>Sản phẩm đã mua:</h4>
          <ul>
            {invoice.items.map((item, index) => (
              <li key={index}>
                {item.name} - SL: {item.quantity} - Đơn giá: {item.price.toLocaleString()}₫
              </li>
            ))}
          </ul>
          <button onClick={onClose}>Đóng</button>
        </div>
      </div>
    );
  }
}

export default InvoiceModal;
