import React, { Component } from "react";
import { urlapi } from "../../../../../../setting/store/const";
import ViewInfoBuyProduct from "./ViewInfoBuyProduct";
import "./style-smb.css";
import "./plugin-style.css";
import "./render-style-other.scss.css";
import "./render-style.css";
import "./style-page.scss.css";
import "./style-product.scss.css";
import "./styles-new.scss.css";
import "./vong-quay.css";
import "./new-style.css";
import MainPhoto from "./MainPhoto";
class DetailProduct extends Component {
  constructor(props) {
    super(props);
    console.log("props : ", this.props);
    this.state = {
      product: null,
    };
  }
  componentDidMount() {
    console.log("Get Data");
    fetch(
      urlapi +
        "/api/detailproduct/sellect/detailProperty?idProduct=" +
        this.props.match.params.idProduct
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
                                alt={
                                  this.state.product?.nameProduct ||
                                  "name product"
                                }
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
                    <div class="pro-content-head clearfix">
                      <div class="head-product-title">
                        <h1 data-available="Còn hàng" class="green">
                          {this.state.product?.nameProduct || "name product"}
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
                              {this.state.product?.nameStyle +
                                " - " +
                                this.state.product?.nameCategory ||
                                "name style - name category"}
                            </a>
                          </div>
                          <span class="line-info">|</span>
                          <div class="pro-sku ProductSku">
                            <span>MSP:</span>
                            <span class="sku-number title">
                              {this.state.product?.idProduct || "idProduct"}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div id="pro-price">
                        <span class="price-now">
                          {this.state.product.price *
                            ((this.state.product.discountEvent &&
                              1 - this.state.product.discountEvent.decrease) ||
                              1)}
                          ₫
                        </span>
                        <span class="price-compare">
                          <del>
                            {this.state.product.discountEvent &&
                              this.state.product.price}
                            ₫
                          </del>
                        </span>
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
                        KHUYẾN MÃI SẢN PHẨM
                      </h3>
                      <div class="product_coupon_new">
                        <ul class="product-promotion__box">
                          <li>
                            <span class="big-bold">
                              <strong>CHI TIẾT KHUYẾN MÃI</strong>
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
                              Mã Sự Kiện :{" "}
                              {this.state.product.discountEvent.eventCode}
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
                              Ngày , giờ Kết thúc sự kiện :{" "}
                              {this.state.product.discountEvent.eventDeadline}
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
                              Số Lượng Tối Đa Mỗi Đơn :{" "}
                              {this.state.product.discountEvent.quantityLimit}
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
                              Mô Tả :{" "}
                              {this.state.product.discountEvent.description}
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <ViewInfoBuyProduct idProduct = {this.state.product.idProduct} sizes = {this.state.product?.sizes || null} colors = {this.state.product?.colors || null} {...this.props}/>
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
                        Hotline 0934.234.6789 hỗ trợ từ 8h30-24h
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
                              {this.state.product?.nameProduct || ""}
                            </strong>
                          </span>
                        </p>
                        <ul>
                          <li>
                            <strong>Chất liệu</strong>:{" "}
                            {this.state.product?.nameMaterial ||
                              "name material"}
                          </li>
                          <li>
                            <strong>Tên thương hiệu </strong>:{" "}
                            {this.state.product?.nameBrand || "name brand"}
                          </li>
                          <li>
                            <strong>Mô tả  </strong>:{" "}
                            {this.state.product?.description || ""}
                          </li>
                        </ul>
                        <p style={{ textIndent: "2em", fontSize: "16px" }}>
                          
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
