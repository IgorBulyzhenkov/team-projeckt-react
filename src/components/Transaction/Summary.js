import s from './Summary.module.css';

export default function Summary({ monthStats }) {
  const monthStatsArr = Object.entries(monthStats);
  return (
    <table className={s.table}>
      <tbody>
        <tr>
          <th colSpan="2">Summary</th>
        </tr>
        {monthStatsArr.map(([month, sum]) => {
          if (sum === 'N/A') {
            // return;
          }
          return (
            <tr key={month}>
              <td>{month}</td>
              <td>{sum}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
