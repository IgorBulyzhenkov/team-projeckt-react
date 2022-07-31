import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ModalAddExpense from '../ModalAddExpense/ModalAddExpense';
import TransactionHistory from './TransactionHistory';
import MobileTransaction from './MobileTransaction';
import ActionModal from '../ActionModal/ActionModal';
import FormAddExpense from 'components/FormAddExpense';

import s from './Transactions.module.css';

import {
  useGetIncomeQuery,
  useGetExpenseQuery,
  useDeleteTransactionMutation,
} from '../../redux/kapustaAPI';

import { getWidth } from '../../redux/selectors';
import { useContext } from 'react';
import { ThemeContext } from 'components/App';
import { darkThemeStyles } from 'services/theme-styles';
import Summary from './Summary';

export default function Transactions() {
  const [isModalOpen, setModal] = useState('false');
  const [isMobileModalOpen, setMobileModal] = useState('false');
  const [transactionsId, setTransactionsId] = useState(null);
  const [isExpense, setIsExpense] = useState(true);
  const [transactions, setTransactions] = useState([]);
  const [monthStats, setMonthStats] = useState({});
  const { data: expense } = useGetExpenseQuery();
  const { data: income } = useGetIncomeQuery();
  const [deleteTransaction] = useDeleteTransactionMutation();

  const themeColor = useContext(ThemeContext);
  const themeStyle = themeColor === 'dark' ? darkThemeStyles.elements : null;
  const fontColor =
    themeColor === 'dark' ? { color: darkThemeStyles.textColor } : null;

  const VpWidth = useSelector(getWidth);

  useEffect(() => {
    if (isExpense) {
      setTransactions(expense?.expenses);
      setMonthStats(expense?.monthsStats);
    } else {
      setTransactions(income?.incomes);
      setMonthStats(income?.monthsStats);
    }
  }, [expense, isExpense, income]);

  const handleClick = e => {
    e.preventDefault();
    setTransactionsId(e.currentTarget.id);
    setModal(!isModalOpen);
  };

  const delTransaction = id => {
    const cabbage = document.querySelector(`#delete${id}`);
    cabbage.classList.add('deleteTransaction');
    setTimeout(() => {
      deleteTransaction(id);
    }, 700);

    setModal(!isModalOpen);
  };

  const handleExpBtnClick = () => {
    setIsExpense(true);
    if (VpWidth === 'mobile') {
      setMobileModal(!isMobileModalOpen);
    }
  };

  const handleIncBtnClick = () => {
    setIsExpense(false);
    if (VpWidth === 'mobile') {
      setMobileModal(!isMobileModalOpen);
    }
  };

  const mobileTextTheme =
    VpWidth === 'tablet'
      ? {
          backgroundColor: 'rgb(63, 78, 79)',
          color: 'rgb(255, 255, 255)',
          boxShadow: '5px 10px 20px rgb(170 178 197 / 40%)',
        }
      : {};

  const themeColorProvider = themeColor === 'dark' ? mobileTextTheme : {};

  return (
    <div className={s.transactionContainer}>
      <div className={s.btnWrap}>
        <button
          style={!isExpense ? themeStyle : null}
          className={`${s.btn} ${isExpense ? s.isActive : ''}`}
          type="button"
          onClick={handleExpBtnClick}
        >
          {VpWidth === 'mobile' && 'Add '}
          Expenses
        </button>
        <button
          style={isExpense ? themeStyle : null}
          className={`${s.btn} ${!isExpense ? s.isActive : ''}`}
          type="button"
          onClick={handleIncBtnClick}
        >
          {VpWidth === 'mobile' && 'Add '}
          Income
        </button>
      </div>

      <div className={s.mobileWrap}>
        <MobileTransaction handleClick={handleClick} />
      </div>

      <div className={s.deskWrap} style={themeColorProvider}>
        <FormAddExpense expense={isExpense} />
        <TransactionHistory
          handleClick={handleClick}
          expenses={isExpense}
          transactions={transactions}
          monthStats={monthStats}
        />
      </div>
      <div className={s.summaryTab}>
        {monthStats && (
          <Summary monthStats={monthStats} style={themeColorProvider} />
        )}
      </div>
      {!isMobileModalOpen && (
        <ModalAddExpense
          handleClick={() => setMobileModal(!isMobileModalOpen)}
          expense={isExpense}
        />
      )}

      {!isModalOpen && (
        <ActionModal
          toggleModal={() => setModal(!isModalOpen)}
          logOut={() => delTransaction(transactionsId)}
        >
          <p className={s.text} style={fontColor}>
            Are you sure?
          </p>
        </ActionModal>
      )}
    </div>
  );
}
