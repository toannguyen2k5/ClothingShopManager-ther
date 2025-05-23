import React, { Component } from "react";
import DataTable from "react-data-table-component";
import "./PurchaseSlipList.css";

export default class PurchaseSlipList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slips: [],
      loading: true,
      error: null,
      searchText: '',
      selectedSlipId: null,
      slipItems: [],
      itemsLoading: false,
      showModal: false,
      itemSearchText: '',
      statusOptions: ['Chưa duyệt', 'Đã duyệt', 'Đang giao hàng','hoàn thành'],
      selectedStatus: ''
    };
  }

  componentDidMount() {
    this.fetchSlips();
  }

  fetchSlips = async () => {
    const data = [
      { idPurchaseSlip: 'PS001', idCreater: 'UserA', idSupplier: 'SuppA', dayCreate: '2025-05-01', totalBill: 500000, approveStatus: 'Chưa duyệt' },
      { idPurchaseSlip: 'PS002', idCreater: 'UserB', idSupplier: 'SuppB', dayCreate: '2025-05-02', totalBill: 750000, approveStatus: 'Đã duyệt' }
    ];
    this.setState({ slips: data, loading: false });
  }

  fetchSlipItems = (slipId) => {
    this.setState({ itemsLoading: true, selectedSlipId: slipId, showModal: true });
    const items = [
      { shopId: 'ShopA', productId: 'P001', name: 'Áo thun trắng', quantity: 2, unitPrice: 120000 },
      { shopId: 'ShopA', productId: 'P002', name: 'Quần jean xanh', quantity: 1, unitPrice: 350000 },
      { shopId: 'ShopB', productId: 'P003', name: 'Áo khoác đen', quantity: 3, unitPrice: 500000 }
    ];
    this.setState({ slipItems: items, itemsLoading: false });
  }

  closeModal = () => {
    this.setState({ showModal: false, selectedSlipId: null, slipItems: [], itemSearchText: '' });
  }

  handleSearch = (e) => {
    this.setState({ searchText: e.target.value });
  }

  handleItemSearch = (e) => {
    this.setState({ itemSearchText: e.target.value });
  }

  handleEditSlip = (slip) => {
    console.log('Edit slip', slip);
  }

  handleDeleteSlip = (slipId) => {
    if (window.confirm('Xóa phiếu ' + slipId + '?')) {
      this.setState(prev => ({ slips: prev.slips.filter(s => s.idPurchaseSlip !== slipId) }));
    }
  }

  handleEditItem = (item) => {
    console.log('Edit item', item);
  }

  handleDeleteItem = (index) => {
    this.setState(prev => ({ slipItems: prev.slipItems.filter((_, i) => i !== index) }));
  }

  handleStatusChange = (e) => {
    const updatedStatus = e.target.value;
    this.setState(prev => ({
      slips: prev.slips.map(slip =>
        slip.idPurchaseSlip === prev.selectedSlipId ? { ...slip, approveStatus: updatedStatus } : slip
      )
    }));
  }
  handleUpdateStatus = ()=>{

  }

  render() {
    const { slips, loading, searchText, showModal, selectedSlipId, slipItems, itemsLoading, itemSearchText, statusOptions } = this.state;

    const filteredSlips = slips.filter(slip =>
      slip.idPurchaseSlip.includes(searchText) ||
      slip.idCreater.toLowerCase().includes(searchText.toLowerCase()) ||
      slip.idSupplier.toLowerCase().includes(searchText.toLowerCase())
    );

    const selectedSlip = slips.find(s => s.idPurchaseSlip === selectedSlipId);

    const slipColumns = [
      { name: 'ID Phiếu', selector:  (row) => row.idPurchaseSlip, sortable: true },
      { name: 'Người tạo', selector:  (row) => row.idCreater, sortable: true },
      { name: 'Nhà cung cấp', selector:  (row) => row.idSupplier, sortable: true },
      { name: 'Ngày tạo', selector: (row) => row.dayCreate, sortable: true },
      { name: 'Tổng tiền', selector: row => row.totalBill, format: row => row.totalBill.toLocaleString() + ' VND', sortable: true },
      { name: 'Trạng thái', selector: (row) => row.approveStatus, sortable: true },
      { name: 'Actions', cell: row => (
          <>
            <button className="btn btn-sm btn-outline-primary" onClick={() => this.handleEditSlip(row)}>Sửa</button>{' '}
            <button className="btn btn-sm btn-outline-danger" onClick={() => this.handleDeleteSlip(row.idPurchaseSlip)}>Xóa</button>
          </>
        )
      }
    ];

    const filteredItems = slipItems.filter(item =>
      item.shopId.toLowerCase().includes(itemSearchText.toLowerCase()) ||
      item.productId.includes(itemSearchText) ||
      item.name.toLowerCase().includes(itemSearchText.toLowerCase())
    );

    const itemColumns = [
      { name: 'Shop ID', selector: (row) => row.shopId, sortable: true },
      { name: 'Product ID', selector: (row) => row.productId, sortable: true },
      { name: 'Name', selector: (row) => row.name, sortable: true },
      { name: 'Quantity', selector: (row) => row.quantity, sortable: true },
      { name: 'Unit Price', selector: row => row.unitPrice, format: row => row.unitPrice.toLocaleString() + ' VND', sortable: true },
      { name: 'Actions', cell: (row, index) => (
          <>
            <button className="btn btn-sm btn-outline-primary" onClick={() => this.handleEditItem(row)}>Sửa</button>{' '}
            <button className="btn btn-sm btn-outline-danger" onClick={() => this.handleDeleteItem(index)}>Xóa</button>
          </>
        )
      }
    ];

    return (
      <div className="">
        <h2>Danh sách Đơn Nhập Hàng</h2>
        <DataTable
          columns={slipColumns}
          data={filteredSlips}
          progressPending={loading}
          pagination
          paginationPerPage={5}
          paginationRowsPerPageOptions={[5, 10, 15, 20, 50]}
          highlightOnHover
          pointerOnHover
          onRowClicked={row => this.fetchSlipItems(row.idPurchaseSlip)}
          subHeader
          subHeaderComponent={
            <input
              type="text"
              placeholder="Tìm kiếm phiếu..."
              className="psl-search"
              value={searchText}
              onChange={this.handleSearch}
            />
          }
        />

        {showModal && (
          <div className="psl-modal-overlay" onClick={this.closeModal}>
            <div className="psl-modal-content" onClick={e => e.stopPropagation()}>
              <button className="psl-modal-close" onClick={this.closeModal}>×</button>
              <h3>Chi tiết phiếu</h3>

              {selectedSlip && (
                <div className="psl-slip-info">
                  <div className="psl-row">
                        <p><strong>ID Phiếu:</strong> {selectedSlip.idPurchaseSlip}</p>
                        <p><strong>Ngày tạo:</strong> {selectedSlip.dayCreate}</p>
                </div>
                <div className="psl-row">
                        <p><strong>Người tạo:</strong> {selectedSlip.idCreater}</p>
                        <p><strong>Nhà cung cấp:</strong> {selectedSlip.idSupplier}</p>
                </div>
                <div className="psl-row">
                    <p><strong>Tổng tiền:</strong> {selectedSlip.totalBill.toLocaleString()} VND</p>
                </div>
                  <div className="psl-slip-row">
                    <strong>Trạng thái:</strong>
                    {selectedSlip.approveStatus === 'Hoàn thành' ? (
                      <span> Hoàn thành</span>
                    ) : (<>
                        <select className="form-control form-control-sm  select-slip" value={selectedSlip.approveStatus} onChange={this.handleStatusChange}>
                            {statusOptions.map(status => (
                            <option key={status} value={status}>{status}</option>
                            ))}
                        </select>
                        <button className="btn btn-sm btn-success ml-2" onClick={this.handleUpdateStatus}>Update Trạng Thái</button>
                      </>
                    )}
                  </div>
                </div>
              )}

              <DataTable
                columns={itemColumns}
                data={filteredItems}
                progressPending={itemsLoading}
                pagination
                paginationPerPage={5}
                paginationRowsPerPageOptions={[5, 10, 15, 20, 50]}
                highlightOnHover
                pointerOnHover
                subHeader
                subHeaderComponent={
                  <input
                    type="text"
                    placeholder="Tìm kiếm sản phẩm..."
                    className="psl-search"
                    value={itemSearchText}
                    onChange={this.handleItemSearch}
                  />
                }
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}
