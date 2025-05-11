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
        if (data.status && data.status === "200") {
          this.setState({ images: data.data });
          const mainImage = this.state.images.find((img) => img.main === true);
          if (mainImage && this.props.actions?.change_state_data) {
            this.props.actions.change_state_data({ data: mainImage });
            console.log("path :", mainImage.path);
          }
        }
        console.log("data :", data);
      })
      .catch((error) => console.error(error));
  }

  render() {
    const { images } = this.state;
    return (
      <div>
        {images.map((image, index) => (
          <SecondaryPhoto
            key={index}
            index={index}
            path={image.path}
            {...this.props}
          />
        ))}
      </div>
    );
  }
}
export default MainPhoto;
