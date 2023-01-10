import { useUiContext } from '@/context/UiContext'
import { percentageRange } from '@/lib'

export default function BackgroundImage() {
  const { focusField, totalFields } = useUiContext()
  const animate = typeof focusField !== 'undefined'
  const percentage = animate
    ? percentageRange((focusField / totalFields) * 100, 45, 60)
    : 40

  const hoverStyles = animate ? `bg-[length:100vmax] opacity-10 ` : `bg-[length:110vmax] `

  return (
    <div
      style={{ backgroundPositionY: percentage + '%' }}
      className={`bg- absolute left-0 top-0 z-0  h-screen w-screen bg-[url('/img/background9.png')] bg-[position:center_40%] opacity-50  transition-all delay-100 duration-700 ${hoverStyles}`}
    ></div>
  )
}
