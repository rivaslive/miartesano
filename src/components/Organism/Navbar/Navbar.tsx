import Button from 'components/Atoms/Button';
import useScrollPosition from 'hooks/useScrollPosition';
import {
  InstagramFilled,
  TwitterFilled,
  FacebookFilled,
} from 'components/Atoms/Icons';

import {
  StyleBrand,
  StyleBrandWrapper,
  StyleBurger,
  StyleButton,
  StyleButtonMenu,
  StyleContainer,
  StyleNavbar,
} from './style';

interface NavbarProps {
  isOpen: boolean;
  toggleOpen: () => void;
}

const Navbar = ({ toggleOpen, isOpen }: NavbarProps) => {
  const { detached } = useScrollPosition();

  return (
    <StyleNavbar isScrolling={detached && !isOpen}>
      <StyleContainer>
        <StyleBrandWrapper>
          <StyleBrand src="/brand.png" />

          <StyleButtonMenu onlyDesk>Categorias</StyleButtonMenu>
          <StyleButtonMenu onlyDesk>Muebles</StyleButtonMenu>
          <StyleButtonMenu onlyDesk>Artesanias</StyleButtonMenu>
          <StyleButtonMenu onlyDesk>Pulseras</StyleButtonMenu>
          <StyleButtonMenu onlyDesk>Contactanos</StyleButtonMenu>
        </StyleBrandWrapper>

        {/* Desktop */}
        <StyleBrandWrapper onlyDesk>
          <Button
            color="$icon"
            variant="link"
            css={{
              marginLeft: 20,
            }}
          >
            <InstagramFilled />
          </Button>
          <Button variant="link" color="$icon">
            <FacebookFilled />
          </Button>
          <Button variant="link" color="$icon">
            <TwitterFilled />
          </Button>
        </StyleBrandWrapper>

        {/* Mobile open menu */}
        <StyleButton onlyMobile variant="link" onClick={toggleOpen}>
          <StyleBurger open={isOpen} />
        </StyleButton>
      </StyleContainer>
    </StyleNavbar>
  );
};

/*
<Search
  onSearch={console.log}
  placeholder="Buscar..."
  css={{
    minWidth: '270px',
  }}
/>


<StyleMobileSearch>
  <Search
    onSearch={console.log}
    placeholder="Buscar..."
    css={{
      minWidth: '270px',
    }}
  />
</StyleMobileSearch>
*/

export default Navbar;
