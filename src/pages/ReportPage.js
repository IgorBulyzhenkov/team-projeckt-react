import { MdKeyboardBackspace } from 'react-icons/md';
import s from './ReportPage.module.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useLazyGetPeriodDataQuery } from '../redux/kapustaAPI';
import ReportList from 'components/Report/ReportList/ReportList';
import Container from 'components/Container/Container';
import DateSwiper from 'components/DateSwiper';

function ReportPage() {
  const [value, setValue] = useState('');
  const [incomes, setIncomes] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [getPeriodData] = useLazyGetPeriodDataQuery();
  const total = incomes.incomeTotal - expenses.expenseTotal;
  console.log(total);

  useEffect(() => {
    if (!value) {
      return;
    }
    getPeriodData(value).then(res => {
      setExpenses(res.data.expenses);
      setIncomes(res.data.incomes);
    });
  }, [value, getPeriodData]);

  return (
    <section className={s.test}>
      <Container>
        <div className={s.wrap}>
          <div className={s.wrap_link}>
            <Link to="/home" className={s.link}>
              <MdKeyboardBackspace className={s.svg} />
            </Link>
            <p className={s.link_text}> Main page</p>
          </div>
          <div className={s.container_calendar}>
            <p className={s.text}>Current period:</p>
          </div>

          <div className={s.balance}>
            <p className={s.balance_text}>Balance:</p>
            <p className={s.balance_cash}>
              {total ? `${total}.00 UAH` : '0.00 UAH`'}
            </p>
            <div className={s.balanceDateWrap}>
              <div className={s.dateSwiperContainer}>
                <DateSwiper changeDate={setValue} />
              </div>
              <div className={s.balance}>
                <p className={s.balance_text}>Balance:</p>
                <p className={s.balance_cash}>{`${total}.00 UAH`}</p>
              </div>
            </div>
          </div>
          <div className={s.cash}>
            <div className={s.expenses}>
              <p className={s.expenses__text}>Expenses:</p>
              <p className={s.expenses__cash}>
                {' '}
                {expenses.expenseTotal
                  ? ` -${expenses.expenseTotal}.00 UAH`
                  : '0.00 UAH'}
              </p>
            </div>
            <span className={s.span}></span>
            <div className={s.income}>
              <p className={s.income__text}>Income:</p>
              <p className={s.income__cash}>
                {expenses.expenseTotal
                  ? `+ ${incomes.incomeTotal}.00 UAH`
                  : '0.00 UAH'}
              </p>
            </div>
          </div>
          <ReportList incomes={incomes} expenses={expenses} />
        </div>
      </Container>
    </section>
  );
}

export default ReportPage;
