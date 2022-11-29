import { forwardRef, InputHTMLAttributes } from 'react'

type Props = {
  label: string
  error?: string
} & InputHTMLAttributes<HTMLInputElement>

const Input = forwardRef<HTMLInputElement, Props>(({ label, error, ...props }, ref) => (
  <>
    <label>{label}</label>
    <input
      ref={ref}
      className="rounded border-2 border-white/50 bg-white/5 px-3.5 py-2 text-3xl text-white/50 outline-none transition-all duration-1000 focus:border-white/75 focus:text-white/75	"
      {...props}
    />
    {!!error && <p>{error}</p>}
  </>
))

Input.displayName = 'Input'

export default Input
