'use client'
import { ChangeEventHandler, useId, useState } from 'react'

type Props = {
  onChange: ChangeEventHandler<HTMLInputElement>
}

function Quantity({ ...props }: Props) {
  const id = useId()
  const checkboxId = `single_${id}`

  const [checked, setChecked] = useState(false)

  return (
    <>
      <label htmlFor={checkboxId}></label>
      <input
        type="checkbox"
        id={checkboxId}
        data-testid="input-single"
        onChange={(e) => {
          setChecked(e.currentTarget.checked)
        }}
      />

      <input type="number" disabled={checked} data-testid="input-quantity" {...props} />
    </>
  )
}

export default Quantity
