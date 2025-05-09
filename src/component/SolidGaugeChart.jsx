import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsMore from 'highcharts/highcharts-more';
import SolidGauge from 'highcharts/modules/solid-gauge';



const SolidGaugeChart = () => {
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartOptions({
      chart: {
        type: 'solidgauge',
        height: 170,
      },

      title: null,

      pane: {
        center: ['50%', '85%'],
        size: '120%',
        startAngle: -90,
        endAngle: 90,
        background: {
          backgroundColor: Highcharts.defaultOptions.legend?.backgroundColor || '#fafafa',
          borderRadius: 5,
          innerRadius: '60%',
          outerRadius: '100%',
          shape: 'arc',
        },
      },

      exporting: {
        enabled: false,
      },

      tooltip: {
        enabled: false,
      },

      yAxis: {
        min: 0,
        max: 200,
        stops: [
          [0.1, '#39CB7B'],
          [0.5, '#39CB7B'],
          [0.9, '#39CB7B'],
        ],
        lineWidth: 0,
        tickWidth: 0,
        minorTickInterval: null,
        tickAmount: 2,
        title: {
          text: 'Month Target achieved',
          y: -70,
        },
        labels: {
          y: 16,
        },
      },

      plotOptions: {
        solidgauge: {
          borderRadius: 3,
          dataLabels: {
            y: 5,
            borderWidth: 0,
            useHTML: true,
            format:
              '<div style="text-align:center">' +
              '<span style="font-size:25px">{y}</span><br/>' +
              '<span style="font-size:12px;opacity:0.4">km/h</span>' +
              '</div>',
          },
        },
      },

      series: [
        {
          name: 'Speed',
          data: [92],
          tooltip: {
            valueSuffix: ' km/h',
          },
        },
      ],

      credits: {
        enabled: false,
      },
    });
  }, []);

  return (
    <div style={{ maxWidth: '300px', margin: '0 auto' }}>
      {chartOptions.series ? (
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      ) : (
        <p>Loading chart...</p>
      )}
    </div>
  );
};

export default SolidGaugeChart;
