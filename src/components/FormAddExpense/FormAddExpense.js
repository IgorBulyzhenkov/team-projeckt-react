import s from './FormAddExpense.module.css';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DatePicker from 'react-date-picker';
import { useState } from 'react';
import { IconButton } from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import {
  useAddExpenseMutation,
  useAddIncomeMutation,
} from '../../redux/kapustaAPI';
import { IconButton } from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { ReactComponent as Calculator } from '../../img/Calculator.svg';

import Select from 'react-select';

import { useSelector } from 'react-redux';
import { getWidth } from '../../redux/selectors';
import NumberFormat from 'react-number-format';

const FormAddExpense = ({ expense, handleClick }) => {
  const [addExpense] = useAddExpenseMutation();
  const [addIncome] = useAddIncomeMutation();
  const [date, setDate] = useState(new Date());

  const VpWidth = useSelector(getWidth);

  const handleSubmit = ev => {
    ev.preventDefault();
    const { amount, amountTablet, description, category, date } =
      ev.currentTarget;
    let amountViewAPI = '';
    console.log(amount);
    console.log(amountTablet);
    amount.value
      ? (amountViewAPI = Number.parseFloat(amount.value.split(' ').join('')))
      : (amountViewAPI = Number.parseFloat(
          amountTablet.value.split(' ').join('')
        ));
    // const amountViewAPI = Number.parseFloat(amount.value.split(' ').join(''));
    const transaction = {
      description: description.value,
      amount: amountViewAPI,
      date: date.value,
      category: category.value,
    };

    if (expense) {
      addExpense(transaction);
    } else {
      addIncome(transaction);
    }
    ev.target.reset();

    if (VpWidth === 'mobile') {
      handleClick();
    }
  };

  const optionsExpenses = [
    { value: 'Транспорт', label: 'Transport' },
    { value: 'Продукты', label: 'Products' },
    { value: 'Здоровье', label: 'Health' },
    { value: 'Алкоголь', label: 'Alcohol' },
    { value: 'Развлечения', label: 'Entertainment' },
    { value: 'Всё для дома', label: 'Housing' },
    { value: 'Техника', label: 'Technique' },
    { value: 'Коммуналка и связь', label: 'Communal, communication' },
    { value: 'Спорт и хобби', label: 'Sports, hobbies' },
    { value: 'Образование', label: 'Education' },
    { value: 'Прочее', label: 'Other' },
  ];

  const optionsIncome = [
    { value: 'З/П', label: 'Salary' },
    { value: 'Доп. доход', label: 'Extra income' },
  ];

  const styles = {
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? '#52555F' : '#C7CCDC',
      backgroundColor: state.isSelected ? '#C7CCDC' : '#FFFFFF',
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: '#52555F',
    }),
    control: (provided, state) => ({
      ...provided,
      border: '2px solid #ffffff',
      borderRadius: '0 0 20px 0',
      height: '44px',
      width: '280px',
    }),
    indicatorSeparator: (provided, state) => ({
      ...provided,
      display: 'none',
    }),
  };

  // const handleChange = e => {
  //   setCategories(e.target.value);
  // };

  return (
    <div className={s.formWrap}>
      <div className={s.exitBtn}>
        <IconButton
          color="warning"
          onClick={handleClick}
          aria-label="button close"
          component="button"
        >
          <KeyboardBackspaceIcon />
        </IconButton>
      </div>

      <form className={s.form} onSubmit={handleSubmit}>
        <div className={s.inputWrap}>
          <DatePicker
            value={date}
            calendarIcon={<CalendarMonthIcon />}
            clearIcon={null}
            prevLabel={null}
            prev2Label={null}
            nextLabel={null}
            next2Label={null}
            className={s.calendar}
            calendarClassName={s.calendar}
            name="date"
            onChange={setDate}
            format={'dd.MM.y'}
          />
          <input
            type="text"
            id="description"
            name="description"
            className={s.description}
            placeholder="Product description"
          />

          <Select
            type="text"
            id="category"
            name="category"
            options={expense ? optionsExpenses : optionsIncome}
            styles={styles}
            placeholder="Product category"
            className={s.select}
          />

          <div className={s.currencyWrapp}>
            <NumberFormat
              suffix={' UAH'}
              decimalScale={2}
              inputMode="numeric"
              placeholder="00.00 UAH"
              thousandSeparator={' '}
              fixedDecimalScale={true}
              className={s.input}
              id="amount"
              name="amount"
            />
            <NumberFormat
              decimalScale={2}
              inputMode="numeric"
              placeholder="0.00"
              thousandSeparator={' '}
              fixedDecimalScale={true}
              className={s.inputTablet}
              id="amountTablet"
              name="amountTablet"
            />

            <div className={s.calculateWrap}>
              <Calculator width="20" height="20" />
            </div>
          </div>
        </div>

        <div className={s.buttonWrap}>
          <button type="submit" className={s.buttonInput}>
            Input
          </button>
          <button type="reset" className={s.buttonClear}>
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormAddExpense;
