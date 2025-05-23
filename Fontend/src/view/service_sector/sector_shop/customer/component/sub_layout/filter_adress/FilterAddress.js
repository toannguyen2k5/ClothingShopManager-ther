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
      <div class="cate-main-filter">
        <div class="margin-filter">
          <div class="box-sortby">
            <div class="box-sort">
              <div class="title-sort">Đang Xem Tại: </div>
              <div class="sort-select">
                <select class="form-select" aria-label="Default select example">
                  <option selected>Open this select menu</option>
                  <option defaultValue="1">One</option>
                  <option defaultValue="2">Two</option>
                  <option defaultValue="3">Three</option>
                </select>
              </div>
            </div>
            <div class="clearfix"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default FilterAddress;
