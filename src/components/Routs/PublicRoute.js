import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/selectors';

export default function PublicRoute({ children }) {
  const isLogin = useSelector(getIsLoggedIn);

  return <>{!isLogin ? children : <Navigate to="/home" replace />}</>;
}
PublicRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
