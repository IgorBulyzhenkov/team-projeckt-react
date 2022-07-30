import s from './ModalAddExpense.module.css';
import FormAddExpense from '../FormAddExpense';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { createPortal } from 'react-dom';
import { IconButton } from '@mui/material';
const mobileModalRoot = document.querySelector('#mobileModal-root');

const ModalAddExpense = ({ handleClick, expense }) => {
  return createPortal(
    <div className={s.overlay} id="backDrop">
      <div className={s.modal}>
        <IconButton
          color="warning"
          onClick={handleClick}
          aria-label="button close"
          component="button"
        >
          <KeyboardBackspaceIcon />
        </IconButton>
        <FormAddExpense expense={expense} handleClick={handleClick} />
      </div>
    </div>,
    mobileModalRoot
  );
};

export default ModalAddExpense;
