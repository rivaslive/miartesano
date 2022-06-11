import Link from 'next/link';

import { ROUTES } from 'config';
import { HeartFilled } from 'components/Atoms/Icons';

import { StyleText, StyleWrapper } from './style';

const WishAction = (props: BaseComponent) => {
  return (
    <Link href={ROUTES.SHOPPING_CART.path} passHref>
      <a>
        <StyleWrapper {...props}>
          <HeartFilled />

          <StyleText>0</StyleText>
        </StyleWrapper>
      </a>
    </Link>
  );
};

export default WishAction;
