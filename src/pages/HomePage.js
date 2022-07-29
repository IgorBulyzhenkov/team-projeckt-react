import Container from '../components/Container';
import Balance from '../components/Balance';
import ReportLink from '../components/ReportLink';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ModalAddExpense from 'components/ModalAddExpense';
import Transactions from '../components/Transaction/Transactions';

import s from './HomePage.module.css';
import { useState } from 'react';

const HomePage = () => {
  const [modal, setModal] = useState(false);

  const toogleModal = () => {
    setModal(modal => !modal);
  };
  const openModal = ev => {
    console.log(ev);
  };

  return (
    <Container>
      <div className={s.wrap}>
        <ReportLink />
        <Balance />
      </div>
      <div className={s.iconWrap}>
        <AddCircleIcon
          className={s.button}
          sx={{ fontSize: 50 }}
          onClick={openModal}
        />
      </div>
      <ModalAddExpense />
      <Transactions />
    </Container>
  );
};

export default HomePage;
