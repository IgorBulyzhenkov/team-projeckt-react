import { useSelector } from 'react-redux'
import { getEmail,getWidth } from 'redux/selectors'
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';
import Avatar from 'components/Avatar'
import s from './UserMenu.module.css'

export default function UserMenu() {
const width = useSelector(getWidth)
const email = useSelector(getEmail)
const userName = email?.split('@')[0]

  return (
    <div className={s.container}>
      <Avatar/>
      {width==='tablet'&&<p className={s.userName}>{userName}</p>}
      {width==='tablet'?<button className={s.exitBtn}>Exit</button>:<LogoutSharpIcon/>}
    </div>
  )
}
