import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { getEmail, getWidth } from 'redux/selectors';
import { useLogOutUserMutation } from 'redux/kapustaAPI';
import { resetUser } from 'redux/reducer';
import { kapustaApi } from 'redux/kapustaAPI';
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';
import Avatar from 'components/Avatar';
import s from './UserMenu.module.css';
import ActionModal from 'components/ActionModal';

export default function UserMenu() {
  const dispatch = useDispatch();
  const [logOutUser] = useLogOutUserMutation();
  const [isModalOpen, setModal] = useState('false');

  const toggleModal = () => {
    setModal(!isModalOpen);
  };

  const onLogOutUser = () => {
    logOutUser()
      .unwrap()
      .then(() => {
        dispatch(resetUser());
        dispatch(kapustaApi.util.resetApiState());
      });
  };

  const width = useSelector(getWidth);
  const email = useSelector(getEmail);
  const userName = email?.split('@')[0];

  return (
    <>
      <div className={s.container}>
        <Avatar />
        <p className={s.userName}>{userName}</p>
        <div className={s.line}></div>
        <div onClick={toggleModal} className={s.exitBtn}>
          Exit
        </div>
        <LogoutSharpIcon onClick={toggleModal} className={s.icon} />
      </div>
      {!isModalOpen && (
        <ActionModal toggleModal={toggleModal} logOut={onLogOutUser}>
          <p className={s.text}>Do you really want to leave?</p>
        </ActionModal>
      )}
    </>
  );
}
