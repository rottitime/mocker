import { ButtonHTMLAttributes } from 'react'

type Props = ButtonHTMLAttributes<HTMLButtonElement>

const Button = (props: Props) => {
  return (
    <button
      className="inline-flex items-center gap-3 rounded bg-sky-300 py-2 px-4 font-bold uppercase text-white transition-all hover:bg-sky-800"
      {...props}
    />
  )
}

export default Button
