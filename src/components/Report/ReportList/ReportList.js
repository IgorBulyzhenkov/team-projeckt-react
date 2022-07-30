import ReportSvgSelector from './ReportSvgSelector';
import ReportGraph from 'components/Report/ReportGraph/ReportGraph';
import { useSelector, useDispatch } from 'react-redux';
import { getCategory } from 'redux/selectors';
import { setCategory } from 'redux/reducer';
import { useState, useEffect } from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { FiChevronRight } from 'react-icons/fi';
import s from './ReportList.module.css';

function ReportList({ incomes, expenses }) {
  const [showIcon, setShowIcon] = useState(false);
  const [expenseEl, setExpenseEl] = useState([]);
  const [total, setTotal] = useState({});

  const dispatch = useDispatch();
  const category = useSelector(getCategory);
  const data = showIcon ? expenses.expensesData : incomes.incomesData;
  const dataLenght = Object.entries(total);

  useEffect(() => {
    if (!data) {
      return;
    }
    const nameData = Object.keys(data);
    setExpenseEl(nameData);
    const nuwData = Object.entries(data).reduce((acc, el) => {
      acc[el[0]] = el[1].total;
      return acc;
    }, {});

    setTotal(nuwData);
    return () => dispatch(setCategory(''));
  }, [data, dispatch]);

  const toggleIcon = () => {
    setShowIcon(!showIcon);
    category && dispatch(setCategory(''));
  };

  return (
    <>
      <div className={s.wrap}>
        <div className={s.wrapBtn}>
          <button
            type="button"
            className={s.button}
            onClick={() => toggleIcon()}
          >
            <FiChevronLeft size="20" className={s.arrowBtn} />
          </button>
          {showIcon ? (
            <p className={s.textBtn}>Expenses</p>
          ) : (
            <p className={s.textBtn}>Incomes</p>
          )}
          <button
            type="button"
            className={s.button}
            onClick={() => toggleIcon()}
          >
            <FiChevronRight size="20" className={s.arrowBtn} />
          </button>
        </div>
        {!data || dataLenght.length === 0 ? (
          <p className={s.textBtn}> data not found for the current month</p>
        ) : (
          <ul className={s.list}>
            {ReportSvgSelector.filter(({ name }) => expenseEl.includes(name))
              .map(el => {
                const id = Object.keys(total).indexOf(el.name);
                const key = Object.keys(total)[id];
                return { ...el, value: total[key] };
              })
              .map(({ id, nameEng, image, value, name }) => (
                <li key={id} className={s.item}>
                  <p className={s.text}>{value}.00</p>
                  <div
                    id={name}
                    className={s.itemSpan}
                    onClick={e => dispatch(setCategory(e.currentTarget.id))}
                  >
                    <span className={s.span}>{image}</span>
                  </div>
                  <p className={s.text}>{nameEng}</p>
                </li>
              ))}
          </ul>
        )}
      </div>
      {category && <ReportGraph data={data} category={category} />}
    </>
  );
}
export default ReportList;
