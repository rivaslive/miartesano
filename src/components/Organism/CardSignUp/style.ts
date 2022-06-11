import { styled } from 'styles/stitches.config';
import Checkbox from 'components/Atoms/Checkbox';

export const StyleCardLogin = styled('div', {
  width: '100%',
  maxWidth: 400,
});

export const StyleDivider = styled('div', {
  width: '100%',
  height: 1,
  margin: '50px 0',
  position: 'relative',
  background: '$icon',

  '&:after': {
    left: 0,
    right: 0,
    top: -10,
    width: 40,
    fontSize: 14,
    content: 'o',
    position: 'absolute',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '$background',
    margin: '0 auto',
  },
});

export const StyleCheckbox = styled(Checkbox, {
  marginTop: 30,
  width: 'fit-content',
  marginLeft: 'auto',
  marginRight: 'auto',
  textAlign: 'center',
});

export const StyleFooter = styled('div', {
  marginTop: 10,
});
