import React, { Component } from "react";
import { urlapi } from "../../../../../../setting/store/const";
import "./OrderUser.css";

class OrderUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slips: [],
      loading: true,
      error: null,
      searchText: "",
      selectedSlipId: null,
      slipItems: [],
      itemsLoading: false,
      showModal: false,
      itemSearchText: "",
      cancellingSlipId: null,
    };
  }

  componentDidMount() {
    this.fetchSlips();
  }

  fetchSlips = async () => {
    try {
      const response = await fetch(
        urlapi +
          "/api/SalesSlip/SelectByIdClient?idClient=" +
          this.props.state_data.user_info.id_user
      );
      const data = await response.json();
      if (data.status !== "200") {
        throw new Error("Không thể tải danh sách đơn hàng");
      }
      this.setState({ slips: data.data || [], loading: false, error: null });
    } catch (error) {
      console.error("Lỗi tải đơn hàng:", error);
      this.setState({ loading: false, error: "Không thể tải danh sách đơn hàng." });
    }
  };

  fetchSlipItems = async (slipId) => {
    this.setState({
      itemsLoading: true,
      selectedSlipId: slipId,
      showModal: true,
      slipItems: [],
      itemSearchText: "",
    });

    try {
      const response = await fetch(
        urlapi + "/api/SalesSlip/SelectDetail?idSalesSlip=" + encodeURIComponent(slipId)
      );
      const data = await response.json();
      if (data.status !== "200") {
        throw new Error("Không thể tải chi tiết đơn hàng");
      }
      this.setState({ slipItems: data.data || [] });
    } catch (error) {
      console.error("Lỗi tải chi tiết đơn hàng:", error);
      alert("Không thể tải chi tiết đơn hàng.");
    } finally {
      this.setState({ itemsLoading: false });
    }
  };

  closeModal = () => {
    this.setState({
      showModal: false,
      selectedSlipId: null,
      slipItems: [],
      itemSearchText: "",
    });
  };

  handleDeleteSlip = async (slipId) => {
    if (
      this.state.cancellingSlipId ||
      !window.confirm("Bạn có chắc muốn hủy đơn hàng " + slipId + "?")
    ) {
      return;
    }

    this.setState({ cancellingSlipId: slipId });
    try {
      const response = await fetch(urlapi + "/api/SalesSlip/cancel", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          idSalesSlip: slipId,
          idClient: this.props.state_data.user_info.id_user,
        }),
      });
      const data = await response.json();
      if (data.status === "200") {
        this.setState((prev) => ({
          slips: prev.slips.map((slip) =>
            slip.idSalesSlip === slipId
              ? { ...slip, deliveryStatus: "SCd005" }
              : slip
          ),
        }));
        alert("Đã hủy đơn hàng và hoàn lại tồn kho.");
      } else {
        alert("Không thể hủy đơn hàng. Đơn có thể đã được duyệt hoặc đã hủy.");
        this.fetchSlips();
      }
    } catch (error) {
      console.error("Lỗi hủy đơn hàng:", error);
      alert("Có lỗi xảy ra khi hủy đơn hàng.");
    } finally {
      this.setState({ cancellingSlipId: null });
    }
  };

  getStatus = (status) => {
    const statusMap = {
      SCd001: { label: "Chưa duyệt", className: "pending" },
      SCd002: { label: "Đã duyệt", className: "approved" },
      SCd003: { label: "Đang giao hàng", className: "shipping" },
      SCd004: { label: "Hoàn thành", className: "completed" },
      SCd005: { label: "Đã hủy", className: "cancelled" },
    };
    return statusMap[status] || { label: "Không xác định", className: "unknown" };
  };

  render() {
    const {
      slips,
      loading,
      error,
      searchText,
      showModal,
      selectedSlipId,
      slipItems,
      itemsLoading,
      itemSearchText,
      cancellingSlipId,
    } = this.state;
    const normalizedSearch = searchText.trim().toLowerCase();
    const filteredSlips = slips.filter((slip) =>
      [
        slip.idSalesSlip,
        slip.nameCreate,
        slip.nameClient,
        slip.deliveryAddress,
      ].some((value) => String(value || "").toLowerCase().includes(normalizedSearch))
    );
    const selectedSlip = slips.find((slip) => slip.idSalesSlip === selectedSlipId);
    const normalizedItemSearch = itemSearchText.trim().toLowerCase();
    const filteredItems = slipItems.filter((item) =>
      [
        item.idShop,
        item.idProduct,
        item.nameProduct,
        item.color,
        item.size,
      ].some((value) => String(value || "").toLowerCase().includes(normalizedItemSearch))
    );

    return (
      <div className="col-xs-12 col-sm-9 col-md-9 accounts-right">
        <section className="order-user">
          <div className="order-user__header">
            <div>
              <h2>Đơn hàng của tôi</h2>
              <p>Theo dõi trạng thái và thông tin các đơn hàng của bạn.</p>
            </div>
            <input
              type="search"
              placeholder="Tìm mã đơn, địa chỉ..."
              className="order-user__search"
              value={searchText}
              onChange={(event) => this.setState({ searchText: event.target.value })}
              aria-label="Tìm kiếm đơn hàng"
            />
          </div>

          {loading && <div className="order-user__message">Đang tải đơn hàng...</div>}
          {!loading && error && (
            <div className="order-user__message order-user__message--error">{error}</div>
          )}
          {!loading && !error && filteredSlips.length === 0 && (
            <div className="order-user__message">
              {slips.length === 0
                ? "Bạn chưa có đơn hàng nào."
                : "Không tìm thấy đơn hàng phù hợp."}
            </div>
          )}

          {!loading && !error && filteredSlips.length > 0 && (
            <div className="order-user__scrollpanel" role="region" aria-label="Danh sách đơn hàng">
              <div className="order-user__grid">
                {filteredSlips.map((slip) => {
                  const status = this.getStatus(slip.deliveryStatus);
                  return (
                    <article className="order-card" key={slip.idSalesSlip}>
                      <div className="order-card__top">
                        <div>
                          <span className="order-card__eyebrow">Mã đơn hàng</span>
                          <h3>{slip.idSalesSlip}</h3>
                        </div>
                        <span className={`order-status order-status--${status.className}`}>
                          {status.label}
                        </span>
                      </div>
                      <div className="order-card__date">
                        <span>Ngày đặt</span>
                        <strong>{slip.createDate || "—"}</strong>
                      </div>
                      <div className="order-card__address">
                        <span>Địa chỉ nhận hàng</span>
                        <p>{slip.deliveryAddress || "Chưa có địa chỉ"}</p>
                      </div>

                      <div className="order-card__totals">
                        <div>
                          <span>Phí vận chuyển</span>
                          <strong>{Number(slip.shippingFee || 0).toLocaleString()}đ</strong>
                        </div>
                        <div className="order-card__grand-total">
                          <span>Tổng tiền hàng</span>
                          <strong>{Number(slip.totalBill || 0).toLocaleString()}đ</strong>
                        </div>
                      </div>

                      <div className="order-card__actions">
                        <button
                          type="button"
                          className="order-button order-button--details"
                          onClick={() => this.fetchSlipItems(slip.idSalesSlip)}
                        >
                          Xem chi tiết
                        </button>
                        {slip.deliveryStatus === "SCd001" && (
                          <button
                            type="button"
                            className="order-button order-button--cancel"
                            disabled={Boolean(cancellingSlipId)}
                            onClick={() => this.handleDeleteSlip(slip.idSalesSlip)}
                          >
                            {cancellingSlipId === slip.idSalesSlip
                              ? "Đang hủy..."
                              : "Hủy đơn"}
                          </button>
                        )}
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          )}
        </section>

        {showModal && (
          <div className="order-modal-overlay" onClick={this.closeModal}>
            <section
              className="order-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="order-modal-title"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className="order-modal__close"
                onClick={this.closeModal}
                aria-label="Đóng chi tiết đơn hàng"
              >
                ×
              </button>
              <h2 id="order-modal-title">Chi tiết đơn hàng</h2>

              {selectedSlip && (
                <div className="order-modal__summary">
                  <div>
                    <span>Mã đơn</span>
                    <strong>{selectedSlip.idSalesSlip}</strong>
                  </div>
                  <div>
                    <span>Ngày đặt</span>
                    <strong>{selectedSlip.createDate || "—"}</strong>
                  </div>
                  <div>
                    <span>Địa chỉ giao hàng</span>
                    <strong>{selectedSlip.deliveryAddress || "—"}</strong>
                  </div>
                  <div>
                    <span>Tổng tiền hàng</span>
                    <strong>{Number(selectedSlip.totalBill || 0).toLocaleString()}đ</strong>
                  </div>
                </div>
              )}

              <div className="order-modal__toolbar">
                <h3>Sản phẩm trong đơn ({filteredItems.length})</h3>
                <input
                  type="search"
                  placeholder="Tìm sản phẩm, cửa hàng..."
                  className="order-user__search"
                  value={itemSearchText}
                  onChange={(event) => this.setState({ itemSearchText: event.target.value })}
                  aria-label="Tìm sản phẩm trong đơn hàng"
                />
              </div>

              {itemsLoading && (
                <div className="order-user__message">Đang tải chi tiết...</div>
              )}
              {!itemsLoading && filteredItems.length === 0 && (
                <div className="order-user__message">Không có sản phẩm phù hợp.</div>
              )}
              {!itemsLoading && filteredItems.length > 0 && (
                <div className="order-modal__scrollpanel" role="region" aria-label="Sản phẩm trong đơn hàng">
                  <div className="order-item-grid">
                    {filteredItems.map((item, index) => (
                      <article
                        className="order-item-card"
                        key={`${item.idProduct}-${item.idShop}-${index}`}
                      >
                        <div className="order-item-card__title">
                          <h4>{item.nameProduct}</h4>
                          <strong>{Number(item.price || 0).toLocaleString()}đ</strong>
                        </div>
                        <p>Cửa hàng: {item.nameShop || item.idShop}</p>
                        <p>Mã sản phẩm: {item.idProduct}</p>
                        <div className="order-item-card__meta">
                          <span>Màu: {item.color || "—"}</span>
                          <span>Size: {item.size || "—"}</span>
                          <span>Số lượng: {item.quantity}</span>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              )}
            </section>
          </div>
        )}
      </div>
    );
  }
}

export default OrderUser;
