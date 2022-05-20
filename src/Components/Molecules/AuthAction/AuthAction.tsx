import Link from 'next/link';

import { ROUTES } from 'Config';
import Text from 'Components/Atoms/Text';
import { ProfileFilled } from 'Components/Atoms/Icons';

import { StyleContentText } from '../WhatsappAction/style';
import { StyleWrapper } from './style';

const AuthAction = (props: BaseComponent) => {
  return (
    <StyleWrapper {...props}>
      <ProfileFilled />

      <StyleContentText
        css={{
          marginTop: 5,
          marginLeft: 6,
        }}
      >
        <Link href={ROUTES.AUTH_SING_UP.path} passHref>
          <a style={{ textDecoration: 'none' }}>
            <Text color="$white" lineHeight="14px" fontWeight={600}>
              Registrarse
            </Text>
          </a>
        </Link>
        <Text color="$white" lineHeight="14px" fontWeight={600}>
          o{' '}
          <Link href={ROUTES.AUTH_LOGIN.path} passHref>
            <a style={{ textDecoration: 'none' }}>
              <Text htmlTag="span" color="$yellow2" fontWeight={600}>
                Inicia Sesión
              </Text>
            </a>
          </Link>
        </Text>
      </StyleContentText>
    </StyleWrapper>
  );
};

export default AuthAction;
