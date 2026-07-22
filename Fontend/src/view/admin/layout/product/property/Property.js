import React, { Component } from "react";
import DataTable from "react-data-table-component";
import { role_customer, role_manager, role_admin, urlapi } from "../../../../../setting/store/const";
import "../list/style.css";
import { define_nav } from "../../../../../setting/store/const";
import "../../../layout/order/input/list/PurchaseSlipList.css";


class ProductListClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataShow: [], //
            filteredData: [], //
            searchText: "", //
            filterProperty: "style-property", //
            perPage: 5, //
            showContextMenu: false, //
            contextMenuX: 0, //
            contextMenuY: 0, //
            selectedRow: null, //
            showModal: false, //
            editModal: false, //
            idField: "idStyle",
            nameField: "nameStyle",
            fetchData: null,
        };
    }
    hanldeFetchData = async (ScopeName) => {
        fetch(`${urlapi}/api/${ScopeName}/sellectAll/all/all/`)
            .then((response) => response.json())
            .then((data) => {
                if (data.status && data.status === "200") {
                    console.log(`data ${ScopeName}: `, data);
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
        if (ScopeName == "color") this.setState({ idField: "idColor", nameField: "nameColor" })
        else if (ScopeName == "ProductMaterial") this.setState({ idField: "idMaterial", nameField: "nameMaterial" })
        else this.setState({ idField: `id${ScopeName}`, nameField: `name${ScopeName}` })
    }
    handleFetchDataById = (ScopeName) => {
        fetch(`${urlapi}/api/${ScopeName}/sellectById?id=` + this.state.selectedRow[this.state.idField])
            .then((response) => response.json())
            .then((data) => {
                if (data.status && data.status === "200") {
                    console.log(`data ${ScopeName} by id: `, data);

                    this.setState({
                        fetchData: data.data
                    });
                }
            })
            .catch((error) => console.error(error));
    }
    componentDidMount() {
        this.hanldeFetchData("Style");
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
        switch (this.state.filterProperty) {
            case "style-property":
                this.handleFetchDataById("Style");
                break;
            case "brand-property":
                this.handleFetchDataById("Brand");
                break;
            case "material-property":
                this.handleFetchDataById("ProductMaterial");
                break;
            case "size-property":
                this.handleFetchDataById("Size");
                break;
            default:
                this.handleFetchDataById("color");
                break;
        }
        this.setState({ editModal: true });
    }
    handeCloseEditModal = () => {
        this.setState({ editModal: false });
    }
    handleOpenModelDetail = () => {
        switch (this.state.filterProperty) {
            case "style-property":
                this.handleFetchDataById("Style");
                break;
            case "brand-property":
                this.handleFetchDataById("Brand");
                break;
            case "material-property":
                this.handleFetchDataById("ProductMaterial");
                break;
            case "size-property":
                this.handleFetchDataById("Size");
                break;
            default:
                this.handleFetchDataById("color");
                break;
        }
        this.setState({ showModal: true })
    }
    handleCloseModelDetail = () => {
        this.setState({ showModal: false })
    }
    handleSearch = (e) => {
        const value = e.target.value.toLowerCase();
        const { dataShow, filterProperty } = this.state;

        const filtered = dataShow.filter(
            (p) =>
                p[this.state.nameField].toLowerCase().includes(value) || p.description.toLowerCase().includes(value)
        );

        this.setState({ searchText: value, filteredData: filtered });
    };

    handleChangeProperty = (e) => {
        const value = e.target.value;
        const { dataShow, searchText } = this.state;

        switch (value) {
            case "style-property":
                this.hanldeFetchData("Style");
                break;
            case "brand-property":
                this.hanldeFetchData("Brand");
                break;
            case "material-property":
                this.hanldeFetchData("ProductMaterial");
                break;
            case "size-property":
                this.hanldeFetchData("Size");
                break;
            default:
                this.hanldeFetchData("color");
                break;
        }
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

    handleLoadData = ()=>{
       switch (this.state.filterProperty) {
            case "style-property":
                this.hanldeFetchData("Style");
                break;
            case "brand-property":
                this.hanldeFetchData("Brand");
                break;
            case "material-property":
                this.hanldeFetchData("ProductMaterial");
                break;
            case "size-property":
                this.hanldeFetchData("Size");
                break;
            default:
                this.hanldeFetchData("color");
                break;
        }
        
    }

    handleSaveProperty = () => {
        let str_api = `${urlapi}/api/`
        switch (this.state.filterProperty) {
            case "style-property":
                str_api += "Style/update";
                break;
            case "brand-property":
                str_api += "Brand/update";
                break;
            case "material-property":
                str_api += "ProductMaterial/update";
                break;
            case "size-property":
                str_api += "Size/update";
                break;
            default:
                str_api += "color/update";
                break;
        }
        const req = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                [this.state.idField]: this.state.fetchData?.[this.state.idField],
                [this.state.nameField]: this.state.fetchData?.[this.state.nameField],
                description: this.state.fetchData?.description,
            }),
        };
        fetch(str_api, req)
            .then((response) => response.json())
            .then((data) => {
                console.log("Response từ server:", data);
                if (data.status === "200"){
                    alert("Chỉnh sửa thông tin thành công!");
                    this.handleLoadData();
                    this.handeCloseEditModal();
                }
                else alert("Chỉnh sửa thông tin thất bại!");
            })
            .catch((error) => console.error("Lỗi POST:", error));
    }

    render() {
        const {
            showModal,
            detail_product,
            editModal,
            idField,
            nameField,
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
            { name: "id", selector: (row) => row[this.state.idField], sortable: true, grow: 2 },
            { name: "Tên ", selector: (row) => row[this.state.nameField], sortable: true, grow: 2 },
            { name: "Mô tả", selector: (row) => row.description, grow: 5 },
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
                                <div onClick={() => alert("Chức năng xóa sản phẩm chưa được triển khai")}>
                                    🗑 Xóa sản phẩm
                                </div>
                            )}

                        </div>
                    )
                }
                <div className="row">
                    <div className="flex flex-wrap gap-4 mb-4">
                        <select
                            onChange={this.handleChangeProperty}
                            value={this.state.filterProperty}
                            className="border p-2 rounded form-control-sm"
                            style={{ float: "left" }}
                        >
                            <option value="style-property">Style</option>
                            <option value="brand-property">Brand</option>
                            <option value="material-property">Material</option>
                            <option value="size-property">Size</option>
                            <option value="color-property">Color</option>
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
                        data={this.state.filteredData}
                        pagination
                        paginationPerPage={this.state.perPage}
                        highlightOnHover
                        striped
                        responsive
                        onRowDoubleClicked={(row, event) => {
                            this.setState({
                                selectedRow: row,
                                showContextMenu: true,
                                contextMenuX: event.clientX,
                                contextMenuY: event.clientY,
                            }, console.log("selectedRow : ", this.state.selectedRow));
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
                                    height: "400px",
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
                                    }}>Mã </label>
                                    <input
                                        type="text"
                                        value={fetchData?.[idField] || "không có thông tin"}
                                        disabled
                                        style={{ width: "70%", borderRadius: "10px", marginLeft: "20px", marginBottom: "10px" }}
                                    />
                                    {console.log("idField : ", idField)}
                                    <label style={{
                                        width: "200px",
                                        fontWeight: "bold"
                                    }}>Tên</label>
                                    <input
                                        type="text"
                                        value={fetchData?.[nameField] || "không có thông tin"}
                                        disabled
                                        style={{ width: "70%", borderRadius: "10px", marginLeft: "20px", marginBottom: "10px" }}
                                    />
                                    {console.log("nameFilde ", nameField)}
                                    {console.log("fetchdata ", fetchData)}
                                    <label style={{
                                        width: "200px",
                                        fontWeight: "bold"
                                    }}>Mô tả</label>
                                    <textarea
                                        type="text"
                                        value={fetchData?.description || "không có thông tin"}
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
                                    height: "400px",
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
                                    }}>Mã </label>
                                    <input
                                        type="text"
                                        value={fetchData?.[idField] || "không có thông tin"}
                                        disabled
                                        style={{ width: "70%", borderRadius: "10px", marginLeft: "20px", marginBottom: "10px" }}
                                    />
                                    {console.log("idField : ", idField)}
                                    <label style={{
                                        width: "200px",
                                        fontWeight: "bold"
                                    }}>Tên</label>
                                    <input
                                        type="text"
                                        value={fetchData?.[nameField] || "không có thông tin"}
                                        onChange={(e) =>
                                            this.setState({
                                                fetchData: {
                                                    ...fetchData,
                                                    [nameField]: e.target.value
                                                }
                                            })
                                        }
                                        style={{ width: "70%", borderRadius: "10px", marginLeft: "20px", marginBottom: "10px" }}
                                    />
                                    {console.log("nameFilde ", nameField)}
                                    {console.log("fetchdata ", fetchData)}
                                    <label style={{
                                        width: "200px",
                                        fontWeight: "bold"
                                    }}>Mô tả</label>
                                    <textarea
                                        type="text"
                                        value={fetchData?.description || "không có thông tin"}
                                        onChange={(e) =>
                                            this.setState({
                                                fetchData: {
                                                    ...fetchData,
                                                    description: e.target.value
                                                }
                                            })
                                        }
                                        style={{ width: "100%", height: "125px", borderRadius: "10px", marginLeft: "20px", marginBottom: "10px" }}
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

export default ProductListClass;
