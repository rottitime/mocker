'use client'

import { useId } from 'react'

function Quantity() {
  const id = useId()
  const checkboxId = `single_${id}`

  return (
    <>
      <label htmlFor={checkboxId}></label>
      <input type="checkbox" id={checkboxId} data-testid="input-single" />
    </>
  )
}

export default Quantity
