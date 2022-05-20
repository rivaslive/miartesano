import { styled } from 'styles/stitches.config';
import { StyleWhatsapp } from '../WhatsappAction/style';

export const StyleWrapper = styled(StyleWhatsapp, {
  fontSize: 35,
});

export const StyleIcon = styled('div', {
  position: 'relative',
  marginTop: 6,
});

export const StyleText = styled('span', {
  position: 'absolute',
  top: -10,
  right: -14,
  fontSize: 16,
  lineHeight: '13px',
  padding: 7,
  borderRadius: '$borderRadius$lg',
  background: '$yellow2',
});
