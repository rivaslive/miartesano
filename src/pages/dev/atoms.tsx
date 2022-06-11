import type { NextPage } from 'next';
import Text from 'components/Atoms/Text';
import Title from 'components/Atoms/Title';
import Button from 'components/Atoms/Button';
import Space from 'components/Atoms/Space';

const Atoms: NextPage = () => {
  return (
    <div className="container">
      <Title color="$primary">Title</Title>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias
        dolorum enim exercitationem hic illo, impedit non nostrum officiis
        quibusdam rerum tempora ullam voluptates. Alias animi delectus fugiat
        necessitatibus pariatur.
      </Text>

      <Space>
        <Button>Default</Button>
        <Button bgColor="$success" loading>
          Default
        </Button>
        <Button bgColor="$error">Default</Button>
        <Button bgColor="$warning">Default</Button>
        <Button bgColor="$primaryOpacity" color="$primary" rounded>
          Opacity
        </Button>
        <Button bgColor="$secondaryOpacity" color="$secondary" rounded>
          Opacity
        </Button>
        <Button bgColor="$errorOpacity" color="$error" rounded>
          Opacity
        </Button>
      </Space>
    </div>
  );
};

export default Atoms;
