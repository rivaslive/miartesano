import { ReactNode } from 'react';
import { ColorType, CSS } from 'styles/stitches.config';

import { TextStyle } from './style';

interface BaseProps {
  fontSize?: string;
  fontStyle?: string;
  lineHeight?: string;
  fontWeight?: string;
  textTransform?: 'uppercase' | 'lowercase' | 'capitalize' | 'none';
}

interface TextProps extends BaseProps {
  children?: ReactNode;
  htmlTag?: 'p' | 'div' | 'span' | 'b';
  fontSize?: string;
  color?: ColorType;
  margin?: string | number;
  lineHeight?: string;
  letterSpacing?: string;
  fontWeight?: string;
  fontStyle?: 'normal' | 'italic';
  css?: CSS;
}

const Text = ({
  children,
  fontStyle,
  htmlTag = 'p',
  letterSpacing = '-0.05em',
  fontWeight = 'normal',
  textTransform = 'none',
  margin = 'inherit',
  fontSize = '1rem',
  lineHeight = '1.625',
  color = '$text',
  css = {},
}: TextProps) => {
  return (
    <TextStyle
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
    </TextStyle>
  );
};

export default Text;
