import React, { Component } from "react";
import DataTable from "react-data-table-component";
import "./StorePromoManager.css";

export default class StorePromoManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stores: [],            // list of stores
      products: [],          // list of products
      promos: [],            // list of promotions
      assignments: [],       // { storeId, productId, promoCode, startDate, endDate }
      filterText: '',
      showModal: false,
      editingIndex: null,
      form: {
        storeId: '',
        productId: '',
        promoCode: '',
        startDate: '',
        endDate: ''
      }
    };
  }

  componentDidMount() {
    // simulate fetch
    this.setState({
      stores: [
        { id: 'S1', name: 'Store A' },
        { id: 'S2', name: 'Store B' }
      ],
      products: [
        { id: 'P1', name: 'Áo thun trắng' },
        { id: 'P2', name: 'Quần jean xanh' }
      ],
      promos: [
        { code: 'TGDD10', desc: '10% off' },
        { code: 'DMX300', desc: '300K off' }
      ]
    });
  }

  openModal = (idx = null) => {
    if (idx != null) {
      this.setState({ editingIndex: idx, form: { ...this.state.assignments[idx] }, showModal: true });
    } else {
      this.setState({ editingIndex: null, form: { storeId: '', productId: '', promoCode: '', startDate: '', endDate: '' }, showModal: true });
    }
  };

  closeModal = () => this.setState({ showModal: false });

  handleFormChange = e => {
    const { name, value } = e.target;
    this.setState(prev => ({ form: { ...prev.form, [name]: value } }));
  };

  saveAssignment = () => {
    const { assignments, editingIndex, form } = this.state;
    if (editingIndex == null) {
      this.setState({ assignments: [...assignments, form], showModal: false });
    } else {
      const arr = [...assignments];
      arr[editingIndex] = form;
      this.setState({ assignments: arr, showModal: false });
    }
  };

  deleteAssignment = idx => {
    if (window.confirm('Xóa cấu hình khuyến mãi này?')) {
      this.setState(prev => ({ assignments: prev.assignments.filter((_, i) => i !== idx) }));
    }
  };

  handleFilter = e => this.setState({ filterText: e.target.value });

  render() {
    const { stores, products, promos, assignments, filterText, showModal, form } = this.state;
    const filtered = assignments.filter(a =>
      a.storeId.includes(filterText) || a.productId.includes(filterText) || a.promoCode.includes(filterText)
    );

    const columns = [
      { name: 'Store', selector: row => stores.find(s => s.id === row.storeId)?.name, sortable: true },
      { name: 'Product', selector: row => products.find(p => p.id === row.productId)?.name, sortable: true },
      { name: 'Promo Code', selector: row => row.promoCode, sortable: true },
      { name: 'Start Date', selector: row => row.startDate },
      { name: 'End Date', selector: row => row.endDate },
      {
        name: 'Actions',
        cell: (row, i) => (
          <>
            <button onClick={() => this.openModal(i)} className="btn-edit">Sửa</button>
            <button onClick={() => this.deleteAssignment(i)} className="btn-delete">Xóa</button>
          </>
        ),
        ignoreRowClick: true,
        button: true
      }
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
          <button onClick={() => this.openModal()} className="spm-btn-add">Thêm cấu hình</button>
        </div>

        <DataTable
          columns={columns}
          data={filtered}
          pagination
          highlightOnHover
        />

        {showModal && (
          <div className="spm-modal" onClick={this.closeModal}>
            <div className="spm-modal-content" onClick={e => e.stopPropagation()}>
              <h3>{this.state.editingIndex == null ? 'Thêm' : 'Sửa'} Khuyến mãi</h3>
              <label>Cửa hàng:
                <select name="storeId" value={form.storeId} onChange={this.handleFormChange}>
                  <option value="">--Chọn--</option>
                  {stores.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
                </select>
              </label>
              <label>Sản phẩm:
                <select name="productId" value={form.productId} onChange={this.handleFormChange}>
                  <option value="">--Chọn--</option>
                  {products.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
                </select>
              </label>
              <label>Mã KM:
                <select name="promoCode" value={form.promoCode} onChange={this.handleFormChange}>
                  <option value="">--Chọn--</option>
                  {promos.map(pr => <option key={pr.code} value={pr.code}>{pr.code} - {pr.desc}</option>)}
                </select>
              </label>
              <label>Start Date:<input type="date" name="startDate" value={form.startDate} onChange={this.handleFormChange}/></label>
              <label>End Date:<input type="date" name="endDate" value={form.endDate} onChange={this.handleFormChange}/></label>
              <div className="spm-modal-actions">
                <button onClick={this.saveAssignment} className="spm-btn-save">Lưu</button>
                <button onClick={this.closeModal} className="spm-btn-cancel">Hủy</button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
