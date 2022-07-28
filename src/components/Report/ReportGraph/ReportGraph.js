import s from './ReportGraph.module.css';
import {
  Chart as ChartJS,
  BarElement,
  LinearScale,
  CategoryScale,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(BarElement, LinearScale, CategoryScale);

function ReportGraph({ data, category }) {
  console.log(Boolean(data));
  const newData = data[category];
  const value = Object.values(newData).slice(1);
  console.log(value);
  const keys = Object.keys(newData).slice(1);
  console.log(keys);

  const dataChart = {
    labels: keys,
    datasets: [
      {
        label: 'My First Dataset',
        data: value,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const config = {
    type: 'bar',
    data: dataChart,
    options: {
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
      legend: {
        labels: {
          fontSize: 26,
        },
      },
    },
  };

  return (
    <div className={s.wrap}>
      <div className={s.container}>
        {data ? (
          <Bar
            data={dataChart}
            height={212}
            config={config}
            className={s.bar}
          />
        ) : null}
      </div>
    </div>
  );
}

export default ReportGraph;
