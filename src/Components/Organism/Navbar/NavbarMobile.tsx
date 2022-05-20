import { Search } from 'Components/Atoms/Input';
import Button from 'Components/Atoms/Button';
import {
  FacebookFilled,
  InstagramFilled,
  TwitterFilled,
} from 'Components/Atoms/Icons';
import { StyleMobileMenu } from './style';

interface NavbarMobileProps {
  isOpen?: boolean;
}

const NavbarMobile = ({ isOpen }: NavbarMobileProps) => {
  // Mobile menu and search
  return (
    <StyleMobileMenu open={isOpen}>
      <Search
        onSearch={console.log}
        placeholder="Buscar..."
        css={{
          minWidth: '270px',
        }}
      />

      <Button color="$icon" variant="link">
        <InstagramFilled /> Instagram
      </Button>
      <Button variant="link" color="$icon">
        <FacebookFilled /> Facebook
      </Button>
      <Button variant="link" color="$icon">
        <TwitterFilled /> Twitter
      </Button>
      <Button
        rounded
        color="$primary"
        bgColor="$primaryOpacity"
        css={{
          marginLeft: 20,
        }}
      >
        Iniciar Sesion
      </Button>
    </StyleMobileMenu>
  );
};

export default NavbarMobile;
