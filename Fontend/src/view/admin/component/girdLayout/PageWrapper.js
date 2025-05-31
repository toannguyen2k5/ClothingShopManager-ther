import React, { Component } from "react";
import "./css/admin.css";
// 
import { url_layout, urlapi } from "../../../../setting/store/const";
import ContentWrapper from "./contentWrapper/ContentWrapper";
import Nav from "./nav/Nav";

export default class PageWrapper extends Component {
  render() {
    console.log("Admin");
    return (
      <>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet"/>
        <Nav {...this.props} />
        <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ps--active-y">
          <ContentWrapper {...this.props} />
        </main>
        <link rel="stylesheet" href={`${url_layout}/css/nucleo-icons.css`} />
        <link rel="stylesheet" href={`${url_layout}/css/nucleo-svg.css`} />
        <link
          rel="stylesheet"
          href={`${url_layout}/css/material-dashboard.css`}
        />
        <link
          rel="stylesheet"
          href={`${url_layout}/css/material-dashboard.min.css`}
        /> 
        
      </>
    );
  }
}
