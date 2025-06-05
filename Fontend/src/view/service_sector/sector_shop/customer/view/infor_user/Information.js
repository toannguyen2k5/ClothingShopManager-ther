import React, { Component } from "react";
import { urlapi } from "../../../../../../setting/store/const";
class Information extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
    };
  }
  componentDidMount() {
    fetch(
      urlapi +
        `/api/Users/` +
        this.props.state_data.user_info.id_user +
        `/getInfo`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.status && data.status === "200") {
          this.setState({
            user: data.data,
          });
        }
        console.log(data);
      })
      .catch((error) => console.error(error));
  }
  render() {
    console.log("data props : ", this.props);
    const { user } = this.state;
    return (
      <>
        <div className="col-xs-12 col-sm-9 col-md-9 accounts-right">
          <div className="row">
            <div className="col-xs-12" id="customer_sidebar">
              <div className="accounts style-bg">
                <div className="accounts_title">
                  <h2>Hồ sơ của tôi</h2>
                </div>
                <div className="accounts_main">
                  <div className="account">
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

                      <div className="account_col">
                        <div className="account_main">
                          <label>Họ và tên </label>
                          <input
                            required=""
                            type="text"
                            name="customer[last_name]"
                            placeholder="Họ và tên"
                            value={
                              this.props.state_data.user_info.full_name || ""
                            }
                            id="last_name"
                            className="text"
                            size="30"
                            style={{ width: "850px" }}
                          />
                        </div>
                      </div>
                      <div className="account_col">
                        <div className="account_main">
                          <label>Sinh nhật</label>
                          <input
                            required=""
                            type="date"
                            id="datepicker"
                            name="datepicker"
                            placeholder="Ngày sinh"
                            className="text"
                            size="30"
                          />
                        </div>
                      </div>

                      <div className="account_col">
                        <div className="account_main">
                          <label>Số điện thoại</label>
                          <input
                            type="text"
                            name="customer[phone]"
                            className="text phone"
                            size="30"
                          />
                        </div>
                      </div>
                      <div className="account_col">
                        <div className="account_main">
                          <label>địa chỉ</label>
                          <input
                            type="text"
                            name="customer[phone]"
                            className="text phone"
                            readOnly=""
                            size="30"
                          />
                        </div>
                      </div>
                      <div className="account_col account_col_seeq">
                        <div className="account_main">
                          <label>Giới tính</label>
                          <div className="genders">
                            <div className="gender">
                              <input
                                id="gender_m"
                                type="radio"
                                name="customer[gender]"
                                value="0"
                              />
                              <label for="gender_m">
                                <span className="sp_input"></span>
                                <span className="sp_lable">Nam</span>
                              </label>
                            </div>

                            <div className="gender">
                              <input
                                id="gender_f"
                                type="radio"
                                name="customer[gender]"
                                value="1"
                              />
                              <label for="gender_f">
                                <span className="sp_input"></span>
                                <span className="sp_lable">Nữ</span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="account_col">
                        <div className="account_main col_main_submit">
                          <button id="submit_info" className="updateAccount">
                            <span>Cập nhật</span>
                          </button>
                        </div>
                      </div>
                    </form>
                    <div className="clearfix"></div>
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
