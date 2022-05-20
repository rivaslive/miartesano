import { ReactNode } from 'react';

import Navbar from 'Components/Organism/Navbar';
import { StyleMain } from './style';
import StickyNavbar from '../StickyNavbar';
import NavbarMobile from '../Navbar/NavbarMobile';
import useModal from '../../../hooks/useModal';

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
