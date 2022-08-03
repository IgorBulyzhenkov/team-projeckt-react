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
import { useContext, useRef, useState, useEffect } from 'react';
import { ThemeContext } from 'components/App';
import { darkThemeStyles } from 'services/theme-styles';
import { getWidth, getCategory } from '../../../redux/selectors';

ChartJS.register(BarElement, LinearScale, CategoryScale, ChartDataLabels);

function ReportGraph({ data }) {
  const chartRef = useRef();
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
        return 15;

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

  const colorFill = themeColor === 'dark' ? 'rgb(63, 78, 79)' : '#ffffff';

  // const colorBorder = themeColor === 'dark' ? 'transparent' : 'rgb(63, 78, 79)';

  const minX = screen === 'tablet' ? 0 : null;
  const maxX = screen === 'tablet' ? 6 : null;

  const [screenWidth, setScreenWidth] = useState(screen);

  const myChart = {
    id: 'myChart',

    afterEvent(chart, args) {
      const {
        canvas,
        chartArea: { left, right, height, top },
      } = chart;

      canvas.addEventListener('mousemove', event => {
        const x = args.event.x;
        const y = args.event.y;

        if (
          x >= left - 12 &&
          x <= left + 12 &&
          y >= height / 2 + top - 15 &&
          y <= height / 2 + top + 32
        ) {
          return (canvas.style.cursor = 'pointer');
        } else if (
          x >= right - 12 &&
          x <= right + 12 &&
          y >= height / 2 + top - 15 &&
          y <= height / 2 + top + 32
        ) {
          return (canvas.style.cursor = 'pointer');
        } else {
          return (canvas.style.cursor = 'default');
        }
      });
    },

    afterDraw(chart) {
      const {
        ctx,
        chartArea: { left, right, height, top },
      } = chart;

      const angle = Math.PI / 180;

      if (screenWidth !== 'tablet') return;
      class circleChevron {
        draw(ctx, x1, pixel) {
          ctx.beginPath();
          ctx.lineWidth = 2;
          ctx.strokeStyle = 'transparent';
          ctx.arc(x1, height / 2 + top, 15, angle * 0, angle * 360, false);
          ctx.stroke();
          ctx.fill();
          ctx.fillStyle = colorFill;
          ctx.closePath();

          ctx.beginPath();
          ctx.lineWidth = 2;
          ctx.strokeStyle = 'rgb(255, 117, 29)';
          ctx.moveTo(x1 + pixel, height / 2 + top - 7.5);
          ctx.lineTo(x1 - pixel, height / 2 + top);
          ctx.lineTo(x1 + pixel, height / 2 + top + 7.5);
          ctx.stroke();
          ctx.closePath();
        }
      }

      let drawCircleLeft = new circleChevron();
      drawCircleLeft.draw(ctx, left, 5);

      let drawCircleRight = new circleChevron();
      drawCircleRight.draw(ctx, right, -5);
    },
  };

  function moveScroll(event) {
    const { current: chart } = chartRef;
    const {
      canvas,
      chartArea: { left, right, top, height },
    } = chart;

    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    if (
      x >= left - 12 &&
      x <= left + 12 &&
      y >= height / 2 + top - 15 &&
      y <= height / 2 + top + 32
    ) {
      chart.options.scales.x.min = chart.options.scales.x.min - 7;
      chart.options.scales.x.max = chart.options.scales.x.max - 7;

      if (chart.options.scales.x.max <= 0) {
        chart.options.scales.x.min = 0;
        chart.options.scales.x.max = 6;
      }
    }

    if (
      x >= right - 12 &&
      x <= right + 12 &&
      y >= height / 2 + top - 15 &&
      y <= height / 2 + top + 32
    ) {
      chart.options.scales.x.min = chart.options.scales.x.min + 7;
      chart.options.scales.x.max = chart.options.scales.x.max + 7;

      if (chart.options.scales.x.max >= dataChart.datasets[0].data.length) {
        chart.options.scales.x.min = dataChart.datasets[0].data.length - 7;
        chart.options.scales.x.max = dataChart.datasets[0].data.length;
      }
    }
    chart.update();
  }

  // const myChartRef = useRef(myChart);
  // const [chartMobile, setChartMobile] = useState(myChartRef.current);

  useEffect(() => {
    setScreenWidth(screen);
  }, [screen]);

  // console.log(chartMobile);

  return (
    <div className={s.wrap} style={MobileTheme}>
      <div className={s.container}>
        <Bar
          data={dataChart}
          ref={chartRef}
          onClick={moveScroll}
          options={{
            maintainAspectRatio: false,
            responsive: true,
            indexAxis: heightMobileScreen(),
            layout: {
              padding: {
                top: 30,
                right: paddingScreenRight(),
                left: 12,
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
                min: minX,
                max: maxX,
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
          plugins={[myChart]}
          className={s.bar}
        />
      </div>
    </div>
  );
}

export default ReportGraph;
