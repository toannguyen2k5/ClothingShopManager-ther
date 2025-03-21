import React, { Component } from 'react';

class ItemType3 extends Component {
    render() {
        return (
            <div class="simple-blog-post-item w-col w-col-4 w-dyn-item">
                  <a class="simple-blog-image-block w-inline-block" href={"/blog/".concat(this.props.data_blog.id_post)}
                    style={{ backgroundImage: "url(".concat(this.props.data_blog.post_image).concat(")"),}} >
                    <div class="blog-post-overlay light"></div>
                  </a>
                  <div class="blog-post-date">{this.props.data_blog.post_date}</div>
                  <a class="blog-post-title-link" href={"/blog/".concat(this.props.data_blog.id_post)} >
                    {this.props.data_blog.post_title}
                  </a>
                  <p class="blog-post-summary">
                    {this.props.data_blog.post_short_content}
                  </p>
                </div>
        );
    }
}

export default ItemType3;