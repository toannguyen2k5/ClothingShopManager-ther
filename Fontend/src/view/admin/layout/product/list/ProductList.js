import React, { Component } from "react";
import DataTable from "react-data-table-component";
import "./style.css";
import { define_nav } from "../../../../../setting/store/const";

const mockProducts = [
  {
    id: 1,
    id_ncc: "NCC001",
    ten_san_pham: "Áo Hoodie Nam",
    id_style: "STYLE123",
    id_danh_muc: "DM01",
    trang_thai: "Còn hàng",
    so_luong: 50,
    gia_nhap: 120000,
    gia_ban: 199000,
  },
  {
    id: 2,
    id_ncc: "NCC002",
    ten_san_pham: "Quần Jean Nữ",
    id_style: "STYLE456",
    id_danh_muc: "DM02",
    trang_thai: "Hết hàng",
    so_luong: 0,
    gia_nhap: 150000,
    gia_ban: 259000,
  },
  {
    id: 3,
    id_ncc: "NCC003",
    ten_san_pham: "Áo thun trắng",
    id_style: "STYLE789",
    id_danh_muc: "DM01",
    trang_thai: "Còn hàng",
    so_luong: 20,
    gia_nhap: 80000,
    gia_ban: 150000,
  },
];

const columns = [
  { name: "ID", selector: (row) => row.id, sortable: true },
  { name: "ID NCC", selector: (row) => row.id_ncc },
  { name: "Tên SP", selector: (row) => row.ten_san_pham, sortable: true },
  { name: "ID Style", selector: (row) => row.id_style },
  { name: "ID Danh Mục", selector: (row) => row.id_danh_muc },
  { name: "Trạng Thái", selector: (row) => row.trang_thai },
  { name: "Số Lượng", selector: (row) => row.so_luong },
  {
    name: "Giá Nhập",
    selector: (row) => `${row.gia_nhap.toLocaleString()}đ`,
  },
  {
    name: "Giá Bán",
    selector: (row) => `${row.gia_ban.toLocaleString()}đ`,
  },
  {
    name: "Hành Động",
    cell: (row) => (
      <>
        <button className="bg-yellow-400 text-white px-2 py-1 rounded mr-2">
          Sửa
        </button>
        <button className="bg-red-500 text-white px-2 py-1 rounded">Xoá</button>
      </>
    ),
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  },
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
    // fetch('/api/products')...
    this.setState({
      allProducts: mockProducts,
      filteredProducts: mockProducts,
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
