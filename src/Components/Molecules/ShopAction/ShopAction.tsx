import Link from 'next/link';

import { ROUTES } from 'Config';
import Text from 'Components/Atoms/Text';
import { ShopFilled } from 'Components/Atoms/Icons';

import { StyleContentText } from '../WhatsappAction/style';
import { StyleIcon, StyleText, StyleWrapper } from './style';

const ShopAction = (props: BaseComponent) => {
  return (
    <Link href={ROUTES.SHOPPING_CART.path} passHref>
      <a>
        <StyleWrapper {...props}>
          <StyleIcon>
            <ShopFilled />
            <StyleText>0</StyleText>
          </StyleIcon>

          <StyleContentText
            css={{
              marginTop: 5,
              marginLeft: 10,
            }}
          >
            <Text color="$white" lineHeight="14px" fontWeight={600}>
              Mi Carrito
            </Text>
            <Text color="$yellow2" fontWeight={600}>
              $0.00
            </Text>
          </StyleContentText>
        </StyleWrapper>
      </a>
    </Link>
  );
};

export default ShopAction;
