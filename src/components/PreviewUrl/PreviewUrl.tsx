import { Props } from './types'
import { encodeObject } from '@/lib'

const PreviewUrl = ({ fields }: Props) => {
  const origin =
    typeof window !== 'undefined' && window.location.origin ? window.location.origin : ''

  const url = `${origin}/api/mock?fields=${encodeObject(fields)}`

  return (
    <div className="mb-4  overflow-x-scroll whitespace-nowrap rounded bg-gray-200 py-3">
      <a href={url} target="_blank" rel="noreferrer">
        {url}
      </a>
    </div>
  )
}

export default PreviewUrl
