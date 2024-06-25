import { redirect } from 'next/navigation';
import { getSession } from '@/actions';
import LoginForm from '@/app/components/loginForm';

const LoginPage = async () => {
  const session = await getSession();

  if (session.isLoggedIn) {
    redirect('/');
  }
  return (
    <div className="login">
      <h1>Welcome to the LoginPage</h1>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
