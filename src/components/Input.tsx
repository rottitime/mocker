import { forwardRef, InputHTMLAttributes, useState } from 'react'

type Props = {
  error?: string
} & InputHTMLAttributes<HTMLInputElement>

const Input = forwardRef<HTMLInputElement, Props>(({ error, ...props }, ref) => {
  const [keyup, setKeyup] = useState(false)
  return (
    <>
      <input
        ref={ref}
        className={`rounded border-2 border-white/50 bg-white/5 px-3.5 py-2 text-3xl text-white/50 outline-none transition-all duration-100 focus:border-white/75 focus:text-white/75 ${
          keyup ? 'keyup' : ''
        }	`}
        onKeyPress={(e) => {
          setKeyup(true)
          setTimeout(function () {
            setKeyup(false)
          }, 100)
        }}
        {...props}
      />
      {!!error && <p>{error}</p>}
    </>
  )
})

Input.displayName = 'Input'

export default Input
