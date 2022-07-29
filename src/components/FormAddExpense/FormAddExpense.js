import s from './FormAddExpense.module.css';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DatePicker from 'react-date-picker';
import CurrencyInput from 'Utils/CurrencyInput';
import Select from 'react-select';

const FormAddExpense = () => {
  const options = [
    //    <option disabled>Product category</option>
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
      <form className={s.form}>
        <DatePicker
          value={new Date()}
          calendarIcon={<CalendarMonthIcon />}
          clearIcon={null}
          prevLabel={null}
          prev2Label={null}
          nextLabel={null}
          next2Label={null}
          className={s.calendar}
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
          options={options}
          styles={styles}
          placeholder="Product category"
        />

        <CurrencyInput
          placeholder="00.00 UAH"
          type="text"
          id="amount"
          name="amount"
          className={s.input}
          //   value={String(income)}
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
