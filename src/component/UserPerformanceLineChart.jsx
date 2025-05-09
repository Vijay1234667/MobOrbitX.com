import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = {

  chart: {
    type: 'column',
    height: 320, // 👈 adjust this value
  },


  xAxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May"],
  },
  yAxis: {
    title: {
      text: "Sales ($)",
    },
  },
  series: [
    {
      type: 'line', // or 'bar', 'pie', 'area', etc.
      name: 'System 1',
      data: [120, 200, 150, 80],
      dat: [1500, 2300, 1800, 2700, 3200],
      color: '#377CFE', 
    },

    {
      type: 'line', // or 'bar', 'pie', 'area', etc.
      name: 'ads.com',
      data: [10, 200, 150, 80],
      dat: [10, 1900, 1100, 1700, 1900],
      color: '#39CB7B', 
    },
  ],
};

const UserPerformanceLineChart = () => {
  return (
    <div className="bdr-rds23">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default UserPerformanceLineChart;
