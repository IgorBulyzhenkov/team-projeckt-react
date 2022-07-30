import s from './ReportGraph.module.css';
import {
  Chart as ChartJS,
  BarElement,
  LinearScale,
  CategoryScale,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { getWidth } from '../../../redux/selectors';

ChartJS.register(BarElement, LinearScale, CategoryScale, ChartDataLabels);

function ReportGraph({ data, category }) {
  const screen = useSelector(getWidth);

  const newData = data[category];

  const value = Object.values(newData).slice(1);
  const keys = Object.keys(newData).slice(1);

  const widthBar = () => {
    switch (screen) {
      case 'tablet':
        return 38;

      case 'mobile':
        return 15;
      default:
        break;
    }
  };

  const dataChart = {
    type: 'bar',
    labels: keys,
    plugins: [ChartDataLabels],
    datasets: [
      {
        data: value,
        backgroundColor: [
          'rgba(255, 117, 29, 1)',
          ' rgba(255, 218, 192, 1)',
          ' rgba(255, 218, 192, 1)',
        ],
        borderRadius: [10],
        maxBarThickness: [widthBar()],
      },
    ],
  };

  // display: function (context) {
  //             const dataTrue = data.find(
  //               (_, index) => index === context.dataIndex
  //             );

  //             return dataTrue > 500;
  //           },

  const borderColor = () => {
    switch (screen) {
      case 'mobile':
        return 'transparent';
      default:
        break;
    }
  };

  const heightMobileScreen = () => {
    switch (screen) {
      case 'tablet':
        return 'x';

      case 'mobile':
        return 'y';
      default:
        break;
    }
  };


  const lineY = () => {
    switch (screen) {
      case 'tablet':
        return false;

      case 'mobile':
        return true;
      default:
        break;
    }
  };

  const lineX = () => {
    switch (screen) {
      case 'tablet':
        return true;

      case 'mobile':
        return false;
      default:
        break;
    }
  };

  const gridLineY = () => {
    switch (screen) {
      case 'tablet':
        return true;

      case 'mobile':
        return false;
      default:
        break;
    }
  };

  const paddingScreenRight = () => {
    switch (screen) {
      case 'tablet':
        return 0;

      case 'mobile':
        return 30;
      default:
        break;
    }
  };


  return (
    <div className={s.wrap}>
      <div className={s.container}>
        <Bar
          data={dataChart}
          // height={heightScreen()}
          options={{
            indexAxis: heightMobileScreen(),
            layout: {
              padding: {
                top: 30,
                right: paddingScreenRight(),
              },
            },
            plugins: {
              datalabels: {
                color: '#52555F',
                anchor: 'end',
                align: 'top',
                fontSize: '40',
              },
            },
            scales: {
              x: {
                ticks: {
                  display: lineX(),
                },
                grid: {
                  display: false,
                  borderColor: borderColor(),
                },
              },
              y: {
                ticks: {
                  display: lineY(),
                },
                grid: {
                  display: gridLineY(),
                  tickColor: 'transparent',
                  borderColor: 'transparent',
                  offset: true,
                },
              },
            },
          }}
          className={s.bar}
        />
      </div>
    </div>
  );
}

export default ReportGraph;
