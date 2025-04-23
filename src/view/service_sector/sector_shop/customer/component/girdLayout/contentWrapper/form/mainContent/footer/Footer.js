/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <section>
      <footer class="mg-0 pd-bt-50-mb ">
        <div class="top-ft-wanda">
          <div class="container">
            <div class="d-flex row">
              <div class="col-md-3 col-sm-6 col-xs-12 infomation mg-bottom-15">
                <div class="title-footer">
                  <div class="h4">Giới thiệu</div>
                </div>
                <div class="infomation-wanda info_one">
                  <p>Chuỗi Phân Phối Thời Trang Chuẩn Hiệu</p>
                  <ul>
                    <li>
                      <i class="fa fa-mobile-phone" aria-hidden="true"></i>
                      <a rel="nofollow" href="tel:02871006789">
                        02871006789
                      </a>
                    </li>
                    <li>
                      <i class="fa fa-clock-o" aria-hidden="true"></i>
                      <a rel="nofollow">Giờ mở cửa : 08:30 - 22:00</a>
                    </li>
                    <li>
                      <i class="fa fa-headphones" aria-hidden="true"></i>
                      <a rel="nofollow">
                        Nhân viên tư vấn phản hồi tin nhắn đến 24:00 (Mỗi ngày)
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-md-3 col-sm-6 col-xs-12 tablink mg-bottom-15">
                <div class="title-footer">
                  <div class="h4">CHÍNH SÁCH</div>
                </div>
                <div class="footer-link-wanda infomation-wanda footer-click">
                  <ul>
                    <li>
                      <a href="/pages/huong-dan-dat-hang">Hướng dẫn đặt hàng</a>
                    </li>
                    <li>
                      <div class="footer-flex clicked">
                        <div class="location_flex">
                          <p>Chính sách</p>
                        </div>

                        <i class="fa fa-chevron-down" aria-hidden="true"></i>
                      </div>
                      <div class="footer-link-wanda submenu">
                        <ul>
                          <li>
                            <a href="/pages/chinh-sach-sinh-nhat">
                              Chính Sách Ưu Đãi Sinh Nhật
                            </a>
                          </li>
                          <li>
                            <a href="/pages/ctmembership">
                              Chính Sách Khách Hàng Thân Thiết
                            </a>
                          </li>
                          <li>
                            <a href="/pages/chinh-sach-giao-hang">
                              Chính Sách Giao Hàng
                            </a>
                          </li>
                          <li>
                            <a href="/pages/chinh-sach-bao-mat">
                              Chính Sách Bảo Mật
                            </a>
                          </li>
                          <li>
                            <a href="/pages/chinh-sach-doi-tra">
                              Chính Sách Đổi Hàng Và Bảo Hành
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-3 col-sm-6 col-xs-12 tablink mg-bottom-15">
                <div class="title-footer title-store">
                  <div class="h4">
                    <a href="/pages/lien-he">
                      ĐỊA CHỈ CỬA HÀNG (21 CH)
                    </a>
                  </div>
                </div>
                <div class="footer_store">
                  <div class="footer-link-wanda submenu">
                    <div class="location-container">
                      <div class="location_flex">
                        <img
                          class=" ls-is-cached lazyloaded"
                          loading="lazy"
                          height="25px"
                          width="25px"
                          src="https://file.hstatic.net/1000253775/file/location_a1e4d2d625914daa90748f218350e7b7.svg"
                        />
                        <p class="title-ch">HÀ NỘI (2 CH)</p>
                      </div>
                      <p>
                        Số 26 phố Lê Đại Hành, Phường Lê Đại Hành, Quận Hai Bà
                        Trưng, TP Hà Nội
                      </p>
                    </div>
                    <div class="btn-view-store">
                      <a href="/pages/lien-he">
                        XEM TẤT CẢ CỬA HÀNG
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-3 col-sm-6 col-xs-12">
                <div class="title-footer">
                  <div class="payment-methold">
                    <div class="h4">PHƯƠNG THỨC THANH TOÁN</div>
                    <div class="footer-payment">
                      <img
                        class=" ls-is-cached lazyloaded"
                        loading="lazy"
                        src="https://file.hstatic.net/1000253775/file/shoppy_new_18600e8ad9f64537b7e31d009457e215.jpg"
                        width="50px"
                        height="30px"
                        alt="Image Spay"
                      />
                      <img
                        class=" ls-is-cached lazyloaded"
                        loading="lazy"
                        src="https://file.hstatic.net/1000253775/file/vnpay_new_ec21c03b2f4c49689d180c8a485c8d5b.jpg"
                        width="50px"
                        height="30px"
                        alt="Image VNPay"
                      />
                      <img
                        class=" ls-is-cached lazyloaded"
                        loading="lazy"
                        src="https://file.hstatic.net/1000253775/file/cod_new_2316cf8e29bd4a858810a3d7b9eb39e4.jpg"
                        width="50px"
                        height="30px"
                        alt="Image Cod"
                      />
                    </div>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="copyright-wanda">
              <div class="container">
                <div class="row ">
                  <div class="col-md-12 text-center">
                    <div class="text-copyright mb-0">
                      <span>BẢN QUYỀN THUỘC VỀ Team</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      </section>
    );
  }
}
