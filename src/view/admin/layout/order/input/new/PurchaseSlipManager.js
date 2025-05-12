import React, { Component } from "react";
import "./PurchaseSlipManager.css";
import { define_nav } from "../../../../../../setting/store/const";
import ModalSupplier from "../../../../component/sub_layout/modal/modal_ncc/ModalSupplier";
import DataTable from "react-data-table-component";
import ModalShop from "../../../../component/sub_layout/modal/moda_shop/ModalShop";
import { make_id } from "../../../../../../setting/reducer/reducer";
import ModalProduct from "../../../../component/sub_layout/modal/modal_product/ModalProduct";

// Dummy product list for autocomplete popup
const PRODUCT_CATALOG = [
  { productId: 'P001', name: 'Áo thun trắng', category: 'Áo thun', color: 'Trắng', size: 'M', unitPrice: 120000 },
  { productId: 'P002', name: 'Quần jean xanh demo 001 001 001 001 001 001 001 001', category: 'Quần jean', color: 'Xanh', size: '32', unitPrice: 350000 },
  { productId: 'P003', name: 'Áo khoác đen', category: 'Áo khoác', color: 'Đen', size: 'L', unitPrice: 500000 },
  { productId: 'P004', name: 'Quần jean xanh', category: 'Quần jean', color: 'Xanh', size: '32', unitPrice: 350000 },
  { productId: 'P005', name: 'Áo khoác đen', category: 'Áo khoác', color: 'Đen', size: 'L', unitPrice: 500000 },
  { productId: 'P006', name: 'Quần jean xanh', category: 'Quần jean', color: 'Xanh', size: '32', unitPrice: 350000 },
  { productId: 'P007', name: 'Áo khoác đen', category: 'Áo khoác', color: 'Đen', size: 'L', unitPrice: 500000 },
  { productId: 'P008', name: 'Quần jean xanh', category: 'Quần jean', color: 'Xanh', size: '32', unitPrice: 350000 },
  { productId: 'P009', name: 'Áo khoác đen', category: 'Áo khoác', color: 'Đen', size: 'L', unitPrice: 500000 },
  { productId: 'P010', name: 'Quần jean xanh', category: 'Quần jean', color: 'Xanh', size: '32', unitPrice: 350000 },
  { productId: 'P011', name: 'Áo khoác đen', category: 'Áo khoác', color: 'Đen', size: 'L', unitPrice: 500000 },
  { productId: 'P012', name: 'Quần jean xanh', category: 'Quần jean', color: 'Xanh', size: '32', unitPrice: 350000 },
  { productId: 'P013', name: 'Áo khoác đen', category: 'Áo khoác', color: 'Đen', size: 'L', unitPrice: 500000 },
  { productId: 'P014', name: 'Quần jean xanh', category: 'Quần jean', color: 'Xanh', size: '32', unitPrice: 350000 },
  { productId: 'P015', name: 'Áo khoác đen', category: 'Áo khoác', color: 'Đen', size: 'L', unitPrice: 500000 },
  { productId: 'P016', name: 'Quần jean xanh', category: 'Quần jean', color: 'Xanh', size: '32', unitPrice: 350000 },
  { productId: 'P017', name: 'Áo khoác đen', category: 'Áo khoác', color: 'Đen', size: 'L', unitPrice: 500000 },
  // ... thêm sản phẩm mẫu
];

const listproduct = [
  {idShop:"",shopName:"",idCategory:"",categoryName:"",idProduct:"",productName:"",color:"",sizeProduct:"",quantity:"",price:99999},
  {idShop:"",shopName:"",idCategory:"",categoryName:"",idProduct:"",productName:"",color:"",sizeProduct:"",quantity:"",price:99999},
  {idShop:"",shopName:"",idCategory:"",categoryName:"",idProduct:"",productName:"",color:"",sizeProduct:"",quantity:"",price:99999},
  {idShop:"",shopName:"",idCategory:"",categoryName:"",idProduct:"",productName:"",color:"",sizeProduct:"",quantity:"",price:99999},
  {idShop:"",shopName:"",idCategory:"",categoryName:"",idProduct:"",productName:"",color:"",sizeProduct:"",quantity:"",price:99999},
];

const columns = [
  { name: "STT", selector: (row, index) => (index+1) },
  { name: "Tên Cửa Hàng", selector: (row) => row.shopName, sortable: true },
  { name: "Tên Danh Mục", selector: (row) => row.categoryName },
  { name: "Mã Sản Phẩm", selector: (row) => row.idProduct, sortable: true },
  { name: "Tên Sản Phẩm", selector: (row) => row.productName },
  { name: "Màu Sắc", selector: (row) => row.color },
  { name: "Size", selector: (row) => row.sizeProduct },
  { name: "Số Lượng", selector: (row) => row.quantity },
  {
    name: "Giá Nhập",
    selector: (row) => `${row.price.toLocaleString()}đ`,
  },
  {
    name: "Hành Động",
    cell: (row) => (
      <>
        <button className="bg-yellow-400 text-white px-2 py-1 rounded mr-2">
        <i class="fa-solid fa-square-pen"></i>
        </button>
        <button className="bg-red-500 text-white px-2 py-1 rounded"><i class="fa-solid fa-trash-can"></i></button>
      </>
    ),
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  },
];

