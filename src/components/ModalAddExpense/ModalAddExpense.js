import s from './ModalAddExpense.module.css';
import FormAddExpense from '../FormAddExpense';

const ModalAddExpense = () => {
  return (
    <div className={s.modal}>
      <FormAddExpense />
    </div>
  );
};

export default ModalAddExpense;
