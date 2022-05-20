import React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { darkTheme } from 'styles/stitches.config';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no"
        />
        <title>Mi Artesano</title>
      </Head>
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
    </>
  );
}

export default MyApp;
