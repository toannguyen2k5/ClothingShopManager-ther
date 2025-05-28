import React from "react";
import "./ProductForm.css";
import { define_nav, urlapi } from "../../../../../setting/store/const";

class ProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shop: "",
      shops: [],
      name: "", // v
      importPrice: "", // v
      salePrice: "", // v
      selectedColor: "", // v
      selectedSize: "", // v
      description: "", // v
      category: "", // v
      style: "",
      Material: "",
      supplier: "", // v
      manufacturer: "", // v
      mainImage: null, // v
      subImages: [], // v
      seriEntries: [], // v
      modalOpen: false, // v
      sizeModalOpen: false, // v
      newSeri: "", // v
      newSeriColor: "", // v
      newSeriSize: "", // v
      newSeriQty: "", // v
      Materials: [],
      styles: [],
      colors: [], // v
      sizes: [], // v
      categories: [], // v
      suppliers: [], // v
      manufacturers: [], // v
    };
  }
  componentDidMount = () => {
    // lấy thông tin shop
    fetch(
      urlapi +
        "/api/ListWarehouseInCharge/sellect?idStaff=" +
        this.props.state_data.user_info.id_user
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.status && data.status === "200") {
          console.log("data shop: ", data);
          this.setState({ shops: data.data });
        }
        console.log(data);
      })
      .catch((error) => console.error(error));
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
  };
  handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      if (name === "mainImage") {
        this.setState({ mainImage: files[0] });
      } else if (name === "subImages") {
        this.setState({ subImages: Array.from(files).slice(0, 10) });
      }
    } else {
      this.setState({ [name]: value });
    }
  };

  handleSelectObject = (e, field, list) => {
    const selectedId = e.target.value;
    const selected = list.find(
      (item) => item[Object.keys(item)[0]] === selectedId
    );
    this.setState({ [field]: selected || "" });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", this.state);
  };

  addSeriEntry = () => {
    const {
      newSeri,
      newSeriColor,
      newSeriSize,
      shop,
      newSeriQty,
      seriEntries,
    } = this.state;
    if (newSeri && newSeriColor && newSeriSize && newSeriQty) {
      this.setState(
        {
          seriEntries: [
            ...seriEntries,
            {
              seri: newSeri,
              color: newSeriColor,
              size: newSeriSize,
              qty: newSeriQty,
              shop: shop,
            },
          ],
          newSeri: "",
          newSeriColor: "",
          newSeriSize: "",
          newSeriQty: "",
          modalOpen: false,
          shop: "",
        },
        () => {
          console.log("Dữ liệu sau khi cập nhật:", this.state.seriEntries);
        }
      );
    }
  };
  addInforToDataBase = () => {
    // thêm dữ liệu vào bảng
    console.log("data state :", this.state);
    const isoDate = new Date().toISOString().split("T")[0];
    const formData = new FormData();
    formData.append("nameProduct", this.state.name);
    formData.append("idStyle", this.state.style.idStyle);
    formData.append("idMaterial", this.state.Material.idMaterial);
    formData.append("idBrand", this.state.manufacturer.idBrand);
    formData.append("idCategory", this.state.category.idCategory);
    formData.append("idSupplier", this.state.supplier.idSupplier);
    formData.append("description", this.state.description);
    this.state.seriEntries.forEach((entry, index) => {
      // thêm vào detail
      formData.append(`detailProducts[${index}].idDetail`, null);
      formData.append(`detailProducts[${index}].numberSeri`, entry.seri);
      formData.append(`detailProducts[${index}].idSize`, entry.size.idSize);
      formData.append(`detailProducts[${index}].dayImport`, isoDate);
      formData.append(`detailProducts[${index}].status`, true);
      formData.append(`detailProducts[${index}].idProduct`, null);
      formData.append(`detailProducts[${index}].sellStatus`, true);
      formData.append(`detailProducts[${index}].idColor`, entry.color.idColor);
      // thêm vào inventory
      formData.append(`InventoryShops[${index}].idList`, null);
      formData.append(`InventoryShops[${index}].idShop`, entry.shop.idShop);
      formData.append(`InventoryShops[${index}].idDetail`, null);
      formData.append(`InventoryShops[${index}].quantity`, entry.qty);
    });
    formData.append(`prices[0].idPrice`, null);
    formData.append(`prices[0].idProduct`, null);
    formData.append(`prices[0].dateUpdate`, isoDate);
    formData.append(`prices[0].price`, this.state.importPrice);
    formData.append(`prices[0].status`, false);
    formData.append(`prices[1].idPrice`, null);
    formData.append(`prices[1].idProduct`, null);
    formData.append(`prices[1].dateUpdate`, isoDate);
    formData.append(`prices[1].price`, this.state.salePrice);
    formData.append(`prices[1].status`, true);
    if (this.state.mainImage) {
      formData.append("mainImage", this.state.mainImage);
    }
    if (this.state.subImages) {
      for (let i = 0; i < this.state.subImages.length; i++) {
        formData.append("subImages", this.state.subImages[i]); // Tên field phải khớp với backend
      }
    }
    // Gửi request
    fetch(`${urlapi}/api/product/inserProduct`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status && data.status == "200") {
          alert("thêm sản phẩm mới thành công !");
        } else alert("thêm sản phẩm mới thất bại !");
        console.log("Response:", data.data);
      })
      .catch((err) => console.error("Error:", err));
  };
  openSizeModal = () => {
    this.setState({ sizeModalOpen: true });
  };

  closeSizeModal = () => {
    this.setState({ sizeModalOpen: false });
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

  render() {
    if (
      this.props.state_data.current_page.name !==
      define_nav.admin.newproduct.name
    )
      this.props.actions.current_page({
        name_new: define_nav.admin.newproduct.name,
        path_new: define_nav.admin.newproduct.path,
        old_page: this.props.state_data.current_page,
      });
    const {
      name,
      shop,
      shops,
      importPrice,
      salePrice,
      description,
      category,
      style,
      supplier,
      manufacturer,
      Material,
      Materials,
      colors,
      styles,
      sizes,
      categories,
      suppliers,
      manufacturers,
      seriEntries,
      modalOpen,
      sizeModalOpen,
      newSeri,
      newSeriColor,
      newSeriSize,
      newSeriQty,
    } = this.state;

    return (
      <div className="row">
        <div className="product-form-wrapper">
          <form className="product-form" onSubmit={this.handleSubmit}>
            <label>
              Tên sản phẩm:
              <input
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
              />
            </label>

            <div className="price-fields">
              <label>
                Giá nhập:
                <input
                  type="number"
                  name="importPrice"
                  value={importPrice}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                Giá bán:
                <input
                  type="number"
                  name="salePrice"
                  value={salePrice}
                  onChange={this.handleChange}
                />
              </label>
            </div>

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
            <label>
              Hình chính:
              <input
                type="file"
                name="mainImage"
                accept="image/*"
                onChange={this.handleChange}
              />
            </label>

            <label>
              Hình phụ (tối đa 10):
              <input
                type="file"
                name="subImages"
                accept="image/*"
                multiple
                onChange={this.handleChange}
              />
            </label>

            <label>
              Mô tả:
              <textarea
                name="description"
                value={description}
                onChange={this.handleChange}
              ></textarea>
            </label>

            <div className="seri-buttons">
              <button
                type="button"
                onClick={() => this.setState({ modalOpen: true })}
              >
                Thêm Seri + Size + Màu
              </button>
            </div>

            <ul className="seri-list">
              {seriEntries.map((item, idx) => (
                <li key={idx}>
                  Seri: {item.seri} - Color: {item.color?.nameColor} - Size
                  {": "}
                  {item.size?.nameSize} - SL: {item.qty} - Shop:{" "}
                  {item.shop?.nameShop}
                </li>
              ))}
            </ul>

            <button
              type="submit"
              className="submit-btn"
              onClick={this.addInforToDataBase}
            >
              Tạo sản phẩm
            </button>
          </form>

          {modalOpen && (
            <div className="product-form-modal-overlay">
              <div className="product-form-modal">
                <h3>Thêm Seri</h3>
                <label>
                  Mã Seri:
                  <input
                    type="text"
                    value={newSeri}
                    onChange={(e) => this.setState({ newSeri: e.target.value })}
                  />
                </label>
                <label>
                  Màu:
                  <select
                    onChange={(e) =>
                      this.handleSelectObject(e, "newSeriColor", colors)
                    }
                    value={newSeriColor[Object.keys(newSeriColor)[0]] || ""}
                  >
                    <option value="">--Chọn--</option>
                    {this.renderOption(colors)}
                  </select>
                </label>
                <label>
                  Size:
                  <select
                    onChange={(e) =>
                      this.handleSelectObject(e, "newSeriSize", sizes)
                    }
                    value={newSeriSize[Object.keys(newSeriSize)[0]] || ""}
                  >
                    <option value="">--Chọn--</option>
                    {this.renderOption(sizes)}
                  </select>
                </label>
                <label>
                  Số lượng:
                  <input
                    type="number"
                    value={newSeriQty}
                    onChange={(e) =>
                      this.setState({ newSeriQty: e.target.value })
                    }
                  />
                </label>
                <label>
                  tên shop:
                  <select
                    onChange={(e) => this.handleSelectObject(e, "shop", shops)}
                    value={shop[Object.keys(shop)[0]] || ""}
                  >
                    <option value="">--Chọn--</option>
                    {this.renderOption(shops)}
                  </select>
                </label>
                <div className="modal-actions modal-foote">
                  <button
                    onClick={this.addSeriEntry}
                    type="button"
                    class="btn btn-outline-success btn-sm"
                  >
                    Thêm
                  </button>
                  <button
                    onClick={() => this.setState({ modalOpen: false })}
                    type="button"
                    class="btn btn-outline-danger btn-sm"
                  >
                    Hủy
                  </button>
                </div>
              </div>
            </div>
          )}

          {sizeModalOpen && (
            <div className="product-form-modal-overlay">
              <div className="product-form-modal">
                <h3>Quản lý Size</h3>
                <p>
                  Thêm các size: XS, S, M, L, XL, XXL, XXXL (sẽ thêm tính năng
                  này sau)
                </p>
                <button onClick={this.closeSizeModal}>Đóng</button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default ProductForm;
