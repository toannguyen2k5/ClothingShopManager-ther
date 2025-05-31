/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <section>
      <footer className="mg-0 pd-bt-50-mb ">
        <div className="top-ft-wanda">
          <div className="container">
            <div className="d-flex row">
              <div className="col-md-3 col-sm-6 col-xs-12 infomation mg-bottom-15">
                <div className="title-footer">
                  <div className="h4">Giới thiệu</div>
                </div>
                <div className="infomation-wanda info_one">
                  <p>Chuỗi Phân Phối Thời Trang Chuẩn Hiệu</p>
                  <ul>
                    <li>
                      <i className="fa fa-mobile-phone" aria-hidden="true"></i>
                      <a rel="nofollow" href="tel:02871006789">
                        02871006789
                      </a>
                    </li>
                    <li>
                      <i className="fa fa-clock-o" aria-hidden="true"></i>
                      <a rel="nofollow">Giờ mở cửa : 08:30 - 22:00</a>
                    </li>
                    <li>
                      <i className="fa fa-headphones" aria-hidden="true"></i>
                      <a rel="nofollow">
                        Nhân viên tư vấn phản hồi tin nhắn đến 24:00 (Mỗi ngày)
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-3 col-sm-6 col-xs-12 tablink mg-bottom-15">
                <div className="title-footer">
                  <div className="h4">CHÍNH SÁCH</div>
                </div>
                <div className="footer-link-wanda infomation-wanda footer-click">
                  <ul>
                    <li>
                      <a href="/pages/huong-dan-dat-hang">Hướng dẫn đặt hàng</a>
                    </li>
                    <li>
                      <div className="footer-flex clicked">
                        <div className="location_flex">
                          <p>Chính sách</p>
                        </div>

                        <i className="fa fa-chevron-down" aria-hidden="true"></i>
                      </div>
                      <div className="footer-link-wanda submenu">
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
              <div className="col-md-3 col-sm-6 col-xs-12 tablink mg-bottom-15">
                <div className="title-footer title-store">
                  <div className="h4">
                    <a href="/pages/lien-he">
                      ĐỊA CHỈ CỬA HÀNG (21 CH)
                    </a>
                  </div>
                </div>
                <div className="footer_store">
                  <div className="footer-link-wanda submenu">
                    <div className="location-container">
                      <div className="location_flex">
                        <img
                          className=" ls-is-cached lazyloaded"
                          loading="lazy"
                          height="25px"
                          width="25px"
                          src="https://file.hstatic.net/1000253775/file/location_a1e4d2d625914daa90748f218350e7b7.svg"
                        />
                        <p className="title-ch">HÀ NỘI (2 CH)</p>
                      </div>
                      <p>
                        Số 26 phố Lê Đại Hành, Phường Lê Đại Hành, Quận Hai Bà
                        Trưng, TP Hà Nội
                      </p>
                    </div>
                    <div className="btn-view-store">
                      <a href="/pages/lien-he">
                        XEM TẤT CẢ CỬA HÀNG
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="title-footer">
                  <div className="payment-methold">
                    <div className="h4">PHƯƠNG THỨC THANH TOÁN</div>
                    <div className="footer-payment">
                      <img
                        className=" ls-is-cached lazyloaded"
                        loading="lazy"
                        src="https://file.hstatic.net/1000253775/file/shoppy_new_18600e8ad9f64537b7e31d009457e215.jpg"
                        width="50px"
                        height="30px"
                        alt="Image Spay"
                      />
                      <img
                        className=" ls-is-cached lazyloaded"
                        loading="lazy"
                        src="https://file.hstatic.net/1000253775/file/vnpay_new_ec21c03b2f4c49689d180c8a485c8d5b.jpg"
                        width="50px"
                        height="30px"
                        alt="Image VNPay"
                      />
                      <img
                        className=" ls-is-cached lazyloaded"
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
            <div className="copyright-wanda">
              <div className="container">
                <div className="row ">
                  <div className="col-md-12 text-center">
                    <div className="text-copyright mb-0">
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
