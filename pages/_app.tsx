import type { AppProps } from 'next/app'
import type { NextPage } from 'next'
import GlobalStyle from '../components/styles/Global.styled'
import { Title } from '../components/Title'
import React from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  return <><Component {...pageProps} />
  <GlobalStyle/>
  </>
}

export default MyApp
