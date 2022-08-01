import s from './Balance.module.css';
import { useState, useEffect } from 'react';
import {
  useChangeBalanceMutation,
  useGetUserDataQuery,
} from '../../redux/kapustaAPI';
import Tooltip from '@mui/material/Tooltip';
import ModalNotification from '../ModalNotification';
import { useContext } from 'react';
import { ThemeContext } from 'components/App';
import { darkThemeStyles } from 'services/theme-styles';
import NumberFormat from 'react-number-format';

const Balance = () => {
  const [setBalanceValue] = useChangeBalanceMutation();
  const { data, isFetching } = useGetUserDataQuery();
  console.log(isFetching);

  const hasBalance = !!data?.balance;
  const hasTransactions = data?.transactions.length > 0;
  const [income, setIncome] = useState(() => data?.balance);

  const themeColor = useContext(ThemeContext);
  const themeStyle = themeColor === 'dark' ? darkThemeStyles.basic : null;
  const themeStyle2 = themeColor === 'dark' ? darkThemeStyles.basic : {};

  const handleChange = ev => {
    const query = ev.floatValue;
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
    setBalanceValue(income);
  };

  return (
    <div className={s.wrap} style={themeStyle}>
      <span className={s.span} style={themeStyle}>
        Balance:
      </span>
      <form onSubmit={handleSubmit} className={s.form}>
        <NumberFormat
          allowNegative={false}
          suffix={' UAH'}
          decimalScale={2}
          // inputMode="numeric"
          placeholder="00.00 UAH"
          thousandSeparator={' '}
          fixedDecimalScale={true}
          className={s.input}
          id="amount"
          name="amount"
          onValueChange={handleChange}
          value={income}
          onClick={resetInput}
          isNumericString={true}
          disabled={!(!hasBalance && !hasTransactions)}
          style={themeStyle2}
        />
        {!!(!hasBalance && !hasTransactions) ? (
          <button
            type="submit"
            className={`${s.button} ballance-btn`}
            disabled={false}
            style={themeStyle2}
          >
            CONFIRM
          </button>
        ) : (
          <Tooltip title="You have already entered the balance">
            <span>
              <button
                type="submit"
                className={`${s.button} ballance-btn`}
                disabled={true}
              >
                CONFIRM
              </button>
            </span>
          </Tooltip>
        )}
      </form>
      {!hasBalance && !hasTransactions && !isFetching && <ModalNotification />}
    </div>
  );
};

export default Balance;
