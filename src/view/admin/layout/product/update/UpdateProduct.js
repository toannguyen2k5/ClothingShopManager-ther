import React, { Component } from 'react';
import './UpdateProduct.css';

export default class UpdateProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // basic product info
      name: '',
      sku: '',
      importPrice: '',
      salePrice: '',
      category: '',
      supplier: '',
      manufacturer: '',
      discountCode: '',
      description: '',
      colors: [],
      sizes: [],
      mainImage: null,
      subImages: [],
      // variant entries
      variants: [],
      // modal state
      showVariantModal: false,
      editingIndex: null,
      variantForm: { seri: '', color: '', size: '', qty: '' }
    };
  }

  componentDidMount() {
    // fetch product data and lists here
  }

  handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      if (name === 'mainImage') this.setState({ mainImage: files[0] });
      else this.setState({ subImages: Array.from(files).slice(0,10) });
    } else this.setState({ [name]: value });
  }

  openVariantModal = (idx = null) => {
    if (idx !== null) this.setState({ editingIndex: idx, variantForm: { ...this.state.variants[idx] } });
    else this.setState({ editingIndex: null, variantForm: { seri: '', color: '', size: '', qty: '' } });
    this.setState({ showVariantModal: true });
  }

  closeVariantModal = () => this.setState({ showVariantModal: false });

  handleVariantChange = (e) => {
    const { name, value } = e.target;
    this.setState(prev => ({ variantForm: { ...prev.variantForm, [name]: value } }));
  }

  saveVariant = () => {
    const { editingIndex, variantForm, variants } = this.state;
    if (editingIndex === null) this.setState({ variants: [...variants, variantForm] });
    else {
      const vs = [...variants]; vs[editingIndex] = variantForm;
      this.setState({ variants: vs });
    }
    this.closeVariantModal();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // submit updated product
    console.log('Updated product:', this.state);
  }

  render() {
    const { name, sku, importPrice, salePrice, category, supplier, manufacturer, discountCode, description,
            variants, showVariantModal, variantForm } = this.state;

    return (
      <div className="up-container">
        <h2>Update Product</h2>
        <form onSubmit={this.handleSubmit} className="up-form">
          <label>Name:<input name="name" value={name} onChange={this.handleChange} /></label>
          <label>SKU:<input name="sku" value={sku} onChange={this.handleChange} /></label>
          <div className="prices">
            <label>Import Price:<input name="importPrice" type="number" value={importPrice} onChange={this.handleChange} /></label>
            <label>Sale Price:<input name="salePrice" type="number" value={salePrice} onChange={this.handleChange} /></label>
          </div>
          {/* selects for category, supplier, manufacturer, discount */}
          <label>Description:<textarea name="description" value={description} onChange={this.handleChange}/></label>

          <div className="variant-section">
            <h3>Variants</h3>
            <button type="button" onClick={() => this.openVariantModal()}>Add Variant</button>
            <table className="variant-table">
              <thead><tr><th>Seri</th><th>Color</th><th>Size</th><th>Qty</th><th>Actions</th></tr></thead>
              <tbody>
                {variants.map((v, i) => (
                  <tr key={i}>
                    <td>{v.seri}</td><td>{v.color}</td><td>{v.size}</td><td>{v.qty}</td>
                    <td>
                      <button type="button" onClick={() => this.openVariantModal(i)}>Edit</button>
                      <button type="button" onClick={() => this.setState({ variants: variants.filter((_,j)=>j!==i) })}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <button type="submit" className="up-submit">Save Product</button>
        </form>

        {showVariantModal && (
          <div className="up-modal">
            <div className="up-modal-content">
              <h4>{this.state.editingIndex===null?'Add':'Edit'} Variant</h4>
              <label>Seri:<input name="seri" value={variantForm.seri} onChange={this.handleVariantChange}/></label>
              <label>Color:<input name="color" value={variantForm.color} onChange={this.handleVariantChange}/></label>
              <label>Size:<input name="size" value={variantForm.size} onChange={this.handleVariantChange}/></label>
              <label>Qty:<input name="qty" type="number" value={variantForm.qty} onChange={this.handleVariantChange}/></label>
              <div className="up-modal-actions">
                <button onClick={this.saveVariant}>Save</button>
                <button onClick={this.closeVariantModal}>Cancel</button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
