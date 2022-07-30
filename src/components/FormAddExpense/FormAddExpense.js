import s from './FormAddExpense.module.css';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DatePicker from 'react-date-picker';
import { useState } from 'react';
import {
  useAddExpenseMutation,
  useAddIncomeMutation,
} from '../../redux/kapustaAPI';

import { useSelector } from 'react-redux';
import { MenuItem, TextField } from '@mui/material';
import { getWidth } from '../../redux/selectors';

const FormAddExpense = ({ expense, handleClick }) => {
  const [addExpense] = useAddExpenseMutation();
  const [addIncome] = useAddIncomeMutation();

  const [date, setDate] = useState(new Date());

  const [categories, setCategories] = useState('');

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
        <div className={s.inputsWrap}>
          <div className={s.calendar}>
            <DatePicker
              value={date}
              calendarIcon={<CalendarMonthIcon />}
              clearIcon={null}
              prevLabel={null}
              prev2Label={null}
              nextLabel={null}
              next2Label={null}
              name="date"
              onChange={setDate}
            />
          </div>
          <div className={s.inputsText}>
            <TextField
              id="description"
              name="description"
              label="description"
              variant="outlined"
              type="text"
              helperText="spent on"
              sx={{ mb: 1, width: '100%' }}
              color="warning"
              size="small"
            />
          </div>
          <div className={s.inputsText}>
            <TextField
              id="category"
              name="category"
              select
              value={categories}
              onChange={handleChange}
              sx={{ mb: 1, width: '100%' }}
              color="warning"
              size="small"
              label="category"
              helperText="make your choice"
            >
              {categoriesType.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div className={s.inputsNumber}>
            <TextField
              id="amount"
              name="amount"
              type="number"
              sx={{ mb: 1, width: '100%' }}
              color="warning"
              label="Amount"
              variant="outlined"
              size="small"
              helperText="enter amount"
              placeholder="00.00 грн."
            />
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
