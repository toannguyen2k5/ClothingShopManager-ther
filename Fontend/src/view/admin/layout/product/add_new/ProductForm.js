import React from "react";
import "./ProductForm.css";
import { define_nav, urlapi } from "../../../../../setting/store/const";

class ProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "", // v
      importPrice: "", // v
      salePrice: "", // v
      selectedColor: "", // v
      selectedSize: "", // v
      description: "", // v
      category: "", // v
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

      colors: [], // v
      sizes: [], // v
      categories: [], // v
      suppliers: [], // v
      manufacturers: [], // v
    };
  }
  componentDidMount = () => {
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
    const { newSeri, newSeriColor, newSeriSize, newSeriQty, seriEntries } =
      this.state;
    if (newSeri && newSeriColor && newSeriSize && newSeriQty) {
      this.setState({
        seriEntries: [
          ...seriEntries,
          {
            seri: newSeri,
            color: newSeriColor,
            size: newSeriSize,
            qty: newSeriQty,
          },
        ],
        newSeri: "",
        newSeriColor: "",
        newSeriSize: "",
        newSeriQty: "",
        modalOpen: false,
      });
    }
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
      importPrice,
      salePrice,
      description,
      category,
      supplier,
      manufacturer,
      colors,
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
              <button type="button" onClick={this.openSizeModal}>
                Quản lý Size mở rộng
              </button>
            </div>

            <ul className="seri-list">
              {seriEntries.map((item, idx) => (
                <li key={idx}>
                  {item.seri} - {item.color?.value} - {item.size?.value} - SL:{" "}
                  {item.qty}
                </li>
              ))}
            </ul>

            <button type="submit" className="submit-btn">
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
