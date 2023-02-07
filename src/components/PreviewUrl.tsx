'use client'
import { useUiContext } from '@/context/UiContext'
import { CopyButton } from '@/components'

const PreviewUrl = () => {
  const { params } = useUiContext()
  const origin =
    typeof window !== 'undefined' && window.location.origin ? window.location.origin : ''
  const url = origin && params && `${origin}/api/mock?${params}`

  return (
    <div className="relative  mb-4  break-words rounded bg-gray-200 py-3 px-2">
      {!!url && (
        <a href={url} target="_blank" rel="noreferrer">
          {url}
        </a>
      )}

      <div className="absolute top-2 right-2">
        <CopyButton text={url} />
      </div>
    </div>
  )
}

export default PreviewUrl
