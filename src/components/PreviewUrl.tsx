'use client'
import { useUiContext } from '@/context/UiContext'
import { CopyButton } from '@/components'

const PreviewUrl = () => {
  const { url } = useUiContext()

  return (
    <div className="relative  break-words rounded bg-gray-200 py-3 px-2">
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
