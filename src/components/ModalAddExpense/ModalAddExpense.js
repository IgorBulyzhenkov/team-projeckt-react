import s from './ModalAddExpense.module.css';
import FormAddExpense from '../FormAddExpense';
import { createPortal } from 'react-dom';

const mobileModalRoot = document.querySelector('#mobileModal-root');

const ModalAddExpense = ({ handleClick, expense }) => {
  return createPortal(
    <div className={s.overlay} id="backDrop">
      <div className={s.modal}>
        <FormAddExpense expense={expense} handleClick={handleClick} />
      </div>
    </div>,
    mobileModalRoot
  );
};

export default ModalAddExpense;
