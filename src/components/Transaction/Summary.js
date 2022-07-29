import s from './Summary.module.css';

export default function Summary({ monthStats }) {
  const monthStatsArr = Object.entries(monthStats);
  return (
    <table className={s.table}>
      <tbody>
        <tr>
          <th colSpan="2">Summary</th>
        </tr>
        {monthStatsArr
          .filter(([month, sum]) => sum !== 'N/A')
          .map(([month, sum]) => {
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
