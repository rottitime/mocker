import { FC } from 'react'
import { Props } from './types'
import { encodeObject } from '@/lib'

const PreviewUrl: FC<Props> = ({ fields }) => {
  const url = `${window.location.origin}/api/mock?fields=${encodeObject(fields)}`

  return (
    <a href={url} target="_blank" rel="noreferrer">
      {url}
    </a>
  )
}

export default PreviewUrl
