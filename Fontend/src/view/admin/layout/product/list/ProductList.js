import React, { Component } from "react";
import DataTable from "react-data-table-component";
import { urlapi } from "../../../../../setting/store/const";
import "./style.css";
import { define_nav } from "../../../../../setting/store/const";

let mockProducts = [
];

const columns = [
  { name: "ID", selector: (row) => row.id, sortable: true },
  { name: "tên ncc", selector: (row) => row.id_ncc },
  { name: "Tên SP", selector: (row) => row.ten_san_pham, sortable: true },
  { name: "Style", selector: (row) => row.id_style },
  { name: "Danh Mục", selector: (row) => row.id_danh_muc },
  { name: "Trạng Thái", selector: (row) => row.trang_thai },
  { name: "Số Lượng", selector: (row) => row.so_luong },
  {
    name: "Giá Bán",
    selector: (row) => `${row.gia_ban.toLocaleString()}đ`,
  }
];

class ProductListClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allProducts: [],
      filteredProducts: [],
      searchText: "",
      filterStatus: "",
      perPage: 5,
    };
  }

  componentDidMount() {
  fetch(`${urlapi}/api/product/sellectAll/all/all/`)
  .then((response) => response.json())
  .then((data) => {
    console.log("Dữ liệu nhận được:", data);
    if(data.status && data.status == "200"){
      data.data.map((item,index)=>{
        mockProducts = [...mockProducts,{
          id: item.idProduct,
          id_ncc: item.nameBrand,
          ten_san_pham: item.nameProduct,
          id_style: item.nameStyle,
          id_danh_muc: item.nameCategory,
          trang_thai: item.status,
          so_luong: 20,
          gia_nhap: 80000,
          gia_ban: item.price,
        }]
      })
      this.setState({
        allProducts: mockProducts,
        filteredProducts: mockProducts,
      });
    }
    console.log(data);
  })
  .catch((error) => {
    console.error("Lỗi khi fetch:", error);
  });
  }

  handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    const { allProducts, filterStatus } = this.state;

    const filtered = allProducts.filter(
      (p) =>
        p.ten_san_pham.toLowerCase().includes(value) &&
        (filterStatus === "" || p.trang_thai === filterStatus)
    );

    this.setState({ searchText: value, filteredProducts: filtered });
  };

  handleStatusFilter = (e) => {
    const value = e.target.value;
    const { allProducts, searchText } = this.state;

    const filtered = allProducts.filter(
      (p) =>
        p.ten_san_pham.toLowerCase().includes(searchText) &&
        (value === "" || p.trang_thai === value)
    );

    this.setState({ filterStatus: value, filteredProducts: filtered });
  };

  handlePerPageChange = (e) => {
    this.setState({ perPage: parseInt(e.target.value) });
  };

  render() {
      if (this.props.state_data.current_page.name !== define_nav.admin.listproduct.name)
            this.props.actions.current_page({
              name_new: define_nav.admin.listproduct.name,
              path_new: define_nav.admin.listproduct.path,
              old_page: this.props.state_data.current_page,
            });
    return (
      <div className="row">
        <div className="flex flex-wrap gap-4 mb-4">
          <select
            onChange={this.handleStatusFilter}
            value={this.state.filterStatus}
            className="border p-2 rounded form-control-sm"
            style={{ float: "left"}}
          >
            <option value="">Tất cả trạng thái</option>
            <option value="Còn hàng">Còn hàng</option>
            <option value="Hết hàng">Hết hàng</option>
          </select>
          <input
            type="text"
            placeholder="Tìm kiếm sản phẩm..."
            className="border p-2 rounded form-control-sm"
            onChange={this.handleSearch}
            value={this.state.searchText}
            style={{ float: "right", width: "250px" }}
          />
        </div>

        <DataTable
          columns={columns}
          data={this.state.filteredProducts}
          pagination
          paginationPerPage={this.state.perPage}
          highlightOnHover
          striped
          responsive
        />
      </div>
    );
  }
}

export default ProductListClass;
