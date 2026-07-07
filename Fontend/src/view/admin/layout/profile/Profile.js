import React, { Component, createRef } from "react";
import { define_nav, urlapi } from "../../../../setting/store/const";
import LeaveCalendar from "./LeaveCalendar";
import UpdateAccountModal from "./UpdateAccountModal";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      infoUser: {
        address: null,
        birthDay: null,
        email: null,
        fullName: null,
        gender: true,
        idUser: null,
        password: null,
        pathAvatar: null,
        phoneNumber: null,
        role: null,
        status: true,
        username: null,
      },
      modalIsOpen: false,
    };
    this.fileInputRef = createRef();
    this._isMounted = false;
  }
  handleImageClick = () => {
    this.fileInputRef.current.click();
  };
  handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    // Gửi file lên server
    const formData = new FormData();
    formData.append("addimages", file);
    try {
      const response = await fetch(
        urlapi +
          "/api/Image/upload/avatar/" +
          this.props.state_data.user_info.id_user,
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log("Upload thành công:", result);
        this.getInfoUser(this.props.state_data.user_info.id_user);
      } else {
        console.error("Upload thất bại:", response.statusText);
      }
    } catch (error) {
      console.error("Lỗi khi upload:", error);
    }
  };

  updateShop = (data) => {
    const req = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
      }),
    };
    fetch(urlapi + "/api/Users/UpdateUser", req)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "200") alert("Cập Nhật Tài Khoản Thành Công!");
        // cập nhật state nếu cần
        this.getInfoUser(this.props.state_data.user_info.id_user);
      })
      .catch((error) => console.error("Lỗi POST:", error));
  };
  setModalIsOpen = () => {
    this.setState({ modalIsOpen: true });
  };
  getInfoUser = (id) => {
    fetch(`${urlapi}/api/Users/${id}/getInfo`, {
      method: "PUT",
    })
      .then((response) => response.json())
      .then((data) => {
        if (this._isMounted) {
          this.setState({ infoUser: data.data });
        }
      })
      .catch((error) => {});
  };
  componentDidMount() {
    this._isMounted = true;
    this.getInfoUser(this.props.state_data.user_info.id_user);
  }

  componentWillUnmount() {
    this._isMounted = false;
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.infoUser.pathAvatar !== this.state.infoUser.pathAvatar) {
      const user = this.props.state_data.user_info;
      let user_info = {
        idUser: user.id_user,
        email: user.email,
        fullName: user.full_name,
        role: user.role,
        roleLevel: user.role_level,
        avatar: this.state.infoUser.pathAvatar,
        phone_number: user.phone_number,
      };
      this.props.actions.login_success(user_info);
    }
  }
  render() {
    if (
      this.props.state_data.current_page.name !== define_nav.admin.profile.name
    )
      this.props.actions.current_page({
        name_new: define_nav.admin.profile.name,
        path_new: define_nav.admin.profile.path,
        old_page: this.props.state_data.current_page,
      });
    console.log(this.state.infoUser);
    return (
      <div className="container-fluid px-2 px-md-4">
        <div
          className="page-header min-height-300 border-radius-xl mt-4"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1920&amp;q=80')",
          }}
        >
          <span className="mask  bg-gradient-primary  opacity-6"></span>
        </div>
        <div className="card card-body mx-3 mx-md-4 mt-n6">
          <div className="row gx-4 mb-2"></div>
          <div className="row">
            <div className="row">
              <div className="col-12 col-xl-4">
                <div className="card card-plain h-100">
                  <div className="card-header pb-0 p-3">
                    <div className="col-auto">
                      <div
                        className="avatar avatar-xl position-relative"
                        onClick={this.handleImageClick}
                        style={{ cursor: "pointer" }}
                      >
                        <img
                          src={`${urlapi}/api/Image/${this.state.infoUser.pathAvatar}`}
                          alt="profile_image"
                          className="w-100 border-radius-lg shadow-sm"
                          style={{ borderRadius: "50%" }}
                        />
                        <input
                          type="file"
                          accept="image/*"
                          ref={this.fileInputRef}
                          onChange={this.handleFileChange}
                          style={{ display: "none" }}
                        />
                      </div>
                    </div>
                    <div className="col-auto my-auto">
                      <div className="h-100">
                        <h5 className="mb-1">{this.state.infoUser.username}</h5>
                        <p className="mb-0 font-weight-normal text-sm">
                          {this.state.infoUser.role === "admin"
                            ? "Quản trị viên"
                            : this.state.infoUser.role === "manager"
                            ? "Quản lý"
                            : this.state.infoUser.role === "staff"
                            ? "Nhân viên"
                            : "Không xác định"}
                        </p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-md-8 d-flex align-items-center">
                        <h6 className="mb-0">Profile Information</h6>
                      </div>
                      <div className="col-md-4 text-end">
                        <a onClick={this.setModalIsOpen}>
                          <i
                            className="fas fa-user-edit text-secondary text-sm"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            aria-hidden="true"
                            aria-label="Edit Profile"
                          ></i>
                          <span className="sr-only">Edit Profile</span>
                        </a>
                        <UpdateAccountModal
                          isOpen={this.state.modalIsOpen}
                          onClose={() => this.setState({ modalIsOpen: false })}
                          userData={this.state.infoUser}
                          onUpdate={(updatedData) => {
                            // Gọi API cập nhật tài khoản ở đây
                            this.updateShop(updatedData);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="card-body p-3">
                    <ul className="list-group">
                      <li className="list-group-item border-0 ps-0 pt-0 text-sm">
                        <strong className="text-dark">Full Name:</strong> &nbsp;
                        {this.state.infoUser.fullName}
                      </li>
                      <li className="list-group-item border-0 ps-0 text-sm">
                        <strong className="text-dark">Mobile:</strong> &nbsp;
                        {this.state.infoUser.phoneNumber}
                      </li>
                      <li className="list-group-item border-0 ps-0 text-sm">
                        <strong className="text-dark">Email:</strong> &nbsp;
                        {this.state.infoUser.email}
                      </li>
                      <li className="list-group-item border-0 ps-0 text-sm">
                        <strong className="text-dark">Location:</strong> &nbsp;{" "}
                        {this.state.infoUser.address}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-12 col-xl-8">
                <div className="card card-plain h-100">
                  <div className="card-header pb-0 p-3">
                    <h6 className="mb-0">Leave Plans</h6>
                  </div>
                  <div className="card-body p-3">
                    <LeaveCalendar {...this.props} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
