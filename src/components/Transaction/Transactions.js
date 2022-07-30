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
    deleteTransaction(id);
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

  return (
    <div>
      <button
        className={`${s.btn} ${isExpense ? s.isActive : ''}`}
        type="button"
        onClick={handleExpBtnClick}
      >
        {VpWidth === 'mobile' && 'Add '}
        Expenses
      </button>
      <button
        className={`${s.btn} ${!isExpense ? s.isActive : ''}`}
        type="button"
        onClick={handleIncBtnClick}
      >
        {VpWidth === 'mobile' && 'Add '}
        Income
      </button>

      <div className={s.mobileWrap}>
        <MobileTransaction handleClick={handleClick} />
      </div>

      <div className={s.deskWrap}>
        <FormAddExpense expense={isExpense} />
        <TransactionHistory
          handleClick={handleClick}
          expenses={isExpense}
          transactions={transactions}
          monthStats={monthStats}
        />
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
          <p className={s.text}>Are you sure?</p>
        </ActionModal>
      )}
    </div>
  );
}
