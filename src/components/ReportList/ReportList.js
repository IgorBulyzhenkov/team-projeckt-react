import ReportSvgSelector from './ReportSvgSelector';
import s from './ReportList.module.css';
function ReportList() {
  return (
    <div>
      <div>
        <button type="button">Expenses</button>
        <button type="button">Income</button>
      </div>
      <ul className={s.list}>
        {ReportSvgSelector.map(({ id, name, image }) => (
          <li key={id} className={s.item}>
            <p className={s.text}>numder</p>
            <div className={s.itemSpan}>
              <span className={s.span}>{image}</span>
            </div>

            <p className={s.text}>{name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ReportList;
