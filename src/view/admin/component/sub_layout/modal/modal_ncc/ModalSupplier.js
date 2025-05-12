import React, { Component } from "react";

class ModalSupplier extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  handleClose = () => {
    this.setState({ show: false });
    if (this.props.onClose) {
      this.props.onClose(); // gọi hàm đóng từ component cha nếu có
    }
  };

  componentDidMount() {
    this.setState({ show: this.props.isOpen });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isOpen !== this.props.isOpen) {
      this.setState({ show: this.props.isOpen });
    }
  }

  render() {
    const { show } = this.state;

    if (!show) return null;

    return (
      <div
        className="modal fade show d-block"
        tabIndex="-1"
        role="dialog"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <div className="modal-dialog  modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button type="button" className="close btn" onClick={this.handleClose}>
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">Nội dung modal...</div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={this.handleClose}>
                Close
              </button>
              <button className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalSupplier;
