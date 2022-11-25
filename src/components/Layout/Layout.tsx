import { ReactNode } from 'react'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <nav>{publicRuntimeConfig.siteTitle}</nav>
      <main>{children}</main>
    </div>
  )
}