export default class PurchaseSlipManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenModalSupplier: false,
      isOpenModalShop:false,
      isOpenModalProduct:false,
      searchText: "",
      listproduct: listproduct,
      data_shop_selected:{
        idShop:"",
        nameShop:""
      },
      data_order:{
        idPurchaseSlip: make_id(45),
        idCreater:"",
        dayCreate:"",
        idSupplier:"",
        totalBill:0,
        statusReceive:false,
        listProduct:[]
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
        statusReceive: ""
      },
      items: [],
      newItem: {
        shopId: '',
        productId: "",
        name: "",
        category: "",
        color: "",
        size: "",
        quantity: 1,
        unitPrice: 0
      },
      productFilter: '',
      showProductPopup: false,
      responseMessage: ""
    };
  }
  updateShopOrder = (data)=>{
    this.setState({...this.state, data_shop_selected: data});
  };
  handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    const { listproduct} = this.state;

    const filtered = listproduct.filter(
      (p) =>
        p.productName.toLowerCase().includes(value) || p.shopName.toLowerCase().includes(value) 
      || p.categoryName.toLowerCase().includes(value) || p.color.toLowerCase().includes(value) 
      || p.sizeProduct.toLowerCase().includes(value)
    );
    this.setState({ searchText: value, listproduct: filtered});
  };
  handleOpenModalSupplier = () => {
    this.setState({...this.state, isOpenModalSupplier:true});
  }
  handleOpenModalShop = () => {
    this.setState({...this.state, isOpenModalShop:true});
  }
  handleOpenModalProduct = () => {
    this.setState({...this.state, isOpenModalProduct:true});
  }

  handleSlipChange = e => {
    const { name, value } = e.target;
    this.setState(prev => ({ purchaseSlip: { ...prev.purchaseSlip, [name]: value } }));
  }

  handleItemChange = e => {
    const { name, value } = e.target;
    this.setState(prev => ({ newItem: { ...prev.newItem, [name]: value } }));
  }

  openProductPopup = () => this.setState({ showProductPopup: true, productFilter: '' });
  closeProductPopup = () => this.setState({ showProductPopup: false });

  filterProducts = () => {
    const { productFilter } = this.state;
    return PRODUCT_CATALOG.filter(p =>
      p.productId.includes(productFilter) || p.name.toLowerCase().includes(productFilter.toLowerCase())
    );
  }

  selectProduct = (prod) => {
    this.setState(prev => ({
      newItem: { ...prev.newItem, ...prod },
      showProductPopup: false
    }));
  }

  addItem = () => {
    const { newItem, items } = this.state;
    if (!newItem.shopId || !newItem.productId) {
      alert("Chọn cửa hàng và sản phẩm trước khi thêm");
      return;
    }
    this.setState({ items: [...items, newItem], newItem: { shopId: '', productId: '', name: '', category: '', color: '', size: '', quantity: 1, unitPrice: 0 } });
  }

  removeItem = idx => this.setState(prev => ({ items: prev.items.filter((_, i) => i !== idx) }));

  submitForm = async () => {
    const { purchaseSlip, items } = this.state;
    const total = items.reduce((sum, it) => sum + it.quantity * it.unitPrice, 0);
    const payload = { ...purchaseSlip, totalBill: total, items };
    try {
      const res = await fetch(
        "/api/PurchaseSlip/insertPurchaseSlip?" + new URLSearchParams({ purchaseSlip: JSON.stringify(payload) }),
        { method: "GET" }
      );
      const json = await res.json();
      this.setState({ responseMessage: json.message || "Tạo phiếu thành công" });
    } catch (err) {
      this.setState({ responseMessage: "Lỗi: " + err.message });
    }
  }

  render() {
    if (this.props.state_data.current_page.name !== define_nav.admin.newOrderInputProduct.name)
          this.props.actions.current_page({
            name_new: define_nav.admin.newOrderInputProduct.name,
            path_new: define_nav.admin.newOrderInputProduct.path,
            old_page: this.props.state_data.current_page,
          });
    const { purchaseSlip, newItem, items, productFilter, showProductPopup, responseMessage } = this.state;
    return (
      <div className="">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"/>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css"></link>
        {/* thông tin đơn hàng*/}
        <div className="row">
          <h2>Thông Tin Đơn Hàng</h2>
          <div className="row mb-3">
            <div class="form-group col-5">
              <div className="row">
              <label for="dayCreate" class="col-sm-3 col-form-label">Ngày Tạo Hóa Đơn</label>
                <div class="col-sm-7">
                  <input type="date" readonly class="form-control form-control-sm" id="dayCreate" disabled/>
                </div>
              </div>
            </div>
            <div class="form-group col-5">
              <div className="row">
                <label for="idCreater" class="col-sm-3 col-form-label">Người Tạo Hóa Đơn</label>
                <div class="col-sm-7">
                  <input type="text" class="form-control form-control-sm" id="idCreater"value={"aaaa"} disabled/>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-2">
            <div class="form-group col-5">
              <div className="row">
                <label for="idSupplier " class="col-sm-3 col-form-label">Nhà Cung Cấp</label>
                <div class="col-sm-7">
                <div className="row form-inline">
                  <div className="col-10"><input type="text" class="form-control form-control-sm" id="idSupplier "value={"aaaa"}/></div>
                  <button type="button" class="btn btn-outline-info col-2" onClick={this.handleOpenModalSupplier}><i class="bi bi-search"></i></button>
                  <ModalSupplier isOpen = {this.state.isOpenModalSupplier} onClose={() => this.setState({ isOpenModalSupplier: false })}/>
                </div>
                </div>
              </div>
            </div>
            <div class="form-group col-5">
              <div className="row">
                <label for="statusReceive" class="col-sm-4 col-form-label">Trạng Thái Đơn Hàng</label>
                <div class="col-sm-6">
                <select id="statusReceive" class="form-control form-control-sm">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div class="form-group col-5">
              <div className="row">
                <label for="totalBill" class="col-sm-3 col-form-label">Tổng Tiền</label>
                <div class="col-sm-7">
                  <input type="text" readonly class="form-control form-control-sm" id="totalBill" disabled/>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/** thông tin sản phẩm */}
        <div className="row">
          <h2>Thông Tin Sản Phẩm</h2>
          <div className="row mb-3">
            <div class="form-group col-5">
              <div className="row">
                <label for="idShop" class="col-sm-3 col-form-label">Cửa Hàng</label>
                <div class="col-sm-8">
                <div className="row form-inline">
                  <div className="col-10"><input type="text" class="form-control form-control-sm" id="idShop" value={this.state.data_shop_selected.nameShop} readOnly disabled/></div>
                  <button type="button" class="btn btn-outline-info col-2" onClick={this.handleOpenModalShop}><i class="bi bi-search"></i></button>
                  <ModalShop isOpen = {this.state.isOpenModalShop} onClose={() => this.setState({ isOpenModalShop: false })} updateShop={(data)=>this.updateShopOrder(data)}/>
                </div>
                </div>
              </div>
            </div>
            <div class="form-group col-5">
              <div className="row">
                <label for="idProduct" class="col-sm-3 col-form-label">Sản Phẩm</label>
                <div class="col-sm-8">
                <div className="row form-inline">
                  <div className="col-10"><input type="text" class="form-control form-control-sm" id="idProduct"value={"aaaa"}  readOnly disabled/></div>
                  <button type="button" class="btn btn-outline-info col-2" onClick={this.handleOpenModalProduct}><i class="bi bi-search"></i></button>
                  <ModalProduct isOpen = {this.state.isOpenModalProduct} onClose={() => this.setState({ isOpenModalProduct: false })} updateProduct={(data)=>this.updateShopOrder(data)}/>
                </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div class="form-group col-5">
              <div className="row">
                <label for="idCategoty" class="col-sm-3 col-form-label">Danh Mục</label>
                <div class="col-sm-8">
                <input type="text" class="form-control form-control-sm" id="idCategoty" value={"aaaa"} readOnly disabled/>
                </div>
              </div>
            </div>
            <div class="form-group col-3">
              <div className="row">
                <label for="idProduct" class="col-sm-2 col-form-label">Màu</label>
                <div class="col-sm-9">
                <select id="inputState" class="form-control form-control-sm">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
                </div>
              </div>
            </div>
            <div class="form-group col-3">
              <div className="row">
                <label for="size" class="col-sm-2 col-form-label">Size</label>
                <div class="col-sm-4">
                <input type="text" readonly class="form-control" id="size" value="" />
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div class="form-group col-5">
              <div className="row">
                <label for="Quantity" class="col-sm-3 col-form-label">Số Lượng</label>
                <div class="col-sm-4">
                <input type="number" class="form-control form-control-sm" id="Quantity" value={0} min={0}/>
                </div>
              </div>
            </div>
            <div class="form-group col-5">
              <div className="row">
                <label for="Price" class="col-sm-3 col-form-label">Giá Nhập</label>
                <div class="col-sm-4">
                <input type="text" class="form-control form-control-sm" id="Price" value={0} min={0}/>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div class="form-group col-5">
              <div className="row">
                <label for="totalPrice" class="col-sm-3 col-form-label">Tổng Giá Trị</label>
                <div class="col-sm-4">
                <input type="text" class="form-control form-control-sm" id="totalPrice"  value={0} min={0} readOnly disabled/>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div class="col-sm-4">
              <button type="button" class="btn btn-outline-success" onClick={this.addItem}>Thêm sản phẩm</button>
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
            columns={columns}
            data={this.state.listproduct}
            pagination
            paginationPerPage={5}
            highlightOnHover
            striped
            responsive
          />
          </div>
        </div>
        <button className="submit-btn" onClick={this.submitForm}>Tạo phiếu nhập</button>
        {responseMessage && <div className="response-msg">{responseMessage}</div>}
      </div>
    );
  }
}
