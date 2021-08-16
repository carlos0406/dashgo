import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      {Component ? <Component {...pageProps} /> : null}{' '}
    </ChakraProvider>
  )
}
export default MyApp
