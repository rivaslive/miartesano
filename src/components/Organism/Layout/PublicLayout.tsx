import { ReactNode } from 'react';
import Link from 'next/link';

import { ROUTES } from 'config';
import Text from 'components/Atoms/Text';
import Container from 'components/Atoms/Container';
import { StyleBrand } from 'components/Organism/Navbar/style';
import { StyleFooter, StyleMain } from './style';

interface LayoutProps {
  children: ReactNode;
}

const PublicLayout = ({ children }: LayoutProps) => {
  return (
    <Container withPaddingY>
      <Link href={ROUTES.HOME.path} passHref>
        <a>
          <StyleBrand src="/brand-dark.png" />
        </a>
      </Link>
      <StyleMain>
        {children}
        <StyleFooter>
          <Text
            margin="0"
            fontSize="12px"
            align="center"
            letterSpacing="-0.03em"
          >
            Copyright © 2022-{new Date().getFullYear()} Mi Artesano R.L de C.V.
            Todos los derechos reservados.
            <br />
            Condiciones de uso, Aviso de privacidad, cookies y AdChoice Norton
            Secured: con la tecnología de DigiCert
          </Text>
        </StyleFooter>
      </StyleMain>
    </Container>
  );
};

export default PublicLayout;
