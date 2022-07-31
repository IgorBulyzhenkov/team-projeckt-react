import { Link } from 'react-router-dom';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import s from './ReportLink.module.css';
import { useContext } from 'react';
import { ThemeContext } from 'components/App';
import { darkThemeStyles } from 'services/theme-styles';

const ReportLink = () => {
  const themeColor = useContext(ThemeContext)
  const themeStyle = themeColor === "dark" ? darkThemeStyles.basic : null

  return (
    <>
      <Link to="/report" className={s.link}>
        <span className={s.span} style={themeStyle}>Reports</span>
        <EqualizerIcon />
      </Link>
    </>
  );
};

export default ReportLink;
