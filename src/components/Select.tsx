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
          ref={ref}
          className="w-full  rounded   bg-slate-100 px-3.5 py-2 text-black outline-none transition-all duration-100"
        >
          {placeholder && (
            <option value="" disabled selected>
              {placeholder}
            </option>
          )}

          {filteredOptions.map(({ value, name }, i) => (
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
