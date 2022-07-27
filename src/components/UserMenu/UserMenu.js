import { useSelector, useDispatch } from 'react-redux'
import { getEmail,getWidth } from 'redux/selectors'
import { useLogOutUserMutation } from 'redux/kapustaAPI';
import { resetUser } from 'redux/reducer';
import { kapustaApi } from 'redux/kapustaAPI';
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';
import Avatar from 'components/Avatar'
import s from './UserMenu.module.css'

export default function UserMenu() {
  const dispatch = useDispatch();
  const [logOutUser] = useLogOutUserMutation();


  const onLogOutUser = () => {
    logOutUser()
      .unwrap()
      .then(() => {dispatch(resetUser())
        dispatch(kapustaApi.util.resetApiState())});
  };

const width = useSelector(getWidth)
const email = useSelector(getEmail)
const userName = email?.split('@')[0]

  return (
    <div className={s.container}>
      <Avatar/>
      {width==='tablet'?<><p className={s.userName}>{userName}</p><div className={s.line}></div><div className={s.exitBtn} onClick={onLogOutUser}>Exit</div></>:<LogoutSharpIcon  onClick={onLogOutUser} className={s.icon}/>}
    </div>
  )
}
