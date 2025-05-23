import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import InvoiceModal from './InvoiceModal';
import './CustomerManager.css';

class CustomerDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedInvoice: null,
    };
  }

  openInvoiceModal = (invoice) => {
    this.setState({ selectedInvoice: invoice });
  };

  closeInvoiceModal = () => {
    this.setState({ selectedInvoice: null });
  };

  render() {
    const  customers =[
        {
          id: 1,
          name: 'Nguyễn Văn A',
          email: 'a@example.com',
          phone: '0901234567',
          address: 'Hà Nội',
          gender: 'Nam',
          dob: '1990-01-01',
          username: 'nguyenvana',
          createdAt: '2023-01-01',
          invoices: [
            {
              id: 101,
              date: '2023-03-15',
              total: 1500000,
              items: [
                { name: 'Sản phẩm A', quantity: 2, price: 500000 },
                { name: 'Sản phẩm B', quantity: 1, price: 500000 },
              ],
            },
            // Các hóa đơn khác
          ],
        },
        // Các khách hàng khác
      ];
    const {match } = this.props;
    const { selectedInvoice } = this.state;
    const customerId = parseInt(match.params.id, 10);
    const customer = customers.find((c) => c.id === customerId);

    if (!customer) {
      return <p>Khách hàng không tồn tại.</p>;
    }

    return (
      <div className="customer-detail">
        <h2>Thông tin khách hàng</h2>
        <p><strong>Họ tên:</strong> {customer.name}</p>
        <p><strong>Email:</strong> {customer.email}</p>
        <p><strong>SĐT:</strong> {customer.phone}</p>
        <p><strong>Địa chỉ:</strong> {customer.address}</p>
        <p><strong>Giới tính:</strong> {customer.gender}</p>
        <p><strong>Ngày sinh:</strong> {customer.dob}</p>
        <p><strong>Username:</strong> {customer.username}</p>
        <p><strong>Ngày tạo:</strong> {customer.createdAt}</p>

        <h3>Danh sách hóa đơn</h3>
        <table>
          <thead>
            <tr>
              <th>Mã HĐ</th>
              <th>Ngày mua</th>
              <th>Tổng tiền</th>
              <th>Chi tiết</th>
            </tr>
          </thead>
          <tbody>
            {customer.invoices.map((invoice) => (
              <tr key={invoice.id}>
                <td>{invoice.id}</td>
                <td>{invoice.date}</td>
                <td>{invoice.total.toLocaleString()}₫</td>
                <td>
                  <button onClick={() => this.openInvoiceModal(invoice)}>
                    Xem sản phẩm
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {selectedInvoice && (
          <InvoiceModal
            invoice={selectedInvoice}
            onClose={this.closeInvoiceModal}
          />
        )}
      </div>
    );
  }
}

export default withRouter(CustomerDetail);
