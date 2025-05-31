import React, { Component, createRef } from "react";

class FilterAddress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterType: 0,
      isShowAreaPrice: false,
    };
  }
  componentDidMount() {}

  render() {
    return (
      <div className="cate-main-filter">
        <div className="margin-filter">
          <div className="box-sortby">
            <div className="box-sort">
              <div className="title-sort">Đang Xem Tại: </div>
              <div className="sort-select">
                <select className="form-select" aria-label="Default select example">
                  <option selected>Open this select menu</option>
                  <option defaultValue="1">One</option>
                  <option defaultValue="2">Two</option>
                  <option defaultValue="3">Three</option>
                </select>
              </div>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default FilterAddress;
