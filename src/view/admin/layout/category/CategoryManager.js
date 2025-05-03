import React, { Component } from "react";
import "./CategoryManager.css";
import { define_nav } from "../../../../setting/store/const";

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

  handleAddCategory = () => {
    const { newCategoryName, selectedParentId, categories } = this.state;
    if (!newCategoryName.trim()) return;

    const newId = "cat_" + Math.random().toString(36).substr(2, 9);
    const newCategory = {
      id: newId,
      name: newCategoryName,
      parentId: selectedParentId,
    };

    this.setState({
      categories: [...categories, newCategory],
      newCategoryName: "",
    });
  };

  getCategoryPathById = (id) => {
    const { categories } = this.state;
    const path = [];

    let current = categories.find((cat) => cat.id === id);
    while (current) {
      path.unshift(current.id); // Thêm vào đầu để sắp thứ tự từ gốc đến id
      current = categories.find((cat) => cat.id === current.parentId);
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

  renderCategoryDropdown = (parentId = null) => {
    const { categories, selectedParentId, listCategory } = this.state;
    return (
      <ul className={parentId ? "navbar-nav d-block" : "navbar-nav"}>
        {categories
          .filter((cat) => cat.parentId === parentId)
          .map((cat) => (
            <li key={cat.id} className="nav-item dropdown">
              <button
                className={`nav-link btn btn-link dropdown-toggle ${
                  selectedParentId === cat.id ? "text-primary" : ""
                }`}
                onClick={() => this.handleSelectCategory(cat.id)}
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {cat.name} {selectedParentId === cat.id ? "(Đang chọn)" : ""}
              </button>
              {categories.some((c) => c.parentId === cat.id) && (
                <div
                  className={`dropdown-menu ${
                    listCategory.filter((item) => cat.id === item).length > 0
                      ? "show"
                      : ""
                  }  ${
                    listCategory.indexOf(cat.id, 0) === 0 ? "menu-first" : ""
                  }`}
                >
                  {this.renderCategoryDropdown(cat.id)}
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
    if (this.props.state_data.current_page.name !== define_nav.admin.categoryManager.name)
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
                    <button
                      className="btn btn-warning"
                      onClick={this.handleClearSelection}
                    >
                      Bỏ chọn danh mục
                    </button>
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
