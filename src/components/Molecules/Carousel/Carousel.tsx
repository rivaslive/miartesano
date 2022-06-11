import 'glider-js/glider.min.css';
import { forwardRef } from 'react';
import dynamic from 'next/dynamic';
import { GliderMethods, GliderProps } from 'react-glider';
import { ColorType, CSS } from 'styles/stitches.config';

import { StyleCarousel } from './style';

const Glider = dynamic(() => import('react-glider'), {
  ssr: false,
});

type CarouselProps = BaseComponent &
  GliderProps & {
    styleDots?: CSS;
    colorActiveDot?: ColorType;
    colorInactiveDot?: ColorType;
  };
type CarouselRefType = GliderProps & GliderMethods;

const Carousel = forwardRef<null | CarouselRefType, CarouselProps>(
  (
    {
      children,
      scrollLockDelay = 75,
      draggable = true,
      hasDots = true,
      slidesToScroll = 1,
      slidesToShow = 1,
      scrollLock = true,
      colorInactiveDot = '$secondaryOpacity',
      colorActiveDot = '$secondary',
      styleDots = {},
      ...restProps
    },
    ref
  ) => {
    return (
      <StyleCarousel
        css={{
          '.glider-dots': {
            ...styleDots,
            'button.glider-dot': {
              backgroundColor: colorInactiveDot,

              '&.active': {
                background: colorActiveDot,
              },
            },
          },
        }}
      >
        <Glider
          ref={ref}
          hasDots={hasDots}
          draggable={draggable}
          scrollLock={scrollLock}
          slidesToShow={slidesToShow}
          slidesToScroll={slidesToScroll}
          scrollLockDelay={scrollLockDelay}
          {...restProps}
        >
          {children}
        </Glider>
      </StyleCarousel>
    );
  }
);

export default Carousel;
