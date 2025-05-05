// PromoCodeManager.jsx
import React, { Component } from 'react';
import DataTable from 'react-data-table-component';
import './PromoCodeManager.css';

export default class PromoCodeManager extends Component {
  state = {
    codes: [],
    filterText: '',
    showModal: false,
    editingIndex: null,
    form: {
      code: '', description: '', discount: '', minOrder: '', start: '', end: '', active: true
    }
  };

  componentDidMount() {
    this.setState({
      codes: [
        { code: 'TGDD10', description: 'Giảm 10% đơn ≥1.000.000₫', discount: '10%', minOrder: 1000000, start: '2025-06-01', end: '2025-06-30', active: true },
        { code: 'DMX300', description: 'Giảm 300K đơn ≥3.000.000₫', discount: '300K', minOrder: 3000000, start: '2025-05-15', end: '2025-05-31', active: true }
      ]
    });
  }

  handleFormChange = e => {
    const { name, value, type, checked } = e.target;
    this.setState(prev => ({
      form: { ...prev.form, [name]: type === 'checkbox' ? checked : value }
    }));
  };

  openModal = idx => {
    if (idx != null) {
      this.setState({ editingIndex: idx, form: { ...this.state.codes[idx] }, showModal: true });
    } else {
      this.setState({
        editingIndex: null,
        form: { code: '', description: '', discount: '', minOrder: '', start: '', end: '', active: true },
        showModal: true
      });
    }
  };

  closeModal = () => this.setState({ showModal: false });

  saveCode = () => {
    const { editingIndex, form, codes } = this.state;
    if (editingIndex == null) {
      this.setState({ codes: [...codes, form], showModal: false });
    } else {
      const updated = [...codes];
      updated[editingIndex] = form;
      this.setState({ codes: updated, showModal: false });
    }
  };

  deleteCode = index => {
    if (window.confirm('Bạn có chắc chắn xóa mã này?')) {
      const updated = [...this.state.codes];
      updated.splice(index, 1);
      this.setState({ codes: updated });
    }
  };

  render() {
    const { codes, filterText, form, showModal } = this.state;
    const filteredCodes = codes.filter(item =>
      item.code.toLowerCase().includes(filterText.toLowerCase()) ||
      item.description.toLowerCase().includes(filterText.toLowerCase())
    );

    const columns = [
      { name: 'Code', selector: row => row.code, sortable: true },
      { name: 'Mô tả', selector: row => row.description },
      { name: 'Giảm', selector: row => row.discount },
      { name: 'Tối thiểu', selector: row => `${row.minOrder.toLocaleString()}₫` },
      { name: 'Hiệu lực', selector: row => `${row.start} → ${row.end}` },
      { name: 'Trạng thái', selector: row => row.active ? 'Hoạt động' : 'Khóa', sortable: true },
      {
        name: 'Hành động',
        cell: (row, index) => (
          <>
            <button onClick={() => this.openModal(index)} className="pm-btn">Sửa</button>
            <button onClick={() => this.deleteCode(index)} className="pm-btn pm-btn-del">Xóa</button>
          </>
        ),
        ignoreRowClick: true,
        allowOverflow: true,
        button: true
      }
    ];

    return (
      <div className="">
        <h2>Quản lý Mã Khuyến Mãi</h2>
        <div className="pm-toolbar">
          <input
            type="text"
            placeholder="Tìm kiếm..."
            value={filterText}
            onChange={e => this.setState({ filterText: e.target.value })}
            className="pm-search"
          />
          <button onClick={() => this.openModal()} className="pm-btn pm-btn-add">Thêm mã</button>
        </div>

        <DataTable
          columns={columns}
          data={filteredCodes}
          pagination
          highlightOnHover
          striped
        />

        {showModal && (
          <div className="pm-modal" onClick={this.closeModal}>
            <div className="pm-modal-content" onClick={e => e.stopPropagation()}>
              <h3>{this.state.editingIndex == null ? 'Thêm Mã' : 'Sửa Mã'}</h3>
              <label>Code:<input name="code" value={form.code} onChange={this.handleFormChange} /></label>
              <label>Mô tả:<input name="description" value={form.description} onChange={this.handleFormChange} /></label>
              <label>Giảm giá:<input name="discount" value={form.discount} onChange={this.handleFormChange} /></label>
              <label>Tối thiểu:<input name="minOrder" type="number" value={form.minOrder} onChange={this.handleFormChange} /></label>
              <label>Bắt đầu:<input name="start" type="date" value={form.start} onChange={this.handleFormChange} /></label>
              <label>Kết thúc:<input name="end" type="date" value={form.end} onChange={this.handleFormChange} /></label>
              <label><input type="checkbox" name="active" checked={form.active} onChange={this.handleFormChange} /> Hoạt động</label>
              <div className="pm-modal-actions">
                <button onClick={this.saveCode} className="pm-btn pm-btn-add">Lưu</button>
                <button onClick={this.closeModal} className="pm-btn pm-btn-del">Hủy</button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
