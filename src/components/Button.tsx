import { ButtonHTMLAttributes } from 'react'
import { LoadingIcon } from '@/components'

type Props = { loading?: boolean } & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ loading, children, ...props }: Props) => {
  return (
    <button
      disabled={loading}
      className="inline-flex items-center gap-3 rounded bg-blue-500 py-2 px-4  text-white shadow shadow-blue-500/40 transition-all hover:bg-sky-800 hover:shadow-indigo-500/40 disabled:opacity-30"
      {...props}
    >
      {loading && <LoadingIcon className="fill-white" />}
      {children}
    </button>
  )
}

export default Button
