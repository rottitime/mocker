import { cache } from '@emotion/css'
import type { AppProps } from 'next/app'
import { CacheProvider } from '@emotion/react'
import GlobalStyles from '@/components/GlobalStyles'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <CacheProvider value={cache}>
    <GlobalStyles />
    <Component {...pageProps} />
  </CacheProvider>
)

export default MyApp
