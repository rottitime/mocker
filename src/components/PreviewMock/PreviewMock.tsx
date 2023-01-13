import { FC } from 'react'
import { Props } from './types'
import { fieldsToMockJson } from '@/lib/data-test'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const PreviewMock: FC<Props> = ({ data }) => (
  <SyntaxHighlighter language="json" style={dracula} wrapLines>
    {JSON.stringify(fieldsToMockJson(data), null, 2)}
  </SyntaxHighlighter>
)

export default PreviewMock
