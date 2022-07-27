import s from './header.module.css'
import logo from '../../img/Header/logo.svg'

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.container}>
                <div className={s.logo}>
                    <img src={logo} alt="" />
                </div>
            </div>
        </header>
    )
}

export default Header