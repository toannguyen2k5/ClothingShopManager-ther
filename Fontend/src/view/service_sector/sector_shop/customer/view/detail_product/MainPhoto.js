import React, { Component } from "react";
import { urlapi } from "../../../../../../setting/store/const";
class MainPhoto extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.images.map((image, index) => (
          <div
            className="item item-owl slick-slide slick-active"
            style={{ width: " 118px" }}
            tabIndex="0"
            data-slick-index={index}
            aria-hidden="false"
          >
            <a
              href="javascript:void(0)"
              className="product__thumbnail"
              data-image={urlapi + "/api/Image/product/" + image.path}
              data-index={index}
              tabIndex="0"
            >
              <img
                alt="Áo Sweatshirt Nam ICONDENIM Orgnls Painted"
                className="lazyload-cus dt-width-100"
                loading="lazy"
                src={urlapi + "/api/Image/product/" + image.path}
                width="100"
                height="100"
              />
            </a>
          </div>
        ))}
      </div>
    );
  }
}
export default MainPhoto;
