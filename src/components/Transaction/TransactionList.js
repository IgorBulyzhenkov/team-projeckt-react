import PropTypes from 'prop-types';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { RiArrowDownSLine } from 'react-icons/ri';
import TransactionItem from './TransactionItem';
import s from './TransactionList.module.css';
import { useContext, useState, useEffect } from 'react';
import { ThemeContext } from 'components/App';
import { darkThemeStyles } from 'services/theme-styles';
import { setFilterCategory } from 'redux/reducer';
import { getFilterCategory } from 'redux/selectors';

import { useSelector, useDispatch } from 'react-redux';

export default function TransactionList({
  transactions: data,
  expenses,
  handleClick,
}) {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(getFilterCategory);
  const [descriptionSort, setDescriptionSort] = useState(true);
  const [sumSort, setSumSort] = useState(true);
  const [dateSort, setDateSort] = useState(true);
  const [filterCategoryList, setFilterCategoryList] = useState(
    [...data]
      .map(({ category }) => category)
      .filter((el, index, array) => array.indexOf(el) === index)
  );

  const [isMenuCategory, setIsMenuCategory] = useState(false);
  const [transactions, setTransactions] = useState(
    [...data].sort((a, b) => b['_id'].localeCompare(a['_id']))
  );
  const anchorCategory = document.querySelector('#filtrCategory');

  useEffect(() => {
    setFilterCategoryList(
      [...data]
        .map(({ category }) => category)
        .filter((el, index, array) => array.indexOf(el) === index)
    );
    setTransactions([...data].sort((a, b) => b['_id'].localeCompare(a['_id'])));
  }, [data]);

  const themeColor = useContext(ThemeContext);
  const themeStyle =
    themeColor === 'dark'
      ? { ...darkThemeStyles.inputsElements, borderRadius: '16px' }
      : null;
  // const fontColor = themeColor === "dark" ? {color: darkThemeStyles.textColor} : null
  const themeStyle2 = themeColor === 'dark' ? darkThemeStyles.basic : null;
  const tableBorderColor =
    themeColor === 'dark'
      ? {
          borderRightColor: darkThemeStyles.elementsColor,
          borderBottomColor: darkThemeStyles.elementsColor,
        }
      : null;

  const sortByDate = () => {
    let filterdTransactions = [];
    if (dateSort) {
      filterdTransactions = [...transactions].sort((a, b) => {
        const newDateA = new Date(a.date);
        const newDateB = new Date(b.date);
        return newDateB - newDateA;
      });
      setDateSort(!dateSort);
    } else {
      filterdTransactions = [...transactions].sort((a, b) => {
        const newDateA = new Date(a.date);
        const newDateB = new Date(b.date);
        return newDateA - newDateB;
      });
      setDateSort(!dateSort);
    }

    setTransactions(filterdTransactions);
  };
  const sortByDescription = () => {
    let filterdTransactions = [];
    if (descriptionSort) {
      filterdTransactions = [...transactions].sort((a, b) =>
        a.description.localeCompare(b.description)
      );
      setDescriptionSort(!descriptionSort);
    } else {
      filterdTransactions = [...transactions].sort((a, b) =>
        b.description.localeCompare(a.description)
      );
      setDescriptionSort(!descriptionSort);
    }

    setTransactions(filterdTransactions);
  };

  const sortBySum = () => {
    let filterdTransactions = [];
    if (sumSort) {
      filterdTransactions = [...transactions].sort(
        (a, b) => b.amount - a.amount
      );
      setSumSort(!sumSort);
    } else {
      filterdTransactions = [...transactions].sort(
        (a, b) => a.amount - b.amount
      );
      setSumSort(!sumSort);
    }

    setTransactions(filterdTransactions);
  };

  return (
    <div className={s.table} style={themeStyle}>
      <table>
        <thead>
          <tr>
            <th
              style={themeStyle2}
              onClick={() => sortByDate()}
              className={s.listHeader}
            >
              Date
            </th>
            <th
              style={themeStyle2}
              onClick={() => sortByDescription()}
              className={s.listHeader}
            >
              Description
            </th>
            <th
              style={themeStyle2}
              onClick={() => {
                setIsMenuCategory(true);
              }}
              className={s.listHeader}
              id="filtrCategory"
            >
              <div className={s.categoryCell}>
                category
                <RiArrowDownSLine className={s.arrowDown} />
              </div>
            </th>
            <th
              style={themeStyle2}
              onClick={() => sortBySum()}
              className={s.listHeader}
            >
              Sum
            </th>
            <th style={themeStyle2}>&nbsp;</th>
          </tr>
        </thead>
      </table>
      <div className={s.tableBody}>
        {transactions?.length === 0 ? (
          <p style={themeStyle2} className={s.plugText}>
            No transaction history! Please fill out the form above...
          </p>
        ) : (
          <table>
            <tbody>
              {transactions
                .filter(({ category }) =>
                  selectedCategory ? category === selectedCategory : true
                )
                .map(({ description, category, amount, date, _id }) => (
                  <TransactionItem
                    themeStyle={themeStyle2}
                    tableBorderColor={tableBorderColor}
                    key={_id}
                    description={description}
                    category={category}
                    amount={amount}
                    date={date}
                    id={_id}
                    expenses={expenses}
                    handleClick={handleClick}
                  />
                ))}
            </tbody>
          </table>
        )}
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorCategory}
        autoFocus={false}
        open={isMenuCategory}
        onClose={() => setIsMenuCategory(false)}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {filterCategoryList.map(el => (
          <MenuItem
            onClick={e => {
              dispatch(setFilterCategory(e.target.id));
              setIsMenuCategory(false);
            }}
            key={el}
            id={el}
            sx={{ fontSize: '12px' }}
          >
            {el}
          </MenuItem>
        ))}
        <MenuItem
          onClick={() => {
            dispatch(setFilterCategory(''));
            setIsMenuCategory(false);
          }}
          key="reset"
          sx={{ fontSize: '12px' }}
        >
          Все
        </MenuItem>
      </Menu>
    </div>
  );
}

TransactionList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
      _id: PropTypes.string.isRequired,
    })
  ),
};
