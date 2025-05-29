import React, { Component } from "react";
import { urlapi } from "../../../../../setting/store/const";
import "./UpdateProduct.css";

export default class UpdateProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // basic product info
      name: "",
      description: "",
      color: "",
      colors: [],
      size: "",
      sizes: [],
      variants: [],
      // modal state
      showVariantModal: false,
      editingIndex: null,
      variantForm: { seri: "", color: "", size: "" },

      Material: "",
      Materials: [],
      style: "",
      styles: [],
      category: "",
      categories: [],
      supplier: "",
      suppliers: [],
      manufacturer: "",
      manufacturers: [],

      inputValue: "",
      suggestions: [],
      allProducts: [],
      allInforProducts: [],
    };
  }

  componentDidMount() {
    // lấy dữ liệu product
    fetch(`${urlapi}/api/product/sellectAll/all/all/`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Dữ liệu nhận được:", data);
        if (data.status && data.status == "200") {
          this.setState({ allInforProducts: data.data });
          if (data.status === "200") {
            const allProducts = data.data.map((product) => product.idProduct);
            this.setState({ allInforProducts: data.data, allProducts });
          }
        }
        console.log(data);
      })
      .catch((error) => {
        console.error("Lỗi khi fetch:", error);
      });
    // lấy colors
    fetch(urlapi + "/api/color/sellectAll/all/all/")
      .then((response) => response.json())
      .then((data) => {
        if (data.status && data.status === "200") {
          console.log("data : ", data);
          this.setState({ colors: data.data });
        }
        console.log(data);
      })
      .catch((error) => console.error(error));
    // lấy sizes
    fetch(urlapi + "/api/Size/sellectAll/all/all/")
      .then((response) => response.json())
      .then((data) => {
        if (data.status && data.status === "200") {
          console.log("data : ", data);
          this.setState({ sizes: data.data });
        }
        console.log(data);
      })
      .catch((error) => console.error(error));
    // lấy danh mục
    fetch(urlapi + "/api/ProductCategory/sellectAll/all/all/")
      .then((response) => response.json())
      .then((data) => {
        if (data.status && data.status === "200") {
          console.log("data : ", data);
          this.setState({ categories: data.data });
        }
        console.log(data);
      })
      .catch((error) => console.error(error));
    // lấy nhà cung cấp
    fetch(urlapi + "/api/Supplier/sellectAll/all/all/")
      .then((response) => response.json())
      .then((data) => {
        if (data.status && data.status === "200") {
          console.log("data : ", data);
          this.setState({ suppliers: data.data });
        }
        console.log(data);
      })
      .catch((error) => console.error(error));
    // lấy thương hiệu
    fetch(urlapi + "/api/Brand/sellectAll/all/all/")
      .then((response) => response.json())
      .then((data) => {
        if (data.status && data.status === "200") {
          console.log("data : ", data);
          this.setState({ manufacturers: data.data });
        }
        console.log(data);
      })
      .catch((error) => console.error(error));
    // lấy style
    fetch(urlapi + "/api/Style/sellectAll/all/all/")
      .then((response) => response.json())
      .then((data) => {
        if (data.status && data.status === "200") {
          console.log("data : ", data);
          this.setState({ styles: data.data });
        }
        console.log(data);
      })
      .catch((error) => console.error(error));
    // lấy chất liệu
    fetch(urlapi + "/api/ProductMaterial/sellectAll/all/all/")
      .then((response) => response.json())
      .then((data) => {
        if (data.status && data.status === "200") {
          console.log("data : ", data);
          this.setState({ Materials: data.data });
        }
        console.log(data);
      })
      .catch((error) => console.error(error));
  }

  handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      if (name === "mainImage") this.setState({ mainImage: files[0] });
      else this.setState({ subImages: Array.from(files).slice(0, 10) });
    } else this.setState({ [name]: value });
  };

  // openVariantModal = (idx = null) => {
  //   if (idx !== null)
  //     this.setState({
  //       editingIndex: idx,
  //       variantForm: { ...this.state.variants[idx] },
  //     });
  //   else
  //     this.setState({
  //       editingIndex: null,
  //       variantForm: { seri: "", color: "", size: "" },
  //     });
  //   this.setState({ showVariantModal: true });
  // };

  // closeVariantModal = () => this.setState({ showVariantModal: false });

  // handleVariantChange = (e) => {
  //   const { name, value } = e.target;
  //   this.setState((prev) => ({
  //     variantForm: { ...prev.variantForm, [name]: value },
  //   }));
  // };

  // saveVariant = () => {
  //   const { editingIndex, variantForm, variants } = this.state;
  //   if (editingIndex === null)
  //     this.setState({ variants: [...variants, variantForm] });
  //   else {
  //     const vs = [...variants];
  //     vs[editingIndex] = variantForm;
  //     this.setState({ variants: vs });
  //   }
  //   this.closeVariantModal();
  // };

  handleSubmit = (e) => {
    e.preventDefault();
    // submit updated product
    console.log("Updated product:", this.state);
  };
  renderOption = (list) =>
    list.map((item) => (
      <option
        key={item[Object.keys(item)[0]]}
        value={item[Object.keys(item)[0]]}
      >
        {item[Object.keys(item)[1]]}
      </option>
    ));
  handleSelectObject = (e, field, list) => {
    const selectedId = e.target.value;
    const selected = list.find(
      (item) => item[Object.keys(item)[0]] === selectedId
    );
    this.setState({ [field]: selected || "" });
  };

  handleSelect = (item) => {
    this.setState({ inputValue: item, suggestions: [] });
    const product = this.state.allInforProducts.find(
      (p) => p.idProduct === item
    );
    if (product) {
      this.setState({
        name: product.nameProduct,
        description: product.discription,
      });

      const matchedMaterial = this.state.Materials.find(
        (m) => m.nameMaterial === product.nameMaterial
      );
      if (matchedMaterial) {
        this.setState({ Material: matchedMaterial });
      }

      const matchedCategory = this.state.categories.find(
        (m) => m.nameCategory === product.nameCategory
      );
      if (matchedCategory) {
        this.setState({ category: matchedCategory });
      }

      const matchedStyle = this.state.styles.find(
        (m) => m.nameStyle === product.nameStyle
      );
      if (matchedStyle) {
        this.setState({ style: matchedStyle });
      }

      const matchedSupplier = this.state.suppliers.find(
        (m) => m.nameSupplier === product.nameSupplier
      );
      if (matchedStyle) {
        this.setState({ supplier: matchedSupplier });
      }

      const matchedBrand = this.state.manufacturers.find(
        (m) => m.nameBrand === product.nameBrand
      );
      if (matchedStyle) {
        this.setState({ manufacturer: matchedBrand });
      }
    }
  };
  handleChangeProduct = (e) => {
    const value = e.target.value;
    const filtered = this.state.allProducts.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );
    this.setState({ inputValue: value, suggestions: filtered });
  };
  saveProduct = () => {
    const req = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        idProduct: this.state.inputValue,
        nameProduct: this.state.name,
        idStyle: this.state.style.idStyle,
        idMaterial: this.state.Material.idMaterial,
        idBrand: this.state.manufacturer.idBrand,
        idCategory: this.state.category.idCategory,
        idSupplier: this.state.supplier.idSupplier,
        status: true,
        description: this.state.description,
      }),
    };
    fetch(urlapi + "/api/product/updateProductNoImage", req)
      .then((response) => response.json())
      .then((data) => {
        if (data.status && data.status === "200") {
          this.componentDidMount();
          alert("Sửa thông tin quần áo thành công !");
        } else alert("Sửa thông tin quần áo thất bại !");
        console.log("Response từ server:", data);
      })
      .catch((error) => console.error("Lỗi POST:", error));
  };
  render() {
    const {
      name,
      category,
      supplier,
      manufacturer,
      description,
      variants,
      showVariantModal,
      variantForm,
      style,
      Material,
      Materials,
      styles,
      categories,
      suppliers,
      manufacturers,
    } = this.state;
    return (
      <div className="up-container">
        <h2>Update Product</h2>
        <form onSubmit={this.handleSubmit} className="up-form">
          <div style={{ display: "flex", gap: "12px" }}>
            <label>mã sản phẩm :</label>
            <div style={{ position: "relative", width: "300px" }}>
              <input
                type="text"
                value={this.state.inputValue}
                onChange={this.handleChangeProduct}
                placeholder="Nhập mã sản phẩm"
              />
              {this.state.suggestions.length > 0 && (
                <ul
                  style={{
                    position: "absolute",
                    background: "#fff",
                    border: "1px solid #ccc",
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    width: "100%",
                    zIndex: 10,
                  }}
                >
                  {this.state.suggestions.map((item, index) => (
                    <li
                      key={index}
                      onClick={() => this.handleSelect(item)}
                      style={{ padding: "8px", cursor: "pointer" }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <label>
            Tên sản phẩm:
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Danh mục:
            <select
              onChange={(e) =>
                this.handleSelectObject(e, "category", categories)
              }
              value={category[Object.keys(category)[0]] || ""}
            >
              <option value="">--Chọn--</option>
              {this.renderOption(categories)}
            </select>
          </label>
          <label>
            Style:
            <select
              onChange={(e) => this.handleSelectObject(e, "style", styles)}
              value={style[Object.keys(style)[0]] || ""}
            >
              <option value="">--Chọn--</option>
              {this.renderOption(styles)}
            </select>
          </label>
          <label>
            Nhà cung cấp:
            <select
              onChange={(e) =>
                this.handleSelectObject(e, "supplier", suppliers)
              }
              value={supplier[Object.keys(supplier)[0]] || ""}
            >
              <option value="">--Chọn--</option>
              {this.renderOption(suppliers)}
            </select>
          </label>

          <label>
            Chất Liệu:
            <select
              onChange={(e) =>
                this.handleSelectObject(e, "Material", Materials)
              }
              value={Material[Object.keys(Material)[0]] || ""}
            >
              <option value="">--Chọn--</option>
              {this.renderOption(Materials)}
            </select>
          </label>
          <label>
            Thương hiệu:
            <select
              onChange={(e) =>
                this.handleSelectObject(e, "manufacturer", manufacturers)
              }
              value={manufacturer[Object.keys(manufacturer)[0]] || ""}
            >
              <option value="">--Chọn--</option>
              {this.renderOption(manufacturers)}
            </select>
          </label>
          {/* selects for category, supplier, manufacturer, discount */}
          <label>
            Description:
            <textarea
              name="description"
              value={description}
              onChange={this.handleChange}
            />
          </label>

          {/* <div className="variant-section">
            <h3>Variants</h3>
            <button type="button" onClick={() => this.openVariantModal()}>
              Add Variant
            </button>
            <table className="variant-table">
              <thead>
                <tr>
                  <th>Seri</th>
                  <th>Color</th>
                  <th>Size</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {variants.map((v, i) => (
                  <tr key={i}>
                    <td>{v.seri}</td>
                    <td>{v.color}</td>
                    <td>{v.size}</td>
                    <td>
                      <button
                        type="button"
                        onClick={() => this.openVariantModal(i)}
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          this.setState({
                            variants: variants.filter((_, j) => j !== i),
                          })
                        }
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div> */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              type="submit"
              className="up-submit"
              onClick={this.saveProduct}
            >
              Save Product
            </button>
          </div>
        </form>

        {showVariantModal && (
          <div className="up-modal">
            <div className="up-modal-content">
              <h4>
                {this.state.editingIndex === null ? "Add" : "Edit"} Variant
              </h4>
              <label>
                Seri:
                <input
                  name="seri"
                  value={variantForm.seri}
                  onChange={this.handleVariantChange}
                />
              </label>
              <label>
                Color:
                <input
                  name="color"
                  value={variantForm.color}
                  onChange={this.handleVariantChange}
                />
              </label>
              <label>
                Size:
                <input
                  name="size"
                  value={variantForm.size}
                  onChange={this.handleVariantChange}
                />
              </label>
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
