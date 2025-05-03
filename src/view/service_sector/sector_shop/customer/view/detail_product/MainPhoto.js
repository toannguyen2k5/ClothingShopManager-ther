import react, { Component } from "react";
import { urlapi } from "../../../../../../setting/store/const";
import SecondaryPhoto from "./SecondaryPhoto";
class MainPhoto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    };
  }
  componentDidMount() {
    console.log("Get Data");
    fetch(
      urlapi +
        "/api/ProductImage/sellectProductImage?idProduct=" +
        this.props.idproduct
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({ images: data });
      })
      .catch((error) => console.error(error));
  }

  render() {
    console.log("Images :", this.state.images);
    return (
      <div>
        {this.state.images.map((image, index) => {
          if (image.status) {
            return (
              <div
                key={index}
                className="item item-owl slick-slide slick-current slick-active"
                style={{ width: "118px" }}
                tabIndex="0"
                data-slick-index="0"
                aria-hidden="false"
              >
                <a
                  href="javascript:void(0)"
                  className="product__thumbnail"
                  data-image={image.path}
                  data-index={index}
                  tabIndex="0"
                >
                  <img
                    alt="Áo Sweatshirt Nam ICONDENIM Orgnls Painted"
                    className="lazyload-cus dt-width-100"
                    loading="lazy"
                    src={image.path}
                    width="100"
                    height="100"
                  />
                </a>
              </div>
            );
          }
          console.log("path :", image.path, " index :", index);
          return (
            <SecondaryPhoto index={index} path={image.path} {...this.props} />
          );
        })}
      </div>
    );
  }
}
export default MainPhoto;
