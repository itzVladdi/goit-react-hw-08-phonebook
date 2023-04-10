import React, { useEffect } from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { requestLogin } from 'redux/user/user.operations';
import { selectIsLoggedIn, selectUserStatus } from 'redux/selectors';
import {
  StyledForm,
  StyledLabel,
} from 'components/RegisterForm/RegisterForm.styled';

export function LoginForm() {
  const dispatch = useDispatch();

  const status = useSelector(selectUserStatus);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();

  const loginFormRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  useEffect(() => {
    if (!isLoggedIn) return;

    navigate('/contacts');
  }, [navigate, isLoggedIn]);

  const handleSubmit = async event => {
    event.preventDefault();

    const formData = {
      email: emailInputRef.current.value,
      password: passwordInputRef.current.value,
    };

    try {
      const response = await dispatch(requestLogin(formData)).unwrap();
      alert(`User ${response.user.name} successfully entered!`);
    } catch (error) {
      alert(`Oops! Something went wrong... ${error}`);
    }
    loginFormRef.current?.reset();
  };

  return (
    <div>
      <StyledForm ref={loginFormRef} onSubmit={handleSubmit}>
        <StyledLabel>
          Email:
          <input
            ref={emailInputRef}
            type="email"
            name="userEmail"
            placeholder=""
            required
          />
        </StyledLabel>
        <StyledLabel>
          <p>Password:</p>
          <input
            ref={passwordInputRef}
            type="password"
            name="userPassword"
            required
          />
        </StyledLabel>
        <button type="submit" disabled={status === 'pending'}>
          Sign In
        </button>
      </StyledForm>
    </div>
  );
}
