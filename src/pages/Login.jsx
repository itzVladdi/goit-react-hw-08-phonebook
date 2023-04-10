import { LoginForm } from 'components/LogInForm/LogInForm';
import { Title } from './Login.style';
import { withAuthRedirectLogIn } from 'hoc/withAuthRedirect';

function Login() {
  return (
    <>
      <Title>Login into your account!</Title>
      <LoginForm />
    </>
  );
}
export default withAuthRedirectLogIn(Login, '/contacts');
