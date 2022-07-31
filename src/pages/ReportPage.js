import { MdKeyboardBackspace } from 'react-icons/md';
import s from './ReportPage.module.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useLazyGetPeriodDataQuery } from '../redux/kapustaAPI';
import ReportList from 'components/Report/ReportList/ReportList';
import Container from 'components/Container/Container';
import DateSwiper from 'components/DateSwiper';
import { useContext } from 'react';
import { ThemeContext } from 'components/App';
import { darkThemeStyles } from 'services/theme-styles';

function ReportPage() {
  const [value, setValue] = useState('');
  const [incomes, setIncomes] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [getPeriodData] = useLazyGetPeriodDataQuery();
  const total = incomes.incomeTotal - expenses.expenseTotal;

  // const category = useSelector(getCategory);
  // const dispatch = useDispatch();

  const themeColor = useContext(ThemeContext);
  const themeStyle = themeColor === 'dark' ? darkThemeStyles.elements : {};
  const themeStyle2 = themeColor === 'dark' ? darkThemeStyles.basic : {};

  useEffect(() => {
    if (!value) {
      return;
    }
    getPeriodData(value).then(res => {
      setExpenses(res.data.expenses);
      setIncomes(res.data.incomes);
    });
  }, [value, getPeriodData]);

  const MobileTheme =
    themeColor === 'dark'
      ? {
          boxShadow: '5px 10px 20px rgb(170 178 197 / 40%)',
          backgroundColor: 'rgb(63, 78, 79)',
          color: 'rgb(255, 255, 255)',
        }
      : {};

  return (
    <section className={s.test}>
      <Container>
        <div className={s.wrap}>
          <div className={s.wrap_link}>
            <Link to="/home" className={s.link}>
              <MdKeyboardBackspace className={s.svg} style={themeStyle2} />
              <p style={themeStyle2} className={s.link_text}>
                Main page
              </p>
            </Link>
          </div>

          <div className={s.dateSwiperContainer}>
            <DateSwiper changeDate={setValue} themeStyle={themeStyle2} />
          </div>

          <div className={s.balance}>
            <p className={s.balance_text} style={themeStyle2}>
              Current balance:
            </p>

            <p className={s.balance_cash}>
              {total ? `${total}.00 UAH` : '0.00 UAH'}
            </p>
          </div>
        </div>
        <div style={MobileTheme} className={s.cash}>
          <div className={s.expenses}>
            <p style={themeStyle} className={s.expenses__text}>
              Expenses:
            </p>
            <p className={s.expenses__cash}>
              {expenses.expenseTotal
                ? ` -${expenses.expenseTotal}.00 UAH`
                : '0.00 UAH'}
            </p>
          </div>
          <span className={s.span}></span>
          <div className={s.income}>
            <p style={themeStyle} className={s.income__text}>
              Income:
            </p>
            <p className={s.income__cash}>
              {incomes.incomeTotal
                ? `+ ${incomes.incomeTotal}.00 UAH`
                : '0.00 UAH'}
            </p>
          </div>
        </div>

        <ReportList incomes={incomes} expenses={expenses} />
      </Container>
    </section>
  );
}

export default ReportPage;
