import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { selectIsLoggedIn, selectToken } from 'redux/selectors';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Home } from 'pages/Home';
import Contacts from 'pages/Contacts';
import Login from 'pages/Login';
import Register from 'pages/Register';
import { requestRefreshUser } from 'redux/user/user.operations';

export function App() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const token = useSelector(selectToken);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn || !token) return;

    const refresh = async () => {
      try {
        await dispatch(requestRefreshUser()).unwrap();
        alert(`You was successfully authorized!`);
      } catch (error) {
        alert(`Oops! Something went wrong... ${error}`);
      }
    };

    refresh();
  }, [dispatch, isLoggedIn, token]);

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
}
