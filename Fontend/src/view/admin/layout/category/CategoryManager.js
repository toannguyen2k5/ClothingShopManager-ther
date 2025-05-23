import React, { Component } from "react";
import "./CategoryManager.css";
import { define_nav, urlapi } from "../../../../setting/store/const";

class CategoryManagerNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      selectedParentId: null,
      listCategory: [],
      newCategoryName: "",
    };
  }

  handleInputChange = (e) => {
    this.setState({ newCategoryName: e.target.value });
  };

  getListCategory = () => {
    fetch(urlapi + "/api/ProductCategory/sellectAll/all/all/")
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          categories: data.data,
        })
      )
      .catch((error) => console.error(error));
  };

  componentDidMount = () => {
    this.getListCategory();
  };
  AddShop = () => {};
  handleAddCategory = () => {
    const { newCategoryName, selectedParentId, categories } = this.state;
    if (!newCategoryName.trim()) return;
    const req = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // dữ liệu gửi lên server
        nameCategory: newCategoryName,
        idParentCategory: selectedParentId,
      }),
    };
    fetch(urlapi + "/api/ProductCategory/insertProductCategory", req)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "200") alert("Thêm Cửa Hàng Thành Công!");
        console.log("Response từ server:", data);
        // cập nhật state nếu cần
        const newCategory = {
          idCategory: data.idCategory,
          nameCategory: newCategoryName,
          idParentCategory: selectedParentId,
        };

        this.setState({
          categories: [...categories, newCategory],
          newCategoryName: "",
        });
      })
      .catch((error) => console.error("Lỗi POST:", error));
  };

  getCategoryPathById = (id) => {
    const { categories } = this.state;
    const path = [];

    let current = categories.find((cat) => cat.idCategory === id);
    while (current) {
      path.unshift(current.idCategory); // Thêm vào đầu để sắp thứ tự từ gốc đến id
      current = categories.find(
        (cat) => cat.idCategory === current.idParentCategory
      );
    }

    return path;
  };

  handleSelectCategory = (id) => {
    let listCategory = this.getCategoryPathById(id);

    this.setState({ selectedParentId: id, listCategory: listCategory });
  };

  handleClearSelection = () => {
    this.setState({ selectedParentId: null, listCategory: [] });
  };
  handleDeleteSelection = (selectedParentId) => {
    
    this.setState({ selectedParentId: null, listCategory: [] });
  };


  renderCategoryDropdown = (parentId = null) => {
    const { categories, selectedParentId, listCategory } = this.state;
    return (
      <ul className={parentId ? "navbar-nav d-block" : "navbar-nav"}>
        {categories
          .filter((cat) => cat.idParentCategory === parentId)
          .map((cat) => (
            <li key={cat.idCategory} className="nav-item dropdown">
              <button
                className={`nav-link btn btn-link dropdown-toggle ${
                  selectedParentId === cat.idCategory ? "text-primary" : ""
                }`}
                onClick={() => this.handleSelectCategory(cat.idCategory)}
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {cat.nameCategory}{" "}
                {selectedParentId === cat.idCategory ? "(Đang chọn)" : ""}
              </button>
              {categories.some(
                (c) => c.idParentCategory === cat.idCategory
              ) && (
                <div
                  className={`dropdown-menu ${
                    listCategory.filter((item) => cat.idCategory === item)
                      .length > 0
                      ? "show"
                      : ""
                  }  ${
                    listCategory.indexOf(cat.idCategory, 0) === 0
                      ? "menu-first"
                      : ""
                  }`}
                >
                  {this.renderCategoryDropdown(cat.idCategory)}
                </div>
              )}
            </li>
          ))}
      </ul>
    );
  };

  render() {
    const { categories, newCategoryName, selectedParentId, listCategory } =
      this.state;
    if (
      this.props.state_data.current_page.name !==
      define_nav.admin.categoryManager.name
    )
      this.props.actions.current_page({
        name_new: define_nav.admin.categoryManager.name,
        path_new: define_nav.admin.categoryManager.path,
        old_page: this.props.state_data.current_page,
      });
    return (
      <div className="row">
        <div className="category-navbar container">
          {categories.length === 0 ? (
            <div className="empty-state">
              <p>Chưa có danh mục nào.</p>
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Tên danh mục gốc"
                value={newCategoryName}
                onChange={this.handleInputChange}
              />
              <button
                className="btn btn-success"
                onClick={this.handleAddCategory}
              >
                Tạo danh mục đầu tiên
              </button>
            </div>
          ) : (
            <>
              <div className="add-category-form">
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Tên danh mục mới"
                  value={newCategoryName}
                  onChange={this.handleInputChange}
                />
                <div className="d-flex gap-2">
                  <button
                    className="btn btn-primary"
                    onClick={this.handleAddCategory}
                  >
                    Thêm vào danh mục đang chọn
                  </button>
                  {selectedParentId && (
                    <>
                    <button
                      className="btn btn-warning"
                      onClick={this.handleClearSelection}
                    >
                      Bỏ chọn danh mục
                    </button>
                    <button
                    className="btn btn-danger"
                    onClick={()=>this.handleDeleteSelection(selectedParentId)}
                  >
                    Xóa danh mục
                  </button>
                    </>
                  )}
                </div>
              </div>
              <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
                {this.renderCategoryDropdown()}
              </nav>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default CategoryManagerNavbar;
