import React, { Component } from "react";
import "./PurchaseSlipManager.css";

// Dummy product list for autocomplete popup
const PRODUCT_CATALOG = [
  { productId: 'P001', name: 'Áo thun trắng', category: 'Áo thun', color: 'Trắng', size: 'M', unitPrice: 120000 },
  { productId: 'P002', name: 'Quần jean xanh demo 001 001 001 001 001 001 001 001', category: 'Quần jean', color: 'Xanh', size: '32', unitPrice: 350000 },
  { productId: 'P003', name: 'Áo khoác đen', category: 'Áo khoác', color: 'Đen', size: 'L', unitPrice: 500000 },
  { productId: 'P004', name: 'Quần jean xanh', category: 'Quần jean', color: 'Xanh', size: '32', unitPrice: 350000 },
  { productId: 'P005', name: 'Áo khoác đen', category: 'Áo khoác', color: 'Đen', size: 'L', unitPrice: 500000 },
  { productId: 'P006', name: 'Quần jean xanh', category: 'Quần jean', color: 'Xanh', size: '32', unitPrice: 350000 },
  { productId: 'P007', name: 'Áo khoác đen', category: 'Áo khoác', color: 'Đen', size: 'L', unitPrice: 500000 },
  { productId: 'P008', name: 'Quần jean xanh', category: 'Quần jean', color: 'Xanh', size: '32', unitPrice: 350000 },
  { productId: 'P009', name: 'Áo khoác đen', category: 'Áo khoác', color: 'Đen', size: 'L', unitPrice: 500000 },
  { productId: 'P010', name: 'Quần jean xanh', category: 'Quần jean', color: 'Xanh', size: '32', unitPrice: 350000 },
  { productId: 'P011', name: 'Áo khoác đen', category: 'Áo khoác', color: 'Đen', size: 'L', unitPrice: 500000 },
  { productId: 'P012', name: 'Quần jean xanh', category: 'Quần jean', color: 'Xanh', size: '32', unitPrice: 350000 },
  { productId: 'P013', name: 'Áo khoác đen', category: 'Áo khoác', color: 'Đen', size: 'L', unitPrice: 500000 },
  { productId: 'P014', name: 'Quần jean xanh', category: 'Quần jean', color: 'Xanh', size: '32', unitPrice: 350000 },
  { productId: 'P015', name: 'Áo khoác đen', category: 'Áo khoác', color: 'Đen', size: 'L', unitPrice: 500000 },
  { productId: 'P016', name: 'Quần jean xanh', category: 'Quần jean', color: 'Xanh', size: '32', unitPrice: 350000 },
  { productId: 'P017', name: 'Áo khoác đen', category: 'Áo khoác', color: 'Đen', size: 'L', unitPrice: 500000 },
  // ... thêm sản phẩm mẫu
];

