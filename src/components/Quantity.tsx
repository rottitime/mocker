'use client'
import { useId, useRef, useState } from 'react'
import Input from './Input'
import Toggle from './Toggle'

type Props = {
  defaultValue?: number
  onChange: (value: number) => void
}

function Quantity({ onChange, defaultValue }: Props) {
  const id = useId()
  const inputId = `input_${id}`
  const inputRef = useRef<HTMLInputElement>(null)
  const valueRef = useRef<number>()
  const [checked, setChecked] = useState(false)

  return (
    <div className="flex items-center gap-5">
      <Toggle
        label="Single object"
        data-testid="input-single"
        onChange={async (e) => {
          const checked = e.currentTarget.checked
          onChange(checked ? 0 : parseInt(inputRef.current?.value || '0'))
          setChecked(checked)
        }}
      />

      <div className="vertical-form-block">
        <label htmlFor={inputId} className="vertical-label">
          Rows
        </label>

        <Input
          type="number"
          id={inputId}
          data-testid="input-quantity"
          aria-label="Name"
          placeholder="e.g. 10"
          defaultValue={defaultValue}
          disabled={checked}
          ref={inputRef}
          onChange={(e) => {
            valueRef.current = parseInt(e.currentTarget.value)
            !checked && onChange(valueRef.current)
          }}
          // error={errors.fields?.[index]?.field_name && 'This is a required field'}
        />
      </div>
    </div>
  )
}

export default Quantity
