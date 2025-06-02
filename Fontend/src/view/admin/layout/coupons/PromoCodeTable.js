import React, { Component } from "react";
import DataTable from "react-data-table-component";

export default class PromoCodeTable extends Component {
  render() {
    const { data, onEdit, onDelete } = this.props;
    const columns = [
      {
        name: "IdCode",
        selector: (row) => row.idEvent,
        sortable: true,
        width: "150px",
      },
      {
        name: "Mã",
        selector: (row) => row.eventCode,
        sortable: true,
        width: "150px",
      },
      {
        name: "Mã sản phẩm",
        selector: (row) => row.idProduct,
        sortable: true,
        width: "150px",
      },
      {
        name: "Giảm",
        selector: (row) => row.decrease * 100 + "%",
        width: "100px",
      },
      {
        name: "Số lượng tối thiểu",
        selector: (row) => row.quantityLimit,
        width: "200px",
      },
      {
        name: "Hiệu lực",
        selector: (row) => row.eventDeadline,
        width: "250px",
      },
      {
        name: "Hoạt động",
        selector: (row) => {
          const now = new Date();
          const eventDeadline = new Date(row.eventDeadline);
          return eventDeadline > now ? "Đang diễn ra" : "Kết thúc";
        },
        width: "200px",
      },
      { name: "Mô tả", selector: (row) => row.description, width: "400px" },
      {
        name: "Hành động",
        cell: (row, index) => (
          <>
            <button onClick={() => onEdit(index)} className="pm-btn">
              Sửa
            </button>
            <button
              onClick={() => onDelete(index)}
              className="pm-btn pm-btn-del"
            >
              Xóa
            </button>
          </>
        ),
        button: true,
        width: "200px",
      },
    ];

    return (
      <DataTable
        columns={columns}
        data={data}
        pagination
        highlightOnHover
        striped
      />
    );
  }
}
