import s from './Balance.module.css';
import { useState } from 'react';
import CurrencyInput from 'Utils/CurrencyInput';
import {
  useChangeBalanceMutation,
  useGetUserDataQuery,
} from '../../redux/kapustaAPI';

const Balance = () => {
  const [setBalanceValue] = useChangeBalanceMutation();
  const { data } = useGetUserDataQuery();
  const [income, setIncome] = useState(data?.balance);
  const handleChange = ev => {
    const query = ev.currentTarget.value;
    setIncome(query);
  };

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

    const arrayBalance = String(balance).split('');

    if (arrayBalance?.indexOf('.') === -1) {
      const stringBalance = `${arrayBalance.join('')}.00`;
      return setIncome(stringBalance);
    }

    let decimals = String(balance).split('.')[1];
    return decimals.length < 2 ? setIncome(`${balance}0`) : setIncome(balance);
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
          value={income}
        />
        <button type="submit" className={s.button}>
          CONFIRM
        </button>
      </form>
    </div>
  );
};

export default Balance;
