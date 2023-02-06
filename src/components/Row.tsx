import { DetailedHTMLProps, HTMLAttributes } from 'react'

type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

function Row({ className = '', ...props }: Props) {
  return <div {...props} className={`p-3 ${className}`} />
}

export default Row
