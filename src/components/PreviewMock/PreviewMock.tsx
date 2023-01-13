import SyntaxHighlighter from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { Props } from './types'
import { fieldsToMockJson } from '@/lib/data-test'
import { CopyButton } from '@/components'

const PreviewMock = ({ data }: Props) => {
  const text = JSON.stringify(fieldsToMockJson(data), null, 2)

  return (
    <div className="relative">
      <SyntaxHighlighter language="json" style={dracula} wrapLines>
        {text}
      </SyntaxHighlighter>
      <div className="absolute top-2 right-2">
        <CopyButton text={text} />
      </div>
    </div>
  )
}

export default PreviewMock
