import React, { Component } from "react";
import "./Checkout.css";
import { urlapi } from "../../../../../../setting/store/const";

export const calculateMerchandiseSubtotal = (items) =>
  items.reduce((total, item) => {
    const quantity = Number(item.quantity) || 0;
    const price = Number(item.price) || 0;
    const quantityLimit = Number(item.quantityLimit) || 0;
    const decrease = Number(item.decrease) || 0;
    const discountedQuantity =
      decrease > 0 && decrease <= 1 && quantityLimit > 0
        ? Math.min(quantity, quantityLimit)
        : 0;
    const regularQuantity = quantity - discountedQuantity;
    return (
      total +
      regularQuantity * price +
      discountedQuantity * price * (1 - decrease)
    );
  }, 0);

export default class Checkout extends Component {
  constructor(props) {
    super(props);
    const cartItems = this.props.state_data.data_page?.cartItems || [];
    const subTotal = calculateMerchandiseSubtotal(cartItems);
    this.state = {
      fullName: this.props.state_data.user_info.full_name || "",
      phone: this.props.state_data.user_info.phone_number || "",
      province: "",
      provinceCode: "",
      district: "",
      districtCode: "",
      address: "",
      provinceList: [],
      districtList: [],
      cartItems,
      // Kết quả từ API GetShopByInventory
      checkoutShopResult: null,
      loadingShop: false,
      vouchers: [],
      selectedVoucher: "",
      subTotal,
      discount: 0,
      totalPrice: Math.round(subTotal),
      shippingFee: 0,
      isSubmitting: false,
      orderSubmitted: false,
    };
    this.orderSubmissionInProgress = false;
  }

  componentDidMount() {
    this.loadVouchers();
    this.loadProvinces();
  }

  componentDidUpdate(prevProps, prevState) {
    // Load quận/huyện khi đổi tỉnh
    if (this.state.provinceCode && this.state.provinceCode !== prevState.provinceCode) {
      fetch(urlapi + "/api/District/Sellect?idProvince=" + this.state.provinceCode)
        .then((res) => res.json())
        .then((data) => {
          if (data.status === "200") this.setState({ districtList: data.data });
        })
        .catch((err) => console.error(err));
    }

    // Gọi API tìm shop khi đã chọn đủ tỉnh + quận
    if (
      this.state.district &&
      this.state.province &&
      (this.state.district !== prevState.district ||
        this.state.province !== prevState.province)
    ) {
      this.loadShopInfo();
    }
  }

