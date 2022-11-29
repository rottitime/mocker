import { ButtonHTMLAttributes } from 'react'

type Props = ButtonHTMLAttributes<HTMLButtonElement>

const Button = (props: Props) => {
  return (
    <button
      className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
      {...props}
    />
  )
}

export default Button
