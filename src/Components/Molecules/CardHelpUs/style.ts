import { styled } from 'styles/stitches.config';

export const StyleWrapper = styled('div', {
  position: 'relative',
  width: '100%',
  height: 600,
  marginBottom: 30,
  borderRadius: '$borderRadius$lg',
});

export const StyleImage = styled('img', {
  position: 'relative',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '$borderRadius$lg',
});

export const StyleContent = styled('div', {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: 40,
  width: '100%',
  height: '100%',
  display: 'grid',
  placeItems: 'end',
  borderRadius: '$borderRadius$lg',
  background:
    'linear-gradient(357.81deg, #333333 -9.83%, rgba(196, 196, 196, 0) 113.08%)',

  '@tablet': {
    padding: '70px 100px',
  },
});
