import './global.css'
import localFont from '@next/font/local'
import { UiProvider } from '@/context/UiContext'
import { Header } from '@/components'

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
        <Header />

        <UiProvider>
          <main className="container mx-auto px-4">{children}</main>
        </UiProvider>
      </body>
    </html>
  )
}
