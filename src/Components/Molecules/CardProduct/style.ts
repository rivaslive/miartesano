import { styled } from 'styles/stitches.config';
import Text from 'Components/Atoms/Text';

export const StyleCard = styled('div', {
  borderWidth: 1,
  background: '$white',
  borderStyle: 'solid',
  borderColor: '$transparent',
  borderRadius: '$borderRadius$lg',
});

export const StyleCardContent = styled('div', {
  padding: '0 12px 12px',
});

export const StyleCardTitle = styled(Text, {});

export const StyleImage = styled('img', {
  width: '100% !important',
  height: '200px !important',
  objectFit: 'cover',
  background: '$bgCard',
  borderRadius: '$borderRadius$lg',
});
