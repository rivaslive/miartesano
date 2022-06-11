import 'styles/grid.css';
import React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { ApolloProvider } from '@apollo/client';

import { useApollo } from 'apollo';
import { darkTheme } from 'styles/stitches.config';

function MyApp({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApolloState);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no"
        />
        <title>Mi Artesano</title>
      </Head>
      <ApolloProvider client={client}>
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
      </ApolloProvider>
    </>
  );
}

export default MyApp;
