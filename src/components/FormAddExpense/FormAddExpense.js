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
import { ReactComponent as Calculator } from '../../img/Calculator.svg';
import { toast } from 'react-toastify';
import Select from 'react-select';
import { useSelector } from 'react-redux';
import { getWidth } from '../../redux/selectors';
import NumberFormat from 'react-number-format';
import { useContext } from 'react';
import { ThemeContext } from 'components/App';
import { darkThemeStyles } from 'services/theme-styles';
import Draggable from 'react-draggable'; // The default
import { Calculator as CalculatorNew } from 'react-mac-calculator';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const FormAddExpense = ({ expense, handleClick }) => {
  const [addExpense] = useAddExpenseMutation();
  const [addIncome] = useAddIncomeMutation();
  const [date, setDate] = useState(new Date());
  const [calculator, setCalculator] = useState(false);
  const [amount, setAmount] = useState('');
  const [select, setSelect] = useState(null);
  const [description, setDescription] = useState('');
  const [openSelect, setOpenSelect] = useState(false);
  const [openInput, setOpenInput] = useState(false);
  const [openDescription, setOpenDescription] = useState(false);
  const VpWidth = useSelector(getWidth);

  const openCalculator = () => {
    console.log(calculator);
    setCalculator(true);
  };

  const closeCalculator = () => {
    if (calculator) {
      setCalculator(false);
    }
  };

  const formReset = () => {
    setAmount('');
    setSelect(null);
    setDescription('');
    setDate(new Date());
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

  const themeColor = useContext(ThemeContext);

  const backColor =
    themeColor === 'dark' ? `${darkThemeStyles.backgroundColor}` : '#FFFFFF';

  const calendarEl = document.querySelectorAll(
    '.react-date-picker__inputGroup__input'
  );

  if (themeColor === 'dark') {
    calendarEl?.forEach(el => el.classList.add('whiteColor'));
  } else {
    calendarEl?.forEach(el => el.classList.remove('whiteColor'));
  }

  // useEffect(() => {
  //   setTimeout(() => {
  //     if (themeColor === 'dark') {
  //       calendarEl?.forEach(el => el.classList.add('whiteColor'));
  //     } else {
  //       calendarEl?.forEach(el => el.classList.remove('whiteColor'));
  //     }
  //   }, 500);
  //   console.log(calendarEl);
  // });

  const styles = {
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? '#52555F' : '#C7CCDC',
      fontSize: '12px',
      backgroundColor: state.isSelected ? '#C7CCDC' : `${backColor}`,
    }),

    singleValue: (provided, state) => ({
      ...provided,
      color: '#52555F',
      fontSize: '12px',
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

  // const themeStyle =
  //   themeColor === 'dark'
  //     ? { background: 'white', marginRight: '5px', borderRadius: '16px' }
  //     : {};
  const themeStyle2 = themeColor === 'dark' ? darkThemeStyles.basic : null;
  const calendarColor =
    themeColor === 'dark' ? { color: 'white' } : { color: '#52555f' };

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
            calendarIcon={<CalendarMonthIcon style={calendarColor} />}
            clearIcon={null}
            prevLabel={null}
            prev2Label={null}
            nextLabel={null}
            next2Label={null}
            name="date"
            onChange={setDate}
            format={'dd.MM.y'}
            // style={calendarColor}
          />
          <div className={s.notificationWraps}>
            <input
              type="text"
              id="description"
              name="description"
              className={s.description}
              placeholder="Product description"
              value={description}
              onChange={ev => setDescription(ev.target.value)}
            />
            {openDescription && (
              <div className={s.errorNotification}>"Please enter amount"</div>
            )}
          </div>
          <div className={s.notificationWraps}>
            <Select
              style={themeStyle2}
              type="text"
              id="category"
              name="category"
              options={expense ? optionsExpenses : optionsIncome}
              styles={styles}
              placeholder="Product category"
              className={s.select}
              value={select}
              onChange={data => setSelect(data)}
            />
            {openSelect && (
              <div className={s.errorNotification}>Please choose category</div>
            )}
          </div>
          <div className={s.currencyWrapp}>
            <div className={s.notificationWraps}>
              <NumberFormat
                allowNegative={false}
                suffix={VpWidth === 'mobile' ? ' UAH' : ''}
                decimalScale={2}
                inputMode="numeric"
                placeholder={VpWidth === 'mobile' ? '00.00 UAH' : '0.00'}
                thousandSeparator={' '}
                fixedDecimalScale={true}
                className={s.input}
                id="amount"
                name="amount"
                value={amount}
                maxLength={VpWidth === 'mobile' ? 16 : 12}
                onValueChange={(values, sourceInfo) =>
                  setAmount(values.floatValue)
                }
              />
              {openInput && (
                <div className={s.errorNotification}>Please enter amount</div>
              )}
            </div>
            <div className={s.calculateWrap}>
              <Calculator width="20" height="20" onClick={openCalculator} />
            </div>
          </div>
          {calculator && (
            <Draggable>
              <div className={s.calculatorWrap}>
                <AiOutlineCloseCircle
                  onClick={closeCalculator}
                  className={s.closeCalcIcon}
                />
                <CalculatorNew className={s.calculator} />
              </div>
            </Draggable>
          )}
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
    </div>
  );
};

export default FormAddExpense;
