import React, { Component } from "react";
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
    this.state = {};
  }

  render() {
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
                      <button
                        class="slick-prev slick-arrow slick-disabled"
                        aria-label="Previous"
                        type="button"
                        aria-disabled="true"
                        style={{ display: "block" }}
                      >
                        Previous
                      </button>

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
                            index="0"
                            idproduct="Product000000000000"
                            {...this.props}
                          />
                        </div>
                      </div>
                      <button
                        class="slick-next slick-arrow"
                        aria-label="Next"
                        type="button"
                        style={{ display: "block" }}
                        aria-disabled="false"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                  <div class="bg-while slider-new">
                    <div
                      id="gallery-thumb"
                      class="product-gallery d-flex-slick slick-initialized slick-slider"
                      data-allin="1"
                      data-widthgallery="false"
                    >
                      <button
                        class="slick-prev slick-arrow slick-disabled"
                        aria-label="Previous"
                        type="button"
                        aria-disabled="true"
                        style={{ display: " flex" }}
                      >
                        Previous
                      </button>

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
                              href="//product.hstatic.net/1000253775/product/160_ao_tay_dai_042-10_9eacc136064941c5a19fc028a30ea35f_1024x1024.jpg"
                              data-fancybox="gallery"
                              class="product__thumbnail"
                              data-pos="1"
                              tabIndex="0"
                            >
                              <img
                                alt="Áo Sweatshirt Nam ICONDENIM Orgnls Painted"
                                class="product-image-feature dt-width-100 ls-is-cached lazyloaded"
                                loading="lazy"
                                src="//product.hstatic.net/1000253775/product/160_ao_tay_dai_042-10_9eacc136064941c5a19fc028a30ea35f_1024x1024.jpg"
                                data-src="//product.hstatic.net/1000253775/product/160_ao_tay_dai_042-10_9eacc136064941c5a19fc028a30ea35f_1024x1024.jpg"
                                width="600"
                                height="600"
                              />
                            </a>
                          </div>
                          <div
                            class="item item-owl slider_img slick-slide"
                            data-slick-index="1"
                            aria-hidden="true"
                            style={{
                              width: "580px",
                              position: "relative",
                              left: "-580px",
                              top: "0px",
                              zIndex: "998",
                              opacity: "0",
                            }}
                            tabIndex="-1"
                          >
                            <a
                              href="//product.hstatic.net/1000253775/product/160_ao_tay_dai_042-11_e38f885ecbf54d8c8b9dfbfa25b17408_1024x1024.jpg"
                              data-fancybox="gallery"
                              class="product__thumbnail"
                              data-pos="2"
                              tabIndex="-1"
                            >
                              <img
                                alt="Áo Sweatshirt Nam ICONDENIM Orgnls Painted"
                                class="product-image-feature dt-width-100 ls-is-cached lazyloaded"
                                loading="lazy"
                                src="//product.hstatic.net/1000253775/product/160_ao_tay_dai_042-11_e38f885ecbf54d8c8b9dfbfa25b17408_1024x1024.jpg"
                                data-src="//product.hstatic.net/1000253775/product/160_ao_tay_dai_042-11_e38f885ecbf54d8c8b9dfbfa25b17408_1024x1024.jpg"
                                width="600"
                                height="600"
                              />
                            </a>
                          </div>
                          <div
                            class="item item-owl slider_img slick-slide"
                            data-slick-index="2"
                            aria-hidden="true"
                            style={{
                              width: "580px",
                              position: "relative",
                              left: "-1160px",
                              top: "0px",
                              zIndex: "998",
                              opacity: "0",
                            }}
                            tabIndex="-1"
                          >
                            <a
                              href="//product.hstatic.net/1000253775/product/160_ao_tay_dai_042-4_1eff8482c32042fcbe3c24076aaa9638_1024x1024.jpg"
                              data-fancybox="gallery"
                              class="product__thumbnail"
                              data-pos="3"
                              tabIndex="-1"
                            >
                              <img
                                alt="Áo Sweatshirt Nam ICONDENIM Orgnls Painted"
                                class="product-image-feature dt-width-100 ls-is-cached lazyloaded"
                                loading="lazy"
                                src="//product.hstatic.net/1000253775/product/160_ao_tay_dai_042-4_1eff8482c32042fcbe3c24076aaa9638_1024x1024.jpg"
                                data-src="//product.hstatic.net/1000253775/product/160_ao_tay_dai_042-4_1eff8482c32042fcbe3c24076aaa9638_1024x1024.jpg"
                                width="600"
                                height="600"
                              />
                            </a>
                          </div>
                          <div
                            class="item item-owl slider_img slick-slide"
                            data-slick-index="3"
                            aria-hidden="true"
                            style={{
                              width: "580px",
                              position: "relative",
                              left: "-1740px",
                              top: "0px",
                              zIndex: "998",
                              opacity: "0",
                            }}
                            tabIndex="-1"
                          >
                            <a
                              href="//product.hstatic.net/1000253775/product/sweatshirt_regular_d24e8ea5f0174cca98454a99d5019540_1024x1024.png"
                              data-fancybox="gallery"
                              class="product__thumbnail"
                              data-pos="4"
                              tabIndex="-1"
                            >
                              <img
                                alt="Áo Sweatshirt Nam ICONDENIM Orgnls Painted"
                                class="product-image-feature dt-width-100 ls-is-cached lazyloaded"
                                loading="lazy"
                                src="//product.hstatic.net/1000253775/product/sweatshirt_regular_d24e8ea5f0174cca98454a99d5019540_1024x1024.png"
                                data-src="//product.hstatic.net/1000253775/product/sweatshirt_regular_d24e8ea5f0174cca98454a99d5019540_1024x1024.png"
                                width="600"
                                height="600"
                              />
                            </a>
                          </div>
                          <div
                            class="item item-owl slider_img slick-slide"
                            data-slick-index="4"
                            aria-hidden="true"
                            style={{
                              width: "580px",
                              position: "relative",
                              left: "-2320px",
                              top: "0px",
                              zIndex: "998",
                              opacity: 0,
                            }}
                            tabIndex="-1"
                          >
                            <a
                              href="//product.hstatic.net/1000253775/product/160_ao_tay_dai_042-7_c09ac3555db04f53bcfbf40a5a64d744_1024x1024.jpg"
                              data-fancybox="gallery"
                              class="product__thumbnail"
                              data-pos="5"
                              tabIndex="-1"
                            >
                              <img
                                alt="Áo Sweatshirt Nam ICONDENIM Orgnls Painted"
                                class="product-image-feature dt-width-100 ls-is-cached lazyloaded"
                                loading="lazy"
                                src="//product.hstatic.net/1000253775/product/160_ao_tay_dai_042-7_c09ac3555db04f53bcfbf40a5a64d744_1024x1024.jpg"
                                data-src="//product.hstatic.net/1000253775/product/160_ao_tay_dai_042-7_c09ac3555db04f53bcfbf40a5a64d744_1024x1024.jpg"
                                width="600"
                                height="600"
                              />
                            </a>
                          </div>
                          <div
                            class="item item-owl slider_img slick-slide"
                            data-slick-index="5"
                            aria-hidden="true"
                            style={{
                              width: "580px",
                              position: "relative",
                              left: "-2900px",
                              top: "0px",
                              zIndex: "998",
                              opacity: "0",
                            }}
                            tabIndex="-1"
                          >
                            <a
                              href="//product.hstatic.net/1000253775/product/160_ao_tay_dai_042-1_678536ee4a3e457892d6b2e0be6d91b7_1024x1024.jpg"
                              data-fancybox="gallery"
                              class="product__thumbnail"
                              data-pos="6"
                              tabIndex="-1"
                            >
                              <img
                                alt="Áo Sweatshirt Nam ICONDENIM Orgnls Painted"
                                class="product-image-feature dt-width-100 lazyloaded"
                                loading="lazy"
                                src="//product.hstatic.net/1000253775/product/160_ao_tay_dai_042-1_678536ee4a3e457892d6b2e0be6d91b7_1024x1024.jpg"
                                data-src="//product.hstatic.net/1000253775/product/160_ao_tay_dai_042-1_678536ee4a3e457892d6b2e0be6d91b7_1024x1024.jpg"
                                width="600"
                                height="600"
                              />
                            </a>
                          </div>
                          <div
                            class="item item-owl slider_img slick-slide"
                            data-slick-index="6"
                            aria-hidden="true"
                            style={{
                              width: "580px",
                              position: "relative",
                              left: "-3480px",
                              top: "0px",
                              zIndex: "998",
                              opacity: "0",
                            }}
                            tabIndex="-1"
                          >
                            <a
                              href="//product.hstatic.net/1000253775/product/160_ao_tay_dai_042-8_b83c4d34fb524b898befed76ae5ed0b8_1024x1024.jpg"
                              data-fancybox="gallery"
                              class="product__thumbnail"
                              data-pos="7"
                              tabIndex="-1"
                            >
                              <img
                                alt="Áo Sweatshirt Nam ICONDENIM Orgnls Painted"
                                class="product-image-feature dt-width-100 lazyloaded"
                                loading="lazy"
                                src="//product.hstatic.net/1000253775/product/160_ao_tay_dai_042-8_b83c4d34fb524b898befed76ae5ed0b8_1024x1024.jpg"
                                data-src="//product.hstatic.net/1000253775/product/160_ao_tay_dai_042-8_b83c4d34fb524b898befed76ae5ed0b8_1024x1024.jpg"
                                width="600"
                                height="600"
                              />
                            </a>
                          </div>
                          <div
                            class="item item-owl slider_img slick-slide"
                            data-slick-index="7"
                            aria-hidden="true"
                            style={{
                              width: "580px",
                              position: "relative",
                              left: "-4060px",
                              top: "0px",
                              z: "998",
                              opacity: "0",
                            }}
                            tabIndex="-1"
                          >
                            <a
                              href="//product.hstatic.net/1000253775/product/160_ao_tay_dai_042-2_ea90faef74ff48c79b4cfee5a9e61ee4_1024x1024.jpg"
                              data-fancybox="gallery"
                              class="product__thumbnail"
                              data-pos="8"
                              tabIndex="-1"
                            >
                              <img
                                alt="Áo Sweatshirt Nam ICONDENIM Orgnls Painted"
                                class="product-image-feature dt-width-100 lazyloaded"
                                loading="lazy"
                                src="//product.hstatic.net/1000253775/product/160_ao_tay_dai_042-2_ea90faef74ff48c79b4cfee5a9e61ee4_1024x1024.jpg"
                                data-src="//product.hstatic.net/1000253775/product/160_ao_tay_dai_042-2_ea90faef74ff48c79b4cfee5a9e61ee4_1024x1024.jpg"
                                width="600"
                                height="600"
                              />
                            </a>
                          </div>
                          <div
                            class="item item-owl slider_img slick-slide"
                            data-slick-index="8"
                            aria-hidden="true"
                            style={{
                              width: "580px",
                              position: "relative",
                              left: "-4640px",
                              top: "0px",
                              zIndex: "998",
                              opacity: "0",
                            }}
                            tabIndex="-1"
                          >
                            <a
                              href="//product.hstatic.net/1000253775/product/160_ao_tay_dai_042-9_1c78911522ee4fc0aa84015c9c5b1171_1024x1024.jpg"
                              data-fancybox="gallery"
                              class="product__thumbnail"
                              data-pos="9"
                              tabIndex="-1"
                            >
                              <img
                                alt="Áo Sweatshirt Nam ICONDENIM Orgnls Painted"
                                class="product-image-feature dt-width-100 lazyloaded"
                                loading="lazy"
                                src="//product.hstatic.net/1000253775/product/160_ao_tay_dai_042-9_1c78911522ee4fc0aa84015c9c5b1171_1024x1024.jpg"
                                data-src="//product.hstatic.net/1000253775/product/160_ao_tay_dai_042-9_1c78911522ee4fc0aa84015c9c5b1171_1024x1024.jpg"
                                width="600"
                                height="600"
                              />
                            </a>
                          </div>
                          <div
                            class="item item-owl slider_img slick-slide"
                            data-slick-index="9"
                            aria-hidden="true"
                            style={{
                              width: "580px",
                              position: "relative",
                              left: "-5220px",
                              top: "0px",
                              zIndex: "998",
                              opacity: "0",
                            }}
                            tabIndex="-1"
                          >
                            <a
                              href="//product.hstatic.net/1000253775/product/160_ao_tay_dai_042-12_e0904c4271d34cfaa3e060926154354d_1024x1024.jpg"
                              data-fancybox="gallery"
                              class="product__thumbnail"
                              data-pos="10"
                              tabIndex="-1"
                            >
                              <img
                                alt="Áo Sweatshirt Nam ICONDENIM Orgnls Painted"
                                class="product-image-feature dt-width-100 ls-is-cached lazyloaded"
                                loading="lazy"
                                src="//product.hstatic.net/1000253775/product/160_ao_tay_dai_042-12_e0904c4271d34cfaa3e060926154354d_1024x1024.jpg"
                                data-src="//product.hstatic.net/1000253775/product/160_ao_tay_dai_042-12_e0904c4271d34cfaa3e060926154354d_1024x1024.jpg"
                                width="600"
                                height="600"
                              />
                            </a>
                          </div>
                          <div
                            class="item item-owl slider_img slick-slide"
                            data-slick-index="10"
                            aria-hidden="true"
                            style={{
                              width: "580px",
                              position: "relative",
                              left: "-5800px",
                              top: "0px",
                              zIndex: "998",
                              opacity: "0",
                            }}
                            tabIndex="-1"
                          >
                            <a
                              href="//product.hstatic.net/1000253775/product/160_ao_tay_dai_042-14_0285935557ce4c8a9c3710c0b83c58b8_1024x1024.jpg"
                              data-fancybox="gallery"
                              class="product__thumbnail"
                              data-pos="11"
                              tabIndex="-1"
                            >
                              <img
                                alt="Áo Sweatshirt Nam ICONDENIM Orgnls Painted"
                                class="product-image-feature dt-width-100 ls-is-cached lazyloaded"
                                loading="lazy"
                                src="//product.hstatic.net/1000253775/product/160_ao_tay_dai_042-14_0285935557ce4c8a9c3710c0b83c58b8_1024x1024.jpg"
                                data-src="//product.hstatic.net/1000253775/product/160_ao_tay_dai_042-14_0285935557ce4c8a9c3710c0b83c58b8_1024x1024.jpg"
                                width="600"
                                height="600"
                              />
                            </a>
                          </div>
                        </div>
                      </div>

                      <button
                        class="slick-next slick-arrow"
                        aria-label="Next"
                        type="button"
                        style={{ display: " flex" }}
                        aria-disabled="false"
                      >
                        Next
                      </button>
                    </div>

                    <div class="price-sale-new">
                      <h3>
                        Tiết kiệm <strong>110,000₫</strong>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 order-mb-2">
                <div class="bg-while">
                  <div class="product-content">
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

                  <div class="coupon_new_copy clear">
                    <h4>Mã giảm giá bạn có thể sử dụng:</h4>
                    <div id="coupon_new_copy">
                      <div class="position_coupon">
                        <button
                          data-code="CHIENTHANG"
                          class="product-coupon"
                          type="button"
                        >
                          CHIENTHANG
                        </button>
                      </div>

                      <div class="position_coupon">
                        <button
                          data-code="TUDO"
                          class="product-coupon"
                          type="button"
                        >
                          TUDO
                        </button>
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
                              <a
                                href="javascript:void(0)"
                                class="open-size-modal link"
                              >
                                <img
                                  src="https://file.hstatic.net/200000525917/file/ruler-svg_74f5e49dbd8c4235a98dd991dcdfa38e.svg"
                                  width="15"
                                  height="15"
                                />
                                <span class="text_size">
                                  Hướng dẫn chọn size
                                </span>
                              </a>
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

                      <div class="btn-store-detail">
                        <ul class="d-flex">
                          <li class="btn-store">Tìm sản phẩm tại cửa hàng</li>
                        </ul>
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

                    <div class="col-xs-12 location-store pd-top-10 localtion-info">
                      <p class="d-flex d-flex-center">
                        <img
                          src="https://file.hstatic.net/200000525917/file/shop_edb750edb7f147278a6e26dabd22a7ef.png"
                          width="20"
                          height="20"
                          alt="store"
                        />
                        <span>Có 13 cửa hàng còn sản phẩm này</span>
                        <button id="toggle-location" type="button">
                          +
                        </button>
                      </p>
                      <ul>
                        <div
                          class="store-container"
                          data-tinh="Hà Nội"
                          data-quan="Quận Đống Đa"
                        >
                          <li class="stock 421804">
                            <span class="dist">
                              <i
                                class="fa fa-map-marker"
                                aria-hidden="true"
                              ></i>{" "}
                              Hà Nội:
                            </span>
                            <span class="street">
                              176 Tôn Đức Thắng, Phường Hàng Bột, Quận Đống Đa
                            </span>
                            <div class="location-time-content">
                              <span class="timeStore">
                                <i class="fa fa-clock"></i>
                                <span>9:00 - 22:00</span>
                              </span>
                              <a
                                class="turn-right"
                                href="https://goo.gl/maps/gSLv5JztjApRXngi7"
                              >
                                <i class="fa fa-diamond-turn-right"></i>
                                <span>Xem bản đồ</span>
                              </a>
                            </div>
                          </li>
                        </div>
                        <div
                          class="store-container"
                          data-tinh="Hồ Chí Minh"
                          data-quan="Quận Phú Nhuận"
                        >
                          <li class="stock 421819">
                            <span class="dist">
                              <i
                                class="fa fa-map-marker"
                                aria-hidden="true"
                              ></i>{" "}
                              Hồ Chí Minh:
                            </span>
                            <span class="street">
                              401 Phan Xích Long, Phường 03, Quận Phú Nhuận
                            </span>
                            <div class="location-time-content">
                              <span class="timeStore">
                                <i class="fa fa-clock"></i>
                                <span>9:00 - 22:00</span>
                              </span>
                              <a
                                class="turn-right"
                                href="https://goo.gl/maps/UwnSSzSuUAtRSQex9"
                              >
                                <i class="fa fa-diamond-turn-right"></i>
                                <span>Xem bản đồ</span>
                              </a>
                            </div>
                          </li>
                        </div>
                        <div
                          class="store-container"
                          data-tinh="Bà Rịa - Vũng Tàu"
                          data-quan="Thành phố Vũng Tàu"
                        >
                          <li class="stock 518338">
                            <span class="dist">
                              <i
                                class="fa fa-map-marker"
                                aria-hidden="true"
                              ></i>{" "}
                              Bà Rịa - Vũng Tàu:
                            </span>
                            <span class="street">
                              206 Ba Cu, Phường 4, Thành phố Vũng Tàu
                            </span>
                            <div class="location-time-content">
                              <span class="timeStore">
                                <i class="fa fa-clock"></i>
                                <span>9:00 - 22:00</span>
                              </span>
                              <a
                                class="turn-right"
                                href="https://maps.app.goo.gl/h4a8xobWQnvCVFZr5"
                              >
                                <i class="fa fa-diamond-turn-right"></i>
                                <span>Xem bản đồ</span>
                              </a>
                            </div>
                          </li>
                        </div>
                        <div
                          class="store-container"
                          data-tinh="Cần Thơ"
                          data-quan="Quận Ninh Kiều"
                        >
                          <li class="stock 575278">
                            <span class="dist">
                              <i
                                class="fa fa-map-marker"
                                aria-hidden="true"
                              ></i>{" "}
                              Cần Thơ:
                            </span>
                            <span class="street">
                              35 Trần Phú, Phường Cái Khế, Quận Ninh Kiều
                            </span>
                            <div class="location-time-content">
                              <span class="timeStore">
                                <i class="fa fa-clock"></i>
                                <span>9:00 - 22:00</span>
                              </span>
                              <a
                                class="turn-right"
                                href="https://goo.gl/maps/6gtTYAK4ei3Zqr6o7"
                              >
                                <i class="fa fa-diamond-turn-right"></i>
                                <span>Xem bản đồ</span>
                              </a>
                            </div>
                          </li>
                        </div>
                        <div
                          class="store-container"
                          data-tinh="Đà Nẵng"
                          data-quan="Quận Hải Châu"
                        >
                          <li class="stock 608568">
                            <span class="dist">
                              <i
                                class="fa fa-map-marker"
                                aria-hidden="true"
                              ></i>{" "}
                              Đà Nẵng:
                            </span>
                            <span class="street">
                              144 Lý Tự Trọng, Phường Thuận Phước, Quận Hải Châu
                            </span>
                            <div class="location-time-content">
                              <span class="timeStore">
                                <i class="fa fa-clock"></i>
                                <span>9:00 - 22:00</span>
                              </span>
                              <a
                                class="turn-right"
                                href="https://goo.gl/maps/1bHGdbU1j5VhydEm9"
                              >
                                <i class="fa fa-diamond-turn-right"></i>
                                <span>Xem bản đồ</span>
                              </a>
                            </div>
                          </li>
                        </div>
                        <div
                          class="store-container"
                          data-tinh="Đắk Lắk"
                          data-quan="Thành phố Buôn Ma Thuột"
                        >
                          <li class="stock 617976">
                            <span class="dist">
                              <i
                                class="fa fa-map-marker"
                                aria-hidden="true"
                              ></i>{" "}
                              Đắk Lắk:
                            </span>
                            <span class="street">
                              14-16 Phan Chu Trinh, Phường Thắng Lợi, Thành phố
                              Buôn Ma Thuột
                            </span>
                            <div class="location-time-content">
                              <span class="timeStore">
                                <i class="fa fa-clock"></i>
                                <span>9:00 - 22:00</span>
                              </span>
                              <a
                                class="turn-right"
                                href="https://maps.app.goo.gl/MuKsj4oAtcCpbn8x5"
                              >
                                <i class="fa fa-diamond-turn-right"></i>
                                <span>Xem bản đồ</span>
                              </a>
                            </div>
                          </li>
                        </div>
                        <div
                          class="store-container"
                          data-tinh="Hồ Chí Minh"
                          data-quan="Quận Gò Vấp"
                        >
                          <li class="stock 651102">
                            <span class="dist">
                              <i
                                class="fa fa-map-marker"
                                aria-hidden="true"
                              ></i>{" "}
                              Hồ Chí Minh:
                            </span>
                            <span class="street">
                              94 Lê Văn Thọ, Phường 11, Quận Gò Vấp
                            </span>
                            <div class="location-time-content">
                              <span class="timeStore">
                                <i class="fa fa-clock"></i>
                                <span>9:00 - 22:00</span>
                              </span>
                              <a
                                class="turn-right"
                                href="https://goo.gl/maps/CgbaSPV8U9GG8AQ96"
                              >
                                <i class="fa fa-diamond-turn-right"></i>
                                <span>Xem bản đồ</span>
                              </a>
                            </div>
                          </li>
                        </div>
                        <div
                          class="store-container"
                          data-tinh="Hà Nội"
                          data-quan="Quận Hai Bà Trưng"
                        >
                          <li class="stock 906408">
                            <span class="dist">
                              <i
                                class="fa fa-map-marker"
                                aria-hidden="true"
                              ></i>{" "}
                              Hà Nội:
                            </span>
                            <span class="street">
                              26 Lê Đại Hành, Phường Lê Đại Hành, Quận Hai Bà
                              Trưng
                            </span>
                            <div class="location-time-content">
                              <span class="timeStore">
                                <i class="fa fa-clock"></i>
                                <span>9:00 - 22:00</span>
                              </span>
                              <a
                                class="turn-right"
                                href="https://goo.gl/maps/TMp1qzA886FwhNAaA"
                              >
                                <i class="fa fa-diamond-turn-right"></i>
                                <span>Xem bản đồ</span>
                              </a>
                            </div>
                          </li>
                        </div>
                        <div
                          class="store-container"
                          data-tinh="Hồ Chí Minh"
                          data-quan="Quận 8"
                        >
                          <li class="stock 928196">
                            <span class="dist">
                              <i
                                class="fa fa-map-marker"
                                aria-hidden="true"
                              ></i>{" "}
                              Hồ Chí Minh:
                            </span>
                            <span class="street">
                              407a Liên tỉnh 5, P6, Phường 05, Quận 8
                            </span>
                            <div class="location-time-content">
                              <span class="timeStore">
                                <i class="fa fa-clock"></i>
                                <span>9:00 - 22:00</span>
                              </span>
                              <a
                                class="turn-right"
                                href="https://maps.app.goo.gl/mzZ5wJVqMoriDNZ97"
                              >
                                <i class="fa fa-diamond-turn-right"></i>
                                <span>Xem bản đồ</span>
                              </a>
                            </div>
                          </li>
                        </div>
                        <div
                          class="store-container"
                          data-tinh="Hồ Chí Minh"
                          data-quan="Quận Gò Vấp"
                        >
                          <li class="stock 1291567">
                            <span class="dist">
                              <i
                                class="fa fa-map-marker"
                                aria-hidden="true"
                              ></i>{" "}
                              Hồ Chí Minh:
                            </span>
                            <span class="street">
                              53 Quang Trung, Phường 10, Quận Gò Vấp
                            </span>
                            <div class="location-time-content">
                              <span class="timeStore">
                                <i class="fa fa-clock"></i>
                                <span>9:00 - 22:00</span>
                              </span>
                              <a
                                class="turn-right"
                                href="https://maps.app.goo.gl/hwpnWCxrZStRYTGg7"
                              >
                                <i class="fa fa-diamond-turn-right"></i>
                                <span>Xem bản đồ</span>
                              </a>
                            </div>
                          </li>
                        </div>
                        <div
                          class="store-container"
                          data-tinh="Hồ Chí Minh"
                          data-quan="Thành phố Thủ Đức"
                        >
                          <li class="stock 1470604">
                            <span class="dist">
                              <i
                                class="fa fa-map-marker"
                                aria-hidden="true"
                              ></i>{" "}
                              Hồ Chí Minh:
                            </span>
                            <span class="street">
                              54 Tô VĨnh Diện, Phường Linh Chiểu, Thành phố Thủ
                              Đức
                            </span>
                            <div class="location-time-content">
                              <span class="timeStore">
                                <i class="fa fa-clock"></i>
                                <span>9:00 - 22:00</span>
                              </span>
                              <a
                                class="turn-right"
                                href="https://goo.gl/maps/QknsHNDFZVvoUTzE7"
                              >
                                <i class="fa fa-diamond-turn-right"></i>
                                <span>Xem bản đồ</span>
                              </a>
                            </div>
                          </li>
                        </div>
                        <div
                          class="store-container"
                          data-tinh="Long An"
                          data-quan="Thành phố Tân An"
                        >
                          <li class="stock 1588826">
                            <span class="dist">
                              <i
                                class="fa fa-map-marker"
                                aria-hidden="true"
                              ></i>{" "}
                              Long An:
                            </span>
                            <span class="street">
                              288 - 290 Hùng Vương, Phường 3, Thành phố Tân An
                            </span>
                            <div class="location-time-content">
                              <span class="timeStore">
                                <i class="fa fa-clock"></i>
                                <span>9:00 - 22:00</span>
                              </span>
                              <a
                                class="turn-right"
                                href="https://maps.app.goo.gl/Vz9sTVRoeyQzGjYPA"
                              >
                                <i class="fa fa-diamond-turn-right"></i>
                                <span>Xem bản đồ</span>
                              </a>
                            </div>
                          </li>
                        </div>
                        <div
                          class="store-container"
                          data-tinh="Tiền Giang"
                          data-quan="Thành phố Mỹ Tho"
                        >
                          <li class="stock 1623738">
                            <span class="dist">
                              <i
                                class="fa fa-map-marker"
                                aria-hidden="true"
                              ></i>{" "}
                              Tiền Giang:
                            </span>
                            <span class="street">
                              347 Đường Ấp Bắc, Phường 5, Thành phố Mỹ Tho
                            </span>
                            <div class="location-time-content">
                              <span class="timeStore">
                                <i class="fa fa-clock"></i>
                                <span>9:00 - 22:00</span>
                              </span>
                              <a
                                class="turn-right"
                                href="https://maps.app.goo.gl/sPC4SLHqJaoSZWdCA"
                              >
                                <i class="fa fa-diamond-turn-right"></i>
                                <span>Xem bản đồ</span>
                              </a>
                            </div>
                          </li>
                        </div>
                      </ul>
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
                        <li role="presentation">
                          <a
                            class=""
                            href="javascript:void(0)"
                            data-href="#pro-tab-2"
                            data-toggle="tab"
                            role="tab"
                            aria-selected="true"
                          >
                            <span>Chính Sách Giao Hàng</span>
                          </a>
                        </li>
                        <li role="presentation">
                          <a
                            class=""
                            href="javascript:void(0)"
                            data-href="#pro-tab-3"
                            data-toggle="tab"
                            role="tab"
                            aria-selected="true"
                          >
                            <span>Chính Sách Đổi Hàng</span>
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
                        <p>&nbsp;</p>
                        <p>
                          <strong>🔍: SWID0042</strong>
                        </p>
                      </div>
                    </div>
                    <div
                      class="tab-pane content-entry"
                      id="pro-tab-2"
                      role="tabpanel"
                    >
                      <div class="tab-mobile visible-xs">
                        Chính Sách Giao Hàng
                      </div>
                      <div class="more-description">
                        <p style={{ textAlign: "center" }}>
                          <img
                            class="lazyload dt-width-auto"
                            src="https://file.hstatic.net/1000253775/file/cs_giaohanh.jpg"
                            height="600"
                            width="600"
                          />
                        </p>
                        <p>&nbsp;</p>
                      </div>
                    </div>
                    <div
                      class="tab-pane content-entry"
                      id="pro-tab-3"
                      role="tabpanel"
                    >
                      <div class="tab-mobile visible-xs">
                        Chính Sách Đổi Hàng
                      </div>
                      <div class="more-description">
                        <p style={{ textAlign: "center" }}>
                          <img
                            class="lazyload dt-width-auto"
                            src="https://file.hstatic.net/1000253775/file/doitra_1.jpg"
                            height="600"
                            width="600"
                          />
                        </p>
                        <p style={{ textAlign: "center" }}>
                          <img
                            class="lazyload dt-width-auto"
                            src="https://file.hstatic.net/1000253775/file/doitra_2.jpg"
                            height="600"
                            width="600"
                          />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-12 col-sm-12 col-xs-12 order-mb-5 mg-top-30 mg-top-15-mb">
                <div id="section-related" class="d-none-button-mb">
                  <div class="bg-while">
                    <div class="top-title">
                      <h2 class="title-section">
                        <span>Sản phẩm liên quan</span>
                      </h2>
                      <p></p>
                    </div>
                    <div
                      id="owl-collection-related"
                      class="d-flex-slick mg-left--15 slick-callback slick-initialized slick-slider slick-dotted"
                      data-md="5"
                      data-sm="3"
                      data-xs="2"
                      data-slides-md="5"
                      data-slides-tablet="3"
                      data-slides-xs="2"
                      data-slides-md-scroll="5"
                      data-slides-tablet-scroll="3"
                      data-slides-xs-scroll="2"
                      data-dots="true"
                      data-autoplay="false"
                      data-infinite="false"
                      data-custom-arrows="true"
                    >
                      <button
                        type="button"
                        class="slick-prev slick-arrow custom-style slick-disabled"
                        aria-label="Previous"
                        aria-disabled="true"
                        style={{ display: "block" }}
                      >
                        <span class="arrow-custom arrow-left">
                          <div class="arrow-top"></div>
                          <div class="arrow-bottom"></div>
                        </span>
                      </button>
                      <div class="slick-list draggable">
                        <div
                          class="slick-track"
                          style={{
                            opacity: "1",
                            width: "1729px",
                            transform: "translate3d(0px, 0px, 0px)",
                          }}
                        >
                          <meta
                            style={{ display: "none", width: "247px" }}
                            name="robots"
                            content="noindex,nofollow"
                            class="slick-slide slick-current slick-active"
                            data-slick-index="0"
                            aria-hidden="false"
                            tabIndex="0"
                            role="tabpanel"
                            id="slick-slide20"
                            aria-describedby="slick-slide-control20"
                          />
                          <div
                            class="d-flex-column item-owl pd-left--15 slick-slide slick-active"
                            data-slick-index="1"
                            aria-hidden="false"
                            style={{ width: "262px" }}
                            tabIndex="0"
                            role="tabpanel"
                            id="slick-slide21"
                          >
                            <div class="product-block item">
                              <div
                                class="product-img has-hover"
                                data-frame="hangmoi Áo nỉ - sweatshirt KIỂM KÊ FD-YUNA FRAMEMICKEY ONWEB ONPOS SALEDONG sale20 saleupto GP25 GP319K TAGGP349K DG319K DG"
                              >
                                <a
                                  href="/products/ao-sweatshirt-icondenim-ft-disney-bring-the-bold"
                                  title="Áo Nỉ Nam ICONDENIM&nbsp;Mickey &amp; Friends Bring The Bold Form Regular"
                                  class="image-resize"
                                  tabIndex="0"
                                >
                                  <div class="product-sale">
                                    <span>-%</span>
                                  </div>
                                  <picture>
                                    <source
                                      media="(max-width: 480px)"
                                      data-srcset="//product.hstatic.net/1000253775/product/ao-sweatshirt-icondenim-ft-disney-bring-the-bold__10__186c84f6a38a4cd3af5422302404f007_large.jpg"
                                      srcSet="
                                  //product.hstatic.net/1000253775/product/ao-sweatshirt-icondenim-ft-disney-bring-the-bold__10__186c84f6a38a4cd3af5422302404f007_large.jpg
                                "
                                    />
                                    <source
                                      media="(min-width: 481px)"
                                      data-srcset="//product.hstatic.net/1000253775/product/ao-sweatshirt-icondenim-ft-disney-bring-the-bold__10__186c84f6a38a4cd3af5422302404f007_large.jpg"
                                      srcSet="
                                  //product.hstatic.net/1000253775/product/ao-sweatshirt-icondenim-ft-disney-bring-the-bold__10__186c84f6a38a4cd3af5422302404f007_large.jpg
                                "
                                    />
                                    <img
                                      class="dt-width-100 img-first lazyloaded"
                                      loading="lazy"
                                      width="260"
                                      height="260"
                                      src="//product.hstatic.net/1000253775/product/ao-sweatshirt-icondenim-ft-disney-bring-the-bold__10__186c84f6a38a4cd3af5422302404f007_large.jpg"
                                      alt="Áo Nỉ Nam ICONDENIM&nbsp;Mickey &amp; Friends Bring The Bold Form Regular"
                                      title="Áo Nỉ Nam ICONDENIM&nbsp;Mickey &amp; Friends Bring The Bold Form Regular"
                                    />
                                  </picture>
                                  <picture>
                                    <source
                                      media="(min-width: 481px)"
                                      data-srcset="//product.hstatic.net/1000253775/product/ao-sweatshirt-icondenim-ft-disney-bring-the-bold__6__ddab1914d27c4598941fdbeacc6aeff5_large.jpg"
                                      srcSet="
                                  //product.hstatic.net/1000253775/product/ao-sweatshirt-icondenim-ft-disney-bring-the-bold__6__ddab1914d27c4598941fdbeacc6aeff5_large.jpg
                                "
                                    />
                                    <img
                                      class="dt-width-100 img-hover hidden-xs lazyloaded"
                                      loading="lazy"
                                      width="260"
                                      height="260"
                                      src="//product.hstatic.net/1000253775/product/ao-sweatshirt-icondenim-ft-disney-bring-the-bold__6__ddab1914d27c4598941fdbeacc6aeff5_large.jpg"
                                      alt="Áo Nỉ Nam ICONDENIM&nbsp;Mickey &amp; Friends Bring The Bold Form Regular"
                                      title="Áo Nỉ Nam ICONDENIM&nbsp;Mickey &amp; Friends Bring The Bold Form Regular"
                                    />
                                  </picture>
                                </a>

                                <div class="button-loop-pro hidden-xs hidden-sm">
                                  <button
                                    class="btn-quickview"
                                    onClick="window.wd.scofield.quickview('/products/ao-sweatshirt-icondenim-ft-disney-bring-the-bold?view=quickview-nochoose')"
                                    type="button"
                                    tabIndex="0"
                                  >
                                    <img
                                      src="https://file.hstatic.net/200000525917/file/search-icon_61351aaf4f2a4ba0b163434492c75c0d.svg"
                                      width="16"
                                      height="16"
                                      alt="Btn Quickview"
                                      title="Btn Quickview"
                                    />
                                  </button>
                                </div>

                                <div class="atc-loop d-flex js-center mg-top-auto">
                                  <button
                                    onClick="window.wd.scofield.addtocartloop('true','1131868464','/products/ao-sweatshirt-icondenim-ft-disney-bring-the-bold',event,'1057618371')"
                                    class="atc-mb-loop"
                                    type="button"
                                    tabIndex="0"
                                  >
                                    <span class="atc-text">Thêm vào giỏ</span>
                                    <span class="bd-cart">
                                      <img
                                        class="atc-default"
                                        width="20"
                                        height="20"
                                        src="//theme.hstatic.net/1000253775/1001345203/14/add-to-cart.svg?v=4297"
                                        alt="Thêm vào giỏ"
                                      />
                                      <img
                                        class="atc-hv"
                                        width="20"
                                        height="20"
                                        src="//theme.hstatic.net/1000253775/1001345203/14/add-to-cart-hv.svg?v=4297"
                                        alt="Thêm vào giỏ"
                                      />
                                    </span>
                                  </button>
                                </div>
                              </div>

                              <div class="label_product-tag label-tag label-outlet">
                                <div class="label_wrapper">Sale</div>
                              </div>

                              <div class="product-detail">
                                <h3 class="pro-name">
                                  <a
                                    href="/products/ao-sweatshirt-icondenim-ft-disney-bring-the-bold"
                                    title="Áo Nỉ Nam ICONDENIM&nbsp;Mickey &amp; Friends Bring The Bold Form Regular"
                                    tabIndex="0"
                                  >
                                    Áo Nỉ Nam ICONDENIM&nbsp;Mickey &amp;
                                    Friends Bring The Bold Form Regular
                                  </a>
                                </h3>
                                <div class="box-pro-prices">
                                  <div class="pro-price-sale">
                                    <span>319,000₫</span>
                                    <del class="compare-price">449,000₫</del>

                                    <div class="label_product-discount label-sale">
                                      <div class="label_wrapper">29%</div>
                                    </div>
                                  </div>
                                  <ul class="hash-tag-loop d-flex"></ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="d-flex-column item-owl pd-left--15 slick-slide slick-active"
                            data-slick-index="2"
                            aria-hidden="false"
                            style={{ width: "262px" }}
                            tabIndex="0"
                            role="tabpanel"
                            id="slick-slide22"
                          >
                            <div class="product-block item">
                              <div
                                class="product-img has-hover"
                                data-frame="Áo nỉ - sweatshirt hangmoi KIỂM KÊ FD-YUNA FRAMEMICKEY ONWEB ONPOS GP349K GP25 TAGGP349K TAGSALEGP DG DG349K"
                              >
                                <a
                                  href="/products/ao-sweatshirt-icondenim-ft-disney-the-one-and-only"
                                  title="Áo Nỉ Nam ICONDENIM Mickey &amp; Friends The Emotions Form Regular"
                                  class="image-resize"
                                  tabIndex="0"
                                >
                                  <div class="product-sale">
                                    <span>-%</span>
                                  </div>
                                  <picture>
                                    <source
                                      media="(max-width: 480px)"
                                      data-srcset="//product.hstatic.net/1000253775/product/160_ao_sweater_040-7_37382485bb43480398286ddc497efe39_large.jpg"
                                      srcSet="
                                  //product.hstatic.net/1000253775/product/160_ao_sweater_040-7_37382485bb43480398286ddc497efe39_large.jpg
                                "
                                    />
                                    <source
                                      media="(min-width: 481px)"
                                      data-srcset="//product.hstatic.net/1000253775/product/160_ao_sweater_040-7_37382485bb43480398286ddc497efe39_large.jpg"
                                      srcSet="
                                  //product.hstatic.net/1000253775/product/160_ao_sweater_040-7_37382485bb43480398286ddc497efe39_large.jpg
                                "
                                    />
                                    <img
                                      class="dt-width-100 img-first lazyloaded"
                                      loading="lazy"
                                      width="260"
                                      height="260"
                                      src="//product.hstatic.net/1000253775/product/160_ao_sweater_040-7_37382485bb43480398286ddc497efe39_large.jpg"
                                      alt="Áo Nỉ Nam ICONDENIM Mickey &amp; Friends The Emotions Form Regular"
                                      title="Áo Nỉ Nam ICONDENIM Mickey &amp; Friends The Emotions Form Regular"
                                    />
                                  </picture>
                                  <picture>
                                    <source
                                      media="(min-width: 481px)"
                                      data-srcset="//product.hstatic.net/1000253775/product/160_ao_sweater_040-10_c644a111c612464796cf71b76a9b6ef5_large.jpg"
                                      srcSet="
                                  //product.hstatic.net/1000253775/product/160_ao_sweater_040-10_c644a111c612464796cf71b76a9b6ef5_large.jpg
                                "
                                    />
                                    <img
                                      class="dt-width-100 img-hover hidden-xs lazyloaded"
                                      loading="lazy"
                                      width="260"
                                      height="260"
                                      src="//product.hstatic.net/1000253775/product/160_ao_sweater_040-10_c644a111c612464796cf71b76a9b6ef5_large.jpg"
                                      alt="Áo Nỉ Nam ICONDENIM Mickey &amp; Friends The Emotions Form Regular"
                                      title="Áo Nỉ Nam ICONDENIM Mickey &amp; Friends The Emotions Form Regular"
                                    />
                                  </picture>
                                </a>

                                <div class="button-loop-pro hidden-xs hidden-sm">
                                  <button
                                    class="btn-quickview"
                                    onClick="window.wd.scofield.quickview('/products/ao-sweatshirt-icondenim-ft-disney-the-one-and-only?view=quickview-nochoose')"
                                    type="button"
                                    tabIndex="0"
                                  >
                                    <img
                                      src="https://file.hstatic.net/200000525917/file/search-icon_61351aaf4f2a4ba0b163434492c75c0d.svg"
                                      width="16"
                                      height="16"
                                      alt="Btn Quickview"
                                      title="Btn Quickview"
                                    />
                                  </button>
                                </div>

                                <div class="atc-loop d-flex js-center mg-top-auto">
                                  <button
                                    onClick="window.wd.scofield.addtocartloop('true','1131868253','/products/ao-sweatshirt-icondenim-ft-disney-the-one-and-only',event,'1057618235')"
                                    class="atc-mb-loop"
                                    type="button"
                                    tabIndex="0"
                                  >
                                    <span class="atc-text">Thêm vào giỏ</span>
                                    <span class="bd-cart">
                                      <img
                                        class="atc-default"
                                        width="20"
                                        height="20"
                                        src="//theme.hstatic.net/1000253775/1001345203/14/add-to-cart.svg?v=4297"
                                        alt="Thêm vào giỏ"
                                      />
                                      <img
                                        class="atc-hv"
                                        width="20"
                                        height="20"
                                        src="//theme.hstatic.net/1000253775/1001345203/14/add-to-cart-hv.svg?v=4297"
                                        alt="Thêm vào giỏ"
                                      />
                                    </span>
                                  </button>
                                </div>
                              </div>

                              <div class="label_product-tag label-tag label-outlet">
                                <div class="label_wrapper">Sale</div>
                              </div>

                              <div class="product-detail">
                                <h3 class="pro-name">
                                  <a
                                    href="/products/ao-sweatshirt-icondenim-ft-disney-the-one-and-only"
                                    title="Áo Nỉ Nam ICONDENIM Mickey &amp; Friends The Emotions Form Regular"
                                    tabIndex="0"
                                  >
                                    Áo Nỉ Nam ICONDENIM Mickey &amp; Friends The
                                    Emotions Form Regular
                                  </a>
                                </h3>
                                <div class="box-pro-prices">
                                  <div class="pro-price-sale">
                                    <span>349,000₫</span>
                                    <del class="compare-price">449,000₫</del>

                                    <div class="label_product-discount label-sale">
                                      <div class="label_wrapper">22%</div>
                                    </div>
                                  </div>
                                  <ul class="hash-tag-loop d-flex"></ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="d-flex-column item-owl pd-left--15 slick-slide slick-active"
                            data-slick-index="3"
                            aria-hidden="false"
                            style={{ width: "262px" }}
                            tabIndex="0"
                            role="tabpanel"
                            id="slick-slide23"
                          >
                            <div class="product-block item">
                              <div
                                class="product-img has-hover"
                                data-frame="FD-THUONG Áo nỉ - sweatshirt KIỂM KÊ hangmoi ONPOS ONWEB SPEE2024-11-28 GP25 GP299K TAGGP349K DG299K DG"
                              >
                                <a
                                  href="/products/a-o-sweatshirt-icondenim-heroic-doberman"
                                  title="Áo Sweatshirt Nam ICONDENIM Heroic Doberman"
                                  class="image-resize"
                                  tabIndex="0"
                                >
                                  <div class="product-sale">
                                    <span>-%</span>
                                  </div>
                                  <picture>
                                    <source
                                      media="(max-width: 480px)"
                                      data-srcset="//product.hstatic.net/1000253775/product/160_sweater_044-3_2cafde89fabe4e2d958bf8fd0edfdda9_large.jpg"
                                      srcSet="
                                  //product.hstatic.net/1000253775/product/160_sweater_044-3_2cafde89fabe4e2d958bf8fd0edfdda9_large.jpg
                                "
                                    />
                                    <source
                                      media="(min-width: 481px)"
                                      data-srcset="//product.hstatic.net/1000253775/product/160_sweater_044-3_2cafde89fabe4e2d958bf8fd0edfdda9_large.jpg"
                                      srcSet="
                                  //product.hstatic.net/1000253775/product/160_sweater_044-3_2cafde89fabe4e2d958bf8fd0edfdda9_large.jpg
                                "
                                    />
                                    <img
                                      class="dt-width-100 img-first lazyloaded"
                                      loading="lazy"
                                      width="260"
                                      height="260"
                                      src="//product.hstatic.net/1000253775/product/160_sweater_044-3_2cafde89fabe4e2d958bf8fd0edfdda9_large.jpg"
                                      alt="Áo Sweatshirt Nam ICONDENIM Heroic Doberman"
                                      title="Áo Sweatshirt Nam ICONDENIM Heroic Doberman"
                                    />
                                  </picture>
                                  <picture>
                                    <source
                                      media="(min-width: 481px)"
                                      data-srcset="//product.hstatic.net/1000253775/product/160_sweater_044-14_9b752304cac44ec0a0056ac249bcfe17_large.jpg"
                                      srcSet="
                                  //product.hstatic.net/1000253775/product/160_sweater_044-14_9b752304cac44ec0a0056ac249bcfe17_large.jpg
                                "
                                    />
                                    <img
                                      class="dt-width-100 img-hover hidden-xs lazyloaded"
                                      loading="lazy"
                                      width="260"
                                      height="260"
                                      src="//product.hstatic.net/1000253775/product/160_sweater_044-14_9b752304cac44ec0a0056ac249bcfe17_large.jpg"
                                      alt="Áo Sweatshirt Nam ICONDENIM Heroic Doberman"
                                      title="Áo Sweatshirt Nam ICONDENIM Heroic Doberman"
                                    />
                                  </picture>
                                </a>

                                <div class="button-loop-pro hidden-xs hidden-sm">
                                  <button
                                    class="btn-quickview"
                                    onClick="window.wd.scofield.quickview('/products/a-o-sweatshirt-icondenim-heroic-doberman?view=quickview-nochoose')"
                                    type="button"
                                    tabIndex="0"
                                  >
                                    <img
                                      src="https://file.hstatic.net/200000525917/file/search-icon_61351aaf4f2a4ba0b163434492c75c0d.svg"
                                      width="16"
                                      height="16"
                                      alt="Btn Quickview"
                                      title="Btn Quickview"
                                    />
                                  </button>
                                </div>

                                <div class="atc-loop d-flex js-center mg-top-auto">
                                  <button
                                    onClick="window.wd.scofield.addtocartloop('true','1131814222','/products/a-o-sweatshirt-icondenim-heroic-doberman',event,'1057600790')"
                                    class="atc-mb-loop"
                                    type="button"
                                    tabIndex="0"
                                  >
                                    <span class="atc-text">Thêm vào giỏ</span>
                                    <span class="bd-cart">
                                      <img
                                        class="atc-default"
                                        width="20"
                                        height="20"
                                        src="//theme.hstatic.net/1000253775/1001345203/14/add-to-cart.svg?v=4297"
                                        alt="Thêm vào giỏ"
                                      />
                                      <img
                                        class="atc-hv"
                                        width="20"
                                        height="20"
                                        src="//theme.hstatic.net/1000253775/1001345203/14/add-to-cart-hv.svg?v=4297"
                                        alt="Thêm vào giỏ"
                                      />
                                    </span>
                                  </button>
                                </div>
                              </div>

                              <div class="label_product-tag label-tag label-outlet">
                                <div class="label_wrapper">Sale</div>
                              </div>

                              <div class="product-detail">
                                <h3 class="pro-name">
                                  <a
                                    href="/products/a-o-sweatshirt-icondenim-heroic-doberman"
                                    title="Áo Sweatshirt Nam ICONDENIM Heroic Doberman"
                                    tabIndex="0"
                                  >
                                    Áo Sweatshirt Nam ICONDENIM Heroic Doberman
                                  </a>
                                </h3>
                                <div class="box-pro-prices">
                                  <div class="pro-price-sale">
                                    <span>299,000₫</span>
                                    <del class="compare-price">399,000₫</del>

                                    <div class="label_product-discount label-sale">
                                      <div class="label_wrapper">25%</div>
                                    </div>
                                  </div>
                                  <ul class="hash-tag-loop d-flex"></ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="d-flex-column item-owl pd-left--15 slick-slide slick-active"
                            data-slick-index="4"
                            aria-hidden="false"
                            style={{ width: "262px" }}
                            tabIndex="0"
                            role="tabpanel"
                            id="slick-slide24"
                          >
                            <div class="product-block item">
                              <div
                                class="product-img has-hover"
                                data-frame="FD-THUONG Áo nỉ - sweatshirt hangmoi KIỂM KÊ ONPOS ONWEB SPEE2024-11-12 FRAMEDODONG SALEDONG sale20 saleupto GP25 GP279K TAGGP349K DG DG279K"
                              >
                                <a
                                  href="/products/ao-sweatshirt-icondenim"
                                  title="Áo Sweatshirt Nam ICONDENIM Basic"
                                  class="image-resize"
                                  tabIndex="0"
                                >
                                  <div class="product-sale">
                                    <span>-%</span>
                                  </div>
                                  <picture>
                                    <source
                                      media="(max-width: 480px)"
                                      data-srcset="//product.hstatic.net/1000253775/product/160_ao_sweater_045-11_ae10a65c3b7841feb36921d81b15b809_large.jpg"
                                      srcSet="
                                  //product.hstatic.net/1000253775/product/160_ao_sweater_045-11_ae10a65c3b7841feb36921d81b15b809_large.jpg
                                "
                                    />
                                    <source
                                      media="(min-width: 481px)"
                                      data-srcset="//product.hstatic.net/1000253775/product/160_ao_sweater_045-11_ae10a65c3b7841feb36921d81b15b809_large.jpg"
                                      srcSet="
                                  //product.hstatic.net/1000253775/product/160_ao_sweater_045-11_ae10a65c3b7841feb36921d81b15b809_large.jpg
                                "
                                    />
                                    <img
                                      class="dt-width-100 img-first lazyloaded"
                                      loading="lazy"
                                      width="260"
                                      height="260"
                                      src="//product.hstatic.net/1000253775/product/160_ao_sweater_045-11_ae10a65c3b7841feb36921d81b15b809_large.jpg"
                                      alt="Áo Sweatshirt Nam ICONDENIM Basic"
                                      title="Áo Sweatshirt Nam ICONDENIM Basic"
                                    />
                                  </picture>
                                  <picture>
                                    <source
                                      media="(min-width: 481px)"
                                      data-srcset="//product.hstatic.net/1000253775/product/160_ao_sweater_045-14_1b66b9b4944644048b9ffea133533673_large.jpg"
                                      srcSet="
                                  //product.hstatic.net/1000253775/product/160_ao_sweater_045-14_1b66b9b4944644048b9ffea133533673_large.jpg
                                "
                                    />
                                    <img
                                      class="dt-width-100 img-hover hidden-xs lazyloaded"
                                      loading="lazy"
                                      width="260"
                                      height="260"
                                      src="//product.hstatic.net/1000253775/product/160_ao_sweater_045-14_1b66b9b4944644048b9ffea133533673_large.jpg"
                                      alt="Áo Sweatshirt Nam ICONDENIM Basic"
                                      title="Áo Sweatshirt Nam ICONDENIM Basic"
                                    />
                                  </picture>
                                </a>

                                <div class="button-loop-pro hidden-xs hidden-sm">
                                  <button
                                    class="btn-quickview"
                                    onClick="window.wd.scofield.quickview('/products/ao-sweatshirt-icondenim?view=quickview-nochoose')"
                                    type="button"
                                    tabIndex="0"
                                  >
                                    <img
                                      src="https://file.hstatic.net/200000525917/file/search-icon_61351aaf4f2a4ba0b163434492c75c0d.svg"
                                      width="16"
                                      height="16"
                                      alt="Btn Quickview"
                                      title="Btn Quickview"
                                    />
                                  </button>
                                </div>

                                <div class="atc-loop d-flex js-center mg-top-auto">
                                  <button
                                    onClick="window.wd.scofield.addtocartloop('true','1130367308','/products/ao-sweatshirt-icondenim',event,'1056956889')"
                                    class="atc-mb-loop"
                                    type="button"
                                    tabIndex="0"
                                  >
                                    <span class="atc-text">Thêm vào giỏ</span>
                                    <span class="bd-cart">
                                      <img
                                        class="atc-default"
                                        width="20"
                                        height="20"
                                        src="//theme.hstatic.net/1000253775/1001345203/14/add-to-cart.svg?v=4297"
                                        alt="Thêm vào giỏ"
                                      />
                                      <img
                                        class="atc-hv"
                                        width="20"
                                        height="20"
                                        src="//theme.hstatic.net/1000253775/1001345203/14/add-to-cart-hv.svg?v=4297"
                                        alt="Thêm vào giỏ"
                                      />
                                    </span>
                                  </button>
                                </div>
                              </div>

                              <div class="label_product-tag label-tag label-outlet">
                                <div class="label_wrapper">Sale</div>
                              </div>

                              <div class="product-detail">
                                <h3 class="pro-name">
                                  <a
                                    href="/products/ao-sweatshirt-icondenim"
                                    title="Áo Sweatshirt Nam ICONDENIM Basic"
                                    tabIndex="0"
                                  >
                                    Áo Sweatshirt Nam ICONDENIM Basic
                                  </a>
                                </h3>
                                <div class="box-pro-prices">
                                  <div class="pro-price-sale">
                                    <span>279,000₫</span>
                                    <del class="compare-price">389,000₫</del>

                                    <div class="label_product-discount label-sale">
                                      <div class="label_wrapper">28%</div>
                                    </div>
                                  </div>
                                  <ul class="hash-tag-loop d-flex"></ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="d-flex-column item-owl pd-left--15 slick-slide"
                            data-slick-index="5"
                            aria-hidden="true"
                            style={{ width: "262px" }}
                            tabIndex="-1"
                            role="tabpanel"
                            id="slick-slide25"
                            aria-describedby="slick-slide-control21"
                          >
                            <div class="product-block item">
                              <div
                                class="product-img has-hover"
                                data-frame="hangmoi KIỂM KÊ FD-THUONG Áo nỉ - sweatshirt ONPOS ONWEB SPEE2024-12-11 FRAMEDODONG SALEDONG sale20 saleupto GP279K GP25 TAGGP349K DG DG279K"
                              >
                                <a
                                  href="/products/ao-sweatshirt-icondenim-orgnls"
                                  title="Áo Sweatshirt Nam ICONDENIM Orgnls Painted"
                                  class="image-resize"
                                  tabIndex="-1"
                                >
                                  <div class="product-sale">
                                    <span>-%</span>
                                  </div>
                                  <picture>
                                    <source
                                      media="(max-width: 480px)"
                                      data-srcset="//product.hstatic.net/1000253775/product/160_ao_tay_dai_042-10_46678748e55549a8a78358ad28d44baf_large.jpg"
                                      srcSet="
                                  //product.hstatic.net/1000253775/product/160_ao_tay_dai_042-10_46678748e55549a8a78358ad28d44baf_large.jpg
                                "
                                    />
                                    <source
                                      media="(min-width: 481px)"
                                      data-srcset="//product.hstatic.net/1000253775/product/160_ao_tay_dai_042-10_46678748e55549a8a78358ad28d44baf_large.jpg"
                                      srcSet="
                                  //product.hstatic.net/1000253775/product/160_ao_tay_dai_042-10_46678748e55549a8a78358ad28d44baf_large.jpg
                                "
                                    />
                                    <img
                                      class="dt-width-100 img-first lazyloaded"
                                      loading="lazy"
                                      width="260"
                                      height="260"
                                      src="//product.hstatic.net/1000253775/product/160_ao_tay_dai_042-10_46678748e55549a8a78358ad28d44baf_large.jpg"
                                      alt="Áo Sweatshirt Nam ICONDENIM Orgnls Painted"
                                      title="Áo Sweatshirt Nam ICONDENIM Orgnls Painted"
                                    />
                                  </picture>
                                  <picture>
                                    <source
                                      media="(min-width: 481px)"
                                      data-srcset="//product.hstatic.net/1000253775/product/160_ao_tay_dai_042-11_e38f885ecbf54d8c8b9dfbfa25b17408_large.jpg"
                                      srcSet="
                                  //product.hstatic.net/1000253775/product/160_ao_tay_dai_042-11_e38f885ecbf54d8c8b9dfbfa25b17408_large.jpg
                                "
                                    />
                                    <img
                                      class="dt-width-100 img-hover hidden-xs lazyloaded"
                                      loading="lazy"
                                      width="260"
                                      height="260"
                                      src="//product.hstatic.net/1000253775/product/160_ao_tay_dai_042-11_e38f885ecbf54d8c8b9dfbfa25b17408_large.jpg"
                                      alt="Áo Sweatshirt Nam ICONDENIM Orgnls Painted"
                                      title="Áo Sweatshirt Nam ICONDENIM Orgnls Painted"
                                    />
                                  </picture>
                                </a>

                                <div class="button-loop-pro hidden-xs hidden-sm">
                                  <button
                                    class="btn-quickview"
                                    onClick="window.wd.scofield.quickview('/products/ao-sweatshirt-icondenim-orgnls?view=quickview-nochoose')"
                                    type="button"
                                    tabIndex="-1"
                                  >
                                    <img
                                      src="https://file.hstatic.net/200000525917/file/search-icon_61351aaf4f2a4ba0b163434492c75c0d.svg"
                                      width="16"
                                      height="16"
                                      alt="Btn Quickview"
                                      title="Btn Quickview"
                                    />
                                  </button>
                                </div>

                                <div class="atc-loop d-flex js-center mg-top-auto">
                                  <button
                                    onClick="window.wd.scofield.addtocartloop('true','1130107769','/products/ao-sweatshirt-icondenim-orgnls',event,'1056846128')"
                                    class="atc-mb-loop"
                                    type="button"
                                    tabIndex="-1"
                                  >
                                    <span class="atc-text">Thêm vào giỏ</span>
                                    <span class="bd-cart">
                                      <img
                                        class="atc-default"
                                        width="20"
                                        height="20"
                                        src="//theme.hstatic.net/1000253775/1001345203/14/add-to-cart.svg?v=4297"
                                        alt="Thêm vào giỏ"
                                      />
                                      <img
                                        class="atc-hv"
                                        width="20"
                                        height="20"
                                        src="//theme.hstatic.net/1000253775/1001345203/14/add-to-cart-hv.svg?v=4297"
                                        alt="Thêm vào giỏ"
                                      />
                                    </span>
                                  </button>
                                </div>
                              </div>

                              <div class="label_product-tag label-tag label-outlet">
                                <div class="label_wrapper">Sale</div>
                              </div>

                              <div class="product-detail">
                                <h3 class="pro-name">
                                  <a
                                    href="/products/ao-sweatshirt-icondenim-orgnls"
                                    title="Áo Sweatshirt Nam ICONDENIM Orgnls Painted"
                                    tabIndex="-1"
                                  >
                                    Áo Sweatshirt Nam ICONDENIM Orgnls Painted
                                  </a>
                                </h3>
                                <div class="box-pro-prices">
                                  <div class="pro-price-sale">
                                    <span>279,000₫</span>
                                    <del class="compare-price">389,000₫</del>

                                    <div class="label_product-discount label-sale">
                                      <div class="label_wrapper">28%</div>
                                    </div>
                                  </div>
                                  <ul class="hash-tag-loop d-flex"></ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="d-flex-column item-owl pd-left--15 slick-slide"
                            data-slick-index="6"
                            aria-hidden="true"
                            style={{ width: "262px" }}
                            tabIndex="-1"
                            role="tabpanel"
                            id="slick-slide26"
                          >
                            <div class="product-block item">
                              <div
                                class="product-img has-hover"
                                data-frame="KIỂM KÊ Áo nỉ - sweatshirt hangmoi FD-THUONG sale10 ONPOS onweb BF24 BF299K DG249-299K DG299K DG"
                              >
                                <a
                                  href="/products/ao-sweater-nam-icondenim-infinity"
                                  title="Áo Sweater Nam ICONDENIM Infinity"
                                  class="image-resize"
                                  tabIndex="-1"
                                >
                                  <div class="product-sale">
                                    <span>-%</span>
                                  </div>
                                  <picture>
                                    <source
                                      media="(max-width: 480px)"
                                      data-srcset="//product.hstatic.net/1000253775/product/160_sweater_1m-1_51a7512cc2af46a29344129d1dc569d3_large.jpg"
                                      srcSet="
                                  //product.hstatic.net/1000253775/product/160_sweater_1m-1_51a7512cc2af46a29344129d1dc569d3_large.jpg
                                "
                                    />
                                    <source
                                      media="(min-width: 481px)"
                                      data-srcset="//product.hstatic.net/1000253775/product/160_sweater_1m-1_51a7512cc2af46a29344129d1dc569d3_large.jpg"
                                      srcSet="
                                  //product.hstatic.net/1000253775/product/160_sweater_1m-1_51a7512cc2af46a29344129d1dc569d3_large.jpg
                                "
                                    />
                                    <img
                                      class="dt-width-100 img-first ls-is-cached lazyloaded"
                                      loading="lazy"
                                      width="260"
                                      height="260"
                                      src="//product.hstatic.net/1000253775/product/160_sweater_1m-1_51a7512cc2af46a29344129d1dc569d3_large.jpg"
                                      alt="Áo Sweater Nam ICONDENIM Infinity"
                                      title="Áo Sweater Nam ICONDENIM Infinity"
                                    />
                                  </picture>
                                  <picture>
                                    <source
                                      media="(min-width: 481px)"
                                      data-srcset="//product.hstatic.net/1000253775/product/160_sweater_1m-14_9c1a6f7e865240cd8b8f038647fc8dcc_large.jpg"
                                      srcSet="
                                  //product.hstatic.net/1000253775/product/160_sweater_1m-14_9c1a6f7e865240cd8b8f038647fc8dcc_large.jpg
                                "
                                    />
                                    <img
                                      class="dt-width-100 img-hover hidden-xs ls-is-cached lazyloaded"
                                      loading="lazy"
                                      width="260"
                                      height="260"
                                      src="//product.hstatic.net/1000253775/product/160_sweater_1m-14_9c1a6f7e865240cd8b8f038647fc8dcc_large.jpg"
                                      alt="Áo Sweater Nam ICONDENIM Infinity"
                                      title="Áo Sweater Nam ICONDENIM Infinity"
                                    />
                                  </picture>
                                </a>

                                <div class="button-loop-pro hidden-xs hidden-sm">
                                  <button
                                    class="btn-quickview"
                                    onClick="window.wd.scofield.quickview('/products/ao-sweater-nam-icondenim-infinity?view=quickview-nochoose')"
                                    type="button"
                                    tabIndex="-1"
                                  >
                                    <img
                                      src="https://file.hstatic.net/200000525917/file/search-icon_61351aaf4f2a4ba0b163434492c75c0d.svg"
                                      width="16"
                                      height="16"
                                      alt="Btn Quickview"
                                      title="Btn Quickview"
                                    />
                                  </button>
                                </div>

                                <div class="atc-loop d-flex js-center mg-top-auto">
                                  <button
                                    onClick="window.wd.scofield.addtocartloop('true','1117310525','/products/ao-sweater-nam-icondenim-infinity',event,'1052162037')"
                                    class="atc-mb-loop"
                                    type="button"
                                    tabIndex="-1"
                                  >
                                    <span class="atc-text">Thêm vào giỏ</span>
                                    <span class="bd-cart">
                                      <img
                                        class="atc-default"
                                        width="20"
                                        height="20"
                                        src="//theme.hstatic.net/1000253775/1001345203/14/add-to-cart.svg?v=4297"
                                        alt="Thêm vào giỏ"
                                      />
                                      <img
                                        class="atc-hv"
                                        width="20"
                                        height="20"
                                        src="//theme.hstatic.net/1000253775/1001345203/14/add-to-cart-hv.svg?v=4297"
                                        alt="Thêm vào giỏ"
                                      />
                                    </span>
                                  </button>
                                </div>
                              </div>

                              <div class="label_product-tag label-tag label-outlet">
                                <div class="label_wrapper">Sale</div>
                              </div>

                              <div class="product-detail">
                                <h3 class="pro-name">
                                  <a
                                    href="/products/ao-sweater-nam-icondenim-infinity"
                                    title="Áo Sweater Nam ICONDENIM Infinity"
                                    tabIndex="-1"
                                  >
                                    Áo Sweater Nam ICONDENIM Infinity
                                  </a>
                                </h3>
                                <div class="box-pro-prices">
                                  <div class="pro-price-sale">
                                    <span>299,000₫</span>
                                    <del class="compare-price">390,000₫</del>

                                    <div class="label_product-discount label-sale">
                                      <div class="label_wrapper">23%</div>
                                    </div>
                                  </div>
                                  <ul class="hash-tag-loop d-flex"></ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <button
                        type="button"
                        class="slick-next slick-arrow custom-style"
                        aria-label="Next"
                        style={{ display: "block" }}
                        aria-disabled="false"
                      >
                        <span class="arrow-custom arrow-right">
                          <div class="arrow-top"></div>
                          <div class="arrow-bottom"></div>
                        </span>
                      </button>
                      <ul
                        class="slick-dots"
                        style={{ display: "block" }}
                        role="tablist"
                      >
                        <li class="slick-active" role="presentation">
                          <button
                            type="button"
                            role="tab"
                            id="slick-slide-control20"
                            aria-controls="slick-slide20"
                            aria-label="1 of 2"
                            tabIndex="0"
                            aria-selected="true"
                          >
                            1
                          </button>
                        </li>
                        <li role="presentation">
                          <button
                            type="button"
                            role="tab"
                            id="slick-slide-control21"
                            aria-controls="slick-slide25"
                            aria-label="2 of 2"
                            tabIndex="-1"
                          >
                            2
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal" id="modal-store">
            <h1>Có 13 cửa hàng còn size S</h1>
            <select name="change-tinh" class="change-tinh">
              <option defaultValue="all" selected="">
                Chọn tỉnh/thành phố
              </option>
              <option defaultValue="Hà Nội" data-tinh="Hà Nội">
                Hà Nội
              </option>
              <option defaultValue="Hồ Chí Minh" data-tinh="Hồ Chí Minh">
                Hồ Chí Minh
              </option>
              <option
                defaultValue="Bà Rịa - Vũng Tàu"
                data-tinh="Bà Rịa - Vũng Tàu"
              >
                Bà Rịa - Vũng Tàu
              </option>
              <option defaultValue="Cần Thơ" data-tinh="Cần Thơ">
                Cần Thơ
              </option>
              <option defaultValue="Đà Nẵng" data-tinh="Đà Nẵng">
                Đà Nẵng
              </option>
              <option defaultValue="Đắk Lắk" data-tinh="Đắk Lắk">
                Đắk Lắk
              </option>
              <option defaultValue="Long An" data-tinh="Long An">
                Long An
              </option>
              <option defaultValue="Tiền Giang" data-tinh="Tiền Giang">
                Tiền Giang
              </option>
            </select>
            <select name="select-quan" class="select-quan">
              <option defaultValue="all">Chọn Quận/huyện</option>
            </select>

            <div class="address-detail">
              <div id="address-link">
                <div class="col-xs-12 location-store margin-rl">
                  <p class="d-flex d-flex-center">
                    <img
                      src="https://file.hstatic.net/200000525917/file/shop_edb750edb7f147278a6e26dabd22a7ef.png"
                      width="20"
                      height="20"
                      alt="store"
                    />
                    <span>Có 13 cửa hàng còn sản phẩm này</span>
                    <button id="toggle-location" type="button">
                      +
                    </button>
                  </p>
                  <ul>
                    <div
                      class="store-container"
                      data-tinh="Hà Nội"
                      data-quan="Quận Đống Đa"
                    >
                      <li class="stock 421804">
                        <span class="dist">
                          <i class="fa fa-map-marker" aria-hidden="true"></i> Hà
                          Nội:
                        </span>
                        <span class="street">
                          176 Tôn Đức Thắng, Phường Hàng Bột, Quận Đống Đa
                        </span>
                        <div class="location-time-content">
                          <span class="timeStore">
                            <i class="fa fa-clock"></i>
                            <span>9:00 - 22:00</span>
                          </span>
                          <a
                            class="turn-right"
                            href="https://goo.gl/maps/gSLv5JztjApRXngi7"
                          >
                            <i class="fa fa-diamond-turn-right"></i>
                            <span>Xem bản đồ</span>
                          </a>
                        </div>
                      </li>
                    </div>
                    <div
                      class="store-container"
                      data-tinh="Hồ Chí Minh"
                      data-quan="Quận Phú Nhuận"
                    >
                      <li class="stock 421819">
                        <span class="dist">
                          <i class="fa fa-map-marker" aria-hidden="true"></i> Hồ
                          Chí Minh:
                        </span>
                        <span class="street">
                          401 Phan Xích Long, Phường 03, Quận Phú Nhuận
                        </span>
                        <div class="location-time-content">
                          <span class="timeStore">
                            <i class="fa fa-clock"></i>
                            <span>9:00 - 22:00</span>
                          </span>
                          <a
                            class="turn-right"
                            href="https://goo.gl/maps/UwnSSzSuUAtRSQex9"
                          >
                            <i class="fa fa-diamond-turn-right"></i>
                            <span>Xem bản đồ</span>
                          </a>
                        </div>
                      </li>
                    </div>
                    <div
                      class="store-container"
                      data-tinh="Bà Rịa - Vũng Tàu"
                      data-quan="Thành phố Vũng Tàu"
                    >
                      <li class="stock 518338">
                        <span class="dist">
                          <i class="fa fa-map-marker" aria-hidden="true"></i> Bà
                          Rịa - Vũng Tàu:
                        </span>
                        <span class="street">
                          206 Ba Cu, Phường 4, Thành phố Vũng Tàu
                        </span>
                        <div class="location-time-content">
                          <span class="timeStore">
                            <i class="fa fa-clock"></i>
                            <span>9:00 - 22:00</span>
                          </span>
                          <a
                            class="turn-right"
                            href="https://maps.app.goo.gl/h4a8xobWQnvCVFZr5"
                          >
                            <i class="fa fa-diamond-turn-right"></i>
                            <span>Xem bản đồ</span>
                          </a>
                        </div>
                      </li>
                    </div>
                    <div
                      class="store-container"
                      data-tinh="Cần Thơ"
                      data-quan="Quận Ninh Kiều"
                    >
                      <li class="stock 575278">
                        <span class="dist">
                          <i class="fa fa-map-marker" aria-hidden="true"></i>{" "}
                          Cần Thơ:
                        </span>
                        <span class="street">
                          35 Trần Phú, Phường Cái Khế, Quận Ninh Kiều
                        </span>
                        <div class="location-time-content">
                          <span class="timeStore">
                            <i class="fa fa-clock"></i>
                            <span>9:00 - 22:00</span>
                          </span>
                          <a
                            class="turn-right"
                            href="https://goo.gl/maps/6gtTYAK4ei3Zqr6o7"
                          >
                            <i class="fa fa-diamond-turn-right"></i>
                            <span>Xem bản đồ</span>
                          </a>
                        </div>
                      </li>
                    </div>
                    <div
                      class="store-container"
                      data-tinh="Đà Nẵng"
                      data-quan="Quận Hải Châu"
                    >
                      <li class="stock 608568">
                        <span class="dist">
                          <i class="fa fa-map-marker" aria-hidden="true"></i> Đà
                          Nẵng:
                        </span>
                        <span class="street">
                          144 Lý Tự Trọng, Phường Thuận Phước, Quận Hải Châu
                        </span>
                        <div class="location-time-content">
                          <span class="timeStore">
                            <i class="fa fa-clock"></i>
                            <span>9:00 - 22:00</span>
                          </span>
                          <a
                            class="turn-right"
                            href="https://goo.gl/maps/1bHGdbU1j5VhydEm9"
                          >
                            <i class="fa fa-diamond-turn-right"></i>
                            <span>Xem bản đồ</span>
                          </a>
                        </div>
                      </li>
                    </div>
                    <div
                      class="store-container"
                      data-tinh="Đắk Lắk"
                      data-quan="Thành phố Buôn Ma Thuột"
                    >
                      <li class="stock 617976">
                        <span class="dist">
                          <i class="fa fa-map-marker" aria-hidden="true"></i>{" "}
                          Đắk Lắk:
                        </span>
                        <span class="street">
                          14-16 Phan Chu Trinh, Phường Thắng Lợi, Thành phố Buôn
                          Ma Thuột
                        </span>
                        <div class="location-time-content">
                          <span class="timeStore">
                            <i class="fa fa-clock"></i>
                            <span>9:00 - 22:00</span>
                          </span>
                          <a
                            class="turn-right"
                            href="https://maps.app.goo.gl/MuKsj4oAtcCpbn8x5"
                          >
                            <i class="fa fa-diamond-turn-right"></i>
                            <span>Xem bản đồ</span>
                          </a>
                        </div>
                      </li>
                    </div>
                    <div
                      class="store-container"
                      data-tinh="Hồ Chí Minh"
                      data-quan="Quận Gò Vấp"
                    >
                      <li class="stock 651102">
                        <span class="dist">
                          <i class="fa fa-map-marker" aria-hidden="true"></i> Hồ
                          Chí Minh:
                        </span>
                        <span class="street">
                          94 Lê Văn Thọ, Phường 11, Quận Gò Vấp
                        </span>
                        <div class="location-time-content">
                          <span class="timeStore">
                            <i class="fa fa-clock"></i>
                            <span>9:00 - 22:00</span>
                          </span>
                          <a
                            class="turn-right"
                            href="https://goo.gl/maps/CgbaSPV8U9GG8AQ96"
                          >
                            <i class="fa fa-diamond-turn-right"></i>
                            <span>Xem bản đồ</span>
                          </a>
                        </div>
                      </li>
                    </div>
                    <div
                      class="store-container"
                      data-tinh="Hà Nội"
                      data-quan="Quận Hai Bà Trưng"
                    >
                      <li class="stock 906408">
                        <span class="dist">
                          <i class="fa fa-map-marker" aria-hidden="true"></i> Hà
                          Nội:
                        </span>
                        <span class="street">
                          26 Lê Đại Hành, Phường Lê Đại Hành, Quận Hai Bà Trưng
                        </span>
                        <div class="location-time-content">
                          <span class="timeStore">
                            <i class="fa fa-clock"></i>
                            <span>9:00 - 22:00</span>
                          </span>
                          <a
                            class="turn-right"
                            href="https://goo.gl/maps/TMp1qzA886FwhNAaA"
                          >
                            <i class="fa fa-diamond-turn-right"></i>
                            <span>Xem bản đồ</span>
                          </a>
                        </div>
                      </li>
                    </div>
                    <div
                      class="store-container"
                      data-tinh="Hồ Chí Minh"
                      data-quan="Quận 8"
                    >
                      <li class="stock 928196">
                        <span class="dist">
                          <i class="fa fa-map-marker" aria-hidden="true"></i> Hồ
                          Chí Minh:
                        </span>
                        <span class="street">
                          407a Liên tỉnh 5, P6, Phường 05, Quận 8
                        </span>
                        <div class="location-time-content">
                          <span class="timeStore">
                            <i class="fa fa-clock"></i>
                            <span>9:00 - 22:00</span>
                          </span>
                          <a
                            class="turn-right"
                            href="https://maps.app.goo.gl/mzZ5wJVqMoriDNZ97"
                          >
                            <i class="fa fa-diamond-turn-right"></i>
                            <span>Xem bản đồ</span>
                          </a>
                        </div>
                      </li>
                    </div>
                    <div
                      class="store-container"
                      data-tinh="Hồ Chí Minh"
                      data-quan="Quận Gò Vấp"
                    >
                      <li class="stock 1291567">
                        <span class="dist">
                          <i class="fa fa-map-marker" aria-hidden="true"></i> Hồ
                          Chí Minh:
                        </span>
                        <span class="street">
                          53 Quang Trung, Phường 10, Quận Gò Vấp
                        </span>
                        <div class="location-time-content">
                          <span class="timeStore">
                            <i class="fa fa-clock"></i>
                            <span>9:00 - 22:00</span>
                          </span>
                          <a
                            class="turn-right"
                            href="https://maps.app.goo.gl/hwpnWCxrZStRYTGg7"
                          >
                            <i class="fa fa-diamond-turn-right"></i>
                            <span>Xem bản đồ</span>
                          </a>
                        </div>
                      </li>
                    </div>
                    <div
                      class="store-container"
                      data-tinh="Hồ Chí Minh"
                      data-quan="Thành phố Thủ Đức"
                    >
                      <li class="stock 1470604">
                        <span class="dist">
                          <i class="fa fa-map-marker" aria-hidden="true"></i> Hồ
                          Chí Minh:
                        </span>
                        <span class="street">
                          54 Tô VĨnh Diện, Phường Linh Chiểu, Thành phố Thủ Đức
                        </span>
                        <div class="location-time-content">
                          <span class="timeStore">
                            <i class="fa fa-clock"></i>
                            <span>9:00 - 22:00</span>
                          </span>
                          <a
                            class="turn-right"
                            href="https://goo.gl/maps/QknsHNDFZVvoUTzE7"
                          >
                            <i class="fa fa-diamond-turn-right"></i>
                            <span>Xem bản đồ</span>
                          </a>
                        </div>
                      </li>
                    </div>
                    <div
                      class="store-container"
                      data-tinh="Long An"
                      data-quan="Thành phố Tân An"
                    >
                      <li class="stock 1588826">
                        <span class="dist">
                          <i class="fa fa-map-marker" aria-hidden="true"></i>{" "}
                          Long An:
                        </span>
                        <span class="street">
                          288 - 290 Hùng Vương, Phường 3, Thành phố Tân An
                        </span>
                        <div class="location-time-content">
                          <span class="timeStore">
                            <i class="fa fa-clock"></i>
                            <span>9:00 - 22:00</span>
                          </span>
                          <a
                            class="turn-right"
                            href="https://maps.app.goo.gl/Vz9sTVRoeyQzGjYPA"
                          >
                            <i class="fa fa-diamond-turn-right"></i>
                            <span>Xem bản đồ</span>
                          </a>
                        </div>
                      </li>
                    </div>
                    <div
                      class="store-container"
                      data-tinh="Tiền Giang"
                      data-quan="Thành phố Mỹ Tho"
                    >
                      <li class="stock 1623738">
                        <span class="dist">
                          <i class="fa fa-map-marker" aria-hidden="true"></i>{" "}
                          Tiền Giang:
                        </span>
                        <span class="street">
                          347 Đường Ấp Bắc, Phường 5, Thành phố Mỹ Tho
                        </span>
                        <div class="location-time-content">
                          <span class="timeStore">
                            <i class="fa fa-clock"></i>
                            <span>9:00 - 22:00</span>
                          </span>
                          <a
                            class="turn-right"
                            href="https://maps.app.goo.gl/sPC4SLHqJaoSZWdCA"
                          >
                            <i class="fa fa-diamond-turn-right"></i>
                            <span>Xem bản đồ</span>
                          </a>
                        </div>
                      </li>
                    </div>
                  </ul>
                </div>
              </div>
              <p class="no-store hidden"></p>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default DetailProduct;
