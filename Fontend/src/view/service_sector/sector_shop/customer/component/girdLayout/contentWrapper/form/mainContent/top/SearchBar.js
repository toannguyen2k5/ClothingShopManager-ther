import React, { Component } from "react";
import { url_layout } from "../../../../../../../../../../setting/store/const";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { searchValue: "" };
  }

  handleChange = (e) => {
    this.setState({ searchValue: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.searchValue) {
      window.location.href = url_layout + "/?query=" + this.state.searchValue;
    }
  };

  render() {
    return (
      <nav className="col-md-6 hidden-xs hidden-sm pd-right-0">
        <div className="site_search search-desktop">
          <form
            action="/search"
            className="wanda-mxm-search"
            onSubmit={this.handleSubmit}
          >
            <div className="search-inner">
              <input
                name="q"
                autoComplete="off"
                className="searchinput input-search search-input"
                type="text"
                size="20"
                placeholder="Bạn đang tìm gì..."
                aria-label="Search"
                onChange={this.handleChange}
              />
            </div>
            <button type="submit" className="btn-search" aria-label="Tìm kiếm">
              <img
                width="24"
                height="24"
                src="//theme.hstatic.net/1000253775/1001315144/14/search-icon.svg?v=634"
                alt="Tìm kiếm"
              />
            </button>
          </form>
        </div>
      </nav>
    );
  }
}

export default SearchBar;
