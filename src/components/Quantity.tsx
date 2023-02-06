'use client'
import { useId, useRef, useState } from 'react'
import Input from './Input'
import Toggle from './Toggle'

type Props = {
  defaultValue?: number
  onChange: (value: number) => void
  error?: string
}

function Quantity({ onChange, error, defaultValue }: Props) {
  const id = useId()
  const inputId = `input_${id}`
  const inputRef = useRef<HTMLInputElement>(null)
  const valueRef = useRef<number>()
  const [checked, setChecked] = useState(false)

  return (
    <>
      <div className="inline-flex items-center gap-5">
        <Toggle
          label="Single object"
          data-testid="input-single"
          onChange={async (e) => {
            const checked = e.currentTarget.checked
            onChange(checked ? 0 : parseInt(inputRef.current?.value || '0'))
            setChecked(checked)
          }}
        />

        <div className="mb-2  flex  grow items-center before:mr-3 before:h-5 before:border-l">
          <Input
            labelProps={{ className: 'mr-2 inline-flex items-center' }}
            label="Rows"
            type="number"
            max={1000}
            id={inputId}
            error={error}
            data-testid="input-quantity"
            aria-label="Name"
            placeholder="e.g. 10"
            defaultValue={defaultValue}
            className="max-w-xs"
            disabled={checked}
            ref={inputRef}
            onChange={(e) => {
              valueRef.current = parseInt(e.currentTarget.value)
              !checked && onChange(valueRef.current)
            }}
          />
        </div>
      </div>
    </>
  )
}

export default Quantity
