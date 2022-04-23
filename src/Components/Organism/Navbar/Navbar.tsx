import Button from 'Components/Atoms/Button';
import AveFilled from 'Components/Atoms/Icons/AveFilled';
import useScrollPosition from 'hooks/useScrollPosition';
import { StyleBrand, StyleBrandWrapper, StyleNavbar } from './style';

const Navbar = () => {
  const { detached } = useScrollPosition();

  return (
    <StyleNavbar isScrolling={detached}>
      <StyleBrandWrapper>
        <AveFilled width="80px" height="55px" />
        <StyleBrand>Mi Artesano</StyleBrand>
      </StyleBrandWrapper>

      <StyleBrandWrapper>
        <Button bgColor="$primaryOpacity" color="$primary" rounded>
          Iniciar Sesion
        </Button>
      </StyleBrandWrapper>
    </StyleNavbar>
  );
};

export default Navbar;
