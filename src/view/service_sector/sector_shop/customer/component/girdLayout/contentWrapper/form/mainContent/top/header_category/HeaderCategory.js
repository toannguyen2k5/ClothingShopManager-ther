import React, { Component } from "react";
import { urlapi } from "../../../../../../../../../../../setting/store/const";

export default class HeaderCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      parentCategories: [],
      childCategories: [],
    };
  }

  getListCategory = () => {
    fetch(urlapi + "/api/ProductCategory/sellectAll/all/all/")
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          categories: data.data,
          parentCategories: data.data.filter((cat) => !cat.idParentCategory),
          childCategories: data.data.filter((cat) => cat.idParentCategory),
        })
      )
      .catch((error) => console.error(error));
  };

  getChildren = (parentId) => {
    return this.state.childCategories.filter(
      (child) => child.idParentCategory === parentId
    );
  };

  componentDidMount = () => {
    this.getListCategory();
  };
  render() {
    return (
        <div className="header-bottom">
        <div className="container">
          <div className="d-flex d-flex-center">
            <nav className="hidden-sm hidden-xs site-nav-menu">
              <ul className="d-flex js-center">
                <li>
                  <a href="/shop/list_product/c_product_new">
                    <span>🔎 HÀNG MỚI</span>
                  </a>
                  <span className="header_new">New</span>
                </li>
                {this.state.categories
                  .filter((cat) => !cat.idParentCategory)
                  .map((parent) => {
                    const children = this.state.categories.filter(
                      (child) => child.idParentCategory === parent.idCategory
                    );
      
                    return (
                      <li key={parent.idCategory}>
                        <a href={`/shop/list_product/c_${parent.idCategory}`}>
                          <span>{parent.nameCategory}</span>
                          {children.length > 0 && (
                            <i className="fa-chevron-down" aria-hidden="true"></i>
                          )}
                        </a>
      
                        {children.length > 0 && (
                          <div className="sub_top_menu">
                            <ul className="sub_menu_dropdown">
                              {children.map((child) => (
                                <li key={child.idCategory}>
                                  <a
                                    href={`/shop/list_product/c_${child.idCategory}`}
                                    title={child.nameCategory}
                                  >
                                    {child.nameCategory}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </li>
                    );
                  })}
      
                {/* Các mục menu tĩnh khác bạn muốn giữ lại */}
                <li>
                  <a href="/blogs/all">
                    <span>TIN THỜI TRANG</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      
    );
  }
}
