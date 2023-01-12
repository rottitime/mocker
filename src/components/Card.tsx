import { ReactNode } from 'react'

type Props = { children: ReactNode }

function Card({ children }: Props) {
  return <div className="card rounded bg-white p-6 shadow">{children}</div>
}

export default Card
