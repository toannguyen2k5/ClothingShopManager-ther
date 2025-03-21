import React, { Component } from "react";
import { urlapi } from "../../../../../../setting/store/const";
import SliderImage from "../../../../../../scss/SliderImage";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id_category: new URLSearchParams(this.props.location.search).get("code"),
      runGetListProduct: true,
      list_product: [],
      sort_product: "default",
      data_list: {},
    };
    document.title = "Demo";
    fetch(urlapi + "/get_list_post/")
      .then((response) => response.json())
      .then((data) => this.setState({ data_list: data }))
      .catch((error) => console.error(error));
  }

  render() {
    console.log(this.state.data_list);
    return (
      <>
        <main>
          <section id="home-slider-home" class="mg-top-15 mg-0-mb">
            <div class="container pd-0-mb">
              <SliderImage />
            </div>
          </section>
          <div class="breadcrumb-shop">
            <div class="container">
              <ol
                class="breadcrumb breadcrumb-arrows"
                itemscope=""
                itemtype="http://schema.org/BreadcrumbList"
              >
                <li
                  itemprop="itemListElement"
                  itemscope=""
                  itemtype="http://schema.org/ListItem"
                >
                  <a href="/" target="_self" itemprop="item">
                    <span itemprop="name">Trang chủ</span>
                  </a>
                  <meta itemprop="position" content="1" />
                </li>

                <li
                  class="active"
                  itemprop="itemListElement"
                  itemscope=""
                  itemtype="http://schema.org/ListItem"
                >
                  <span
                    itemprop="item"
                    content="https://160store.com/collections/ao-thun"
                  >
                    <span itemprop="name">ÁO THUN</span>
                  </span>
                  <meta itemprop="position" content="2" />
                </li>
              </ol>
            </div>
          </div>
          <section id="collection-template" class="collection-page">
            <div class="collection-body">
              <div class="container">
                <div class="banner-collection-header">
                  <picture>
                    <source
                      media="(max-width: 480px)"
                      data-srcset="//file.hstatic.net/1000253775/collection/ao_thun_d07df4dffb1a464da1a592ad0c991379_grande.jpg"
                      srcset="//file.hstatic.net/1000253775/collection/ao_thun_d07df4dffb1a464da1a592ad0c991379_grande.jpg"
                    />
                    <img
                      class="dt-width-100 ls-is-cached lazyloaded"
                      width="1920"
                      height="200"
                      src="//file.hstatic.net/1000253775/collection/ao_thun_d07df4dffb1a464da1a592ad0c991379_master.jpg"
                      alt="ÁO THUN"
                    />
                  </picture>
                </div>
                <div class="row d-flex">
                  <div class="col-md-12 col-sm-12 col-xs-12 main-colection">
                    <div class="collection-top-bar">
                      <div class="product-short ">
                        <div class="wrap-box-sort ">
                          <label for="SortBy">Sắp xếp:</label>
                          <select class="sort-by custom-dropdown__select">
                            <option
                              value="manual"
                              data-filter="&amp;sortby=manual"
                            >
                              Sản phẩm nổi bật
                            </option>
                            <option
                              value="price-ascending"
                              data-filter="&amp;sortby=(price:product=asc)"
                            >
                              Giá: Tăng dần
                            </option>
                            <option
                              value="price-descending"
                              data-filter="&amp;sortby=(price:product=desc)"
                            >
                              Giá: Giảm dần
                            </option>
                            <option
                              value="title-ascending"
                              data-filter="&amp;sortby=(title:product=asc)"
                            >
                              Tên: A-Z
                            </option>
                            <option
                              value="title-descending"
                              data-filter="&amp;sortby=(title:product=desc)"
                            >
                              Tên: Z-A
                            </option>
                            <option
                              value="created-ascending"
                              data-filter="&amp;sortby=(updated_at:product=desc)"
                            >
                              Cũ nhất
                            </option>
                            <option
                              value="created-descending"
                              data-filter="&amp;sortby=(updated_at:product=asc)"
                            >
                              Mới nhất
                            </option>
                            <option
                              value="best-selling"
                              data-filter="&amp;sortby=(sold_quantity:product=desc)"
                            >
                              Bán chạy nhất
                            </option>
                            <option
                              value="quantity-descending"
                              data-filter="&amp;sortby=(quantity:product=desc)"
                            >
                              Tồn kho: Giảm dần
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div class="result-filter-tag hidden">
                      <ul class="result-filter-full">
                        <li class="clear-all">
                          {" "}
                          Xóa hết <i class="fa fa-times" aria-hidden="true"></i>
                        </li>
                      </ul>
                    </div>
                    <div
                      class="content-product-list product-list filter d-flex row-left-list "
                      data-count="95"
                    >
                      <div class="col-lg-3 col-md-3 col-sm-4 col-xs-6 mg-bottom-15 pd-right-0 d-flex-column">
                        <div class="product-block item">
                          <div
                            class="product-img  has-hover"
                            data-frame="KIỂM KÊ Áo thun hangmoi FD-THUONG sale10 SPM (-50) onpos onweb SPEE2025-02-17"
                          >
                            <a
                              href="/products/a-o-thun-icondenim-orgnls-icdn"
                              title="Áo Thun ICONDENIM Orgnls ICDN"
                              class="image-resize "
                            >
                              <picture>
                                <source
                                  media="(max-width: 480px)"
                                  data-srcset="//product.hstatic.net/1000253775/product/160_ao_thun_544-6_7a37a6976a3049538b7924af184e050c_large.jpg"
                                  srcset="//product.hstatic.net/1000253775/product/160_ao_thun_544-6_7a37a6976a3049538b7924af184e050c_large.jpg"
                                />
                                <source
                                  media="(min-width: 481px)"
                                  data-srcset="//product.hstatic.net/1000253775/product/160_ao_thun_544-6_7a37a6976a3049538b7924af184e050c_large.jpg"
                                  srcset="//product.hstatic.net/1000253775/product/160_ao_thun_544-6_7a37a6976a3049538b7924af184e050c_large.jpg"
                                />
                                <img
                                  class="dt-width-100 img-first ls-is-cached lazyloaded"
                                  loading="lazy"
                                  width="260"
                                  height="260"
                                  src="//product.hstatic.net/1000253775/product/160_ao_thun_544-6_7a37a6976a3049538b7924af184e050c_large.jpg"
                                  alt="Áo Thun ICONDENIM Orgnls ICDN"
                                  title="Áo Thun ICONDENIM Orgnls ICDN"
                                />
                              </picture>
                              <picture>
                                <source
                                  media="(min-width: 481px)"
                                  data-srcset="//product.hstatic.net/1000253775/product/160_ao_thun_544-7_8c1746c0d1cb4a7fa54113577ff14621_large.jpg"
                                  srcset="//product.hstatic.net/1000253775/product/160_ao_thun_544-7_8c1746c0d1cb4a7fa54113577ff14621_large.jpg"
                                />
                                <img
                                  class="dt-width-100 img-hover hidden-xs ls-is-cached lazyloaded"
                                  loading="lazy"
                                  width="260"
                                  height="260"
                                  src="//product.hstatic.net/1000253775/product/160_ao_thun_544-7_8c1746c0d1cb4a7fa54113577ff14621_large.jpg"
                                  alt="Áo Thun ICONDENIM Orgnls ICDN"
                                  title="Áo Thun ICONDENIM Orgnls ICDN"
                                />
                              </picture>
                            </a>

                            <div class="button-loop-pro hidden-xs hidden-sm">
                              <button
                                class="btn-quickview"
                                onclick="window.wd.scofield.quickview('/products/a-o-thun-icondenim-orgnls-icdn?view=quickview-nochoose')"
                                type="button"
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
                                onclick="window.wd.scofield.addtocartloop('true','1141993122','/products/a-o-thun-icondenim-orgnls-icdn',event,'1062289023')"
                                class="atc-mb-loop"
                                type="button"
                              >
                                <span class="atc-text">Thêm vào giỏ</span>
                                <span class="bd-cart">
                                  <img
                                    class="atc-default"
                                    width="20"
                                    height="20"
                                    src="//theme.hstatic.net/1000253775/1001315144/14/add-to-cart.svg?v=634"
                                    alt="Thêm vào giỏ"
                                  />
                                  <img
                                    class="atc-hv"
                                    width="20"
                                    height="20"
                                    src="//theme.hstatic.net/1000253775/1001315144/14/add-to-cart-hv.svg?v=634"
                                    alt="Thêm vào giỏ"
                                  />
                                </span>
                              </button>
                            </div>
                          </div>

                          <div class="label_product_new ">
                            <div class="label_wrapper">Hàng Mới</div>
                          </div>

                          <div class="product-detail">
                            <h3 class="pro-name">
                              <a
                                href="/products/a-o-thun-icondenim-orgnls-icdn"
                                title="Áo Thun ICONDENIM Orgnls ICDN"
                              >
                                {" "}
                                Áo Thun ICONDENIM Orgnls ICDN{" "}
                              </a>
                            </h3>
                            <div class="box-pro-prices">
                              <div class="pro-price">
                                <span>349,000₫ </span>
                              </div>
                              <ul class="hash-tag-loop d-flex"></ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="collection-view-content">
                      <button
                        class="btn-collectionview"
                        //style="display: block;"
                      >
                        Xem thêm
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </>
    );
  }
}

export default Home;
