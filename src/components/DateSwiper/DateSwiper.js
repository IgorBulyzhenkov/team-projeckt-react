import { useState, useEffect } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import s from './DateSwiper.module.css';

export default function DateSwiper({ changeDate }) {
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

  const onDecr = async () => {
    setDate(date => {
      const newDate = new Date(date);
      if (!monthNames[newDate.getMonth() - 1]) {
        return `${monthNames[11]} ${newDate.getFullYear() - 1}`;
      }
      return `${monthNames[newDate.getMonth() - 1]} ${newDate.getFullYear()}`;
    });
  };
  const onIncr = async () => {
    setDate(date => {
      const newDate = new Date(date);
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
      <p className={s.currentPeriod}>Current period:</p>
      <div className={s.wrap}>
        <ArrowBackIosIcon
          onClick={onDecr}
          className={s.arrow}
          fontSize={'inherit'}
        />
        <div className={s.date}>{date}</div>
        <ArrowForwardIosIcon
          onClick={onIncr}
          className={s.arrow}
          fontSize={'inherit'}
        />
      </div>
    </div>
  );
}
