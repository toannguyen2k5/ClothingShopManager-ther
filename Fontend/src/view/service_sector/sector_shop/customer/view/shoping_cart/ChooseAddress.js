import React, { Component } from "react";
import { urlapi } from "../../../../../../setting/store/const";

class ChooseAddress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      provinces: [],
      province_current: null,
      districts: [],
      district_current: null,
      detailAddress: null,
    };
  }
  SendData = () => {
    const { province_current, district_current, detailAddress } = this.state;
    if (
      detailAddress &&
      province_current &&
      district_current &&
      detailAddress !== null &&
      province_current !== null &&
      district_current !== null
    ) {
      console.log("data props berfore: ", this.props);
      const { actions } = this.props;
      actions.change_state_data({
        data: {
          province: province_current.nameProvince,
          district: district_current.nameDistrict,
          detailaddress: detailAddress,
        },
      });
      console.log("data props after: ", this.props);
    }
    console.log(
      "province : ",
      province_current,
      " district : ",
      district_current + " , detail ",
      detailAddress
    );
  };
  componentDidMount() {
    console.log("Get Data");
    fetch(urlapi + "/api/Province/SellectAll")
      .then((response) => response.json())
      .then((data) => {
        if (data.status && data.status === "200") {
          this.setState({ provinces: data.data });
        }
        console.log(data);
      })
      .catch((error) => console.error(error));
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.province_current &&
      this.state.province_current !== prevState.province_current
    ) {
      fetch(
        urlapi +
          "/api/District/Sellect?idProvince=" +
          this.state.province_current.idProvince
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.status && data.status === "200") {
            this.setState({ districts: data.data });
          }
          console.log(data);
        })
        .catch((error) => console.error(error));
    }
  }

  handleProvinceChange = (event) => {
    const provinceId = event.target.value;
    const selectedProvince = this.state.provinces.find(
      (province) => province.idProvince === provinceId
    );

    if (selectedProvince) {
      this.setState({ province_current: selectedProvince }, () => {
        this.SendData();
      });
    } else {
      this.setState({ province_current: null, districts: [] });
    }
  };
  handleDistrictChange = (event) => {
    const DistrictId = event.target.value;
    const selectedDistrict = this.state.districts.find(
      (dictrict) => dictrict.idDistrict === DistrictId
    );

    if (selectedDistrict) {
      this.setState({ district_current: selectedDistrict }, () => {
        this.SendData();
      });
    }
  };
  render() {
    return (
      <>
        <div id="tab-content">
          <div id="tabaddress1" className="tab-pane in active">
            <div className="select_option-address">
              <select
                name="change-tinh"
                className="change-tinh"
                onChange={(e) => {
                  this.handleProvinceChange(e);
                }}
              >
                <option value="all">Chọn tỉnh/thành phố</option>
                {this.state.provinces.map((province) => (
                  <option
                    key={province.idProvince}
                    value={province.idProvince}
                    data-tinh={province.nameProvince}
                    data-value={province.idProvince}
                  >
                    {province.nameProvince}
                  </option>
                ))}
              </select>

              <select
                name="select-quan"
                className="select-quan"
                onChange={(e) => {
                  this.handleDistrictChange(e);
                }}
              >
                <option value="all">Chọn Quận/huyện</option>
                {this.state.districts &&
                  this.state.districts.map((district) => (
                    <option
                      key={district.idDistrict}
                      value={district.idDistrict}
                      data-tinh={district.nameDistrict}
                      data-value={district.idDistrict}
                    >
                      {district.nameDistrict}
                    </option>
                  ))}
              </select>

              <input
                className="form-control dt-width-100 mg-top-10"
                id="code-discont"
                placeholder="địa chỉ chi tiết"
                type="text"
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  fontSize: "16px",
                  boxSizing: "border-box",
                }}
                onChange={(e) => {
                  this.setState({ detailAddress: e.target.value }, () => {
                    this.SendData();
                  });
                }}
              />
            </div>
            <div className="address-cont">
              <div className="address-detail">
                <div id="address-link" className="d-flex d-flex-wrap"></div>
                <div id="pagination"></div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ChooseAddress;
