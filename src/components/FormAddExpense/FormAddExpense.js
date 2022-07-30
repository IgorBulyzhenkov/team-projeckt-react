import s from './FormAddExpense.module.css';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DatePicker from 'react-date-picker';
import { useState } from 'react';
// import React from 'react';
import {
  useAddExpenseMutation,
  useAddIncomeMutation,
} from '../../redux/kapustaAPI';
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
    const { amount, description, category, date } = ev.currentTarget;
    const amountViewAPI = Number.parseFloat(amount.value.split(' ').join(''));
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
              // defaultValue={'00.00'}
              inputMode="numeric"
              placeholder="00.00 UAH"
              thousandSeparator={' '}
              fixedDecimalScale={true}
              className={s.input}
              id="amount"
              name="amount"

              // value={value}
              // onValueChange={(values, sourceInfo) => {
              //   console.log(values, sourceInfo);
              //   setValue(values.floatValue?.toFixed(2));
              // }}
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
