import Head from 'next/head';
import LoginTemplate from 'components/Templates/Login';
import PublicLayout from 'components/Organism/Layout/PublicLayout';

const LoginPage = () => {
  return (
    <PublicLayout>
      <Head>
        <title>Mi Artesano - Inicia Sesión</title>
      </Head>
      <LoginTemplate />
    </PublicLayout>
  );
};

export default LoginPage;
