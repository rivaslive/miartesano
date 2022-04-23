/*
eslint-disable
@typescript-eslint/no-unsafe-call,
@typescript-eslint/no-unsafe-return
*/
import type { NextPage } from 'next';
import { useTheme } from 'next-themes';
import Title from 'Components/Atoms/Title';
import Text from 'Components/Atoms/Text';
import Button from 'Components/Atoms/Button';

const Home: NextPage = () => {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <div className="container">
      <Title color="$primary">Hello Next.js</Title>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias
        dolorum enim exercitationem hic illo, impedit non nostrum officiis
        quibusdam rerum tempora ullam voluptates. Alias animi delectus fugiat
        necessitatibus pariatur.
      </Text>
      <Button
        onClick={toggleTheme}
        rounded
        bgColor="$primaryOpacity"
        color="$primary"
      >
        Change Theme
      </Button>
    </div>
  );
};

export default Home;
