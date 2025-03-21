import React, { Component } from "react";

class HeaderDetailBlog extends Component {
  render() {
    return (
      <div
        class="blog-post-header"
        style={{
          backgroundImage:
            "url(https://daks2k3a4ib2z.cloudfront.net/577a18541a78df7357099c0c/577a1c81f4bb5c585737a1ab_Photo-1.jpg)",
        }}
      >
        <div class="blog-post-header-overlay">
          <div class="container w-container">
            <div
              class="blog-single-post-date"
              data-ix="fade-in-on-load-2"
              style={{
                opacity: "1",
                display: "block",
                transition: "opacity 500ms ease 0s",
              }}
            >
              July 4, 2016
            </div>
            <h2
              class="blog-post-title subpage-title"
              data-ix="fade-in-on-load"
              style={{
                opacity: "1",
                transform: "translateX(0px) translateY(0px) translateZ(0px)",
                display: "block",
                transition: "opacity 500ms ease 0s, transform 500ms ease 0s",
              }}
            >
              Ecommerce product photography tips: a beginner’s guide
            </h2>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderDetailBlog;
