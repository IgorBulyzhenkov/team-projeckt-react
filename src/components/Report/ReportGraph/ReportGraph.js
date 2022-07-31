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
import { useContext } from 'react';
import { ThemeContext } from 'components/App';
import { darkThemeStyles } from 'services/theme-styles';
import { getWidth, getCategory } from '../../../redux/selectors';

ChartJS.register(BarElement, LinearScale, CategoryScale, ChartDataLabels);

function ReportGraph({ data }) {
  const screen = useSelector(getWidth);
  const category = useSelector(getCategory);
  const newData = data[category];
  const sortData = Object.entries(newData);
  const testSort = sortData.sort((a, b) => b[1] - a[1]);
  const value = testSort.map(el => el[1]).slice(1);
  const keys = testSort.map(el => el[0]).slice(1);
  const themeColor = useContext(ThemeContext);
  const textColor =
    themeColor === 'dark' ? darkThemeStyles.textColor : '#52555F';
  const border = themeColor === 'dark' ? '#777777' : 'rgba(245, 246, 251, 1)';

  const MobileTheme =
    themeColor === 'dark' && screen === 'tablet'
      ? { backgroundColor: 'rgb(63, 78, 79)', color: 'rgb(255, 255, 255)' }
      : {};

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
        return 80;
      default:
        break;
    }
  };

  const fontSizeText = () => {
    switch (screen) {
      case 'tablet':
        return '12';

      case 'mobile':
        return '10';
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

  const positionText = () => {
    switch (screen) {
      case 'tablet':
        return 'top';

      case 'mobile':
        return 'right';
      default:
        break;
    }
  };

  return (
    <div className={s.wrap} style={MobileTheme}>
      <div className={s.container}>
        <Bar
          data={dataChart}
          options={{
            maintainAspectRatio: false,
            responsive: true,
            indexAxis: heightMobileScreen(),
            layout: {
              padding: {
                top: 30,
                right: paddingScreenRight(),
              },
            },
            plugins: {
              datalabels: {
                color: `${textColor}`,
                anchor: 'end',
                align: positionText(),
                font: { size: fontSizeText(), weight: '400', family: 'Roboto' },
                formatter: value => `${value} UAH`,
              },
            },
            scales: {
              x: {
                ticks: {
                  display: lineX(),
                  color: textColor,
                },
                grid: {
                  display: false,
                  borderColor: borderColor(),
                },
              },
              y: {
                ticks: {
                  display: lineY(),
                  color: textColor,
                },
                grid: {
                  display: gridLineY(),
                  tickColor: 'transparent',
                  borderColor: 'transparent',
                  offset: true,
                  color: border,
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
