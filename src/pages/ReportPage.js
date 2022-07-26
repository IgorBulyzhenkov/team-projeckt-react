import ReportList from 'components/ReportList/ReportList';
import Container from 'components/Container/Container';
import {
  MdKeyboardBackspace,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from 'react-icons/md';
import s from './ReportPage.module.css';
import { Link } from 'react-router-dom';

function ReportPage() {
  return (
    <Container>
      <div className={s.test}>
        <Link to="" className={s.link}>
          <MdKeyboardBackspace className={s.svg} />
        </Link>
        <div className={s.container_calendar}>
          <p className={s.text}>Current period:</p>
          <div className={s.calendar}>
            <button type="button" className={s.btn}>
              <MdKeyboardArrowLeft />
            </button>
            <p className={s.calendar_text}>November 2019</p>
            <button type="button" className={s.btn}>
              <MdKeyboardArrowRight />
            </button>
          </div>
        </div>
        <div className={s.balance}>
          <p className={s.balance_text}>Balance:</p>
          <p className={s.balance_cash}>55 000.00 UAH</p>
        </div>
        <div className={s.cash}>
          <div className={s.expenses}>
            <p className={s.expenses__text}>Expenses:</p>
            <p className={s.expenses__cash}> - 18 000.00 грн</p>
          </div>
          <span className={s.span}></span>
          <div className={s.income}>
            <p className={s.income__text}>Income:</p>
            <p className={s.income__cash}>+ 45 000.00 грн</p>
          </div>
        </div>
      </div>

      <ReportList />
    </Container>
  );
}

export default ReportPage;
