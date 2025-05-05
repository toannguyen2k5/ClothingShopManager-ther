import React, { Component } from 'react';
import "../list/PurchaseSlipList.css";
import "./UpdatePurchaseSlip.css";

class UpdatePurchaseSlip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idPurchaseSlip: 'PS123456',
      idCreater: 'User001',
      idSupplier: '',
      dayCreate: '',
      totalBill: 0,
      approveStatus: '',
      products: [],
      showAddModal: false,
      showEditModal: false,
      newProduct: { id: '', name: '', quantity: '', price: '' },
      editProduct: { id: '', name: '', quantity: '', price: '' },
      editProductIndex: null,
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  // Open Add Product Modal
  openAddModal = () => {
    this.setState({ showAddModal: true });
  }

  // Close Add Product Modal
  closeAddModal = () => {
    this.setState({ showAddModal: false, newProduct: { id: '', name: '', quantity: '', price: '' } });
  }

  // Handle Add Product form change
  handleAddChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      newProduct: {
        ...prevState.newProduct,
        [name]: value
      }
    }));
  }

  // Add product to state
  addProduct = () => {
    const { newProduct } = this.state;
    if (newProduct.id && newProduct.name && newProduct.quantity && newProduct.price) {
      this.setState(prevState => {
        const updatedProducts = [...prevState.products, { ...newProduct }];
        return { products: updatedProducts, showAddModal: false, newProduct: { id: '', name: '', quantity: '', price: '' } };
      }, () => this.updateTotalBill());
    }
  }

  // Open Edit Product Modal
  openEditModal = (index) => {
    const product = this.state.products[index];
    this.setState({ showEditModal: true, editProduct: { ...product }, editProductIndex: index });
  }

  // Close Edit Product Modal
  closeEditModal = () => {
    this.setState({ showEditModal: false, editProduct: { id: '', name: '', quantity: '', price: '' }, editProductIndex: null });
  }

  // Handle Edit Product form change
  handleEditChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      editProduct: {
        ...prevState.editProduct,
        [name]: value
      }
    }));
  }

  // Update product in state
  updateProduct = () => {
    const { editProduct, editProductIndex } = this.state;
    if (editProduct.id && editProduct.name && editProduct.quantity && editProduct.price && editProductIndex !== null) {
      this.setState(prevState => {
        const updatedProducts = [...prevState.products];
        updatedProducts[editProductIndex] = { ...editProduct };
        return { products: updatedProducts, showEditModal: false, editProduct: { id: '', name: '', quantity: '', price: '' }, editProductIndex: null };
      }, () => this.updateTotalBill());
    }
  }

  // Delete product from list
  deleteProduct = (index) => {
    this.setState(prevState => {
      const updatedProducts = prevState.products.filter((_, i) => i !== index);
      return { products: updatedProducts };
    }, () => this.updateTotalBill());
  }

  // Recalculate total bill
  updateTotalBill = () => {
    const total = this.state.products.reduce((sum, prod) => {
      const qty = parseFloat(prod.quantity) || 0;
      const price = parseFloat(prod.price) || 0;
      return sum + (qty * price);
    }, 0);
    this.setState({ totalBill: total });
  }

  render() {
    const modalStyle = {
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    };
    const modalContentStyle = {
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '5px',
      width: '400px',
      maxWidth: '90%'
    };

    return (
      <div style={{ padding: '20px' }}>
        <h2>Update Purchase Slip</h2>
        <form>
          <div>
            <label>Purchase Slip ID:</label>
            <input type="text" name="idPurchaseSlip" value={this.state.idPurchaseSlip} readOnly />
          </div>
          <div>
            <label>Creater ID:</label>
            <input type="text" name="idCreater" value={this.state.idCreater} readOnly />
          </div>
          <div>
            <label>Supplier ID:</label>
            <input type="text" name="idSupplier" value={this.state.idSupplier} onChange={this.handleInputChange} />
          </div>
          <div>
            <label>Date Created:</label>
            <input type="date" name="dayCreate" value={this.state.dayCreate} onChange={this.handleInputChange} />
          </div>
          <div>
            <label>Total Bill:</label>
            <input type="number" name="totalBill" value={this.state.totalBill} readOnly />
          </div>
          <div>
            <label>Approve Status:</label>
            <select name="approveStatus" value={this.state.approveStatus} onChange={this.handleInputChange}>
              <option value="">Select Status</option>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
        </form>

        <h3>Products</h3>
        <button onClick={this.openAddModal}>Add Product</button>
        <table border="1" cellPadding="5" cellSpacing="0" style={{ marginTop: '10px', width: '100%', textAlign: 'left' }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.products.map((prod, index) => (
              <tr key={index}>
                <td>{prod.id}</td>
                <td>{prod.name}</td>
                <td>{prod.quantity}</td>
                <td>{prod.price}</td>
                <td>{parseFloat(prod.quantity) * parseFloat(prod.price)}</td>
                <td>
                  <button onClick={() => this.openEditModal(index)}>Edit</button>
                  <button onClick={() => this.deleteProduct(index)} style={{ marginLeft: '5px' }}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Add Product Modal */}
        {this.state.showAddModal && (
          <div style={modalStyle}>
            <div style={modalContentStyle}>
              <h4>Add Product</h4>
              <div>
                <label>ID:</label>
                <input type="text" name="id" value={this.state.newProduct.id} onChange={this.handleAddChange} />
              </div>
              <div>
                <label>Name:</label>
                <input type="text" name="name" value={this.state.newProduct.name} onChange={this.handleAddChange} />
              </div>
              <div>
                <label>Quantity:</label>
                <input type="number" name="quantity" value={this.state.newProduct.quantity} onChange={this.handleAddChange} />
              </div>
              <div>
                <label>Price:</label>
                <input type="number" name="price" value={this.state.newProduct.price} onChange={this.handleAddChange} />
              </div>
              <div style={{ marginTop: '10px' }}>
                <button onClick={this.addProduct}>Save</button>
                <button onClick={this.closeAddModal} style={{ marginLeft: '5px' }}>Cancel</button>
              </div>
            </div>
          </div>
        )}

        {/* Edit Product Modal */}
        {this.state.showEditModal && (
          <div style={modalStyle}>
            <div style={modalContentStyle}>
              <h4>Edit Product</h4>
              <div>
                <label>ID:</label>
                <input type="text" name="id" value={this.state.editProduct.id} onChange={this.handleEditChange} />
              </div>
              <div>
                <label>Name:</label>
                <input type="text" name="name" value={this.state.editProduct.name} onChange={this.handleEditChange} />
              </div>
              <div>
                <label>Quantity:</label>
                <input type="number" name="quantity" value={this.state.editProduct.quantity} onChange={this.handleEditChange} />
              </div>
              <div>
                <label>Price:</label>
                <input type="number" name="price" value={this.state.editProduct.price} onChange={this.handleEditChange} />
              </div>
              <div style={{ marginTop: '10px' }}>
                <button onClick={this.updateProduct}>Save</button>
                <button onClick={this.closeEditModal} style={{ marginLeft: '5px' }}>Cancel</button>
              </div>
            </div>
          </div>
        )}

      </div>
    );
  }
}

export default UpdatePurchaseSlip;
