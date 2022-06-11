import { ReactNode } from 'react';

import useModal from 'hooks/useModal';
import Navbar from 'components/Organism/Navbar';
import NavbarMobile from 'components/Organism/Navbar/NavbarMobile';

import { StyleMain } from './style';
import StickyNavbar from '../StickyNavbar';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { isOpen, toggleModal } = useModal();

  return (
    <>
      <Navbar isOpen={isOpen} toggleOpen={toggleModal} />
      <StickyNavbar isOpen={isOpen} toggleOpen={toggleModal} />
      <NavbarMobile isOpen={isOpen} />
      <StyleMain>{children}</StyleMain>
    </>
  );
};

export default Layout;
