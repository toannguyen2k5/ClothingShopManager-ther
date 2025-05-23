import React, { Component } from "react";
import Topbar from "./form/mainContent/top/Topbar";
import PageContent from "./form/mainContent/content/content_page/PageContent";
import Footer from "./form/mainContent/footer/Footer";

export default class ContentWrapper extends Component {
  render() {
    return (
      <>
        {/* <!-- Main Content --> */}
        {/* <!-- Topbar /--> */}
        <Topbar {...this.props} />
        {/* <!-- End of Topbar --> */}

        <div className="container-fluid py-4">
          {/* <!-- Begin Page Content --> */}
          <PageContent {...this.props} />
          {/* <!-- /.container-fluid --> */}
          {/* <!-- End of Main Content --> */}

          {/* <!-- Footer --> */}
          <Footer {...this.props}/>
          {/* <!-- End of Footer --> */}
        </div>
      </>
    );
  }
}
