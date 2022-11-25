import { ReactNode } from 'react'
import './global.css'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="text-purple-700">
        <h1 className="text-3xl font-bold underline text-red-700">Hello world!</h1>

        <main>{children}</main>
      </body>
    </html>
  )
}