export default class PurchaseSlipManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      purchaseSlip: {
        idPurchaseSlip: "",
        idCreater: "",
        idSupplier: "",
        dayCreate: "",
        totalBill: 0,
        approveStatus: "",
        statusUpdateDate: "",
        idStatusEditor: "",
        statusReceive: ""
      },
      items: [],
      newItem: {
        shopId: '',
        productId: "",
        name: "",
        category: "",
        color: "",
        size: "",
        quantity: 1,
        unitPrice: 0
      },
      productFilter: '',
      showProductPopup: false,
      responseMessage: ""
    };
  }

  handleSlipChange = e => {
    const { name, value } = e.target;
    this.setState(prev => ({ purchaseSlip: { ...prev.purchaseSlip, [name]: value } }));
  }

  handleItemChange = e => {
    const { name, value } = e.target;
    this.setState(prev => ({ newItem: { ...prev.newItem, [name]: value } }));
  }

  openProductPopup = () => this.setState({ showProductPopup: true, productFilter: '' });
  closeProductPopup = () => this.setState({ showProductPopup: false });

  filterProducts = () => {
    const { productFilter } = this.state;
    return PRODUCT_CATALOG.filter(p =>
      p.productId.includes(productFilter) || p.name.toLowerCase().includes(productFilter.toLowerCase())
    );
  }

  selectProduct = (prod) => {
    this.setState(prev => ({
      newItem: { ...prev.newItem, ...prod },
      showProductPopup: false
    }));
  }

  addItem = () => {
    const { newItem, items } = this.state;
    if (!newItem.shopId || !newItem.productId) {
      alert("Chọn cửa hàng và sản phẩm trước khi thêm");
      return;
    }
    this.setState({ items: [...items, newItem], newItem: { shopId: '', productId: '', name: '', category: '', color: '', size: '', quantity: 1, unitPrice: 0 } });
  }

  removeItem = idx => this.setState(prev => ({ items: prev.items.filter((_, i) => i !== idx) }));

  submitForm = async () => {
    const { purchaseSlip, items } = this.state;
    const total = items.reduce((sum, it) => sum + it.quantity * it.unitPrice, 0);
    const payload = { ...purchaseSlip, totalBill: total, items };
    try {
      const res = await fetch(
        "/api/PurchaseSlip/insertPurchaseSlip?" + new URLSearchParams({ purchaseSlip: JSON.stringify(payload) }),
        { method: "GET" }
      );
      const json = await res.json();
      this.setState({ responseMessage: json.message || "Tạo phiếu thành công" });
    } catch (err) {
      this.setState({ responseMessage: "Lỗi: " + err.message });
    }
  }

  render() {
    const { purchaseSlip, newItem, items, productFilter, showProductPopup, responseMessage } = this.state;
    return (
      <div className="purchase-slip-manager">
        <h2>Thêm Đơn Nhập Hàng</h2>
        <div className="slip-section">
          {Object.keys(purchaseSlip).map(key => (
            <label key={key}>{key}:
              <input name={key} value={purchaseSlip[key]} onChange={this.handleSlipChange} />
            </label>
          ))}
        </div>

        <h3>Thêm sản phẩm (quần áo)</h3>
        <div className="item-section">
          <label>Shop ID:
            <input name="shopId" value={newItem.shopId} onChange={this.handleItemChange} placeholder="Nhập mã shop" />
          </label>
          <label>Product:
            <input name="productFilter" value={productFilter} onChange={e => this.setState({ productFilter: e.target.value, showProductPopup: true })} placeholder="Mã hoặc tên sản phẩm" readOnly={false} />
            {showProductPopup && (
              <div className="product-popup">
                <ul>
                  {this.filterProducts().map(p => (
                    <li key={p.productId} onClick={() => this.selectProduct(p)}>
                      {p.productId} - {p.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </label>
          <label>Name:
            <input name="name" value={newItem.name} readOnly />
          </label>
          <label>Category:
            <input name="category" value={newItem.category} readOnly />
          </label>
          <label>Color:
            <input name="color" value={newItem.color} readOnly />
          </label>
          <label>Size:
            <input name="size" value={newItem.size} readOnly />
          </label>
          <label>Quantity:
            <input type="number" name="quantity" value={newItem.quantity} onChange={this.handleItemChange} min="1" />
          </label>
          <label>Unit Price:
            <input type="number" name="unitPrice" value={newItem.unitPrice} onChange={this.handleItemChange} />
          </label>
          <button onClick={this.addItem}>Thêm sản phẩm</button>
        </div>

        <h4>Danh sách sản phẩm</h4>
        <table className="items-table">
          <thead>
            <tr><th>#</th><th>Shop</th><th>ID</th><th>Name</th><th>Cat</th><th>Color</th><th>Size</th><th>Qty</th><th>Price</th><th>Action</th></tr>
          </thead>
          <tbody>
            {items.map((it, idx) => (
              <tr key={idx}><td>{idx+1}</td><td>{it.shopId}</td><td>{it.productId}</td><td>{it.name}</td><td>{it.category}</td><td>{it.color}</td><td>{it.size}</td><td>{it.quantity}</td><td>{it.unitPrice}</td><td><button onClick={() => this.removeItem(idx)}>Xóa</button></td></tr>
            ))}
          </tbody>
        </table>

        <button className="submit-btn" onClick={this.submitForm}>Tạo phiếu nhập</button>
        {responseMessage && <div className="response-msg">{responseMessage}</div>}
      </div>
    );
  }
}
