import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import CanvasJSReact from "./canvasjs.react";
import { getBills } from "../../actions/billActions";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Chart = ({ bills, getBills }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    getBills();
  }, [getBills]);

  useEffect(() => {
    if (bills && bills.length > 0) {
      const data = bills.map((bill) => {
        const date = new Date(bill.date);
        const day = date.getDate();
        return { x: day, y: parseInt(bill.amount) };
      });
      setChartData(data);
    }
  }, [bills]);

  const options = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light2",
    title: {
      text: "Time-series chart of the monthly billing cycle",
      fontSize: 20,
    },
    axisY: {
      title: "Amount Spent",
      fontSize: 10,
      suffix: " Rs",
    },
    axisX: {
      title: "Day",
      fontSize: 10,
      suffix: " Jan",
      interval: 2,
    },
    data: [
      {
        type: "line",
        toolTipContent: "{x} Jan: {y} Rs",
        dataPoints: chartData,
      },
    ],
  };

  return (
    <div style={{ marginTop: "25px" }} className="container">
      <CanvasJSChart options={options} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  bills: state.bill.bills,
});

export default connect(mapStateToProps, { getBills })(Chart);
