import './global.css'
import localFont from '@next/font/local'
import { UiProvider } from '@/context/UiContext'
import Image from 'next/image'

const poppins = localFont({
  src: [
    {
      path: '../../public/fonts/Poppins-Regular.ttf',
      weight: '400'
    },
    {
      path: '../../public/fonts/Poppins-SemiBold.ttf',
      weight: '700'
    }
  ],
  variable: '--font-poppins'
})

const pacifico = localFont({
  src: [
    {
      path: '../../public/fonts/Pacifico-Regular.ttf'
    }
  ],
  variable: '--font-pacifico'
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${pacifico.variable} font-sans`}>
      <head />
      <body>
        <header className="text-black">
          <div className="container z-20 mx-auto flex h-20 justify-between py-3 px-4">
            <a href="/" className="relative items-center">
              <h1 className="font-display text-3xl font-bold">Mocker</h1>
            </a>

            <div>
              <a
                href="https://www.buymeacoffee.com/rottitime"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="/img/coffee-default-yellow.png"
                  alt="Picture of the author"
                  width={150}
                  height={150}
                />
              </a>
            </div>
          </div>
        </header>

        <UiProvider>
          <main className="container mx-auto px-4">{children}</main>
        </UiProvider>
      </body>
    </html>
  )
}
