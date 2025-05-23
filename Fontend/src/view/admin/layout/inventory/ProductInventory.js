import React from 'react';
import DataTable from 'react-data-table-component';
import "./ProductInventory.css";

class ProductInventory extends React.Component {
  constructor(props) {
    super(props);
    // Giả lập dữ liệu ban đầu
    this.state = {
      products: [
        { id: 'P001', shopName: 'Shop A', productName: 'Sản phẩm A', quantity: 10, status: 'Còn hàng' },
        { id: 'P002', shopName: 'Shop B', productName: 'Sản phẩm B', quantity: 0,  status: 'Hết hàng' },
        { id: 'P003', shopName: 'Shop A', productName: 'Sản phẩm C', quantity: 5,  status: 'Ngừng bán' },
      ],
      shops: ['Shop A', 'Shop B', 'Shop C'],
      // Danh sách sản phẩm dùng cho autocomplete (id và name)
      productOptions: [
        { id: 'P001', name: 'Sản phẩm A' },
        { id: 'P002', name: 'Sản phẩm B' },
        { id: 'P003', name: 'Sản phẩm C' },
        // ... có thể bổ sung thêm
      ],
      // Trạng thái filter và trạng thái modal
      filterName: '',
      filterShop: '',
      filterStatus: '',
      modalOpen: false,
      editingIndex: null,  // index của sản phẩm đang sửa (nếu có)
      newProduct: {        // Thông tin sản phẩm mới trong form modal
        id: '',
        shopName: '',
        productName: '',
        quantity: 0,
        status: 'Còn hàng',
      },
    };
  }

  // Mở modal để thêm mới sản phẩm
  openAddModal = () => {
    this.setState({
      modalOpen: true,
      editingIndex: null,
      newProduct: { id: '', shopName: '', productName: '', quantity: 0, status: 'Còn hàng' },
    });
  };

  // Mở modal để sửa sản phẩm đã chọn
  openEditModal = (product, index) => {
    this.setState({
      modalOpen: true,
      editingIndex: index,
      newProduct: { ...product },
    });
  };

  // Đóng modal
  closeModal = () => {
    this.setState({ modalOpen: false });
  };

  // Xử lý thay đổi giá trị trong form (cho tất cả trường trừ ID và tên sản phẩm)
  handleNewProductChange = (field, value) => {
    this.setState(prev => ({
      newProduct: { ...prev.newProduct, [field]: value }
    }));
  };

  // Xử lý autocomplete ID sản phẩm: nếu khớp với option thì tự động điền tên sản phẩm
  handleProductIdChange = (e) => {
    const id = e.target.value;
    const product = this.state.productOptions.find(p => p.id === id);
    this.setState(prev => ({
      newProduct: { 
        ...prev.newProduct, 
        id: id, 
        productName: product ? product.name : prev.newProduct.productName
      }
    }));
  };

  // Xử lý autocomplete tên sản phẩm: tương tự như ID
  handleProductNameChange = (e) => {
    const name = e.target.value;
    const product = this.state.productOptions.find(p => p.name === name);
    this.setState(prev => ({
      newProduct: { 
        ...prev.newProduct, 
        productName: name, 
        id: product ? product.id : prev.newProduct.id
      }
    }));
  };

  // Lưu (thêm mới hoặc cập nhật) sản phẩm từ form modal
  handleSave = () => {
    const { products, newProduct, editingIndex } = this.state;
    if (editingIndex === null) {
      // Thêm mới sản phẩm
      this.setState(prev => ({
        products: [...prev.products, newProduct],
        modalOpen: false
      }));
    } else {
      // Cập nhật sản phẩm
      const updated = [...products];
      updated[editingIndex] = newProduct;
      this.setState({ products: updated, modalOpen: false });
    }
  };

  // Xử lý xóa (ẩn) sản phẩm: ở đây đơn giản là lọc ra khỏi danh sách
  handleHide = (productId) => {
    this.setState(prev => ({
      products: prev.products.filter(p => p.id !== productId)
    }));
  };

  // Xử lý thay đổi bộ lọc
  handleFilterChange = (field, value) => {
    this.setState({ [field]: value });
  };

