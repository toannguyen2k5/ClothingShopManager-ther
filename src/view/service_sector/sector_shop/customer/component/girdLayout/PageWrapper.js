import React, { Component } from "react";
import ContentWrapper from "./contentWrapper/ContentWrapper";
import { urlapi } from "../../../../../../setting/store/const";

export default class PageWrapper extends Component {
  render() {
    console.log("Transtion Cust blog");
    return (
      <>
        {/* <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.css"></link> */}
        <link rel="stylesheet" href={`${urlapi}/file/cust/main/home.css`} />
        <link rel="stylesheet" href={`${urlapi}/file/cust/main/normalize.css`} />
        <ContentWrapper {...this.props} />
      </>
    );
  }
}
