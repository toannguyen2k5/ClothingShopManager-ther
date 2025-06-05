import React, { Component } from "react";

class CartIcon extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (!this.props.state_data.user_info.full_name) return null;
    return (
      <li className="list-inline-item mr-0 header-cart">
        <div className="list-inline-item-text">
          <a
            className="group-icon-item group-icon-item-popup d-flex d-flex-center "
            href="/shop/shoping_cart"
          >
            <span className="box-icon">
              <img
                width="24"
                height="24"
                src="//theme.hstatic.net/1000253775/1001315144/14/shopping-cart.svg?v=634"
                alt="Hệ thống cửa hàng"
              />
              <span className="js-number-cart number-cart">0</span>
            </span>
            <span className="box-text hidden-xs hidden-sm">Giỏ hàng</span>
            <span className="box-arrow">
              <svg viewBox="0 0 20 9" role="presentation">
                <path
                  d="M.47108938 9c.2694725-.26871321.57077721-.56867841.90388257-.89986354C3.12384116 6.36134886 5.74788116 3.76338565 9.2467995.30653888c.4145057-.4095171 1.0844277-.40860098 1.4977971.00205122L19.4935156 9H.47108938z"
                  fill="#ffffff"
                ></path>
              </svg>
            </span>
          </a>
        </div>
      </li>
    );
  }
}

export default CartIcon;
