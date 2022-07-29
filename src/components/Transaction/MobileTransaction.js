import { DeleteOutline } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useEffect, useState } from 'react';
import {
  useGetUserDataQuery,
  useDeleteTransactionMutation,
} from '../../redux/kapustaAPI';

import s from './MobileTransaction.module.css';

export default function MobileTransaction() {
  const [transactions, setTransactions] = useState();

  const { data } = useGetUserDataQuery();
  const [deleteTransaction] = useDeleteTransactionMutation();

  useEffect(() => {
    data && setTransactions(data.transactions);
  }, [data]);

  const categoryIncomeCheck = category => {
    if (category === 'З/П' || category === 'Доп. доход') {
      return true;
    } else {
      return false;
    }
  };

  return (
    <table className={s.table}>
      {transactions?.map(({ description, category, amount, date, _id }) => {
        return (
          <tbody key={_id}>
            <tr>
              <td colSpan="2" className={s.descriptionItem}>
                <span className={s.description}>{description}</span>
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
                  onClick={() => deleteTransaction(_id)}
                  aria-label="button delete"
                  component="label"
                >
                  <DeleteOutline />
                </IconButton>
              </td>
            </tr>
            <tr>
              <td className={s.date}>{date}</td>
              <td>{category}</td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
}
