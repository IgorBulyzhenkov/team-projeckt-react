import s from './ModalAddExpense.module.css';
import FormAddExpense from '../FormAddExpense';
import { MdKeyboardBackspace } from 'react-icons/md';
// import { createPortal } from 'react-dom';

const ModalAddExpense = () => {
  return (
    <div className={s.modal}>
      <MdKeyboardBackspace />
      <FormAddExpense />
    </div>
  );
};

export default ModalAddExpense;
