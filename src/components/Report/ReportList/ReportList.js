import ReportSvgSelector from './ReportSvgSelector';
import ReportGraph from 'components/Report/ReportGraph/ReportGraph';
import { useSelector, useDispatch } from 'react-redux';
import { getCategory, getWidth } from 'redux/selectors';
import { setCategory } from 'redux/reducer';
import { useState, useEffect } from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { FiChevronRight } from 'react-icons/fi';
import { useContext } from 'react';
import { ThemeContext } from 'components/App';
import s from './ReportList.module.css';

function ReportList({ incomes, expenses }) {
  const screen = useSelector(getWidth);
  const [showIcon, setShowIcon] = useState(false);
  const [expenseEl, setExpenseEl] = useState([]);
  const [total, setTotal] = useState({});

  const dispatch = useDispatch();
  const category = useSelector(getCategory);
  const data = showIcon ? expenses.expensesData : incomes.incomesData;
  const dataLenght = Object.entries(total);

  const themeColor = useContext(ThemeContext);

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

  const MobileTheme =
    themeColor === 'dark' && screen === 'tablet'
      ? { backgroundColor: 'rgb(63, 78, 79)', color: 'rgb(255, 255, 255)', heigth: '100vh' }
      : {};

  const mobileTextTheme =
    screen === 'tablet'
      ? { backgroundColor: 'rgb(63, 78, 79)', color: 'rgb(255, 255, 255)' }
      : { background: 'rgb(44, 54, 57)', color: 'rgb(255, 255, 255)' };

  const themeColorProvider = themeColor === 'dark' ? mobileTextTheme : {};

  const mobileStyleIconColor = themeColor === 'dark' ? { fill: '#FF751D' } : {};

  const mobileBackgroundColorIconColor =
    themeColor === 'dark' ? { backgroundColor: '#ff741d19' } : {};

  return (
    <>
      <div className={s.wrap} style={MobileTheme}>
        <div className={s.wrapBtn}>
          <button
            type="button"
            className={s.button}
            onClick={() => toggleIcon()}
          >
            <FiChevronLeft size="20" className={s.arrowBtn} />
          </button>
          {showIcon ? (
            <p style={themeColorProvider} className={s.textBtn}>
              Expenses
            </p>
          ) : (
            <p style={themeColorProvider} className={s.textBtn}>
              Incomes
            </p>
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
          <p className={s.textBtn} style={themeColorProvider}>
            data not found for the current month
          </p>
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
                  <p className={s.text} style={themeColorProvider}>
                    {value}.00
                  </p>
                  <div
                    id={name}
                    className={s.itemSpan}
                    style={mobileBackgroundColorIconColor}
                    onClick={e => dispatch(setCategory(e.currentTarget.id))}
                  >
                    <span className={s.span} style={mobileStyleIconColor}>
                      {image}
                    </span>
                  </div>
                  <p className={s.text} style={themeColorProvider}>
                    {nameEng}
                  </p>
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
