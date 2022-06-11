import { CSSProperties, ReactNode } from 'react';
import { ColorType, CSS } from 'styles/stitches.config';

import Loading from 'components/Atoms/Loading';
import { ButtonStyle, ButtonVariants } from './style';

interface ButtonProps extends ButtonVariants {
  children?: ReactNode;
  color?: ColorType;
  bgColor?: ColorType;
  borderColor?: ColorType;
  margin?: string | number;
  fontWeight?: string;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  css?: CSS;
  style?: CSSProperties;
  className?: string;
}

const Button = ({
  children,
  type,
  onClick,
  disabled,
  loading,
  rounded = false,
  variant = 'default',
  fontWeight = 'bold',
  margin = 'initial',
  color = variant === 'link' ? '$primary' : '$white',
  bgColor = variant === 'link' ? '$transparent' : '$primary',
  borderColor = '$transparent',
  css = {},
  ...restProps
}: ButtonProps) => {
  return (
    <ButtonStyle
      type={type}
      onClick={onClick}
      variant={variant}
      rounded={rounded}
      disabled={disabled}
      loading={loading}
      css={{
        color,
        margin,
        fontWeight,
        borderColor,
        background: bgColor,
        ...css,
      }}
      {...restProps}
    >
      {loading && <Loading size="1.2rem" right={7} />}
      {children}
    </ButtonStyle>
  );
};

export default Button;
