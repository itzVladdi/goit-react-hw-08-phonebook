import { useRef } from 'react';
import { StyledForm, StyledLabel } from './RegisterForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { requestRegister } from 'redux/user/user.operations';
import { selectUserStatus } from 'redux/selectors';

export function RegisterForm() {
  const dispatch = useDispatch();
  const status = useSelector(selectUserStatus);

  const formRef = useRef();
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const handleSubmit = async event => {
    event.preventDefault();

    const formData = {
      name: nameInputRef.current.value,
      email: emailInputRef.current.value,
      password: passwordInputRef.current.value,
    };

    dispatch(requestRegister(formData))
      .unwrap()
      .then(res => {
        alert(`User ${res.user.name} successfully registered!`);
      })
      .catch(err => {
        alert(`Oops! Something went wrong... ${err}`);
      });
    console.log();
    formRef.current?.reset();
  };

  return (
    <StyledForm ref={formRef} onSubmit={handleSubmit}>
      <StyledLabel>
        Username:
        <input
          ref={nameInputRef}
          type="text"
          name="name"
          placeholder=""
          required
        />
      </StyledLabel>
      <StyledLabel>
        Email:
        <input
          ref={emailInputRef}
          type="email"
          name="email"
          placeholder=""
          required
        />
      </StyledLabel>
      <StyledLabel>
        Password:
        <input
          ref={passwordInputRef}
          type="password"
          name="password"
          required
        />
      </StyledLabel>
      <button type="submit" disabled={status === 'pending'}>
        Register
      </button>
    </StyledForm>
  );
}
