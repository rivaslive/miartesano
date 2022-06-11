import { createStitches } from '@stitches/react';
import type * as Stitches from '@stitches/react';

const colors = {
  white: '#ffffff',
  black: '#000000',
  transparent: 'transparent',
  text: '$black',
  background: '$white',
  indigo: '#0757D6',
  purple: '#7928ca',
  success: '#17c964',
  warning: '#f5a623',
  yellow2: '#F2C94C',
  error: '#f21361',
  primary: '#518AE3',
  secondary: '$purple',
  icon: '#BBBBBB',
  primaryOpacity: '#DEEBFF',
  secondaryOpacity: '#DBC8F0',
  errorOpacity: '#FFC3D8',
  subText: '#707070',
  gray1: '#333333',
  bgCard: '#F9F9FA',
  bgText: 'rgba(234, 234, 234, 0.7)',
  borderColor: '$gray1',
  boxInputShadow: '#DFE3E6',
};

const shadows = {
  boxInputShadow: '0 0 0 2px #DFE3E6',
};

type addPrefixToObject<
  TObject extends object,
  TPrefix extends string
  // @ts-ignore
> = `${TPrefix}${keyof TObject}`;

// add $ prefix all key object example = '$text' | '$black' | '$white' ...
export type ColorType = addPrefixToObject<typeof colors, '$'>;

export const { styled, getCssText, createTheme, globalCss, config } =
  createStitches({
    media: {
      mobile: '(min-width: 575px)',
      tablet: '(min-width: 992px)',
      desktop: '(min-width: 1200px)',
      bigDesktop: '(min-width: 1400px)',
    },
    theme: {
      colors,
      shadows,
      zIndex: {
        min: -1,
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        max: 100,
      },
      borderRadius: {
        default: '8px',
        xs: '6px',
        sm: '8px',
        lg: '12px',
        xl: '22px',
        max: '24px',
      },
    },
  });

// define the dark theme using the de-constructed function
export const darkTheme = createTheme({
  colors: {
    text: '$white',
    background: '$black',
    indigo: '#3c85f8',
    primaryOpacity: '#00244e',
    secondaryOpacity: '#200343',
    errorOpacity: '#2d0211',
  },
});

export type CSS = Stitches.CSS<typeof config>;

const GlobalStyles = globalCss({
  a: {
    textDecoration: 'none',
    color: '$primary',

    '&:hover': {
      textDecoration: 'underline',
    },
  },
  '@font-face': [
    {
      fontFamily: 'Inter',
      src: 'url("/fonts/Inter/Inter-Black.ttf") format("opentype")',
      fontWeight: 900,
      fontStyle: 'normal',
    },
    {
      fontFamily: 'Inter',
      src: 'url("/fonts/Inter/Inter-ExtraBold.ttf") format("opentype")',
      fontWeight: 800,
      fontStyle: 'normal',
    },
    {
      fontFamily: 'Inter',
      src: 'url("/fonts/Inter/Inter-Bold.ttf") format("opentype")',
      fontWeight: 700,
      fontStyle: 'normal',
    },
    {
      fontFamily: 'Inter',
      src: 'url("/fonts/Inter/Inter-SemiBold.ttf") format("opentype")',
      fontWeight: 600,
      fontStyle: 'normal',
    },
    {
      fontFamily: 'Inter',
      src: 'url("/fonts/Inter/Inter-Medium.ttf") format("opentype")',
      fontWeight: 500,
      fontStyle: 'normal',
    },
    {
      fontFamily: 'Inter',
      src: 'url("/fonts/Inter/Inter-Regular.ttf") format("opentype")',
      fontWeight: 400,
      fontStyle: 'normal',
    },
    {
      fontFamily: 'Inter',
      src: 'url("/fonts/Inter/Inter-Light.ttf") format("opentype")',
      fontWeight: 300,
      fontStyle: 'normal',
    },
    {
      fontFamily: 'Inter',
      src: 'url("/fonts/Inter/Inter-ExtraLight.ttf") format("opentype")',
      fontWeight: 200,
      fontStyle: 'normal',
    },
    {
      fontFamily: 'Inter',
      src: 'url("/fonts/Inter/Inter-Thin.ttf") format("opentype")',
      fontWeight: 100,
      fontStyle: 'normal',
    },
    {
      fontFamily: 'Aladin',
      src: 'url("/fonts/Aladin/Aladin-Regular.ttf") format("opentype")',
      fontStyle: 'normal',
    },
  ],

  body: {
    background: '$background',
    color: '$text',
    fontFamily: '"Inter", sans-serif',
    '-webkit-tap-highlight-color': 'transparent',
  },

  '*, html, body': {
    padding: 0,
    margin: 0,
    boxSizing: 'border-box',
    fontFamily: '"Inter", sans-serif',
    '-webkit-tap-highlight-color': 'transparent',

    '&:focus-visible': {
      outline: 'none',
    },

    '&::selection': {
      '-webkit-text-fill-color': 'white',
      backgroundColor: '$primary',
    },
  },

  '*, ::before, ::after': {
    fontFamily: '"Inter", sans-serif',
    boxSizing: 'border-box',
    textRendering: 'geometricprecision',
    '-webkit-tap-highlight-color': 'transparent',
  },
  '.app-overlay-modal': {
    opacity: 1,
    transition: 'background 0.35s cubic-bezier(0.4, 0, 0.2, 1) 0s',
    backdropFilter: 'saturate(180%) blur(20px)',
    background: 'rgba(0, 0, 0, 0.1)',
  },

  '.react-responsive-modal-container': {
    maxWidth: '100%',
    padding: 20,
    'div.app-modal': {
      maxWidth: '100%',
      background: '#222222',
      borderRadius: 14,
      paddingTop: 40,
      margin: 0,

      '.react-responsive-modal-closeButton': {
        color: '#666666',

        svg: {
          fill: 'currentColor',
        },
      },
    },
  },
});

// we can declare the styles here or in pages/_app.tsx
GlobalStyles();
