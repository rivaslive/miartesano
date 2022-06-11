import { ReactNode } from 'react';
import { ColorType, CSS } from 'styles/stitches.config';

import { TitleStyle } from './style';

type TextTransformType = 'uppercase' | 'lowercase' | 'capitalize' | 'none';

interface BaseProps {
  fontSize?: string | number;
  fontStyle?: string;
  lineHeight?: string | number;
  fontWeight?: string;
  textTransform?: TextTransformType;
}

interface TitleProps extends BaseProps {
  children?: ReactNode;
  htmlTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  color?: ColorType;
  align?: AlignType;
  margin?: string;
  letterSpacing?: string;
  fontWeight?: string;
  fontStyle?: 'normal' | 'italic';
  css?: CSS;
  mobileSettings?: {
    fontSize?: string | number;
    lineHeight?: string | number;
    textTransform?: TextTransformType;
  };
}

const Title = ({
  children,
  fontStyle = 'normal',
  htmlTag = 'h2',
  letterSpacing = '-0.005em',
  fontWeight = 'bold',
  textTransform = 'none',
  margin = 'inherit',
  fontSize = '3rem',
  lineHeight = '1.5',
  color = '$text',
  align = 'left',
  css = {},
  mobileSettings = {
    fontSize,
    lineHeight,
    textTransform,
  },
  ...restProps
}: TitleProps) => {
  return (
    <TitleStyle
      as={htmlTag}
      css={{
        color,
        margin,
        fontStyle,
        letterSpacing,
        fontWeight,
        textAlign: align,
        fontSize: mobileSettings?.fontSize ?? fontSize,
        textTransform: mobileSettings?.textTransform ?? textTransform,
        lineHeight: mobileSettings?.lineHeight ?? lineHeight,

        '@tablet': {
          fontSize,
          lineHeight,
          textTransform,
        },
        ...css,
      }}
      {...restProps}
    >
      {children}
    </TitleStyle>
  );
};

export default Title;
