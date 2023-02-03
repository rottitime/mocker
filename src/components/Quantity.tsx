'use client'
import { useId, useRef, useState } from 'react'

type Props = {
  defaultValue?: number
  onChange: (value: number) => void
}

function Quantity({ onChange, defaultValue }: Props) {
  const id = useId()
  const checkboxId = `single_${id}`
  const inputRef = useRef<HTMLInputElement>(null)
  const valueRef = useRef<number>()
  const [checked, setChecked] = useState(false)

  return (
    <>
      <label htmlFor={checkboxId}></label>
      <input
        type="checkbox"
        id={checkboxId}
        data-testid="input-single"
        onChange={async (e) => {
          const checked = e.currentTarget.checked
          onChange(checked ? 0 : parseInt(inputRef.current?.value || '0'))
          setChecked(checked)
        }}
      />

      <input
        type="number"
        ref={inputRef}
        defaultValue={defaultValue}
        disabled={checked}
        data-testid="input-quantity"
        onChange={(e) => {
          valueRef.current = parseInt(e.currentTarget.value)
          !checked && onChange(valueRef.current)
        }}
      />
    </>
  )
}

export default Quantity
