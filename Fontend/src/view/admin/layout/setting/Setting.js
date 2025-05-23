import React, { Component } from "react";
import { define_nav } from "../../../../setting/store/const";

class Setting extends Component {
  render() {
    if (this.props.state_data.current_page.name !== define_nav.admin.setting.name)
    this.props.actions.current_page({
      name_new: define_nav.admin.setting.name,
      path_new: define_nav.admin.setting.path,
      old_page: this.props.state_data.current_page,
    });
    return <div>Setting</div>;
  }
}

export default Setting;
