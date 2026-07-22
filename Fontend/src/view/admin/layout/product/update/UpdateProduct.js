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
      product: {},

      material: "",
      materials: [],
      style: "",
      styles: [],
      category: "",
      categories: [],
      supplier: "",
      suppliers: [],
      manufacturer: "",
      manufacturers: [],
    };
  }

componentDidMount = async () => {
    const [
        productRes,
        categoryRes,
        supplierRes,
        brandRes,
        styleRes,
        MaterialRes
    ] = await Promise.all([
        fetch(urlapi + "/api/detailproduct/sellect/detailProperty?idProduct=" + this.props.idProduct),
        fetch(urlapi + "/api/ProductCategory/sellectAll/all/all/"),
        fetch(urlapi + "/api/Supplier/sellectAll/all/all/"),
        fetch(urlapi + "/api/Brand/sellectAll/all/all/"),
        fetch(urlapi + "/api/Style/sellectAll/all/all/"),
        fetch(urlapi + "/api/ProductMaterial/sellectAll/all/all/")
    ]);

    const productData = await productRes.json();
    const categoryData = await categoryRes.json();
    const supplierData = await supplierRes.json();
    const brandData = await brandRes.json();
    const styleData = await styleRes.json();
    const materialData = await MaterialRes.json();

    const product = productData.data;
    console.log("productData : ", productData);
    const materials = materialData.data;
    console.log("materialData : ", materialData);
    const styles = styleData.data;
    const categories = categoryData.data;
    const suppliers = supplierData.data;
    const manufacturers = brandData.data;

    this.setState({
        product,
        name: product.nameProduct,
        description: product.description,

        materials,
        styles,
        categories,
        suppliers,
        manufacturers,

        material: materials.find(x => x.nameMaterial === product.nameMaterial),
        style: styles.find(x => x.nameStyle === product.nameStyle),
        category: categories.find(x => x.nameCategory === product.nameCategory),
        supplier: suppliers.find(x => x.nameSupplier === product.nameSupplier),
        manufacturer: manufacturers.find(x => x.nameBrand === product.nameBrand),
    });
}

  handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      if (name === "mainImage") this.setState({ mainImage: files[0] });
      else this.setState({ subImages: Array.from(files).slice(0, 10) });
    } else this.setState({ [name]: value });
  };

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
  saveProduct = () => {
    const req = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        idProduct: this.props.idProduct,
        nameProduct: this.state.name,
        idStyle: this.state.style.idStyle,
        idMaterial: this.state.material.idMaterial,
        idBrand: this.state.manufacturer.idBrand,
        idCategory: this.state.category.idCategory,
        idSupplier: this.state.supplier.idSupplier,
        status: this.state.product.status,
        description: this.state.description,
      }),
    };
    console.log("Request body:", req.body);
    fetch(urlapi + "/api/product/updateProductNoImage", req)
      .then((response) => response.json())
      .then((data) => {
        if (data.status && data.status === "200") {
          this.componentDidMount();
          alert("Sửa thông tin quần áo thành công !");
          this.props.onClose(); // Close the modal after successful update
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
      style,
      material,
      materials,
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
                value={this.props.idProduct}
                onChange={this.handleChange}
                placeholder="Nhập mã sản phẩm"
                disable
              />
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
              value={category ? category[Object.keys(category)[0]] : ""}
            >
              <option value="">--Chọn--</option>
              {this.renderOption(categories)}
            </select>
          </label>
          <label>
            Style:
            <select
              onChange={(e) => this.handleSelectObject(e, "style", styles)}
              value={style ? style[Object.keys(style)[0]] : ""}
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
              value={supplier ? supplier[Object.keys(supplier)[0]] : ""}
            >
              <option value="">--Chọn--</option>
              {this.renderOption(suppliers)}
            </select>
          </label>

          <label>
            Chất Liệu:
            <select
              onChange={(e) =>
                this.handleSelectObject(e, "material", materials)
              }
              value={material ? material[Object.keys(material)[0]] : ""}
            >
              <option value="">--Chọn--</option>
              {this.renderOption(materials)}
            </select>
          </label>
          <label>
            Thương hiệu:
            <select
              onChange={(e) =>
                this.handleSelectObject(e, "manufacturer", manufacturers)
              }
              value={manufacturer ? manufacturer[Object.keys(manufacturer)[0]] : ""}
            >
              <option value="">--Chọn--</option>
              {this.renderOption(manufacturers)}
            </select>
          </label>
          <label>
            Description:
            <textarea
              style={{ width: "100%", height: "300px" }}
              name="description"
              value={description}
              onChange={this.handleChange}
            />
          </label>
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
      </div>
    );
  }
}