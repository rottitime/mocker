import { ReactNode } from 'react'
import { LoadingIcon } from '@/components'

type Props = {
  children?: ReactNode
}

function Loading({ children }: Props) {
  return (
    <div role="status" className="relative min-h-[80px] ">
      <div className=" absolute z-10 h-full w-full overflow-hidden bg-white bg-opacity-80 transition-all will-change-auto" />

      <div className="max absolute z-20 flex h-full max-h-[calc(50vh+100px)] w-full items-center justify-center transition-all will-change-auto">
        <LoadingIcon
          aria-hidden="true"
          className=" z-20 mr-2 inline h-10 w-10  "
          viewBox="0 0 100 101"
          fill="none"
        />
      </div>

      <span className="sr-only">Loading...</span>
      {children}
    </div>
  )
}

export default Loading
