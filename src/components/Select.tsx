'use client'
import { forwardRef, SelectHTMLAttributes } from 'react'
import FieldHelper from './FieldHelper'

type Options = {
  value?: string
  name: string
  placeholder?: string
}

type Props = {
  options: Options[] | string[]
  error?: string
} & SelectHTMLAttributes<HTMLSelectElement>

const Select = forwardRef<HTMLSelectElement, Props>(
  ({ options, error, placeholder, ...props }, ref) => {
    const filteredOptions: Options[] = options.map((name) =>
      typeof name === 'string' ? { value: name, name } : name
    )

    return (
      <div>
        <select
          {...props}
          defaultValue=""
          ref={ref}
          className={`w-full rounded bg-slate-100 px-3.5 py-2 text-black transition-all duration-100 ${
            error ? 'outline outline-2  outline-error' : 'outline-none'
          }	 `}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}

          {filteredOptions.map(({ value, name }) => (
            <option value={value} key={value}>
              {name}
            </option>
          ))}
        </select>
        {!!error && <FieldHelper type="error">{error}</FieldHelper>}
      </div>
    )
  }
)

Select.displayName = 'Select'

export default Select
