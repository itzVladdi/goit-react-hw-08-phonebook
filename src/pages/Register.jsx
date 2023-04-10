import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Title } from './Login.style';
import { withAuthRedirectLogIn } from 'hoc/withAuthRedirect';

function Register() {
  return (
    <>
      <Title>Register new account!</Title>
      <RegisterForm />
    </>
  );
}
export default withAuthRedirectLogIn(Register, '/contacts');
