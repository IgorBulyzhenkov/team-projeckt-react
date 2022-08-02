import s from './Summary.module.css';
import { useContext } from 'react';
import { ThemeContext } from 'components/App';
import { darkThemeStyles } from 'services/theme-styles';
import { monthsRusEng } from 'services/dataCharts';

export default function Summary({ monthStats }) {
  const monthStatsTranslated = monthsRusEng.reduce((acc, el) => {
    acc[el.eng] = monthStats[el.rus];
    return acc;
  }, {});
  const monthStatsArr = Object.entries(monthStatsTranslated);

  const themeColor = useContext(ThemeContext);

  const themeStyle =
    themeColor === 'dark'
      ? darkThemeStyles.basic
      : {
          background: '#f5f6fb',
        };

  return (
    <table className={s.table} style={themeStyle}>
      <tbody>
        <tr>
          <th colSpan="2" style={themeStyle}>
            Summary
          </th>
        </tr>
        {monthStatsArr
          .filter(([month, sum]) => sum !== 'N/A')
          .map(([month, sum]) => {
            return (
              <tr style={themeStyle} key={month}>
                <td style={themeStyle}>{month.toUpperCase()}</td>
                <td style={themeStyle}>{sum}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}
