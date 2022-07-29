import s from './FormAddExpense.module.css';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DatePicker from 'react-date-picker';
import CurrencyInput from 'Utils/CurrencyInput';
import { useState } from 'react';
import {
  useAddExpenseMutation,
  useAddIncomeMutation,
} from '../../redux/kapustaAPI';
import Select from 'react-select';

const FormAddExpense = ({ expense }) => {
  const [addExpense] = useAddExpenseMutation();
  const [addIncome] = useAddIncomeMutation();
  const [amount, setAmount] = useState(null);
  const [date, setDate] = useState(new Date());
  console.log(amount);

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
      console.log(transaction);
      addIncome(transaction);
    }
  };

  const checkBalance = amount => {
    const arrayBalance = String(amount).split('');
    if (arrayBalance?.indexOf('.') === -1) {
      const stringBalance = `${arrayBalance.join('')}.00`;
      return stringBalance;
    }

    let decimals = String(amount).split('.')[1];
    return decimals.length < 2 ? `${amount}0` : amount;
  };

  const amountSet = amount => {
    const amountView = checkBalance(amount);
    setAmount(amountView);
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

  return (
    <div>
      <form className={s.form} onSubmit={handleSubmit}>
        <DatePicker
          value={date}
          calendarIcon={<CalendarMonthIcon />}
          clearIcon={null}
          prevLabel={null}
          prev2Label={null}
          nextLabel={null}
          next2Label={null}
          className={s.calendar}
          name="date"
          onChange={setDate}
        />
        <input
          type="text"
          id="description"
          name="description"
          className={s.description}
        />

        <Select
          type="text"
          id="category"
          name="category"
          options={expense ? optionsExpenses : optionsIncome}
          styles={styles}
          placeholder="Product category"
        />

        <CurrencyInput
          placeholder="00.00 UAH"
          type="text"
          id="amount"
          name="amount"
          className={s.input}
          onChange={amountSet}
        />

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

// onSubmit = { addExpenseTransaction };
