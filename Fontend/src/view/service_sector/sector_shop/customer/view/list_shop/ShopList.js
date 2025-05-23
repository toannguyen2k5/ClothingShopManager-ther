import React, { Component } from "react";
import StoreCard from "./store_card/StoreCard";
import { urlapi } from "../../../../../../setting/store/const";
import BreadcrumbNavigation from "../../component/sub_layout/breadcrumb_navigation/BreadcrumbNavigation";
class ShopList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list_shop: [],
    };
  }

  getListShop = () => {
    fetch(urlapi + "/api/Shop/sellectAll/all/all/")
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          list_shop: data.data,
        })
      )
      .catch((error) => console.error(error));
  };
  componentDidMount() {
    this.getListShop();
  }
  render() {
    return (
      <>
        <main>
          <section>
            <BreadcrumbNavigation
              prevPage={[{ pageName: "Trang chủ", link: "/" }]}
              thisPage="Danh Sách Cửa Hàng"
            />
            <section id="mystore-template" className="mg-top-15">
              <div className="container">
                <div className="sectionContentStore stores d-flex">
                  <div className="col-xs-12 col-sm-12 col-md-12"></div>
                  <div className="address-map">
                    <ul className="tab-list"></ul>
                    <div className="tab-content">
                      <div id="tabaddress1" className="tab-pane fade in active">
                        <div className="address-cont">
                          <div className="address-detail">
                            <div
                              id="address-link"
                              className="d-flex d-flex-wrap row"
                            >
                              {this.state.list_shop.map((store) => (
                                <StoreCard key={store.idShop} store={store} />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </main>
      </>
    );
  }
}
export default ShopList;
