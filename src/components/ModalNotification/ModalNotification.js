import s from './ModalNotification.module.css';
import { useState, useEffect } from 'react';
// import { Transition } from 'react-transition-group';

const ModalNotification = () => {
  const [showModal, setShowModal] = useState(true);

  // const defaultStyle = {
  //   transition: `opacity 300ms ease-in-out`,
  //   opacity: 0,
  // };

  // const transitionStyles = {
  //   exiting: { opacity: 0 },
  //   exited: { opacity: 0 },
  // };
  const toogleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    const handleClose = ev => {
      toogleModal();
    };
    setTimeout(() => {
      handleClose();
    }, 5000);

    document.addEventListener('click', handleClose);
    return () => {
      document.removeEventListener('click', handleClose);
    };
  }, []);

  return (
    // <Transition
    //   timeout={300}
    //   in={showModal}
    //   styled={{ ...transitionStyles, ...defaultStyle }}
    // >
    showModal && (
      <div className={s.modalWrap}>
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
      </div>
    )
    // </Transition>
  );
};

export default ModalNotification;
