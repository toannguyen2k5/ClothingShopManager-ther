import React, { Component } from 'react';

class StoreCard extends Component {
  render() {
    const { store } = this.props;
    const {
      nameShop,
      address,
      openingTime,
      closingTime,
      status,
      phone,
      image,
      mapLink,
    } = store;

    return (
      <div
        className="col-xs-12 col-sm-12 col-md-3 store-container"
        data-tinh="ho-chi-minh"
        data-quan="phu-nhuan"
        style={{ display: "block" }}
      >
        <div className="store-content">
          <div className="product-gallery-address d-flex-slick slick-initialized slick-slider slick-dotted">
            <div className="slick-list draggable">
              <div className="slick-track" style={{ opacity: 1, width: "537px" }}>
                <div
                  className="item item-owl slick-slide slick-current slick-active"
                  style={{ width: "537px" }}
                >
                  <img src={`/image_shop.jpg`} alt="Hình ảnh store" />
                </div>
              </div>
            </div>
            <ul className="slick-dots" role="tablist">
              <li className="slick-active" role="presentation">
                <button
                  type="button"
                  role="tab"
                  aria-label="1 of 1"
                  aria-selected="true"
                >
                  1
                </button>
              </li>
            </ul>
          </div>

          <a className="location-href" href={mapLink} rel="nofollow">
            <h1 className="title-store-page px">
              {nameShop.toUpperCase()}
              {status && (
                <span className="store-new">
                  <span className="store-anomation">New<span></span></span>
                </span>
              )}
            </h1>
            <p className="title-info px">
              <i className="fa-solid fa-location-dot"></i>
              <span>{address}</span>
            </p>
            <p className="title-info space-between" style={{paddingLeft:"10px", paddingRight:"10px", paddingBottom:"10px"}}>
              <span>
                <i className="fa-regular fa-clock"></i>
                <span>
                  {openingTime.slice(0, 5)} - {closingTime.slice(0, 5)}
                </span>
              </span>
              <span id="store-status">{status ? "Đang mở" : "Đang đóng"}</span>
            </p>
          </a>
        </div>
      </div>
    );
  }
}

export default StoreCard;
