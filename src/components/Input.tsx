'use client'
import {
  DetailedHTMLProps,
  forwardRef,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  useEffect,
  useId,
  useState
} from 'react'
import FieldHelper from './FieldHelper'

type Props = {
  error?: string
  label?: string
  labelProps?: DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>
  onActive?: (isActive: boolean) => void
} & InputHTMLAttributes<HTMLInputElement>

const Input = forwardRef<HTMLInputElement, Props>(
  ({ error, label, onActive, labelProps, className, ...props }, ref) => {
    const id = useId()
    const inputId = `input_${id}`

    const [keyup, setKeyup] = useState(false)
    const [hover, setHover] = useState(false)
    const [focus, setFocus] = useState(false)

    useEffect(() => {
      typeof onActive === 'function' && onActive(hover || focus)
      return () => {
        typeof onActive === 'function' && onActive(false)
      }
    }, [focus, hover, onActive])

    return (
      <>
        {label && (
          <label {...labelProps} htmlFor={inputId}>
            {label}
          </label>
        )}
        <div>
          <input
            {...props}
            ref={ref}
            id={inputId}
            autoFocus
            className={`${className} w-full  rounded  bg-slate-100 px-3.5 py-2 text-black    transition-all duration-100 disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none  ${
              keyup ? 'keyup' : ''
            } ${error ? 'outline outline-2  outline-error' : 'outline-none'}	`}
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
          {!!error && <FieldHelper type="error">{error}</FieldHelper>}
        </div>
      </>
    )
  }
)

Input.displayName = 'Input'

export default Input
