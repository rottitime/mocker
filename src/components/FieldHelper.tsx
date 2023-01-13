import { ReactNode } from 'react'

type Props = {
  type: 'error'
  children: ReactNode
}

function FieldHelper({ children }: Props) {
  return <div className="text-sm text-red-700">{children}</div>
}

export default FieldHelper
