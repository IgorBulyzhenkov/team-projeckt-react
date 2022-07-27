import s from './Balance.module.css';
import { useSelector } from 'react-redux';
import CurrencyInput from 'Utils/CurrencyInput';

const Balance = () => {
  const value = useSelector(state => state.currentUser.balance);

  const handleChange = ev => {
    const value = ev.currentTarget.value;
    console.log(value);
  };

  return (
    <div className={s.wrap}>
      <span className={s.span}>Balance:</span>
      <form onSubmit={handleChange} className={s.form}>
        <label>
          <CurrencyInput
            placeholder="00.00 UAH"
            type="text"
            className={s.input}
          />
        </label>
        <button type="submit" className={s.button}>
          CONFIRM
        </button>
      </form>
    </div>
  );
};

export default Balance;
