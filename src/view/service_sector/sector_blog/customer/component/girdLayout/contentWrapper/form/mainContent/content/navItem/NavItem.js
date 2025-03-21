import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
    };
  }
  show() {
    this.setState({
      show: !this.state.show,
    });
  }

  render() {
    const { item, index1, index } = this.props;
    return (
      <div>
        <li className="nav-item">
          <a
            className={"nav-link collapse"}
            href={item.to}
            data-toggle="collapse"
            onClick={this.show.bind(this)}
          >
            <i className={item.icon}></i>
            <span>{item.navItem}</span>
          </a>
          <div
            id={"collapse_" + index + "_" + index1}
            className={this.state.show ? "collapse show" : "collapse"}
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              {item.children.map((itemSub, indexSub) => {
                return (
                  <>
                    <h6 className="collapse-header">
                      {itemSub.collapseHeader}
                    </h6>
                    {itemSub.collapseItem.map((collapse_item) => {
                      return (
                        <Link className="collapse-item" to={collapse_item.to}>
                          {collapse_item.collapseItem}
                        </Link>
                      );
                    })}
                  </>
                );
              })}
            </div>
          </div>
        </li>
      </div>
    );
  }
}
