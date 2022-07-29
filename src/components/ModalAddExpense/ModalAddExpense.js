import s from './ModalAddExpense.module.css';
import FormAddExpense from '../FormAddExpense';
import { MdKeyboardBackspace } from 'react-icons/md';
import { createPortal } from 'react-dom';
const modalRoot = document.querySelector('#modal-root');

const ModalAddExpense = ({ handleClick }) => {
  return createPortal(
    <div className={s.modal}>
      <MdKeyboardBackspace onClick={e => handleClick(e)} />
      <FormAddExpense />
    </div>,
    modalRoot
  );
};

export default ModalAddExpense;
