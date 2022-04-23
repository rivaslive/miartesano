import { ReactNode } from 'react';
import { ColorType, CSS } from 'styles/stitches.config';

import { TitleStyle } from './style';

interface BaseProps {
  fontSize?: string;
  fontStyle?: string;
  lineHeight?: string;
  fontWeight?: string;
  textTransform?: 'uppercase' | 'lowercase' | 'capitalize' | 'none';
}

interface TitleProps extends BaseProps {
  children?: ReactNode;
  htmlTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  fontSize?: string;
  color?: ColorType;
  margin?: string;
  lineHeight?: string;
  letterSpacing?: string;
  fontWeight?: string;
  fontStyle?: 'normal' | 'italic';
  css?: CSS;
}

const Title = ({
  children,
  fontStyle,
  htmlTag = 'h2',
  letterSpacing = '-0.005em',
  fontWeight = 'bold',
  textTransform = 'none',
  margin = 'inherit',
  fontSize = '3rem',
  lineHeight = '1.5',
  color = '$text',
  css = {},
}: TitleProps) => {
  return (
    <TitleStyle
      as={htmlTag}
      css={{
        color,
        fontSize,
        margin,
        lineHeight,
        textTransform,
        fontStyle,
        letterSpacing,
        fontWeight,
        ...css,
      }}
    >
      {children}
    </TitleStyle>
  );
};

export default Title;
