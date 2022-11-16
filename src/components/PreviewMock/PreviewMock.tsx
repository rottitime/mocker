import { FC } from 'react'
import { Props } from './types'
import { fieldsToMockJson } from '@/lib/data-test'

const PreviewMock: FC<Props> = ({ data }) => (
  <code>{JSON.stringify(fieldsToMockJson(data))}</code>
)

export default PreviewMock
