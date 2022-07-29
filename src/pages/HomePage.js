import Container from '../components/Container';
import Balance from '../components/Balance';
import ReportLink from '../components/Report/ReportLink';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import ModalAddExpense from 'components/ModalAddExpense';
import Transactions from '../components/Transaction/Transactions';


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
