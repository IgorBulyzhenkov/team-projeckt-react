import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import TransactionHistory from './TransactionHistory';
import MobileTransaction from './MobileTransaction';
import s from './Transactions.module.css';

import { useGetIncomeQuery, useGetExpenseQuery } from '../../redux/kapustaAPI';

import { getWidth } from '../../redux/selectors';



export default function Transactions() {
  const [isExpense, setIsExpense] = useState(true);
  const [transactions, setTransactions] = useState([]);
  const [monthStats, setMonthStats] = useState([]);


  const { data: expense } = useGetExpenseQuery();
  const { data: income } = useGetIncomeQuery;

  const VpWidth = useSelector(getWidth);




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

     {VpWidth === 'mobile' && <MobileTransaction />}
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


      

      {VpWidth !== 'mobile' && (
        <div className={s.wrap}>
        <TransactionHistory
          expenses={isExpense}
          transactions={transactions}
          monthStats={monthStats}
        />
      </div>
      )}

    </div>
  );
}
