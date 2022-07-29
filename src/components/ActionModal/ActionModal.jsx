import s from './action-modal.module.css';

import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

const ActionModal = ({ children, toggleModal, logOut }) => {
  return createPortal(
    <div className={s.overlay}>
      <div className={s.modal}>
        <span onClick={toggleModal} className={s.closeBtn}>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="#fff"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 1L13 13" stroke="#52555F" strokeWidth="2" />
            <path d="M1 13L13 0.999999" stroke="#52555F" strokeWidth="2" />
          </svg>
        </span>
        {/* /Тут можно вставить необходимый текст через проп Чилдрен на своей странице/ */}
        {children}
        <button onClick={logOut} className={s.btn} type="button">
          Yes
        </button>
        <button onClick={toggleModal} className={s.btn} type="button">
          No
        </button>
      </div>
    </div>,
    modalRoot
  );
};

export default ActionModal;
