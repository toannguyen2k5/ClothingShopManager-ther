import React, { Component } from "react";
class Information extends Component {
  constructor(props) {
    super(props);
    this.state = {
      full_name: null,
      birth_day: null,
      phone_number: null,
      gender: null,
    };
  }

  componentDidMount() {}
  render() {
    return (
      <>
        <div class="col-xs-12 col-sm-9 col-md-9 accounts-right">
          <div class="row">
            <div class="col-xs-12" id="customer_sidebar">
              <div class="accounts style-bg">
                <div class="accounts_title">
                  <h2>Hồ sơ của tôi</h2>
                </div>
                <div class="accounts_main">
                  <div class="account">
                    <form
                      accept-charset="UTF-8"
                      action="/account"
                      id="update_customer"
                      method="post"
                    >
                      <input
                        name="form_type"
                        type="hidden"
                        value="update_customer"
                      />
                      <input name="utf8" type="hidden" value="✓" />
                      <input
                        name="__RequestVerificationToken"
                        type="hidden"
                        value="CfDJ8FyFPV59mBtNhmQGz0fYZt8BGe8et1kRy5js5fnlxhPRk1y5Lk6qX7N43FEcAbfFHPn0o-pq_79XURlI_duZquD63v-LWj5grtFqbbdEUeOJ4p4wz9zMntXLaFNo3odeuPPi_1xp3zpkru_g7ncze27yZ5Gp5P6CMIfvbSmue7-7MdttLxLlFwZzv9MZ-7SYSw"
                      />

                      <div class="account_col">
                        <div class="account_main">
                          <label>Họ và tên </label>
                          <input
                            required=""
                            type="text"
                            value=""
                            name="customer[last_name]"
                            placeholder="Họ và tên đệm"
                            id="last_name"
                            class="text"
                            size="30"
                          />
                        </div>
                      </div>
                      <div class="account_col">
                        <div class="account_main">
                          <label>Sinh nhật</label>
                          <input
                            required=""
                            type="date"
                            id="datepicker"
                            name="datepicker"
                            value=""
                            placeholder="Ngày sinh"
                            class="text"
                            size="30"
                          />
                        </div>
                      </div>

                      <div class="account_col">
                        <div class="account_main">
                          <label>Số điện thoại</label>
                          <input
                            type="text"
                            value="0347235815"
                            name="customer[phone]"
                            class="text phone"
                            size="30"
                          />
                        </div>
                      </div>

                      <div class="account_col account_col_seeq">
                        <div class="account_main">
                          <label>Giới tính</label>
                          <div class="genders">
                            <div class="gender">
                              <input
                                id="gender_m"
                                type="radio"
                                name="customer[gender]"
                                value="0"
                              />
                              <label for="gender_m">
                                <span class="sp_input"></span>
                                <span class="sp_lable">Nam</span>
                              </label>
                            </div>

                            <div class="gender">
                              <input
                                id="gender_f"
                                type="radio"
                                name="customer[gender]"
                                value="1"
                              />
                              <label for="gender_f">
                                <span class="sp_input"></span>
                                <span class="sp_lable">Nữ</span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="account_col">
                        <div class="account_main col_main_submit">
                          <button id="submit_info" class="updateAccount">
                            <span>Cập nhật</span>
                          </button>
                        </div>
                      </div>
                    </form>
                    <div class="clearfix"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Information;
