import { forwardRef, InputHTMLAttributes } from 'react'

type Props = {
  label: string
} & InputHTMLAttributes<HTMLInputElement>

const Input = forwardRef<HTMLInputElement, Props>(({ label, ...props }, ref) => (
  <>
    <label>{label}</label>
    <input
      ref={ref}
      className="rounded border-2 border-white/50 bg-white/5 px-3.5 py-2 text-3xl text-white/50 transition-all focus:border-white/75 focus:text-white/75"
      {...props}
    />
  </>
))

Input.displayName = 'Input'

export default Input
