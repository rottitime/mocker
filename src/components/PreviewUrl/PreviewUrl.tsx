import { Props } from './types'
import { encodeObject } from '@/lib'

const PreviewUrl = ({ fields }: Props) => {
  const url = `${window.location.origin}/api/mock?fields=${encodeObject(fields)}`

  return (
    <div className="mb-4  overflow-x-scroll whitespace-nowrap rounded bg-gray-200 py-3">
      <a href={url} target="_blank" rel="noreferrer">
        {url}
      </a>
    </div>
  )
}

export default PreviewUrl
