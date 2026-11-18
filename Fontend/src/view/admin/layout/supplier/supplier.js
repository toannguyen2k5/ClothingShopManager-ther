import React, { Component } from "react";
import DataTable from "react-data-table-component";
import { role_customer, role_manager, role_admin, urlapi, define_nav } from "../../../../setting/store/const";
import "../product/list/style.css";
import "../../layout/order/input/list/PurchaseSlipList.css";


class SupplierListClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataShow: [], //
            filteredData: [], //
            searchText: "", //
            perPage: 5, //
            showContextMenu: false, //
            contextMenuX: 0, //
            contextMenuY: 0, //
            selectedRow: null, //
            showModal: false, //
            editModal: false, //
            fetchData: null,
        };
    }
    hanldeFetchData = async () => {
        fetch(`${urlapi}/api/Supplier/sellectAll/all/all/`)
            .then((response) => response.json())
            .then((data) => {
                if (data.status && data.status === "200") {
                    const dataWithIndex = data.data.map((item, index) => ({
                        ...item,
                        index: index + 1
                    }));

                    this.setState({
                        dataShow: dataWithIndex,
                        filteredData: dataWithIndex
                    });
                }
            })
            .catch((error) => console.error(error));
    }
    componentDidMount() {
        this.hanldeFetchData();
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
    handleOpenEditModal = () => {
        fetch(`${urlapi}/api/Supplier/sellect/byID?id=${this.state.selectedRow.idSupplier}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.status && data.status === "200") {
                    console.log(`data ${this.state.selectedRow.idSupplier}: `, data);
                    this.setState({
                        fetchData: data.data,
                    });
                }
            })
            .catch((error) => console.error(error));
        this.setState({ editModal: true });
    }
    handeCloseEditModal = () => {
        this.setState({ editModal: false });
    }
    handleOpenModelDetail = () => {
        fetch(`${urlapi}/api/Supplier/sellect/byID?id=${this.state.selectedRow.idSupplier}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.status && data.status === "200") {
                    console.log(`data ${this.state.selectedRow.idSupplier}: `, data);
                    this.setState({
                        fetchData: data.data,
                    });
                }
            })
            .catch((error) => console.error(error));
        this.setState({ showModal: true })
    }
    handleCloseModelDetail = () => {
        this.setState({ showModal: false })
    }
    handleSearch = (e) => {
        const value = e.target.value.toLowerCase();
        const { dataShow } = this.state;

        const filtered = dataShow.filter(
            (p) =>
                p.nameSupplier.toLowerCase().includes(value) || p.contactName.toLowerCase().includes(value) || p.phoneNumber.toLowerCase().includes(value)
        );

        this.setState({ searchText: value, filteredData: filtered });
    };

    handleChangeProperty = (e) => {
        const value = e.target.value;
        const { dataShow, searchText } = this.state;
        this.hanldeFetchData();
        const filtered = dataShow.filter(
            (p) =>
                p[this.state.nameField].toLowerCase().includes(searchText) ||
                p.description.toLowerCase().includes(searchText)
        );

        this.setState({ filterProperty: value, filteredData: filtered });
    };

    handlePerPageChange = (e) => {
        this.setState({ perPage: parseInt(e.target.value) });
    };

    handleLoadData = () => {
        this.hanldeFetchData();
    }

    handleSaveProperty = () => {
        const req = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                idSupplier: this.state.fetchData?.idSupplier,
                nameSupplier: this.state.fetchData?.nameSupplier,
                contactName: this.state.fetchData?.contactName,
                email: this.state.fetchData?.email,
                phoneNumber: this.state.fetchData?.phoneNumber,
                address: this.state.fetchData?.address,
                status: this.state.fetchData?.status,
            }),
        };
        fetch(`${urlapi}/api/Supplier/updateSupplier`, req)
            .then((response) => response.json())
            .then((data) => {
                console.log("Response từ server:", data);
                if (data.status === "200") {
                    alert("Chỉnh sửa thông tin thành công!");
                    this.handleLoadData();
                    this.handeCloseEditModal();
                }
                else alert("Chỉnh sửa thông tin thất bại!");
            })
            .catch((error) => console.error("Lỗi POST:", error));
    }
    handleChangeStatus = () => {
        const req = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                idSupplier: this.state.fetchData?.idSupplier,
                nameSupplier: this.state.fetchData?.nameSupplier,
                contactName: this.state.fetchData?.contactName,
                email: this.state.fetchData?.email,
                phoneNumber: this.state.fetchData?.phoneNumber,
                address: this.state.fetchData?.address,
                status: !this.state.fetchData?.status,
            }),
        };
        fetch(`${urlapi}/api/Supplier/updateSupplier`, req)
            .then((response) => response.json())
            .then((data) => {
                console.log("Response từ server:", data);
                if (data.status === "200") {
                    alert("Chỉnh sửa thông tin thành công!");
                    this.handleLoadData();
                }
                else alert("Chỉnh sửa thông tin thất bại!");
            })
            .catch((error) => console.error("Lỗi POST:", error));
    }

    render() {
        const {
            showModal,
            editModal,
            fetchData
        } = this.state;
        console.log("fetchdata in render ", fetchData)
        if (
            this.props.state_data.current_page.name !==
            define_nav.admin.listproduct.name
        )
            this.props.actions.current_page({
                name_new: define_nav.admin.listproduct.name,
                path_new: define_nav.admin.listproduct.path,
                old_page: this.props.state_data.current_page,
            });
        const columns = [
            { name: "STT", selector: (row, index) => row.index, sortable: true, grow: 1 },
            { name: "Tên nhà cung cấp", selector: (row) => row.nameSupplier, sortable: true, grow: 5 },
            { name: "Tên người đại diện", selector: (row) => row.contactName, sortable: true, grow: 3 },
            { name: "số điện thoại", selector: (row) => row.phoneNumber, grow: 2 },
            { name: "Trạng thái hợp tác", selector: (row) => (row.status ? "✔️" : "❌"), grow: 2 },
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
                                👁 Xem thông tin chi tiết
                            </div>
                            <div onClick={this.handleOpenEditModal}>
                                ✏ chỉnh sửa thông tin
                            </div>

                            {this.props.state_data.user_info.role_level >= role_admin && (
                                <div onClick={() => this.handleChangeStatus()}>
                                    {this.state.fetchData?.status ? "❌ Ngừng hợp tác" : "✔️ Hợp tác trở lại"}
                                </div>
                            )}

                        </div>
                    )
                }
                <div className="row">
                    <div className="flex flex-wrap gap-4 mb-4">
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
                        data={this.state.filteredData}
                        pagination
                        paginationPerPage={this.state.perPage}
                        highlightOnHover
                        striped
                        responsive
                        onRowDoubleClicked={(row, event) => {
                            event.preventDefault();
                            this.setState({
                                selectedRow: row,
                                contextMenuX: event.clientX,
                                contextMenuY: event.clientY,
                                fetchData: row,
                            }, () => {this.setState({ showContextMenu: true })});
                        }}
                    />
                </div>
                <div className="">
                    {showModal && (
                        <div
                            className="psl-modal-overlay"
                            onClick={this.handleCloseModelDetail}
                        >
                            <div
                                className="psl-modal-content"
                                onClick={(e) => e.stopPropagation()}
                                style={{
                                    width: "30%",
                                    height: "500px",
                                    overflowY: "auto",
                                }}
                            >
                                <button
                                    className="psl-modal-close"
                                    onClick={this.handleCloseModelDetail}
                                >
                                    ×
                                </button>
                                <div className="container-hafl" style={{ width: "100%" }}>
                                    <h2>Thông tin chi tiết</h2>
                                    <label style={{
                                        width: "200px",
                                        fontWeight: "bold"
                                    }}>Mã nhà cung cấp</label>
                                    <input
                                        type="text"
                                        value={fetchData?.idSupplier || "không có thông tin"}
                                        disabled
                                        style={{ width: "70%", borderRadius: "10px", marginLeft: "20px", marginBottom: "10px" }}
                                    />
                                    <label style={{
                                        width: "200px",
                                        fontWeight: "bold"
                                    }}>Tên nhà cung cấp</label>
                                    <input
                                        type="text"
                                        value={fetchData?.nameSupplier || "không có thông tin"}
                                        disabled
                                        style={{ width: "70%", borderRadius: "10px", marginLeft: "20px", marginBottom: "10px" }}
                                    />
                                    <label style={{
                                        width: "200px",
                                        fontWeight: "bold"
                                    }}>Tên người đại diện</label>
                                    <input
                                        type="text"
                                        value={fetchData?.contactName || "không có thông tin"}
                                        disabled
                                        style={{ width: "70%", borderRadius: "10px", marginLeft: "20px", marginBottom: "10px" }}
                                    />
                                    <label style={{
                                        width: "200px",
                                        fontWeight: "bold"
                                    }}>Email</label>
                                    <input
                                        type="text"
                                        value={fetchData?.email || "không có thông tin"}
                                        disabled
                                        style={{ width: "70%", borderRadius: "10px", marginLeft: "20px", marginBottom: "10px" }}
                                    />
                                    <label style={{
                                        width: "200px",
                                        fontWeight: "bold"
                                    }}>Số điện thoại</label>
                                    <input
                                        type="text"
                                        value={fetchData?.phoneNumber || "không có thông tin"}
                                        disabled
                                        style={{ width: "70%", borderRadius: "10px", marginLeft: "20px", marginBottom: "10px" }}
                                    />
                                    <label style={{
                                        width: "200px",
                                        fontWeight: "bold"
                                    }}>Địa chỉ</label>
                                    <textarea
                                        type="text"
                                        value={fetchData?.address || "không có thông tin"}
                                        disabled
                                        style={{ width: "100%", height: "125px", borderRadius: "10px", marginLeft: "20px", marginBottom: "10px" }}
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="">
                    {editModal && (
                        <div
                            className="psl-modal-overlay"
                            onClick={this.handeCloseEditModal}
                        >
                            <div
                                className="psl-modal-content"
                                onClick={(e) => e.stopPropagation()}
                                style={{
                                    width: "30%",
                                    height: "500px",
                                    overflowY: "auto",
                                }}
                            >
                                <button
                                    className="psl-modal-close"
                                    onClick={this.handeCloseEditModal}
                                >
                                    ×
                                </button>
                                <div className="container-hafl" style={{ width: "100%" }}>
                                    <h2>Thông tin chi tiết</h2>
                                    <label style={{
                                        width: "200px",
                                        fontWeight: "bold"
                                    }}>Mã nhà cung cấp</label>
                                    <input
                                        type="text"
                                        value={fetchData?.idSupplier || "không có thông tin"}
                                        disabled
                                        style={{ width: "70%", borderRadius: "10px", marginLeft: "20px", marginBottom: "10px" }}
                                    />
                                    <label style={{
                                        width: "200px",
                                        fontWeight: "bold"
                                    }}>Tên nhà cung cấp</label>
                                    <input
                                        type="text"
                                        value={fetchData?.nameSupplier || "không có thông tin"}
                                        onChange={(e) =>
                                            this.setState({
                                                fetchData: {
                                                    ...fetchData,
                                                    nameSupplier: e.target.value
                                                }
                                            })
                                        }
                                        style={{ width: "70%", borderRadius: "10px", marginLeft: "20px", marginBottom: "10px" }}
                                    />
                                    <label style={{
                                        width: "200px",
                                        fontWeight: "bold"
                                    }}>Tên người đại diện</label>
                                    <input
                                        type="text"
                                        value={fetchData?.contactName || "không có thông tin"}
                                        onChange={(e) =>
                                            this.setState({
                                                fetchData: {
                                                    ...fetchData,
                                                    contactName: e.target.value
                                                }
                                            })
                                        }
                                        style={{ width: "70%", borderRadius: "10px", marginLeft: "20px", marginBottom: "10px" }}
                                    />
                                    <label style={{
                                        width: "200px",
                                        fontWeight: "bold"
                                    }}>Email</label>
                                    <input
                                        type="text"
                                        value={fetchData?.email || "không có thông tin"}
                                        onChange={(e) =>
                                            this.setState({
                                                fetchData: {
                                                    ...fetchData,
                                                    email: e.target.value
                                                }
                                            })
                                        }
                                        style={{ width: "70%", borderRadius: "10px", marginLeft: "20px", marginBottom: "10px" }}
                                    />
                                    <label style={{
                                        width: "200px",
                                        fontWeight: "bold"
                                    }}>Số điện thoại</label>
                                    <input
                                        type="text"
                                        value={fetchData?.phoneNumber || "không có thông tin"}
                                        onChange={(e) =>
                                            this.setState({
                                                fetchData: {
                                                    ...fetchData,
                                                    phoneNumber: e.target.value
                                                }
                                            })
                                        }
                                        style={{ width: "70%", borderRadius: "10px", marginLeft: "20px", marginBottom: "10px" }}
                                    />
                                    <label style={{
                                        width: "200px",
                                        fontWeight: "bold"
                                    }}>Địa chỉ</label>
                                    <textarea
                                        type="text"
                                        value={fetchData?.address || "không có thông tin"}
                                        onChange={(e) =>
                                            this.setState({
                                                fetchData: {
                                                    ...fetchData,
                                                    address: e.target.value
                                                }
                                            })
                                        }
                                        style={{ width: "70%", borderRadius: "10px", marginLeft: "20px", marginBottom: "10px" }}
                                    />
                                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <button style={{ width: "80px", height: "30px", backgroundColor: "firebrick", borderRadius: "5px", marginRight: "10px" }} onClick={this.handleSaveProperty}>Save</button>
                                        <button style={{ width: "80px", height: "30px", backgroundColor: "white", borderRadius: "5px" }} onClick={this.handeCloseEditModal}>Cancel</button>
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

export default SupplierListClass;