  render() {
    const { products, shops, productOptions, filterName, filterShop, filterStatus, modalOpen, newProduct } = this.state;

    // Lọc dữ liệu theo tên, shop, trạng thái
    const filteredProducts = products.filter(p => {
      const matchName = filterName === '' || p.productName.toLowerCase().includes(filterName.toLowerCase());
      const matchShop = filterShop === '' || p.shopName === filterShop;
      const matchStatus = filterStatus === '' || p.status === filterStatus;
      return matchName && matchShop && matchStatus;
    });

    // Định nghĩa cột cho DataTable
    const columns = [
      { name: 'ID sản phẩm', selector: row => row.id, sortable: true },
      { name: 'Tên shop', selector: row => row.shopName, sortable: true },
      { name: 'Tên sản phẩm', selector: row => row.productName, sortable: true },
      { name: 'Số lượng', selector: row => row.quantity, sortable: true },
      { name: 'Trạng thái', selector: row => row.status, sortable: true },
      {
        name: 'Hành động',
        cell: row => (
          <div className='action-buttons'>
            <button className='edit-btn' onClick={() => this.openEditModal(row, products.indexOf(row))}>
            <i class="bi bi-pencil"></i>
            </button>{' '}
            <button className='delete-btn' onClick={() => this.handleHide(row.id)}>
            <i class="bi bi-eye-slash-fill"></i>
            </button>
          </div>
        ),
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
      },
    ];

    return (
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"/>
        <h2>Quản lý kho sản phẩm</h2>
        {/* Nút thêm sản phẩm */}
        <button onClick={this.openAddModal} className='btn btn-outline-info btn-sm'>Thêm sản phẩm</button>

        {/* Bộ lọc */}
        <div style={{ margin: '10px 0'}} className="form-group mx-sm-3 mb-2">
            <div >
                <select className="form-control form-control-sm"
                    value={filterShop}
                    onChange={e => this.handleFilterChange('filterShop', e.target.value)}
                >
                    <option value="">-- Chọn Shop --</option>
                    {shops.map((shop, idx) => (
                    <option key={idx} value={shop}>{shop}</option>
                    ))}
                </select>{' '}
                <select className="form-control form-control-sm"
                    value={filterStatus}
                    onChange={e => this.handleFilterChange('filterStatus', e.target.value)}
                >
                    <option value="">-- Trạng thái --</option>
                    <option value="Còn hàng">Còn hàng</option>
                    <option value="Hết hàng">Hết hàng</option>
                    <option value="Ngừng bán">Ngừng bán</option>
                </select>
          <input
            type="text"
            placeholder="Tìm theo tên sản phẩm"
            className="form-control form-control-sm"
            value={filterName}
            onChange={e => this.handleFilterChange('filterName', e.target.value)}
          />{' '}
            </div>
        </div>

        {/* Bảng dữ liệu */}
        <DataTable
          columns={columns}
          data={filteredProducts}
          pagination
          highlightOnHover
        />

        {/* Modal Thêm/Sửa sản phẩm */}
        {modalOpen && (
          <div style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.3)', display: 'flex',
            alignItems: 'center', justifyContent: 'center'
          }}>
            <div style={{
              backgroundColor: '#fff', padding: '20px', borderRadius: '5px',
              width: '400px'
            }}>
              <h3>{this.state.editingIndex === null ? 'Thêm sản phẩm' : 'Sửa sản phẩm'}</h3>
              <div>
                <label>ID sản phẩm:</label><br />
                <input
                  list="idList"
                  value={newProduct.id}
                  onChange={this.handleProductIdChange}
                  style={{ width: '100%' }}
                />
                <datalist id="idList">
                  {productOptions.map((opt, idx) => (
                    <option key={idx} value={opt.id}>{opt.name}</option>
                  ))}
                </datalist>
              </div>
              <div>
                <label>Tên sản phẩm:</label><br />
                <input
                  list="nameList"
                  value={newProduct.productName}
                  onChange={this.handleProductNameChange}
                  style={{ width: '100%' }}
                />
                <datalist id="nameList">
                  {productOptions.map((opt, idx) => (
                    <option key={idx} value={opt.name}>{opt.id}</option>
                  ))}
                </datalist>
              </div>
              <div>
                <label>Tên shop:</label><br />
                <input
                  list="shopList"
                  value={newProduct.shopName}
                  onChange={e => this.handleNewProductChange('shopName', e.target.value)}
                  style={{ width: '100%' }}
                />
                <datalist id="shopList">
                  {shops.map((shop, idx) => (
                    <option key={idx} value={shop} />
                  ))}
                </datalist>
              </div>
              <div>
                <label>Số lượng:</label><br />
                <input
                  type="number"
                  value={newProduct.quantity}
                  onChange={e => this.handleNewProductChange('quantity', e.target.value)}
                  style={{ width: '100%' }}
                />
              </div>
              <div>
                <label>Trạng thái:</label><br />
                <select
                  value={newProduct.status}
                  onChange={e => this.handleNewProductChange('status', e.target.value)}
                  style={{ width: '100%' }}
                >
                  <option value="Còn hàng">Còn hàng</option>
                  <option value="Hết hàng">Hết hàng</option>
                  <option value="Ngừng bán">Ngừng bán</option>
                </select>
              </div>
              <div style={{ marginTop: '10px', textAlign: 'right' }}>
                <button onClick={this.handleSave}>Lưu</button>{' '}
                <button onClick={this.closeModal}>Hủy</button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default ProductInventory;
