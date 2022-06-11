import { CSSProperties } from 'react';

import { LoadingStyle } from './style';

interface LoadingProps {
  size?: number | string;
  top?: number;
  right?: number;
  color?: string;
  className?: string;
  style?: CSSProperties;
}

const Loading = ({
  className,
  top = 0,
  right = 0,
  size = '1rem',
  style = {},
  color = 'currentColor',
}: LoadingProps) => {
  return (
    <LoadingStyle
      className={className}
      css={{
        ...style,
        color,
        marginTop: top,
        marginRight: right,
        fontSize: size,
      }}
    />
  );
};

export default Loading;
