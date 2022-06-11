import Head from 'next/head';
import SignUpTemplate from 'components/Templates/SignUp';
import PublicLayout from 'components/Organism/Layout/PublicLayout';

const SignUpPage = () => {
  return (
    <PublicLayout>
      <Head>
        <title>Mi Artesano - Crear cuenta</title>
      </Head>
      <SignUpTemplate />
    </PublicLayout>
  );
};

export default SignUpPage;
