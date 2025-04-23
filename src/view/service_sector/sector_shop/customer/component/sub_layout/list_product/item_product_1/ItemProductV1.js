import React from "react";

const ItemProductV1 = () => {
  return (
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
  );
};

export default ItemProductV1;
