import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/selectors';
import UserMenu from 'components/UserMenu';
import s from './header.module.css';
import logo from '../../img/Header/logo.svg';
import { useContext } from 'react';
import { ThemeContext } from 'components/App';
import ReactSwitch from 'react-switch'
import { darkThemeStyles } from 'services/theme-styles';


const Header = ({toggleTheme}) => {
  const themeColor = useContext(ThemeContext);
  const themeStyle =
    themeColor === 'dark'
      ? darkThemeStyles.header
      : {};
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <header className={s.header} style={themeStyle}>
      <div className={s.container}>
        <div className={s.logo}>
          <img src={logo} alt="" />
        </div>
        <div className={s.theme}><p className={s.themeText}>{themeColor}</p><ReactSwitch onChange={toggleTheme} checked={themeColor === "dark"}/></div>
        {isLoggedIn && <UserMenu />}
      </div>
      
    </header>
  );
};

export default Header;
