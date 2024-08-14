import ApexCharts from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { IChartData } from '../types/pnlChartType';

const PreviewChart = ({ chartData }: { chartData: IChartData[] }) => {
  const series = [
    {
      name: '차트 미리보기',
      data: chartData?.map((item) => [
        new Date(item.createdAt).getTime(),
        item.pnlRate,
      ]),
      // data: [
      //   [new Date('2024-08-01').getTime(), 10],
      //   [new Date('2024-08-02').getTime(), 20],
      //   [new Date('2024-08-03').getTime(), 15],
      //   [new Date('2024-08-04').getTime(), 40],
      //   [new Date('2024-08-05').getTime(), 25],
      // ],

      type: 'area',
    },
  ];

  const options: ApexOptions = {
    chart: {
      type: 'line',
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
      colors: ['#19F6C1'],
      width: 2,
    },
    fill: {
      type: 'gradient', // 그라데이션으로 채우기
      gradient: {
        shade: 'light', // 그라데이션의 밝기
        type: 'vertical', // 수직 그라데이션
        shadeIntensity: 0.5,
        gradientToColors: ['#19F6C1'], // 그라데이션의 끝 색상
        inverseColors: false,
        opacityFrom: 0.3, // 시작 색상의 투명도
        opacityTo: 0, // 끝 색상의 투명도
        stops: [0, 100], // 그라데이션의 위치
      },
    },
    xaxis: {
      type: 'category',
      tickAmount: 4,
      tickPlacement: 'on',
      // categories: ['2023-01', '2023-02', '2023-03', '2023-04', '2023-05'],
      labels: {
        formatter: (value) => {
          const date = new Date(value);
          const month = date.getMonth() + 1; // getMonth() returns 0-based index
          const day = date.getDate();
          return `${month.toString().padStart(2, '0')}/${day
            .toString()
            .padStart(2, '0')}`;
        },
        style: {
          colors: '#ffffff',
        },

        offsetX: 0,
      },
      axisBorder: {
        show: true,
        color: '#FFFFFF', // x축 경계선 색상 하얀색으로 설정
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        formatter: (value) => {
          return value + '%'; // y축의 값을 %로 포맷팅합니다.
        },
        style: {
          colors: ['#ffffff'],
        },
      },
    },
    grid: {
      borderColor: '#FFFFFF', // 그리드 선 색상 하얀색으로 설정
      strokeDashArray: 3, // 점선 스타일
    },
    tooltip: {
      enabled: false,
    },
  };

  return (
    <ApexCharts
      options={options}
      series={series}
      type='area'
      height={240}
      width={500}
    />
  );
};

export default PreviewChart;
