import TransactionHistory from './TransactionHistory';
import Summary from './Summary';
import s from './Transaction.module.css';

export default function Transaction({ expenses }) {
  const transactions = [
    {
      description: "Transaction's description",
      category: 'Продукты',
      amount: 0,
      date: '2020-12-31',
      _id: '507f1f77bcf86cd799439013',
    },
    {
      description: "Transaction's description",
      category: 'Продукты',
      amount: 0,
      date: '2020-12-31',
      _id: '507f1f77bcf86cd799439013',
    },
    {
      description: "Transaction's description",
      category: 'Продукты',
      amount: 0,
      date: '2020-12-31',
      _id: '507f1f77bcf86cd799439013',
    },
    {
      description: "Transaction's description",
      category: 'Продукты',
      amount: 0,
      date: '2020-12-31',
      _id: '507f1f77bcf86cd799439013',
    },
    {
      description: "Transaction's description",
      category: 'Продукты',
      amount: 0,
      date: '2020-12-31',
      _id: '507f1f77bcf86cd799439013',
    },
    {
      description: "Transaction's description",
      category: 'Продукты',
      amount: 0,
      date: '2020-12-31',
      _id: '507f1f77bcf86cd799439013',
    },
    {
      description: "Transaction's description",
      category: 'Продукты',
      amount: 0,
      date: '2020-12-31',
      _id: '507f1f77bcf86cd799439013',
    },
    {
      description: "Transaction's description",
      category: 'Продукты',
      amount: 0,
      date: '2020-12-31',
      _id: '507f1f77bcf86cd799439013',
    },
    {
      description: "Transaction's description",
      category: 'Продукты',
      amount: 0,
      date: '2020-12-31',
      _id: '507f1f77bcf86cd799439013',
    },
    {
      description: "Transaction's description",
      category: 'Продукты',
      amount: 0,
      date: '2020-12-31',
      _id: '507f1f77bcf86cd799439013',
    },
    {
      description: "Transaction's description",
      category: 'Продукты',
      amount: 0,
      date: '2020-12-31',
      _id: '507f1f77bcf86cd799439013',
    },
    {
      description: "Transaction's description",
      category: 'Продукты',
      amount: 0,
      date: '2020-12-31',
      _id: '507f1f77bcf86cd799439013',
    },
  ];

  const monthStats = {
    Январь: 5,
    Февраль: 100,
    Март: 'N/A',
    Апрель: 'N/A',
    Май: 1,
    Июнь: 'N/A',
    Июль: 3,
    Август: 'N/A',
    Сентябрь: 'N/A',
    Октябрь: 77,
    Ноябрь: 'N/A',
    Декабрь: 123,
  };

  return (
    <div className={s.wrap}>
      <TransactionHistory transactions={transactions} />
      <Summary monthStats={monthStats} />
    </div>
  );
}
