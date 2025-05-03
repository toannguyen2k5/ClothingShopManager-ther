import React, { Component } from "react";
import SubNav from "./sub_nav/SubNav";

class NavItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "",
      active_sub: "",
    };
  }

  render() {
    if (
      this.props.state_data.current_page.name_active !== this.state.active ||
      this.props.state_data.current_page.name_sub_active !==
        this.state.active_sub
    ) {
      this.setState({
        active: this.props.state_data.current_page.name_active,
        active_sub: this.props.state_data.current_page.name_sub_active,
      });
    }

    return (
      <>
        {this.props.nav.map((item, index) => (
          <>
            {item.sidebarHeading !== "" ? (
              <li className="nav-item mt-3">
                <h6 className="ps-4 ms-2 text-uppercase text-xs text-white font-weight-bolder opacity-8">
                  {item.sidebarHeading}
                </h6>
              </li>
            ) : null}
            {item.nav_arr.map((nav_sub_item, index_nav_sub_item) => (
              <>
                <li
                  class={
                    this.state.active === nav_sub_item.id_nav &&
                    nav_sub_item.nav_sub_arr.length > 0
                      ? "nav-item text-white"
                      : "nav-item"
                  }
                >
                  <div className="row">
                    <a
                      class={
                        this.state.active === nav_sub_item.id_nav
                          ? "nav-link text-white d-flex active bg-gradient-primary"
                          : "nav-link text-white d-flex"
                      }
                      href={nav_sub_item.nav_to}
                      onClick={(e) => {
                        if (nav_sub_item.nav_sub_arr.length !== 0) {
                          e.preventDefault();
                          this.props.actions.current_nav({
                            name_active: nav_sub_item.id_nav,
                            name_sub_active: "",
                            old_page: this.props.state_data.current_page,
                          });
                          this.setState({
                            active: nav_sub_item.id_nav,
                            active_sub: null,
                          });
                        } else {
                          this.props.actions.current_nav({
                            name_active: nav_sub_item.id_nav,
                            path: nav_sub_item.nav_to,
                            name_sub_active: "",
                            old_page: this.props.state_data.current_page,
                          });
                        }
                      }}
                    >
                      <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                        <i class={`${nav_sub_item.nav_icon} opacity-10`}></i>
                      </div>
                      <span className="nav-link-text ms-1">
                        {nav_sub_item.nav_name}
                      </span>
                    </a>
                  </div>
                  <div className="row">
                    {nav_sub_item.nav_sub_arr.length > 0 ? (
                      <SubNav
                        {...this.props}
                        nav_sub={nav_sub_item.nav_sub_arr}
                        name_active={nav_sub_item.id_nav}

                      />
                    ) : null}
                  </div>
                </li>
              </>
            ))}
          </>
        ))}
      </>
    );
  }
}

export default NavItem;
