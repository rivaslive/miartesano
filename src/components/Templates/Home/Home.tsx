import HelpUs from 'components/Organism/HelperUs';
import Container from 'components/Atoms/Container';
import BannerHome from 'components/Organism/BannerHome';
import OurServices from 'components/Organism/OurServices';
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
