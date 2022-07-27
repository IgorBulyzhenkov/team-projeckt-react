import { MdKeyboardBackspace } from 'react-icons/md';
import Calendar from 'react-calendar';
import s from './ReportPage.module.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ReportList from 'components/ReportList/ReportList';
import Container from 'components/Container/Container';
import { useLazyGetPeriodDataQuery } from '../redux/kapustaAPI';

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

  console.log(incomes, expenses);

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
            <Link to="" className={s.link}>
              <MdKeyboardBackspace className={s.svg} />
            </Link>

            <p className={s.link_text}> Main page</p>
          </div>
          <div className={s.container_calendar}>
            <p className={s.text}>Current period:</p>
            <div className={s.calendar}>
              {/* <button type="button" className={s.btn}>
                <FiChevronLeft size="20" className={s.arrowBtn} />
              
                </button>
              <p className={s.calendar_text}>November 2019</p>
              <button type="button" className={s.btn}>
                <FiChevronRight size="20" className={s.arrowBtn} />
              </button> */}
              <Calendar
                defaultView={'month'}
                next2Label={null}
                prev2Label={null}
                onActiveStartDateChange={({ activeStartDate }) =>
                  handleClick(activeStartDate)
                }
              />
            </div>
          </div>

          <div className={s.balance}>
            <p className={s.balance_text}>Balance:</p>
            <p className={s.balance_cash}>{total} UAH</p>
          </div>
        </div>
        <div className={s.cash}>
          <div className={s.expenses}>
            <p className={s.expenses__text}>Expenses:</p>
            <p className={s.expenses__cash}>
              {' '}
              - {expenses.expenseTotal}.00 грн
            </p>
          </div>
          <span className={s.span}></span>
          <div className={s.income}>
            <p className={s.income__text}>Income:</p>
            <p className={s.income__cash}>+ {incomes.incomeTotal}.00 грн</p>
          </div>
        </div>

        <ReportList />
      </Container>
    </section>
  );
}

export default ReportPage;
