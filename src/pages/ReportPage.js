import ReportList from 'components/ReportList/ReportList';
import ReportGraph from 'components/ReportGraph/ReportGraph';
import Container from 'components/Container/Container';
import { MdKeyboardBackspace } from 'react-icons/md';
import { FiChevronLeft } from 'react-icons/fi';
import { FiChevronRight } from 'react-icons/fi';
import s from './ReportPage.module.css';
import { Link } from 'react-router-dom';

function ReportPage() {
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
              <button type="button" className={s.btn}>
                <FiChevronLeft size="20" className={s.arrowBtn} />
              </button>
              <p className={s.calendar_text}>November 2019</p>
              <button type="button" className={s.btn}>
                <FiChevronRight size="20" className={s.arrowBtn} />
              </button>
            </div>
          </div>

          <div className={s.balance}>
            <p className={s.balance_text}>Balance:</p>
            <p className={s.balance_cash}>55 000.00 UAH</p>
          </div>
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

        <ReportList />
        <ReportGraph />
      </Container>
    </section>
  );
}

export default ReportPage;
