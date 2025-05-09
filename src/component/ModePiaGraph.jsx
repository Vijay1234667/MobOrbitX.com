import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = {


    xAxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May"],
    },
    yAxis: {
        title: {
            text: "Sales ($)",
        },
    },
   series: [{
        type: 'pie',
        allowPointSelect: true,
        keys: ['name', 'y', 'selected', 'sliced'],
        data: [
            ['Apple', 12, true],
            ['Samsung',11, false],
            ['Xiaomi', 10, false],
            ['Unknown', 10, false],
            ['Oppo', 9, false],
            ['Vivo',8, false],
            ['Realme', 7, false],
            ['Realme', 6, false],
            ['Realme', 5, false],
        ],
        showInLegend: true
    }]
};

const ModePiaGraph = () => {
    return (
        <div>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    );
};

export default ModePiaGraph;
