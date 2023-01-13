import { FC } from 'react'
import { Props } from './types'
import { fieldsToMockJson } from '@/lib/data-test'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import CopyToClipboard from 'react-copy-to-clipboard'

const PreviewMock: FC<Props> = ({ data }) => {
  const text = JSON.stringify(fieldsToMockJson(data), null, 2)
  return (
    <>
      <SyntaxHighlighter language="json" style={dracula} wrapLines>
        {text}
      </SyntaxHighlighter>
      <CopyToClipboard text={text} onCopy={() => alert('Copied')}>
        <button>Copy</button>
      </CopyToClipboard>
    </>
  )
}

export default PreviewMock
