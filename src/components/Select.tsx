import { forwardRef, SelectHTMLAttributes } from 'react'

type Options = {
  value?: string
  name: string
}

type Props = {
  options: Options[] | string[]
  error?: string
} & SelectHTMLAttributes<HTMLSelectElement>

const Select = forwardRef<HTMLSelectElement, Props>(
  ({ options, error, ...props }, ref) => {
    const filteredOptions: Options[] = options.map((name) =>
      typeof name === 'string' ? { value: name, name } : name
    )

    return (
      <div>
        <select
          {...props}
          ref={ref}
          className="mb-6 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        >
          {filteredOptions.map(({ value, name }, i) => (
            <option value={value} key={value}>
              {name}
            </option>
          ))}
        </select>
        {!!error && <p>{error}</p>}
      </div>
    )
  }
)

Select.displayName = 'Select'

export default Select
