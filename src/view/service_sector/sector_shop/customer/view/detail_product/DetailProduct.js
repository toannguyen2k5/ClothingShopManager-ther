import React, { Component } from "react";
import { urlapi } from "../../../../../../setting/store/const";
import "./style-smb.css";
import "./plugin-style.css";
import "./render-style-other.scss.css";
import "./render-style.css";
import "./style-page.scss.css";
import "./style-product.scss.css";
import "./styles-new.scss.css";
import "./vong-quay.css";
import MainPhoto from "./MainPhoto";
class DetailProduct extends Component {
  constructor(props) {
    super(props);
    console.log("id : ", this.props.match.params.idProduct);
    console.log("props : ", this.props);
    this.state = {
      product: null,
    };
  }
  componentDidMount() {
    console.log("Get Data");
    fetch(
      urlapi +
        "/api/detailproduct/sellect/detailProperty?idProduct=Product000000000000"
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.status && data.status === "200") {
          console.log("data : ", data);
          this.setState({ product: data.data });
        }
        console.log(data);
      })
      .catch((error) => console.error(error));
  }
  render() {
    console.log(this.state);
    if (this.state.product === undefined || this.state.product === null) {
      this.componentDidMount();
      return null;
    }
    return (
      <>
        <section id="product-template" class="product-page">
          <div class="container container--medium">
            <div class="row d-flex">
              <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 order-mb-1 gallery-product-template">
                <div class="bg-while d-flex-wrap d-flex sticky-gallery">
                  <div
                    id="sl-product-thumb"
                    class="product-thumb"
                    data-widththumb="false"
                  >
                    <div
                      id="slider-thumb"
                      class="slider-mobile d-flex-slick slick-initialized slick-slider"
                      data-lg="6"
                      data-md="5"
                      data-sm="5"
                      data-xs="5"
                      data-vertical="false"
                    >
                      <div class="slick-list draggable">
                        <div
                          class="slick-track"
                          style={{
                            opacity: "1",
                            width: "1298px",
                            transform: "translate3d(0px, 0px, 0px)",
                          }}
                        >
                          <MainPhoto
                            images={this.state.product?.images || null}
                            {...this.props}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="bg-while slider-new">
                    <div
                      id="gallery-thumb"
                      class="product-gallery d-flex-slick slick-initialized slick-slider"
                      data-allin="1"
                      data-widthgallery="false"
                    >
                      <div class="slick-list draggable">
                        <div
                          class="slick-track"
                          style={{ opacity: " 1", width: " 6380px" }}
                        >
                          <div
                            class="item item-owl slider_img slick-slide slick-current slick-active"
                            data-slick-index="0"
                            aria-hidden="false"
                            style={{
                              width: "580px",
                              position: "relative",
                              left: "0px",
                              top: "0px",
                              zIndex: "999",
                              opacity: "1",
                            }}
                            tabIndex="0"
                          >
                            <a
                              href={
                                this.state.product.images?.find(
                                  (image) => image.main
                                )?.path || "#"
                              }
                              data-fancybox="gallery"
                              class="product__thumbnail"
                              data-pos="1"
                              tabIndex="0"
                            >
                              <img
                                alt="Áo Sweatshirt Nam ICONDENIM Orgnls Painted"
                                class="product-image-feature dt-width-100 ls-is-cached lazyloaded"
                                loading="lazy"
                                src={
                                  this.state.product.images?.find(
                                    (image) => image.main
                                  )?.path || "#"
                                }
                                data-src={
                                  this.state.product.images?.find(
                                    (image) => image.main
                                  )?.path || "#"
                                }
                                width="600"
                                height="600"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 order-mb-2">
                <div class="bg-while">
                  <div class="product-content">
                    // thông tin sản phẩm
                    <div class="pro-content-head clearfix">
                      <div class="head-product-title">
                        <h1 data-available="Còn hàng" class="green">
                          Áo Sweatshirt Nam ICONDENIM Orgnls Painted
                        </h1>
                      </div>
                      <div class="d-flex product-info">
                        <div class="product-info__l d-flex">
                          <div class="pro-type">
                            <span>Loại: </span>
                            <a
                              class="title"
                              rel="nofollow"
                              href="/collections/types?q=ao-ni-sweatshirt"
                            >
                              Áo Nỉ - Sweatshirt
                            </a>
                          </div>
                          <span class="line-info">|</span>
                          <div class="pro-sku ProductSku">
                            <span>MSP:</span>
                            <span class="sku-number title">SWID0042-01</span>
                          </div>
                        </div>
                      </div>

                      <div id="pro-price">
                        <span class="price-now">279,000₫</span>
                        <span class="price-compare">
                          <del>389,000₫</del>
                        </span>
                      </div>
                    </div>
                    // giờ phút giây của sự kiện
                    <div class="bg-countdown-product">
                      <div class="count-down-index d-flex d-flex-center">
                        <span>Kết thúc trong: </span>
                        <ul
                          class="countdown-deal d-flex d-flex-center js-center"
                          data-countdown="Feb 18, 2023 22:00:00"
                        >
                          <li>
                            <strong class="days">01</strong>
                            <small>Ngày</small>
                          </li>
                          <li>
                            <strong class="hours">01</strong>
                            <small>Giờ</small>
                          </li>
                          <li>
                            <strong class="minutes">27</strong>
                            <small>Phút</small>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  // mô tả khuyến mãi
                  <div class="coupon-product clear">
                    <div class="product-promotion">
                      <h3 class="product-promotion__heading">
                        <img
                          src="https://file.hstatic.net/1000253775/file/gift_new-removebg-preview_fce03d3cd9d24d0cb0be33ac068e41fc.png"
                          alt="Áo Hoodie Don"
                          t=""
                          trust=""
                          anyone=""
                          width="22"
                          height="22"
                          class="mr-2"
                        />{" "}
                        KHUYẾN MÃI - ƯU ĐÃI
                      </h3>
                      <div class="product_coupon_new">
                        <ul class="product-promotion__box">
                          <li>
                            <span class="big-bold">
                              <strong>
                                TỰ HÀO ĐẠI LỄ - ĐỒNG GIÁ CHỈ TỪ 149K
                              </strong>
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div class="product_coupon_new">
                        <ul class="product-promotion__box">
                          <li>
                            <span class="big-bold" style={{ color: " red" }}>
                              <img
                                src="https://file.hstatic.net/1000253775/file/-pngtree-elegant_vietnam_flag_realistic_with_7667465_2ab99aec214b4431b273993c89fcc5c9.png"
                                style={{ width: " 20px", height: "20px" }}
                              />
                              Tặng Sticker TỰ HÀO cho mọi đơn hàng
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div class="product_coupon_new">
                        <ul class="product-promotion__box">
                          <li>
                            <span class="big-bold">
                              <img
                                src="https://file.hstatic.net/1000253775/file/icon-04.png"
                                style={{ width: "20px", height: "20px" }}
                              />
                              Tham gia ngay "VÒNG QUAY TỰ DO" 100% nhận quà
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div class="product_coupon_new">
                        <ul class="product-promotion__box">
                          <li>
                            <span class="big-bold">
                              <img
                                src="https://file.hstatic.net/1000253775/file/icon-04.png"
                                style={{ width: "20px", height: "20px" }}
                              />
                              Đơn từ 599K tặng "MÓC KHÓA NÓN VIỆT NAM"
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div class="product_coupon_new">
                        <ul class="product-promotion__box">
                          <li>
                            <span class="big-bold"></span>
                          </li>
                        </ul>
                      </div>

                      <div class="product_coupon_new">
                        <ul class="product-promotion__box">
                          <li>
                            <span class="big-bold"></span>
                          </li>
                        </ul>
                      </div>

                      <div class="product_coupon_new">
                        <ul class="product-promotion__box">
                          <li>
                            <span class="big-bold">
                              <img
                                src="https://file.hstatic.net/1000253775/file/icon-04.png"
                                style={{ width: "20px", height: "20px" }}
                              />
                              Đơn 899K Giảm ngay 70K nhập mã
                              <strong>"CHIENTHANG"</strong> - Only Online
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div class="product_coupon_new">
                        <ul class="product-promotion__box">
                          <li>
                            <span class="big-bold">
                              <img
                                src="https://file.hstatic.net/1000253775/file/icon-04.png"
                                style={{ width: "20px", height: "20px" }}
                              />
                              Đơn 1.199K Giảm ngay 100K nhập mã
                              <strong>"TUDO"</strong>
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div class="product_coupon_new">
                        <ul class="product-promotion__box">
                          <li>
                            <span class="big-bold"></span>
                          </li>
                        </ul>
                      </div>

                      <div class="product_coupon_new">
                        <ul class="product-promotion__box">
                          <li>
                            <span class="big-bold">
                              <img
                                src="https://file.hstatic.net/1000253775/file/icon-03.png"
                                style={{ width: "20px", height: "20px" }}
                              />
                              <strong>FREESHIP</strong> MỌI ĐƠN HÀNG
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="select-swatch-detail">
                    <form
                      id="add-item-form"
                      action="/cart/add"
                      method="post"
                      class="variants clearfix"
                    >
                      <div class="select hidden">
                        <div class="selector-wrapper">
                          <label htmlFor="product-select-option-0">
                            Màu sắc
                          </label>
                          <span class="custom-dropdown custom-dropdown--white">
                            <select
                              class="single-option-selector custom-dropdown__select custom-dropdown__select--white"
                              data-option="option1"
                              id="product-select-option-0"
                            >
                              <option defaultValue="Đen-0042">Đen-0042</option>
                              <option defaultValue="Xám Đậm-0042">
                                Xám Đậm-0042
                              </option>
                            </select>
                          </span>
                        </div>
                        <div class="selector-wrapper">
                          <label htmlFor="product-select-option-1">
                            Kích thước
                          </label>
                          <span class="custom-dropdown custom-dropdown--white">
                            <select
                              class="single-option-selector custom-dropdown__select custom-dropdown__select--white"
                              data-option="option2"
                              id="product-select-option-1"
                            >
                              <option defaultValue="S">S</option>
                              <option defaultValue="M">M</option>
                              <option defaultValue="L">L</option>
                              <option defaultValue="XL">XL</option>
                            </select>
                          </span>
                        </div>
                        <select
                          id="product-select"
                          name="id"
                          style={{ display: "none" }}
                        >
                          <option
                            defaultValue="1130107769"
                            data-inventory="33"
                            data-available="true"
                            data-variant="Đen-0042 ## S"
                          >
                            Đen-0042 / S
                          </option>
                          <option
                            defaultValue="1130107770"
                            data-inventory="89"
                            data-available="true"
                            data-variant="Đen-0042 ## M"
                          >
                            Đen-0042 / M
                          </option>
                          <option
                            defaultValue="1130107771"
                            data-inventory="126"
                            data-available="true"
                            data-variant="Đen-0042 ## L"
                          >
                            Đen-0042 / L
                          </option>
                          <option
                            defaultValue="1130107772"
                            data-inventory="46"
                            data-available="true"
                            data-variant="Đen-0042 ## XL"
                          >
                            Đen-0042 / XL
                          </option>
                          <option
                            defaultValue="1130107773"
                            data-inventory="16"
                            data-available="true"
                            data-variant="Xám Đậm-0042 ## S"
                          >
                            Xám Đậm-0042 / S
                          </option>
                          <option
                            defaultValue="1130107774"
                            data-inventory="56"
                            data-available="true"
                            data-variant="Xám Đậm-0042 ## M"
                          >
                            Xám Đậm-0042 / M
                          </option>
                          <option
                            defaultValue="1130107775"
                            data-inventory="88"
                            data-available="true"
                            data-variant="Xám Đậm-0042 ## L"
                          >
                            Xám Đậm-0042 / L
                          </option>
                          <option
                            defaultValue="1130107776"
                            data-inventory="29"
                            data-available="true"
                            data-variant="Xám Đậm-0042 ## XL"
                          >
                            Xám Đậm-0042 / XL
                          </option>
                        </select>
                      </div>
                      <div class="row">
                        <div class="select-swatch clearfix col-xs-12 col-md-12 col-sm-12">
                          <div
                            id="variant-swatch-0"
                            class="swatch clearfix type-image"
                            data-option="option1"
                            data-option-index="0"
                          >
                            <div class="header">
                              Màu sắc: <span class="color-text">Đen</span>
                            </div>

                            <div class="select-swap">
                              <div
                                data-value="Đen-0042"
                                class="n-sd swatch-element color den-0042"
                              >
                                <input
                                  data-new="279,000₫"
                                  class="variant-0 color-change"
                                  id="swatch-0-den-0042"
                                  type="radio"
                                  name="option1"
                                  defaultValue="Đen-0042"
                                  data-vhandle="den-0042"
                                  data-title="Đen"
                                  defaultChecked=""
                                />

                                <label
                                  data-color="den-0042"
                                  class="den-0042 sd"
                                  data-title="Đen"
                                  htmlFor="swatch-0-den-0042"
                                  data-image="https://product.hstatic.net/1000253775/product/160_ao_tay_dai_042-7_c09ac3555db04f53bcfbf40a5a64d744.jpg"
                                >
                                  <span
                                    style={{
                                      backgroundImage:
                                        "url(//product.hstatic.net/1000253775/product/160_ao_tay_dai_042-7_c09ac3555db04f53bcfbf40a5a64d744_thumb.jpg)",
                                    }}
                                  >
                                    Đen
                                  </span>
                                </label>
                              </div>

                              <div
                                data-value="Xám Đậm-0042"
                                class="n-sd swatch-element color xam-dam-0042"
                              >
                                <input
                                  data-new="279,000₫"
                                  class="variant-0 color-change"
                                  id="swatch-0-xam-dam-0042"
                                  type="radio"
                                  name="option1"
                                  defaultValue="Xám Đậm-0042"
                                  data-vhandle="xam-dam-0042"
                                  data-title="Xám Đậm"
                                />

                                <label
                                  data-color="xam-dam-0042"
                                  class="xam-dam-0042"
                                  data-title="Xám Đậm"
                                  htmlFor="swatch-0-xam-dam-0042"
                                  data-image="https://product.hstatic.net/1000253775/product/160_ao_tay_dai_042-1_678536ee4a3e457892d6b2e0be6d91b7.jpg"
                                >
                                  <span
                                    style={{
                                      backgroundImage:
                                        "url(//product.hstatic.net/1000253775/product/160_ao_tay_dai_042-1_678536ee4a3e457892d6b2e0be6d91b7_thumb.jpg)",
                                    }}
                                  >
                                    Xám Đậm
                                  </span>
                                </label>
                              </div>
                            </div>
                          </div>

                          <div
                            id="variant-swatch-1"
                            class="swatch clearfix type-image"
                            data-option="option2"
                            data-option-index="1"
                          >
                            <div class="header">
                              Kích thước: <span class="color-text">S</span>
                            </div>

                            <div class="select-swap">
                              <div
                                data-value="S"
                                class="n-sd swatch-element s is-size"
                              >
                                <input
                                  data-new="279,000₫"
                                  class="variant-1"
                                  id="swatch-1-s"
                                  type="radio"
                                  name="option2"
                                  defaultValue="S"
                                  data-vhandle="s"
                                  data-title="S"
                                  defaultChecked=""
                                />
                                <label
                                  data-size="1-s"
                                  data-title="S"
                                  htmlFor="swatch-1-s"
                                  class="sd"
                                >
                                  <span>S</span>
                                  <img
                                    class="img-check"
                                    width="12"
                                    height="12"
                                    src="https://file.hstatic.net/200000525917/file/select-pro_e3e51c75e13340c1805618324bab59f0.png"
                                  />
                                </label>

                                <div class="popupover-size">
                                  <div class="wrapper-popupover"></div>
                                </div>
                              </div>

                              <div
                                data-value="M"
                                class="n-sd swatch-element m is-size"
                              >
                                <input
                                  data-new="279,000₫"
                                  class="variant-1"
                                  id="swatch-1-m"
                                  type="radio"
                                  name="option2"
                                  defaultValue="M"
                                  data-vhandle="m"
                                  data-title="M"
                                />
                                <label
                                  data-size="1-m"
                                  data-title="M"
                                  htmlFor="swatch-1-m"
                                >
                                  <span>M</span>
                                  <img
                                    class="img-check"
                                    width="12"
                                    height="12"
                                    src="https://file.hstatic.net/200000525917/file/select-pro_e3e51c75e13340c1805618324bab59f0.png"
                                  />
                                </label>

                                <div class="popupover-size">
                                  <div class="wrapper-popupover"></div>
                                </div>
                              </div>

                              <div
                                data-value="L"
                                class="n-sd swatch-element l is-size"
                              >
                                <input
                                  data-new="279,000₫"
                                  class="variant-1"
                                  id="swatch-1-l"
                                  type="radio"
                                  name="option2"
                                  defaultValue="L"
                                  data-vhandle="l"
                                  data-title="L"
                                />
                                <label
                                  data-size="1-l"
                                  data-title="L"
                                  htmlFor="swatch-1-l"
                                >
                                  <span>L</span>
                                  <img
                                    class="img-check"
                                    width="12"
                                    height="12"
                                    src="https://file.hstatic.net/200000525917/file/select-pro_e3e51c75e13340c1805618324bab59f0.png"
                                  />
                                </label>

                                <div class="popupover-size">
                                  <div class="wrapper-popupover"></div>
                                </div>
                              </div>

                              <div
                                data-value="XL"
                                class="n-sd swatch-element xl is-size"
                              >
                                <input
                                  data-new="279,000₫"
                                  class="variant-1"
                                  id="swatch-1-xl"
                                  type="radio"
                                  name="option2"
                                  defaultValue="XL"
                                  data-vhandle="xl"
                                  data-title="XL"
                                />
                                <label
                                  data-size="1-xl"
                                  data-title="XL"
                                  htmlFor="swatch-1-xl"
                                >
                                  <span>XL</span>
                                  <img
                                    class="img-check"
                                    width="12"
                                    height="12"
                                    src="https://file.hstatic.net/200000525917/file/select-pro_e3e51c75e13340c1805618324bab59f0.png"
                                  />
                                </label>

                                <div class="popupover-size">
                                  <div class="wrapper-popupover"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div class="row quantity">
                    <div class="col-xs-12 selector-actions d-flex d-flex-center pd-top-10 button-swatch-detail-8">
                      <div class="quantity-area">
                        <input
                          type="button"
                          defaultValue="–"
                          onClick="window.wd.scofield.minusQuantity($(this))"
                          class="qty-btn qtyminus"
                        />
                        <input
                          readOnly=""
                          type="text"
                          id="quantity"
                          name="quantity"
                          defaultValue="1"
                          min="1"
                          class="quantity-selector"
                        />
                        <input
                          type="button"
                          defaultValue="+"
                          onClick="window.wd.scofield.plusQuantity($(this))"
                          class="qty-btn qtyplus"
                        />
                      </div>
                      <div class="wrap-addcart">
                        <div class="row-flex">
                          <div class="btn-action-addtocart">
                            <button
                              type="button"
                              id="add-to-cart"
                              class="flex-addcart-mb add-to-cart-style loading-container"
                              name="add"
                              data-id="1056846128"
                            >
                              <span
                                id="loading-content"
                                class="loading-content"
                              >
                                Thêm vào giỏ
                              </span>
                            </button>
                          </div>
                          <div class="btn-action btn-action-buynow">
                            <button
                              type="button"
                              class="btn-buynow hidden-xs buynow-style buy-now-event"
                              id="buy-now"
                              name="add"
                              data-id="1056846128"
                            >
                              <span>Mua ngay</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="service-product"></div>
                  </div>
                </div>
                <div class="product-single__policy">
                  <div class="product-policy">
                    <div class="product-policy__item">
                      <div class="product-policy__icon">
                        <img
                          class="ls-is-cached lazyloaded"
                          loading="lazy"
                          width="45"
                          height="45"
                          src="https://file.hstatic.net/1000253775/file/z4635451118875_c98fff6e965c4957a2beef70df6df0f8_afcea78391a640c9bcef22ce88aca7d6.jpg"
                          alt=""
                        />
                      </div>
                      <span class="product-policy__title">
                        Đổi trả tận nhà trong vòng 15 ngày
                      </span>
                    </div>
                    <div class="product-policy__item">
                      <div class="product-policy__icon">
                        <img
                          class="ls-is-cached lazyloaded"
                          loading="lazy"
                          width="45"
                          height="45"
                          src="https://file.hstatic.net/1000253775/file/z4635451151763_13f64ed25050f361cfb0a70fda62b2c2_efbb28df6328412b9200cd92a795396e.jpg"
                          alt=""
                        />
                      </div>
                      <span class="product-policy__title">
                        Freeship mọi đơn hàng
                      </span>
                    </div>
                    <div class="product-policy__item">
                      <div class="product-policy__icon">
                        <img
                          class="ls-is-cached lazyloaded"
                          loading="lazy"
                          width="45"
                          height="45"
                          src="https://file.hstatic.net/1000253775/file/z4635451129757_228e4824d8a593038b9f20d5e53d4d08_7e46b4c108bc481e8c2351f909bdcba4.jpg"
                          alt=""
                        />
                      </div>
                      <span class="product-policy__title">
                        Bảo hành trong vòng 30 ngày
                      </span>
                    </div>
                    <div class="product-policy__item">
                      <div class="product-policy__icon">
                        <img
                          class="ls-is-cached lazyloaded"
                          loading="lazy"
                          width="45"
                          height="45"
                          src="https://file.hstatic.net/1000253775/file/z4635451140541_2b09e178f1b8b4763b266875fd2c8db6_8b536c9ae5e24c17961fdb906d3f5022.jpg"
                          alt=""
                        />
                      </div>
                      <span class="product-policy__title">
                        Hotline 0287.100.6789 hỗ trợ từ 8h30-24h
                      </span>
                    </div>
                    <div class="product-policy__item">
                      <div class="product-policy__icon">
                        <img
                          class="ls-is-cached lazyloaded"
                          loading="lazy"
                          width="45"
                          height="45"
                          src="https://file.hstatic.net/1000253775/file/z4635451129712_78e0e70db6fffe43fbb9a3e680cb3ed0_a2b8379adf4843a4898c621b37c2b42a.jpg"
                          alt=""
                        />
                      </div>
                      <span class="product-policy__title">
                        Giao hàng toàn quốc
                      </span>
                    </div>
                    <div class="product-policy__item">
                      <div class="product-policy__icon">
                        <img
                          class="ls-is-cached lazyloaded"
                          loading="lazy"
                          width="45"
                          height="45"
                          src="https://file.hstatic.net/1000253775/file/z4635451151761_2fe8731e9d20060a54130996be16cd2e_e8e090599dd9467abdd66feb9ba3474f.jpg"
                          alt=""
                        />
                      </div>
                      <span class="product-policy__title">
                        Có cộng dồn <br />
                        ưu đãi KHTT
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-12 col-sm-12 col-xs-12 order-mb-3 mg-top-30 mg-top-15-mb">
                <div class="bg-while">
                  <div class="product-description-tab">
                    <div class="scroll-nav-tab hidden-xs">
                      <ul class="nav nav-tabs" role="tablist">
                        <li role="presentation" class="active">
                          <a
                            class="show"
                            href="javascript:void(0)"
                            data-href="#pro-tab-1"
                            data-toggle="tab"
                            role="tab"
                            aria-selected="true"
                          >
                            <span>Mô tả</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div
                      class="tab-pane active content-entry add-height-img"
                      id="pro-tab-1"
                      role="tabpanel"
                    >
                      <div class="tab-mobile visible-xs">Mô tả</div>
                      <div class="more-description">
                        <p>
                          <span style={{ fontSize: "20px" }}>
                            <strong>
                              160STORE -&nbsp;Áo Sweatshirt&nbsp;ICONDENIM
                              Orgnls Painted
                            </strong>
                          </span>
                        </p>
                        <ul>
                          <li>
                            <strong>Chất liệu</strong>: Vải nỉ&nbsp;chân cua
                          </li>
                          <li>
                            <strong>Form áo</strong>: Regular
                          </li>
                        </ul>
                        <hr />
                        <p>&nbsp;</p>
                        <p>
                          <span style={{ fontSize: "15px" }}>
                            <strong>▶️ CHẤT LIỆU NỈ CHÂN CUA</strong>
                          </span>
                        </p>
                        <p>
                          Chất liệu vải nỉ chân cua&nbsp;mang lại cảm giác mềm
                          mại, bền bỉ, ít nhăn và giữ màu lâu hơn sau nhiều lần
                          giặt. Với cấu trúc vải ni chân cua, bề mặt áo có độ
                          mềm mại và độ dày vừa phải, tạo cảm giác thoải mái và
                          ấm áp khi mặc.
                        </p>
                        <p>
                          <span style={{ fontSize: "15px" }}>
                            <strong>▶️ THIẾT KẾ ĐƠN GIẢN</strong>
                          </span>
                        </p>
                        <p>
                          Chi tiết in dẻo kết hợp với in cao thành ngực trái
                          thân trước, tạo nên vẻ đẹp cuốn hút, mà còn mang lại
                          sự cá tính, hiện đại cho sản phẩm. Thiết kế tối giản
                          với typo tên thương hiệu và từ "ORNGLS" theo font chữ
                          hiện đại cũng giúp sản phẩm thêm phần trẻ trung, năng
                          động. Cách thức phối hợp này không chỉ tạo ra sự kết
                          nối về mặt thẩm mỹ mà còn làm cho áo dễ mặc, dễ phối
                          đồ trong các dịp đón đông. Phần bo tay và lai của áo
                          được chăm chút tỷ mỉ, tạo nên một tổng thể hài hòa,
                          vừa vặn, đồng thời giúp tôn lên phong cách năng động
                          và thời thượng.&nbsp;
                        </p>
                        <p>
                          <span style={{ fontSize: "15px" }}>
                            <strong>▶️ FORM REGULAR</strong>
                          </span>
                        </p>
                        <p>
                          Form dáng Regular mang lại một dáng vẻ khỏe khoắn và
                          dễ mặc cho mọi hình dáng cơ thể. Có độ ôm vừa vặn, tạo
                          cảm giác thoải mái, không gò bó. Kiểu dáng này phù hợp
                          với nhiều phong cách, từ casual, thể thao cho đến
                          streetwear.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default DetailProduct;
