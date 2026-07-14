import React, { Component } from "react";
import DataTable from "react-data-table-component";
import { urlapi } from "../../../../../setting/store/const";
import "./style.css";
import { define_nav } from "../../../../../setting/store/const";
import "../../../layout/order/input/list/PurchaseSlipList.css";
let mockProducts = [];

const columns = [
  { name: "STT", selector: (row, index) => row.index, sortable: true },
  { name: "Thương Hiệu", selector: (row) => row.id_ncc },
  { name: "Tên Sản Phẩm", selector: (row) => row.ten_san_pham, sortable: true },
  { name: "Style", selector: (row) => row.id_style },
  { name: "Danh Mục", selector: (row) => row.id_danh_muc },
  { name: "Trạng Thái Bán", selector: (row) => (row.trang_thai ? "✔️" : "❌") },
  { name: "Số Lượng", selector: (row) => row.so_luong },
  {
    name: "Giá Bán",
    selector: (row) => `${row.gia_ban.toLocaleString()}đ`,
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
      showModalDetail: false,
      itemsLoading: false,
      itemSearchText: "",
      DetailProducts: [],
      nameProduct: "",
      showModalShop: false,
      nameDetail: "",
      InventSearchText: "",
      InventShop: [],
    };
  }

  componentDidMount() {
    fetch(`${urlapi}/api/product/sellectAll/all/all/`)
      .then((response) => response.json())
      .then((data) => {
        if (data.status && data.status == "200") {
          data.data.map((item, index) => {
            mockProducts = [
              ...mockProducts,
              {
                index: index + 1,
                id: item.idProduct,
                id_ncc: item.nameBrand,
                ten_san_pham: item.nameProduct,
                id_style: item.nameStyle,
                id_danh_muc: item.nameCategory,
                trang_thai: item.status,
                so_luong: item.quantity || 0,
                gia_ban: item.price || 0,
              },
            ];
          });
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
  handleRowClick = (row) => {
    this.setState(
      { showModalDetail: true, nameProduct: row.ten_san_pham },
      () => {
        const queryString = new URLSearchParams();
        queryString.append("idProduct", row.id);
        fetch(
          urlapi +
            `/api/detailproduct/sellect/alldetail?${queryString.toString()}`,
          {
            method: "GET",
          }
        )
          .then((response) => response.json())
          .then((data) => {
            if (data.status && data.status == "200") {
              this.setState({ DetailProducts: data.data });
            }
            console.log("data detail :", data);
          })
          .catch((error) => console.error(error));
      }
    );
  };
  handleInventRowClick = (row) => {
    this.setState(
      {
        showModalShop: true,
        nameDetail:
          this.state.nameProduct + "/" + row.nameSize + "/" + row.nameColor,
      },
      () => {
        const queryString = new URLSearchParams();
        queryString.append("idDetail", row.idDetail);
        fetch(
          urlapi +
            `/api/detailproduct/sellect/invenofshop?${queryString.toString()}`,
          {
            method: "GET",
          }
        )
          .then((response) => response.json())
          .then((data) => {
            if (data.status && data.status == "200") {
              this.setState({ InventShop: data.data });
            }
            console.log("InventShop :", data);
          })
          .catch((error) => console.error(error));
      }
    );
  };
  render() {
    const {
      showModalDetail,
      itemsLoading,
      itemSearchText,
      DetailProducts,
      InventSearchText,
      showModalShop,
      InventShop,
    } = this.state;
    if (
      this.props.state_data.current_page.name !==
      define_nav.admin.listproduct.name
    )
      this.props.actions.current_page({
        name_new: define_nav.admin.listproduct.name,
        path_new: define_nav.admin.listproduct.path,
        old_page: this.props.state_data.current_page,
      });
    const filteredItems = DetailProducts.filter(
      (item) =>
        item.numberSeri.toLowerCase().includes(itemSearchText.toLowerCase()) ||
        item.nameColor.toLowerCase().includes(itemSearchText.toLowerCase()) ||
        item.nameSize.toLowerCase().includes(itemSearchText.toLowerCase())
    );
    const detailColumns = [
      { name: "Mã Detail", selector: (row) => row.idDetail, sortable: true },
      { name: "Color", selector: (row) => row.nameColor, sortable: true },
      { name: "Size", selector: (row) => row.nameSize, sortable: true },
      { name: "Số seri", selector: (row) => row.numberSeri, sortable: true },
      { name: "Quantity", selector: (row) => row.quantity, sortable: true },
    ];
    const filteredInvent = InventShop.filter(
      (item) =>
        item.idShop.toLowerCase().includes(InventSearchText.toLowerCase()) ||
        item.nameShop.toLowerCase().includes(InventSearchText.toLowerCase())
    );
    const InventColumns = [
      { name: "Mã shop", selector: (row) => row.idShop, sortable: true },
      { name: "tên shop", selector: (row) => row.nameShop, sortable: true },
      { name: "số lượng", selector: (row) => row.quantity, sortable: true },
    ];
    return (
      <>
        <div className="row">
          <div className="flex flex-wrap gap-4 mb-4">
            <select
              onChange={this.handleStatusFilter}
              value={this.state.filterStatus}
              className="border p-2 rounded form-control-sm"
              style={{ float: "left" }}
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
            onRowClicked={(row) => this.handleRowClick(row)}
          />
        </div>

        <div className="">
          {showModalDetail && (
            <div
              className="psl-modal-overlay"
              onClick={() => {
                this.setState({ showModalDetail: false });
              }}
            >
              <div
                className="psl-modal-content"
                onClick={(e) => e.stopPropagation()}
                style={{
                  width: "100%",
                  height: "530px",
                  overflowY: "auto",
                }}
              >
                <button
                  className="psl-modal-close"
                  onClick={() => {
                    this.setState({ showModalDetail: false });
                  }}
                >
                  ×
                </button>
                <h3>Chi tiết sản phẩm {this.state.nameProduct}</h3>
                <DataTable
                  columns={detailColumns}
                  data={filteredItems}
                  progressPending={itemsLoading}
                  pagination
                  paginationPerPage={5}
                  paginationRowsPerPageOptions={[5, 10, 15, 20, 50]}
                  highlightOnHover
                  pointerOnHover
                  subHeader
                  onRowClicked={(row) => this.handleInventRowClick(row)}
                  subHeaderComponent={
                    <input
                      type="text"
                      placeholder="Tìm kiếm số seri / màu / size..."
                      className="psl-search"
                      value={itemSearchText}
                      onChange={(e) => {
                        this.setState({ itemSearchText: e.target.value });
                      }}
                    />
                  }
                />
              </div>
            </div>
          )}
        </div>
        <div className="">
          {showModalShop && (
            <div
              className="psl-modal-overlay"
              onClick={() => {
                this.setState({ showModalShop: false });
              }}
            >
              <div
                className="psl-modal-content"
                onClick={(e) => e.stopPropagation()}
                style={{
                  width: "100%",
                  height: "530px",
                  overflowY: "auto",
                }}
              >
                <button
                  className="psl-modal-close"
                  onClick={() => {
                    this.setState({ showModalShop: false });
                  }}
                >
                  ×
                </button>
                <h4>Chi tiết sản phẩm {this.state.nameDetail}</h4>
                <DataTable
                  columns={InventColumns}
                  data={filteredInvent}
                  progressPending={itemsLoading}
                  pagination
                  paginationPerPage={5}
                  paginationRowsPerPageOptions={[5, 10, 15, 20, 50]}
                  highlightOnHover
                  pointerOnHover
                  subHeader
                  subHeaderComponent={
                    <input
                      type="text"
                      placeholder="Tìm kiếm shop..."
                      className="psl-search"
                      value={InventSearchText}
                      onChange={(e) => {
                        this.setState({ InventSearchText: e.target.value });
                      }}
                    />
                  }
                />
              </div>
            </div>
          )}
        </div>
      </>
    );
  }
}

export default ProductListClass;
