import { useUiContext } from '@/context/UiContext'

export default function BackgroundDots() {
  const { focusField } = useUiContext()

  const animate = typeof focusField !== 'undefined'

  return (
    <div
      style={{
        backgroundPositionY: (focusField || 0) * 100 + 'px',
        backgroundImage: 'radial-gradient( rgba(255, 255, 255, 0.1) 9%,  transparent 9%)'
      }}
      className={`absolute left-0 top-0 z-10 h-screen w-screen to-transparent bg-[length:12vmin_12vmin] bg-left-top transition-all delay-75 duration-700 ${
        animate
          ? `bg-[length:11vmin_11vmin] 
        opacity-50 `
          : ''
      }`}
    />
  )
}
