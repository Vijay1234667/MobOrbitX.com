import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
// Import treemap module explicitly
import HighchartsTreemap from "highcharts/modules/treemap";


const options = {
  series: [
    {
      type: "treemap",
      name: "Norge",
      allowTraversingTree: true,
      alternateStartingDirection: true,
      dataLabels: {
        format: "{point.name}",
        style: {
          textOutline: "none"
        }
      },
      borderColor: "#ffffff",
      borderRadius: 3,
      nodeSizeBy: "leaf",
      levels: [
        {
          level: 1,
          layoutAlgorithm: "sliceAndDice",
          groupPadding: 3,
          dataLabels: {
            headers: true,
            enabled: true,
            style: {
              fontSize: "0.7em",
              fontWeight: "500",
              textTransform: "uppercase"
            }
          },
          borderRadius: 3,
          borderWidth: 1,
          colorByPoint: true
        },
        {
          level: 2,
          dataLabels: {
            enabled: true,
            inside: false
          }
        }
      ],
      data: [
        { name: "Raghav Dhuria's Team", parent: "A", value: 70923 },
        { name: "Europe", parent: "B", value: 39494 },
        { name: "Americas", parent: "C", value: 31969 },
        { name: "Innlandet", parent: "", value: 49391 },
      ]
    }
  ],
};

const TreeMapChartPage = () => {
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default TreeMapChartPage;
