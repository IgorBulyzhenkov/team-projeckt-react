import { useSelector } from 'react-redux'
import { getIsLoggedIn } from 'redux/selectors'
import UserMenu from 'components/UserMenu'
import s from './header.module.css'
import logo from '../../img/Header/logo.svg'

const Header = () => {
    const isLoggedIn = useSelector(getIsLoggedIn);
    return (
        <header className={s.header}>
            <div className={s.container}>
                <div className={s.logo}>
                    <img src={logo} alt="" />
                </div>
                {isLoggedIn && <UserMenu/>}
            </div>
            
        </header>
    )
}

export default Header