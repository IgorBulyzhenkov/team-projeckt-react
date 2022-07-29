import s from './ModalNotification.module.css';
import { useState, useEffect } from 'react';
import { useTransition, animated } from 'react-spring';

const ModalNotification = () => {
  const [showModal, setShowModal] = useState(true);

  const transition = useTransition(showModal, {
    from: { opacity: 1 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const toogleModal = () => {
    setShowModal(showModal => !showModal);
  };

  useEffect(() => {
    const handleClose = ev => {
      toogleModal();
    };
    setTimeout(() => {
      handleClose();
    }, 11000);

    document.addEventListener('click', handleClose);
    return () => {
      document.removeEventListener('click', handleClose);
    };
  }, []);

  return transition((style, item) =>
    item ? (
      <animated.div className={s.modalWrap} style={style}>
        <div className={s.modal}>
          <div className={s.textWrap}>
            <span className={s.startText}>
              Hello! To get started, enter the current balance of your account!
            </span>
            <span className={s.prompt}>
              You can't spend money until you have it :)
            </span>
          </div>
        </div>
      </animated.div>
    ) : (
      ''
    )
  );
};

export default ModalNotification;
