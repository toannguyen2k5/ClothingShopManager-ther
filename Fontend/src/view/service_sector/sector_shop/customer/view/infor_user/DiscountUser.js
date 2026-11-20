import React, { Component } from "react";
import { urlapi } from "../../../../../../setting/store/const";
import DataTable from "react-data-table-component";
class DiscountUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      promos: [],
      filterText: "",
    };
  }
  componentDidMount() {
    fetch(
      `${urlapi}/api/UserDiscountCode/sellectById?idUser=` +
        this.props.state_data.user_info.id_user
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.status && data.status == "200") {
          this.setState({ promos: data.data });
        }
        console.log(data);
      })
      .catch((error) => {
        console.error("Lỗi khi fetch:", error);
      });
  }
  deleteAssignment = (discountCode) => {
    if (window.confirm("Xóa cấu hình khuyến mãi này?")) {
      fetch(
        urlapi +
          "/api/UserDiscountCode/deleteUserDiscountCode?discountCode=" +
          encodeURIComponent(discountCode)
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.status && data.status === "200") {
            this.setState((prev) => ({
              promos: prev.promos.filter(
                (promo) => promo.discountCode !== discountCode
              ),
            }));
            alert("Xóa mã giảm giá cho người dùng thành công !");
          } else alert("Xóa mã giảm giá cho người dùng thất bại !");
        })
        .catch((error) => console.error("Lỗi POST:", error));
    }
  };
  handleFilter = (e) => this.setState({ filterText: e.target.value });
  render() {
    const { promos, filterText } = this.state;
    const filtered = promos.filter((a) =>
      (a.code || "").toLowerCase().includes(filterText.toLowerCase())
    );
    const columns = [
      {
        name: "Mã giảm giá",
        selector: (row) => row.code,
        sortable: true,
      },
      {
        name: "Giảm",
        selector: (row) =>
          row.type === "PERCENT"
            ? `${row.discount}%`
            : `${Number(row.discount).toLocaleString()}VND`,
        sortable: true,
      },
      {
        name: "Đơn hàng tối thiểu",
        selector: (row) => row.minimumOrderValue.toLocaleString() + "VND",
        sortable: true,
      },
      {
        name: "Giảm tối đa",
        selector: (row) =>
          row.maxDiscountValue > 0
            ? row.maxDiscountValue.toLocaleString() + "VND"
            : "Không giới hạn",
        sortable: true,
      },
      { name: "Hạn", selector: (row) => row.expiry },
      {
        name: "Actions",
        cell: (row) => (
          <>
            <button
              onClick={() => this.deleteAssignment(row.discountCode)}
              className="btn-delete"
            >
              Xóa
            </button>
          </>
        ),
        ignoreRowClick: true,
        button: true,
      },
    ];
    return (
      <div className="col-xs-12 col-sm-9 col-md-9 accounts-right">
        <div className="row">
          <div className="col-xs-12" id="customer_sidebar">
            <div className="accounts style-bg">
              <div className="accounts_title">
                <h2>Quản lý Khuyến mãi theo Cửa hàng</h2>
              </div>
              <div className="spm-toolbar">
                <input
                  type="text"
                  placeholder="Filter by promo"
                  value={filterText}
                  onChange={this.handleFilter}
                  className="spm-search"
                />
              </div>

              <DataTable
                columns={columns}
                data={filtered}
                pagination
                highlightOnHover
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default DiscountUser;
