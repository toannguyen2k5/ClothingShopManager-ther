import React, { Component } from "react";
import DataTable from "react-data-table-component";
import { role_customer, role_manager, role_admin, urlapi } from "../../../../../setting/store/const";
import "./style.css";
import { define_nav } from "../../../../../setting/store/const";
import "../../../layout/order/input/list/PurchaseSlipList.css";
import UpdateProduct from "../update/UpdateProduct.js";
let mockProducts = [];

const columns = [
  { name: "STT", selector: (row, index) => row.index, sortable: true, grow: 1 },
  { name: "Tên Sản Phẩm", selector: (row) => row.ten_san_pham, sortable: true, grow: 4 },
  { name: "Thương Hiệu", selector: (row) => row.id_ncc, grow: 1 },
  { name: "Style", selector: (row) => row.id_style, grow: 1 },
  { name: "Danh Mục", selector: (row) => row.id_danh_muc, grow: 1 },
  { name: "Trạng Thái Bán", selector: (row) => (row.trang_thai ? "✔️" : "❌"), grow: 1 },
  { name: "Số Lượng", selector: (row) => row.so_luong, grow: 1 },
  {
    name: "Giá Bán",
    selector: (row) => `${row.gia_ban.toLocaleString()}đ`,
    grow: 1,
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
      showContextMenu: false,
      contextMenuX: 0,
      contextMenuY: 0,
      selectedRow: null,
      showModelDetail: false,
      showEditModal: false,
      detail_product: null,
    };
  }

  componentDidMount() {
    fetch(`${urlapi}/api/product/sellectAll/all/all/?role_level=${this.props.state_data.user_info.role_level}`)
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
    document.addEventListener("click", this.closeContextMenu);
  }
  componentWillUnmount() {
    document.removeEventListener("click", this.closeContextMenu);
  }
  closeContextMenu = () => {
    this.setState({
      showContextMenu: false,
    });
  };
  handleToggleSaleStatus = async () => {
    const { selectedRow } = this.state;
    if (!selectedRow) return;

    const res = await fetch(
      `${urlapi}/api/product/updateSaleStatus?idProduct=${selectedRow.id}&status=${!selectedRow.trang_thai}`,
      {
        method: "POST",
      }
    );

    const data = await res.json();

    if (data.status === "200") {
      const res2 = await fetch(`${urlapi}/api/product/sellectAll/all/all/?role_level=${this.props.state_data.user_info.role_level}`);
      const data2 = await res2.json();

      if (data2.status === "200") {
        const products = data2.data.map((item, index) => ({
          index: index + 1,
          id: item.idProduct,
          id_ncc: item.nameBrand,
          ten_san_pham: item.nameProduct,
          id_style: item.nameStyle,
          id_danh_muc: item.nameCategory,
          trang_thai: item.status,
          so_luong: item.quantity || 0,
          gia_ban: item.price || 0,
        }));

        this.setState({
          allProducts: products,
          filteredProducts: products,
        });
      }

      alert("Đã thay đổi trạng thái bán thành công!");
    } else {
      alert("Thay đổi trạng thái bán thất bại!");
    }
  };
  handleOpenEditModal = () => {
    this.setState({ showEditModal: true });
  }
  handeCloseEditModal = () => {
    this.setState({ showEditModal: false });
  }
  handleOpenModelDetail = () => {
    fetch(
      urlapi +
      "/api/detailproduct/sellect/detailProperty?idProduct=" +
      this.state.selectedRow.id
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.status && data.status === "200") {
          this.setState({ showModelDetail: true, detail_product: data.data })
          console.log("detailProperty : ", data);
        }
        console.log(data);
      })
      .catch((error) => console.error(error));
  }
  handleCloseModelDetail = () => {
    this.setState({ showModelDetail: false })
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
      showModelDetail,
      detail_product,
      showEditModal,
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
        {
          this.state.showContextMenu && (
            <div
              className="context-menu"
              style={{
                left: this.state.contextMenuX,
                top: this.state.contextMenuY,
              }}
            >
              <div onClick={() => this.handleOpenModelDetail()}>
                👁 Xem thông tin sản phẩm chi tiết
              </div>
              <div onClick={() => this.handleRowClick(this.state.selectedRow)}>
                👁 xem tồn kho theo từng size,màu
              </div>
              {this.props.state_data.user_info.role_level >= role_manager && (
                <div onClick={this.handleToggleSaleStatus}>
                  ✏ đổi trạng thái bán
                </div>
              )}
              <div onClick={this.handleOpenEditModal}>
                ✏ chỉnh sửa thông tin sản phẩm
              </div>

              {this.props.state_data.user_info.role_level >= role_admin && (
                <div onClick={() => alert("Chức năng xóa sản phẩm chưa được triển khai")}>
                  🗑 Xóa sản phẩm
                </div>
              )}

            </div>
          )
        }
        <div className="row">
          <div className="flex flex-wrap gap-4 mb-4">
            <select
              onChange={this.handleStatusFilter}
              value={this.state.filterStatus}
              className="border p-2 rounded form-control-sm"
              style={{ float: "left" }}
            >
              <option value="">Tất cả trạng thái</option>
              <option value="Còn hàng">Đang bán</option>
              <option value="Hết hàng">Ngưng bán</option>
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
            onRowDoubleClicked={(row, event) => {
              this.setState({
                selectedRow: row,
                showContextMenu: true,
                contextMenuX: event.clientX,
                contextMenuY: event.clientY,
              }, console.log("selectedRow : ", this.state.selectedRow));
            }}
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
        <div className="">
          {showModelDetail && (
            <div
              className="psl-modal-overlay"
              onClick={() => {
                this.setState({ showModelDetail: false });
              }}
            >
              <div
                className="psl-modal-content"
                onClick={(e) => e.stopPropagation()}
                style={{
                  width: "100%",
                  height: "700px",
                  overflowY: "auto",
                }}
              >
                <button
                  className="psl-modal-close"
                  onClick={() => {
                    this.setState({ showModelDetail: false });
                  }}
                >
                  ×
                </button>
                <div className="container-detail">
                  <div className="container-hafl">
                    <div className="image-main">
                      {detail_product?.images?.filter((img) => img.main).map((img, index) => (
                        <img
                          key={index}
                          src={urlapi + "/api/Image/" + img.path || "/path/to/default-image.jpg"}
                          alt="Product Image"
                          style={{ width: "80%", height: "auto", borderRadius: "10px" }}
                        />
                      ))}
                    </div>
                    <div className="image-second">
                      {detail_product?.images?.filter((img) => !img.main).map((img, index) => (
                        <img
                          key={index}
                          src={urlapi + "/api/Image/" + img.path || "/path/to/default-image.jpg"}
                          alt="Product Image"
                          style={{ width: "auto", height: "115px", borderRadius: "10px", marginRight: "5px" }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="container-hafl">
                    <h2>Thông tin sản phẩm</h2>
                    <div className="block-input">
                      <label>mã sản phẩm</label>
                      <input
                        type="text"
                        defaultValue={detail_product?.idProduct || "không có thông tin"}
                        disabled
                      />
                    </div>
                    <div className="block-input">
                      <label>tên sản phẩm</label>
                      <input
                        type="text"
                        defaultValue={detail_product?.nameProduct || "không có thông tin"}
                        disabled
                      />
                    </div>
                    <div className="container-detail">
                      <div className="block-input">
                        <label>loại sản phẩm</label>
                        <input
                          type="text"
                          defaultValue={detail_product?.nameStyle || "không có thông tin"}
                          disabled
                        />
                      </div>
                      <div className="block-input">
                        <label>chất liệu</label>
                        <input
                          type="text"
                          defaultValue={detail_product?.nameMaterial || "không có thông tin"}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="container-detail">
                      <div className="block-input">
                        <label>phân loại sản phẩm</label>
                        <input
                          type="text"
                          defaultValue={detail_product?.nameCategory || "không có thông tin"}
                          disabled
                        />
                      </div>
                      <div className="block-input">
                        <label>tên thương hiệu</label>
                        <input
                          type="text"
                          defaultValue={detail_product?.nameBrand || "không có thông tin"}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="container-detail">
                      <div className="block-input">
                        <label>giá gốc</label>
                        <input
                          type="text"
                          defaultValue={detail_product?.price || "không có thông tin"}
                          disabled
                        />
                      </div>
                      <div className="block-input">
                        <label>giá sau khuyến mãi</label>
                        <input
                          type="text"
                          defaultValue={detail_product?.discountEvent ? detail_product?.price * (1 - detail_product?.discountEvent?.decrease) : detail_product?.price || "không có thông tin"}
                          disabled
                        />
                      </div>
                    </div>
                    <label style={{
                      width: "200px",
                      fontWeight: "bold"
                    }}>thông tin khuyến mãi</label>
                    <textarea
                      type="text"
                      defaultValue={detail_product?.discountEvent?.description || "không có thông tin"}
                      disabled
                      style={{ width: "100%", height: "75px", borderRadius: "10px", marginLeft: "20px", marginBottom: "10px" }}
                    />
                    <div className="container-detail">
                      <div className="block-input">
                        <label>tổng số lượng</label>
                        <input
                          type="text"
                          defaultValue={this.state.selectedRow.so_luong || "không có thông tin"}
                          disabled
                        />
                      </div>
                      <div className="block-input">
                        <label>trạng thái bán</label>
                        <input
                          type="text"
                          defaultValue={detail_product?.status ? "đang bán" : "ngừng bán" || "không có thông tin"}
                          disabled
                        />
                      </div>
                    </div>
                    <label style={{
                      width: "200px",
                      fontWeight: "bold"
                    }}>mô tả sản phẩm</label>
                    <textarea
                      type="text"
                      defaultValue={detail_product?.description || "không có thông tin"}
                      disabled
                      style={{ width: "100%", height: "75px", borderRadius: "10px", marginLeft: "20px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="">
          {showEditModal && (
            <div
              className="psl-modal-overlay"
              onClick={this.handeCloseEditModal}
            >
              <div
                className="psl-modal-content"
                onClick={(e) => e.stopPropagation()}
                style={{
                  width: "100%",
                  height: "700px",
                  overflowY: "auto",
                }}
              >
                <button
                  className="psl-modal-close"
                  onClick={this.handeCloseEditModal}
                >
                  ×
                </button>
                <UpdateProduct {...this.props}
                  idProduct={this.state.selectedRow.id}
                  onClose={this.handeCloseEditModal}
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
