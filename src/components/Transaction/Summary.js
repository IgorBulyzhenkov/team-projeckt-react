import s from './Summary.module.css';
import { useContext } from 'react';
import { ThemeContext } from 'components/App';
import { darkThemeStyles } from 'services/theme-styles';

export default function Summary({ monthStats }) {
  const monthStatsArr = Object.entries(monthStats);

  const themeColor = useContext(ThemeContext);
  const themeStyle =
    themeColor === 'dark' ? darkThemeStyles.basic : null;

  return (
    <div>
      <table className={s.table}>
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
                  <td style={themeStyle}>{month}</td>
                  <td style={themeStyle}>{sum}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
