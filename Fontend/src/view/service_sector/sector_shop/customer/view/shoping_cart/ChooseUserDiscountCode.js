import React, { Component } from "react";
import { urlapi } from "../../../../../../setting/store/const";

class ChooseUserDiscountCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UserDiscountCodes: [],
    };
  }

  componentDidMount() {
    console.log("Get Data");
    fetch(
      urlapi +
        "/api/UserDiscountCode/sellectForOrder?idUser=" +
        this.props.idUser +
        "&minimumOrderValue=" +
        this.props.total
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.status && data.status === "200") {
          this.setState({ UserDiscountCodes: data.data });
        }
        console.log("error :", data);
      })
      .catch((error) => console.error(error));
  }
  render() {
    return (
      <>
        <label for="note" className="note-label">
          Mã giảm giá
        </label>
        <div className="store_ship">
          <div className="title_ship"></div>
          <div id="tab-content">
            <div id="tabaddress1" className="tab-pane fade in active">
              <div className="select_option-address">
                <select
                  name="change-tinh"
                  className="change-tinh"
                  style={{ width: "100000px" }}
                >
                  <option value="all">Chọn mã giảm giá(nếu có)</option>
                  {this.state.UserDiscountCodes.map((UserDiscountCode) => (
                    <option
                      key={UserDiscountCode.discountCode}
                      value={UserDiscountCode.discountCode}
                      data-tinh={UserDiscountCode.discountCode}
                      data-value={UserDiscountCode.discountCode}
                    >
                      {UserDiscountCode.code} -giảm{" "}
                      {UserDiscountCode.discountOrPrice > 1
                        ? UserDiscountCode.discountOrPrice.toLocaleString() +
                          "VND"
                        : UserDiscountCode.discountOrPrice * 100 + "%"}
                    </option>
                  ))}
                </select>
              </div>
              <div className="address-cont">
                <div className="address-detail">
                  <div id="address-link" className="d-flex d-flex-wrap"></div>
                  <div id="pagination"></div>
                  <p className="no-store hidden">Hiện chưa có cửa hàng</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ChooseUserDiscountCode;
