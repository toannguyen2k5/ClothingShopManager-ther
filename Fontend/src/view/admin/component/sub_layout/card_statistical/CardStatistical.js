import React, { Component } from "react";

class CardStatistical extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.setState({
      data: [
        {
          time_check: "weekend",
          color_bg: "dark",
          value_new: 67,
          value_old: 64,
          title_check: "Today's Money",
          title_check_time: "than lask week",
        },
        {
          time_check: "person",
          color_bg: "primary",
          value_new: 59,
          value_old: 64,
          title_check: "Today's Users",
          title_check_time: "than lask month",
        },
        {
          time_check: "person",
          color_bg: "success",
          value_new: 6700,
          value_old: 6688,
          title_check: "New Clients",
          title_check_time: "than yesterday",
        },
        {
          time_check: "person",
          color_bg: "warning",
          value_new: 657,
          value_old: 657,
          title_check: "Today's Order",
          title_check_time: "than lask week",
        },
      ],
    });
  }
  render() {
    return (
      <>
        {this.state.data.map((item) => (
          <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
            <div className="card">
              <div
                className="card-header p-3 pt-2"
                style={{ backgroundColor: "whitesmoke" }}
              >
                <div
                  className={`icon icon-lg icon-shape bg-gradient-${item.color_bg} shadow-${item.color_bg} text-center border-radius-xl mt-n4 position-absolute`}
                >
                  <i className="material-icons opacity-10">{item.time_check}</i>
                </div>
                <div className="text-end pt-1">
                  <p className="text-sm mb-0 text-capitalize">
                    {item.title_check}
                  </p>
                  <h4 className="mb-0">{item.value_new}</h4>
                </div>
              </div>
              <hr className="my-0" />
              <div
                className="card-footer p-3"
                style={{ backgroundColor: "whitesmoke" }}
              >
                <p className="mb-0">
                  <span
                    className={`text-${
                      item.value_new / item.value_old - 1 > 0
                        ? "success"
                        : item.value_new / item.value_old - 1 < 0
                        ? "danger"
                        : "warning"
                    } text-sm font-weight-bolder`}
                  >
                    {((item.value_new / item.value_old - 1) * 100).toFixed(2)}
                    %&nbsp;
                  </span>
                  {item.title_check_time}
                </p>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  }
}

export default CardStatistical;
