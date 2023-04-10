import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/selectors';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Home } from 'pages/Home';
import Contacts from 'pages/Contacts';
import Login from 'pages/Login';
import Register from 'pages/Register';
import { requestRefreshUser } from 'redux/user/user.operations';

export function App() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
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
  }, [dispatch, isLoggedIn]);

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
