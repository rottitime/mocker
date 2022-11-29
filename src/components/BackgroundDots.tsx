type Props = {
  hover?: boolean
}

export default function BackgroundDots({ hover }: Props) {
  return (
    <div
      className={`absolute left-0 top-0 z-10 h-screen w-screen bg-gradient-radial from-white/10 to-transparent bg-[length:12vmin_12vmin] bg-left-top transition-all duration-700 ${
        hover ? 'bg-[length:11vmin_11vmin] opacity-50' : ''
      }`}
    />
  )
}
