import PropTypes from 'prop-types';
import TransactionItem from './TransactionItem';
import s from './TransactionHistory.module.css';

export default function TransactionHistory({ expenses, transactions }) {
  return (
    <div className={s.table}>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>category</th>
            <th>Sum</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
      </table>
      <div className={s.tableBody}>
        <table>
          <tbody>
            {transactions.map(
              ({ description, category, amount, date, _id }) => (
                <TransactionItem
                  key={_id}
                  description={description}
                  category={category}
                  amount={amount}
                  date={date}
                  id={_id}
                />
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
      _id: PropTypes.string.isRequired,
    })
  ),
};
