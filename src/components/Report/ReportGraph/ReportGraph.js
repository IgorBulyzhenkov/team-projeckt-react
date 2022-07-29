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
        maxBarThickness: [38],
      },
    ],
    // labels: ['a', 'b', 'c', 'd'],
    // datasets: [
    //   {
    //     data: [500, 400, 300, 200],
    //   },
    // ],
    // options: {
    //   indexAxis: 'y',
    //   layout: {
    //     padding: {
    //       right: 60,
    //     },
    //   },
    //   plugins: {
    //     title: {
    //       display: true,
    //       text: 'Graph',
    //     },
    //     legend: {
    //       display: false,
    //     },
    //     datalabels: {
    //       color: 'blue',
    //       anchor: 'end',
    //       align: 'right',
    //       labels: {
    //         title: {
    //           font: {
    //             weight: 'bold',
    //           },
    //         },
    //       },
    //     },
    //   },
    //   scales: {
    //     y: {
    //       grid: {
    //         display: false,
    //       },
    //     },
    //     x: {
    //       grid: {
    //         display: false,
    //       },
    //     },
    //   },
    // },
  };

  const heightScreen = () => {
    switch (screen) {
      case 'mobile':
        return 600;
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

  return (
    <div className={s.wrap}>
      <div className={s.container}>
        <Bar
          data={dataChart}
          height={heightScreen()}
          // style={{"height":"100%"}}
          options={{
            indexAxis: heightMobileScreen(),
            plugins: {
              datalabels: {
                color: '#52555F',
                anchor: 'end',
                align: 'top',
                fontSize: '40',
              },
            },
            // plugins: {
            //   datalabels: {
            //     color: 'blue',
            //     anchor: 'end',
            //     align: 'top',
            //     labels: {
            //       title: {
            //         font: {
            //           weight: 'bold',
            //         },
            //       },
            //     },
            //   },
            // },
            scales: {
              x: {
                ticks: {
                  display: true,
                },
                grid: {
                  display: false,
                  offset: true,
                },
                weight: 5,
              },
              y: {
                ticks: {
                  display: false,
                },
                grid: {
                  display: true,
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
