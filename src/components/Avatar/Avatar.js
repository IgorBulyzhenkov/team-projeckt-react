import { getEmail } from 'redux/selectors'
import { useSelector } from 'react-redux'
import s from './Avatar.module.css'

export default function Avatar() {
const email = useSelector(getEmail);


  return (
    <div className={s.avatar}>
      <p>{email[0]?.toUpperCase()}</p>
    </div>
  )
}
