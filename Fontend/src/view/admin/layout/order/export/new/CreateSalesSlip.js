import React, { Component } from "react";
import "./CreateSalesSlip.css";
import { define_nav, urlapi } from "../../../../../../setting/store/const";
import ModalSupplier from "../../../../component/sub_layout/modal/modal_ncc/ModalSupplier";
import DataTable from "react-data-table-component";
import ModalShop from "../../../../component/sub_layout/modal/moda_shop/ModalShop";
import ModalProduct from "../../../../component/sub_layout/modal/modal_product/ModalProduct";
import ModalColor from "../../../../component/sub_layout/modal/modal_color/ModalColor";
// import "css/material-dashboard.min.css";

export default class CreateSalesSlip extends Component {
  constructor(props) {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    const day = String(now.getDate()).padStart(2, "0");

    const currentDate = `${year}-${month}-${day}`;

    super(props);
    this.state = {
      isOpenModalSupplier: false,
      isOpenModalShop: false,
      isOpenModalProduct: false,
      isOpenModalColor: false,
      searchText: "",
      currentDate: currentDate,
      data_shop_selected: {
        idShop: "",
        nameShop: "",
      },
      data_supplier_selected: {
        idSupplier: "",
        nameSupplier: "",
      },
      data_product_selected: {
        idProduct: "",
        nameProduct: "",
        nameBrand: "",
        nameCategory: "",
        nameMaterial: "",
        nameStyle: "",
        color: "",
        idColor: "",
        size: "",
        quantity: "",
        unitPrice: "",
        seri: "",
      },
      //-------------------------------------
      purchaseSlip: {
        idPurchaseSlip: "",
        idCreater: "",
        idSupplier: "",
        dayCreate: "",
        totalBill: 0,
        approveStatus: "",
        statusUpdateDate: "",
        idStatusEditor: "",
        statusReceive: "",
      },
      items: [],
      total: 0,
      productFilter: "",
      showProductPopup: false,
      responseMessage: "",
    };
    this.columns = [
      { name: "STT", selector: (row, index) => index + 1 },
      { name: "Tên Cửa Hàng", selector: (row) => row.nameShop, sortable: true },
      { name: "Tên Danh Mục", selector: (row) => row.nameCategory },
      { name: "Mã Sản Phẩm", selector: (row) => row.idProduct, sortable: true },
      { name: "Tên Sản Phẩm", selector: (row) => row.nameProduct },
      { name: "Màu Sắc", selector: (row) => row.color },
      { name: "Size", selector: (row) => row.size },
      { name: "Số Lượng", selector: (row) => row.quantity },
      {
        name: "Giá Nhập",
        selector: (row) => `${row.unitPrice.toLocaleString()}đ`,
      },
      {
        name: "Hành Động",
        cell: (row, index) => (
          <>
            <button className="bg-yellow-400 text-white px-2 py-1 rounded mr-2">
              <i class="fa-solid fa-square-pen"></i>
            </button>
            <button
              className="bg-red-500 text-white px-2 py-1 rounded"
              onClick={() => this.deleteProduct(index)}
            >
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </>
        ),
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
      },
    ];
  }
  deleteProduct = (index) => {
    let newListItem = [...this.state.items];

    if (index !== -1) {
      // Nếu đã tồn tại => thay thế
      newListItem.splice(index, 1);
    }
    const total = newListItem
      .map((item) => item.quantity * item.unitPrice)
      .reduce((sum, value) => sum + value, 0);
    console.log(newListItem);
    this.setState({ ...this.state, items: newListItem, total: total });
  };
  updateSupplier = (data) => {
    this.setState({ ...this.state, data_supplier_selected: data });
  };

  updateShopOrder = (data) => {
    this.setState({ ...this.state, data_shop_selected: data });
  };

  updateProduct = (data) => {
    this.setState((prev) => ({
      data_product_selected: { ...prev.data_product_selected, ...data },
    }));
  };

  updateColor = (data) => {
    this.setState((prev) => ({
      data_product_selected: {
        ...prev.data_product_selected,
        idColor: data.idColor,
        color: data.nameColor,
      },
    }));
  };
  handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    const { listproduct } = this.state;

