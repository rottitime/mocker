/* eslint-disable @typescript-eslint/ban-types */
import { cache } from '@emotion/css'
import type { AppProps } from 'next/app'
import { CacheProvider } from '@emotion/react'
import GlobalStyles from '@/components/GlobalStyles'
import { ReactElement, ReactNode } from 'react'
import { NextPage } from 'next'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <CacheProvider value={cache}>
      <GlobalStyles />
      {getLayout(<Component {...pageProps} />)}
    </CacheProvider>
  )
}
