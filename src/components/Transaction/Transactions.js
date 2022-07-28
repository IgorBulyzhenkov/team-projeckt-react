import { useState, useEffect } from 'react';
import TransactionHistory from './TransactionHistory';
import MobileTransaction from './MobileTransaction';
import s from './Transactions.module.css';
import {
  useLazyGetExpenseQuery,
  useLazyGetIncomeQuery,
  // useGetIncomeQuery,
  // useGetExpenseQuery,
} from '../../redux/kapustaAPI';

export default function Transactions() {
  const [expenses, setExpenses] = useState(true);
  const [transactions, setTransactions] = useState([]);
  const [monthStats, setMonthStats] = useState([]);
  console.log(transactions, '1');
  // const { data } = useGetExpenseQuery;
  // const { data } = useGetIncomeQuery;
  // console.log(data);
  // useEffect(() => {

  //   if (expenses) {
  //     setTransactions(expense?.expenses);
  //     setMonthStats(expense?.monthsStats);
  //   } else if (income) {
  //     setTransactions(income?.incomes);
  //     setMonthStats(income?.monthsStats);
  //   }
  // }, [expense, expenses, income]);

  const [getExpense] = useLazyGetExpenseQuery();
  const [getIncome] = useLazyGetIncomeQuery();

  useEffect(() => {
    if (expenses) {
      getExpense()
        .unwrap()
        .then(({ expenses, monthsStats }) => {
          setTransactions([...expenses]);
          setMonthStats({ ...monthsStats });
        });
    } else {
      getIncome()
        .unwrap()
        .then(({ incomes, monthsStats }) => {
          setTransactions([...incomes]);
          setMonthStats({ ...monthsStats });
        });
    }
  }, [expenses, getExpense, getIncome]);

  return (
    <div>
      <MobileTransaction />
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

      <div className={s.wrap}>
        <TransactionHistory
          expenses={expenses}
          transactions={transactions}
          monthStats={monthStats}
        />
      </div>
    </div>
  );
}
