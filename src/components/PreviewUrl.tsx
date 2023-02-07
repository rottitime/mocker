'use client'
import { useUiContext } from '@/context/UiContext'

const PreviewUrl = () => {
  const { params } = useUiContext()
  const origin =
    typeof window !== 'undefined' && window.location.origin ? window.location.origin : ''
  const url = origin && params && `${origin}/api/mock?${params}`

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
