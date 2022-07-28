import ReportSvgSelector from './ReportSvgSelector';
import ReportGraph from 'components/Report/ReportGraph/ReportGraph';
import { useState } from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { FiChevronRight } from 'react-icons/fi';
import s from './ReportList.module.css';
import { useEffect } from 'react';
function ReportList({ incomes, expenses }) {
  const [expenseEl, setExpenseEl] = useState([]);
  const [total, setTotal] = useState({});
  const [category, setCategory] = useState('');

  const Arr = expenses.expensesData;

  useEffect(() => {
    if (!Arr) {
      return;
    }
    const nameArr = Object.keys(Arr);
    setExpenseEl(nameArr);
    const nuwArr = Object.entries(Arr).reduce((acc, el) => {
      acc[el[0]] = el[1].total;
      return acc;
    }, {});

    setTotal(nuwArr);
  }, [Arr]);

  return (
    <>
      <div className={s.wrap}>
        <div className={s.wrapBtn}>
          <button type="button" className={s.button}>
            <FiChevronLeft size="20" className={s.arrowBtn} />
          </button>
          <p className={s.textBtn}>Expenses</p>
          <button type="button" className={s.button}>
            <FiChevronRight size="20" className={s.arrowBtn} />
          </button>
        </div>
        <ul className={s.list}>
          {ReportSvgSelector.filter(({ name }) => expenseEl.includes(name))
            .map((el, index) => {
              const id = Object.keys(total).indexOf(el.name);
              const key = Object.keys(total)[id];
              return { ...el, value: total[key] };
            })
            .map(({ id, nameEng, image, value, name }) => (
              <li key={id} className={s.item}>
                <p className={s.text}>{value}</p>
                <div
                  id={name}
                  className={s.itemSpan}
                  onClick={e => setCategory(e.currentTarget.id)}
                >
                  <span className={s.span}>{image}</span>
                </div>
                <p className={s.text}>{nameEng}</p>
              </li>
            ))}
        </ul>
      </div>
      {category && <ReportGraph data={Arr} category={category} />}
    </>
  );
}
export default ReportList;
