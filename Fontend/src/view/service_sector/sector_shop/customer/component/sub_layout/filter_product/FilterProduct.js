import React, { Component, createRef } from "react";
import "./css.css";

class FilterProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
        filterType: 0,
        isShowAreaPrice:false
    };
  }
  selectFilterType = (index)=>{
    console.log(index);
    this.setState({filterType: index, isShowAreaPrice: index == 9})
  }
  componentDidMount(){
  }

  render() {
    return (
        <div className="cate-main-filter">
        <div className="margin-filter">
            <div className="box-sortby">
                    <div className="box-sort">
                        <div className="title-sort">Sắp xếp theo: </div>
                        <div className="sort-select">
                            <p><a href="javascript:;"  onClick={() => this.selectFilterType(13)}  class={this.state.filterType == 13 ?"check":""} data-id="13">Nổi bật</a></p>
                            <i className="ellipse"></i>
                            <p><a href="javascript:;" onClick={() => this.selectFilterType(7)} class={this.state.filterType == 7 ?"check":""} data-id="7">Bán chạy</a></p>
                            <i className="ellipse"></i>
                            <p><a href="javascript:;" onClick={() => this.selectFilterType(5)} class={this.state.filterType == 5 ?"check":""} data-id="5">Giảm giá</a></p>
                            <i className="ellipse"></i>
                            <p><a href="javascript:;" onClick={() => this.selectFilterType(8)} class={this.state.filterType == 8 ?"check":""} data-id="8">Mới</a></p>
                            <i className="ellipse"></i>
                            <p className="click-sort"><a href="javascript:;" class={ `sort-show ${this.state.filterType == 2 || this.state.filterType == 3 ?"check":""}`} onClick={() => this.selectFilterType(9)} >Giá{this.state.filterType == 2 ?" thấp - cao":this.state.filterType == 3 ?" cao - thấp":""}</a></p>
                            <div className="sort-select-main sort " 
                                style={{display:`${this.state.isShowAreaPrice ? "block":"none"}`}}>
                                        <p><a href="javascript:;" onClick={() => this.selectFilterType(2)} class={this.state.filterType == 2 ?"check":""} data-id="2">Giá thấp - cao<i></i></a></p>
                                        <p><a href="javascript:;" onClick={() => this.selectFilterType(3)} class={this.state.filterType == 3 ?"check":""} data-id="3">Giá cao - thấp<i></i></a></p>
                            </div>
                        </div>
                    </div>
                <div className="clearfix"></div>
            </div>
        </div>
    </div>
    );
  }
}

export default FilterProduct;
