import type * as Stitches from '@stitches/react';
import { styled } from 'styles/stitches.config';

export const ButtonStyle = styled('button', {
  borderWidth: 1,
  borderStyle: 'solid',
  outline: 'none',
  height: '2.5rem',
  fontSize: '0.875rem',
  lineHeight: '2.5rem',
  minWidth: '12rem',
  padding: '0 0.875rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  userSelect: 'none',
  textAlign: 'center',
  whiteSpace: 'nowrap',
  transition:
    'background 0.25s ease 0s, color 0.25s ease 0s, border-color 0.25s ease 0s, box-shadow 0.25s ease 0s, transform 0.25s ease 0s, opacity 0.25s ease 0s',
  position: 'relative',
  overflow: 'hidden',
  cursor: 'pointer',
  pointerEvents: 'auto',
  borderRadius: 12,
  appearance: 'none',
  '&:hover': {
    opacity: 0.8,
  },

  variants: {
    rounded: {
      true: {
        borderRadius: '40px',
      },
    },
    variant: {
      default: {},
      outline: {},
      tag: {},
      link: {
        minWidth: 'min-content',
        padding: '0 6px',
      },
    },
    disabled: {
      true: {
        opacity: 0.3,
        cursor: 'not-allowed',
        '&:hover': {
          opacity: 0.3,
        },
      },
    },
    loading: {
      true: {
        pointerEvents: 'none',
      },
    },
  },
});

export type ButtonVariants = Stitches.VariantProps<typeof ButtonStyle>;
