import { ButtonHTMLAttributes } from 'react'

type Props = ButtonHTMLAttributes<HTMLButtonElement>

const Button = (props: Props) => {
  return (
    <button
      className="inline-flex items-center gap-3 rounded bg-blue-500 py-2 px-4  text-white shadow shadow-blue-500/40 transition-all hover:bg-sky-800 hover:shadow-indigo-500/40 disabled:opacity-30"
      {...props}
    />
  )
}

export default Button
