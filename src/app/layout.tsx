import { ReactNode } from 'react'
import './global.css'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="text-sky-300">
        <header className="bg-indigo-700 py-2 px-4">
          <div className="container mx-auto px-4">
            <a href="/">
              <h1 className="text-3xl font-bold">Mocker</h1>
            </a>
          </div>
        </header>

        <main className="container mx-auto px-4">{children}</main>
      </body>
    </html>
  )
}
