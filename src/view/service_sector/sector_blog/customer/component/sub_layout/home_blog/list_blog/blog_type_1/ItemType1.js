import React, { Component } from "react";

class ItemType1 extends Component {
  render() {
    return (
      <div class="image-blog-post-item w-col w-col-6 w-dyn-item">
        <a class="blog-post-image-block large w-inline-block" href={"/blog/".concat(this.props.data_blog.id_post)}
          style={{ backgroundImage: "url(".concat(this.props.data_blog.post_image).concat(")"),}} >
          <div class="blog-post-overlay">
            <div class="blog-date-block">
              <div class="blog-date-title">{this.props.data_blog.post_date}</div>
            </div>
            <div class="blog-post-title-wrapper">
              <div class="blog-overlay-title large">{this.props.data_blog.post_title}</div>
              <div class="post-author-block w-clearfix">
                <img class="blog-author-image" src={this.props.data_blog.user_avatar} />
                <div class="blog-author-name">{this.props.data_blog.user_post}</div>
              </div>
            </div>
          </div>
        </a>
      </div>
    );
  }
}

export default ItemType1;
