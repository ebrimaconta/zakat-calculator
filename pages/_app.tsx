import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {Button} from '../components/button.styled'


function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
