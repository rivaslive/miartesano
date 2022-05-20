import HelpUs from 'Components/Organism/HelperUs';
import Container from 'Components/Atoms/Container';
import BannerHome from 'Components/Organism/BannerHome';
import OurServices from 'Components/Organism/OurServices';
import { dataProductsOne, dataProductsTwo, dataPromos } from './data';

const Home = () => {
  return (
    <Container withPaddingY>
      <BannerHome
        promos={dataPromos}
        productsTop={dataProductsOne}
        productsBottom={dataProductsTwo}
      />

      <OurServices />

      <HelpUs />
    </Container>
  );
};

export default Home;
