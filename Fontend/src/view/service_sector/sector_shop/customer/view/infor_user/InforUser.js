import React, { Component } from "react";
import Information from "./Information";
class InforUser extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div class="layout-info-account">
          <div class="container">
            <div class="title-login-account text-center">
              <img
                width="30"
                height="30"
                src="https://file.hstatic.net/1000253775/file/download-icon-people_person_profile_user_icon-1320186207447274965_64_b60e4f7fb4054e4d9e38917a17deddf7.png"
                alt="Tài khoản"
              />
              <h1>Tài khoản của bạn</h1>
            </div>
            <div class="row d-flex">
              <div class="col-xs-12 col-sm-3 col-md-3 sidebar-account accounts-left">
                <div class="AccountSidebar hidden-xs">
                  <div class="title_account">
                    <div class="content_account">
                      <h2 class="name_account">Hi,</h2>
                      <p></p>
                    </div>
                  </div>
                  <div class="AccountContent">
                    <div class="AccountList">
                      <ul class="list-unstyled">
                        <li class="current">
                          <a href="/account">
                            <span>
                              <i class="fas fa-user"></i>
                            </span>
                            <span> Hồ sơ của tôi </span>
                          </a>
                        </li>
                        <li>
                          <a href="/account/?view=order.smb">
                            <span>
                              <i class="fas fa-file-invoice"></i>
                            </span>
                            <span> Đơn hàng của tôi </span>
                          </a>
                        </li>
                        <li>
                          <a href="/account/?view=re-form.smb">
                            <span>
                              {" "}
                              <i class="fas fa-bars"></i>
                            </span>
                            <span> Yêu cầu hỗ trợ</span>
                          </a>
                        </li>
                        <li>
                          <a href="/account/addresses">
                            <span>
                              {" "}
                              <i class="fas fa-map-marker-alt"></i>
                            </span>
                            <span> Sổ địa chỉ</span>
                          </a>
                        </li>

                        <li id="voucher-content-acccount">
                          <a
                            class="btn-voucher"
                            href="/account/?view=voucher.smb"
                          >
                            <span>
                              {" "}
                              <i class="fas fa-tags"></i>
                            </span>
                            <span> Vouchers</span>
                          </a>
                          <img
                            class=""
                            src="https://file.hstatic.net/1000253775/file/vouvher__tag-02_2b4bab40f8cf476daf4d0ddc6ea1d8c6_medium.png"
                            alt="Tag Sale Img"
                          />
                        </li>

                        <li>
                          <a href="/account/?view=viewed.smb">
                            <span>
                              <i class="fas fa-heart"></i>
                            </span>
                            <span>Sản phẩm đã xem</span>
                          </a>
                        </li>

                        <li>
                          <a href="/account/?view=reset_password.smb">
                            <span>
                              <i class="fas fa-lock"></i>
                            </span>
                            <span>Đổi mật khẩu</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="AccountSidebar visible-xs">
                  <div class="title_account">
                    <div class="title-account">Chào,</div>
                  </div>
                  <p class="hrv-loyalty-next-level">
                    Chi tiêu thêm
                    <span class="money" style={{ fontWeight: "600" }}></span> để
                    thăng hạng
                    <span
                      class="next_membership"
                      style={{ fontWeight: "600" }}
                    ></span>
                  </p>
                  <div class="content-menu clearfix">
                    <a
                      class="vocher btn-voucher"
                      href="/account/?view=voucher.smb"
                    >
                      <span class="icon">
                        <i class="fas fa-tags" aria-hidden="true"></i>
                      </span>
                      <img
                        class=""
                        src="https://file.hstatic.net/1000253775/file/vouvher__tag-02_2b4bab40f8cf476daf4d0ddc6ea1d8c6_medium.png"
                        alt="Tag Sale Img"
                      />
                      <span class="title-size">VOUCHER</span>
                    </a>

                    <div class="user-account">
                      <a href="/account?view=account_update.smb">
                        <span class="icon">
                          <i class="fa fa-user" aria-hidden="true"></i>
                        </span>
                        <span class="title-size">Thông tin</span>
                      </a>
                    </div>
                    <div class="user-pass">
                      <a href="/account/addresses">
                        <span class="icon">
                          {" "}
                          <i class="fas fa-map-marker-alt"></i>
                        </span>
                        <span class="title-size"> Sổ địa chỉ</span>
                      </a>
                    </div>
                  </div>
                  <div class="accounts">
                    <div class="content-info">
                      <h2>Đơn hàng của tôi</h2>
                    </div>
                    <div class="content-list">
                      <div class="content-order">
                        <a href="/account/?view=re-form.smb">
                          <div class="icon">
                            <img src="//theme.hstatic.net/1000253775/1001315144/14/icon_support.png?v=2004" />
                          </div>
                          <span>Yêu cầu hỗ trợ</span>
                        </a>
                      </div>
                      <div class="content-order">
                        <a href="/account/?view=order.smb">
                          <div class="icon">
                            <img src="//theme.hstatic.net/1000253775/1001315144/14/icon_order.png?v=2004" />
                          </div>
                          <span>Tất cả đơn hàng</span>
                        </a>
                      </div>
                      <div class="content-order">
                        <a href="/account/?view=order.smb">
                          <div class="icon">
                            <img src="//theme.hstatic.net/1000253775/1001315144/14/icon_order.png?v=2004" />
                          </div>
                          <span>Chưa thanh toán</span>
                        </a>
                      </div>
                      <div class="content-order">
                        <a href="/account/?view=order.smb">
                          <div class="icon">
                            <img src="//theme.hstatic.net/1000253775/1001315144/14/icon_order.png?v=2004" />
                          </div>
                          <span>Xử lý</span>
                        </a>
                      </div>
                      <div class="content-order">
                        <a href="/account/?view=order.smb">
                          <div class="icon">
                            <img src="//theme.hstatic.net/1000253775/1001315144/14/icon_order.png?v=2004" />
                          </div>
                          <span>Đã vận chuyển</span>
                        </a>
                      </div>
                      <div class="content-order">
                        <a href="/account/?view=order.smb">
                          <div class="icon">
                            <img src="//theme.hstatic.net/1000253775/1001315144/14/icon_order.png?v=2004" />
                          </div>
                          <span>Trả lại</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Information {...this.props} />
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default InforUser;
