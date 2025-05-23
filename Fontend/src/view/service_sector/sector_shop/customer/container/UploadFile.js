import React, { Component } from "react";
import Axios from "axios";
import { urlapi } from "../../../../../setting/store/const";

class UploadFile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: [],
    };
    this.count = 0;
  }
  render() {
    if (this.state.file.length > this.count) {
      this.count = this.state.file.length;
      if (this.props.action !== undefined) this.props.action();
    }
    return (
      <div className="col-sm-12">
        <div encType="multipart/form-data" className=" justify-content-center">
          <input
            onChange={(evt) => {
              this.setState({
                file: this.state.file.concat(evt.target.files[0]),
              });
            }}
            type="file"
            id="input_file"
          />
          <button
            className="btn btn-primary"
            id="button_input_file"
            onClick={(evt) => {
              evt.preventDefault();
              if (!this.state.file) {
                alert("Bạn chưa chọn file.");
                return;
              }
              const formData = new FormData();
              formData.append(
                "file",
                this.state.file[this.state.file.length - 1]
              );
              console.log(this.state.file);
              const config = {
                headers: {
                  "content-type": "multipart/form-data",
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  key: "111111111",
                  info: {
                    code: localStorage.getItem("code"),
                    id: this.props.id,
                  },
                }),
              };
              Axios.post(urlapi + "/uploadImageProduct", formData, config).then(
                (res) => {
                  alert("Upload file thành công");
                  console.log(res);
                  if (this.props.name != undefined)
                    this.props.name(res.data.data);
                }
              );
            }}
            type="button"
          >
            UPLOAD
          </button>
        </div>
      </div>
    );
  }
}

export default UploadFile;
