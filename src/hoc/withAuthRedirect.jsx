import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/selectors';

export const withAuthRedirectLogOut = (Component, redirectTo) => {
  const ComponentWithRedirect = props => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return isLoggedIn ? <Component {...props} /> : <Navigate to={redirectTo} />;
  };

  return ComponentWithRedirect;
};

export const withAuthRedirectLogIn = (Component, redirectTo) => {
  const ComponentWithRedirect = props => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return isLoggedIn ? <Navigate to={redirectTo} /> : <Component {...props} />;
  };

  return ComponentWithRedirect;
};
