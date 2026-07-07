import React, { Component } from "react";
import { urlapi } from "../../../../../../setting/store/const";

class ChooseAddress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      provinces: [],
      province_current: null,
      districts: [],
      district_current: null,
      detailAddress: null,
    };
  }

  SendData = () => {
    const { province_current, district_current, detailAddress } = this.state;
    if (province_current && district_current && detailAddress) {
      const { actions } = this.props;
      actions.change_state_data({
        data: {
          province: province_current.nameProvince,
          district: district_current.nameDistrict,
          detailaddress: detailAddress,
        },
      });
      if (this.props && this.props.choosed) {
        this.props.choosed(
          detailAddress + "," + district_current.nameDistrict + "," + province_current.nameProvince
        );
      }
    }
  };

  componentDidMount() {
    fetch(urlapi + "/api/Province/SellectAll")
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "200") this.setState({ provinces: data.data });
        console.log("provinces: ",data);
      })
      .catch((err) => console.error(err));
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.province_current && this.state.province_current !== prevState.province_current) {
      fetch(urlapi + "/api/District/Sellect?idProvince=" + this.state.province_current.idProvince)
        .then((res) => res.json())
        .then((data) => {
          if (data.status === "200") this.setState({ districts: data.data });
          console.log("districts: ",data);
        })
        .catch((err) => console.error(err));
    }
  }

  handleProvinceChange = (e) => {
    const selected = this.state.provinces.find((p) => p.idProvince === e.target.value);
    if (selected) this.setState({ province_current: selected, district_current: null }, this.SendData);
    else this.setState({ province_current: null, districts: [], district_current: null });
  };

  handleDistrictChange = (e) => {
    const selected = this.state.districts.find((d) => d.idDistrict === e.target.value);
    if (selected) this.setState({ district_current: selected }, this.SendData);
  };

  render() {
    const { provinces, districts, province_current, district_current } = this.state;
    return (
      <div style={styles.wrapper}>
        {/* Tiêu đề */}
        <div style={styles.header}>
          <span style={styles.headerIcon}>📍</span>
          <span style={styles.headerText}>Địa chỉ giao hàng</span>
        </div>

        <div style={styles.body}>
          {/* Tỉnh / Thành phố */}
          <div style={styles.field}>
            <label style={styles.label}>Tỉnh / Thành phố</label>
            <div style={styles.selectWrapper}>
              <select
                style={styles.select}
                onChange={this.handleProvinceChange}
                defaultValue="all"
              >
                <option value="all" disabled>Chọn tỉnh / thành phố</option>
                {provinces.map((p) => (
                  <option key={p.idProvince} value={p.idProvince}>
                    {p.nameProvince}
                  </option>
                ))}
              </select>
              <span style={styles.selectArrow}>▾</span>
            </div>
          </div>

          {/* Quận / Huyện */}
          <div style={styles.field}>
            <label style={styles.label}>Quận / Huyện</label>
            <div style={styles.selectWrapper}>
              <select
                style={{
                  ...styles.select,
                  opacity: province_current ? 1 : 0.5,
                  cursor: province_current ? "pointer" : "not-allowed",
                }}
                onChange={this.handleDistrictChange}
                defaultValue="all"
                disabled={!province_current}
              >
                <option value="all" disabled>Chọn quận / huyện</option>
                {districts.map((d) => (
                  <option key={d.idDistrict} value={d.idDistrict}>
                    {d.nameDistrict}
                  </option>
                ))}
              </select>
              <span style={styles.selectArrow}>▾</span>
            </div>
          </div>

          {/* Địa chỉ chi tiết */}
          <div style={styles.field}>
            <label style={styles.label}>Địa chỉ chi tiết</label>
            <input
              style={styles.input}
              placeholder="Số nhà, tên đường, tòa nhà..."
              type="text"
              onChange={(e) =>
                this.setState({ detailAddress: e.target.value }, this.SendData)
              }
            />
          </div>

          {/* Preview địa chỉ */}
          {province_current && district_current && (
            <div style={styles.preview}>
              <span style={styles.previewIcon}>✓</span>
              <span style={styles.previewText}>
                {[this.state.detailAddress, district_current?.nameDistrict, province_current?.nameProvince]
                  .filter(Boolean)
                  .join(", ")}
              </span>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const styles = {
  wrapper: {
    background: "#fff",
    borderRadius: "12px",
    border: "1px solid #e8e8e8",
    overflow: "hidden",
    fontFamily: "'Segoe UI', sans-serif",
    boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
  },
  header: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "14px 20px",
    background: "#f9f9f9",
    borderBottom: "1px solid #e8e8e8",
  },
  headerIcon: {
    fontSize: "18px",
  },
  headerText: {
    fontSize: "15px",
    fontWeight: 600,
    color: "#1a1a1a",
  },
  body: {
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  field: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },
  label: {
    fontSize: "13px",
    fontWeight: 500,
    color: "#555",
  },
  selectWrapper: {
    position: "relative",
  },
  select: {
    width: "100%",
    padding: "10px 36px 10px 12px",
    fontSize: "14px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    background: "#fff",
    color: "#1a1a1a",
    appearance: "none",
    cursor: "pointer",
    outline: "none",
    transition: "border-color 0.2s",
  },
  selectArrow: {
    position: "absolute",
    right: "12px",
    top: "50%",
    transform: "translateY(-50%)",
    pointerEvents: "none",
    color: "#888",
    fontSize: "13px",
  },
  input: {
    width: "100%",
    padding: "10px 12px",
    fontSize: "14px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    outline: "none",
    color: "#1a1a1a",
    boxSizing: "border-box",
    transition: "border-color 0.2s",
  },
  preview: {
    display: "flex",
    alignItems: "flex-start",
    gap: "8px",
    padding: "10px 14px",
    background: "#f0faf5",
    border: "1px solid #b7e4cc",
    borderRadius: "8px",
  },
  previewIcon: {
    color: "#2e9e6b",
    fontWeight: 700,
    fontSize: "14px",
    marginTop: "1px",
  },
  previewText: {
    fontSize: "13px",
    color: "#1e6e48",
    lineHeight: 1.5,
  },
};

export default ChooseAddress;