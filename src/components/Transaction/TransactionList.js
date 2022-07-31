import PropTypes from 'prop-types';
import TransactionItem from './TransactionItem';
import s from './TransactionList.module.css';
import { useContext } from 'react';
import { ThemeContext } from 'components/App';
import { darkThemeStyles } from 'services/theme-styles';
import { useState, useEffect } from 'react';

export default function TransactionList({
  transactions: data,
  expenses,
  handleClick,
}) {
  console.log(data);
  const [transactions, setTransactions] = useState(
    [...data].sort((a, b) => b['_id'].localeCompare(a['_id']))
  );
  console.log(transactions);

  useEffect(() => {
    setTransactions([...data].sort((a, b) => b['_id'].localeCompare(a['_id'])));
  }, [data]);
  const themeColor = useContext(ThemeContext);
  const themeStyle =
    themeColor === 'dark'
      ? { ...darkThemeStyles.inputsElements, borderRadius: '16px' }
      : null;
  // const fontColor = themeColor === "dark" ? {color: darkThemeStyles.textColor} : null
  const themeStyle2 = themeColor === 'dark' ? darkThemeStyles.basic : null;
  const tableBorderColor =
    themeColor === 'dark'
      ? {
          borderRightColor: darkThemeStyles.elementsColor,
          borderBottomColor: darkThemeStyles.elementsColor,
        }
      : null;

  const sortByDate = () => {
    const filterdTransactions = [...transactions].sort((a, b) => {
      const newDateA = new Date(a.date);
      const newDateB = new Date(b.date);
      return newDateB - newDateA;
    });
    console.log('date', filterdTransactions);
    setTransactions(filterdTransactions);
  };
  const sortByDescription = () => {
    const filterdTransactions = [...transactions].sort((a, b) =>
      a.description.localeCompare(b.description)
    );
    console.log('des', filterdTransactions);
    setTransactions(arr => filterdTransactions);
  };

  const sortByCategory = () => {
    const filterdTransactions = [...transactions].sort((a, b) =>
      a.category.localeCompare(b.category)
    );
    console.log('category', filterdTransactions);
    setTransactions(arr => filterdTransactions);
  };

  const sortBySum = () => {
    const filterdTransactions = [...transactions].sort(
      (a, b) => a.amount - b.amount
    );
    console.log('sum', filterdTransactions);
    setTransactions(arr => filterdTransactions);
  };

  return (
    <div className={s.table} style={themeStyle}>
      <table>
        <thead>
          <tr>
            <th
              style={themeStyle2}
              onClick={() => sortByDate()}
              className={s.listHeader}
            >
              Date
            </th>
            <th
              style={themeStyle2}
              onClick={() => sortByDescription()}
              className={s.listHeader}
            >
              Description
            </th>
            <th
              style={themeStyle2}
              onClick={() => sortByCategory()}
              className={s.listHeader}
            >
              category
            </th>
            <th
              style={themeStyle2}
              onClick={() => sortBySum()}
              className={s.listHeader}
            >
              Sum
            </th>
            <th style={themeStyle2}>&nbsp;</th>
          </tr>
        </thead>
      </table>
      <div className={s.tableBody}>
        <table>
          <tbody>
            {transactions.map(
              ({ description, category, amount, date, _id }) => (
                <TransactionItem
                  themeStyle={themeStyle2}
                  tableBorderColor={tableBorderColor}
                  key={_id}
                  description={description}
                  category={category}
                  amount={amount}
                  date={date}
                  id={_id}
                  expenses={expenses}
                  handleClick={handleClick}
                />
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

TransactionList.propTypes = {
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
