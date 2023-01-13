'use client'
import { encodeObject } from '@/lib'
import { useMemo } from 'react'
import { useUiContext } from '@/context/UiContext'

const PreviewUrl = () => {
  const { fields } = useUiContext()

  const url = useMemo(() => {
    const origin =
      typeof window !== 'undefined' && window.location.origin
        ? window.location.origin
        : ''
    return origin && fields && `${origin}/api/mock?fields=${encodeObject(fields)}`
  }, [fields])

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
