import { Children, cloneElement, ReactNode } from 'react';
import { SpaceItemStyle, SpaceStyle } from './style';

interface SpaceProps {
  children: ReactNode;
  gutter?: [number, number];
}

const Space = ({ children, gutter = [20, 20] }: SpaceProps) => {
  const childrenArray = Children.count(children) === 1 ? [children] : children;

  return (
    <SpaceStyle>
      {Children.map(childrenArray, (child) => {
        if (child) {
          return cloneElement(
            <SpaceItemStyle
              style={{
                paddingLeft: gutter[1] / 2,
                paddingRight: gutter[1] / 2,
                paddingTop: gutter[0] / 2,
                paddingBottom: gutter[0] / 2,
              }}
            >
              {child as JSX.Element}
            </SpaceItemStyle>
          );
        }
        return null;
      })}
    </SpaceStyle>
  );
};

export default Space;
