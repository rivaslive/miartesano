import { styled } from 'styles/stitches.config';
import Button from 'components/Atoms/Button';
import Container from 'components/Atoms/Container';

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
  top: -1,
  padding: '0',
  position: 'sticky',
  zIndex: '$zIndex$max',
  backdropFilter: 'saturate(180%) blur(10px)',
  background: 'rgba(11,94,221,0.8)',
  transition: 'all 250ms',

  '@tablet': {
    padding: '8px 0',
  },

  variants: {
    isScrolling: {
      true: {
        boxShadow: 'rgb(2 1 1 / 10%) 0px 5px 20px -5px',
        '@tablet': {
          padding: '0 0',
        },
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
    onlyXSMobile: {
      true: {
        display: 'none',
        '@mobile': {
          display: 'flex',
        },
        '@tablet': {
          display: 'none',
        },
      },
    },
    onlyMobile: {
      true: {
        display: 'flex',

        '@tablet': {
          display: 'none',
        },
      },
    },
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
