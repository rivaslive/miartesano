import { ReactNode } from 'react';
import { ColorType, CSS } from 'styles/stitches.config';

import Loading from 'Components/Atoms/Loading';
import { ButtonStyle, ButtonVariants } from './style';

interface ButtonProps extends ButtonVariants {
  children?: ReactNode;
  color?: ColorType;
  bgColor?: ColorType;
  margin?: string | number;
  fontWeight?: string;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  css?: CSS;
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
  margin = 'inherit',
  color = '$white',
  bgColor = '$primary',
  css = {},
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
        background: bgColor,
        ...css,
      }}
    >
      {loading && <Loading size="1.2rem" right={7} />}
      {children}
    </ButtonStyle>
  );
};

export default Button;
