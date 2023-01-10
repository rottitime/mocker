import { ReactNode } from 'react'
import Image from 'next/image'

import './global.css'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="relative z-10  items-center border-b-4 border-white border-opacity-30  bg-black bg-opacity-30 px-4">
          <div className="container z-20 mx-auto flex h-20 px-4 ">
            <a href="/" className="relative block flex items-center pl-28">
              <Image
                src="/img/logo.png"
                height={100}
                width={100}
                alt="Mocker"
                className="absolute top-0 left-0"
              />

              <h1 className="text-3xl font-bold">Mocker</h1>
            </a>
          </div>
        </header>

        <main className="container mx-auto px-4">{children}</main>
      </body>
    </html>
  )
}
