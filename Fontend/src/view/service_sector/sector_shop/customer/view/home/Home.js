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
      runGetListProduct: true,
      list_product: [],
      sort_product: "default",
      data_list: {},
    };
    document.title = "Demo";
    // fetch(urlapi + "/get_list_post/")
    //   .then((response) => response.json())
    //   .then((data) => this.setState({ data_list: data }))
    //   .catch((error) => console.error(error));
  }

  render() {
    console.log(this.state.data_list);
    return (
      <>
        <main>
          <section id="home-slider-home" className="mg-top-15 mg-0-mb">
            <div className="container pd-0-mb">
              {/*
             <SliderImage />*/}
            </div>
          </section>

          <section id="collection-template" className="collection-page">
            <div className="collection-body">
              <div className="container">
                {/*<Banner
                  src={"https://file.hstatic.net/1000253775/file/diachi_dk.jpg"}
                  alt={"dddddd"}
                /> */}
                <div className="row d-flex">
                  <div className="col-md-12 col-sm-12 col-xs-12 main-colection">
                    <ListProduct />
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
