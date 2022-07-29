import Container from '../components/Container';
import Balance from '../components/Balance';
import ReportLink from 'components/Report/ReportLink';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ModalAddExpense from 'components/ModalAddExpense';
import Transactions from '../components/Transaction/Transactions';
import { useSelector } from 'react-redux';
import { getWidth } from '../redux/selectors';

import s from './HomePage.module.css';
import { useState, useEffect } from 'react';

const HomePage = () => {
  const [modal, setModal] = useState(false);
  const VpWidth = useSelector(getWidth);

  const openModal = ev => {
    ev.preventDefault();
    setModal(!modal);
  };

  useEffect(() => {
    if (modal) {
      document.body.style.overflow = 'hidden';
    }
    return () => (document.body.style.overflow = 'visible');
  }, [modal]);

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
      {VpWidth === 'mobile' && modal && (
        <ModalAddExpense handleClick={openModal} />
      )}
      <Transactions />
    </Container>
  );
};

export default HomePage;
