import { styled } from 'styles/stitches.config';
import Text from 'components/Atoms/Text';

export const StyleCardPromo = styled('div', {
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: '$transparent',
  borderRadius: '$borderRadius$lg',
});

export const StyleCardPromoTitle = styled(Text, {});

export const StyleImage = styled('img', {
  width: '100% !important',
  height: '500px !important',
  objectFit: 'cover',
  borderRadius: '$borderRadius$xl',

  variants: {
    is200: {
      true: {
        height: '125px !important',
      },
    },
    isContain: {
      true: {
        objectFit: 'contain',
      },
    },
  },
});
