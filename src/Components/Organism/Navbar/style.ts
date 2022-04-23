import { styled } from 'styles/stitches.config';

export const StyleNavbar = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  top: 0,
  height: 76,
  position: 'sticky',
  padding: '0 30px',
  background: 'hsla(0,0%,100%,0.8)',
  backdropFilter: 'saturate(180%) blur(10px)',
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
});

export const StyleBrand = styled('span', {
  fontFamily: "'Aladin', cursive",
  fontSize: 35,
  marginLeft: 10,
  lineHeight: '35px',
});
