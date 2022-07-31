import PropTypes from 'prop-types';
import TransactionItem from './TransactionItem';
import s from './TransactionList.module.css';
import { useContext } from 'react';
import { ThemeContext } from 'components/App';
import { darkThemeStyles } from 'services/theme-styles';




export default function TransactionList({ transactions, expenses, handleClick }) {

  const themeColor = useContext(ThemeContext)
    const themeStyle = themeColor === "dark" ? {...darkThemeStyles.inputsElements, borderRadius: '16px'} : null
    // const fontColor = themeColor === "dark" ? {color: darkThemeStyles.textColor} : null
    const themeStyle2 = themeColor === "dark" ? darkThemeStyles.basic : null
    const tableBorderColor = themeColor === "dark" ? {borderRightColor: darkThemeStyles.elementsColor, borderBottomColor: darkThemeStyles.elementsColor } : null
  return (
    <div className={s.table} style={themeStyle}>
      <table >
        <thead  >
          <tr >
            <th style={themeStyle2}>Date</th>
            <th style={themeStyle2}>Description</th>
            <th style={themeStyle2}>category</th>
            <th style={themeStyle2}>Sum</th>
            <th style={themeStyle2}>&nbsp;</th>
          </tr>
        </thead>
      </table>
      <div className={s.tableBody}>
        <table  >
          <tbody >
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
