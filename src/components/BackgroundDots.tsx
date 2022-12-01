import { useUiContext } from '@/context/UiContext'

export default function BackgroundDots() {
  const { focusField } = useUiContext()

  const animate = typeof focusField !== 'undefined'

  return (
    <div
      style={{ backgroundPositionY: (focusField || 0) * 100 + 'px' }}
      className={`absolute left-0 top-0 z-10 h-screen w-screen bg-gradient-radial from-white/10 to-transparent bg-[length:12vmin_12vmin] bg-left-top transition-all delay-75 duration-700 ${
        animate
          ? `bg-[length:11vmin_11vmin] 
        opacity-50 `
          : ''
      }`}
    />
  )
}
