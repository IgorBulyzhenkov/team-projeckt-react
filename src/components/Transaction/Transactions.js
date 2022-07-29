import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import TransactionHistory from './TransactionHistory';
import MobileTransaction from './MobileTransaction';
import ActionModal from '../ActionModal/ActionModal';
import s from './Transactions.module.css';

import {
  useGetIncomeQuery,
  useGetExpenseQuery,
  useDeleteTransactionMutation,
} from '../../redux/kapustaAPI';

import { getWidth } from '../../redux/selectors';

export default function Transactions() {
  const [isModalOpen, setModal] = useState('false');
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

  return (
    <div>
      {VpWidth === 'mobile' && <MobileTransaction handleClick={handleClick} />}
      <button
        className={`${s.btn} ${isExpense ? s.isActive : ''}`}
        type="button"
        onClick={() => setIsExpense(true)}
      >
        Expenses
      </button>
      <button
        className={`${s.btn} ${!isExpense ? s.isActive : ''}`}
        type="button"
        onClick={() => setIsExpense(false)}
      >
        Income
      </button>

      {VpWidth !== 'mobile' && (
        <div className={s.wrap}>
          <TransactionHistory
            handleClick={handleClick}
            expenses={isExpense}
            transactions={transactions}
            monthStats={monthStats}
          />
        </div>
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
