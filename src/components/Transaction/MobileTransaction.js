import { DeleteOutline } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { ThemeContext } from 'components/App';
import { darkThemeStyles } from 'services/theme-styles';
import { useGetUserDataQuery } from '../../redux/kapustaAPI';
import {
  optionsExpenses,
  optionsIncome,
} from '../FormAddExpense/FormAddExpense';

import s from './MobileTransaction.module.css';

export default function MobileTransaction({ handleClick }) {
  const [transactions, setTransactions] = useState();
  const { data } = useGetUserDataQuery();

  const themeColor = useContext(ThemeContext);
  const themeStyle = themeColor === 'dark' ? darkThemeStyles.basic : null;

  const getTranslateCategory = (category, options) => {
    for (const option of options) {
      if (option.value === category) {
        return option.label;
      }
    }
  };

  useEffect(() => {
    const options = [...optionsExpenses, ...optionsIncome];
    data &&
      setTransactions(
        data.transactions.map(transaction => ({
          ...transaction,
          category: getTranslateCategory(transaction.category, options),
        }))
      );
  }, [data]);

  const categoryIncomeCheck = category => {
    if (category === 'Salary' || category === 'Extra income') {
      return true;
    }
  };

  return (
    <div className={s.mobTransactions}>
      {transactions?.length === 0 ? (
        <p style={themeStyle} className={s.plugText}>
          No transaction history!
          <br /> Please fill out the form above...
        </p>
      ) : (
        <table className={s.mobTable}>
          {transactions?.map(({ description, category, amount, date, _id }) => {
            return (
              <tbody key={_id}>
                <tr>
                  <td colSpan="2" className={s.descriptionItem}>
                    <span style={themeStyle} className={s.description}>
                      {description}
                    </span>
                  </td>
                  <td
                    rowSpan="2"
                    className={`${s.amount} ${
                      categoryIncomeCheck(category) ? s.income : s.expense
                    }`}
                  >
                    {amount}.00 грн
                  </td>
                  <td rowSpan="2" className={s.iconDelete}>
                    <IconButton
                      sx={{ p: 0 }}
                      style={themeStyle}
                      onClick={e => handleClick(e)}
                      aria-label="button delete"
                      component="label"
                      id={_id}
                    >
                      <DeleteOutline />
                    </IconButton>
                  </td>
                </tr>
                <tr>
                  <td style={themeStyle} className={s.date}>
                    {date}
                  </td>
                  <td style={themeStyle}>{category}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      )}
    </div>
  );
}
