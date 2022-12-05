import { useUiContext } from '@/context/UiContext'
import { percentageRange } from '@/lib'

export default function BackgroundImage() {
  const { focusField } = useUiContext()
  const animate = typeof focusField !== 'undefined'

  const hoverStyles = animate
    ? `bg-[length:100vmax] opacity-10 `
    : `bg-[length:110vmax] bg-[position:center_${40}%]`

  return (
    <div
      className={`bg- absolute left-0 top-0 z-0  h-screen w-screen   bg-opacity-20 bg-[url('/img/background.jpg')] transition-all delay-100 duration-700 ${hoverStyles}`}
    >
      focusField: {focusField}
      <br />
      animate: {animate}
    </div>
  )
}

// #menu[data-active-index="0"] > #menu-background-image {
//   background-position: center 45%;
// }

// #menu[data-active-index="1"] > #menu-background-image {
//   background-position: center 50%;
// }

// #menu[data-active-index="2"] > #menu-background-image {
//   background-position: center 55%;
// }

// #menu[data-active-index="3"] > #menu-background-image {
//   background-position: center 60%;
// }
