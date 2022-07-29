import TransactionList from './TransactionList';
import Summary from './Summary';
import s from './TransactionHistory.module.css';

export default function TransactionHistory({ transactions, monthStats }) {
  return (
    <div className={s.wrap}>
      {transactions && <TransactionList transactions={transactions} />}
      {monthStats && <Summary monthStats={monthStats} />}
    </div>
  );
}
