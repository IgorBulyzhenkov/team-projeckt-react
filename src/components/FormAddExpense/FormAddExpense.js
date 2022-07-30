import s from './FormAddExpense.module.css';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DatePicker from 'react-date-picker';
import { useState, useEffect } from 'react';
import { IconButton } from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Popover from '@mui/material/Popover';
import {
  useAddExpenseMutation,
  useAddIncomeMutation,
} from '../../redux/kapustaAPI';
import { ReactComponent as Calculator } from '../../img/Calculator.svg';
import { toast } from 'react-toastify';
import Select from 'react-select';
import { useSelector } from 'react-redux';
import { getWidth } from '../../redux/selectors';
import NumberFormat from 'react-number-format';

const FormAddExpense = ({ expense, handleClick }) => {
  const [addExpense] = useAddExpenseMutation();
  const [addIncome] = useAddIncomeMutation();
  const [date, setDate] = useState(new Date());
  const [amount, setAmount] = useState('');
  const [select, setSelect] = useState(null);
  const [description, setDescription] = useState('');

  const [openSelect, setOpenSelect] = useState(false);
  const [openInput, setOpenInput] = useState(false);
  const [openDescription, setOpenDescription] = useState(false);

  const VpWidth = useSelector(getWidth);

  const descriptionElement = document.querySelector('.descriptionElement');
  const inputElement = document.querySelector('.inputElement');
  const selectElement = document.querySelector('.selectElement ');
  console.log(selectElement);
  const formReset = () => {
    setAmount('');
    setSelect(null);
    setDescription('');
  };

  const handleSubmit = ev => {
    ev.preventDefault();
    const { date } = ev.currentTarget;

    const isDescriptionCorrect = () => {
      if (!description) {
        setOpenDescription(true);
        setTimeout(() => {
          setOpenDescription(false);
        }, 4000);
        return 1;
      }
      return 0;
    };
    const isSelectorCorrect = () => {
      if (!select?.value) {
        setOpenSelect(true);
        setTimeout(() => {
          setOpenSelect(false);
        }, 4000);
        return 1;
      }
      return 0;
    };

    const isAmountCorrect = () => {
      if (!amount) {
        setOpenInput(true);
        setTimeout(() => {
          setOpenInput(false);
        }, 4000);
        return 1;
      }
      return 0;
    };

    const isFormValid =
      isSelectorCorrect() + isDescriptionCorrect() + isAmountCorrect() === 0;

    if (isFormValid) {
      const transaction = {
        description,
        amount: amount,
        date: date?.value,
        category: select?.value,
      };

      if (expense) {
        addExpense(transaction)
          .unwrap()
          .then(data => {
            toast.success('Transaction added');
            formReset();
            if (VpWidth === 'mobile') {
              handleClick();
            }
          })
          .catch(error => toast.error(error.data.message));
      } else {
        addIncome(transaction)
          .unwrap()
          .then(data => {
            toast.success('Transaction added');
            formReset();
            if (VpWidth === 'mobile') {
              handleClick();
            }
          })
          .catch(error => toast.error(error.data.message));
      }
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
            className={`${s.description} descriptionElement`}
            placeholder="Product description"
            value={description}
            onChange={ev => setDescription(ev.target.value)}
            aria-describedby="description"
          />

          <Select
            type="text"
            id="category"
            name="category"
            options={expense ? optionsExpenses : optionsIncome}
            styles={styles}
            placeholder="Product category"
            className={`${s.select} selectElement`}
            value={select}
            onChange={data => setSelect(data)}
            aria-describedby="select"
          />

          <div className={s.currencyWrapp}>
            <NumberFormat
              aria-describedby="input"
              suffix={VpWidth === 'mobile' ? ' UAH' : ''}
              decimalScale={2}
              inputMode="numeric"
              placeholder={VpWidth === 'mobile' ? '00.00 UAH' : '0.00'}
              thousandSeparator={' '}
              fixedDecimalScale={true}
              className={`${s.input} inputElement`}
              id="amount"
              name="amount"
              value={amount}
              maxLength={VpWidth === 'mobile' ? 17 : 13}
              onValueChange={(values, sourceInfo) =>
                setAmount(values.floatValue)
              }
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
          <button type="reset" className={s.buttonClear} onClick={formReset}>
            Clear
          </button>
        </div>
      </form>
      <Popover
        id={'description'}
        open={openDescription}
        anchorEl={descriptionElement}
        onClick={() => setOpenDescription(false)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
      >
        <div className={s.popover}>Please enter description</div>
      </Popover>
      <Popover
        id={'select'}
        open={openSelect}
        anchorEl={selectElement}
        onClick={() => setOpenSelect(false)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
      >
        <div className={s.popover}>Please choose category</div>
      </Popover>
      <Popover
        id={'input'}
        open={openInput}
        anchorEl={inputElement}
        onClick={() => setOpenInput(false)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
      >
        <div className={s.popover}>Please enter amount</div>
      </Popover>
    </div>
  );
};

export default FormAddExpense;
