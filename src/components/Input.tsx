import { forwardRef, InputHTMLAttributes } from 'react'

type Props = {
  label: string
} & InputHTMLAttributes<HTMLInputElement>

const Input = forwardRef<HTMLInputElement, Props>(({ label, ...props }, ref) => (
  <>
    <label>{label}</label>
    <input ref={ref} {...props} />
  </>
))

Input.displayName = 'Input'

export default Input
