import TransactionList from './TransactionList';
import Summary from './Summary';
import s from './TransactionHistory.module.css';


export default function TransactionHistory({
  transactions,
  monthStats,
  expenses,
  handleClick,
}) {
  return (
    <div className={s.wrap}>
      {transactions && (
        <TransactionList
          transactions={transactions}
          expenses={expenses}
          handleClick={handleClick}
        />
      )}

      {monthStats && <Summary monthStats={monthStats} />}
    </div>
  );
}
