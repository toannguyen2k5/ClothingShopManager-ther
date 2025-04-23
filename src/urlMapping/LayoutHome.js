import React, { Component } from "react";
import PageAdmin from "../view/admin/component/girdLayout/PageWrapper";
import Customer_blog from "../view/service_sector/sector_shop/TranstionRole";
class LayoutHome extends Component {
  render() {
    if (this.props.state_data.user_info.role === "admin")
      return <PageAdmin {...this.props} />;
    else return <Customer_blog {...this.props} />;
  }
}

export default LayoutHome;
