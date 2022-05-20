import { ColorType, CSS } from 'styles/stitches.config';
import {
  StyleCardContent,
  StyleCard,
  StyleCardTitle,
  StyleImage,
} from './style';

interface CardProductProps {
  image: string;
  name: string;
  price?: number;
  css?: CSS;
  colorText?: ColorType;
}

const CardProduct = ({
  name,
  image,
  price = 0,
  colorText = '$text',
  css = {},
}: CardProductProps) => {
  return (
    <StyleCard css={css}>
      <StyleImage src={image} />

      <StyleCardContent>
        <StyleCardTitle color={colorText} fontWeight={600}>
          {name}
        </StyleCardTitle>

        <StyleCardTitle color="$subText" fontWeight={600}>
          ${price}
        </StyleCardTitle>
      </StyleCardContent>
    </StyleCard>
  );
};

export default CardProduct;
