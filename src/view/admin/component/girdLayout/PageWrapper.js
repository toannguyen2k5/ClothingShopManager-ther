import React, { Component } from "react";
import { urlapi } from "../../../../setting/store/const";
import ContentWrapper from "./contentWrapper/ContentWrapper";
import Nav from "./nav/Nav";

export default class PageWrapper extends Component {
  render() {
    return (
      <>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet"/>
        {/* <link rel="stylesheet" href={`${urlapi}/file/admin/assets/material-dashboard.css`} /> */}
        <link rel="stylesheet" href={`${urlapi}/file/admin/assets/nucleo-icons.css`} />
        <link rel="stylesheet" href={`${urlapi}/file/admin/assets/nucleo-svg.css`} />        
        <link rel="stylesheet" href={`${urlapi}/file/admin/craw_material/admin.css`} />
        <link rel="stylesheet" href={`${urlapi}/file/admin/assets/material-dashboard.min.css`} />
        <Nav {...this.props} />
        <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ps--active-y">
          <ContentWrapper {...this.props} />
        </main>
        
      </>
    );
  }
}
