import { useState, useEffect } from 'react';
import TransactionHistory from './TransactionHistory';
import MobileTransaction from './MobileTransaction';
import s from './Transactions.module.css';
import { useGetIncomeQuery, useGetExpenseQuery } from '../../redux/kapustaAPI';

export default function Transactions() {
  const [isExpense, setIsExpense] = useState(true);
  const [transactions, setTransactions] = useState([]);
  const [monthStats, setMonthStats] = useState([]);

  const { data: expense } = useGetExpenseQuery();
  const { data: income } = useGetIncomeQuery;

  useEffect(() => {
    if (isExpense) {
      setTransactions(expense?.expenses);
      setMonthStats(expense?.monthsStats);
    } else if (income) {
      setTransactions(income?.incomes);
      setMonthStats(income?.monthsStats);
    }
  }, [expense, isExpense, income]);

  return (
    <div>
      <MobileTransaction />
      <button
        className={s.btn}
        type="button"
        onClick={() => setIsExpense(true)}
      >
        Expenses
      </button>
      <button
        className={s.btn}
        type="button"
        onClick={() => setIsExpense(false)}
      >
        Income
      </button>

      <div className={s.wrap}>
        <TransactionHistory
          expenses={isExpense}
          transactions={transactions}
          monthStats={monthStats}
        />
      </div>
    </div>
  );
}
