import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCategory } from 'redux/reducer';
import { FiChevronLeft } from 'react-icons/fi';
import { FiChevronRight } from 'react-icons/fi';
import s from './DateSwiper.module.css';

export default function DateSwiper({ changeDate, themeStyle }) {
  const dispatch = useDispatch();

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const currentDate = new Date();
  const [date, setDate] = useState(() => {
    return `${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`;
  });

  const onDecr = () => {
    setDate(date => {
      const newDate = new Date(date);
      dispatch(setCategory(''));
      if (!monthNames[newDate.getMonth() - 1]) {
        return `${monthNames[11]} ${newDate.getFullYear() - 1}`;
      }
      return `${monthNames[newDate.getMonth() - 1]} ${newDate.getFullYear()}`;
    });
  };
  const onIncr = () => {
    setDate(date => {
      const newDate = new Date(date);
      dispatch(setCategory(''));
      if (!monthNames[newDate.getMonth() + 1]) {
        return `${monthNames[0]} ${newDate.getFullYear() + 1}`;
      }
      return `${monthNames[newDate.getMonth() + 1]} ${newDate.getFullYear()}`;
    });
  };

  const valueDate = value => {
    const date = new Date(value);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    if (month < 10) {
      month = '0' + month;
    }
    const newDate = year + '-' + month;
    return newDate;
  };

  useEffect(() => {
    changeDate(valueDate(date));
  });

  return (
    <div className={s.container}>
      <p className={s.currentPeriod} style={themeStyle}>
        Current period:
      </p>
      <div className={s.wrap}>
        <FiChevronLeft onClick={onDecr} className={s.arrow} size="20" />
        <div className={s.date}>{date}</div>
        <FiChevronRight onClick={onIncr} className={s.arrow} size="20" />
      </div>
    </div>
  );
}
