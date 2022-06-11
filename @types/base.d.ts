type CSS = import('../src/styles/stitches.config').CSS;

declare type BaseComponent = {
  style?: any;
  className?: string;
  id?: string;
  css?: CSS;
};

declare type AlignType = 'left' | 'right' | 'center' | 'justify';
