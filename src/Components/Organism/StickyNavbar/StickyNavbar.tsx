import { Search } from 'Components/Atoms/Input';
import useScrollPosition from 'hooks/useScrollPosition';
import WhatsappAction from 'Components/Molecules/WhatsappAction';

import AuthAction from 'Components/Molecules/AuthAction';
import WishAction from 'Components/Molecules/WishAction';
import ShopAction from 'Components/Molecules/ShopAction';
import {
  StyleBrand,
  StyleBrandWrapper,
  StyleBurger,
  StyleButton,
  StyleContainer,
  StyleNavbar,
} from './style';

interface NavbarProps {
  isOpen: boolean;
  toggleOpen: () => void;
}

const StickyNavbar = ({ isOpen, toggleOpen }: NavbarProps) => {
  const { detached } = useScrollPosition();

  return (
    <StyleNavbar isScrolling={detached && !isOpen}>
      <StyleContainer>
        <StyleBrandWrapper>
          {detached && <StyleBrand src="/brand.png" />}
          {!detached && (
            <WhatsappAction
              css={{
                minWidth: 275,
              }}
            />
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
