import React, { Component } from "react";
import BreadcrumbNavigation from "../../component/sub_layout/breadcrumb_navigation/BreadcrumbNavigation";
import Banner from "../../component/sub_layout/banner/Banner";
import ProductList from "../../component/sub_layout/list_product/ProductList";
import FilterProduct from "../../component/sub_layout/filter_product/FilterProduct";
import { urlapi } from "../../../../../../setting/store/const";
class ListProductCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id_category: new URLSearchParams(this.props.location.search).get("code"),
      runGetListProduct: true,
      list_product: [],
      sort_product: "default",
      data_list: {},
    };
    document.title = "Demo";
  }
  getListCategory = () => {
    fetch(
      urlapi +
        `/api/product/sellect/c_${this.props.match.params.id_category}/all/all/`
    )
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          list_product: data.data,
        })
      )
      .catch((error) => console.error(error));
  };

  componentDidMount = () => {
    this.getListCategory();
  };
  render() {
    console.log("ListProductCategory", this.state.list_product);
    return (
      <>
        <main>
          <section>
            <BreadcrumbNavigation
              prevPage={[{ pageName: "Trang chủ", link: "/" }]}
              thisPage="Danh Mục: "
            />
          </section>

          <section id="collection-template" className="collection-page">
            <div className="collection-body">
              <div className="container">
                <Banner
                  src={"https://file.hstatic.net/1000253775/file/diachi_dk.jpg"}
                  alt={"dddddd"}
                />
                <div className="row d-flex">
                  <div className="col-md-12 col-sm-12 col-xs-12 main-colection">
                    <FilterProduct />

                    <div className="result-filter-tag hidden">
                      <ul className="result-filter-full">
                        <li className="clear-all">
                          {" "}
                          Xóa hết{" "}
                          <i className="fa fa-times" aria-hidden="true"></i>
                        </li>
                      </ul>
                    </div>
                    <ProductList list_product={this.state.list_product} />

                    <div className="collection-view-content">
                      <button
                        className="btn-collectionview"
                        //style="display: block;"
                      >
                        Xem thêm
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </>
    );
  }
}

export default ListProductCategory;
