import type { NextPage } from 'next';
// import { useTheme } from 'next-themes';
import Layout from 'components/Organism/Layout';
import HomeTemplate from 'components/Templates/Home';

const Home: NextPage = () => {
  // const { theme, setTheme } = useTheme();
  // const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <Layout>
      <HomeTemplate />
    </Layout>
  );
};

export default Home;
