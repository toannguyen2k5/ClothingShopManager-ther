import React, { Component } from "react";

class HeaderBlog extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="blog-1 subpage-header" style={{"background-image":"url(".concat(this.props.image_header).concat(")")}}  > 
        <div class="container w-container">
          <h2 class="subpage-title" data-ix="fade-in-on-load" style={{ opacity: "1" }} >
            {this.props.page_title}
          </h2>
          <div class="page-subtitle" data-ix="fade-in-on-load-2" style={{ opacity: "1" }} >
            {this.props.subPage_title}
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderBlog;
