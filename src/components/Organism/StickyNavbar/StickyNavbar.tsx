import { Search } from 'components/Atoms/Input';
import useScrollPosition from 'hooks/useScrollPosition';
import WhatsappAction from 'components/Molecules/WhatsappAction';

import AuthAction from 'components/Molecules/AuthAction';
import WishAction from 'components/Molecules/WishAction';
import ShopAction from 'components/Molecules/ShopAction';
import {
  StyleBrand,
  StyleBrandWrapper,
  StyleBurger,
  StyleButton,
  StyleContainer,
  StyleNavbar,
} from './style';
import Text from '../../Atoms/Text';
import Button from '../../Atoms/Button';

interface NavbarProps {
  isOpen: boolean;
  toggleOpen: () => void;
}

const StickyNavbar = ({ isOpen, toggleOpen }: NavbarProps) => {
  const { detached } = useScrollPosition();

  return (
    <StyleNavbar isScrolling={detached && !isOpen}>
      <StyleContainer>
        <StyleBrandWrapper onlyDesk>
          {detached && <StyleBrand src="/brand.png" />}
          {!detached && (
            <WhatsappAction
              css={{
                minWidth: 275,
              }}
            />
          )}
        </StyleBrandWrapper>

        <StyleBrandWrapper onlyMobile>
          {detached && <StyleBrand src="/brand.png" />}
          {!detached && (
            <>
              <Button variant="link" color="$white">
                Categorias
              </Button>
              <Button variant="link" color="$white">
                Muebles
              </Button>
              <Button variant="link" color="$white">
                Artesanias
              </Button>
              <Button variant="link" color="$white">
                Pulseras
              </Button>
            </>
          )}
        </StyleBrandWrapper>

        <Search
          className="search"
          onSearch={console.log}
          placeholder="Buscar..."
        />

        {/* Desktop */}
        <StyleBrandWrapper onlyDesk>
          <AuthAction
            css={{
              marginLeft: 20,
              minWidth: 160,
            }}
          />

          <WishAction />
          <ShopAction
            css={{
              marginLeft: 30,
              minWidth: 150,
            }}
          />
        </StyleBrandWrapper>

        {/* Mobile open menu */}
        {detached && (
          <StyleButton onlyMobile variant="link" onClick={toggleOpen}>
            <StyleBurger open={isOpen} />
          </StyleButton>
        )}
      </StyleContainer>
    </StyleNavbar>
  );
};

export default StickyNavbar;
