import './global.css'
import localFont from '@next/font/local'

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} font-sans`}>
      <body>
        <header className="text-black">
          <div className="container z-20 mx-auto flex h-20 py-3 px-4 ">
            <a href="/" className="relative items-center">
              <h1 className="text-3xl font-bold">Mocker</h1>
            </a>
          </div>
        </header>

        <main className="container mx-auto px-4">{children}</main>
      </body>
    </html>
  )
}
