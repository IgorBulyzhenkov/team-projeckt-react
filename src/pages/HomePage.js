import Container from '../components/Container';
import Balance from '../components/Balance';
import ReportLink from 'components/Report/ReportLink';

import Transactions from '../components/Transaction/Transactions';
import s from './HomePage.module.css';

const HomePage = () => {
  return (
    <Container>
      <div className={s.home_page}>
        <div className={s.wrap}>
          <ReportLink />
          <Balance />
        </div>

        <Transactions />
      </div>
    </Container>
  );
};

export default HomePage;
