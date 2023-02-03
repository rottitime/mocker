'use client'
import { ChangeEventHandler, useId, useRef, useState } from 'react'

type Props = {
  value: number
  onChange: (value: number) => void
}

function Quantity({ onChange, value, ...props }: Props) {
  const id = useId()
  const checkboxId = `single_${id}`
  const inputRef = useRef<HTMLInputElement>()

  console.log({ props })

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
          const value = checked ? 0 : parseInt(inputRef.current?.value || '0') :
          // checked ? onChange(0) : inputRef.current?.value:
          onChange(value)
          setChecked(e.currentTarget.checked)
        }}
      />

      <input
        type="number"
        ref={inputRef}
        defaultValue={value}
        disabled={checked}
        data-testid="input-quantity"
        onChange={(e) => {
          console.log('started input onChange')
          !checked && onChange(parseInt(e.currentTarget.value))
        }}
      />
    </>
  )
}

export default Quantity
