import React, { Component } from 'react';
import DataTable from 'react-data-table-component';
import './CustomerManager.css';

class CustomerManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: [
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
          totalOrders: 10,
          cancelledOrders: 2,
          totalValue: 15000000,
        },
        {
          id: 2,
          name: 'Trần Thị B',
          email: 'b@example.com',
          phone: '0912345678',
          address: 'TP.HCM',
          gender: 'Nữ',
          dob: '1992-05-15',
          username: 'tranthib',
          createdAt: '2023-02-10',
          totalOrders: 5,
          cancelledOrders: 1,
          totalValue: 8000000,
        },
      ],
      searchQuery: '',
      showModal: false,
      isEditing: false,
      currentCustomer: {
        id: null,
        name: '',
        email: '',
        phone: '',
        address: '',
        gender: 'Nam',
        dob: '',
        username: '',
        createdAt: '',
        totalOrders: 0,
        cancelledOrders: 0,
        totalValue: 0,
      },
    };
  }

  openAddModal = () => {
    this.setState({
      showModal: true,
      isEditing: false,
      currentCustomer: {
        id: null,
        name: '',
        email: '',
        phone: '',
        address: '',
        gender: 'Nam',
        dob: '',
        username: '',
        createdAt: '',
        totalOrders: 0,
        cancelledOrders: 0,
        totalValue: 0,
      },
    });
  };

  openEditModal = (row) => {
    this.setState({
      showModal: true,
      isEditing: true,
      currentCustomer: { ...row },
    });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      currentCustomer: {
        ...prevState.currentCustomer,
        [name]: value,
      },
    }));
  };

  handleSearchChange = (e) => {
    this.setState({ searchQuery: e.target.value });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    const { customers, currentCustomer, isEditing } = this.state;
    if (isEditing) {
      this.setState({
        customers: customers.map((cust) =>
          cust.id === currentCustomer.id ? currentCustomer : cust
        ),
        showModal: false,
      });
    } else {
      const newCustomer = {
        ...currentCustomer,
        id: customers.length > 0 ? customers[customers.length - 1].id + 1 : 1,
      };
      this.setState({
        customers: [...customers, newCustomer],
        showModal: false,
      });
    }
  };

  handleDelete = (id) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa khách hàng này?')) {
      this.setState((prevState) => ({
        customers: prevState.customers.filter((cust) => cust.id !== id),
      }));
    }
  };

  render() {
    const { customers, searchQuery, showModal, currentCustomer, isEditing } = this.state;

    const filteredCustomers = customers.filter((cust) =>
      cust.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cust.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cust.phone.includes(searchQuery)
    );

    const columns = [
        { name: 'Username', selector: (row) => row.username, width: '180px',},
        { name: 'Họ tên', selector: (row) => row.name, sortable: true, wrap: true, width: '150px' },
        { name: 'Email', selector: (row) => row.email, sortable: true, wrap: true, width: '250px' },
        { name: 'SĐT', selector: (row) => row.phone, wrap: true, width: '110px' },
        { name: 'Địa chỉ', selector: (row) => row.address, wrap: true, width: '255px' },
        // { name: 'Giới tính', selector: (row) => row.gender },
        // { name: 'Ngày sinh', selector: (row) => row.dob },
        { name: 'Ngày tạo', selector: (row) => row.createdAt, width: '150px' },
        { name: 'Đơn mua', selector: (row) => row.totalOrders, width: '100px' },
        { name: 'Đơn hủy', selector: (row) => row.cancelledOrders, width: '100px' },
        {
            name: 'Tổng giá trị',
            selector: (row) => row.totalValue.toLocaleString() + '₫',
            sortable: true,
            right: true, width: '150px'
        },
        {
            name: 'Hành động',
            cell: (row) => (
            <div className="action-buttons">
                <button className='edit-btn' onClick={() => window.location.href = (`/admin/manager/customer/detail/${row.id}/`)}><i class="bi bi-eye"></i></button>
                <button onClick={() => this.openEditModal(row)} className="edit-btn">  <i class="bi bi-pencil"></i></button>
                <button onClick={() => this.handleDelete(row.id)} className="delete-btn"><i class="bi bi-trash"></i></button>
            </div>
            ),
            ignoreRowClick: true,
            allowOverflow: true,
            button: true, width: '150px'
        },
    ];

    return (
        
      <div className="customer-manager">
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css"/>

        <h2>Quản lý Khách hàng</h2>
        <div className="toolbar">
          <button onClick={this.openAddModal} className="add-btn">Thêm khách hàng</button>
          <input
            type="text"
            placeholder="Tìm kiếm khách hàng..."
            value={searchQuery}
            onChange={this.handleSearchChange}
            className="search-input"
          />
        </div>
        <DataTable
          columns={columns}
          data={filteredCustomers}
          pagination
          highlightOnHover
          fixedHeader
          responsive
          striped
          dense
        />

        {showModal && (

            

          <div className="modal-overlay">
            <div className="modal modal-dialog modal-dialog-centered">
              <h3>{isEditing ? 'Chỉnh sửa Khách hàng' : 'Thêm Khách hàng'}</h3>
              <form onSubmit={this.handleFormSubmit} className="form">
              <div class="row">
                    <div class="col">
                    <label>Tên đăng nhập:</label><p>{currentCustomer.username}</p>
                    </div>
                    <div class="col">
                    <label>Ngày tạo: </label><p>{currentCustomer.createdAt}</p>
                    </div>
                </div>
                <label>Họ tên: </label><p>{currentCustomer.name}</p>
                <label>Email: </label><p>{currentCustomer.email}</p>
                
                <label>Địa chỉ: </label><p>{currentCustomer.address}</p>
                <div class="row">
                    <div class="col-4">
                    <label>Số điện thoại: </label><p>{currentCustomer.phone}</p>
                    </div>
                    <div class="col-4">
                    <label>Giới tính:</label><p>{currentCustomer.gender}</p>
                    </div>
                    <div class="col-4">
                    <label>Ngày sinh: </label><p>{currentCustomer.dob}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-4">
                    <label>Đơn đã mua: </label><p>{currentCustomer.totalOrders}</p>
                    </div>
                    <div class="col-4">
                    <label>Đơn hủy: </label><p>{currentCustomer.cancelledOrders}</p>
                    </div>
                    <div class="col-4">
                    <label>Tổng giá trị: </label><p>{currentCustomer.totalValue.toLocaleString()}đ</p>
                    </div>
                </div>
                <div class="row">
                <div>
                    <label>Trạng Thái Tài Khoản</label>
                    <select name="status" onChange={this.handleInputChange}>
                    <option>Hoạt động</option>
                    <option>Khóa 1 Ngày</option>
                    <option>Khóa 1 Tuần</option>
                    <option>Khóa 1 Tháng</option>
                    <option>Khóa vĩnh viễn</option>
                    </select>
                </div>
                </div>
                <div className="modal-actions">
                  <button type="submit" className="save-btn">Lưu</button>
                  <button type="button" onClick={this.closeModal} className="cancel-btn">Hủy</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default CustomerManager;
