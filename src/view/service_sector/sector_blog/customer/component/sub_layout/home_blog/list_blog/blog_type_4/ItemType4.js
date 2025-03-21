import React, { Component } from "react";

class ItemType4 extends Component {
  render() {
    return (
      <div class="archive simple-blog-post-item w-clearfix w-col w-col-6 w-dyn-item">
        <a class="simple-blog-image-block small w-inline-block"
          href={"/blog/".concat(this.props.data_blog.id_post)}
          style={{ backgroundImage: "url(".concat(this.props.data_blog.post_image).concat(")"), }} >
          <div class="blog-post-overlay light"></div>
        </a>
        <a class="archive-title blog-post-title-link" href={"/blog/".concat(this.props.data_blog.id_post)} >
          {this.props.data_blog.post_title}
        </a>
        <div class="archive-title-wrapper w-clearfix">
          <div class="archive-info-block w-clearfix">
            <img class="blog-author-image" src={this.props.data_blog.user_avatar} />
            <div class="archive blog-author-name">{this.props.data_blog.user_post}</div>
          </div>
          <div class="archive-info-block w-clearfix">
            <div class="archive-date blog-post-date">
              {this.props.data_blog.post_date}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemType4;
