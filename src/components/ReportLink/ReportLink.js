import { Link } from 'react-router-dom';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import s from './ReportLink.module.css';

const ReportLink = () => {
  return (
    <>
      <Link to="/" className={s.link}>
        <span className={s.span}>Reports</span>
        <EqualizerIcon />
      </Link>
    </>
  );
};

export default ReportLink;
