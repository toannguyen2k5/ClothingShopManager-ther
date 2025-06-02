import React, { Component } from "react";
import DataTable from "react-data-table-component";
import { urlapi } from "../../../../setting/store/const";
import "./CommentManager.css";

export default class CommentManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      filterText: "",
    };
  }

  componentDidMount() {
    fetch(urlapi + "/api/SalesSlip/showAllRate")
      .then((res) => res.json())
      .then((data) => {
        if (data.status && data.status === "200") {
          this.setState({ comments: data.data });
        }
        console.log(data);
      })
      .catch((err) => console.error(err));
  }

  handleFilter = (e) => this.setState({ filterText: e.target.value });

  render() {
    const { comments, filterText } = this.state;
    const visible = comments.filter(
      (c) =>
        !c.hidden &&
        (c.idSalesSlip.includes(filterText.toLowerCase()) ||
          c.nameClient.toLowerCase().includes(filterText.toLowerCase()) ||
          c.deliveryAddress.toLowerCase().includes(filterText.toLowerCase()))
    );
    const columns = [
      {
        name: "Mã Đơn hàng",
        selector: (row) => row.idSalesSlip,
        sortable: true,
        width: "150px",
      },
      {
        name: "Người bình luận",
        selector: (row) => row.nameClient,
        sortable: true,
        width: "250px",
      },
      {
        name: "Địa chỉ",
        selector: (row) => row.deliveryAddress,
        sortable: true,
        width: "350px",
      },
      { name: "Ngày giao", selector: (row) => row.createDate, width: "200px" },
      { name: "Đánh giá", selector: (row) => row.evaluate, width: "150px" },
      { name: "Nội dung", selector: (row) => row.comment, wrap: true },
    ];

    return (
      <div className="comment-manager">
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
        />
        <h2>Quản lý Bình luận sản phẩm</h2>
        <div className="cm-toolbar">
          <input
            type="text"
            placeholder="Tìm SP hoặc tác giả..."
            value={filterText}
            onChange={this.handleFilter}
            className="cm-search"
          />
        </div>
        <DataTable
          columns={columns}
          data={visible}
          pagination
          highlightOnHover
          responsive
        />
      </div>
    );
  }
}
