import type { NextPage } from 'next';
// import { useTheme } from 'next-themes';
import Layout from 'Components/Organism/Layout';
import HomeTemplate from 'Components/Templates/Home';

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
