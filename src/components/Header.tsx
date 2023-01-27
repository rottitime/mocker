import Image from 'next/image'

function Header() {
  return (
    <header className="text-black">
      <div className="container z-20 mx-auto flex h-20 justify-between py-3 px-4">
        <a href="/" className="relative items-center">
          <h1 className="font-display text-3xl font-bold">Api Mock</h1>
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
  )
}

export default Header
