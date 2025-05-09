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
        name: 'Revenue',
        data: [98749, 80000, 129000, 64300, 54000, 34300],
        color: '#377CFE', 
    },
    {
        name: 'RPC',
        data: [45321, 140000, 60700, 140500, 19500, 113500],
        color: '#39CB7B', 
    }
]
};

const UserGrowthChart = () => {
  return (
    <div className="bdr-rds23">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default UserGrowthChart;
