import React, { Component } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import Modal from "react-modal";
import { urlapi } from "../../../../setting/store/const";
import "./LeaveCalendar.css";

class LeaveCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      events: [],
      formData: {
        startDate: "",
        endDate: "",
        typeLeave: "Nghỉ phép",
        reason: "",
      },
    };
  }

  componentDidMount() {
    fetch(
      `${urlapi}/api/leave-plans/user/${this.props.state_data.user_info.id_user}`,
      {
        method: "PUT",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.data && data.data.length > 0) {
          const formattedEvents = data.data.map((item) => ({
            title: `${item.typeLeave}`,
            start: item.startDate,
            end: item.endDate,
            color: item.status === "Approved" ? "#4ade80" : "#facc15",
          }));
          this.setState({ events: formattedEvents });
        }
      })
      .catch((err) => console.error(err));
  }

  handleDateClick = (arg) => {
    this.setState({
      modalIsOpen: true,
      formData: {
        ...this.state.formData,
        startDate: arg.dateStr,
        endDate: arg.dateStr,
      },
    });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [name]: value,
      },
    }));
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const idUser = this.props.state_data.user_info.id_user;
    const { formData } = this.state;

    try {
      await fetch(`${urlapi}/api/leave-plans/new`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, idUser }),
      });
      alert("Gửi yêu cầu thành công!");
      this.setState({ modalIsOpen: false });
    } catch (error) {
      alert("Gửi yêu cầu thất bại!");
    }
  };

  render() {
    const { modalIsOpen, events, formData } = this.state;

    return (
      <div>
        <div className="calendar-wrapper">
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            dateClick={this.handleDateClick}
            events={events}
            height={400}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,dayGridWeek",
            }}
          />
        </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => this.setState({ modalIsOpen: false })}
        >
          <h2>Xin nghỉ phép</h2>
          <form onSubmit={this.handleSubmit}>
            <label>Ngày bắt đầu:</label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={this.handleChange}
              required
            />
            <label>Ngày kết thúc:</label>
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={this.handleChange}
              required
            />
            <label>Loại nghỉ:</label>
            <select
              name="typeLeave"
              value={formData.typeLeave}
              onChange={this.handleChange}
            >
              <option value="Nghỉ phép">Nghỉ phép</option>
              <option value="Nghỉ bệnh">Nghỉ bệnh</option>
              <option value="Nghỉ cá nhân">Nghỉ cá nhân</option>
            </select>
            <label>Lý do:</label>
            <textarea
              name="reason"
              value={formData.reason}
              onChange={this.handleChange}
              required
            />
            <div style={{ marginTop: "10px" }}>
              <button type="submit">Gửi yêu cầu</button>
              <button
                type="button"
                onClick={() => this.setState({ modalIsOpen: false })}
              >
                Hủy
              </button>
            </div>
          </form>
        </Modal>
      </div>
    );
  }
}

export default LeaveCalendar;
