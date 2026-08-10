import React, { Component } from "react";
import { urlapi } from "../../../../../../setting/store/const";
import DataTable from "react-data-table-component";

class ModalProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      searchText: "",
      list_shop: [],
      data: [],
      isShowList: true,
      nameProduct: "",
      brand: "",
      category: "",
      material: "",
      style: "",
      description: "",
      data_category: [],
      data_brand: [],
      data_material: [],
      data_style: [],
    };
  }
  handleRowClick = (row) => {
    console.log("Row clicked:", row);
    this.props.updateProduct({
      idProduct: row.idProduct,
      nameBrand: row.nameBrand,
      nameProduct: row.nameProduct,
      nameCategory: row.nameCategory,
      nameMaterial: row.nameMaterial,
      nameStyle: row.nameStyle,
      price: row.price,
      decrease: row.decrease,
    });
    this.setState({ show: false });
    if (this.props.onClose) {
      this.props.onClose();
    }
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  changShopName = (e) => {
    const value = e.target.value;
    this.setState({ shopName: value });
  };

  changAdress = (e) => {
    const value = e.target.value;
    this.setState({ adress: value });
  };

  changOpeningTime = (e) => {
    const value = e.target.value;
    this.setState({ openingTime: value });
  };

  changCloseTime = (e) => {
    const value = e.target.value;
    this.setState({ closeTime: value });
  };

  handleClose = () => {
    this.setState({ show: false });
    if (this.props.onClose) {
      this.props.onClose(); // gọi hàm đóng từ component cha nếu có
    }
  };
  handleShowList = () => {
    this.setState({ isShowList: true });
  };

  handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    const { list_shop } = this.state;

    const filtered = list_shop.filter(
      (p) =>
        p.idProduct.toLowerCase().includes(value) ||
        p.nameProduct.toLowerCase().includes(value) ||
        p.nameBrand.toLowerCase().includes(value) ||
        p.nameCategory.toLowerCase().includes(value) ||
        p.nameStyle.toLowerCase().includes(value) ||
        p.nameMaterial.toLowerCase().includes(value)
    );
    this.setState({ searchText: value, data: filtered });
  };
  AddProduct = () => {
    const req = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // dữ liệu gửi lên server
        nameProduct: this.state.nameProduct,
        idBrand: this.state.brand,
        idCategory: this.state.category,
        idMaterial: this.state.material,
        idStyle: this.state.style,
        description: this.state.description,
        status: true,
      }),
    };
    fetch(urlapi + "/api/product/insertProductFormSlip", req)
      .then((response) => response.json())
      .then((data) => {
        console.log("Response từ server:", data);
        if (data.status === "200") alert("Thêm Sản Phẩm Thành Công!");
        // cập nhật state nếu cần
        this.setState({ message: data.message });
        this.getListProduct();
      })
      .catch((error) => console.error("Lỗi POST:", error));
  };
  getListProduct = () => {
    fetch(`${urlapi}/api/product/sellectBySupplier/all/all/?idSupplier=${this.props.idSupplier}`)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          show: this.props.isOpen,
          list_shop: data.data,
          data: data.data,
        },()=>console.log("Data get list product : ",data))
      )
      .catch((error) => console.error(error));
  };
  componentDidUpdate(prevProps) {
    // Khi mở modal
    if (!prevProps.isOpen && this.props.isOpen) {
        this.setState({
            show: true
        });

        console.log("idSupplier:", this.props.idSupplier);

        if (this.props.idSupplier) {
            this.getListProduct();
        }
    }
}
  componentDidMount() {
    fetch(urlapi + "/api/ProductCategory/sellectAll/all/all/")
      .then((response) => response.json())
      .then((data) => this.setState({ data_category: data.data }))
      .catch((error) => console.error(error));

    fetch(urlapi + "/api/Style/sellectAll/all/all/")
      .then((response) => response.json())
      .then((data) => this.setState({ data_style: data.data }))
      .catch((error) => console.error(error));

    fetch(urlapi + "/api/Brand/sellectAll/all/all/")
      .then((response) => response.json())
      .then((data) => this.setState({ data_brand: data.data }))
      .catch((error) => console.error(error));

    fetch(urlapi + "/api/ProductMaterial/sellectAll/all/all/")
      .then((response) => response.json())
      .then((data) => this.setState({ data_material: data.data }))
      .catch((error) => console.error(error));

    this.columns = [
      { name: "STT", selector: (row, index) => index + 1, width: "80px" },
      { name: "Mã Sản Phẩm", selector: (row) => row.idProduct, width: "200px" },
      {
        name: "Tên Sản Phẩm",
        selector: (row) => row.nameProduct,
        sortable: true,
        width: "200px",
      },
      {
        name: "Thương Hiệu",
        selector: (row) => row.nameBrand,
        sortable: true,
        width: "200px",
      },
      {
        name: "Danh Mục",
        selector: (row) => row.nameCategory,
        sortable: true,
        width: "200px",
      },
      {
        name: "Style",
        selector: (row) => row.nameStyle,
        sortable: true,
        width: "200px",
      },
      {
        name: "Chất Liệu",
        selector: (row) => row.nameMaterial,
        sortable: true,
        width: "200px",
      },
      {
        name: "Giá Cả",
        selector: (row) => row.price,
        sortable: true,
        width: "200px",
      },
      {
        name: "Giảm giá",
        selector: (row) => row.decrease * 100 + "%" || "",
        sortable: true,
        width: "200px",
      },
    ];
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isOpen !== this.props.isOpen) {
      this.setState({ show: this.props.isOpen });
    }
  }
  onRowClick = (state, rowInfo, column, instance) => {
    alert("aaa");
    return {
      onClick: (e) => {
        console.log("A Td Element was clicked!");
        console.log("it produced this event:", e);
        console.log("It was in this column:", column);
        console.log("It was in this row:", rowInfo);
        console.log("It was in this table instance:", instance);
      },
    };
  };

  render() {
    const { show } = this.state;
    console.log("data modal product : ", this.state);
    console.log("data props modal product : ", this.props);
    if (!show) return null;
    return (
      <div
        className="modal fade show d-block"
        tabIndex="-1"
        role="dialog"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <div
          className="modal-dialog  modal-dialog-centered"
          role="document"
          style={{ maxWidth: "none", width: "1100px", margin: "1.75rem auto" }}
        >
          <div
            className="modal-content"
            style={{
              width: "1100px",
              minHeight: "500px",
              height: "550px",
              maxHeight: "600px",
            }}
          >
            <div className="modal-header" style={{ width: "1100px" }}>
              <h5 className="modal-title">Chọn Sản Phẩm</h5>
              <button
                type="button"
                className="close btn"
                onClick={this.handleClose}
              >
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {this.state.isShowList && (
                <div className="row">
                  <div className="row d-flex justify-content-between align-items-center mb-3">
                    <button
                      className="btn btn-primary ml-3"
                      onClick={() => this.setState({ isShowList: false })}
                      style={{ width: "100px" }}
                    >
                      [<i className="fa-solid fa-plus"></i>]&nbsp;Add
                    </button>
                    <input
                      type="text"
                      placeholder="Tìm kiếm sản phẩm..."
                      className="col-5 border p-2 rounded form-control-sm"
                      onChange={this.handleSearch}
                      value={this.state.searchText}
                      style={{ float: "right" }}
                    />
                  </div>
                  <div className="row">
                    <DataTable
                      columns={this.columns}
                      data={this.state.data}
                      pagination
                      onRowClicked={this.handleRowClick}
                      paginationPerPage={5} // 👈 Số dòng mỗi trang
                      paginationRowsPerPageOptions={[5]} // 👈 Ẩn tùy chọn khác
                      highlightOnHover
                      striped
                      responsive
                    />
                  </div>
                </div>
              )}
              {!this.state.isShowList && (
                <div className="row">
                  <div className="form-group mt-3">
                    <div className="row">
                      <label
                        htmlFor="nameProduct"
                        className="col-sm-2 col-form-label"
                      >
                        Tên Sản Phẩm
                      </label>
                      <div className="col-sm">
                        <input
                          type="text"
                          className="form-control form-control-sm"
                          id="nameProduct"
                          name="nameProduct"
                          value={this.state.nameProduct}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group mt-3">
                    <div className="row">
                      <label
                        htmlFor="brand"
                        className="col-sm-2 col-form-label"
                      >
                        Thương Hiệu
                      </label>
                      <div className="col-sm">
                        <select
                          id="brand"
                          name="brand"
                          className="form-control"
                          value={this.state.brand}
                          onChange={this.handleChange}
                        >
                          <option value="">Choose...</option>
                          {this.state.data_brand.map((item) => (
                            <option key={item.idBrand} value={item.idBrand}>
                              {item.nameBrand}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="form-group mt-3">
                    <div className="row">
                      <label
                        htmlFor="category"
                        className="col-sm-2 col-form-label"
                      >
                        Danh Mục
                      </label>
                      <div className="col-sm">
                        <select
                          id="category"
                          name="category"
                          className="form-control"
                          value={this.state.category}
                          onChange={this.handleChange}
                        >
                          <option value="">Choose...</option>
                          {this.state.data_category.map((item) => (
                            <option
                              key={item.idCategory}
                              value={item.idCategory}
                            >
                              {item.nameCategory}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="form-group mt-3">
                    <div className="row">
                      <label
                        htmlFor="material"
                        className="col-sm-2 col-form-label"
                      >
                        Chất Liệu
                      </label>
                      <div className="col-sm">
                        <select
                          id="material"
                          name="material"
                          className="form-control"
                          value={this.state.material}
                          onChange={this.handleChange}
                        >
                          <option value="">Choose...</option>
                          {this.state.data_material.map((item) => (
                            <option
                              key={item.idMaterial}
                              value={item.idMaterial}
                            >
                              {item.nameMaterial}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="form-group mt-3">
                    <div className="row">
                      <label
                        htmlFor="style"
                        className="col-sm-2 col-form-label"
                      >
                        Style
                      </label>
                      <div className="col-sm">
                        <select
                          id="style"
                          name="style"
                          className="form-control"
                          value={this.state.style}
                          onChange={this.handleChange}
                        >
                          <option value="">Choose...</option>
                          {this.state.data_style.map((item) => (
                            <option key={item.idStyle} value={item.idStyle}>
                              {item.nameStyle}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="form-group mt-3">
                    <div className="row">
                      <label
                        htmlFor="description"
                        className="col-sm-2 col-form-label"
                      >
                        Mô Tả
                      </label>
                      <div className="col-sm">
                        <textarea
                          className="form-control form-control-sm"
                          id="description"
                          name="description"
                          rows="3"
                          value={this.state.description}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {!this.state.isShowList && (
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={this.handleShowList}
                >
                  Back
                </button>
                <button className="btn btn-primary" onClick={this.AddProduct}>
                  Thêm Sản Phẩm
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default ModalProduct;
