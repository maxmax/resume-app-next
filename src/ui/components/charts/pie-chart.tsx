'use client';
import React from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

interface DataPoint {
  label: string;
  value: number;
}

interface PieChartProps {
  data: DataPoint[];
}

const PieChart: React.FC<PieChartProps> = ({ data }) => {
  const options: Highcharts.Options = {
    title: {
      text: ''
    },
    accessibility: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    chart: {
      type: 'pie'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %'
        }
      }
    },
    series: [{
      type: 'pie',
      name: 'Share',
      data: data.map(item => ({
        name: item.label,
        y: item.value
      }))
    }]
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default PieChart;
