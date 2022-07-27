import Container from '../components/Container';
import Balance from '../components/Balance';
import ReportLink from '../components/ReportLink';
import s from './HomePage.module.css';

const HomePage = () => {
  return (
    <Container>
      <div className={s.wrap}>
        <ReportLink />
        <Balance />
      </div>
    </Container>
  );
};

export default HomePage;
