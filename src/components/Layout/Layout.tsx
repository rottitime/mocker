import { ReactNode } from 'react'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <nav>{publicRuntimeConfig.siteTitle}</nav>
      <main className="text-red-700">{children}</main>
    </div>
  )
}
