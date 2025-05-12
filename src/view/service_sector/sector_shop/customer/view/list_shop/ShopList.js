import React, { Component } from "react";
import ShopingCartItem from "./ShopingCartItem";
import ChooseAddress from "./ChooseAddress";
import ChooseUserDiscountCode from "./ChooseUserDiscountCode";
import "./plugin-style.css";
import "./render-style-other.scss.css";
import "./render-style.css";
import "./style-cart.scss.css";
import "./style-page.scss.css";
import "./style-smb.css";
import "./styles-new.scss.css";
class ShopList extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){

  }
  render() {
    return (
      <>
        <main>
          <section id="home-slider-home" class="mg-top-15 mg-0-mb">
            <div class="container pd-0-mb">
              <SliderImage />
            </div>
          </section>
          <section>
          <BreadcrumbNavigation
            prevPage={[
              { pageName: "Trang chủ", link: "/" },
              { pageName: "Điện thoại", link: "/dien-thoai" },
            ]}
            thisPage="iPhone 14 Pro Max"
          />
          </section>

        </main>
      </>
    );
  }
}
export default ShopList;
