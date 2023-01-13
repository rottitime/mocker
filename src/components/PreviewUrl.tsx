'use client'

import { encodeObject } from '@/lib'
import { useMemo } from 'react'
import { Fields } from '@/types'

type Props = {
  fields: Fields[]
}

const PreviewUrl = ({ fields }: Props) => {
  const url = useMemo(() => {
    const origin =
      typeof window !== 'undefined' && window.location.origin
        ? window.location.origin
        : ''

    return origin && `${origin}/api/mock?fields=${encodeObject(fields)}`
  }, [fields])

  console.log('PreviewUrl', { url })

  return (
    <div className="mb-4  overflow-x-scroll whitespace-nowrap rounded bg-gray-200 py-3">
      {url}
      {/* <a href={url} target="_blank" rel="noreferrer">
        {url}
      </a> */}
    </div>
  )
}

export default PreviewUrl
