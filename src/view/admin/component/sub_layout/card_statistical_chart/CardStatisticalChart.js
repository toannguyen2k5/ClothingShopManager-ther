import React, { Component } from "react";
import AreaChart from "../views_canvasjs/area charts/Area Chart";

class CardStatisticalChart extends Component {
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
          time_check: "person",
          color_bg: "primary",
          value_new: 59,
          value_old: 64,
          title: "Today's Users",
          title_check_time: "increase in today sales.",
          update_time: 8,
        },
        {
          time_check: "person",
          color_bg: "success",
          value_new: 6700,
          value_old: 6688,
          title: "New Clients",
          title_check_time: "increase in today sales.",
          update_time: 8,
        },
        {
          time_check: "person",
          color_bg: "warning",
          value_new: 657,
          value_old: 657,
          title: "Today's Order",
          title_check_time: "increase in today sales.",
          update_time: 8,
        },
      ],
    });
  }
  render() {
    return (
      <>
        {this.state.data.map((item) => (
          <div className="col-lg-4 col-md-6 mt-4 mb-4">
            <div
              className="card z-index-2"
              style={{ backgroundColor: "whitesmoke" }}
            >
              <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
                <div
                  className={`bg-gradient-${item.color_bg} shadow-${item.color_bg} border-radius-lg py-3 pe-1`}
                >
                  <div className="chart d-flex justify-content-center">
                    <AreaChart />
                    {/* <canvas
                      id="chart-line"
                      className="chart-canvas"
                      height="170"
                      style={{
                        display: "block",
                        boxSizing: "border-box",
                        height: "170px",
                        width: "466px",
                      }}
                      width="466"
                    ></canvas> */}
                  </div>
                </div>
              </div>
              <div className="card-body">
                <h6 className="mb-0 "> {item.title} </h6>
                <p className="text-sm ">
                  &nbsp; (
                  <span
                    className={`text-${
                      item.value_new / item.value_old - 1 > 0
                        ? "success"
                        : item.value_new / item.value_old - 1 < 0
                        ? "danger"
                        : "warning"
                    } text-sm font-weight-bolder`}
                  >
                    {((item.value_new / item.value_old - 1) * 100).toFixed(2)}%
                  </span>
                  )&nbsp;increase in today sales.&nbsp;
                </p>
                <hr className="dark horizontal" />
                <div className="d-flex ">
                  <i className="material-icons text-sm my-auto me-1">
                    schedule
                  </i>
                  <p className="mb-0 text-sm">
                    {" "}
                    updated&nbsp;{item.update_time}&nbsp;min ago{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  }
}

export default CardStatisticalChart;
