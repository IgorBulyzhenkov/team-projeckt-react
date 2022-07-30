import s from './ModalAddExpense.module.css';
import FormAddExpense from '../FormAddExpense';
import { IconButton } from '@mui/material';
import { createPortal } from 'react-dom';
import { Clear } from '@mui/icons-material';

const mobileModalRoot = document.querySelector('#mobileModal-root');

const ModalAddExpense = ({ handleClick, expense }) => {
  return createPortal(
    <div className={s.overlay} id="backDrop">
      <div className={s.modal}>
        <IconButton
          sx={{ mb: 2 }}
          color="warning"
          onClick={handleClick}
          aria-label="button close"
          component="button"
        >
          <Clear />
        </IconButton>
        <FormAddExpense expense={expense} handleClick={handleClick} />
      </div>
    </div>,
    mobileModalRoot
  );
};

export default ModalAddExpense;
