import { styled } from 'styles/stitches.config';

export const StyleCarousel = styled('div', {
  '.glider.draggable': {
    paddingBottom: 30,
  },
  '.glider.draggable, .glider-track': {
    '-ms-overflow-style': 'none',
    'scrollbar-width': 'none',

    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
  '.glider-dots': {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    margin: '0 auto',

    'button.glider-dot': {
      width: 13,
      height: 13,
      padding: 0,
      borderRadius: 13,
      backgroundColor: '$secondaryOpacity',
      '&:before': {
        display: 'none',
      },

      '&.active': {
        width: 36,
        background: '$secondary',
      },
    },
  },
});