    const filtered = listproduct.filter(
      (p) =>
        p.productName.toLowerCase().includes(value) ||
        p.shopName.toLowerCase().includes(value) ||
        p.categoryName.toLowerCase().includes(value) ||
        p.color.toLowerCase().includes(value) ||
        p.sizeProduct.toLowerCase().includes(value)
    );
    this.setState({ searchText: value, listproduct: filtered });
  };
  handleOpenModalSupplier = () => {
    this.setState({ ...this.state, isOpenModalSupplier: true });
  };
  handleOpenModalColor = () => {
    this.setState({ ...this.state, isOpenModalColor: true });
  };
  handleOpenModalShop = () => {
    this.setState({ ...this.state, isOpenModalShop: true });
  };
  handleOpenModalProduct = () => {
    this.setState({ ...this.state, isOpenModalProduct: true });
  };

  handleSlipChange = (e) => {
    const { name, value } = e.target;
    this.setState((prev) => ({
      purchaseSlip: { ...prev.purchaseSlip, [name]: value },
    }));
  };

  handleItemChange = (e) => {
    const { name, value } = e.target;
    this.setState((prev) => ({
      data_product_selected: { ...prev.data_product_selected, [name]: value },
    }));
  };

  openProductPopup = () =>
    this.setState({ showProductPopup: true, productFilter: "" });
  closeProductPopup = () => this.setState({ showProductPopup: false });

  selectProduct = (prod) => {
    this.setState((prev) => ({
      newItem: { ...prev.newItem, ...prod },
      showProductPopup: false,
    }));
  };

  addItem = () => {
    const { items, data_shop_selected, data_product_selected } = this.state;
    if (!data_shop_selected.idShop || !data_product_selected.idProduct) {
      alert("Chọn cửa hàng và sản phẩm trước khi thêm");
      return;
    }
    const newItem = {
      idShop: this.state.data_shop_selected.idShop,
      nameShop: this.state.data_shop_selected.nameShop,
      idProduct: this.state.data_product_selected.idProduct,
      nameCategory: this.state.data_product_selected.nameCategory,
      nameProduct: this.state.data_product_selected.nameProduct,
      color: this.state.data_product_selected.color,
      idColor: this.state.data_product_selected.idColor,
      size: this.state.data_product_selected.size,
      quantity: this.state.data_product_selected.quantity,
      unitPrice: this.state.data_product_selected.unitPrice,
      seri: this.state.data_product_selected.seri,
    };
    const existingIndex = items.findIndex(
      (item) =>
        item.idShop === newItem.idShop &&
        item.idProduct === newItem.idProduct &&
        item.idColor === newItem.idColor &&
        item.size === newItem.size &&
        item.seri === newItem.seri
    );

    let newListItem;

    if (existingIndex !== -1) {
      // Nếu đã tồn tại => thay thế
      newListItem = [...items];
      newListItem[existingIndex] = newItem;
    } else {
      // Nếu chưa có => thêm mới
      newListItem = [...items, newItem];
    }
    const total = newListItem
      .map((item) => item.quantity * item.unitPrice)
      .reduce((sum, value) => sum + value, 0);

    console.log("Total:", total); // Output: Total: 150
    this.setState({ items: newListItem, total: total });
  };

  removeItem = (idx) =>
    this.setState((prev) => ({
      items: prev.items.filter((_, i) => i !== idx),
    }));

  submitForm = () => {
    const groupedData = [];

    this.state.items.forEach((item) => {
      const existingShop = groupedData.find(
        (shop) => shop.idShop === item.idShop
      );

      const product = {
        idProduct: item.idProduct,
        nameColor: item.idColor,
        nameSize: item.size,
        quantity: item.quantity,
        price: item.unitPrice,
        seri: item.seri,
      };
      console.log(existingShop);
      if (existingShop) {
        existingShop.shoppingCartDatas.push(product);
      } else {
        groupedData.push({
          idShop: item.idShop,
          shoppingCartDatas: [product],
        });
      }
    });
    const req = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        purchaseSlip: {
          idPurchaseSlip: null,
          idCreater: this.props.state_data.user_info.id_user,
          idSupplier: this.state.data_supplier_selected.idSupplier,
          dayCreate: this.state.currentDate,
          totalBill: this.state.total,
          approveStatus: true,
          statusUpdateDate: null,
          idStatusEditor: null,
          statusReceive: false,
        },
        shopReceiveData: groupedData,
      }),
    };
    fetch(urlapi + "/api/PurchaseSlip/insertPurchaseSlip", req)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "200") alert("Thêm Cửa Hàng Thành Công!");
        console.log("Response từ server:", data);
        // cập nhật state nếu cần
      })
      .catch((error) => console.error("Lỗi POST:", error));
  };

  render() {
    if (
      this.props.state_data.current_page.name !==
      define_nav.admin.newOrderInputProduct.name
    )
      this.props.actions.current_page({
        name_new: define_nav.admin.newOrderInputProduct.name,
        path_new: define_nav.admin.newOrderInputProduct.path,
        old_page: this.props.state_data.current_page,
      });
    const {
      purchaseSlip,
      newItem,
      items,
      productFilter,
      showProductPopup,
      responseMessage,
    } = this.state;
    console.log(this.props);
    return (
      <div className="">
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css"
        ></link>
        {/* thông tin đơn hàng*/}
        <div className="row">
          <h2>Thông Tin Đơn Hàng</h2>
          <div className="row mb-3">
            <div class="form-group col-5">
              <div className="row">
                <label for="dayCreate" class="col-sm-3 col-form-label">
                  Ngày Tạo Hóa Đơn
                </label>
                <div class="col-sm-7">
                  <input
                    type="date"
                    readonly
                    class="form-control form-control-sm"
                    id="dayCreate"
                    value={this.state.currentDate}
                    disabled
                  />
                </div>
              </div>
            </div>
            <div class="form-group col-5">
              <div className="row">
                <label for="idCreater" class="col-sm-3 col-form-label">
                  Người Tạo Hóa Đơn
                </label>
                <div class="col-sm-7">
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    id="idCreater"
                    value={this.props.state_data.user_info.full_name}
                    disabled
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-2">
            <div class="form-group col-5">
              <div className="row">
                <label for="statusReceive" class="col-sm-4 col-form-label">
                  Trạng Thái Đơn Hàng
                </label>
                <div class="col-sm-6">
                  <input
                    type="text"
                    readonly
                    class="form-control form-control-sm"
                    id="statusReceive"
                    value="Chưa Phê Duyệt"
                    disabled
                  />
                </div>
              </div>
            </div><div class="form-group col-5">
              <div className="row">
                <label for="totalBill" class="col-sm-3 col-form-label">
                  Tổng Tiền
                </label>
                <div class="col-sm-7">
                  <input
                    type="text"
                    readonly
                    class="form-control form-control-sm"
                    id="totalBill"
                    value={this.state.total.toLocaleString() + " đ"}
                    disabled
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            
          </div>
        </div>
        {/** thông tin sản phẩm */}
        <div className="row">
          <h2>Thông Tin Sản Phẩm</h2>
          <div className="row mb-3">
            <div class="form-group col-5">
              <div className="row">
                <label for="idShop" class="col-sm-3 col-form-label">
                  Cửa Hàng
                </label>
                <div class="col-sm-8">
                  <div className="row form-inline">
                    <div className="col-10">
                      <input
                        type="text"
                        class="form-control form-control-sm"
                        id="idShop"
                        value={this.state.data_shop_selected.nameShop}
                        readOnly
                        disabled
                      />
                    </div>
                    <button
                      type="button"
                      class="btn btn-outline-info col-2"
                      onClick={this.handleOpenModalShop}
                    >
                      <i class="bi bi-search"></i>
                    </button>
                    <ModalShop
                      isOpen={this.state.isOpenModalShop}
                      onClose={() => this.setState({ isOpenModalShop: false })}
                      updateShop={(data) => this.updateShopOrder(data)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="form-group col-5">
              <div className="row">
                <label for="idProduct" class="col-sm-3 col-form-label">
                  Sản Phẩm
                </label>
                <div class="col-sm-8">
                  <div className="row form-inline">
                    <div className="col-10">
                      <input
                        type="text"
                        class="form-control form-control-sm"
                        id="idProduct"
                        value={this.state.data_product_selected.nameProduct}
                        readOnly
                        disabled
                      />
                    </div>
                    <button
                      type="button"
                      class="btn btn-outline-info col-2"
                      onClick={this.handleOpenModalProduct}
                    >
                      <i class="bi bi-search"></i>
                    </button>
                    <ModalProduct
                      isOpen={this.state.isOpenModalProduct}
                      onClose={() =>
                        this.setState({ isOpenModalProduct: false })
                      }
                      updateProduct={(data) => this.updateProduct(data)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div class="form-group col-5">
              <div className="row">
                <label for="idCategoty" class="col-sm-3 col-form-label">
                  Thương Hiệu
                </label>
                <div class="col-sm-8">
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    id="idCategoty"
                    value={this.state.data_product_selected.nameBrand}
                    readOnly
                    disabled
                  />
                </div>
              </div>
            </div>
            <div class="form-group col-5">
              <div className="row">
                <label for="idCategoty" class="col-sm-3 col-form-label">
                  Danh Mục
                </label>
                <div class="col-sm-8">
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    id="idCategoty"
                    value={this.state.data_product_selected.nameCategory}
                    readOnly
                    disabled
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div class="form-group col-5">
              <div className="row">
                <label for="idCategoty" class="col-sm-3 col-form-label">
                  Chất Liệu
                </label>
                <div class="col-sm-8">
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    id="idCategoty"
                    value={this.state.data_product_selected.nameMaterial}
                    readOnly
                    disabled
                  />
                </div>
              </div>
            </div>
            <div class="form-group col-5">
              <div className="row">
                <label for="idCategoty" class="col-sm-3 col-form-label">
                  Style
                </label>
                <div class="col-sm-8">
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    id="idCategoty"
                    value={this.state.data_product_selected.nameStyle}
                    readOnly
                    disabled
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="row col-6">
              <div class="form-group col-6">
                <div className="row">
                  <label for="Quantity" class="col-sm-5 col-form-label">
                    Số Lượng
                  </label>
                  <div class="col-sm-6">
                    <input
                      type="number"
                      class="form-control form-control-sm"
                      id="Quantity"
                      name="quantity"
                      onChange={this.handleItemChange}
                      value={this.state.data_product_selected.quantity}
                      min={0}
                    />
                  </div>
                </div>
              </div>
              <div class="form-group col-6">
                <div className="row">
                  <label for="Price" class="col-sm-3 col-form-label">
                    Giá Nhập
                  </label>
                  <div class="col-sm-7">
                    <input
                      type="money"
                      class="form-control form-control-sm"
                      id="Price"
                      name="unitPrice"
                      onChange={this.handleItemChange}
                      value={this.state.data_product_selected.unitPrice}
                      min={0}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row col-6">
              <div class="form-group col-6">
                <div className="row">
                  <label for="color" class="col-sm-2 col-form-label">
                    Màu
                  </label>
                  <div class="col-sm-8">
                    <div className="row form-inline">
                      <div className="col-10">
                        <input
                          type="text"
                          class="form-control form-control-sm"
                          name="color"
                          id="color"
                          value={this.state.data_product_selected.color}
                          readOnly
                          disabled
                        />
                      </div>
                      <button
                        type="button"
                        class="btn btn-outline-info col-2"
                        onClick={this.handleOpenModalColor}
                      >
                        <i class="bi bi-search"></i>
                      </button>
                      <ModalColor
                        isOpen={this.state.isOpenModalColor}
                        onClose={() =>
                          this.setState({ isOpenModalColor: false })
                        }
                        updateColor={(data) => this.updateColor(data)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group col-6">
                <div className="row">
                  <label for="size" class="col-sm-2 col-form-label">
                    Size
                  </label>
                  <div class="col-sm-9">
                    <input
                      type="text"
                      readonly
                      class="form-control form-control-sm"
                      id="size"
                      name="size"
                      onChange={this.handleItemChange}
                      value={this.state.data_product_selected.size}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div class="form-group col-5">
              <div className="row">
                <label for="seri" class="col-sm-3 col-form-label">
                  Số Seri
                </label>
                <div class="col-sm-6">
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    id="seri"
                    name="seri"
                    onChange={this.handleItemChange}
                    value={this.state.data_product_selected.seri}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div class="form-group col-5">
              <div className="row">
                <label for="totalPrice" class="col-sm-3 col-form-label">
                  Tổng Giá Trị
                </label>
                <div class="col-sm-6">
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    id="totalPrice"
                    value={(
                      this.state.data_product_selected.quantity *
                      this.state.data_product_selected.unitPrice
                    ).toLocaleString()}
                    min={0}
                    readOnly
                    disabled
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div class="col-sm-4">
              <button
                type="button"
                class="btn btn-outline-success"
                onClick={this.addItem}
              >
                Thêm sản phẩm
              </button>
            </div>
          </div>
        </div>
        {/** Danh sách sản phẩm */}
        <div className="row">
          <div className="row d-flex justify-content-between align-items-center mb-3">
            <div className="col-7"></div>
            <input
              type="text"
              placeholder="Tìm kiếm sản phẩm..."
              className="col-5 border p-2 rounded form-control-sm"
              onChange={this.handleSearch}
              value={this.state.searchText}
              style={{ float: "right" }}
            />
          </div>
          <div className="row">
            <DataTable
              columns={this.columns}
              data={this.state.items}
              pagination
              paginationPerPage={5}
              highlightOnHover
              striped
              responsive
            />
          </div>
        </div>
        <button className="submit-btn" onClick={this.submitForm}>
          Tạo phiếu nhập
        </button>
        {responseMessage && (
          <div className="response-msg">{responseMessage}</div>
        )}
      </div>
    );
  }
}
