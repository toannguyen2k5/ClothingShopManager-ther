import React, { Component } from "react";

class SubNav extends Component {
  render() {
    // console.log(this.props.state_data);
    return (
      <>
        <ul
          style={
            this.props.name_active ===
            this.props.state_data.current_page.name_active
              ? {}
              : { display: "none" }
          }
        >
          {this.props.nav_sub.map((item) => (
            <li className="nav-item text-white " style={{ listStyleType: "none" }}>
              <a
                class={
                  item.id_sub_nav ===
                  this.props.state_data.current_page.name_sub_active
                    ? "nav-link text-white d-flex active bg-gradient-primary"
                    : "nav-link text-white d-flex"
                }
                href={item.nav_sub_to}
                onClick={(e) => {
                  this.props.actions.current_nav({
                    name_active: this.props.name_active,
                    name_sub_active: item.id_sub_nav,
                    old_page: this.props.state_data.current_page,
                  });
                }}
              >
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i class={`${item.nav_sub_icon} opacity-10`}></i>
                </div>
                <span className="nav-link-text ms-1">{item.nav_sub_name}</span>
              </a>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default SubNav;
