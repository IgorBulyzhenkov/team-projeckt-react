import s from './ModalNotification.module.css';
import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

const ModalNotification = () => {
  const [showModal, setShowModal] = useState(true);

  const props = useSpring({
    to: { opacity: 0 },
    from: { opacity: 1 },
    delay: 10000,
    config: { duration: 500 },
  });

  const toogleModal = () => {
    setShowModal(!showModal);
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

  return (
    showModal && (
      <animated.div className={s.modalWrap} style={props}>
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
    )
  );
};

export default ModalNotification;
