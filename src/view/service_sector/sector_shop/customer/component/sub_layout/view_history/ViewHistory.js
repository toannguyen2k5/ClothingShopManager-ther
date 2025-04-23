import React, { Component, createRef } from "react";
import "./css.scss";

class ItemProductV2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      isTransitioning:false,
      listProduct:[]
    };
    this.carouselRef = createRef();
  }

  handleScroll = (direction) => {
    const container = this.carouselRef.current;
    if (!container) return;

    const scrollAmount = container.offsetWidth;
    if (direction === "next") {
      this.index = this.state.index + 1;
    } else {
      this.index = this.state.index - 1;
    }
    this.setState({ isTransitioning: true });
    setTimeout(() => {
      this.setState({
        index: this.index < 0 ? 0 : this.index,
        isTransitioning: false,
      });
    }, 500);
  };

  componentDidMount(){
    const value = [
        {id:"ID001", src:"https://cdn.tgdd.vn/Products/Images/44/335367/macbook-air-13-inch-m4-bac-600x600.jpg", productName:"MacBook Air 130 inch M4 24GB/512GB", price:36990000},
        {id:"ID001", src:"https://cdn.tgdd.vn/Products/Images/44/335367/macbook-air-13-inch-m4-bac-600x600.jpg", productName:"MacBook Air 131 inch M4 24GB/512GB", price:36990000},
        {id:"ID001", src:"https://cdn.tgdd.vn/Products/Images/44/335367/macbook-air-13-inch-m4-bac-600x600.jpg", productName:"MacBook Air 132 inch M4 24GB/512GB", price:36990000},
        {id:"ID001", src:"https://cdn.tgdd.vn/Products/Images/44/335367/macbook-air-13-inch-m4-bac-600x600.jpg", productName:"MacBook Air 133 inch M4 24GB/512GB", price:36990000},
        {id:"ID001", src:"https://cdn.tgdd.vn/Products/Images/44/335367/macbook-air-13-inch-m4-bac-600x600.jpg", productName:"MacBook Air 134 inch M4 24GB/512GB", price:36990000},
        {id:"ID001", src:"https://cdn.tgdd.vn/Products/Images/44/335367/macbook-air-13-inch-m4-bac-600x600.jpg", productName:"MacBook Air 135 inch M4 24GB/512GB", price:36990000},
        {id:"ID001", src:"https://cdn.tgdd.vn/Products/Images/44/335367/macbook-air-13-inch-m4-bac-600x600.jpg", productName:"MacBook Air 136 inch M4 24GB/512GB", price:36990000},
        {id:"ID001", src:"https://cdn.tgdd.vn/Products/Images/44/335367/macbook-air-13-inch-m4-bac-600x600.jpg", productName:"MacBook Air 137 inch M4 24GB/512GB", price:36990000},
        {id:"ID001", src:"https://cdn.tgdd.vn/Products/Images/44/335367/macbook-air-13-inch-m4-bac-600x600.jpg", productName:"MacBook Air 138 inch M4 24GB/512GB", price:36990000},
        {id:"ID001", src:"https://cdn.tgdd.vn/Products/Images/44/335367/macbook-air-13-inch-m4-bac-600x600.jpg", productName:"MacBook Air 138 inch M4 24GB/512GB", price:36990000},
        {id:"ID001", src:"https://cdn.tgdd.vn/Products/Images/44/335367/macbook-air-13-inch-m4-bac-600x600.jpg", productName:"MacBook Air 139 inch M4 24GB/512GB", price:36990000},
        {id:"ID001", src:"https://cdn.tgdd.vn/Products/Images/44/335367/macbook-air-13-inch-m4-bac-600x600.jpg", productName:"MacBook Air 130 inch M4 24GB/512GB", price:36990000},
        {id:"ID001", src:"https://cdn.tgdd.vn/Products/Images/44/335367/macbook-air-13-inch-m4-bac-600x600.jpg", productName:"MacBook Air 13 inch M4 24GB/512GB", price:36990000},
        {id:"ID001", src:"https://cdn.tgdd.vn/Products/Images/44/335367/macbook-air-13-inch-m4-bac-600x600.jpg", productName:"MacBook Air 13 inch M4 24GB/512GB", price:36990000},
        {id:"ID001", src:"https://cdn.tgdd.vn/Products/Images/44/335367/macbook-air-13-inch-m4-bac-600x600.jpg", productName:"MacBook Air 13 inch M4 24GB/512GB", price:36990000},
        {id:"ID001", src:"https://cdn.tgdd.vn/Products/Images/44/335367/macbook-air-13-inch-m4-bac-600x600.jpg", productName:"MacBook Air 13 inch M4 24GB/512GB", price:36990000},
        {id:"ID001", src:"https://cdn.tgdd.vn/Products/Images/44/335367/macbook-air-13-inch-m4-bac-600x600.jpg", productName:"MacBook Air 13 inch M4 24GB/512GB", price:36990000},
        {id:"ID001", src:"https://cdn.tgdd.vn/Products/Images/44/335367/macbook-air-13-inch-m4-bac-600x600.jpg", productName:"MacBook Air 13 inch M4 24GB/512GB", price:36990000},
        {id:"ID001", src:"https://cdn.tgdd.vn/Products/Images/44/335367/macbook-air-13-inch-m4-bac-600x600.jpg", productName:"MacBook Air 13 inch M4 24GB/512GB", price:36990000},
        {id:"ID001", src:"https://cdn.tgdd.vn/Products/Images/44/335367/macbook-air-13-inch-m4-bac-600x600.jpg", productName:"MacBook Air 13 inch M4 24GB/512GB", price:36990000},
        {id:"ID001", src:"https://cdn.tgdd.vn/Products/Images/44/335367/macbook-air-13-inch-m4-bac-600x600.jpg", productName:"MacBook Air 13 inch M4 24GB/512GB", price:36990000},
        {id:"ID001", src:"https://cdn.tgdd.vn/Products/Images/44/335367/macbook-air-13-inch-m4-bac-600x600.jpg", productName:"MacBook Air 13 inch M4 24GB/512GB", price:36990000},
        {id:"ID001", src:"https://cdn.tgdd.vn/Products/Images/44/335367/macbook-air-13-inch-m4-bac-600x600.jpg", productName:"MacBook Air 13 inch M4 24GB/512GB", price:36990000},
        {id:"ID001", src:"https://cdn.tgdd.vn/Products/Images/44/335367/macbook-air-13-inch-m4-bac-600x600.jpg", productName:"MacBook Air 13 inch M4 24GB/512GB", price:36990000},
        {id:"ID001", src:"https://cdn.tgdd.vn/Products/Images/44/335367/macbook-air-13-inch-m4-bac-600x600.jpg", productName:"MacBook Air 13 inch M4 24GB/512GB", price:36990000},
        {id:"ID001", src:"https://cdn.tgdd.vn/Products/Images/44/335367/macbook-air-13-inch-m4-bac-600x600.jpg", productName:"MacBook Air 13 inch M4 24GB/512GB", price:36990000},
        {id:"ID001", src:"https://cdn.tgdd.vn/Products/Images/44/335367/macbook-air-13-inch-m4-bac-600x600.jpg", productName:"MacBook Air 13 inch M4 24GB/512GB", price:36990000},
        {id:"ID001", src:"https://cdn.tgdd.vn/Products/Images/44/335367/macbook-air-13-inch-m4-bac-600x600.jpg", productName:"MacBook Air 13 inch M4 24GB/512GB", price:36990000},
        {id:"ID001", src:"https://cdn.tgdd.vn/Products/Images/44/335367/macbook-air-13-inch-m4-bac-600x600.jpg", productName:"MacBook Air 13 inch M4 24GB/512GB", price:36990000},
        {id:"ID001", src:"https://cdn.tgdd.vn/Products/Images/44/335367/macbook-air-13-inch-m4-bac-600x600.jpg", productName:"MacBook Air 13 inch M4 24GB/512GB", price:36990000},
        {id:"ID001", src:"https://cdn.tgdd.vn/Products/Images/44/335367/macbook-air-13-inch-m4-bac-600x600.jpg", productName:"MacBook Air 13 inch M4 24GB/512GB", price:36990000}
    ];
    this.setState({...this.state, listProduct: value});
  }

  render() {
    return (
      <section className="viewed-historyv3">
        <h2> Sản phẩm đã xem</h2>
        <p className="btn-clear-history" onClick={() => alert("Xoá lịch sử")}>
          Xóa lịch sử
        </p>
        <div
          className="navigation-prev"
          onClick={() => this.handleScroll("prev")}
          style={{display:`${this.state.index > 0 ? "block":"none"}`}}
        />
        <div
          className="list-viewed-products owl-carousel owl-theme owl-loaded owl-drag"
          data-size="5"
          ref={this.carouselRef}
          style={{
            display: "flex",
            overflowX: "auto",
            transform: `${this.state.isTransitioning ? "translateX(-100%)":""}`,
            transition: `${this.state.isTransitioning ? "transform 0.5s ease-in-out":""}`,
            scrollBehavior: "smooth",
          }}
        >
          <div class="owl-stage-outer">
            <div class="owl-stage">
              {this.state.listProduct.map((item, index) => (
                <div
                  className={`owl-item col-lg-3 col-md-3 col-sm-4 col-xs-6 ${
                    Math.floor(index / 4) == this.state.index ? "active" : ""
                  }`}
                  key={index}
                >
                  <div className="viewed-product" data-id={index}>
                    <div
                      className="close-itemv3"
                      onClick={() => alert("Remove sản phẩm")}
                    ></div>
                    <a
                      href={`/product/${item.id}`}
                      className="main-contain"
                      data-s="Nomal"
                    >
                      <div className="viewed-product-content">
                        <img
                          src={item.src}
                          alt={item.productName}
                        />
                        <div className="viewed-product-info">
                          <p className="viewed-product-title">
                          {item.productName}
                          </p>
                          <p className="viewed-product-price">{item.price}₫</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          className="navigation-next"
          onClick={() => this.handleScroll("next")}
          style={{display:`${Math.floor(this.state.listProduct.length/4) > this.state.index ? "block":"none"}`}}
        />
      </section>
    );
  }
}

export default ItemProductV2;
