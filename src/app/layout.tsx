import './global.css'
import localFont from '@next/font/local'
import { UiProvider } from '@/context/UiContext'
import { Header } from '@/components'
import Analytics from '@/components/Analytics'

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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Create and test your application's API calls with our user-friendly web app. Easily mock API responses and improve the performance of your app."
        />
      </head>
      <body>
        <Header />

        <UiProvider>
          <main className="container mx-auto px-4">{children}</main>
        </UiProvider>
        <Analytics />
      </body>
    </html>
  )
}
