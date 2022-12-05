import { useUiContext } from '@/context/UiContext'

export default function BackgroundImage() {
  const { focusField } = useUiContext()
  const animate = typeof focusField !== 'undefined'

  const hoverStyles = animate ? 'bg-[length:100vmax] opacity-10' : 'bg-[length:110vmax]'

  return (
    <div
      className={`absolute left-0 top-0 z-0 h-screen  w-screen bg-opacity-20   bg-[url('/img/background.jpg')] transition-all delay-100 duration-700 ${hoverStyles}`}
    >
      focusField: {focusField}
      <br />
      animate: {animate}
    </div>
  )
}
