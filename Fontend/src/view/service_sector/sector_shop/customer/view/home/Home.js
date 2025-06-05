import React, { Component } from "react";
import { urlapi } from "../../../../../../setting/store/const";
import SliderImage from "../../component/sub_layout/slide_image/SliderImage";
import BreadcrumbNavigation from "../../component/sub_layout/breadcrumb_navigation/BreadcrumbNavigation";
import Banner from "../../component/sub_layout/banner/Banner";
import ListProduct from "../../component/sub_layout/list_product/ListProduct";
import FilterProduct from "../../component/sub_layout/filter_product/FilterProduct";
import FilterAddress from "../../component/sub_layout/filter_adress/FilterAddress";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id_category: new URLSearchParams(this.props.location.search).get("code"),
      query: new URLSearchParams(this.props.location.search).get("query"),
      runGetListProduct: true,
      sort_product: "default",
      data_list: {},
      products: [],
      quantity: 0,
    };
    document.title = "Demo";
  }
  GetProducts() {
    fetch(urlapi + `/api/product/sellectAll/${this.state.quantity}/10/`)
      .then((response) => response.json())
      .then((data) => {
        if (data.status && data.status === "200") {
          console.log("data : ", data);
          const list_product = [...this.state.products, ...data.data];
          this.setState({
            products: [...this.state.products, ...data.data],
            quantity: list_product?.length,
          });
        }
        console.log(data);
      })
      .catch((error) => console.error(error));
  }
  SeatchProduct() {
    fetch(
      urlapi +
        `/api/product/sellectByProperty/all/all/?select=` +
        this.state.query
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.status && data.status === "200") {
          console.log("data : ", data);
          const list_product = [...this.state.products, ...data.data];
          this.setState({
            products: [...this.state.products, ...data.data],
            quantity: list_product?.length,
          });
        }
        console.log(data);
      })
      .catch((error) => console.error(error));
  }
  componentDidMount() {
    if (this.state.query) {
      this.SeatchProduct();
    } else this.GetProducts();
  }

  render() {
    console.log(this.state);
    return (
      <>
        <main>
          <section id="home-slider-home" className="mg-top-15 mg-0-mb">
            <div className="container pd-0-mb">
              <SliderImage />
            </div>
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
                    <ListProduct
                      list_product={this.state.products}
                      {...this.props}
                    />
                    {!this.state.query && (
                      <div className="collection-view-content">
                        <button
                          className="btn-collectionview"
                          onClick={() => this.GetProducts()}
                        >
                          Xem thêm
                        </button>
                      </div>
                    )}
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

export default Home;
