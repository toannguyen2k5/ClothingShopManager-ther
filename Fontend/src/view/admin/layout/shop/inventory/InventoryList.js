import React, { Component } from "react";
import DataTable from "react-data-table-component";
import { urlapi, define_nav } from "../../../../../setting/store/const";
import "../../product/list/style.css";
import "../../order/input/list/PurchaseSlipList.css";

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

class InventoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allProducts: [],
      filteredProducts: [],
      searchText: "",
      filterShop: "",
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
      detail_product: null,
      shopInCharges: [],
    };
  }

  componentDidMount() {
    fetch(
      `${urlapi}/api/ListShopInCharge/sellect?idStaff=${this.props.state_data.user_info.id_user}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.status && data.status == "200") {
          this.setState({ shopInCharges: data.data }, () => {
            // Bug fix #3: nạp danh sách sản phẩm ngay khi có danh sách shop,
            // dùng shop đầu tiên (hoặc "" = tất cả shop) làm mặc định.
            const defaultShop =
              data.data.length > 0 ? data.data[0].idShop : "";
            this.setState({ filterShop: defaultShop });
            this.getInventoryList(defaultShop);
          });
        }
      })
      .catch((error) => {
        console.error("Lỗi khi fetch:", error);
      });

    document.addEventListener("click", this.closeContextMenu);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.closeContextMenu);
  }

  // Bug fix #1: mockProducts giờ là biến cục bộ, được khởi tạo lại mỗi lần gọi
  // thay vì biến module-level bị cộng dồn qua từng lần fetch.
  getInventoryList = (idShop) => {
    this.setState({ itemsLoading: true });
    fetch(`${urlapi}/api/product/inventory/select/all/all/?idShop=${idShop}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.status && data.status == "200") {
          const mockProducts = data.data.map((item, index) => ({
            index: index + 1,
            id: item.idProduct,
            id_shop: idShop,
            id_ncc: item.nameBrand,
            ten_san_pham: item.nameProduct,
            id_style: item.nameStyle,
            id_danh_muc: item.nameCategory,
            trang_thai: item.status,
            so_luong: item.quantity || 0,
            gia_ban: item.price || 0,
          }));

          this.setState((prevState) => {
            // Áp lại bộ lọc tìm kiếm hiện tại lên dữ liệu mới nhận được
            const filtered = mockProducts.filter((p) =>
              p.ten_san_pham.toLowerCase().includes(prevState.searchText)
            );
            return {
              allProducts: mockProducts,
              filteredProducts: filtered,
            };
          });
        }
        console.log("data inventory : ", data);
      })
      .catch((error) => {
        console.error("Lỗi khi fetch:", error);
      })
      .finally(() => {
        this.setState({ itemsLoading: false });
      });
  };

  closeContextMenu = () => {
    this.setState({ showContextMenu: false });
  };

  handleOpenModelDetail = () => {
    if (!this.state.selectedRow) return;
    fetch(
      urlapi +
      "/api/detailproduct/sellect/detailProperty?idProduct=" +
      this.state.selectedRow.id
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.status && data.status === "200") {
          this.setState({ showModelDetail: true, detail_product: data.data });
          console.log("detailProperty : ", data);
        }
      })
      .catch((error) => console.error(error));
  };

  handleCloseModelDetail = () => {
    this.setState({ showModelDetail: false });
  };

  // Bug fix #2: không fetch lại API mỗi lần gõ phím. Lọc trực tiếp trên
  // dữ liệu đã có trong state (allProducts) — không còn race condition
  // giữa dữ liệu cũ/mới.
  handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    const { allProducts, filterShop } = this.state;

    const filtered = allProducts.filter(
      (p) =>
        p.ten_san_pham.toLowerCase().includes(value) &&
        (filterShop === "" || p.id_shop === filterShop)
    );

    this.setState({ searchText: value, filteredProducts: filtered });
  };

  // Bug fix #4: dropdown này liệt kê SHOP (idShop/nameShop), nên khi đổi
  // giá trị cần load lại tồn kho theo shop đó, chứ không phải lọc theo
  // trang_thai (đó là trạng thái bán, không phải shop).
  handleStatusFilter = (e) => {
    const value = e.target.value;
    this.setState({ filterShop: value }, () => {
      this.getInventoryList(value);
    });
  };

  handlePerPageChange = (e) => {
    this.setState({ perPage: parseInt(e.target.value) });
  };

  handleRowClick = (row) => {
    this.setState(
      { showModalDetail: true, nameProduct: row.ten_san_pham },
      () => {
        fetch(
          `${urlapi}/api/detailproduct/sellect/detailPropertyByShop?idProduct=${row.id}&idShop=${this.state.filterShop}`
        )
          .then((response) => response.json())
          .then((data) => {
            if (data.status && data.status == "200") {
              this.setState({ DetailProducts: data.data});
            }
            console.log("data detail :", data);
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
      showModelDetail,
      detail_product,
      selectedRow,
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

    // Bug fix (minor): tránh crash nếu API trả về field null/undefined
    const filteredItems = DetailProducts.filter(
      (item) =>
        (item.numberSeri || "").toLowerCase().includes(itemSearchText.toLowerCase()) ||
        (item.nameColor || "").toLowerCase().includes(itemSearchText.toLowerCase()) ||
        (item.nameSize || "").toLowerCase().includes(itemSearchText.toLowerCase())
    );
    const detailColumns = [
      { name: "Mã Detail", selector: (row) => row.idDetail, sortable: true },
      { name: "Color", selector: (row) => row.nameColor, sortable: true },
      { name: "Size", selector: (row) => row.nameSize, sortable: true },
      { name: "Số seri", selector: (row) => row.numberSeri, sortable: true },
      { name: "Quantity", selector: (row) => row.quantity, sortable: true },
      { name: "Trạng Thái Bán", selector: (row) => (row.sellStatus ? "✔️" : "❌"), grow: 1 }
    ];

    return (
      <>
        {this.state.showContextMenu && (
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
          </div>
        )}
        <div className="row">
          <div className="flex flex-wrap gap-4 mb-4">
            <select
              onChange={this.handleStatusFilter}
              value={this.state.filterShop}
              className="border p-2 rounded form-control-sm"
              style={{ float: "left" }}
            >
              <option value="">Tất cả shop</option>
              {this.state.shopInCharges.length > 0 &&
                this.state.shopInCharges.map((shop, index) => (
                  <option key={index} value={shop.idShop}>
                    {shop.nameShop}
                  </option>
                ))}
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
            progressPending={itemsLoading}
            pagination
            paginationPerPage={this.state.perPage}
            highlightOnHover
            striped
            responsive
            onRowDoubleClicked={(row, event) => {
              this.setState(
                {
                  selectedRow: row,
                  showContextMenu: true,
                  contextMenuX: event.clientX,
                  contextMenuY: event.clientY,
                },
                () => console.log("selectedRow : ", this.state.selectedRow)
              );
            }}
          />
        </div>
        <div className="">
          {showModalDetail && (
            <div
              className="psl-modal-overlay"
              onClick={() => this.setState({ showModalDetail: false })}
            >
              <div
                className="psl-modal-content"
                onClick={(e) => e.stopPropagation()}
                style={{ width: "100%", height: "530px", overflowY: "auto" }}
              >
                <button
                  className="psl-modal-close"
                  onClick={() => this.setState({ showModalDetail: false })}
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
                  subHeaderComponent={
                    <input
                      type="text"
                      placeholder="Tìm kiếm số seri / màu / size..."
                      className="psl-search"
                      value={itemSearchText}
                      onChange={(e) =>
                        this.setState({ itemSearchText: e.target.value })
                      }
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
              onClick={() => this.setState({ showModelDetail: false })}
            >
              <div
                className="psl-modal-content"
                onClick={(e) => e.stopPropagation()}
                style={{ width: "100%", height: "700px", overflowY: "auto" }}
              >
                <button
                  className="psl-modal-close"
                  onClick={() => this.setState({ showModelDetail: false })}
                >
                  ×
                </button>
                <div className="container-detail">
                  <div className="container-hafl">
                    <div className="image-main">
                      {detail_product?.images
                        ?.filter((img) => img.main)
                        .map((img, index) => (
                          <img
                            key={index}
                            src={
                              img.path
                                ? urlapi + "/api/Image/" + img.path
                                : "/path/to/default-image.jpg"
                            }
                            alt="Product Image"
                            style={{
                              width: "80%",
                              height: "auto",
                              borderRadius: "10px",
                            }}
                          />
                        ))}
                    </div>
                    <div className="image-second">
                      {detail_product?.images
                        ?.filter((img) => !img.main)
                        .map((img, index) => (
                          <img
                            key={index}
                            src={
                              img.path
                                ? urlapi + "/api/Image/" + img.path
                                : "/path/to/default-image.jpg"
                            }
                            alt="Product Image"
                            style={{
                              width: "auto",
                              height: "115px",
                              borderRadius: "10px",
                              marginRight: "5px",
                            }}
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
                        defaultValue={
                          detail_product?.idProduct || "không có thông tin"
                        }
                        disabled
                      />
                    </div>
                    <div className="block-input">
                      <label>tên sản phẩm</label>
                      <input
                        type="text"
                        defaultValue={
                          detail_product?.nameProduct || "không có thông tin"
                        }
                        disabled
                      />
                    </div>
                    <div className="container-detail">
                      <div className="block-input">
                        <label>loại sản phẩm</label>
                        <input
                          type="text"
                          defaultValue={
                            detail_product?.nameStyle || "không có thông tin"
                          }
                          disabled
                        />
                      </div>
                      <div className="block-input">
                        <label>chất liệu</label>
                        <input
                          type="text"
                          defaultValue={
                            detail_product?.nameMaterial ||
                            "không có thông tin"
                          }
                          disabled
                        />
                      </div>
                    </div>
                    <div className="container-detail">
                      <div className="block-input">
                        <label>phân loại sản phẩm</label>
                        <input
                          type="text"
                          defaultValue={
                            detail_product?.nameCategory ||
                            "không có thông tin"
                          }
                          disabled
                        />
                      </div>
                      <div className="block-input">
                        <label>tên thương hiệu</label>
                        <input
                          type="text"
                          defaultValue={
                            detail_product?.nameBrand || "không có thông tin"
                          }
                          disabled
                        />
                      </div>
                    </div>
                    <div className="container-detail">
                      <div className="block-input">
                        <label>giá gốc</label>
                        <input
                          type="text"
                          defaultValue={
                            detail_product?.price || "không có thông tin"
                          }
                          disabled
                        />
                      </div>
                      <div className="block-input">
                        <label>giá sau khuyến mãi</label>
                        <input
                          type="text"
                          defaultValue={
                            detail_product?.discountEvent
                              ? detail_product.price *
                              (1 - detail_product.discountEvent.decrease)
                              : detail_product?.price || "không có thông tin"
                          }
                          disabled
                        />
                      </div>
                    </div>
                    <label style={{ width: "200px", fontWeight: "bold" }}>
                      thông tin khuyến mãi
                    </label>
                    <textarea
                      defaultValue={
                        detail_product?.discountEvent?.description ||
                        "không có thông tin"
                      }
                      disabled
                      style={{
                        width: "100%",
                        height: "75px",
                        borderRadius: "10px",
                        marginLeft: "20px",
                        marginBottom: "10px",
                      }}
                    />
                    <div className="container-detail">
                      <div className="block-input">
                        <label>tổng số lượng</label>
                        <input
                          type="text"
                          defaultValue={
                            selectedRow?.so_luong || "không có thông tin"
                          }
                          disabled
                        />
                      </div>
                      <div className="block-input">
                        <label>trạng thái bán</label>
                        <input
                          type="text"
                          defaultValue={
                            detail_product
                              ? detail_product.status
                                ? "đang bán"
                                : "ngừng bán"
                              : "không có thông tin"
                          }
                          disabled
                        />
                      </div>
                    </div>
                    <label style={{ width: "200px", fontWeight: "bold" }}>
                      mô tả sản phẩm
                    </label>
                    <textarea
                      defaultValue={
                        detail_product?.description || "không có thông tin"
                      }
                      disabled
                      style={{
                        width: "100%",
                        height: "75px",
                        borderRadius: "10px",
                        marginLeft: "20px",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </>
    );
  }
}

export default InventoryList;