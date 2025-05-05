import React, { Component } from 'react';
import DataTable from 'react-data-table-component';
import './AdminManager.css';

export default class AdminManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      admins: [],
      showModal: false,
      newAdmin: {
        name: '',
        email: '',
        role: 'Quản trị viên'
      },
      filterText: ''
    };
  }

  componentDidMount() {
    this.setState({
      admins: [
        { id: 1, name: 'Nguyễn Văn A', email: 'adminA@example.com', role: 'Super Admin', status: 'Hoạt động' },
        { id: 2, name: 'Trần Thị B', email: 'adminB@example.com', role: 'Quản trị viên', status: 'Hoạt động' }
      ]
    });
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState(prev => ({
      newAdmin: { ...prev.newAdmin, [name]: value }
    }));
  };

  openModal = () => this.setState({ showModal: true });

  closeModal = () => this.setState({ showModal: false, newAdmin: { name: '', email: '', role: 'Quản trị viên' } });

  addAdmin = () => {
    const { newAdmin, admins } = this.state;
    if (newAdmin.name && newAdmin.email) {
      const id = admins.length + 1;
      this.setState({
        admins: [...admins, { ...newAdmin, id, status: 'Hoạt động' }],
        showModal: false,
        newAdmin: { name: '', email: '', role: 'Quản trị viên' }
      });
    }
  };

  hideAdmin = (id) => {
    this.setState(prev => ({
      admins: prev.admins.map(admin =>
        admin.id === id ? { ...admin, status: 'Ẩn' } : admin
      )
    }));
  };

  handleFilterChange = (e) => this.setState({ filterText: e.target.value });

  render() {
    const { admins, showModal, newAdmin, filterText } = this.state;

    const filtered = admins.filter(admin =>
      admin.name.toLowerCase().includes(filterText.toLowerCase()) ||
      admin.email.toLowerCase().includes(filterText.toLowerCase())
    );

    const columns = [
      { name: 'ID', selector: row => row.id, width: '70px' },
      { name: 'Tên', selector: row => row.name, sortable: true },
      { name: 'Email', selector: row => row.email },
      { name: 'Vai trò', selector: row => row.role },
      { name: 'Trạng thái', selector: row => row.status },
      {
        name: 'Hành động',
        cell: row => (
          <button onClick={() => this.hideAdmin(row.id)} className="btn-hide">
            Ẩn
          </button>
        ),
        width: '100px'
      }
    ];

    return (
      <div className="admin-manager">
        <h2>Quản lý Quản trị viên</h2>
        <div className="admin-toolbar">
          <input
            type="text"
            placeholder="Tìm theo tên hoặc email..."
            className="admin-search"
            value={filterText}
            onChange={this.handleFilterChange}
          />
          <button onClick={this.openModal} className="btn-add-admin">+ Thêm</button>
        </div>

        <DataTable
          columns={columns}
          data={filtered}
          pagination
          highlightOnHover
        />

        {showModal && (
          <div className="admin-modal-overlay" onClick={this.closeModal}>
            <div className="admin-modal" onClick={(e) => e.stopPropagation()}>
              <h3>Thêm quản trị viên</h3>
              <label>Họ tên:
                <input type="text" name="name" value={newAdmin.name} onChange={this.handleInputChange} />
              </label>
              <label>Email:
                <input type="email" name="email" value={newAdmin.email} onChange={this.handleInputChange} />
              </label>
              <label>Vai trò:
                <select name="role" value={newAdmin.role} onChange={this.handleInputChange}>
                  <option value="Super Admin">Super Admin</option>
                  <option value="Quản trị viên">Quản trị viên</option>
                </select>
              </label>
              <div className="admin-modal-actions">
                <button onClick={this.addAdmin} className="btn-save">Lưu</button>
                <button onClick={this.closeModal} className="btn-cancel">Hủy</button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
