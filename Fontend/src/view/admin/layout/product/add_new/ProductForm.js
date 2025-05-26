import React from "react";
import "./ProductForm.css";
import { define_nav, urlapi } from "../../../../../setting/store/const";

const convert = (arr, prefix) =>
  arr.map((val, i) => ({
    id: `${prefix}${String(i + 1).padStart(3, "0")}`,
    value: val,
  }));

class ProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      importPrice: "",
      salePrice: "",
      selectedColor: "",
      selectedSize: "",
      description: "",
      category: "",
      supplier: "",
      manufacturer: "",
      discountCode: "",
      mainImage: null,
      subImages: [],
      seriEntries: [],
      modalOpen: false,
      sizeModalOpen: false,
      newSeri: "",
      newSeriColor: "",
      newSeriSize: "",
      newSeriQty: "",

      colors: convert(["Xanh Wash", "Xám Xanh Wash"], "C"),
      sizes: convert(["29", "30", "31", "32", "34", "36"], "S"),
      categories: convert(["Quần jean", "Aó thun", "Aó khoác"], "CT"),
      suppliers: convert(["Công ty ABC", "Nhà cung cấp XYZ"], "SUP"),
      manufacturers: convert(["Xưởng A", "Xưởng B"], "MNF"),
      discountCodes: convert(["KM2024", "KM50"], "DC"),
    };
  }

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
  handleChangeImageMain = (e) => {
    let file = e.target.files[0];
    const formData = new FormData();
    formData.append("addimages", file);
    const req = {
      method: "POST",
      body: formData,
    };
    fetch(urlapi + "/api/Image/upload1/product/P001", req)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "200") alert("Thêm Image Thành Công!");
        console.log("Response từ server:", data);
      })
      .catch((error) => console.error("Lỗi POST:", error));
  };

  handleSelectObject = (e, field, list) => {
    const selectedId = e.target.value;
    const selected = list.find((item) => item.id === selectedId);
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
      <option key={item.id} value={item.id}>
        {item.value}
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
      selectedColor,
      selectedSize,
      description,
      category,
      supplier,
      manufacturer,
      discountCode,
      colors,
      sizes,
      categories,
      suppliers,
      manufacturers,
      discountCodes,
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
                value={category.id || ""}
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
                value={supplier.id || ""}
              >
                <option value="">--Chọn--</option>
                {this.renderOption(suppliers)}
              </select>
            </label>

            <label>
              Nhà sản xuất:
              <select
                onChange={(e) =>
                  this.handleSelectObject(e, "manufacturer", manufacturers)
                }
                value={manufacturer.id || ""}
              >
                <option value="">--Chọn--</option>
                {this.renderOption(manufacturers)}
              </select>
            </label>

            <label>
              Mã khuyến mãi:
              <select
                onChange={(e) =>
                  this.handleSelectObject(e, "discountCode", discountCodes)
                }
                value={discountCode.id || ""}
              >
                <option value="">--Chọn--</option>
                {this.renderOption(discountCodes)}
              </select>
            </label>

            <label>
              Hình chính:
              <input
                type="file"
                name="mainImage"
                accept="image/*"
                onChange={this.handleChangeImageMain}
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
                    value={newSeriColor.id || ""}
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
                    value={newSeriSize.id || ""}
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
