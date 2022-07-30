import s from './FormAddExpense.module.css';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DatePicker from 'react-date-picker';
import { useState } from 'react';
import {
  useAddExpenseMutation,
  useAddIncomeMutation,
} from '../../redux/kapustaAPI';

import Select from 'react-select';
import { BsCalculator } from 'react-icons/bs';

import { useSelector } from 'react-redux';
import { MenuItem, TextField } from '@mui/material';
import { getWidth } from '../../redux/selectors';

import NumberFormat from 'react-number-format';
// import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';


const FormAddExpense = ({ expense, handleClick }) => {
  const [addExpense] = useAddExpenseMutation();
  const [addIncome] = useAddIncomeMutation();

  const [amount, setAmount] = useState(null);
  const [value, setValue] = useState('');

  const [date, setDate] = useState(new Date());

  const [categories, setCategories] = useState('');

  const VpWidth = useSelector(getWidth);
  console.log(value);
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
  };


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

  const handleChange = e => {
    setCategories(e.target.value);
  };

  const categoriesType = expense ? optionsExpenses : optionsIncome;

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
            // onChange={setDescription}
            placeholder="Product description"
          />

          <Select
            type="text"
            id="category"
            name="category"
            options={expense ? optionsExpenses : optionsIncome}
            styles={styles}
            placeholder="Product category"
            // onChange={setCategory}
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

            {/* <div className={s.calculateWrap}>
              <BsCalculator className={s.calculate} />
            </div> */}

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
