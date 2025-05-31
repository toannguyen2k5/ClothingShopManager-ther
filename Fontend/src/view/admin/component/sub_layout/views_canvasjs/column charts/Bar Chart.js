import React, { Component } from "react";
import CanvasJSReact from "../../../../../../setting/assets/canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var CanvasJS = CanvasJSReact.CanvasJS;

class BarChart extends Component {
  addSymbols(e) {
    var suffixes = ["", "K", "M", "B"];
    var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
    if (order > suffixes.length - 1) order = suffixes.length - 1;
    var suffix = suffixes[order];
    return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
  }
  render() {
    const containerProps = {
      width: "100%",
      height: "450px",
      margin: "auto",
	  background:"000"
    };
    const options = {
      animationEnabled: true,
      theme: "light2",
      title: {
        text: "Most Popular Social Networking Sites",
      },
      axisX: {
        title: "Social Network",
        reversed: true,
      },
      axisY: {
        title: "Monthly Active Users",
        labelFormatter: this.addSymbols,
      },
      data: [
        {
          type: "bar",
          dataPoints: [
            { y: 2200000000, label: "Facebook" },
            { y: 1800000000, label: "YouTube" },
            { y: 800000000, label: "Instagram" },
            { y: 563000000, label: "Qzone" },
            { y: 376000000, label: "Weibo" },
            { y: 336000000, label: "Twitter" },
            { y: 330000000, label: "Reddit" },
          ],
        },
      ],
    };

    return (
      <div style={{ width: "100%", position: "relative" }}>
        <CanvasJSChart options={options} containerProps={containerProps} />
      </div>
    );
  }
}

export default BarChart;
