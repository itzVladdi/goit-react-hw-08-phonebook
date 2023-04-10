import { requestLogout } from 'redux/user/user.operations';
import {
  LogOutButton,
  StyledHeader,
  StyledLink,
  StyledNav,
  Wrapper,
} from './Navigation.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUserData } from 'redux/selectors';

export function Navigation() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userData = useSelector(selectUserData);

  const handleLogOut = async () => {
    try {
      await dispatch(requestLogout()).unwrap();
      alert(`You've Successfully logged out!`);
    } catch (error) {
      alert(`Oops! Something went wrong... ${error}`);
    }
  };
  return (
    <StyledHeader>
      <StyledNav>
        <StyledLink to="/">Home</StyledLink>
        {isLoggedIn ? (
          <StyledLink to="/contacts">Contacts</StyledLink>
        ) : (
          <Wrapper>
            <StyledLink to="/register">Register</StyledLink>
            <StyledLink to="/login">Log In</StyledLink>
          </Wrapper>
        )}
      </StyledNav>
      {isLoggedIn && (
        <Wrapper>
          <p>Welcome, {userData.name}</p>
          <LogOutButton type="button" onClick={handleLogOut}>
            Logout
          </LogOutButton>
        </Wrapper>
      )}
    </StyledHeader>
  );
}
