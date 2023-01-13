'use client'
import { encodeObject } from '@/lib'
import { useUiContext } from '@/context/UiContext'

const PreviewUrl = () => {
  const { fields } = useUiContext()
  const origin =
    typeof window !== 'undefined' && window.location.origin ? window.location.origin : ''
  const url = origin && fields && `${origin}/api/mock?fields=${encodeObject(fields)}`

  return (
    <div className="mb-4  overflow-x-scroll whitespace-nowrap rounded bg-gray-200 py-3">
      {!!url && (
        <a href={url} target="_blank" rel="noreferrer">
          {url}
        </a>
      )}
    </div>
  )
}

export default PreviewUrl
