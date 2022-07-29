import { MdKeyboardBackspace } from 'react-icons/md';
import Calendar from 'react-calendar';
import s from './ReportPage.module.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useLazyGetPeriodDataQuery } from '../redux/kapustaAPI';
import ReportList from 'components/Report/ReportList/ReportList';
import Container from 'components/Container/Container';

function ReportPage() {
  const [value, setValue] = useState(new Date());
  const [incomes, setIncomes] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [getPeriodData] = useLazyGetPeriodDataQuery();
  const total = incomes.incomeTotal - expenses.expenseTotal;

  const valueDate = value => {
    const date = new Date(value);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    if (month < 10) {
      month = '0' + month;
    }
    const newDate = year + '-' + month;
    return newDate;
  };

  useEffect(() => {
    getPeriodData(valueDate(value)).then(res => {
      setExpenses(res.data.expenses);
      setIncomes(res.data.incomes);
    });
  }, [value, getPeriodData]);

  const handleClick = activeStartDate => {
    setValue(activeStartDate);
  };

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
            <Calendar
              defaultView={'month'}
              next2Label={null}
              prev2Label={null}
              onActiveStartDateChange={({ activeStartDate }) =>
                handleClick(activeStartDate)
              }
              locale={'en-EN'}
            />
          </div>

          <div className={s.balance}>
            <p className={s.balance_text}>Balance:</p>
            <p className={s.balance_cash}>{`${total}.00 UAH`}</p>
          </div>
        </div>
        <div className={s.cash}>
          <div className={s.expenses}>
            <p className={s.expenses__text}>Expenses:</p>
            <p className={s.expenses__cash}>- {expenses.expenseTotal}.00 UAH</p>
          </div>
          <span className={s.span}></span>
          <div className={s.income}>
            <p className={s.income__text}>Income:</p>
            <p className={s.income__cash}>+ {incomes.incomeTotal}.00 UAH</p>
          </div>
        </div>

        {incomes && <ReportList incomes={incomes} expenses={expenses} />}
      </Container>
    </section>
  );
}

export default ReportPage;
