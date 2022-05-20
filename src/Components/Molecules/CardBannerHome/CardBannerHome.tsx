import { ColorType, CSS } from 'styles/stitches.config';
import { StyleCardPromo, StyleCardPromoTitle, StyleImage } from './style';

interface CardBannerHomeProps {
  image: string;
  name: string;
  alt?: string;
  css?: CSS;
  isPromo?: boolean;
  imageSize?: 'small' | 'large';
  colorText?: ColorType;
}

const CardBannerHome = ({
  name,
  image,
  alt = '',
  isPromo = false,
  imageSize = 'large',
  colorText = '$text',
  css = {},
}: CardBannerHomeProps) => {
  return (
    <StyleCardPromo css={css}>
      <StyleImage
        src={image}
        alt={alt}
        is200={imageSize === 'small' || isPromo}
        isContain={isPromo}
      />
      <StyleCardPromoTitle
        align="center"
        color={isPromo ? '$gray1' : colorText}
        fontWeight={900}
        lineHeight="27px"
        fontSize="27px"
        margin="12px 0"
      >
        {name}
      </StyleCardPromoTitle>
    </StyleCardPromo>
  );
};

export default CardBannerHome;