  loadProvinces() {
    fetch(urlapi + "/api/Province/SellectAll")
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "200") this.setState({ provinceList: data.data });
      })
      .catch((err) => console.error(err));
  }

  loadVouchers() {
    fetch(
      urlapi +
        "/api/UserDiscountCode/sellectForOrder?idUser=" +
        this.props.state_data.user_info.id_user +
        "&minimumOrderValue=" +
        Math.floor(this.state.subTotal)
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "200") this.setState({ vouchers: data.data });
      })
      .catch((err) => console.error(err));
  }

  // Gọi API lấy thông tin shop giao hàng
  async loadShopInfo() {
    const { cartItems, district, province } = this.state;
    if (!district || !province || cartItems.length === 0) return;

    this.setState({ loadingShop: true, checkoutShopResult: null });

    // Format địa chỉ: "Quận/Huyện, Tỉnh/Thành phố"
    const customerAddress = `${district}, ${province}`;

    // Map cartItems sang format API cần
    const body = cartItems.map((item) => ({
      idDetail: item.idDetail,
      productName: item.nameProduct,
      quantity: item.quantity,
      price: item.price,
    }));

    try {
      const res = await fetch(
        urlapi +
          "/api/SalesSlip/GetShopByInventory?customerAddress=" +
          encodeURIComponent(customerAddress),
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      const data = await res.json();
      console.log("Shop result:", data);

      if (data.status === "200") {
        const result = data.data;
        this.setState({
          checkoutShopResult: result,
          shippingFee: result.totalShipping || 0,
          loadingShop: false,
        }, () => this.calculateTotal(this.state.cartItems, this.state.selectedVoucher));
      } else {
        this.setState({ loadingShop: false });
      }
    } catch (err) {
      console.error("Lỗi load shop:", err);
      this.setState({ loadingShop: false });
    }
  }

  handleSelectProvince = (e) => {
    const code = e.target.value;
    const selected = this.state.provinceList.find(
      (p) => String(p.idProvince) === String(code)
    );
    this.setState({
      provinceCode: code,
      province: selected ? selected.nameProvince : "",
      district: "",
      districtCode: "",
      districtList: [],
      checkoutShopResult: null,
      shippingFee: 0,
    });
  };

  handleSelectDistrict = (e) => {
    const code = e.target.value;
    const selected = this.state.districtList.find(
      (d) => String(d.idDistrict) === String(code)
    );
    this.setState({
      districtCode: code,
      district: selected ? selected.nameDistrict : "",
      checkoutShopResult: null,
    });
  };

  calculateTotal(items, voucherId, voucherList) {
    const subTotal = calculateMerchandiseSubtotal(items);

    let discount = 0;
    const list = voucherList || this.state.vouchers;
    const voucher = list.find((v) => v.discountCode === voucherId);
    if (voucher) {
      if (voucher.type === "PERCENT") {
        discount = (subTotal * voucher.discount) / 100;
        if (voucher.maxDiscountValue && discount > voucher.maxDiscountValue)
          discount = voucher.maxDiscountValue;
      } else {
        discount = voucher.discount;
      }
    }
    discount = Math.min(Math.max(discount, 0), subTotal);

    const totalPrice = Math.max(
      Math.round(subTotal - discount) + this.state.shippingFee,
      0
    );
    this.setState({ subTotal, discount, totalPrice });
  }

  handleSelectVoucher = (e) => {
    const voucherId = e.target.value;
    this.setState({ selectedVoucher: voucherId }, () => {
      this.calculateTotal(this.state.cartItems, voucherId);
    });
  };
async createOrder() {
  if (this.orderSubmissionInProgress || this.state.orderSubmitted) return;
  const {
    fullName, phone, province, district, address,
    cartItems, checkoutShopResult, selectedVoucher,
    subTotal, discount, shippingFee,
  } = this.state;

  // Validate
  if (!fullName || !phone || !province || !district || !address) {
    alert("Vui lòng điền đầy đủ thông tin người nhận");
    return;
  }
  if (!checkoutShopResult || checkoutShopResult.shopGroups.length === 0) {
    alert("Không tìm được cửa hàng giao hàng, vui lòng thử lại");
    return;
  }

  this.orderSubmissionInProgress = true;
  this.setState({ isSubmitting: true });

  const userId = this.props.state_data.user_info.id_user;
  const deliveryAddress = `${address}, ${district}, ${province}`;
  const totalBill = Math.max(subTotal - discount, 0);

  // Build shopDeliveryData từ kết quả API shop
  const shopDeliveryData = checkoutShopResult.shopGroups.map((group) => ({
    idShop: group.idShop,
    shoppingCartData: group.products.map((p) => {
      // Lấy thêm price từ cartItems gốc nếu cần
      const originalItem = cartItems.find((c) => c.idDetail === p.idDetailProduct);
      return {
        idDetail: p.idDetailProduct,
        productName: p.productName,
        quantity: p.quantity,
        price: originalItem ? originalItem.price : p.price,
      };
    }),
  }));

  const body = {
    salesSlipData: {
      idCreater: userId,
      idClient: userId,
      createDate: new Date().toISOString().split("T")[0], // format: yyyy-MM-dd
      deliveryAddress: deliveryAddress,
      totalBill: totalBill,
      shippingFee: shippingFee,
      note: "",
      discountcode: selectedVoucher || null,
      comment: "",
    },
    shopDeliveryData: shopDeliveryData,
  };

  console.log("Order body:", JSON.stringify(body, null, 2));

  try {
    const res = await fetch(urlapi + "/api/SalesSlip/insertSalesSlip", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await res.json();
    console.log("Order result:", data);

    if (data.status === "200") {
      this.setState({ orderSubmitted: true });
      alert("Đặt hàng thành công!");
      // Có thể redirect về trang chủ hoặc trang đơn hàng
      // this.props.navigate("/orders");
    } else {
      alert("Đặt hàng thất bại, vui lòng thử lại");
    }
  } catch (err) {
    console.error("Lỗi đặt hàng:", err);
    alert("Có lỗi xảy ra khi đặt hàng");
  } finally {
    this.orderSubmissionInProgress = false;
    this.setState({ isSubmitting: false });
  }
}

  // Render phần thông tin shop
  renderShopInfo() {
    const { loadingShop, checkoutShopResult } = this.state;

    if (loadingShop) {
      return <div className="text-muted">Đang tìm cửa hàng giao hàng...</div>;
    }

    if (!checkoutShopResult) {
      return <div className="text-muted">Vui lòng chọn địa chỉ giao hàng</div>;
    }

    const { needSplit, shopGroups, unfulfilledProducts } = checkoutShopResult;

    return (
      <>
        {/* Cảnh báo sản phẩm không đủ hàng */}
        {unfulfilledProducts && unfulfilledProducts.length > 0 && (
          <div className="alert alert-warning">
            Một số sản phẩm hiện không đủ hàng tại bất kỳ cửa hàng nào.
          </div>
        )}

        {/* Hiển thị từng shop */}
        {shopGroups.map((group, index) => (
          <div key={group.idShop} className="shop-group mb-3">
            {needSplit && (
              <div className="shop-split-badge">
                Đơn {index + 1}/{shopGroups.length}
              </div>
            )}
            <div className="shop-name">
              <i className="bi bi-shop"></i> {group.nameShop}
            </div>
            <div className="shop-address text-muted" style={{ fontSize: 13 }}>
              Địa chỉ: {group.address}
            </div>
            <div className="shop-meta text-muted" style={{ fontSize: 13 }}>
              <span>Khoảng cách: {group.distanceKm.toFixed(1)} km</span>
              <span className="ms-3">
                Phí ship: {group.shippingFee.toLocaleString()}đ
              </span>
            </div>
            {/* Danh sách sản phẩm shop này giao */}
            <ul className="shop-product-list mt-2">
              {group.products.map((p) => (
                <li key={p.idDetailProduct} style={{ fontSize: 13 }}>
                  {p.productName} x{p.quantity}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {needSplit && (
          <div className="alert alert-info" style={{ fontSize: 13 }}>
            Không có cửa hàng nào đủ tất cả sản phẩm — đơn sẽ được tách thành{" "}
            {shopGroups.length} đơn giao từ các cửa hàng khác nhau.
            <br /> Nếu thấy ship quá cao khi tách đơn thì có thể xóa đơn có ship cao để chỉ mua từ cửa hàng gần hơn.
          </div>

        )}
      </>
    );
  }

  render() {
    const {
      cartItems, vouchers, selectedVoucher,
      subTotal, discount, totalPrice, shippingFee,
      provinceList, districtList, provinceCode, districtCode,
    } = this.state;

    return (
      <div className="container checkout-container mt-4">
        <div className="row">
          <div className="col-lg-8">
            {/* SHOP INFO */}
            <div className="card mb-3">
              <div className="card-body">
                <h4>Thông tin shop giao hàng</h4>
                <hr />
                {this.renderShopInfo()}
              </div>
            </div>

            {/* PRODUCT LIST */}
            <div className="card mb-3">
              <div className="card-body">
                <h4>Danh sách sản phẩm ({cartItems.length})</h4>
                <hr />
                {cartItems.length === 0 && <div className="empty-cart">Giỏ hàng trống</div>}
                {cartItems.map((item) => (
                  <div key={item.idShoppingCart} className="product-item">
                    <img src={urlapi + "/api/Image/" + item.path} alt={item.nameProduct} className="product-image" />
                    <div className="product-detail">
                      <div className="product-name">{item.nameProduct}</div>
                      {(item.size || item.color) && (
                        <div className="product-variant">
                          {item.size && <span>Size: {item.size}</span>}
                          {item.color && <span>Màu: {item.color}</span>}
                        </div>
                      )}
                      <div className="product-bottom">
                        <span className="product-qty">x{item.quantity}</span>
                        <span className="product-price">{item.price.toLocaleString()}đ</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* THÔNG TIN NGƯỜI NHẬN */}
            <div className="card mb-3">
              <div className="card-body">
                <h4>Thông tin người nhận</h4>
                <div className="mb-3">
                  <label>Người nhận</label>
                  <input className="form-control" value={this.state.fullName}
                    onChange={(e) => this.setState({ fullName: e.target.value })} />
                </div>
                <div className="mb-3">
                  <label>Số điện thoại</label>
                  <input className="form-control" value={this.state.phone}
                    onChange={(e) => this.setState({ phone: e.target.value })} />
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Tỉnh / Thành phố</label>
                    <select className="form-control" value={provinceCode} onChange={this.handleSelectProvince}>
                      <option value="">-- Chọn Tỉnh/Thành phố --</option>
                      {provinceList.map((p) => (
                        <option key={p.idProvince} value={p.idProvince}>{p.nameProvince}</option>
                      ))}
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label>Quận / Huyện</label>
                    <select className="form-control" value={districtCode}
                      onChange={this.handleSelectDistrict} disabled={!provinceCode}>
                      <option value="">-- Chọn Quận/Huyện --</option>
                      {districtList.map((d) => (
                        <option key={d.idDistrict} value={d.idDistrict}>{d.nameDistrict}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="mt-3">
                  <label>Địa chỉ chi tiết</label>
                  <textarea className="form-control" rows="3" value={this.state.address}
                    disabled={!districtCode}
                    onChange={(e) => this.setState({ address: e.target.value })} />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="col-lg-4">
            <div className="card mb-3">
              <div className="card-body">
                <h4>Voucher</h4>
                <hr />
                {vouchers.length === 0 && <div className="empty-voucher">Không có voucher phù hợp</div>}
                {vouchers.map((v) => (
                  <label key={v.discountCode} className="voucher-item">
                    <input type="radio" name="voucher" value={v.discountCode}
                      checked={selectedVoucher === v.discountCode}
                      onChange={this.handleSelectVoucher} />
                    <div className="voucher-content">
                      <div className="voucher-title">{v.code}</div>
                      <div className="voucher-desc">
                        {v.type === "PERCENT"
                          ? `Giảm ${v.discount}%${
                              v.maxDiscountValue > 0
                                ? ` (tối đa ${v.maxDiscountValue.toLocaleString()}đ)`
                                : ""
                            }`
                          : `Giảm ${v.discount.toLocaleString()}đ`}
                      </div>
                    </div>
                  </label>
                ))}
                {selectedVoucher && (
                  <button className="btn-clear-voucher"
                    onClick={() => this.handleSelectVoucher({ target: { value: "" } })}>
                    Bỏ chọn voucher
                  </button>
                )}
              </div>
            </div>

            <div className="card order-summary-card">
              <div className="card-body">
                <h4>Đơn hàng</h4>
                <hr />
                <div className="summary-row"><span>Tạm tính</span><span>{subTotal.toLocaleString()}đ</span></div>
                <div className="summary-row">
                  <span>Giảm giá</span>
                  <span className="discount-value">{discount > 0 ? `-${discount.toLocaleString()}đ` : "0đ"}</span>
                </div>
                <div className="summary-row"><span>Phí vận chuyển</span><span>{shippingFee.toLocaleString()}đ</span></div>
                <hr />
                <div className="summary-row total-row"><span>Tổng đơn</span><span>{totalPrice.toLocaleString()}đ</span></div>
                <button
                  className="btn btn-dark w-100 mt-3"
                  onClick={() => this.createOrder()}
                  disabled={this.state.isSubmitting || this.state.orderSubmitted}
                >
                  {this.state.isSubmitting
                    ? "ĐANG ĐẶT HÀNG..."
                    : this.state.orderSubmitted
                      ? "ĐÃ ĐẶT HÀNG"
                      : "ĐẶT HÀNG"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}