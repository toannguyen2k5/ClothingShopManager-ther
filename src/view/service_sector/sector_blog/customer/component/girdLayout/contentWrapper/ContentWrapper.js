import React, { Component } from "react";
import Topbar from "./form/mainContent/top/Topbar";
import PageContent from "./form/mainContent/content/content_page/PageContent";
import Footer from "./form/mainContent/footer/Footer";

export default class ContentWrapper extends Component {
  render() {
    return (
      <>
        <link rel="stylesheet" href="/css/plugin-style.css" />
        <link rel="stylesheet" href="/css/styles-new.scss.css" />
        <link rel="stylesheet" href="/css/style-smb.css" />
        <link rel="stylesheet" href="/css/style-collection.scss.css" />
        <link rel="stylesheet" href="/css/style-page.scss.css" />
        <link rel="stylesheet" href="/css/render-style.css" />
        <link rel="stylesheet" href="/css/render-style-other.scss.css" />
        <link rel="stylesheet" href="/css/jquery.fancybox.min.css" />
        <link rel="stylesheet" href="/css/www-player.css" />
        <link rel="stylesheet" href="/css/styles__ltr.css" />
        <link rel="stylesheet" href="/css/slider.css" />
        {/* <!-- Main Content --> */}
        {/* <!-- Topbar /--> */}
        <Topbar {...this.props} />
        {/* <!-- End of Topbar --> */}
        {/* <!-- Begin Page Content --> */}

        <PageContent {...this.props} />
        {/* <!-- /.container-fluid --> */}
        {/* <!-- End of Main Content --> */}

        {/* <!-- Footer --> */}
        <Footer />
        {/* <!-- End of Footer --> */}
      </>
    );
  }
}
