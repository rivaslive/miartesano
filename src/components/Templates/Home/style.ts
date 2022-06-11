import { styled } from 'styles/stitches.config';

export const StyleBlurImage = styled('div', {
  height: '100vh',
  width: '100vw',
  position: 'absolute',
  top: 0,
  right: 0,
  zIndex: '$zIndex$min',
  background: 'url("/gradient1.svg")',
  backgroundPosition: 'center center',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat no-repeat',

  '@tablet': {
    width: '50vw',
  },
});
