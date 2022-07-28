import s from './Balance.module.css';
import { useState, useEffect } from 'react';
import CurrencyInput from 'Utils/CurrencyInput';
import {
  useChangeBalanceMutation,
  useGetUserDataQuery,
} from '../../redux/kapustaAPI';
import ModalNotification from '../ModalNotification';

const Balance = () => {
  const [setBalanceValue] = useChangeBalanceMutation();
  const { data } = useGetUserDataQuery();

  const hasBalance = !!data?.balance;
  const hasTransactions = data?.transactions.length > 0;
  const [income, setIncome] = useState(() => data?.balance);

  const handleChange = ev => {
    const query = ev.currentTarget.value;
    setIncome(query);
  };

  const checkBalance = balance => {
    const arrayBalance = String(balance).split('');
    if (arrayBalance?.indexOf('.') === -1) {
      const stringBalance = `${arrayBalance.join('')}.00`;
      return stringBalance;
    }

    let decimals = String(balance).split('.')[1];
    return decimals.length < 2 ? `${balance}0` : balance;
  };

  useEffect(() => {
    if (data?.balance) {
      const balance = checkBalance(data?.balance);
      setIncome(balance);
    }
  }, [data?.balance]);

  const resetInput = ev => {
    if ('mousedown' !== ev.type) {
      setIncome('');
      return;
    }
  };

  const handleSubmit = ev => {
    ev.preventDefault();
    const balance = Number.parseFloat(income.split(' ').join(''));
    setBalanceValue(balance);
  };

  return (
    <div className={s.wrap}>
      <span className={s.span}>Balance:</span>
      <form onSubmit={handleSubmit} className={s.form}>
        <CurrencyInput
          placeholder="00.00 UAH"
          type="text"
          className={s.input}
          onChange={handleChange}
          onClick={resetInput}
          value={String(income)}
        />

        <button type="submit" className={s.button}>
          CONFIRM
        </button>
      </form>
      {!hasBalance && !hasTransactions && <ModalNotification />}
    </div>
  );
};

export default Balance;
