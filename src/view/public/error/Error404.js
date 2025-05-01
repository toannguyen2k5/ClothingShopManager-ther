import React, { Component } from "react";
import "./style.css";

export default class Error404 extends Component {
  render() {
    console.log(this.props);
    let path_home = "/home";
    if (this.props.state_data.user_info!=null && this.props.state_data.user_info.role === "admin")
      path_home = "/admin/dashboard/";
    return (
      <div>
        <div className="app blank sidebar-opened">
          <article className="content">
            <div className="error-card global">
              <div className="error-title-block">
                <h1 className="error-title">404</h1>
                <h2 className="error-sub-title"> Sorry, page not found </h2>
              </div>
              <div className="error-container visible">
                <a className="btn btn-primary" href={path_home}>
                  <i className="fa fa-angle-left"></i> Back to Home
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }
}
