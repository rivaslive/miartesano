import { styled } from 'styles/stitches.config';
import { AveFilled } from 'Components/Atoms/Icons';
import Button from 'Components/Atoms/Button';
import Container from 'Components/Atoms/Container';

export const StyleContainer = styled(Container, {
  display: 'flex',
  width: '100%',
  height: 66,
  padding: '0 20px',
  justifyContent: 'space-between',
  alignItems: 'center',

  '.search': {
    display: 'none',
  },

  '@tablet': {
    padding: '0 30px',
    height: 76,

    '.search': {
      display: 'block',
    },
  },
});

export const StyleNavbar = styled('div', {
  top: 0,
  padding: '0',
  position: 'sticky',
  zIndex: '$zIndex$max',
  backdropFilter: 'saturate(180%) blur(10px)',
  background: 'rgba(11,94,221,0.8)',

  '@tablet': {
    padding: '8px 0',
  },

  variants: {
    isScrolling: {
      true: {
        boxShadow: 'rgb(2 1 1 / 10%) 0px 5px 20px -5px',
      },
    },
  },
});

export const StyleBrandWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',

  variants: {
    onlyDesk: {
      true: {
        display: 'none',

        '@tablet': {
          display: 'flex',
        },
      },
    },
  },
});

export const StyleAve = styled(AveFilled, {
  width: 60,
  height: 35,

  '@tablet': {
    width: 80,
    height: 55,
  },
});

export const StyleBrand = styled('img', {
  width: 180,
  height: 60,
  objectFit: 'contain',

  '@tablet': {
    width: 240,
  },
});

export const StyleBurger = styled('span', {
  position: 'relative',

  '&:before': {
    content: '',
    display: 'block',
    marginBottom: 8,
    width: 22,
    height: 2,
    background: '$white',
    transition: 'all 0.3s ease-in-out',
  },
  '&:after': {
    content: '',
    display: 'block',
    width: 22,
    height: 2,
    background: '$white',
    transition: 'all 0.3s ease-in-out',
  },

  variants: {
    open: {
      true: {
        '&:before': {
          transform: 'translateY(2px)rotate(45deg);',
        },
        '&:after': {
          transform: 'translateY(-8px)rotate(-45deg)',
        },
      },
    },
  },
});

export const StyleButton = styled(Button, {
  variants: {
    onlyMobile: {
      true: {
        display: 'block',

        '@tablet': {
          display: 'none',
        },
      },
    },

    onlyDesk: {
      true: {
        display: 'none',

        '@tablet': {
          display: 'block',
        },
      },
    },
  },
});

export const StyleButtonMenu = styled(Button, {
  padding: '0 10px',
  fontSize: 16,
  background: 'transparent !important',
  minWidth: 'auto',

  variants: {
    onlyDesk: {
      true: {
        display: 'none',

        '@tablet': {
          display: 'block',
        },
      },
    },
  },
});

export const StyleMobileSearch = styled('div', {
  display: 'block',
  padding: '10px 20px 10px',

  '@tablet': {
    display: 'none',
  },
});

export const StyleMobileMenu = styled('div', {
  display: 'none',
  position: 'fixed',
  top: 66,
  left: 0,
  width: '100%',
  height: 'calc(100vh - 76px)',
  padding: '0 20px 15px',
  zIndex: '$zIndex$max',
  background: 'hsla(0,0%,100%,0.8)',
  backdropFilter: 'saturate(180%) blur(10px)',

  variants: {
    open: {
      true: {
        display: 'block',
      },
    },
  },
});
