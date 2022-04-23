import 'styles/rc-select.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { darkTheme } from 'styles/stitches.config';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      value={{
        light: 'light',
        dark: darkTheme.className,
      }}
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
