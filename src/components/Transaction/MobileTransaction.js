import { DeleteOutline } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { ThemeContext } from 'components/App';
import { darkThemeStyles } from 'services/theme-styles';

import { useGetUserDataQuery } from '../../redux/kapustaAPI';



import s from './MobileTransaction.module.css';

export default function MobileTransaction({ handleClick }) {
  const [transactions, setTransactions] = useState();

  const { data } = useGetUserDataQuery();

  const themeColor = useContext(ThemeContext);
  const themeStyle = themeColor === 'dark' ? darkThemeStyles.basic : null;

  useEffect(() => {
    data && setTransactions(data.transactions);
  }, [data]);

  const categoryIncomeCheck = category => {
    if (category === 'З/П' || category === 'Доп. доход') {
      return true;
    }
  };

  

  return (
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
              <td rowSpan="2">
                <IconButton
                  style={themeStyle}
                  sx={{ ml: 3 }}
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
  );
}
