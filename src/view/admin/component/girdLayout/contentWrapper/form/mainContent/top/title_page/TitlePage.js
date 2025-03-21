import React, { Component } from "react";

class TitlePage extends Component {
  render() {
    return (
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
          <li className="breadcrumb-item text-sm">
            <a className="opacity-5 text-dark" href="/">
              Pages
            </a>
          </li>
          <li
            className="breadcrumb-item text-sm text-dark active"
            aria-current="page"
          >
            {this.props.state_data.current_page.name}
          </li>
        </ol>
        <h6 className="font-weight-bolder mb-0">
          {this.props.state_data.current_page.name}
        </h6>
      </nav>
    );
  }
}

export default TitlePage;
