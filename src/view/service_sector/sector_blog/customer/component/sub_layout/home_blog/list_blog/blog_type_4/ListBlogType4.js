import React, { Component } from "react";
import ItemType4 from "./ItemType4";

class ListBlogType4 extends Component {
  render() {
    return (
      <div class="section tint">
        <div class="container w-container">
          <h2>{this.props.data.category}</h2>
          <div class="blog-posts-list-wrapper w-dyn-list">
            <div class="archive blog-posts-list w-clearfix w-dyn-items w-row">
              {this.props.data.list_data.map((item) => {
                return <ItemType4 data_blog={item} />;
              })}
            </div>
          </div>
          <div class="row">
            <div class="col text-center">
              <a href="/blog/category/" class="btn btn-light">View All</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListBlogType4;
