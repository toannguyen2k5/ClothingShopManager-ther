import { Component } from "react";
class SecondaryPhoto extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        class="item item-owl slick-slide slick-active"
        style={{ width: " 118px" }}
        tabIndex="0"
        data-slick-index={this.props.index}
        aria-hidden="false"
      >
        <a
          href="javascript:void(0)"
          class="product__thumbnail"
          data-image={this.props.path}
          data-index={this.props.index}
          tabIndex="0"
        >
          <img
            alt="Áo Sweatshirt Nam ICONDENIM Orgnls Painted"
            class="lazyload-cus dt-width-100"
            loading="lazy"
            src={this.props.path}
            width="100"
            height="100"
          />
        </a>
      </div>
    );
  }
}
export default SecondaryPhoto;
