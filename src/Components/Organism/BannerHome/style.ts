import { styled } from 'styles/stitches.config';

export const StyleWrapper = styled('div', {
  display: 'flex',
  height: '100%',
  width: '100%',
  flexDirection: 'column',

  '@tablet': {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export const StyleCol = styled('div', {
  width: '100%',
  padding: 0,
  overflowX: 'hidden',

  variants: {
    left: {
      true: {
        padding: 20,
        borderRadius: '$borderRadius$xl',
        background: '$primary',
        '@tablet': {
          width: '40%',
        },
      },
    },
    right: {
      true: {
        marginTop: 30,
        '@tablet': {
          marginTop: 0,
          padding: 20,
          width: '60%',
        },
      },
    },
  },
});

export const StyleBottomWrapper = styled('div', {
  marginTop: 35,
  padding: 20,
  borderRadius: '$borderRadius$lg',
  background: '$primaryOpacity',
});
