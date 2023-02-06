'use client'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import { fieldsToMockJson } from '@/lib/data'
import { CopyButton } from '@/components'
import { useUiContext } from '@/context/UiContext'

const PreviewMock = () => {
  const { fields, rows } = useUiContext()
  const text = fields && JSON.stringify(fieldsToMockJson(fields, rows), null, 2)

  return (
    <div className="relative">
      {!!text && (
        <>
          <SyntaxHighlighter language="json" style={dracula} wrapLines>
            {text}
          </SyntaxHighlighter>
          <div className="absolute top-2 right-2">
            <CopyButton text={text} />
          </div>
        </>
      )}
    </div>
  )
}

export default PreviewMock
