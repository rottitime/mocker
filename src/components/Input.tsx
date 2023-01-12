import { forwardRef, InputHTMLAttributes, useEffect, useState } from 'react'

type Props = {
  error?: string
  onActive: (isActive: boolean) => void
} & InputHTMLAttributes<HTMLInputElement>

const Input = forwardRef<HTMLInputElement, Props>(
  ({ error, onActive, ...props }, ref) => {
    const [keyup, setKeyup] = useState(false)
    const [hover, setHover] = useState(false)
    const [focus, setFocus] = useState(false)

    useEffect(() => {
      onActive(hover || focus)
      return () => {
        onActive(false)
      }
    }, [focus, hover, onActive])

    return (
      <>
        <input
          {...props}
          ref={ref}
          autoFocus
          className={` w-full  rounded   bg-slate-100 px-3.5 py-2 text-black outline-none transition-all duration-100  ${
            keyup ? 'keyup' : ''
          }	`}
          onKeyPress={() => {
            setKeyup(true)
            setTimeout(function () {
              setKeyup(false)
            }, 100)
          }}
          onBlur={(e) => {
            setFocus(false)
            if (typeof props.onBlur === 'function') props.onBlur(e)
          }}
          onFocus={() => setFocus(true)}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        />
        {!!error && <p>{error}</p>}
      </>
    )
  }
)

Input.displayName = 'Input'

export default Input
