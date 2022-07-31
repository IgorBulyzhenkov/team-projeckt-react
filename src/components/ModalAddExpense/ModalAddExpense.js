import s from './ModalAddExpense.module.css';
import FormAddExpense from '../FormAddExpense';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { createPortal } from 'react-dom';

import { useContext } from 'react';
import { ThemeContext } from 'components/App';
import { darkThemeStyles } from 'services/theme-styles';
import { IconButton } from '@mui/material';

const mobileModalRoot = document.querySelector('#mobileModal-root');

const ModalAddExpense = ({ handleClick, expense }) => {
  const themeColor = useContext(ThemeContext)
  const themeStyle = themeColor === "dark" ? darkThemeStyles.elements: null

  return createPortal(
    <div className={s.overlay} id="backDrop">
      <div className={s.modal} style={themeStyle} >
        <FormAddExpense expense={expense} handleClick={handleClick} />
      </div>
    </div>,
    mobileModalRoot
  );
};

export default ModalAddExpense;
