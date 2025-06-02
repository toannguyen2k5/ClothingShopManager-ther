// PromoCodeList.jsx
import React, { Component } from "react";
import DataTable from "react-data-table-component";

export default class PromoCodeList extends Component {
  render() {
    const {
      codes,
      filterText,
      onFilterChange,
      onOpenModal,
      onDeleteCode,
    } = this.props;

    const columns = [
      { name: "IdCode", selector: (row) => row.idEvent, sortable: true, width: "150px" },
      { name: "Code", selector: (row) => row.eventCode, sortable: true, width: "150px" },
      { name: "Giảm", selector: (row) => row.decrease * 100 + "%", width: "100px" },
      { name: "Số lượng tối thiểu", selector: (row) => row.quantityLimit, width: "200px" },
      { name: "Hiệu lực trước ngày", selector: (row) => row.eventDeadline, width: "250px" },
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
            <button onClick={() => onOpenModal(index)} className="pm-btn">
              Sửa
            </button>
            <button
              onClick={() => onDeleteCode(index)}
              className="pm-btn pm-btn-del"
            >
              Xóa
            </button>
          </>
        ),
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
        width: "200px",
      },
    ];

    return (
      <div>
        <div className="pm-toolbar">
          <input
            type="text"
            placeholder="Tìm kiếm..."
            value={filterText}
            onChange={onFilterChange}
            className="pm-search"
          />
          <button onClick={() => onOpenModal()} className="pm-btn pm-btn-add">
            Thêm mã
          </button>
        </div>
        <DataTable
          columns={columns}
          data={codes}
          pagination
          highlightOnHover
          striped
        />
      </div>
    );
  }
}
