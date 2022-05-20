import Carousel from 'Components/Molecules/Carousel';
import CardProduct from 'Components/Molecules/CardProduct';
import CardBannerHome from 'Components/Molecules/CardBannerHome';
import { StyleBottomWrapper, StyleCol, StyleWrapper } from './style';

type PromosType = ImageType & {
  name: string;
};

interface BannerHomeProps {
  promos: PromosType[];
  productsTop: PromosType[];
  productsBottom: PromosType[];
}

const BannerHome = ({
  productsTop,
  productsBottom,
  promos,
}: BannerHomeProps) => {
  return (
    <StyleWrapper>
      <StyleCol left>
        <Carousel colorActiveDot="$white" colorInactiveDot="$icon">
          {promos.map(({ id, src, name, alt }) => (
            <CardBannerHome
              key={id}
              alt={alt}
              image={src}
              name={name}
              colorText="$white"
            />
          ))}
        </Carousel>
      </StyleCol>
      <StyleCol right>
        <Carousel
          slidesToShow={1.1}
          slidesToScroll={1}
          responsive={[
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
          ]}
        >
          {productsTop.map(({ id, name, src, alt }) => (
            <CardBannerHome
              isPromo
              key={id}
              alt={alt}
              image={src}
              name={name}
              css={{
                borderColor: '$primaryOpacity',
                marginRight: 10,
                padding: 20,
              }}
            />
          ))}
        </Carousel>

        <StyleBottomWrapper>
          <Carousel
            slidesToShow={1.1}
            slidesToScroll={1}
            responsive={[
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 4,
                },
              },
            ]}
          >
            {productsBottom.map(({ id, name, src }) => (
              <CardProduct
                key={id}
                image={src}
                name={name}
                css={{
                  borderColor: '$primaryOpacity',
                  margin: '0 5px',
                }}
              />
            ))}
          </Carousel>
        </StyleBottomWrapper>
      </StyleCol>
    </StyleWrapper>
  );
};

export default BannerHome;
