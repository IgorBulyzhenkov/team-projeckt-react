import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import TransactionHistory from './TransactionHistory';
import MobileTransaction from './MobileTransaction';
import s from './Transactions.module.css';
import { getWidth } from '../../redux/selectors';
import {
  useLazyGetExpenseQuery,
  useLazyGetIncomeQuery,
} from '../../redux/kapustaAPI';

export default function Transactions() {
  const [expenses, setExpenses] = useState(true);
  const [transactions, setTransactions] = useState();
  const [monthStats, setMonthStats] = useState();

  const VpWidth = useSelector(getWidth);

  const [getExpense] = useLazyGetExpenseQuery();
  const [getIncome] = useLazyGetIncomeQuery();

  useEffect(() => {
    if (expenses) {
      getExpense()
        .unwrap()
        .then(({ expenses, monthsStats }) => {
          setTransactions(expenses);
          setMonthStats(monthsStats);
        });
    } else {
      getIncome()
        .unwrap()
        .then(({ incomes, monthsStats }) => {
          setTransactions(incomes);
          setMonthStats(monthsStats);
        });
    }
  }, [expenses, getExpense, getIncome]);

  return (
    <div>
      {VpWidth === 'mobile' && <MobileTransaction />}

      <button className={s.btn} type="button" onClick={() => setExpenses(true)}>
        Expenses
      </button>
      <button
        className={s.btn}
        type="button"
        onClick={() => setExpenses(false)}
      >
        Income
      </button>

      {VpWidth !== 'mobile' && (
        <div className={s.wrap}>
          <TransactionHistory
            expenses={expenses}
            transactions={transactions}
            monthStats={monthStats}
          />
        </div>
      )}
    </div>
  );
}
