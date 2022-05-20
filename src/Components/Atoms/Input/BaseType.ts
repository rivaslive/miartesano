import { ChangeEvent, CSSProperties } from 'react';

export interface InputProps extends BaseComponent {
  defaultValue?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  style?: CSSProperties;
  disabled?: boolean;
  readOnly?: boolean;
  placeholder?: string;
}
